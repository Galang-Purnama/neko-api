# neko-api

Full API Implementation inside NodeJS Module

More info at https://nkhm.xyz/

And you can upgrade your apikey to premium or VIP, you can see more details at https://nkhm.xyz/pricing
## Installation
npm:
```bash
$ npm install neko-api
```
yarn:
```bash
$ yarn add neko-api
```

## Simple to Use
## CommonJs (CJS) syntax
```js
const NekoAPI = require('neko-api');
```
## ECMAScript Modules (ESM) syntax
```ts
import NekoAPI from 'neko-api';
```
## Example
```js
const neko = new NekoAPI('ApiKEY');

// How to call the API
neko.[feature].[name](parameter)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });

// Example of an API call
neko.stalking.npmjs("neko-api")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });
```