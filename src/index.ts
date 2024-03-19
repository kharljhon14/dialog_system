import { Dialog } from './types/dialog.js';
import { createDir } from './utils/createDir.js';
import { createFile, updateFile } from './utils/createFile.js';

import fs from 'fs';

// createDir();
// createFile();
const buffer = fs.readFileSync('./src/dialogs/dialog.json');

const json: Dialog = JSON.parse(buffer.toString('utf-8'));

updateFile('./src/dialogs/dialog.json', json);
