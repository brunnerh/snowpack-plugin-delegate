A [Snowpack](https://github.com/snowpackjs/snowpack/) plugin which delegates everything to the plugin options, allowing for simple inline plugin definitions.

Install via:

    npm install @brunnerh/snowpack-plugin-delegate --save-dev

Example usage:

```js
// Replace a constant everywhere
const constantsPlugin = {
	transform: options => options.contents.replace(/PORT/g, 3000),
};

const config = {
	plugins: [
		// ...
		["@brunnerh/snowpack-plugin-delegate", constantsPlugin],
	],
};

module.exports = config;
```