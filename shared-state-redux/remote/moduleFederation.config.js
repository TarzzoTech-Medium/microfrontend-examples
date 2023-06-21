const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': './src/Header',
    './Footer': './src/Footer',
    './notificationReducer': './src/reducer',
  },
  remotes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
