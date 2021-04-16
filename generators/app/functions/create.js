const config = require("../config");
/**
 * Create a boilerplate atomic structure
 */
async function create() {
  this.answers = await this.prompt([config.PROMPTS.target_path]);

  //Create directory if doesn't exist, then create paths within
  config.ATOMIC_ELEMENTS.forEach((element) => {
    this.fileUtils.createDirectories(this.answers.target_path + "/" + element);
  });
}

module.exports = create;
