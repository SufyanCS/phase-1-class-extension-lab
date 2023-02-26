// Your code here
class Polygon {
    constructor (arr){
        this.arr = arr
    }
    get countSides (){
        return (this.arr.length)
    }
    get perimeter (){
        let temp = 0
        for (let i = 0; i < this.arr.length; i++){
            temp += this.arr[i]
        }
        return (temp)
    }
}

class Triangle extends Polygon{
    get isValid (){
        let isValid;
        if (this.arr[0] + this.arr[1] > this.arr[2] 
            && this.arr[0] + this.arr[2] > this.arr[1] 
            && this.arr[1] + this.arr[2] > this.arr[0]){
            isValid = true
        }
        else{
            isValid = false
        }
        return (isValid)
    }
}

class Square extends Polygon{
    get area(){
        return (this.arr[0]**2)
    }
    get isValid(){
        return (this.arr[0] === this.arr[1] 
            && this.arr[1] === this.arr[2] 
            && this.arr[2] === this.arr[3] )
    }

}