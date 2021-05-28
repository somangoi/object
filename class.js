class Person{
    constructor(name, first, second){
        this.name = name,
        this.first = first,
        this.second = second
    }
    sum(){
        return (this.first + this.second);
    }
}

const kim = new Person('kim', 10, 20);
console.log(kim)
console.log(kim.sum())