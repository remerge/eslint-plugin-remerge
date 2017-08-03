/**
 * @fileoverview disallow usage of Ember.get() on the `this` keyword
 * @author Mike Szörnyi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var rule = require("../../../lib/rules/no-get-this"),

    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var ruleTester = new RuleTester();
ruleTester.run("no-get-this", rule, {

    valid: [
        "this.get('foo')"
    ],

    invalid: [
        {
            code: "get(this, 'foo')",
            errors: [{
                message: "Don't use `get(this, ...)`, use `this.get(...)` instead"
            }]
        }
    ]
});
