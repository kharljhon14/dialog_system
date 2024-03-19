import fs from 'fs/promises';

import { PATHNAME } from './createDir.js';
import { Dialog } from '../types/dialog.js';

export function createFile() {
  const dialogJson = `{
        "id":"${crypto.randomUUID()}",
        "text": "Add dialog",
        "next": null
    }`;

  fs.writeFile(`${PATHNAME}/dialog.json`, dialogJson);
}

export function updateFile(pathname: string, dialog: Dialog) {
  const updatedDialog = {
    ...dialog,
    next: { id: crypto.randomUUID(), text: 'child dialog', next: null },
  };

  fs.writeFile(pathname, JSON.stringify(updatedDialog));
}
