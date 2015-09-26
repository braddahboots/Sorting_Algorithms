//Divide the initial unsorted array into two parts; sorted part and unsorted part. Initially the sorted part just has one element (the initial element one in the array). We then grab each element one by one from the unsorted portion; insert that element into the sorted part at the correct position (distinguished by greater than) and expand sorted part one element at a time.
function insertionSort( array ) {

  //the new array we will be returning from our function
  var newArray = array;

  //variable that we will be storing one single index value and compare that value to all other values remaining within the array
  var tmp;

  //iterate over the array to pull out a single index value
  for(var i = 0; i < array.length; i++) {

    //assign the single index value to our tmp variable
    tmp = array[i];

    //iterating over the array and starting from the index set by variable j. Our condition constraints are determined by the current index of J being greater than or equal to zero and that current index value being greater than our set tmp value.  that index value is larger than the tmp variable value we continue to iterate through.
    for(var j = i - 1; j >= 0 && (array[j] > tmp); j--) {

      //assiging the next index variable to the current index value.
      array[j + 1] = array[j];
    }

    //Once the index of j goes below 0 or our current index value is less than our tmp variable do we break. That tmp variable is then assigned to the array index that it's larger than + 1.
    array[j + 1] = tmp;
  }

  //return our newArray array
  return newArray;
}

randomArry = [550, 10001, 22323, 3, 87, 27, 63];
var test = insertionSort(randomArry);
console.log(test);