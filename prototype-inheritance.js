const superObj = {superVal: 'super'}
// const subObj = {subVal: 'sub'}

// subObj.__proto__ = superObj; //subObj의 원형이 무엇인가?라는 속성을 주는 것. 

const subObj = Object.create(superObj);
subObj.subVal = 'sub'

console.log(subObj.subVal); //sub
console.log(subObj.superVal); //super
//__proto__를 통해서 부모요소로 만들 수 있다. 
console.log(superObj.subVal); //undefined

subObj.superVal = 'sub';
console.log(superObj.superVal); //super

const kim = {
    name : 'kim',
    first: 10,
    second: 20,
    sum:function(){
        return this.first + this.second
    }
}
const lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function (){
    return (this.first + this.second)/2
}
const lee = {
    name: 'lee',
    first: 10,
    second: 10,
    avg:function(){
        return (this.first + this.second)/2
    }
}
lee.__proto__ = kim;

console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg())