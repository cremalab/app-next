# Crema App - Next 🌐

[![Build Status](https://github.com/cremalab/app-next/workflows/CI/badge.svg)](https://github.com/cremalab/app-next/actions)
[![codecov](https://codecov.io/gh/cremalab/app-next/branch/develop/graph/badge.svg?token=8epVUIKnmy)](https://codecov.io/gh/cremalab/app-next)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Web Application using Next.js.

**🧰 Tools Used**

- [Next.js](https://nextjs.org) a React App Framework
- [Cypress](https://www.cypress.io) for end-to-end testing
- [ESLint](https://eslint.org) for code linting
- [Husky](https://github.com/typicode/husky/tree/master) for running tasks via git hooks
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Prettier](https://prettier.io) for code formatting (🚨 DO NOT enable the VS Code Prettier plugin—ESLint runs it for you under the hood. 🎉)
- [Storybook](https://storybook.js.org) for component playground
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

> Run these commands from project root.

1. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
2. `nvm install` (in new sessions run `nvm use` to load version specified in `.nvmrc` unless aliased to default)
3. `npm i -g npm@latest` (npm@v7+ required)
4. `npm i` (install project dependencies)
5. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and enable "Fix on Save" in `settings.json`:
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```
   > Go to settings (`⌘ + ,`), search `codeActionsOnSave` and click "Edit in settings.json", then add `"editor.codeActionsOnSave": {...}` within the existing JSON object.
   >
   > "But I don't use VS Code." That's fine but you're on your own. 😅
   >
   > 🚨 DO NOT enable the VS Code Prettier plugin for this project—ESLint runs it for you under the hood. 🎉

## 👟 Run

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `dev` - start app for development
- `build` - build app
- `start` - start app
- `new:component` - generate a new component
- `new:page` - generate a new page
- `new:util` - generate a new util(ity)
- `new:type` - generate a new type
- `test:deps` - run dependency validation tests
- `test:e2e` - run end-to-end tests
- `test:lint:fix` - run linter and fix if possible
- `test:lint` - run linter
- `test:playground` - run component playground (storybook)
- `test:unit:coverage` - run unit tests with coverage
- `test:unit` - run unit tests

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

Below is the project's file-tree with notes added as inline comments.

> Uninteresting info is denoted by `...`

```bash
.
├── .github # 👈 PR/Issue Templates, workflows, and Renovate config
├── .next # 👈 Next build and cache
├── .storybook # 👈 Storybook config
├── cypress # 👈 Cypress integration testing
│   ├── fixtures # 👈 Test data
│   │   └── example.json
│   ├── integration # 👈 Tests go here
│   │   └── sample_spec.ts
│   └── ...
├── public # 👈 Static files
├── src 
│   ├── components # 👈  Use `npm run new:component` to generate
│   │   ├── Welcome
│   │   │   ├── README.md # 👈  Every component has a README
│   │   │   ├── index.tsx # 👈  Contains main implementation
│   │   │   ├── stories.tsx # 👈  Component stories; use `npm run test:playground` to run
│   │   │   ├── styles.css # 👈  Component styles (not included in generated code)
│   │   │   └── test.tsx # 👈  Component tests; use `npm run test:unit` to run
│   │   └── README.md # 👈  Every top-level directory in `src` has a README.md
│   ├── types # 👈  Type definitions go here; use `npm run new:type` to generate
│   │   └── README.md
│   ├── utils # 👈  Utilities go here; use `npm run new:util` to generate
│   │   └── README.md
│   └── pages # 👈  Pages go here; use `npm run new:page` to generate
│   │   └── README.md
├── .dependency-cruiser.js # 👈  Dependency Cruiser config
├── .eslintrc.json # 👈  ESLint - Run Commands
├── .gitattributes # 👈  Git meta information
├── .gitignore # 👈  Git ignore patterns
├── .nvmrc # 👈  Node Version Manager - Run Commands
├── .prettierrc.js # 👈  Prettier - Run Commands
├── jest.config.js # 👈  Jest config
├── LICENSE # 👈  LICENSE 😜
├── README.md # 👈 👈 👈  YOU ARE HERE
├── cypress.json # 👈  Cypress config
├── next.config.js # 👈  Next.js config
├── package-lock.json
├── package.json
└── tsconfig.json # 👈  TypeScript config and extends
```

## 🥇 Best Practices

- Use the code generators:
  - `npm run new:component`
  - `npm run new:type`
  - `npm run new:util`
  - `npm run new:page`
- Fill out the `README.md` to describe what your code does
- Run your unit tests `npm run test:unit` while working to see immediate feedback
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.
