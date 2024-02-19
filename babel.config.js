module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@appRealm': ([, name]) => {
            return './src/appRealm/';
          },
          '@theme': ([, name]) => {
            return './src/theme/';
          },
          '@components': ([, name]) => {
            return './src/components/';
          },
          '@controllers': ([, name]) => {
            return './src/controllers/';
          },
          '@services': ([, name]) => {
            return './src/services/';
          },
          '@screens': ([, name]) => {
            return './src/screens/';
          },
          '@utils': ([, name]) => {
            return './src/utils/';
          },
          '@models': ([, name]) => {
            return './src/models/';
          },
          '@store': ([, name]) => {
            return './src/store/';
          },
          '@navigation': ([, name]) => {
            return './src/navigation/';
          },
        },
      },
    ],
  ],
};
