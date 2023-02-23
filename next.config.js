// @ts-check
const path = require('path');
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    config.module.rules.push({
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      styles: path.join(__dirname, 'styles'),
    };
    return config;
  },
};

module.exports = nextConfig;
