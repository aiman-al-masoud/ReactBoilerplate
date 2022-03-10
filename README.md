# React Boilerplate


A boilerplate for React projects in Typescript, with inline css and multimedia resource inclusion (in the form of base64 strings), that builds and packages everything using Webpack into a single html file.

Ideal for SPAs (Single Page Applications). 


## Set-up and usage

1. Clone this repository

... and open up its root directory


2. Install yarn on your computer, and run: 

```
yarn install
```
... in the project's root directory, to install this project's dependencies.

3. To build the single page application from source, run:

```
yarn run build
```
... this will generate the (production-ready) file `/dist/index.html`, which you can open from any browser.

or:

```
yarn run dev-build
```

... this will instead generate a development build with un-minified names and errors (easier to debug), always at the same location `/dist/index.html`.




## Attributions:

### The sources for the multimedia content used for the examples are listed in:

<a href="./app/res/attribs.md">./app/res/attribs.md</a>

### This api is used as an example of pinging a server:

<a href="http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml">http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml</a>








