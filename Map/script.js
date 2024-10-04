const apple = {
    value : 2
};
const pineapple = {
    value : 4
};

const numArray = [2 , 2, 3];

const newArrayApple = numArray.map( function (item){
    return item * this.value
}, apple);

const newArrayPineapple = numArray.map( function (item){
    return item * this.value
}, pineapple)

console.log(`Valor da maçã multiplicado pelo array: ${newArrayApple}`);
console.log(`Valor da maçã multiplicado pelo array: ${newArrayPineapple}`)

// Sem o this

const newArrayApple2 = numArray.map((item)=>{
    return item * apple.value
});

const newArrayPineapple2 = numArray.map((item)=>{
    return item * pineapple.value
});
console.log(`Valor da maçã multiplicado pelo array: ${newArrayApple2}`)
console.log(`Valor do abacaxi multiplicado pelo array: ${newArrayPineapple2}`)
