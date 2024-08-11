import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // https://vercel.com/guides/how-to-enable-cors
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main_app',
        remotes: {
          shop_app: `shop_app@${
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3001'
              : 'https://microfrontend-examples-aogy.vercel.app'
          }/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Navbar': './components/Navbar.js',
          './Footer': './components/Footer.js',
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
