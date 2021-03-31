// Code your solutions in this file
function writeCards(nameArr, event) {
    let thankYouCards = [];
    for(let i=0; i < nameArr.length; i++) {
        thankYouCards = thankYouCards.concat(`Thank you, ${nameArr[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}
 console.log(writeCards(['Ada', 'Lina', 'Greg'], "surprise"));

 function countDown(num) {
     while(num >= 0) {
         console.log(num);
         num--;
     }
 }