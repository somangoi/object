
const d1 = new Date('2021-5-26');
console.log(d1.getFullYear())
console.log(d1.getMonth())

//여기서 Date는 새로운 객체를 만들어내 리턴해주고 있다는 것을 알 수 있다. 

function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum =function sum(){
        return this.first + this.second + this.third;
    }
}

const kim = new Person('kim', 10, 20, 30);
const lee = new Person('lee', 10, 10, 10);


console.log(kim);
console.log(lee.sum());