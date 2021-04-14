const Generator = require("yeoman-generator");
const config = require("../../config");
const fs = require("fs");
const FileUtils = require("./file_utils");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("command", { type: String, required: true });
    this.argument("atomic_element", { type: String, required: false });
    this.fileUtils = new FileUtils();
  }

  process() {
    if (!this._validateProject()) return;
    this.options.command == "create" && this._create();
    this.options.command == "add" && this._add();
  }

  /**
   * Create a boilerplate atomic structure
   */
  _create() {
    this._prompt([
      {
        type: "input",
        name: "target_path",
        message:
          "What path would you like to initialize the folder structure in?",
        default: "./src/components",
      },
    ]);

    //Create directory if doesn't exist, then create paths within
    config.ATOMIC_ELEMENTS.forEach((element) => {
      this.fileUtils.createDirectories(
        this.answers.target_path + "/" + element
      );
    });
  }

  /**
   * Insert a single atomic element within
   * the existing structure
   */
  _add() {
    this._prompt([
      {
        type: "input",
        name: "atomic_element_name",
        message: "Which Atomic element would you like to add?",
      },
    ]);
  }

  /**
   * Validates current path is the
   * root of a react project
   * @returns
   */
  _validateProject() {
    //Check for package.json and src
    try {
      if (fs.existsSync(config.PKG_PATH)) {
        return true;
      }
    } catch (e) {
      console.error(
        "This generator was not called from a valid React project root. Please call it at the root of a React project."
      );
      return false;
    }
  }

  /**
   * Create an async prompt with each prompt
   * option passed in as array
   * @param {array<Object>} prompts_list
   */
  async _prompt(prompts_list) {
    this.answers = await this.prompt(prompts_list);
  }
};
