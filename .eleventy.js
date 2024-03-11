module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets/*.jpg");
  eleventyConfig.addPassthroughCopy("./src/js/script.js");
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/script/");

  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data",
      includes: "_includes",
    },
  };
}