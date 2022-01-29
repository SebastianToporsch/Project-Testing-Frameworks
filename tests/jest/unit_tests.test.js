const request = require('superagent');
require('dotenv').config({ path: 'config/.env' });
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`
const {decryptPassword, encryptPassword} = require("../../build/util/database-functions")


describe('Name of the group',  () => {
  it('Should encrypt a password ', async() => {
    var pw = "test";
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");
  });

  it('should decrypt password and return true if they are equal', async () => {
    let pw = "test";
    let checkPW;
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");

    checkPW = await decryptPassword(pw,"test");
    expect(checkPW).toBe(true);
  });

  it('should decrypt password and return false if they are not equal', async () => {
    let pw = "";
    let checkPW;
    pw = await encryptPassword(pw);
    expect(pw).not.toBe("test");

    checkPW = await decryptPassword(pw,"test");
    expect(checkPW).toBe(false);
  });
});