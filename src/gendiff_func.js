import { program } from 'commander';
import { format } from '../lib/format.js';

const genDiff = () => {
    program
        .name('gendiff')
        .description('Compares two configuration files and shows a difference.')
        .version('0.0.1')
        .option('-f, --format <type>', 'output format')
        .helpOption('-h, --help', 'output usage information')
        .arguments('<firstpath1> <firstpath2>')
        .action((file1, file2) => {
            console.log(format(file1, file2));
        });

    return program.parse();
};

export default genDiff;