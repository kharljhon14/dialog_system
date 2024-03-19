import fs from 'fs';
import { Dialog, DialogJson } from '../types/dialog';
import { LinkedList } from '../dataStructures/linkedList.js';

export function readJson() {
  const buffer = fs.readFileSync('./src/dialogs/dialog.json');
  try {
    const dialogJson: DialogJson = JSON.parse(buffer.toString('utf-8'));

    if (!dialogJson.head) {
      console.error('Dialog does not exist');

      return null;
    }

    // const dialogList = new LinkedList<Dialog>();

    // let temp: DialogJson | null = dialogJson;

    // while (temp) {
    //   if (temp) dialogList.push(temp);

    //   temp = temp.next;
    // }

    // console.log(dialogList);
    return dialogJson;
  } catch (err) {
    if (err instanceof Error) console.error(` ${err.message}`);
  }
}
