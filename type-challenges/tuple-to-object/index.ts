type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

//js对比学习法
//1. 定一个对象obj
//2. 遍历数组将值赋给obj

const list = [1, 2, 3, 4];

let obj = {};

for (let item of list) {
  obj[item] = item;
}
