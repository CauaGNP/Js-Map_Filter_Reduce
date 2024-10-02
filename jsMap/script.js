const apple = {
    value : 2
}
const pineapple = {
    value : 4
}
const numArray = [2 , 2, 3]


function funcMap(array, thisArg){
    return array.map(function (item){
        return item * this.value
    }, thisArg)
}

console.log(`Apple ${funcMap(numArray, apple)}`)
console.log(`Pineapple ${funcMap(numArray, pineapple)}`)