// pages/robots.txt.js
export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

Sitemap: https://theauburnpulse.com/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}