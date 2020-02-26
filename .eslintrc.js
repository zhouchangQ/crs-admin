module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      // 如果插件配置中修改了相关选项，
      // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
      {
        printWidth: 200,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
};
