function isEven(value) {

        if (value==1)
                return false;
 else  if (value==0)
        return true;

else return isEven (value < 0 ? value + 2: value -2);
}

console.log(isEven(-6))