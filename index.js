const noGetThis = require('./lib/rules/no-get-this');
const emberArrayDependencySyntax = require('./lib/rules/ember-array-dependency-syntax');

module.exports.rules = {
  "no-get-this": noGetThis,
  "ember-array-dependency-syntax": emberArrayDependencySyntax,
};
