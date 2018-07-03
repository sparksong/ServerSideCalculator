function divideFunction( objectNum ) {
  console.log( 'Entering divideFunction' );
  let total = parseInt( objectNum.x ) / parseInt(objectNum.y);

  console.log(total);
  return total.toString();
  console.log( 'Exiting divideFunction' );
}

module.exports = divideFunction;
