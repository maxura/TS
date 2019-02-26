// let input = [1, 2];
// let [second ,first] = input;
// console.log(first); // outputs 1
// console.log(second)
//
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f([1, 2]);

//
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4
// ]

// let [first] = [1, 2, 3, 4];
// console.log(first); // outputs 1
//
// let [, second, , fourth] = [1, 2, 3, 4];
// console.log(second);
// console.log(fourth);



let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//let { a, b } = o;
//({ a, b } = { a: "baz", b: 101 });
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log(total);