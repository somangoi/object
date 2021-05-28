var memberArray = ['a', 'b', 'c'];
console.log(memberArray[1]);

var memberObject = {
    manager : 'a',
    developer: 'b',
    designer: 'c'
}
memberObject.designer = 'd'
memberObject.producer = 'e'

console.log(memberObject.designer)
console.log(memberObject['designer'])
console.log(memberObject)

delete memberObject.manager
console.log(memberObject.manager)