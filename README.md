# Sorting Algorithms
### Bubble Sort
Bubble sort is a basic way to sort a collection of data. It does this by iterating over a data set and compares two values within and swaps them if necessary. It repeats this process until no swaps are required.
Best | Average | Worst
--- | --- | ---
O(n)| O(n^2) | O(n^2)
```javascript
function sort(array) {
    var length = array.length - 1;
    var swap = null;
    do {
        swap = false;
        for (var i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                var tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swap = true;
            }
        }
    } while (swap)
}
```
### Merge Sort
Takes a data set and splits it in half by taking two indexes, one representing the start of the data to be sorted, and one representing the end of the data to be sorted.  Sorts each data set and merges the halves.
Best | Average | Worst
--- | --- | ---
O(n log(n))| O(n log(n)) | O(n log(n))
```javascript
function mergeSort( array ) {
  if( array.length < 2 ) {
    return array;
  }
  var middle = Math.floor( array.length / 2 );
  var left = array.slice( 0, middle );
  var right = array.slice( middle, array.length );
  return merge(mergeSort( left ), mergeSort( right ));
}
function merge ( left, right ) {
  var result = [];

  while( left.length && right.length ) {
    if( left[0] <= right[0] ){
      result.push( left.shift() );
    } else {
      result.push( right.shift() );
    }
  }
  while ( left.length ) {
    result.push( left.shift() );
  }
  while ( right.length ) {
    result.push( right.shift() );
  }
  return result;
}
```
### Insertion Sort
Divide the initial unsorted array into two parts; sorted part and unsorted part. Initially the sorted part just has one element (the initial element one in the array). We then grab each element one by one from the unsorted portion; insert that element into the sorted part at the correct position (distinguished by greater than) and expand sorted part one element at a time.
Best | Average | Worst
--- | --- | ---
O(n)| O(n^2) | O(n^2)
```javascript
function insertionSort(array) {
    var newArray = array;
    var len = array.length;
    for (var i = 0; i < len; i++) {
        var tmp = array[i];
        for(var j = i - 1; j >= 0 && (array[j] > tmp); j--) {
            array[j+1] = array[j];
        }
        array[j + 1] = tmp;
    }
    return newArray;
}
```
### Selection Sort
Locate the smallest remaining value within the array and drop it into the correct place in the array. We will assume the first value is the smallest value. Then compare this index to the second value. If the second value is smaller than the first, we set the second item as the new minimum. Continue this until the end of the data set is reached. If the minimum value is not the value we started with, then swap them.
Best | Average | Worst
--- | --- | ---
O(n^2)| O(n^2)| O(n^2)
```javascript
function selectionSort(array) {
    var min;

    for (var i = 0; i < array.length; i++) {
        min = i;
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }

        if(i !== min) {
            //assumed swap function has been created
            swap(array, i, min);
        }
    } return array;
}
```
### Quick Sort
The fundamental principle for quicksort is the 'pivot' value within the array dataset. The pivot value is used as our baseline value and is compared to all other values within the dataset. Values are compared to the pivot and are then split into less than or greater than sets or 'partitions'. These partitions are now taken through our function again via recursion. This process is repeated until the break which is set by concatenation of all values.
Best | Average | Worst
--- | --- | ---
O(n log(n))| O(n log(n)) | O(n^2)
```javascript
var quickSort = (function() {
  function swap(array, indexA, indexB) {
    var tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    console.log(tmp);
  }
  function partition(array, pivot, left, right) {
    var storedIndex = left,
        pivotValue = array[pivot];

    swap(array, pivot, right);

    for(var v = left; v < right; v++) {
      if(array[v] < pivotValue) {
        swap(array, v, storedIndex);
        storedIndex++;
      }
    }
    swap(array, right, storedIndex);
    return storedIndex;
  }
  function sort(array, left, right) {
    var pivot = null;

    if(typeof left !== 'number') {
      left = 0;
    }

    if(typeof right !== 'number') {
      right = array.length - 1;
    }

    if(left < right) {

      pivot = Math.round((left + right) / 2);
      newPivot = partition(array, pivot, left, right);
      sort(array, left, newPivot - 1);
      sort(array, newPivot + 1, right);
    }
    return array;
  }
  return {
    sort: sort
  };

})();
```
