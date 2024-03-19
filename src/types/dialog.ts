export interface Dialog {
  id: string;
  text: string;
}

export interface DialogJson extends Dialog {
  head: DialogJson | null;
  next: DialogJson | null;
}
