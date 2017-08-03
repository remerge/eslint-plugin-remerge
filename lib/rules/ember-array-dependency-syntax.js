function isPlural(str) {
    return str.substr(-1) === 's';
}

module.exports = {
    meta: {
        docs: {
            description: "Ensures array notation for ember computed properties",
        },
        fixable: "code",  // or "code" or "whitespace"
    },

    create(context) {
        function CallExpression(node) {
          const callee = node.callee;
          const dependencyNames = node.arguments.slice(0, -1)

          const functionBeingCalledIsComputed = callee.name === 'computed';
            // implicitly checks for missing `.[]` if its plural
          const propertyIndexWithViolation = dependencyNames.findIndex(function(key) {
            return isPlural(key.value);
          });
          const hasViolation = propertyIndexWithViolation !== -1;

          if (functionBeingCalledIsComputed && hasViolation) {
            violatedArgument = node.arguments[propertyIndexWithViolation];
            dependencyName = violatedArgument.value;

            context.report({
              loc: {
                start: callee.loc.start,
                end: violatedArgument.loc.end
              },
              message: "Use " + dependencyName +".[] for dependencies on arrays"
            });
          }
        };

        const parserHooks = { CallExpression: CallExpression };
        return parserHooks;
    }
};
