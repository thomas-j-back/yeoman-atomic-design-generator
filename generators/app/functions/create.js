const config = require("../config");
/**
 * Create a boilerplate atomic structure
 */
async function create() {
  this.answers = await this.prompt([
    {
      type: "input",
      name: "target_path",
      message:
        "What path would you like to initialize the folder structure in?",
      default: "./src/components",
      store: true,
    },
  ]);

  //Create directory if doesn't exist, then create paths within
  config.ATOMIC_ELEMENTS.forEach((element) => {
    this.fileUtils.createDirectories(this.answers.target_path + "/" + element);
  });
}

module.exports = create;
