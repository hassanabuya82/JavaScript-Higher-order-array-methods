//* ForEach
//* Filter
//* Map
// sort
// reduce

const companines = [
    {name: "Comp One", category: "Finance", start: 1981, end: 2003},
    {name: "Comp Two", category: "Retail", start: 1992, end: 2008},
    {name: "Comp Three", category: "Auto", start: 1999, end: 2007},
    {name: "Comp Four", category: "Retail", start: 1989, end: 2010},
    {name: "Comp Five", category: "Technology", start: 2009, end: 2014},
    {name: "Comp Six", category: "Finance", start: 1987, end: 2010},
    {name: "Comp Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Comp Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Comp Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
// for(let i = 0; i < companines.length; i++ ) {
//     console.log(companines[i])
// }
   
// for each
// companines.forEach(function(company) {
//     console.log(company)
// });

// filter

//Get 21 and older
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// const canDrink1 = ages.filter(age => age >=21);

// filter the retail companines
// const retailCompines = companines.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// const retailCompines = companines.filter(company => company.category === 'Retail')

// const companiesFrom80s = companines.filter(company => company.start >= 1980 && company.start < 1990)

// const moreThan10 = companines.filter(company => company.end - company.start >= 10)
// console.log(moreThan10);

// MAP
// create array of company names
// const companyNames = companines.map(function(company) {
//     return `${company.name} => ${company.start} - ${company.end}`;
// });

// const companyes = companines.map(company => `${company.name}`);

// console.log(companyes);

//Sort
// const sortedCompanies = companines.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

const sortedCompanies = companines.sort((a, b) => (a.start > b.start ? 1: -1));

const sortAges = ages.sort((a, b) => b-a);


console.log(sortAges);
