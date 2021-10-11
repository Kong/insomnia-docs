const path = require("path");
const connect = require("connect");
const serveStatic = require("serve-static");

const buildUrls = require("./build-urls");
const createPDF = require("./create-pdf");

module.exports = async function (nav) {
  // Serve the static files
  connect()
    .use(serveStatic(path.join(__dirname, "..", "docs", "_site")))
    .listen(3000, () => console.log("Server running on :3000"));

  const urls = buildUrls({
    path: "../docs/_data/main-nav.yaml",
  });

  await createPDF("insomnia", urls);
};

if (require.main === module) {
  module.exports().then(() => {
    process.exit(0);
  });
}
