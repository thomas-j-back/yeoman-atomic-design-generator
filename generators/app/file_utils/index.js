const fs = require("fs");
const path = require("path");

module.exports = class fileUtils {
  /**
   * if directory doesn't exist, find which folder in tree
   * is specifically missing
   * @param {String} path
   */
  createDirectories(pathname) {
    const __dirname = path.resolve();
    pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, ""); // Remove leading directory markers, and remove ending /file-name.extension
    fs.mkdir(path.resolve(__dirname, pathname), { recursive: true }, (e) => {
      if (e) {
        console.error(e);
      }
    });
  }
};
