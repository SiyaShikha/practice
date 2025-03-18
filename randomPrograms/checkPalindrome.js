const number=12321;
let numberCopy=number;
let newNumber=0;
while(numberCopy>0){
    let remainderDigit=numberCopy%10;
    newNumber=(newNumber*10)+remainderDigit;
    numberCopy=numberCopy-remainderDigit;
    numberCopy=numberCopy/10;
}
if(newNumber==number){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome")
}