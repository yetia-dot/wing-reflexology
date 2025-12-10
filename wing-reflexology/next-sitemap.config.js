/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wing-reflexology.vercel.app', // or your domain later
  generateRobotsTxt: true,
  outDir: './public', // <- ensures sitemap.xml & robots.txt are copied to public
};
