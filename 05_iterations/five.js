const coding = ['JS', 'Ruby', 'Java', 'HTML & CSS', 'React JS']

coding.forEach(function (val){
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item);
})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const  myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'JS'
    },
    {
        languageName: 'React Js',
        languageFileName: 'Js Library'
    },
    {
        languageName: 'HTML & CSS',
        languageFileName: 'Boiler Plate'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);  
})