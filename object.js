// objects with functions

let myBook = {
    title: 'Animal Farm',
    author: 'Mere Daniel',
    pageCount: 326
}

let otherBook = {
    title: 'Nigeria is in trouble',
    author: 'Mere Ujunwa',
    pageCount: 452
}
let getSummary = function(book){
    console.log(`The book ${book.title} was written by ${book.author} and they are ${book.pageCount} pages`)
}
getSummary(myBook)
getSummary(otherBook)

//Outputs
The book Animal Farm was written by Mere Daniel and they are 326
The book Nigeria is in trouble was written by Mere Ujunwa and they are 452
