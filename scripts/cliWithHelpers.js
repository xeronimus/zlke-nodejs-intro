#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

const argv = yargs(process.argv.slice(2))
  .command('$0 <source> [options]', 'scramble a file')
  .option('write', {
    alias: 'w',
    describe: 'if set, write to file. Otherwise output to console'
  })
  .help().argv;

const sourceFile = path.resolve(argv.source);
console.log(chalk.blue.bold('*** Scrambling file ***'));
console.log(` Input ${chalk.yellow(sourceFile)}`);
if (argv.write) {
  console.log(` Writing output to file`);
} else {
  console.log(` Writing output to console`);
}

const scrambleString = (input) =>
  input
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

try {
  const content = fs.readFileSync(sourceFile, 'utf-8');
  const scrambled = scrambleString(content);

  if (argv.write) {
    fs.writeFileSync(sourceFile + '_scrambled', scrambled);
  } else {
    console.log('\n' + chalk.bgBlue(scrambled));
  }
} catch (err) {
  console.log(chalk.red.bold(err.message));
}
