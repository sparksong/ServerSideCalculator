function multiplyFunction( objectNum ) {
  console.log( 'Entering multiplyFunction' );
  let total = parseInt( objectNum.x ) * parseInt(objectNum.y);

  console.log(total);
  return total.toString();
  console.log( 'Exiting multiplyFunction' );
}

module.exports = multiplyFunction;
