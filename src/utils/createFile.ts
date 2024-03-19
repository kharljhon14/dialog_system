import fs from 'fs/promises';

import { PATHNAME } from './createDir.js';
import { Dialog, DialogJson } from '../types/dialog.js';
import { readJson } from './readJson.js';
import { LinkedList } from '../dataStructures/linkedList.js';

export function createFile() {
  const newDialog = {
    id: crypto.randomUUID(),
    text: 'Add dialog',
  };
  const dialogList = new LinkedList<Dialog>(newDialog);

  fs.writeFile(`${PATHNAME}/dialog.json`, JSON.stringify(dialogList));
}

export function updateFile(pathname: string) {
  const newDialog = {
    id: crypto.randomUUID(),
    text: 'child dialog',
  };

  const json = readJson();
  const dialogList = new LinkedList<Dialog>();

  let temp = json?.head as any;

  while (temp) {
    dialogList.push(temp.dialog);

    temp = temp.next;
  }

  dialogList.push(newDialog);

  fs.writeFile(pathname, JSON.stringify(dialogList));
}
