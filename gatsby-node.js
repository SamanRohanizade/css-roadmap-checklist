/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  let checkListItems = [
    {
      title: 'Learn the basics',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, impedit!'
    },
    {
      title: 'Learn the advanced stuff',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit perspiciatis eligendi aliquid.'
    }
  ];

  checkListItems.forEach(item => {
    let checkListItem = {
      ...item,
      id: createNodeId('item-' + item.title),
      internal: {
        type: 'checkListItem',
        contentDigest: createContentDigest(item)
      }
    };

    actions.createNode(checkListItem);
  });
};