module.exports = function getZerosCount(number, base) {
  // your implementation
  const countersArray = [];
  const dividersArray = [];
  let counter = 0;
  let j = 0;
  
  for (i = 2; i <= base; i++) {
  	while(base%i === 0) {
      dividersArray[j] = i;
      counter++;
      countersArray[j] = counter;
      base /= i;
  		if(base%i !== 0) {
        j++;
        counter = 0; 
      }
    }    
  }

  const amountsArray = [];
  let amount = 0;

  for(i = 0; i < dividersArray.length; i++) {
    j = 1;
    amount = 0;
  	while(number >= Math.pow(dividersArray[i], j)) {
      amount += Math.floor(number / Math.pow(dividersArray[i], j)) ;
  		j++;
  	}
    amountsArray[i] = Math.floor(amount / countersArray[i]);    
  }
  
  return Math.min.apply(null, amountsArray);
}