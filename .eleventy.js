const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const postcss = require('postcss');
const postcssrc = require('postcss-load-config')

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addTemplateFormats("css");
    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: async (inputContent) => {
            const { plugins } = await postcssrc();
            const processor = postcss(plugins);
            return async () => {
                const result = await processor.process(inputContent);
                return result.css;
            };
        },
    });
};
