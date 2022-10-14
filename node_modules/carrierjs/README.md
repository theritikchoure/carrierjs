![Flow of Carrierjs](https://theritikchoure.github.io/carrierjs/doc/assets/images/Carrier.Js.png)

# Carrier JS 

> Carrier JS is promise based http client for browsers. It is used to interact with servers with ultimate caching feature. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

[![NPM](https://img.shields.io/npm/v/carrierjs.svg)](https://www.npmjs.com/package/carrierjs)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![](https://data.jsdelivr.com/v1/package/npm/carrierjs/badge)](https://www.jsdelivr.com/package/npm/carrierjs) [![install size](https://packagephobia.com/badge?p=carrierjs)](https://packagephobia.com/result?p=carrierjs)

[![NPM](https://nodei.co/npm/carrierjs.png)](https://nodei.co/npm/carrierjs/)

## Table of Contents

- [Features](#features)
- [Browser Support](#browser-support)
- [How it works internally](#how-it-works-internally)
- [Installation](#installation)
- [Examples](#examples)
- [Request method aliases](#request-method-aliases)
- [Response Object](#response-object)
- [Handling Errors](#handling-errors)
- [Contribution](#contribution)
- [License](#license)

## Features

- Make **XMLHttpRequest** from browser
- Supports **All Browsers**
- Enable IndexedDB Based Caching which can store **250MB** of data
- Data will not expire unless explicit deletion of the database **(persistent storage)**
- It decreases server round trips for fetching data from the database by persisting data in the memory.

## Browser Support

| Chrome | Edge  | Firefox | Opera | Safari 
--- | --- | ---| ---| ---| 
|✅|✅|✅|✅|✅|

## How it works internally

This diagram shows how carrierjs internally fulfill the request with its ultimate caching feature. 

![Flow of Carrierjs](https://theritikchoure.github.io/carrierjs/doc/assets/images/code-flow.png)

## Installation

### Using NPM

```bash
npm install --save carrierjs
```

### Using CDN

```bash
<script src="https://theritikchoure.github.io/carrierjs/carrier.js">
```

### Using jsDelivr

```bash
<script src="https://cdn.jsdelivr.net/npm/carrierjs@1/carrier.min.js">
```

### Using unpkg

```bash
<script src="https://unpkg.com/carrierjs@1.0.1/carrier.js">
```


## Examples


**Performing a GET request:**

```jsx

// Using Promise
carrier.get('https://jsonplaceholder.typicode.com/todos/').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

---------

// Using Async/Await
async function getUser() {
  try {
    const response = await carrier.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
**Performing a POST request:**

```jsx
const data = {
	title: "delectus aut autem",
	completed: false
}

// Using Promise
carrier.post('/todos', data).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

---------

// Using Async/Await
async function createUser(data) {
  try {
    const response = await carrier.post('/todos', data)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

createUser(data);
```

**Performing a PUT request:**

```jsx
const data = {
	title: "delectus aut autem",
	completed: false
}

// Using Promise
carrier.put('/todos', data).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

---------

// Using Async/Await
async function createUser(data) {
  try {
    const response = await carrier.put('/todos', data)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

createUser(data);
```

## Request method aliases

For your ease, aliases have been provided for request methods.

**carrier.get(url, [refresh])**

**carrier.post(url, [data])**

**carrier.put(url, [data])**

**carrier.delete(url, [data])**

**Note -** While using this methods, `url` is required and `data` is optional. `refresh` is by default `false`. If you want to get fresh data everytime from the server, you need to send `true` after `url` parameter.

## Response Object

The response for a request contains the following information.

```js
{
  // `response` is the response that was provided by the server
  response: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `type` is the type of response recieved from the server eg. json, script
  type: '',

  // `headers` the HTTP headers that the server responded with headers
  headers: {},

  // `config` is the config that was provided to `carrierjs` for the request
  config: {},

  // `request` is the request that generated this response
  request: {}
  
  // `url` is the url to that request is generated
  url: {}
}
```

## Contribution

Please read [CONTRIBUTING.md](https://github.com/theritikchoure/carrierjs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This package is licensed under the MIT license © [theritikchoure](https://github.com/theritikchoure)
