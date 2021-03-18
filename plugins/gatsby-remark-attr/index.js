const remarkAttr = require('remark-attr');

module.exports.setParserPlugins = (options) => [[remarkAttr, options]];
