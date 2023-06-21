const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    remote: 'remote@http://localhost:3001/remoteEntry.js',
    host: 'host@http://localhost:3000/remoteEntry.js',
  },
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
