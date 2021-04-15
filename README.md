# React Atomic Design Generator

yeoman generator to manage and quickly create organized Atomic design elements within a React project

## Quick Start

Before usage, install [yeoman](https://yeoman.io/).

Use the following npm command to install

> npm install -g yo

To install React Atomic Design Generator, run the following command from a command
line:

> npm install -g generator-react-atomic

Please ensure the root directory of your project has a package.json with react
as a dependency or the generator will **not** register a valid project

## Options for generating

### Create

In order to create the scaffolding from scratch you may run the following command

> yo react-atomic create

This will prompt for a path to where the atomic element directories will be created.
The default is `./src/components`

### Add Element

The command

> yo react-atomic add-element

will prompt answers for the following:

1. The type of atomic element
2. The name of the new element (as the react component name)
3. The type of React component. ie functional, class, etc

After answering the generator will create the following files
with an Atom being chosen as the element type

```
- Atoms
    - Button
        - index.js
        - index.css
        - test.js
```

#### Future features

- Enhanced templates for tests depending on testing environment/framework
- More React Component template types
