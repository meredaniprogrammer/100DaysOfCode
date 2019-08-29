// Objects with methods.....A method is an object property whose value is a function

let restaurant = {
    name: 'NSB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatSize = this.guestCapacity - this.guestCount
        return seatSize >= partySize

    }
}
let status = restaurant.checkAvailability(4)
console.log(status)

// Returns True

