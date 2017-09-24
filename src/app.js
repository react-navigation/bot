const plugins = require('./plugins');

module.exports = (robot) => {
  Object.keys(plugins)
    .forEach((pluginName) => plugins[pluginName](robot));

  console.log('react-navigation-bot loaded and running.');
};