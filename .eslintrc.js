module.exports = {
  "extends": [
    "react-app",
  ],
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],
    "id-length": [
      "error",
      {
        "max": 30,
        "properties": "never",
        "exceptions": [
          "i",
          "j",
          "k",
          "e"
        ]
      }
    ],

    "import/no-mutable-exports": "error",

    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-cap": [
      "error",
      {
        "capIsNew": false
      }
    ],
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-console": [
      "warn"
    ],
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-else-return": [
      "error",
      {
        "allowElseIf": true
      }
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-func-assign": "error",
    "no-loop-func": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-unneeded-ternary": "error",
    "no-useless-constructor": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "warn",
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true
      }
    ],
    "prefer-rest-params": "error",
    "prefer-template": "warn",

    "react/jsx-boolean-value": [
      "warn",
      "always"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      "line-align"
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-tag-spacing": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error"
    ],
    "react/no-multi-comp": "error",
    "react/no-string-refs": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": "error",
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "spaced-comment": [
      "error",
      "always"
    ],
    "template-curly-spacing": "error"
  }
};