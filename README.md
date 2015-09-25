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
};
```
### Merge Sort
Takes a data set and splits it in half by taking two indexes, one representing the start of the data to be sorted, and one representing the end of the data to be sorted.  Sorts each data set and merges the halves.
Best | Average | Worst
--- | --- | ---
O(n log(n))| O(n log(n)) | O(n log(n))
```javascript
function msort(array, start, end) {
    var size = end - start;
        if(size < 2) return;

    var nowSort = start + Math.floor(size / 2);

    msort(array, start, nowSort);
    msort(array, nowSort, end);
    msort(array, start, nowSort, end);
}
function merge_sort(array) {
    msort(array, 0, array.length);
}
```
### Insertion Sort
Divide the initial unsorted array into two parts; sorted part and unsorted part. Initially the sorted part just has one element (the intial element one in the array). We then grab each element one by one from the unsorted portion; insert that element into the sorted part at the correct position (distinguised by greater than) and expand sorted part one element at a time.
Best | Average | Worst
--- | --- | ---
O(n)| O(n^2) | O(n^2)
```javascript
function insertionSort(array) {
    var len = array.length;
    for (var i = 0; i < len; ++) {
        var tmp = array[i];
        for(var j = 0; j >= 0 && (array[j] > tmp); --j) {
            array[j+1] = array[j];
        }
        array[j + 1] = tmp;
    }
}
```
### Selection Sort
Locate the smallest remaining value within the array and drop it into the correct place in the array. We will assume the first value is the smallest value. Then compare this index to the second value. If the second value is smaller than the first, we set the second item as the new minimum. Continue this until the end of the data set is reached. If the minimum value is not the value we started with, then swap them.
Best | Average | Worst
--- | --- | ---
O(n^2)| O(n^2)| O(n^2)
```javascript
function selectionSort(array) {
    var len = array.length;
    var min;

    for (var i = 0; i < len; i++) {
        min = 1;
        for(var j = i + 1; j < len; j++) {
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
The fundimental principle for quicksort is the 'pivot' value within the array dataset. The pivot value is used as our baseline value and is compared to all other values within the dataset. Values are compared to the pivot and are then split into less than or greater than sets or 'partitions'. These partitions are now taken through our function again via recursion. This process is repeated until the break which is set by concatenation of all values.
Best | Average | Worst
--- | --- | ---
O(n log(n))| O(n log(n)) | O(n^2)
```javascript
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        var i = left,
        var j = right,
    while (i <= j) {
        while (items[i] < pivot) {
            i ++;
        }
        while (items[j] > pivot) {
            j ++;
        }
        if (i <=j) {
            //we assume the swap function has been created
            swap(items, i, j);
            i++;
            j--;
        }
    } return i;
}
```
