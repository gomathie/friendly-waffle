import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const pages = [
  'https://hitracesolutions.com',
  'https://hitracesolutions.com/telematics/',
  'https://hitracesolutions.com/fleet-management/',
  'https://hitracesolutions.com/fuel-monitoring/',
  'https://hitracesolutions.com/tracking-solutions/',
  'https://hitracesolutions.com/driver-behavior-monitoring/',
  'https://hitracesolutions.com/smart-farming/',
  'https://hitracesolutions.com/iot-and-smart-homes/',
  'https://hitracesolutions.com/web-services/',
  'https://hitracesolutions.com/industries/',
  'https://hitracesolutions.com/pricing/',
  'https://hitracesolutions.com/contact/',
  'https://hitracesolutions.com/faq/'
];

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: status ${res.statusCode}`));
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        return downloadBinary(redirectUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  const imageUrls = new Set();
  const pageImageMap = {};

  for (const page of pages) {
    try {
      console.log(`Fetching HTML from ${page}...`);
      const html = await fetchUrl(page);
      pageImageMap[page] = [];

      // Extract <img> src, srcset, data-src, background-image
      const imgRegex = /https?:\/\/[^\s"'<>\(\)]+?\.(?:png|jpg|jpeg|webp|svg)/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        const imgUrl = match[0];
        if (imgUrl.includes('hitracesolutions.com') || imgUrl.includes('wp-content')) {
          imageUrls.add(imgUrl);
          pageImageMap[page].push(imgUrl);
        }
      }
    } catch (e) {
      console.error(`Error processing ${page}:`, e.message);
    }
  }

  console.log(`\nFound total ${imageUrls.size} unique image URLs.`);
  
  const manifest = [];
  for (const imgUrl of Array.from(imageUrls)) {
    try {
      const parsed = new URL(imgUrl);
      let filename = path.basename(parsed.pathname);
      // clean filename
      filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
      const dest = path.join(outputDir, filename);
      console.log(`Downloading: ${filename} from ${imgUrl}`);
      await downloadBinary(imgUrl, dest);
      manifest.push({ original: imgUrl, local: `/images/${filename}`, filename });
    } catch (err) {
      console.warn(`Could not download ${imgUrl}: ${err.message}`);
    }
  }

  fs.writeFileSync('public/images/manifest.json', JSON.stringify({ manifest, pageImageMap }, null, 2));
  console.log(`\nSuccessfully downloaded ${manifest.length} images! Manifest saved.`);
}

main().catch(console.error);
