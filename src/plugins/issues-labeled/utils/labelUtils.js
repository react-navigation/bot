const hasLabel = label => labels => labels.some(l => l.name === label);

module.exports = {
  hasLabel
};