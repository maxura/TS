//sample1
// var user = {
//     name: 'Василий',
//
//     sayHi: function() {
//         console.log( 'Привет!' );
//     }
//
// };
//
// user.sayHi();
//-----------------------------------------------------
//
// var user = {
//     name: 'Василий'
// };
//
// user.sayHi = function() { // присвоили метод после создания объекта
//     console.log('Привет!');
// };
//
// // Вызов метода:
// user.sayHi();

// var user = {
//     name: 'Василий',
//
//     sayHi: function() {
//         console.log( this.name );
//     }
// };
//
// user.sayHi();

// var user = {
//     name: 'Василий',
//
//     sayHi: function() {
//         console.log( user.name );
//     }
// };
//
// var admin = user;
// user = null;
//
// admin.sayHi();


// var user = {
//   name: 'Василий',
//
//   sayHi: function() {
//     showName(this); // передать текущий объект в showName
//   }
// };
//
// function showName(namedObj) {
//   console.log(namedObj.name );
// }
//
// user.sayHi(); // Василий





