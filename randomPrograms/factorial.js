const number=5;
let numberCopy=number;
let fact=1;
for(let i=0; i<number; i++){
    fact=fact*numberCopy;
    numberCopy-=1;
}
console.log(fact);