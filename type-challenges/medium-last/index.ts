// 1
// type Last<T extends any[]> = T["length"] extends 0 ? never : [any, ...T][T["length"]];

// 2
// type Last<T extends any[]> = T extends [infer A, ...infer B]
//   ? B extends []
//     ? A
//     : Last<B>
//   : never;

// 3
type Last<T extends any[]> = T extends [...infer A, infer B] ? B : never;
