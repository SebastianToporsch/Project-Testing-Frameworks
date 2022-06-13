var sinon = require("sinon");
var functions = require("../../../build/util/database-functions.js")

var test = {
    testFunction: function test(param1, param2) {
        return param1 + " " + param2;
    }
}

describe('Test if sinon works', () => {
    let testSpy = sinon.spy(test, "testFunction")
    let testVariable1 = "This is a"
    let testVariable2 = "test"

    it('should test if spy was never called', () => {
        sinon.assert.notCalled(testSpy)
    });

    it('should test if spy was called once', () => {
        test.testFunction(testVariable1)
        sinon.assert.calledOnceWithExactly(testSpy, testVariable1)
    });

    it('should test if spy was called twice and with the correct parameters', () => {
        test.testFunction(testVariable1)
        sinon.assert.calledTwice(testSpy)
        sinon.assert.calledWith(testSpy, testVariable1)
    });

    it('should test if spy called thrice with wrong parameters', () => {
        test.testFunction(testVariable1)
        sinon.assert.calledThrice(testSpy)
        sinon.assert.neverCalledWith(testSpy, "test")
    });

    it('should test if spy called four times with two parameters', () => {
        test.testFunction(testVariable1, testVariable2)
        sinon.assert.callCount(testSpy, 4);
        sinon.assert.calledWithExactly(testSpy, testVariable1, testVariable2)
    });

    it('should test if spy called five times with two parameters and one was never used', () => {
        test.testFunction(testVariable1, testVariable2)
        sinon.assert.callCount(testSpy, 5);
        sinon.assert.neverCalledWithMatch(testSpy, testVariable1, "x")
    });

});

describe('Test encryptedPassword', () => {
    let encryptSpy = sinon.spy(functions, "encryptPassword")
    let testPassword = "test123"
    it('should test if encryptPassword gets called', () => {
        sinon.assert.notCalled(encryptSpy)
        functions.encryptPassword(testPassword)
        sinon.assert.calledOnce(encryptSpy)
    });

    it('should test if encryptPassword uses the right parameter', () => {
        functions.encryptPassword(testPassword)
        sinon.assert.calledWithExactly(encryptSpy, testPassword)
    });
    it('should test if encryptPassword uses the wrong parameter', () => {
        functions.encryptPassword(testPassword)
        sinon.assert.neverCalledWith(encryptSpy, "test1234")
    });
    
});

describe('Test decryptPassword', () => {
    let decryptSpy = sinon.spy(functions, "decryptPassword")
    let testPassword = "test123"
    it('should test if decryptPassword gets called', () => {
        sinon.assert.notCalled(decryptSpy)
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
        sinon.assert.calledOnce(decryptSpy)
    });

    it('should test if decryptPassword uses the right parameter', () => {
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
        sinon.assert.calledWithExactly(decryptSpy, encryptedPassword)
    });

    it('should test if decryptPassword uses the wrong parameter', () => {
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
        sinon.assert.neverCalledWithMatch(decryptSpy, "test123")
    });
});

describe('Test validateEmail', () => {
    let validateSpy = sinon.spy(functions, "validateEmail")
    let testEmail = "test@test.at"
    it('should test if validateEmail gets called', () => {
        sinon.assert.notCalled(validateSpy)
        functions.validateEmail(testEmail)
        sinon.assert.calledOnce(validateSpy)
    });

    it('should test if validateEmail uses the right parameter', () => {
        functions.validateEmail(testEmail)
        sinon.assert.calledWithExactly(validateSpy, testEmail)
    });

    it('should test if validateEmail uses the wrong parameter', () => {
        functions.validateEmail(testEmail)
        sinon.assert.neverCalledWith(validateSpy, "test@test1.at")
    });
});
