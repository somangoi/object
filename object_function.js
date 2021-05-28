const kim = {
    name: 'kim',
    first: 10,
    second: 20
}

const lee = {
    name: 'lee',
    first: 10,
    second: 10
}

function sum() {
    //this = kim
    return this.first + this.second;
}
console.log(sum.call(kim)); //30
console.log(sum.call(lee)); //20
//sum이라는 객체를 실행시키는 것
// sum();과 같은 것. 
//모든 함수는 call이라는 메소드를 가지고 있다.

const kimSum = sum.bind(kim);
console.log(kimSum())