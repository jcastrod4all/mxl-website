const site = require("./site/en.json");

module.exports = () => process.env.SITE_URL || site.url;
