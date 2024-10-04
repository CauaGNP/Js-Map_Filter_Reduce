// Somar os números do array :D
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sum = array.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual;
}, 0);

console.log(`Soma do array(${array}): ${sum}`);

//A função receberá uma lista de preços e um número que represente o saldo disponível
// Calcular o saldo após a compra

const list = [{
    name : "Cereal",
    preco : 12
},
{
    name : "Maçã",
    preco : 20
},
{
    name : "Toddy",
    preco : 10
},
{
    name : "Picanha",
    preco : 40
}];

const myMoney = 120;

function resultBuyList(money, list){
    return list.reduce( function (acumulador, valorAtual){
        return acumulador - valorAtual.preco;
    }, money)
}

const moneyAftherPurchase = resultBuyList(myMoney, list)
console.log(moneyAftherPurchase)