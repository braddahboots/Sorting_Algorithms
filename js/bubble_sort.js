//Bubble sort is a basic way to sort a collection of data. It does this by iterating over a data set and compares two values within and swaps them if necessary. It repeats this process until no swaps are required.
function bubbleSort( arry ) {

  //set two variable, pass to hold the value of true or false and current to act as a place holder value for shifted array values
  var pass = null;
  var current;

  //hidden sort function within our bubble sort function
  function _sort() {

    //the 'do / while' loop allows our algorithm to iterate over array until values are shuffled into ascending order.
    do {

      //set the pass variable to false, this is the trigger to continue iterating over the array.
      pass = false;

      //iterating over array by each index
      for( var i = 0; i < arry.length; i++ ) {

        //comparing if the current index value is greater than the next index value
        if( arry[i] > arry[i + 1] ) {

          //if it is we place our current index and store it in the current variable
          current = arry[i];

          //next we assign the current index to equal the value of the next index
          arry[i] = arry[i + 1];

          //we then assign the next index to the current 'greater' value
          arry[i + 1] = current;

          //assign pass value to true
          pass = true;
        }
      }
      //indicating that we continue to instantiate our algorithm until pass becomes true.
    } while ( pass );
  }

  return {
    sort : _sort()
  };

}