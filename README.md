# react-boundary 
[![npm version](https://badge.fury.io/js/react-boundary.svg)](https://www.npmjs.com/package/react-boundary)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-boundary@latest/lib/index.es.js?compression=gzip)](https://unpkg.com/react-boundary@latest/lib/index.es.js)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE.md)

Error boundaries, the hooky way.

## Installation

```
npm install react-boundary
```
or
```
yarn add react-boundary
```

## Usage

```typescript jsx
import { boundary, useError } from 'react-boundary';

const Component = boundary(() => {
  const [error, info] = useError();

  return error && info ? (
    <span>
      Oh no! Something happened: {error.message}
      {info.componentStack}
    </span>
  ) : (
    <span>
      Everything is fine
    </span>
  );
});
```
