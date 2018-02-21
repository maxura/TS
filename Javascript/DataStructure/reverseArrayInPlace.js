var testArr =[];
function init(val) {
    for (i=0;i<val;i++){
        testArr[i]=i+1;
    }
}

function reverseArrayInPlace(arr) {
    var end = arr.length;
    for (var i = 0; i <(Math.round(end)); i++) {
        var strt = arr[i];
        var endl = arr[end-1];
        arr[end-1] = strt;
        arr[i] = endl;
        end --;
    }
    return arr;
}
init(20);
console.log(reverseArrayInPlace(testArr));