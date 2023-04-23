export enum JSDataType {
  Object = 'Object',
  Array = 'Array',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Symbol = 'Symbol',
  Set = 'Set',
  Map = 'Map',
}

export type _JSDataType = keyof typeof JSDataType;

export interface Dictionary<T> {
  [index: string]: T;
}
export interface NumericDictionary<T> {
  [index: number]: T;
}
