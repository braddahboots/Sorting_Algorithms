//The fundamental principle for quicksort is the 'pivot' value within the array dataset. The pivot value is used as our baseline value and is compared to all other values within the dataset. Values are compared to the pivot and are then split into less than or greater than sets or 'partitions'. These partitions are now taken through our function again via recursion. This process is repeated until the break which is set by concatenation of all values.

var quickSort = (function() {

  //swap function used to swap the values at index of A and index of B
  function swap(array, indexA, indexB) {
    var tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    console.log(tmp);
  }

  //partition function takes the pivot index and compares the values of our array by greater than or less than
  function partition(array, pivot, left, right) {

    //variable that indexes the position on which we start with the array.
    var storedIndex = left,

        //variable that stores the value of the pivot index of
        pivotValue = array[pivot];

    //invokes swap function
    swap(array, pivot, right);

    //iterates over the array, starts at the index of left.
    for(var v = left; v < right; v++) {

      //compares the current pivot value to the value of index in which we are calling in the loop.
      if(array[v] < pivotValue) {

        //invokes the swap function
        swap(array, v, storedIndex);

        //increase the storedIndex
        storedIndex++;
      }
    }

    //invokes the swap function
    swap(array, right, storedIndex);

    //return the storedIndex and is the value of newPivot
    return storedIndex;
  }

  //sort function that recursively iterates over our array by assigning different indexes.
  function sort(array, left, right) {

    //creating the pivot variable
    var pivot = null;

    //safe check for instances that left has no number value - assigns 0
    if(typeof left !== 'number') {
      left = 0;
    }

    //safe check for instances that right has no number value - assigns length minus 1
    if(typeof right !== 'number') {
      right = array.length - 1;
    }

    //comparing the value of left and right
    if(left < right) {

      //assigns the value of the sum of left and right divided by two
      pivot = Math.round((left + right) / 2);

      //the value is assigned with the return of the partition function
      newPivot = partition(array, pivot, left, right);

      //recursively calling sort again being driven by the value of left
      sort(array, left, newPivot - 1);

      //recursively calling sort again being driven by the value of right. In this algorithm our right value will stay constant
      sort(array, newPivot + 1, right);
    }
    return array;
  }

  return {
    sort: sort
  };


})();



// function quickSort(array) {

//   //base case
//   if(array.length <= 1) {
//     return array;
//   }

//   var swapPos = Math.floor((array.length - 1) / 2);
//   var swapValue = array[swapPos];
//   var less = [];
//   var more = [];
//   array = array.slice(0, swapPos).concat(array.slice(swapPos + 1));

//   for(var i = 0; i < array.length; i++) {
//     if(array[i] < swapValue) {
//     less.push(array[i]);
//     } else {
//       more.push(array[i]);
//       }
//   }
//   return (quickSort(less)).concat([swapValue], quickSort(more));
// }

randomArry = [550, 10001, 22323, 3, 87, 27, 63];
var test = quickSort.sort(randomArry);
console.log(test);