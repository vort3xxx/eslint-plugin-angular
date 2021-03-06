'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../rules/typecheck-array');
var RuleTester = require('eslint').RuleTester;
var commonFalsePositives = require('./utils/commonFalsePositives');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var eslintTester = new RuleTester();
eslintTester.run('typecheck-array', rule, {
    valid: [
        'angular.isArray([])'
    ].concat(commonFalsePositives),
    invalid: [
        {code: 'Object.prototype.toString.call([]) === "[object Array]"', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: 'function name(){return variable === "[object Array]";}', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: '"[object Array]" === Object.prototype.toString.call([])', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: 'variable === "[object Array]"', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: '"[object Array]" === variable', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: 'Object.prototype.toString.call([]) !== "[object Array]"', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: '"[object Array]" !== typeof []', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: 'variable !== "[object Array]"', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: '"[object Array]" !== variable', errors: [{message: 'You should use the angular.isArray method'}]},
        {code: 'Array.isArray(variable)', errors: [{message: 'You should use the angular.isArray method'}]}
    ]
});
