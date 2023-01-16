function cupAndBalls(b, arr){
  //identify cup with ball
  let cup = b;
  
  //iterate
  arr.forEach((x,i,a) => {
    //conditional, if 'spot' is one index, swap value to other index's value
    if(cup===x[0]){
      cup = x[1]
    }else if(cup === x[1]){
      cup = x[0]
    }
  })
  
  //return the cup
  return cup
}
