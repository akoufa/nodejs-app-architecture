module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  plugins: ['flowtype'],
  env: {
    es6: true,
    node: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
