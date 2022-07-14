/* eslint-disable no-undef */
import { expect } from 'chai'
import dotenv from 'dotenv'
import { decryptPassword, encryptPassword, validateEmail } from '../../util/database-functions.js'
dotenv.config({ path: 'config/.env' })

describe('Test encrypt function', () => {
  it('Should encrypt a password ', async () => {
    let pw = 'test'
    pw = await encryptPassword(pw)
    expect(pw).not.to.equal('test')
  })

  it('should decrypt password and return true if they are equal', async () => {
    let pw = 'test'
    pw = await encryptPassword(pw)
    expect(pw).not.to.equal('test')

    const checkPW = await decryptPassword(pw, 'test')
    expect(checkPW).to.equal(true)
  })

  it('should decrypt password and return false if they are not equal', async () => {
    let pw = ''
    pw = await encryptPassword(pw)
    expect(pw).not.to.equal('test')

    const checkPW = await decryptPassword(pw, 'test')
    expect(checkPW).to.equal(false)
  })
})

describe('Test validate mail function', () => {
  it('should return true for valid email', async () => {
    const email = await validateEmail('something@someting.com')
    expect(email).to.equal(true)
  })

  it('should return false for mail without @ or domain', async () => {
    const email = await validateEmail('something')
    expect(email).to.equal(false)
  })

  it('should return false for mail with two @', async () => {
    const email = await validateEmail('something@@something.com')
    expect(email).to.equal(false)
  })

  it('should return false for mail with  mail server', async () => {
    const email = await validateEmail('something@.com')
    expect(email).to.equal(false)
  })

  it('should return false for mail with no name', async () => {
    const email = await validateEmail('@something.com')
    expect(email).to.equal(false)
  })

  it('should return false for mail with no name or mail server', async () => {
    const email = await validateEmail('@.com')
    expect(email).to.equal(false)
  })

  it('should return false for empty mail', async () => {
    const email = await validateEmail('')
    expect(email).to.equal(false)
  })
})
