/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['lh3.googleusercontent.com', 'cdn.qwiklabs.com', 'i.ibb.co', 'avatars.githubusercontent.com'],
//     },
// };

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};




export default nextConfig;
