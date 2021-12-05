# Project Testing Frameworks

Comparing Mocha, Jest and Jasmine via Express App

## Setup

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* A instance of a [MySQL-Database](#2-Setting-up-the-database)

### 1. Install dependencies

Run the following command in the terminal/cmd:

`npm run install`

### 2. Setting up the database

To run the REST-API you need a running MySQL installation.

At first copy the [.env.exmaple](https://) file and rename it to ".env". Then enter the name for the database etc. that you want to use for the project. Don't  forget to enter the password for your MySQL if you use one.

If you are satisfied with the infos you have entered then run the followin commands in your terminal/cmd:

`npm run start`

## Sources

### TypeScript

* Setup TypeScript:
  * https://www.digitalocean.com/community/tutorials/typescript-new-project

### Node:

* Setup and examples:
  * https://www.pluralsight.com/guides/getting-started-with-nodejs

### PUG:

* Setup: https://pugjs.org/api/getting-started.html
* Usage:

  * Integrate into express app: https://pugjs.org/api/express.html
  * Syntax and API example: https://github.com/pugjs/pug

### Mocha

* Setup and Usage:
  * https://mochajs.org/ (sroll down)

### Jest

* Setup:
  * https://jestjs.io/docs/getting-started

### Jasmine

* Setup with node:
  * https://jasmine.github.io/pages/getting_started.html

### Dotenv

* Setup and use with import:
  * https://www.npmjs.com/package/dotenv

### MYSQL

* Use MYSQL with Node Typescript to implement REST:
  * https://livecodestream.dev/post/your-guide-to-building-a-nodejs-typescript-rest-api-with-mysql/
