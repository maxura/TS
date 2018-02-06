function recSum(inputVal){
    if (inputVal==0)
        return 0;
    else
        return inputVal+recSum(inputVal-1);
};

console.log(recSum(100));