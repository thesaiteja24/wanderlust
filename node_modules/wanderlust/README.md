<h1 align="center">
  Wanderlust 🚶
</h1>
<div align="center">
	<a href="https://www.npmjs.com/package/wanderlust">
		<img src="https://img.shields.io/npm/v/wanderlust.svg?style=for-the-badge" alt="NPM Version" />
	</a>
	<a href="https://www.npmjs.com/package/wanderlust">
		<img src="https://img.shields.io/npm/dm/wanderlust.svg?style=for-the-badge" alt="NPM Downloads" />
	</a>
	<a href="https://oss.ninja/mit/m4r1vs">
		<img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
	</a><br />
  <strong>Wanderlust is a tiny nodeJS script that takes a directory and function as input and walks through every file in the folder and its sub-folders calling the given function once for every file it finds!</strong>
</div>
<div align="center">
  <sub>&lt;coded/&gt; with ❤︎ and ☕ by <a href="https://niveri.me">Marius Niveri</a><br />
</div>
<br />
<br />

## Getting started 🚀
```sh
# install via npm:
npm i wanderlust
# or use yarn:
yarn add wanderlust
```
And using it is as easy as this:
```javascript
const { walk } = require('wanderlust')

walk('files', (file) => {
	console.log('Found file: ', file)
})
```
Or if you want to do it synchronously:
```javascript
const { walkSync } = require('wanderlust')

walkSync('files', (file) => {
	console.log('Found file: ', file)
})
```