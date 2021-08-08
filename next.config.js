module.exports = {
  reactStrictMode: true,
  webpack: config => {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js']) {
        entries['main.js'].unshift('./polyfills/index.js')
      }
      return entries
    }

    return config
  },
  distDir: 'build'
}
