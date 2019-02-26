// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];



let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search)