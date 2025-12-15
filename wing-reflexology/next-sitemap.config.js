// next-sitemap.config.js (Final Polish)

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.wingreflexology.com', 
  generateRobotsTxt: true,
  outDir: './out',
  
  exclude: ['/robots.txt'],
};