import * as fs from 'node:fs';
import path from 'node:path';
import * as process from 'node:process';

const format = (file1, file2) => {
    try {
        let data = '';
        data += fs.readFileSync(path.resolve(`${process.cwd()}`, `${file1}`)).toString();
        data += '\n\n'
        data += fs.readFileSync(path.resolve(`${process.cwd()}`, `${file2}`)).toString();

        return data;
    } catch (err) {
        return err.message;
    }
}

export { format };