const puppeteer = require("puppeteer");
const PDFMerger = require("pdf-merger-js");

async function createPDF(name, urls) {
  const merger = new PDFMerger();
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  console.log(`Generating ./pdfs/${name}.pdf`);
  for (const url of urls) {
    console.log(`Adding ${url}`);

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    // Wait until all images and fonts have loaded
    // via https://github.blog/2021-06-22-framework-building-open-graph-images/
    await page.evaluate(async () => {
      const selectors = Array.from(document.querySelectorAll("img"));
      await Promise.all([
        document.fonts.ready,
        ...selectors.map((img) => {
          // Image has already finished loading, let’s see if it worked
          if (img.complete) {
            // Image loaded and has presence
            if (img.naturalHeight !== 0) return;

            // If the image src is the same as the page href,
            // don't wait for it to load, just pretend that it did
            if (img.src === document.location.href) {
              return img.dispatchEvent(new CustomEvent("load")); // eslint-disable-line
            }

            // Image failed, so it has no height
            throw new Error("Image failed to load");
          }
          // Image hasn’t loaded yet, added an event listener to know when it does
          return new Promise((resolve, reject) => {
            img.addEventListener("load", resolve);
            img.addEventListener("error", reject);
          });
        }),
      ]);
    });

    // Add PDF only styles
    await page.addStyleTag({
      content: `
        @page { size: A4 portrait; margin: 24px; }
        @media print {
          html, body {
            width: 210mm;
            height: 297mm;
          }
        }
        
        pre { max-height: 100% !important; white-space: pre-wrap; }
        .code { padding-left: 0 !important; }
        img { margin-top: 12px; margin-bottom: 12px; }
        h2, h3, h4 { margin-bottom: 12px; margin-top: 12px }
        ul { margin-bottom: 24px; margin-top: 24px }
        .anchor-link { display: none; }
      `,
    });

    // Move page content to be in body
    await page.evaluate(() => {
      const content = document.querySelector(
        ".col-md-6.col-lg-7.show-anchor-links" // This is the main body
      );
      document.querySelector("body").innerHTML = content.innerHTML;
    });

    // Remove all links
    await page.evaluate(() => {
      document
        .querySelectorAll("a")
        .forEach((n) => n.setAttribute("href", "#/"));
    });

    // Generate the PDF
    merger.add(await page.pdf({ format: "A4", preferCSSPageSize: true }));
  }

  await browser.close();
  console.log(`./pdfs/${name}.pdf Created`);
  await merger.save(`./pdfs/${name}.pdf`);
}

module.exports = createPDF;
