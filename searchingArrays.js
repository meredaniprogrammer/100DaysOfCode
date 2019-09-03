const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Italy'

}, {
    title: 'Habbits to work on',
    body: 'Exercising, eating a bit better'

}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note, index){
        return note.title === noteTitle
    })
    return notes[index]
}
const note = findNote(notes, 'Office modification')
console.log(note)

//{ title: 'Office modification', body: 'Get a new seat' }
 




