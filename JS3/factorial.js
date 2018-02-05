function fact(factValue) {
    if (factValue == 1 || factValue == 0)
        return 1;
    else
return factValue*(fact(factValue-1));
}

console.log(fact(10))