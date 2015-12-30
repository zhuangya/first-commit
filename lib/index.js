'use strict';

const exec = require('child_process').exec;
const chalk = require('chalk');
const path = require('path');
const parseDate = require('./parseDate.js');

module.exports = function (argv) {
  const cwd = path.normalize(argv.directory || process.cwd());

  exec(`(cd ${cwd} && git log $(git rev-list --max-parents=0 HEAD))`, puts);
};

function puts(error, stdout) {
  if (error) {
    console.error(chalk.red('Something went wrong :('));
    process.exit(1);
  }

  const formattedRelativeTime = chalk.green(parseDate(stdout).fromNow());

  console.log(`\n> first commit time: ${formattedRelativeTime}\n`);
  console.log(chalk.yellow(stdout));
}

