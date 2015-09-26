//Takes a data set and splits it in half by taking two indexes, one representing the start of the data to be sorted, and one representing the end of the data to be sorted.  Sorts each data set and merges the halves.
function mergeSort( array ) {

  //running a simple test to see if the array has more than one index value, if it doesn't we return the array
  if( array.length < 2 ) {
    return array;
  }

  //set's the value of variable 'middle' to the middle index point of the array
  var middle = Math.floor( array.length / 2 ) ;

  //set's the value of variable 'left' to the index values being sliced from index 0 to the middle index value we set to middle variable.
  var left = array.slice( 0, middle );

  //set's the value of variable 'right' to the index values being sliced from the middle variable index until the end of the array.
  var right = array.slice( middle, array.length );

  //we return our merge function which merges both the left variables and right variables.
  return merge(mergeSort( left ), mergeSort( right ));
}

//need to invoke a merge function that concatenates the left and right variables we set in mergeSort.
function merge ( left, right ) {
  var result = [];

  //a while loop is instantiated here if left and right both have value lengths.
  while( left.length && right.length ) {

    //comparing only the first index value of left and right
    if( left[0] <= right[0] ){

      //if our left index value is less than our right we push that index value (use shift to remove from array) and push it to results.
      result.push( left.shift() );
    } else {

      //if the right index value is less then we push that value onto the results array.
      result.push( right.shift() );
    }
  }

  //Should only a left argument remain we can assume it's values are in ascending order which we remove each value in order and push it to our array
  while ( left.length ) {
    result.push( left.shift() );
  }

  //Should only a right argument remain we can assume it's values are in ascending order which we remove each value in order and push it to our array
  while ( right.length ) {
    result.push( right.shift() );
  }

  //return the results array
  return result;
}