module.exports = {
  title: "Dharmesh Tailor",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  // base: "/webpage-new/",
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Papers", link: "/papers/" },
      { text: "Past News", link: "/pastnews/" },
      { text: "Academic Service", link: "/services/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated',
    externalLinkIcon: false
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    },
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

