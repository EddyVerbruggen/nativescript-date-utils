# NativeScript Date Utils

[![Build Status][build-status]][build-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-date-utils.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-date-utils
[npm-image]:http://img.shields.io/npm/v/nativescript-date-utils.svg
[npm-url]:https://npmjs.org/package/nativescript-date-utils
[downloads-image]:http://img.shields.io/npm/dm/nativescript-date-utils.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

## Installation
```bash
tns plugin add nativescript-date-utils
```

## Running the demo app
After cloning, go into the `src` folder and run `npm run demo.ios` or `npm run demo.android`.

## API

### `is24hFormat`

Determine whether or not the user's device is currently running in 24 hour format.

#### TypeScript

```typescript
import { DateUtils } from 'nativescript-date-utils';

DateUtils.is24hFormat().then((is24h: boolean) => {
  console.log(`This device is currently ${is24h ? '' : 'not'} running in 24 hour format.`);
});
```

#### JavaScript

```js
var DateUtils = require("nativescript-date-utils").DateUtils;

DateUtils.is24hFormat().then(function (is24h) {
  console.log('This device is currently ' + (is24h ? '' : 'not') + ' running in 24 hour format.');
});
```