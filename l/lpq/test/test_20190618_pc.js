const assert = require('assert');
const { Jsonix } = require('jsonix');
const { business_loan } = require('../CLF_20190618_pc/business_loan');
const { creditcard_loan } = require('../CLF_20190618_pc/creditcard_loan');
const { mortgage_loan } = require('../CLF_20190618_pc/mortgage_loan');
const { personal_loan } = require('../CLF_20190618_pc/personal_loan');
const { vehicle_loan } = require('../CLF_20190618_pc/vehicle_loan');
const { xpress_loan } = require('../CLF_20190618_pc/xpress_loan');

describe('LoansPQ CLF on PC', function() {
    describe(`java version "1.8.0_202" 
    Java(TM) SE Runtime Environment (build 1.8.0_202-b08) 
    Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)`, function() {
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
});
