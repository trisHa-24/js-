const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel.push(dc);

// console.log(marvel);//marge the whole dc array as single element -> ["thor","iron","spider",["super","flash","batman"]]

// const combinedHeros = marvel.concat(dc);
// // concat merge two arr and return a new arr
// console.log(combinedHeros);

// const allHero = [...marvel, ...dc]; //spread operator
// console.log(allHero);

const another_arr = [1, 2, [3,4], 6 , [7,[8,9]]];
const usable_arr = another_arr.flat(Infinity); // we need to give depth 
console.log(usable_arr);


console.log(Array.isArray("Trisha"));
console.log(Array.from("Trisha"));
console.log(Array.from({name: "Trisha"}));
//this will return empty arr , we need to tell either key or value needed to be converted

