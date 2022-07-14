/* eslint-disable no-undef */
import sinon, { assert } from 'sinon'
import functions from '../../../util/database-functions.js'

const test = {
  testFunction: function test (param1, param2) {
    return param1 + ' ' + param2
  }
}

describe('Test if sinon works', () => {
  const testSpy = sinon.spy(test, 'testFunction')
  const testVariable1 = 'This is a'
  const testVariable2 = 'test'

  it('should test if spy was never called', () => {
    assert.notCalled(testSpy)
  })

  it('should test if spy was called once', () => {
    test.testFunction(testVariable1)
    assert.calledOnceWithExactly(testSpy, testVariable1)
  })

  it('should test if spy was called twice and with the correct parameters', () => {
    test.testFunction(testVariable1)
    assert.calledTwice(testSpy)
    assert.calledWith(testSpy, testVariable1)
  })

  it('should test if spy called thrice with wrong parameters', () => {
    test.testFunction(testVariable1)
    assert.calledThrice(testSpy)
    assert.neverCalledWith(testSpy, 'test')
  })

  it('should test if spy called four times with two parameters', () => {
    test.testFunction(testVariable1, testVariable2)
    assert.callCount(testSpy, 4)
    assert.calledWithExactly(testSpy, testVariable1, testVariable2)
  })

  it('should test if spy called five times with two parameters and one was never used', () => {
    test.testFunction(testVariable1, testVariable2)
    assert.callCount(testSpy, 5)
    assert.neverCalledWithMatch(testSpy, testVariable1, 'x')
  })
})

describe('Test encryptPassword', () => {
  const encryptSpy = sinon.spy(functions, 'encryptPassword')
  const testPassword = 'test123'
  it('should test if encryptPassword gets called', () => {
    sinon.assert.notCalled(encryptSpy)
    functions.encryptPassword(testPassword)
    sinon.assert.calledOnce(encryptSpy)
  })

  it('should test if encryptPassword uses the right parameter', () => {
    functions.encryptPassword(testPassword)
    sinon.assert.calledWithExactly(encryptSpy, testPassword)
  })
  it('should test if encryptPassword uses the wrong parameter', () => {
    functions.encryptPassword(testPassword)
    sinon.assert.neverCalledWith(encryptSpy, 'test1234')
  })
})

describe('Test decryptPassword', () => {
  const decryptSpy = sinon.spy(functions, 'decryptPassword')
  const testPassword = 'test123'
  it('should test if decryptPassword gets called', () => {
    sinon.assert.notCalled(decryptSpy)
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    sinon.assert.calledOnce(decryptSpy)
  })

  it('should test if decryptPassword uses the right parameter', () => {
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    sinon.assert.calledWithExactly(decryptSpy, encryptedPassword)
  })

  it('should test if decryptPassword uses the wrong parameter', () => {
    const encryptedPassword = functions.encryptPassword(testPassword)
    functions.decryptPassword(encryptedPassword)
    sinon.assert.neverCalledWithMatch(decryptSpy, 'test123')
  })
})

describe('Test validateEmail', () => {
  const validateSpy = sinon.spy(functions, 'validateEmail')
  const testEmail = 'test@test.at'
  it('should test if validateEmail gets called', () => {
    sinon.assert.notCalled(validateSpy)
    functions.validateEmail(testEmail)
    sinon.assert.calledOnce(validateSpy)
  })

  it('should test if validateEmail uses the right parameter', () => {
    functions.validateEmail(testEmail)
    sinon.assert.calledWithExactly(validateSpy, testEmail)
  })

  it('should test if validateEmail uses the wrong parameter', () => {
    functions.validateEmail(testEmail)
    sinon.assert.neverCalledWith(validateSpy, 'test@test1.at')
  })
})
