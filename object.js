/* In an object, the retutn keyword can also be use to return a object which can be called in the function*/

let myBook = {
    title: 'Animal Farm',
    author: 'Mere Daniel',
    pageCount: 326,
    published: 1998
}

let otherBook = {
    title: 'Nigeria is in trouble',
    author: 'Mere Ujunwa',
    pageCount: 452,
    published: 1998
}
let getSummary = function(book){
    return {
        summary: `The book ${book.title} was written by ${book.author} and they are ${book.pageCount} pages`,
        otherSummary: `The important thing about the two books is that they were both published in ${book.published}, that is the same year`
    }
}
let obtainedSummary = getSummary(myBook)
let otherObtainedSummary = getSummary(otherBook)
console.log(obtainedSummary.summary)
console.log(otherObtainedSummary.otherSummary)

// Outputs
The book Animal Farm was written by Mere Daniel and they are 326 pages
The important thing about the two books is that they were both published in 1998, that is the same year

