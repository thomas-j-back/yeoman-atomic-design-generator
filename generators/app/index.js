const Generator = require("yeoman-generator");
const config = require("../../config");
const fs = require("fs");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("command", { type: String, required: true });
    this.argument("atomic_element", { type: String, required: false });
  }

  process() {
    if (!this._validateProject()) return;
    this.options.command == "create" && this._create();
    this.options.command == "add" && this._add();
  }

  _create() {
    this._createPrompts();
  }

  _add() {
    this._addPrompts();
  }

  /**
   * Handle generator command accordingly
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

  async _createPrompts() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "target_path",
        message:
          "What path would you like to initialize the folder structure in?",
        default: "./src/components",
      },
    ]);
  }

  async _addPrompts() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "atomic_element_name",
        message: "Which Atomic element would you like to add?",
      },
    ]);
  }
};
