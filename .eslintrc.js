module.exports = {
  "extends": [
    "react-app",
  ],
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "off"
    ],
    "no-empty": [
      "error",
      { "allowEmptyCatch": true }
    ],
    "react/prop-types": [
      "warn",
      "always"
    ]
  }
};