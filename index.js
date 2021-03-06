
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: ['after-same-name']
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ["mixin", "define-mixin", "extend"]
    }],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-no-empty': true,
    'color-hex-alpha': "never",
    'alpha-value-notation': "percentage",
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': ['always', {
      except: ['after-custom-property', 'first-nested'],
      ignore: ["after-comment"]
    }],
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values']
    }],
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-single-line-max-declarations': 0,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': null,
    'function-calc-no-unspaced-operator': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-quotes': ['always', {
      except: ['empty']
    }],
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': [2, {
      ignore: ['comments']
    }],
    'max-nesting-depth': 2,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-space-after': 'always',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'number-leading-zero': 'always',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': null,
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['appearance']
    }],
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ["after-comment"]
    }],
    'selector-attribute-brackets-space-inside': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '[A-Z][A-Za-z0-9_-]+',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-max-empty-lines': 0,
    'selector-pseudo-element-no-unknown': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
  },
};
