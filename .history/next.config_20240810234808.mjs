// /** @type {import('next').NextConfig} */
// const nextConfig = {
// }

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "http",
// 				hostname: "localhost",
//                 port: 3000,
//                 pathname: "**"
// 			},
// 		],
// 	},
// };

// module.exports = nextConfig;



// @type {import('next').NextConfig}
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "3000",  // Ensure this is a string
          pathname: "/**",  // Use single asterisk wildcard pattern or specify path
        },
      ],
    },
  };

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ignore require.extensions
      config.resolve.fallback = { fs: false };

      // Ignore dynamic requires in express
      config.module.exprContextCritical = false;
    }

    return config;
  },
};
  
  export default nextConfig;
  