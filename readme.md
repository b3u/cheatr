# Cheatr
*Cheatsheets on the command line.*

> 🚧️🚨️ This project is in pre-alpha 🚨️🚧️

![Not ready yet](https://img.shields.io/badge/status-pre_alpha-red.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/github/license/b3u/cheatr?style=for-the-badge)](https://github.com/b3u/cheatr/blob/master/license.md)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=for-the-badge)](https://github.com/xojs/xo)
[![Build Status](https://img.shields.io/travis/b3u/cheatr?style=for-the-badge)](https://travis-ci.com/b3u/cheatr)
<!-- [![on npm](https://img.shields.io/npm/dt/cheatr?style=for-the-badge)](https://npmjs.com/package/cheatr) -->

## Install
<!-- Cheatr is available as an [npm package](https://npmjs.com/package/cheatr), and also as a platform-specific executable via the [releases page](https://github.com/b3u/cheatr/releases). Snap coming soon. -->
We're not ready to release this just yet. You're welcome to build it yourself.


## Configuration
By default, Cheatr stores sheets in `~/Documents/cheatr/` (or an os-equivalent). You can change that by creating a configuration file in `~/.config/cheatr/config.yaml`. See [./sample-config.yaml](https://github.com/b3u/cheatr/blob/master/sample-config.yaml) for available options.

## Usage
> **Note**: Angle-brackets <> indicate required arguments while square-brackets [] indicate optional arguments

```sh
# Basic Usage
cheatr [--flag] [sheetname]

# Some examples...

cheatr git
# Prints the cheatsheet named `git`

cheatr --edit ruby
# Opens, and possibly creates, 
# a cheatsheet named `ruby` using
# the default CLI text editor

cheatr -s s[c|a]ss
# Returns a list of cheatsheets which
# match the given regular expression
```

### Options
Flag|Description
:---|:---
`-h, --help`|Show general information
`-v, --version`|Show the cli version
`-e, --edit`|Edit or create a cheatsheet
`-l,--list`|List available cheatsheets
`-t, --tags`|List tags
`-s <regexp>,  --search <regexp>`| Find a cheatsheet by title or tag

### Sheet Syntax
Sheets are written in markdown with yaml frontmatter.
```md
<!-- Example Sheet-->

---
title: markdown
tags:
  - dev
  - markup
---

<!-- Links: -->
<https://foo.com>
[bar](https://bar.gov)
```
