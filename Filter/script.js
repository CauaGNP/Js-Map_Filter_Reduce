const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const numPair = array.filter((num)=>{
    if(num % 2 == 0){
        return num
    };
});

const numOut = array.filter((num)=>{
    if(num % 2 != 0){
        return num
    };
});

console.log(`Números pares: ${numPair}`);

console.log(`Números ímpares ${numOut}`);