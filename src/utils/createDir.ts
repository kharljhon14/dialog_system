import fs from 'fs';
import path from 'path';

export const PATHNAME = './src/dialogs';

export function createDir() {
  // Check if path is valid
  if (!fs.existsSync(PATHNAME)) {
    //Create dir if does not exist
    fs.promises.mkdir(path.resolve(PATHNAME));
    console.log(`${PATHNAME} created`);
  } else console.log('Dir already exsist');
}
