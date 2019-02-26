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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//let { a, b } = o;
//({ a, b } = { a: "baz", b: 101 });
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(total);
