const visit = require('unist-util-visit');

module.exports = async ({ markdownAST }, options = { height: 300 }) => {
  visit(markdownAST, 'text', async (node) => {
    const { value } = node;
    const match = value.match(/https:\/\/(www\.)?dotnetfiddle\.net\/([a-z0-9-_?=]*)/i)

    if (match && match.length === 3 && match[2]) {
      const id = match[2];

      node.type = 'html';
      node.value = `<div><iframe width="100%" height="${options.height}" src="https://dotnetfiddle.net/Widget/${id}" frameborder="0"></iframe></div>`;
    }
  });

  return markdownAST;
};