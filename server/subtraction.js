function subtractFunction( objectNum ) {
  console.log( 'Entering subtractFunction' );
  let total = parseInt( objectNum.x ) - parseInt( objectNum.y );

  console.log(total);
  return total.toString();
  console.log( 'Exiting subtractFunction' );
}

module.exports = subtractFunction;
