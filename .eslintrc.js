module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended'
  ],
  rules: {
    'radix': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'react/self-closing-comp': 'off'
  }
};
