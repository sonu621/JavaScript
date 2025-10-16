 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    { title: 'Book One', gener: 'Fiction', publish: 1981, edition: 2024 },
    { title: 'Book Two', gener: 'Non- Fiction', publish: 1982, edition: 2025 },
    { title: 'Book Three', gener: 'History', publish: 1983, edition: 2023 },
    { title: 'Book Four', gener: 'Science', publish: 1984, edition: 2022 }
]

// const userBooks = books.filter( (bk) => bk.gener === 'History')

const userBooks = books.filter( (bk) => {
    return bk.publish <= 2022 && bk.gener === 'History'
})

console.log(userBooks);
