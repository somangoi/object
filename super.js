class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second) //괄호가 붙으면 부모클래스의 생성자가 호출된다
        this.third = third;
    }
    sum(){
        return super.sum()+this.third; //super.이 오면 부모클래스를 호출됨.
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim);
console.log(kim.sum());
console.log(kim.avg());