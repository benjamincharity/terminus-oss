<h1>Toggle</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A simple toggle, or 'switch', component.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/cdk`
- `@angular/common`
- `@angular/core`
- `@angular/flex-layout`
- `@angular/forms`
- `@angular/material`
- `@angular/platform-browser`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-styles`
- `@terminus/ui-utilities`
- `@terminus/ui-toggle`
- `date-fns`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-toggle
```

### Modules that need to be in NgModule

- `TsToggleModule,`

### CSS imports

In your top level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

### CSS resources

Load the needed font families by adding this link to the `<head>` of your application:

```css
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

## Usage

```html
<ts-toggle (selectionChange)="myChange($event)">Toggle</ts-toggle>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-toggle.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-toggle
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-toggle/bundles/terminus-ui-toggle.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-toggle/bundles/terminus-ui-toggle.umd.js
