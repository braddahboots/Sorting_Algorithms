//Locate the smallest remaining value within the array and drop it into the correct place in the array. We will assume the first value is the smallest value. Then compare this index to the second value. If the second value is smaller than the first, we set the second item as the new minimum. Continue this until the end of the data set is reached. If the minimum value is not the value we started with, then swap them.
function selectionSort(array) {

  //variable that will store the index of the smallest value within our array during each iteration of the array
  var min;

  //will iterate over the array for the length of the array
  for(var i = 0; i < array.length; i++) {

    //sets our variable to the index of where we are in our loop.
    min = i;

    //iterates over the array beginning at the index of i + 1. Our condition will run for the length of our array.
    for(var j = i + 1; j < array.length; j++) {

      //comparing the value at index of j to that at the index of min. if index of j is less than min we assign that index to min.
      if(array[j] < array[min]) {

        //sets our min variable to the index of j
        min = j;
      }
    }

      //we invoke or private 'swap' function if the index of i and min are not equal.
      if(i !== min) {

        //invoking the 'swap' function and passing in the array, index of i and index of min as arguments.
      _swap(array, i, min);
    }
  }

  //return the array value.
  return array;

  //function that will swap two values within our array by assigning them to new indexes.
  function _swap(items, i, min) {

    //variable tmp is set to the value of index i
    var tmp = items[i];

    //sets the index of i to the value of index of min
    items[i] = items[min];

    //sets the index of min to the value of tmp
    items[min] = tmp;
  }

}

randomArry = [550, 10001, 22323, 3, 87, 27, 63];
var test = selectionSort(randomArry);
console.log(test);