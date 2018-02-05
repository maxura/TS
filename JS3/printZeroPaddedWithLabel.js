function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length < 3)
        numberString = "0" + numberString;
    console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Коров");
    printZeroPaddedWithLabel(chickens, "Куриц");
    printZeroPaddedWithLabel(pigs, "Свиней");
}

printFarmInventory(7, 11, 3);