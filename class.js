class Perimeter {

    constructor(length, height, width){
        this.length = 5
        this.height = 7
        this.width = 10 
    }
    get perimeter (){
        return this.length + this.height + this.width
    }
}
myPerimeter = new Perimeter()
console.log(myPerimeter.perimeter)

//Expected Result: 22
