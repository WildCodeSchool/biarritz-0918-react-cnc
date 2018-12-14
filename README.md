# Clic & Coupe Web Client

## Pre-requisite

Node 8.1 _(required to use the npm commands)_
npm 6.4.1

## Getting Started

1.  Be sure that you are in the `/client` folder.
2.  `npm install`
3.  `npm start`

## Folder Hierarchy

`/node_modules` : is the folder where all the dependencies are installed. Don't touch this
`/public` :
`/src` : where all the code is, this is the folder who get all our interest here.

We used the [Create React App Starter](https://facebook.github.io/create-react-app/).

### `/src`

#### Folders

`/pages` : Got all the files dedicated to pages themselves. You will also find sometimes `**.module.css` which is dedicated css.
`/assets` : You will find mainly the font here.
`/components` : All our components are here, navbar, loader, modals... You will also find sometimes `**.module.css` which is dedicated css.
`/layouts` : We are actually using only the `Responsive.layout.jsx`. But in case you wanna get different layout for mobile & desktop users, the other layouts are ready to custom.

#### Files

`Router.jsx` : this is the file that contains all the routes of the project.
`Auth.api.js`: Here you can configure one constant called 'SERVER' that contain API address.
`index.js` is the application's entry point.

## Standards

camelCase is the way to go here. :camel:
For all thing like `{ }` or `;` and indentation, [Prettier](https://prettier.io/) make all the job for us ! :ok_hand:
