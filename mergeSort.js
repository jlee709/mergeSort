// // console.log("linked");
// // console.log('starting merge sort');

// // // variables and ingrediants to be used by sorting function
// // var list = [1,4,3,100,200,300,7,9,26,33,99,77,66,55,40,34,27,140,10,16,19];
// // var pointer= Math.floor(list.length/2);
// // var leftSort= [];
// // var rightSort=[];
// // var sorted = mergeSort(list);
// // // 
// function mergeSort(list, temp, leftSort, rightSort){
//   // base case for Merge Sort, recursive call

//   if(leftSort>rightSort){
//     return;
//   }

//   var middle = (leftSort + rightSort) / 2;
//   mergeSort(list, temp, leftSort, middle);
//   mergeSort(list, temp, middle + 1,  rightSort);
//   combineLnR(list, temp,leftSort,rightSort);


//   // funtion that handles the combiing of the temp arrays and keys
//   function combineLnR(list, temp, leftSort, rightSort){
//     leftWall = (rightSort+leftSort + 1);
//     rightWall = leftSort + 1;
//     sizeOfArr = rightSort - leftSort + 1;

//     leftDoor = leftSort[0];
//     rightDoor = rightSort[0];
//     index = leftDoor;
//   }

// // condition to run merge before another merge
//   while(leftSort <= leftDoor && rightDoor <= rightSort) {
//     if(list[leftSort] <= list[rightSort]){
//       temp[index] = list[rightSort];
//       rightSort++;
//     }
//     index++;
//   }

//   leftSort.slice(0,temp);
//   rightSort.slice(temp, right+1);

// }

// console.log(sorted);




// Eds Example
var arr = [1,4,3,100,200,300,7,9,26,33,99,77,66,55,40,34,27,140,10,16,19];

function mergeSort(arr){
// base
  var middle = Math.floor(arr.length /2);

  // split arry until keys are left.
  var left = mergeSort(arr.slice(0,middle));
  var right = mergeSort(arr.slice(middle, arr.length));
  // sort both arrys
  return sort(left,right);

  // return sorted left,right, concat 

function sort(left, right){
    var sorted = [];
    while((left.length + right.length) >0){
      
      if(left[0] === undefined){
        sorted.push(right.shift());
      
      }else if(right[0] === undefined){
        sorted.push(left.shift());
      
      }else if(left[0] < right[0]){
        sorted.push(left.shift());
      }
      
      else{sorted.push(right.shift());}
    }
  } return sorted;
}

console.log(mergeSort(arr));

