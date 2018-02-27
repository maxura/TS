function prepend(value, list) {
    return {value, rest:list};
    
}

console.log(prepend(10, prepend(20,null)));