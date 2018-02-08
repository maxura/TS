// var day1 = {
//     squirrel: false,
//     events: ["work", "touch tree", "pizza", "joging", "tv"]
// }
//
// console.log(day1.squirrel);


var anObject = {left: 1, right: 2};
console.log(anObject.left);


delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
// → false
console.log("right" in anObject);
