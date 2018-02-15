#!/usr/bin/env node

/**
 * @author Leandro Silva
 * @copyright 2018 Leandro Silva (http://grafluxe.com)
 * @license MIT
 *
 * @classdesc A tiny CLI utility to confirm that you're in the expected git branch.
 *
 * @example
 *   confirm-branch --is master
 */

let argv = require("argv"),
    exec = require("child_process").exec,
    opts;

argv.option({
  name: "is",
  short: "i",
  type: "string",
  description: "Confirms that you're in the expected branch.",
  example: "'confirm-branch -s <branch>' or 'confirm-branch --is=<branch>'"
});

opts = argv.run().options;

checkOpts()
  .then(getCurrentBranch)
  .then(confirmMatch)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


function checkOpts() {
  if (!opts.is) {
    return Promise.reject("Use 'confirm-branch -h' for more details.");
  } else {
    return Promise.resolve();
  }
}

function getCurrentBranch() {
  return new Promise((res, rej) => {
    exec("git rev-parse --abbrev-ref HEAD", (err, branch) => {
      if (err) {
        return rej(err);
      }

      res(branch.trim());
    });
  });
}

function confirmMatch(currentBranch) {
  if (currentBranch !== opts.is) {
    return Promise.reject(`Please checkout the '${opts.is}' branch and try again.`);
  }

  return Promise.resolve();
}
