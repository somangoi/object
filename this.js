var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum:function(){
        return this.first + this.second;
    }
}

console.log(kim.sum())

//this는 메소드가 속해있는 객체를 가리키도록 약속된 특수한 예약어이다.