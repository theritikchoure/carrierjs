# Carrier JS 

> Carrier JS is used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. It allows you to load your scripts and stylesheet files with caching..

[![NPM](https://img.shields.io/npm/v/carrierjs.svg)](https://www.npmjs.com/package/carrierjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Using NPM

```bash
npm install --save headx
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

## Features

- Make XMLHttpRequest from browser
- Supports All Browsers
- Enable LocalStorage Based Resource Caching

## Usage


**Performing a GET request:**

```jsx
async function getUser() {
  try {
    const response = await carrier.get('https://jsonplaceholder.typicode.com/tosdos/')
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

**Performing a Script loading:**

```jsx

// Inside head section
<head>
  <script>
    carrier.script('./path/to/file.js')
  </script>
</head>

---------------------------------------

// Inside body with script tag
<script>
    carrier.script('./path/to/file.js')
</script>
```

### Supports
This library supports on every browsers.

### Fast & Light
It is a simple, fast and lightweight javascript library.

## License

This package is licensed under the MIT license © [theritikchoure](https://github.com/theritikchoure)
