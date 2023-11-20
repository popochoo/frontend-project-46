#!/usr/bin/env node
import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<firstpath1> <firstpath2>');

program.parse();

