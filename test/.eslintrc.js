module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype"
  ],
  "env": {
      "mocha": true,
      "es6": true,
      "node": true
  },
  rules: {
    "prefer-arrow-callback": "off",
    "func-names": "off"
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
