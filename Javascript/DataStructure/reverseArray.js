function reverseArray (arr) {
var copyArr = [];
for (var i=arr.length-1; i>=0; i--){
copyArr.push(arr[i]);
}
return copyArr;

}

console.log(reverseArray([1,2,3,4,5,6]));