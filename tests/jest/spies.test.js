/* eslint-disable no-undef */
import flush from 'flush-cache'
const functions = require('../../util/database-functions.js')

// flush cache
beforeEach(function () {
  flush()
})

const test = {
  testFunction: function test (param1, param2) {
    return param1 + ' ' + param2
  }
}

describe('Test if jest works', () => {
  const testSpy = jest.spyOn(test, 'testFunction')
  const testVariable1 = 'This is a'
  const testVariable2 = 'test'

  it('should test if spy was never called', () => {
    expect(testSpy).not.toHaveBeenCalled()
  })

  it('should test if spy was called once with the correct parameters', () => {
    test.testFunction(testVariable1)
    expect(testSpy).toHaveBeenCalledWith(testVariable1)
    expect(testSpy).toHaveBeenCalledTimes(1)
  })

  it('should test if spy was called twice and with the correct parameters', () => {
    test.testFunction(testVariable1)
    expect(testSpy).toHaveBeenCalledWith(testVariable1)
    expect(testSpy).toHaveBeenCalledTimes(2)
  })

  it('should test if spy called thrice with wrong parameters', () => {
    test.testFunction(testVariable1)
    expect(testSpy).not.toHaveBeenCalledWith(testVariable2)
    expect(testSpy).toHaveBeenCalledTimes(3)
  })

  it('should test if spy called four times with two parameters', () => {
    test.testFunction(testVariable1, testVariable2)
    expect(testSpy).toHaveBeenCalledWith(testVariable1, testVariable2)
    expect(testSpy).toHaveBeenCalledTimes(4)
  })

  it('should test if spy called five times with two parameters and one was never used', () => {
    test.testFunction(testVariable1, testVariable2)
    expect(testSpy).not.toHaveBeenCalledWith(testVariable1, testVariable2, 'x')
    expect(testSpy).toHaveBeenCalledTimes(5)
  })
})

describe('Test encryptPassword', () => {
  const encryptSpy = jest.spyOn(functions, 'encryptPassword')
  const testPassword = 'test123'
  it('should test if encryptPassword gets called', () => {
    expect(encryptSpy).not.toHaveBeenCalled()
    functions.encryptPassword(testPassword)
    expect(encryptSpy).toHaveBeenCalledTimes(1)
  })

  it('should test if encryptPassword uses the right parameter', () => {
    functions.encryptPassword(testPassword)
    expect(encryptSpy).toHaveBeenCalledWith(testPassword)
  })
  it('should test if encryptPassword uses the wrong parameter', () => {
    functions.encryptPassword(testPassword)
    expect(encryptSpy).not.toHaveBeenCalledWith('test')
  })
})

describe('Test decryptPassword', () => {
  const decryptSpy = jest.spyOn(functions, 'decryptPassword')
  const testPassword = 'test123'
  it('should test if decryptPassword gets called', () => {
    expect(decryptSpy).not.toHaveBeenCalled()
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    expect(decryptSpy).toHaveBeenCalledTimes(1)
  })

  it('should test if decryptPassword uses the right parameter', () => {
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    expect(decryptSpy).toHaveBeenCalledWith(encryptedPassword)
  })

  it('should test if decryptPassword uses the wrong parameter', () => {
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    expect(decryptSpy).not.toHaveBeenCalledWith('test')
  })
})

describe('Test validateEmail', () => {
  const validateSpy = jest.spyOn(functions, 'validateEmail')
  const testEmail = 'test@test.at'
  it('should test if validateEmail gets called', () => {
    expect(validateSpy).not.toHaveBeenCalled()
    functions.validateEmail(testEmail)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should test if validateEmail uses the right parameter', () => {
    functions.validateEmail(testEmail)
    expect(validateSpy).toHaveBeenCalledWith(testEmail)
  })

  it('should test if validateEmail uses the wrong parameter', () => {
    functions.validateEmail(testEmail)
    expect(validateSpy).not.toHaveBeenCalledWith('test')
  })
})
