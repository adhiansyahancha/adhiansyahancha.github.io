export default function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./aset/index.css");
    eleventyConfig.addPassthroughCopy(".nojekyll");
    eleventyConfig.addPassthroughCopy("aset");
    eleventyConfig.addFilter("tanggal", function (dateObj) {
        return new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(dateObj);
    });
};