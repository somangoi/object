function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third
}

Person.prototype.sum =function (){
    return this.first + this.second + this.third;
}

const kim = new Person('kim', 10, 20, 30);
const lee = new Person('lee', 10, 10, 10);
// kim.sum = function(){
//     return 'modified : '+(this.first + this.second + this.third)
// }
//객체의 메소드를 바꿔주려면 이렇게 하나 하나 바꿔줘야 해서 비효율적이다.
//모든 객체가 공통적으로 사용되는 함수를 만들어줄 필요가 있다.
console.log(kim.sum());
console.log(lee.sum());

kim.sum = function(){
    return 'this: ' + (this.first + this.second + this.third);
}

console.log(kim.sum());