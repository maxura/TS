function keepWholeObject(wholeObject) {
    var a = wholeObject.a, b = wholeObject.b;
    return { a: a, b: b };
}
console.log(keepWholeObject({ a: "***", b: 2 }));
