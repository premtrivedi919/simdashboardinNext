const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://staging.paper.quant-trade.io/api/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;