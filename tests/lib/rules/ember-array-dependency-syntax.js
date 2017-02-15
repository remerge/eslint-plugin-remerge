/**
 * @fileoverview Ensures array notation for ember computed properties
 * @author Mike Szörnyi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var rule = require("../../../lib/rules/ember-array-dependency-syntax"),

    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var ruleTester = new RuleTester();
ruleTester.run("ember-array-dependency-syntax", rule, {

    valid: [
        "computed('foos.[]', (foos))",
        "computed('foos.[]', 'bars.[]', (foos))",
        "computed(function() {})",
        "computed()",
    ],

    invalid: [
        {
            code: "computed('foos', (foos))",
            errors: [{
                message: "Use foos.[] for dependencies on arrays"
            }]
        },
        {
            code: "computed('foos.[]', 'bars', (foos))",
            errors: [{
                message: "Use bars.[] for dependencies on arrays"
            }]
        }
    ]
});
