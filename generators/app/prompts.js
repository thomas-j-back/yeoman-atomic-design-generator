module.exports = {
  async create: () => {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "target_path",
        message:
          "What path would you like to initialize the folder structure in?",
        default: "./src/components",
      },
    ]);
  },

  async add: () => {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "atomic_element_name",
        message: "Which Atomic element would you like to add?",
      },
    ]);
  },
};
