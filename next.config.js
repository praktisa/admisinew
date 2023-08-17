/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/App/KendaraanDinas/pinjam/:path*',
        destination: '/App/KendaraanDinas/pinjam/', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
