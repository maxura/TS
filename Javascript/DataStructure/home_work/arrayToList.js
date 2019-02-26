function arrayToList(array) {
    var list=null;
    for (var i = 0; i < array.length; i++) {
        list = {value:array[i],rest:list}
    }
    return list;
}

console.log(arrayToList([10,20,30,40,50,60]))