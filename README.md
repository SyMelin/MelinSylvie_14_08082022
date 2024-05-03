# Project 14 - HRnet

The HRnet project is an fictional internal web application that manages employees' data.
It is a frontend project for the OpenClassrooms training program, cloned from [OpenClassrooms-Student-Center/P12_Front-end](https://github.com/OpenClassrooms-Student-Center/P12_Front-end.git).
The repository contains all the source code for the frontend part.

## 1. Project Overview

The goal of this project was to upgrade the outdated app by converting it into a documented modular React app with functional programming and updated state management (originally using local storage). It was asked to rewrite jQuery plugins as React components, including a modal into a customizable package. Performance was also a key focus, with Lighthouse Performance tests being conducted.

The updated version of the project uses now a Github package for the modal component (`<Modal />`) included in an external React library available at:

https://github.com/SyMelin/MelinSylvie_14_react_component_library.git


### Frontend

- **React**: For building the user interface.
- **Redux**: For state management.
- **PropTypes**: For component type-checking.
- **CSS3**: For styling and responsive design.
 - **Vite**: This project was initially set up with Create React App but has since been migrated to Vite.

 ## 2. Prerequisites

HRnet uses the following tech stack:

- **Node.js v20.12.0** Ensure Node.js is installed. Check with `node --version`.
- **Npm**: For dependency management

## 3. Installation and Setup

## 3.1 Clone the repository : 

https://github.com/SyMelin/MelinSylvie_14_08083022.git

### 3.2 Navigate to the Project Directory :
```
cd hrnet-app
```

## 3.3 Install project dependencies :
```
npm install
```

## 3.4 Launch the application :
```
npm run start
```

## 3.5 Access to the application :

The app is locally available on port `3000`, go to [http://localhost:3000](http://localhost:3000).

## 4. Github Page Version
The version of this project that is hosted on GitHub Pages is available on the `gh-pages` branch. While the codebase remains largely unchanged, there is a notable modification in the `vite.config.js` file and the Router component. Specifically, the current repository has been added as a base in the `vite.config.js` file and as a basename prop in the Router. This adjustment is a workaround to address an issue with GitHub's handling of routing.

## 5. License

This project is licensed under the MIT License. See the LICENSE file for more information.
