function multiplayer(factor) {
    return function (number) {
        return number*factor
    };
}
var twice = multiplayer(2);
console.log(twice())