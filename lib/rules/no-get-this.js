module.exports = {
  meta: {
    docs: {
      description: "disallow usage of Ember.get() on the `this` keyword",
    },
    fixable: "code",
  },

  create(context) {
    function CallExpression(node) {
      const callee = node.callee;
      const firstArgument = node.arguments[0];

      const functionBeingCalledIsGet = callee.name === 'get';
      const firstArgumentIsThis = firstArgument && firstArgument.type === 'ThisExpression';

      if (functionBeingCalledIsGet && firstArgumentIsThis) {
        const sourceCode = context.getSourceCode().getText(node);
        const correctedCode = sourceCode.replace(/get\(\s*this\s*,\s*/, 'this.get(');

        context.report({
          loc: {
            start: callee.loc.start,
            end: firstArgument.loc.end,
          },
          message: "Don't use `get(this, ...)`, use `this.get(...)` instead",
          fix(fixer) {
            return fixer.replaceText(node, correctedCode);
          },
        });
      }
    };

    const parserHooks = { CallExpression: CallExpression };
    return parserHooks;
  },
};
