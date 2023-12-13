// infer
// type First<T extends any[]> = T extends [infer A, ...infer B] ? A : never;

// 2
// type First<T extends any[]> = T extends [] ? never : T[0];

// 3
// type First<T extends any[]> = T[number] extends never ? never : T[0];

// 4
type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
