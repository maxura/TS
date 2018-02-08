function countBs(stringFound, synmbolForSearching){
 var counter = 0;
 for (var i=0; i < stringFound.length; i++){
     if (stringFound.charAt(i)==synmbolForSearching)
         counter++
 }
 return counter;
}

console.log(countBs('Maax', 'a'))