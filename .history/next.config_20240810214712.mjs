/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        		remotePatterns: [
        			{
        				protocol: "http",
        				hostname: "localhost",
                        port: 3000,
                        pathname: "**"
        			},
        		],
        	},
};

export default nextConfig;


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
  
  export default nextConfig;
  