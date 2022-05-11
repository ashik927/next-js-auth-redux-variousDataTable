/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://random-comment-generator.herokuapp.com/',
  }
}

module.exports = nextConfig


const path = require('path')
// const withSass = require('@zeit/next-sass');
// module.exports = withSass({

// cssModules: true
// })



// module.exports = {
// /* Add Your Scss File Folder Path Here */
// sassOptions: {
// includePaths: [path.join(__dirname, 'styles')],
// },
// }