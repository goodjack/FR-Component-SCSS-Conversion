# Component Guidelines

## Table of Contents

   1. [Basic Rules](#basic-rules)
   1. [Naming convention](#naming)
   1. [Common properties of components](#common-prop)
   1. [Coding Standards & Practices](#coding-standars)
   1. [Uniqlo Core Components](#uni-core-components)
   1. [Uniqlo Components](#uni-components)
   1. [Component Creation Guideline](#comp-guideline)
   1. [Test Cases](#test-cases)
   1. [Usage](#usage)


## Basic Rules
  - Only include one React component per file.
    - For eg. create SectionTitle.jsx file for SectionTitle component and TextInput.jsx for TextInput component.
    - Refer eslint rule: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless). Exception to this are  [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
  - Always use JSX syntax, usage of  `React.createElement` is not recommended. `React.createElement` can be used for initializing the app from a file that is not JSX.
  - Use ES6+ standard
  - Use inline CSS for styling components
  - But to avoid duplicate style definitions, resuable style definitions can be placed in a common file.
  - Use Uniqlo Core components to build complex components

## Naming convention
 - Uniqlo components must use same component name as [React Native](https://facebook.github.io/react-native/) if there is as corresponding ReactNative component.
 - Use PascalCase for naming components/files and use camelCase for their instances.
 - Refer [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md) for eslint PascalCase rules
 -  Use .jsx extension for all component files. E.g, `SectionTitle.jsx`

    See some good and bad practices below:

      ```js
      // bad
      import sectionTitle from './SectionTitle';

      // good
      import SectionTitle from './SectionTitle';

      // bad
      const SectionTitle = <SectionTitle />;

      // good
      const sectionTitle = <SectionTitle />;
      ```

- Component Naming: Use the filename as the component name. For example, `SectionTitle.jsx` should have a reference name of `SectionTitle`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

    ```js
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```

## Common properties of components

	 1. style - All components must get "style" props, to override theming/default styles
	 2. uniTheme - All components must get the current theming information from "muiTheme" context object.
	 3. uniConfig - All components must get the current component configuration information from "uniConfig" context object
	 4. All components must have the responsibility of passing the "muiConfig" and "muiTheme" object to its child components through react context

### Coding Standards & Practices
  - [React JS](https://facebook.github.io/react/)
  - [React Coding Style](https://github.com/airbnb/javascript/tree/master/react)
  - Inline CSS Styles
  - ES6+
  - File Size should not be > 500 KB
  - ...

### Core Components
  - Text
  - TextInput
  - Button
  - Image
  - Link
  -

### Uniqlo components
Uniqlo components should use the core components to build its feature.
   - SectionTitle
   - SectionAnchorBar
   - Hero
   - SectionImage
   - ProductGrid
   - ImageTile
   - ButtonTile
   - Search


### Component Creation Guideline
- component should have its own style and should be able to pass style to child component
   - child component should its own dna
- what properties all components have common
- and uq components have common
- ever component should have abstract
- 100% test coverage
- UI and Functionalit
- inline-css

### Test Cases
 - Each component must have 100% Test coverage. The coverage should cover all the test case scenarios

### Design Pattern

- Parent child relation
- UI and Functionality
- ES6
- inline css

### Usage
Using uniqlo-ui components is very straightforward.
Once uniqlo-ui is included in your project, you can use the components this way:
```js
// Basic React component that renders Unqilo-UI
// section title with the title "Hello World"
import React from 'react'
import SectionTitle from 'uniqlo-ui/lib/section-title';

const MyAwesomeReactComponent = () => (
  <SectionTitle title="Hello World" />
);

export default MyAwesomeReactComponent;
```

Notice that in the above example, we used:
```js
import SectionTitle from 'uniqlo-ui/lib/section-title';
```

instead of
```js
import {SectionTitle} from 'uniqlo-ui';
```

This will make your build process faster and your build output smaller.
For a complete mapping of Uniqlo-UI components to `import`,
see `/lib/index.js` inside the Uniqlo-UI root directory.
