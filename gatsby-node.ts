const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");
  const pageTemplate = path.resolve("src/templates/page.tsx");
  const blogPageTemplate = path.resolve("src/templates/blog-page.tsx");
  const blogPostQuery = await graphql(`
    query {
      allContentstackBlogPost {
        nodes {
          title
          url
        }
      }
    }
  `);

  const pageQuery = await graphql(`
    query {
      allContentstackPage {
        nodes {
          title
          url
        }
      }
    }
  `);

  const createBlogPostTemplate = (route, componentToRender, title) => {
    createPage({
      path: `${route}`,
      component: componentToRender,
      context: {
        title: title,
      },
    });
  };

  const createPageTemplate = (route, componentToRender, url) => {
    createPage({
      path: `${route}`,
      component: componentToRender,
      context: {
        url: url,
      },
    });
  };

  const createBlogPageTemplate = (route, componentToRender, title, data) => {
    createPage({
      path: `${route}`,
      component: componentToRender,
      context: {
        title: title,
        result: data,
      },
    });
  };

  blogPostQuery.data.allContentstackBlogPost.nodes.forEach(node => {
    createBlogPostTemplate(node.url, blogPostTemplate, node.title);
  });

  pageQuery.data.allContentstackPage.nodes.forEach(node => {
    if (node.url === "/blog") {
      createBlogPageTemplate(node.url, blogPageTemplate, node.title, node);
    }
  });

  pageQuery.data.allContentstackPage.nodes.forEach(node => {
    if (node.url !== "/blog") {
      createPageTemplate(node.url, pageTemplate, node.url);
    }
  });
};
