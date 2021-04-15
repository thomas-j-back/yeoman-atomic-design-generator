const fs = require("fs");
const path = require("path");
const config = require("../config");
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
      } else {
      }
    });
  }

  /**
   * Validates that a given path is the root of a
   * react project
   * @param {path_string} root_path
   * @returns
   */
  _validateProject(root_path) {
    //Check for package.json and src
    try {
      if (fs.existsSync(root_path + config.PKG_PATH)) {
        return true;
      }
    } catch (e) {
      console.error(
        "This generator was not called from a valid React project root. Please call it at the root of a React project.",
        e
      );
      return false;
    }
  }
};
