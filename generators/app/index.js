const Generator = require("yeoman-generator");
const config = require("./config");
const fs = require("fs");
const FileUtils = require("./file_utils");
const { addElement, create } = require("./functions");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("command", { type: String, required: true });
    this.argument("atomic_element", { type: String, required: false });
    this.fileUtils = new FileUtils();
  }

  process() {
    if (!this.fileUtils._validateProject(this.destinationRoot())) return;
    this.options.command == "create" && create.call(this);
    this.options.command == "add" && addElement.call(this);
  }
};
