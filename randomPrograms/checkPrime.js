const number=5;
let isPrime=true;
if(number < 2){
    isPrime = false;
} 
else {

    for(let i=2; i<=(number/2); i++){
        if(number%i==0){
            isPrime=false;
            break;
        }
    }
}
console.log(isPrime);
