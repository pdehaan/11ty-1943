const pkg = require("./package.json").eleventyConfig;

module.exports = function (eleventyConfig) {

  // DEBUGGING
  // eleventyConfig.addFilter("inspect", require("util").inspect);

  // eleventyConfig.addCollection("navigation", function (collectionApi) {
  //   // const res = collectionApi.getFilteredByGlob("src/_data/*.json");
  //   const res = require("./src/_data/navigation.json");
  //   console.log(res);
  //   return res;
  // });

  return {
    dir: pkg.dir
  };
};
