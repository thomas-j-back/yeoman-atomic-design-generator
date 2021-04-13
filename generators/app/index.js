const Generator = require("yeoman-generator");
const config = require("../../config");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.command = args[0];
    this.atomic_entity = args[1];
    this.entity_name = args[2];
  }

  /**
   * Handle generator command accordingly
   */
  handleCommand() {
    if (this.command && typeof this[this.command] === "function") {
      this[this.command]();
    } else {
      console.error(
        "Invalid argument at index 0. Valid options are create and add"
      );
      return;
    }
  }
  /**
   * Will initialize the folder structure
   * if none already exist under src/components
   */
  create() {}

  /**
   * Add an atomic element
   */
  add() {}
};
