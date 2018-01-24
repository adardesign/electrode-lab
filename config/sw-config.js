module.exports = {
  cache: {
    cacheId: "electrode-lab",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-lab",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
