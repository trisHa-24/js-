//const coding = ["js","ruby","java","py"];

// const values = coding.forEach((item) =>{
//     //console.log(item);
//     return item; // foEach foes not return any value 
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) => num>4); // filter returns values;

console.log(newNums);

const books = [
    {title:'book1', genre: 'fiction', publish:1981, edition: 2004},
    {title:'book2', genre: 'non-fiction', publish:1992, edition: 2008},
    {title:'book3', genre: 'history', publish:1999, edition: 2007},
    {title:'book4', genre: 'non-fiction', publish:1989, edition: 2010},
    {title:'book5', genre: 'science', publish:2009, edition: 2014},
    {title:'book6', genre: 'fiction', publish:1987, edition: 2010}
];

const userBooks = books.filter((bk) => {
   return bk.genre === 'history';
});

console.log(userBooks);



