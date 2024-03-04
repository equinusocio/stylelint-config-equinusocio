module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-gamut', '@stylistic/stylelint-plugin'],
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: ['after-same-name'],
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'define-mixin', 'extend', 'layer'],
    }],
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-alpha': 'never',
    'alpha-value-notation': 'percentage',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': ['always', {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment'],
    }],
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    }],
    'declaration-block-single-line-max-declarations': 0,
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': null,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-quotes': ['always', {
      except: ['empty'],
    }],
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 2,
    'media-feature-name-no-vendor-prefix': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'number-max-precision': 2,
    'property-no-unknown': null,
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['appearance'],
    }],
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
    'selector-attribute-brackets-space-inside': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '[A-Z][A-Za-z0-9_-]+',
    'selector-pseudo-element-no-unknown': true,
    'value-no-vendor-prefix': true,
    'gamut/color-no-out-gamut-range': true,
    'function-disallowed-list': ['rgba', 'hsla', 'rgb', 'hsl'],
    'color-function-notation': 'modern',
    'color-no-hex': true,
    'stylistic/at-rule-name-case': 'lower',
    'stylistic/at-rule-name-space-after': 'always',
    'stylistic/at-rule-semicolon-newline-after': 'always',
    'stylistic/at-rule-semicolon-space-before': 'never',
    'stylistic/block-closing-brace-newline-after': 'always',
    'stylistic/declaration-block-semicolon-newline-after': 'always',
    'stylistic/declaration-block-trailing-semicolon': 'always',
    'stylistic/declaration-colon-newline-after': 'always-multi-line',
    'stylistic/media-feature-colon-space-after': 'always',
    'stylistic/media-feature-colon-space-before': 'never',
    'stylistic/media-feature-name-case': 'lower',
    'stylistic/media-feature-parentheses-space-inside': 'never',
    'stylistic/media-feature-range-operator-space-after': 'always',
    'stylistic/media-feature-range-operator-space-before': 'always',
    'stylistic/media-query-list-comma-space-after': 'always',
    'stylistic/no-extra-semicolons': true,
    'stylistic/number-leading-zero': 'always',
    'stylistic/number-no-trailing-zeros': true,
    'stylistic/property-case': 'lower',
    'stylistic/selector-combinator-space-after': 'always',
    'stylistic/selector-combinator-space-before': 'always',
    'stylistic/selector-descendant-combinator-no-non-space': true,
    'stylistic/selector-list-comma-newline-after': 'always',
    'stylistic/selector-list-comma-space-before': 'never',
    'stylistic/selector-max-empty-lines': 0,
    'stylistic/string-quotes': 'single',
    'stylistic/unit-case': 'lower',
    'stylistic/value-list-max-empty-lines': 0,
    'stylistic/max-empty-lines': [2, {
      ignore: ['comments'],
    }],
  },
};
