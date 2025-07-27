// pages/sitemap.xml.js
export default function Sitemap() {
  // This component doesn't render anything
  return null;
}

export async function getServerSideProps({ res }) {
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://theauburnpulse.com</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/eat</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/explore</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/fun</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/featured</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/legal</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/privacy</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://theauburnpulse.com/cookies</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}