// var chai = require('chai');
var expect = chai.expect;
var should = chai.should();



//----------------Bubble Sort Test---------------------//

describe('bubbleSort', function() {
  var randomArry;

  beforeEach(function() {
    randomArry = [8, 3, 22, 65, 101, 35];
    otherArry = [550, 10001, 22323, 3, 87, 27, 63];
  });

  it('function that takes in an argument', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('sorts randomArry in ascending order', function() {
    bubbleSort(randomArry);
    expect(randomArry).to.have.length(6);
    expect(randomArry).to.deep.equal([3, 8, 22, 35, 65, 101]);
  });

  it('sorts otherArry in ascending order', function() {
    bubbleSort(otherArry);
    expect(otherArry).to.have.length(7);
    expect(otherArry).to.deep.equal([3, 27, 63, 87, 550, 10001, 22323]);
  });

});

//----------------Insertion Sort Test---------------------//

describe('insertionSort', function() {
  var randomArry;

  beforeEach(function() {
    randomArry = [8, 3, 22, 65, 101, 35];
    otherArry = [550, 10001, 22323, 3, 87, 27, 63];
  });

  it('function that takes in an argument', function() {
    expect(insertionSort).to.be.a('function');
  });

  it('sorts randomArry in ascending order', function() {
    insertionSort(randomArry);
    expect(randomArry).to.have.length(6);
    expect(randomArry).to.deep.equal([3, 8, 22, 35, 65, 101]);
  });

  it('sorts otherArry in ascending order', function() {
    insertionSort(otherArry);
    expect(otherArry).to.have.length(7);
    expect(otherArry).to.deep.equal([3, 27, 63, 87, 550, 10001, 22323]);
  });

});


//----------------Merge Sort Test---------------------//

describe('mergeSort', function() {

  it('function that takes in an argument', function() {
    expect(mergeSort).to.be.a('function');
  });

  it('sorts randomArry in ascending order', function() {
    var randomArry = [8, 3, 22, 65, 101, 35];

    var result = mergeSort(randomArry);

    expect(result).to.have.length(6);
    expect(result).to.deep.equal([3, 8, 22, 35, 65, 101]);
  });

  it('sorts otherArry in ascending order', function() {
    var otherArry = [550, 10001, 22323, 3, 87, 27, 63];

    var result = mergeSort(otherArry);

    expect(result).to.have.length(7);
    expect(result).to.deep.equal([3, 27, 63, 87, 550, 10001, 22323]);
  });

});


//----------------Quick Sort Test---------------------//

describe('quickSort', function() {
  var randomArry;

  beforeEach(function() {
    randomArry = [8, 3, 22, 65, 101, 35];
    otherArry = [550, 10001, 22323, 3, 87, 27, 63];
  });

  it('function that takes in an argument', function() {
    expect(quickSort.sort).to.be.a('function');
  });

  it('sorts randomArry in ascending order', function() {
    quickSort.sort(randomArry);
    expect(randomArry).to.have.length(6);
    expect(randomArry).to.deep.equal([3, 8, 22, 35, 65, 101]);
  });

  it('sorts otherArry in ascending order', function() {
    quickSort.sort(otherArry);
    expect(otherArry).to.have.length(7);
    expect(otherArry).to.deep.equal([3, 27, 63, 87, 550, 10001, 22323]);
  });

});

//----------------Selection Sort Test---------------------//

describe('selectionSort', function() {
  var randomArry;

  beforeEach(function() {
    randomArry = [8, 3, 22, 65, 101, 35];
    otherArry = [550, 10001, 22323, 3, 87, 27, 63];
  });

  it('function that takes in an argument', function() {
    expect(selectionSort).to.be.a('function');
  });

  it('sorts randomArry in ascending order', function() {
    selectionSort(randomArry);
    expect(randomArry).to.have.length(6);
    expect(randomArry).to.deep.equal([3, 8, 22, 35, 65, 101]);
  });

  it('sorts otherArry in ascending order', function() {
    selectionSort(otherArry);
    expect(otherArry).to.have.length(7);
    expect(otherArry).to.deep.equal([3, 27, 63, 87, 550, 10001, 22323]);
  });

});