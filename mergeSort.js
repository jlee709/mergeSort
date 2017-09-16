console.log("linked");


console.log('starting merge sort');

var list = [1,4,3,100,200,300,7,9,26,33,99,77,66,55,40,34,27,140,10,16,19];
var pointer= Math.floor(list.length/2)
var leftSort= [];
var rightSort=[];


function mergeSort(list, leftSort,rightSort){
  if(leftSort>rightSort){
    return;
  }
  var middle = (leftSort + rightSort) / 2;
  mergeSort(list, leftSort, middle);
  mergeSort(list ,middle + 1,  rightSort);

};