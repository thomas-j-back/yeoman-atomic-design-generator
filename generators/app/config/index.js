const PKG_PATH = "/package.json";
const DEFAULT_PATH = "./src/components";
const ATOMIC_ELEMENTS = ["atom", "molecule", "organism", "template", "page"];
const REACT_COMPONENT_TYPES = ["functional", "class"];
const PROMPTS = {
  which_element: {
    type: "list",
    name: "atomic_element_name",
    message: "Which Atomic element would you like to add?",
    choices: ATOMIC_ELEMENTS,
  },
  component_name: {
    type: "input",
    name: "component_name",
    message:
      "What is the name of the element you would like to create? Ex: Button",
  },
  which_component_type: {
    type: "list",
    name: "component_type",
    message:
      "What is the type of the React component you would like to create?",
    choices: REACT_COMPONENT_TYPES,
  },
  target_path: {
    type: "input",
    name: "target_path",
    message: "What path would you like to initialize the folder structure in?",
    default: DEFAULT_PATH,
    store: true,
  },
};
module.exports = { PROMPTS, PKG_PATH, ATOMIC_ELEMENTS, REACT_COMPONENT_TYPES };
