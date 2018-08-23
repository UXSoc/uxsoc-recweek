module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'unit-no-unknown': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': null,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'max-nesting-depth': 5,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-opening-brace-space-before': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'comment-whitespace-inside': 'always'
  }
};
