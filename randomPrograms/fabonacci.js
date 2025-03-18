const numberOfTerms=8;
let firstTerm=0;
let secondTerm=1;
if(numberOfTerms>2){
    console.log(firstTerm);
    console.log(secondTerm);
    for(let count=2; count<numberOfTerms; count++){
        let nextTerm=firstTerm+secondTerm;
        console.log(nextTerm);
        firstTerm=secondTerm;
        secondTerm=nextTerm;
    }
}
else{
    if(numberOfTerms>0){
        if(numberOfTerms==1){
            console.log(firstTerm);
        }
        else{
            console.log(firstTerm,secondTerm);
        }
    }
}
