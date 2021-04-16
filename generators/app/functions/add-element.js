const config = require("../config");
/**
 * Insert a single atomic element within
 * the existing structure
 */
async function addElement() {
  this.answers = await this.prompt([
    config.PROMPTS.which_element,
    config.PROMPTS.component_name,
    config.PROMPTS.which_component_type,
  ]);

  const { atomic_element_name, component_name, component_type } = this.answers;

  if (!this.config.get("target_path")) {
    this.answers = await this.prompt([config.PROMPTS.target_path]);
  }

  //Write to the objects
  let destination_path = `${this.config.get(
    "target_path"
  )}/${atomic_element_name}/${component_name}/`;
  this.fs.copyTpl(
    this.templatePath(`element/_${component_type}-component.js`),
    this.destinationPath(destination_path + "index.js"),
    {
      name: component_name,
    }
  );

  //Copy css
  this.fs.copyTpl(
    this.templatePath("element/_element.css"),
    this.destinationPath(destination_path + "index.css")
  );

  //Copy test
  this.fs.copyTpl(
    this.templatePath("element/_test.js"),
    this.destinationPath(destination_path + "test.js"),
    {
      name: component_name,
    }
  );
  this.log("Successfully created " + component_name + "!");
}

module.exports = addElement;
