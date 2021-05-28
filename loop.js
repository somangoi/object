const memberArray = ['a', 'b', 'c'];
let i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i++;
}


const memberObject = {
    manager : 'a',
    developer: 'b',
    designer: 'c'
}

for(const name in memberObject){
    console.log(name, memberObject[name]);
}
//memberObject.name으로 하면 undefined가 온다. 왜냐하면 점 뒤에는 변수가 올 수 없다. 속성의 이름이 와야한다.=> 대괄호로 변경
