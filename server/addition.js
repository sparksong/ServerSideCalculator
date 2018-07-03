function addFunction( objectNum ) {
  console.log( 'Entering addFunction' );
  let total = parseInt( objectNum.x ) + parseInt( objectNum.y );

  console.log(total);
  return total.toString();
  console.log( 'Exiting addFunction' );
}

module.exports = addFunction;
