console.log("Cashback App Started");

function getcashBack(luckyNumber){
    let cashBack = [10,20,30,40,50];
    if(cashBack[luckyNumber]){
        return cashBack[luckyNumber];
    }
    else{
        return 0;
    }
    return cashBack[luckyNumber];
}

let cashBackEarned = getcashBack(13);
console.log("Cashback Earned: "+ cashBackEarned);


console.log("Cashback App Finished");
