const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jonathan Nicholas', // Navigation and Site Title
  siteTitleAlt: 'Chromadream', // Alternative Site title for SEO
  siteUrl: 'https://Chromadream.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Single Page Portfolio site for Jonathan Nicholas',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Chromadream', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
