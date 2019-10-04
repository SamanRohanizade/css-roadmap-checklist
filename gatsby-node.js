/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  let checkListItems = [
    {
      title: 'Learn the basics of the web and html',
      description: 'basic stuff like how the web works, what is http(s), basic html tags and ...'
    },
    {
      title: 'Learn the basics of CSS',
      description: 'basic CSS concepts like box-model, styling text, different positions & displays'
    },
    {
      title: 'Dive deeper to CSS Selectors',
      description: `take a time to learn CSS Selectors better. learn about selectors Specificity,
                    why styling with ids is bad? what is the difference between pseudo selectors & pseudo elements? ...`
    },
    {
      title: 'Dive deeper to CSS Selectors',
      description: `take a time to learn CSS Selectors better. learn about selectors Specificity,
                    why styling with ids is bad? what is the difference between pseudo selectors & pseudo elements? ...`
    },
    {
      title: 'Dive deeper to CSS Selectors',
      description: `take a time to learn CSS Selectors better. learn about selectors Specificity,
                    why styling with ids is bad? what is the difference between pseudo selectors & pseudo elements? ...`
    },
    {
      title: 'Learn newer options for creating layouts',
      description: `learn CSS Flexbox, Grid layout, CSS Columns and their different use cases.`
    },
    {
      title: "Practice What you've learned so far",
      description: `build a simple website template. go to codepen.io and try to build at least 20 very simple demo projects and compare your solutions with others`
    },
    {
      title: "Learn CSS3 modules",
      description: `Learn CSS3 modules like Animations/Transitions, Gradients, Transforms, Blend-modes & ...`
    },
    {
      title: 'Learn responsive web design techniques',
      description: `search and practice about different responsive design techniques. media queries, units like em & rem, how to create grid layouts like bootstrap, and different tricks to make rwd easier`
    },
    {
      title: 'Pick a CSS Pre-processor',
      description: `learn one of the many CSS Pre-processors (preferably SCSS). also PostCSS (not technically a pre-processor) is a nice tool to have in your tool chain`
    },
    {
      title: 'Go deep! learn about the why!',
      description: `Search for a deeper understanding of CSS.
                    what is a BFC? what is a Stacking context? why do margins collapse and when do they not?! why animating width/height is a bad idea?
                    but keep in mind that this is a continuous step. start going deeper. but don't get stuck in this step!`
    },
    {
      title: 'Take a look at a CSS Framework',
      description: `briefly examine different CSS Framework options like Bulma, Bootstrap, Materialize. and pick one to use on your next project`
    },
    {
      title: 'Learn about CSS Methodologies and Architecture and apply them to your projects',
      description: `read about different CSS Methodologies like BEM, ABEM, ITCSS, SUITCSS, OOCSS, ... and apply the one you like best`
    },
    {
      title: 'Expand your knowledge & experience and get more in touch with the community',
      description: `Expand your knowledge, follow CSS-related blogs like css-tricks.com or smashing magazine. get in touch with the community, try to find other CSS experts, get familiar with interesting tools & concepts in the community like CSS-in-JS, ...`
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