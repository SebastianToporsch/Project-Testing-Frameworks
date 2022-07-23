/* eslint-disable no-undef */
import dotenv from 'dotenv'
import { decryptPassword, encryptPassword, validateEmail } from '../../../util/database-functions.js'
import flush from 'flush-cache'
dotenv.config({ path: 'config/.env' })

beforeEach(function () { flush() })

describe('Test encrypt function', () => {
  it('Should encrypt a password ', async () => {
    let pw = 'test'
    pw = await encryptPassword(pw)
    expect(pw).not.toBe('test')
  })

  it('should decrypt password and return true if they are equal', async () => {
    let pw = 'test'
    pw = await encryptPassword(pw)
    expect(pw).not.toBe('test')

    const checkPW = await decryptPassword(pw, 'test')
    expect(checkPW).toBe(true)
  })

  it('should decrypt password and return false if they are not equal', async () => {
    let pw = ''
    pw = await encryptPassword(pw)
    expect(pw).not.toBe('test')
    const checkPW = await decryptPassword(pw, 'test')
    expect(checkPW).toBe(false)
  })
})

describe('Test validate mail function', () => {
  it('should return true for valid email', async () => {
    const email = await validateEmail('something@someting.com')
    expect(email).toBe(true)
  })

  it('should return false for mail without @ or domain', async () => {
    const email = await validateEmail('something')
    expect(email).toBe(false)
  })

  it('should return false for mail with two @', async () => {
    const email = await validateEmail('something@@something.com')
    expect(email).toBe(false)
  })

  it('should return false for mail with  mail server', async () => {
    const email = await validateEmail('something@.com')
    expect(email).toBe(false)
  })

  it('should return false for mail with no name', async () => {
    const email = await validateEmail('@something.com')
    expect(email).toBe(false)
  })

  it('should return false for mail with no name or mail server', async () => {
    const email = await validateEmail('@.com')
    expect(email).toBe(false)
  })

  it('should return false for empty mail', async () => {
    const email = await validateEmail('')
    expect(email).toBe(false)
  })
})
