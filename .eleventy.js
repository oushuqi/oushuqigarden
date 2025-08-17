const slugify = require("@sindresorhus/slugify");
const markdownIt = require("markdown-it");
const fs = require("fs");
const matter = require("gray-matter");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const tocPlugin = require("eleventy-plugin-nesting-toc");
const { parse } = require("node-html-parser");
const htmlMinifier = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { headerToId, namedHeadingsFilter } = require("./src/helpers/utils");
const { userMarkdownSetup, userEleventySetup } = require("./src/helpers/userSetup");

const Image = require("@11ty/eleventy-img");
const path = require("path");

function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  let options = {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/optimized",
    urlPath: "/img/optimized",
  };
  Image(src, options);
  let metadata = Image.statsSync(src, options);
  return metadata;
}

function getAnchorLink(filePath, linkTitle) {
  const { attributes, innerHTML } = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.keys(attributes).map((key) => `${key}="${attributes[key]}"`).join(" ")}>${innerHTML}</a>`;
}

function getAnchorAttributes(filePath, linkTitle) {
  let fileName = filePath.replaceAll("&amp;", "&");
  let header = "";
  let headerLinkPath = "";
  if (filePath.includes("#")) {
    [fileName, header] = filePath.split("#");
    headerLinkPath = `#${headerToId(header)}`;
  }

  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  const title = linkTitle ? linkTitle : fileName;
  let permalink = `/notes/${slugify(filePath)}`;
  let deadLink = false;
  try {
    const startPath = "./src/site/notes/";
    const fullPath = fileName.endsWith(".md") ? `${startPath}${fileName}` : `${startPath}${fileName}.md`;
    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file);
    if (frontMatter.data.permalink) permalink = frontMatter.data.permalink;
    if (frontMatter.data.tags && frontMatter.data.tags.indexOf("gardenEntry") != -1) permalink = "/";
    if (frontMatter.data.noteIcon) noteIcon = frontMatter.data.noteIcon;
  } catch {
    deadLink = true;
  }

  if (deadLink) {
    return {
      attributes: { class: "internal-link is-unresolved", href: "/404", target: "" },
      innerHTML: title,
    };
  }

  return {
    attributes: { class: "internal-link", target: "", "data-note-icon": noteIcon, href: `${permalink}${headerLinkPath}` },
    innerHTML: title,
  };
}

const tagRegex = /(^|\s|\>)(#[^\s!@#$%^&*()=+\.,\[{\]};:'"?><]+)(?!([^<]*>))/g;

module.exports = function (eleventyConfig) {
  // ----------------------------
  // Nunjucks 短代码 safeImage
  // ----------------------------
  eleventyConfig.addNunjucksAsyncShortcode("safeImage", async function (src, alt = "") {
    const ext = path.extname(src).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)) return `<img src="${src}" alt="${alt}">`;

    let metadata = await Image(src, {
      widths: [300, 600, 1200],
      formats: ["webp", "jpeg"],
      urlPath: "/images/",
      outputDir: "./_site/images/",
    });

    return Image.generateHTML(metadata, { alt, loading: "lazy", decoding: "async" });
  });

  // ----------------------------
  // Markdown 设置
  // ----------------------------
  let markdownLib = markdownIt({ breaks: true, html: true, linkify: true })
    .use(require("markdown-it-anchor"), { slugify: headerToId })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(namedHeadingsFilter)
    .use(userMarkdownSetup);

  eleventyConfig.setLibrary("md", markdownLib);

  // ----------------------------
  // 过滤器
  // ----------------------------
  eleventyConfig.addFilter("isoDate", (date) => date && date.toISOString());

  eleventyConfig.addFilter("link", (str) => {
    return (
      str &&
      str.replace(/\[\[(.*?\|.*?)\]\]/g, function (match, p1) {
        const [fileLink, linkTitle] = p1.split("|");
        return getAnchorLink(fileLink, linkTitle);
      })
    );
  });

  eleventyConfig.addFilter("taggify", (str) => {
    return (
      str &&
      str.replace(tagRegex, (match, precede, tag) =>
        `${precede}<a class="tag" onclick="toggleTagSearch(this)" data-content="${tag}">${tag}</a>`
      )
    );
  });

  eleventyConfig.addFilter("searchableTags", (str) => {
    let tags;
    let match = str && str.match(tagRegex);
    if (match) tags = match.map((m) => `"${m.split("#")[1]}"`).join(", ");
    return tags ? `${tags},` : "";
  });

  eleventyConfig.addFilter("hideDataview", (str) => {
    return (
      str &&
      str.replace(/\(\S+\:\:(.*)\)/g, (_, value) => value.trim())
    );
  });

  eleventyConfig.addFilter("jsonify", (variable) => JSON.stringify(variable) || '""');

  eleventyConfig.addFilter("validJson", (variable) => {
    if (Array.isArray(variable)) return variable.map((x) => x.replaceAll("\\", "\\\\")).join(",");
    else if (typeof variable === "string") return variable.replaceAll("\\", "\\\\");
    return variable;
  });

  // ----------------------------
  // 插件
  // ----------------------------
  eleventyConfig.addPassthroughCopy("src/site/img");
  eleventyConfig.addPassthroughCopy("src/site/scripts");
  eleventyConfig.addPassthroughCopy("src/site/styles/_theme.*.css");
  eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "dist" });
  eleventyConfig.addPlugin(tocPlugin, { ul: true, tags: ["h1","h2","h3","h4","h5","h6"] });
  eleventyConfig.addPlugin(pluginRss);

  // 用户自定义 setup
  userEleventySetup(eleventyConfig);

  return {
    dir: { input: "src/site", output: "dist", data: `_data` },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
    passthroughFileCopy: true,
  };
};
