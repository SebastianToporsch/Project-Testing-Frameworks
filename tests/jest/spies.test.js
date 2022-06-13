var functions = require("../../build/util/database-functions.js")

var test = {
    testFunction: function test(param1, param2) {
        console.log(param1 + " " + param2);
    }
}

describe('Test if jest works', () => {
    let spy = jest.spyOn(test, 'testFunction');
    let testVariable1 = "This is a"
    let testVariable2 = "test"

    it('should test if spy was never called', () => {
        expect(spy).toHaveBeenCalledTimes(0)
        
    });

    it('should test if spy was called once with the correct parameters', () => {
        test.testFunction(testVariable1)
        expect(spy).toHaveBeenCalledWith(testVariable1)
        expect(spy).toHaveBeenCalledTimes(1)
    });

    it('should test if spy was called twice and with the correct parameters', () => {
        test.testFunction(testVariable1)
        expect(spy).toHaveBeenCalledWith(testVariable1)
        expect(spy).toHaveBeenCalledTimes(2)
    });

    it('should test if spy called thrice with wrong parameters', () => {
        test.testFunction(testVariable1)
        expect(spy).not.toHaveBeenCalledWith(testVariable2)
        expect(spy).toHaveBeenCalledTimes(3)
        
    });

    it('should test if spy called four times with two parameters', () => {
        test.testFunction(testVariable1, testVariable2)
        expect(spy).toHaveBeenCalledWith(testVariable1,testVariable2)
        expect(spy).toHaveBeenCalledTimes(4)
    });

    it('should test if spy called five times with two parameters and one was never used', () => {
        test.testFunction(testVariable1, testVariable2)
        expect(spy).not.toHaveBeenCalledWith(testVariable1,testVariable2,"x")
        expect(spy).toHaveBeenCalledTimes(5)
    });
});

describe('Test encryptedPassword', () => {
    let testPassword = "test123"
    it('should test if encryptPassword gets called', () => {
        functions.encryptPassword(testPassword)
    });

    it('should test if encryptPassword uses the right parameter', () => {
        functions.encryptPassword(testPassword)
    });
    it('should test if encryptPassword uses the wrong parameter', () => {
        functions.encryptPassword(testPassword)
    });

});

describe('Test decryptPassword', () => {
    let testPassword = "test123"
    it('should test if decryptPassword gets called', () => {
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
    });

    it('should test if decryptPassword uses the right parameter', () => {
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
    });

    it('should test if decryptPassword uses the wrong parameter', () => {
        let encryptedPassword = functions.encryptPassword(testPassword)
        functions.decryptPassword(encryptedPassword)
    });
});

describe('Test validateEmail', () => {
    let testEmail = "test@test.at"
    it('should test if validateEmail gets called', () => {
        functions.validateEmail(testEmail)
    });

    it('should test if validateEmail uses the right parameter', () => {
        functions.validateEmail(testEmail)
    });

    it('should test if validateEmail uses the wrong parameter', () => {
        functions.validateEmail(testEmail)
    });
});
