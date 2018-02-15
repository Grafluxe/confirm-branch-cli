# Confirm Branch CLI

A tiny CLI utility to confirm that you're in the expected git branch.

## Why

This utility is useful for when creating and chaining deployment scripts.

If the passed-in branch name does not match the current git branch, node will exit with an error message.

Example:

```
{
 "scripts": {
    "deploy": "confirm-branch --is=master && npm version major"
  }
}
```

## Usage

`npm i confirm-branch-cli -D`

```
confirm-branch [options]
```

### Options
```
--help, -h
    Displays help information about this script
    'confirm-branch -h' or 'confirm-branch --help'

--is, -i
    Confirms that you're in the expected branch.
    'confirm-branch -s <branch>' or 'confirm-branch --is=<branch>'
```

## License

Copyright (c) 2018 Leandro Silva (http://grafluxe.com)

Released under the MIT License. See LICENSE.md for entire terms.
