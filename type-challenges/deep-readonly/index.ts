type DeepReadonly<T> = T extends Object
  ? T extends [infer A, ...infer B]
    ? readonly [DeepReadonly<A>, ...DeepReadonly<B>]
    : T extends Function
    ? T
    : {
        readonly [P in keyof T]: DeepReadonly<T[P]>;
      }
  : T;

