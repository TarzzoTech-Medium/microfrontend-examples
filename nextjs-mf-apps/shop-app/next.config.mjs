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
        name: 'shop_app',
        remotes: {
          main_app: `main_app@${
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3000'
              : 'https://microfrontend-examples.vercel.app'
          }/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Products': './components/Products.js',
          './category': './pages/category/index.js',
          './books': './pages/books/index.js',
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
