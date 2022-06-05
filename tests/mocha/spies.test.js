var sinon = require("sinon");
var chai = require('chai');

var test = {
    logName: function test(param1, param2) {
        console.log(param1 + " " + param2);
    }
}

describe('Test if sinon works', () => {
    let testSpy = sinon.spy(test, "logName")
    let testVariable1 = "This is a"
    let testVariable2 = "test"

    it('should test if spy was never called', () => {
        sinon.assert.notCalled(testSpy)
    });

    it('should test if spy was called once', () => {
        test.logName(testVariable1)
        sinon.assert.calledOnce(testSpy)
    });

    it('should test if spy was called twice and with the correct parameters', () => {
        test.logName(testVariable1)
        sinon.assert.calledTwice(testSpy)
        sinon.assert.calledWith(testSpy, testVariable1)
    });

    it('should test if spy called thrice with wrong parameters', () => {
        test.logName(testVariable1)
        sinon.assert.calledThrice(testSpy)
        sinon.assert.neverCalledWith(testSpy, "test")
    });

    it('should test if spy called four times with two parameters', () => {
        test.logName(testVariable1, testVariable2)
        sinon.assert.callCount(testSpy, 4);
        sinon.assert.calledWithExactly(testSpy,testVariable1,testVariable2)
    });

    it('should test if spy called five times with two parameters and one was never used', () => {
        test.logName(testVariable1, testVariable2)
        sinon.assert.callCount(testSpy, 5);
        sinon.assert.neverCalledWithMatch(testSpy, testVariable1, "x")
    });
    
});