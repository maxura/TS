// var result = 1;
// var counter = 0;
// while (counter<10){
//     result=result*2
//     counter++;
// }

// document.body.innerHTML = result;
// var counter =0;
// do {
//     counter++;
//     console.log(counter);
// }

// while (counter<11);
// var str ='';
// for (var i=0; i<7; i++) {
//     str  += "#";
//     console.log(str);
// }

// for (var i=0; i<100; i++) {
//      if (i%3==0) {
//          console.log(i +' Fizz');
//      }
//     else if (i%5==0){
//             console.log(i+' Buzz')
//      }
//      else
//          console.log(i)
//  }
// }

// for (var i=1; i<=100; i++) {
//      if (i%3==0) {
//          console.log(i +' FizzBuzz');
//      }
//     else if (i%5==0){
//             console.log(i+' FizzBuzz')
//      }
//      else
//          console.log(i)
//  }

// var stringChess="# # # #";
// var lengthChess=100;
// for (var i=1; i<lengthChess; i++) {
// if (i%2){
//     console.log(" "+stringChess)
// }
// else
//     console.log(stringChess)
//   }

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);