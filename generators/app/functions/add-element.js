const config = require("../config");
/**
 * Insert a single atomic element within
 * the existing structure
 */
async function addElement() {
  this.answers = await this.prompt([
    {
      type: "list",
      name: "atomic_element_name",
      message: "Which Atomic element would you like to add?",
      choices: config.ATOMIC_ELEMENTS,
    },
    {
      type: "input",
      name: "element_name",
      message:
        "What is the name of the element you would like to create? Ex: Button",
    },
    {
      type: "list",
      name: "component_type",
      message:
        "What is the type of the React component you would like to create?",
      choices: config.REACT_COMPONENT_TYPES,
    },
  ]);

  const atomic_element_name = this.answers.atomic_element_name,
    element_name = this.answers.element_name,
    component_type = this.answers.component_type;

  //Write to the objects
  let destination_path = `./src/components/${atomic_element_name}/${element_name}/`;
  this.fs.copyTpl(
    this.templatePath(`element/_${component_type}-component.js`),
    this.destinationPath(destination_path + "index.js"),
    {
      name: element_name,
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
      name: element_name,
    }
  );
  this.log("Successfully created " + element_name + "!");
}

module.exports = addElement;
