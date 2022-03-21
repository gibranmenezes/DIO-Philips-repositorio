function compareNumber(num1, num2){
  if(!num1 || !num2){
    return "Insert two numbers"
  }

  const firstReturn = getFirstReturn(num1, num2);
  const secondReturn = getSecondReturn(num1, num2);

  return `${firstReturn}. ${secondReturn}`;

}



function getFirstReturn(num1, num2){
  let areEquals = '';
  if(num1 !== num2){
    areEquals = 'not'
  }

  return `The numbers ${num1} and ${num2} ${areEquals} are equals`
}

function getSecondReturn(num1, num2){
  let sum = num1 + num2;
  let compare10 = sum > 10;
  let compare20 = sum > 20;
  let answer10 = ' which is less than 10';
  let answer20 = 'and less than 20';
  
  if(sum === 10 || sum === 20){
    answer10 = '.';
    answer20 = '';
  }
  else if(compare10){
    answer10 = 'which is most than 10';
  }
  else if(compare20){
    answer20 = 'and most than 20';
  }

  return `It's sum is ${sum} ${answer10} ${answer20}`;
}



 
const num1 = 5;
const num2 = 5;

console.log(compareNumber(num1, num2));