const yaml = require("js-yaml");
const fs = require("fs");

function extractUrls(input) {
  return input.flatMap((item) => {
    if (item.items) {
      return extractUrls(item.items);
    }
    return item.url;
  });
}

module.exports = function (input) {
  const nav = yaml.load(fs.readFileSync(input.path, "utf8"));
  let urls = extractUrls(nav.toc);

  // Normalise URLs to remove fragments + add trailing slash
  urls = urls.map((url) => {
    return url.split("#")[0].replace(/\/$/, "") + "/";
  });

  // Unique list of URLs
  urls = [...new Set(urls)];

  // Remove any non-relative URLs
  urls = urls.filter((url) => {
    return !(url.includes("http://") || url.includes("https://"));
  });

  // Build full URLs
  urls = urls.map((x) => {
    return `http://localhost:3000${x}`;
  });

  return urls;
};
