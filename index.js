module.exports.rules = {
  "no-get-this": (context) => ({
    CallExpression(node) {
      const functionBeingCalledIsGet = node.callee.name === 'get';
      const firstArgumentIsThis = node.arguments.length > 0 && node.arguments[0].type === 'ThisExpression';

      if (functionBeingCalledIsGet && firstArgumentIsThis) {
        context.report({
          node,
          message: "Don't use `get(this, ...)`, use `this.get(...)` instead",
        });
      }
    },
  }),
};
