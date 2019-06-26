const assert = require('assert');
const { Jsonix } = require('jsonix');
const { business_loan } = require('../CLF_20190626_mac/business_loan');
const { creditcard_loan } = require('../CLF_20190626_mac/creditcard_loan');
const { mortgage_loan } = require('../CLF_20190626_mac/mortgage_loan');
const { personal_loan } = require('../CLF_20190626_mac/personal_loan');
const { vehicle_loan } = require('../CLF_20190626_mac/vehicle_loan');
const { xpress_loan } = require('../CLF_20190626_mac/xpress_loan');

describe('LoansPQ CLF on Mac', function() {
    it('should be able to create a business_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([business_loan]);
        });
    });
    it('should be able to create a creditcard_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([creditcard_loan]);
        });
    });
    it('should be able to create a mortgage_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([mortgage_loan]);
        });
    });
    it('should be able to create a personal_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([personal_loan]);
        });
    });
    it('should be able to create a vehicle_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([vehicle_loan]);
        });
    });
    it('should be able to create a xpress_loan context', function() {
        assert.doesNotThrow(() => {
            const context = new Jsonix.Context([xpress_loan]);
        });
    });
});
