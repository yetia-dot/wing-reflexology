/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wingreflexology.com', // your domain
  generateRobotsTxt: true, // automatically creates robots.txt
  sitemapSize: 7000, // optional, splits sitemap if large
  changefreq: 'weekly', // optional, Google hint for update frequency
  priority: 0.7,       // optional, page priority
};
