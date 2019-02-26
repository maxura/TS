function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b } = wholeObject;
    return {a,b}
}
console.log(keepWholeObject({a:"***", b:2}))