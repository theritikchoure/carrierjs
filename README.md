# Carrier JS 

> Carrier JS is promise based http client for browsers. It is used to interact with servers with ultimate caching feature. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

[![NPM](https://img.shields.io/npm/v/carrierjs.svg)](https://www.npmjs.com/package/carrierjs)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![](https://data.jsdelivr.com/v1/package/npm/carrierjs/badge)](https://www.jsdelivr.com/package/npm/carrierjs) [![install size](https://packagephobia.com/badge?p=carrierjs)](https://packagephobia.com/result?p=carrierjs)

[![NPM](https://nodei.co/npm/carrierjs.png)](https://nodei.co/npm/carrierjs/)

## Install

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
<script src="https://theritikchoure.github.io/carrierjs/carrier.js">
```

### Using unpkg

```bash
<script src="https://unpkg.com/carrierjs@1.0.1/carrier.js">
```

## Features of CarrierJs

- Make **XMLHttpRequest** from browser
- Supports **All Browsers**
- Enable IndexedDB Based Caching which can store **250MB** of data
- Data will not expire unless explicit deletion of the database **(persistent storage)**


## Usage


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

### Supports
This library supports on every browsers.

### Fast & Light
It is a simple, fast and lightweight javascript library.

## Contributing
Please read [CONTRIBUTING.md](https://github.com/theritikchoure/carrierjs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This package is licensed under the MIT license © [theritikchoure](https://github.com/theritikchoure)
