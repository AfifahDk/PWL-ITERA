module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('foto')
  return {
    passthroughFileCopy: true
  }
}
