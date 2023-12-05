// 遍历一个联合类型union

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js对比学习法

// 1. 返回一个对象
// 2. 遍历foreach
// 3. todo[key] 取值
// 4. 判断key在不在todo里面

function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}
