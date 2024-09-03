// 스프레드 연산자

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

// rest 파라미터
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur);
}

function sum2(one, two, ...args) {
  return args.reduce((pre, cur) => pre + cur);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum2(1, 2, 3, 4, 5)); // 12
