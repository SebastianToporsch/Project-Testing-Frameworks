require('dotenv').config({ path: 'config/.env' });
const { decryptPassword, encryptPassword, validateEmail } = require("../../util/database-functions")


describe('Test encrypt function', () => {
  it('Should encrypt a password ', async () => {
    var pw = "test";
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");
  });

  it('should decrypt password and return true if they are equal', async () => {
    let pw = "test";
    let checkPW;
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");

    checkPW = await decryptPassword(pw, "test");
    expect(checkPW).toBe(true);
  });

  it('should decrypt password and return false if they are not equal', async () => {
    let pw = "";
    let checkPW;
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");

    checkPW = await decryptPassword(pw, "test");
    expect(checkPW).toBe(false);
  });

});

describe('Test validate mail function', () => {
  it('should return true for valid email', async () => {
    let email = await validateEmail("something@someting.com")
    expect(email).toBe(true);
  });

  it('should return false for mail without @ or domain', async () => {
    let email = await validateEmail("something");
    expect(email).toBe(false);
  });

  it('should return false for mail with two @', async () => {
    let email = await validateEmail("something@@something.com");
    expect(email).toBe(false);
  });

  it('should return false for mail with  mail server', async () => {
    let email = await validateEmail("something@.com");
    expect(email).toBe(false);
  });


  it('should return false for mail with no name', async () => {
    let email = await validateEmail("@something.com");
    expect(email).toBe(false);
  });

  it('should return false for mail with no name or mail server', async () => {
    let email = await validateEmail("@.com");
    expect(email).toBe(false);
  });


  it('should return false for empty mail', async () => {
    let email = await validateEmail("");
    expect(email).toBe(false);
  });

});