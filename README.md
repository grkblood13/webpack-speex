# webpack-speex

## speex.js: https://github.com/jpemartins/speex.js/tree/master/dist

## DISCLAIMER: THIS BUILDS BUT DOES NOT WORK!!!

This repo is test code in an attempt to bundle speex.js using Webpack 5. Even if it did work it wouldn't be much use as it's just a proof of concept in bundling a module. The expected out is basically just another flavor of speex.js.

The current error this repo spits out when launched in a browser is below. If you know how to fix this please let me know!

```
speex.js:40215 Uncaught ReferenceError: util is not defined
    at eval (speex.js:40215:1)
    at eval (speex.js:40339:2)
    at Object../src/speex.js (bundle.js:29:1)
    at __webpack_require__ (bundle.js:63:42)
    at eval (index.js:2:67)
    at Module../src/index.js (bundle.js:19:1)
    at __webpack_require__ (bundle.js:63:42)
    at bundle.js:115:37
    at bundle.js:117:12
```

Prereqs: nodejs and npm

To build:

```
$ git clone https://github.com/grkblood13/webpack-speex.git
$ npm init -y
$ npm install webpack webpack-cli --save-dev
$ npm run build
```

To run:

```
npm install --global http-server
cd dist
http-server -p 8888
google-chrome-stable index.html
```