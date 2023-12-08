type MyExclude<T, U> = T extends U ? never : T;

// myExclude的执行过程
// ts会进行逐步的条件类型推断，对T中的每个成员进行分析。
// 例如test.ts中的联合类型 'a' | 'b' | 'c', ts会分别判断'a'、'b'、'c'是否满足条件
// never类型表示空, 在联合类型中 never 最终会被合并, 比如 never | string // string
