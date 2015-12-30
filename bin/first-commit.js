#!/usr/bin/env node

'use strict';

const program = require('commander');
const pkg = require('../package');
const firstCommit = require('../lib/');

program.version(pkg.version)
  .option('-l, --lite', 'Lite')
  .option('-d, --directory [directory]', 'Directory')
  .parse(process.argv);

firstCommit(program);
