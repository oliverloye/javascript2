var numbers = [1, 3, 5, 10, 11];

var resultMap = numbers.map(cbMap);
var resultFilter = resultMap.filter(function(n) {
    return n.valueOf() >=15;
});
var resultMyMap = myMap(numbers,cbMap);

function cbMap(number, index, arr) {
    if (index < arr.length - 1) {
        return number + arr[index + 1];
    } else {
        return number;
    }
}

function myMap(arr, cb){
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
        var val = cb(arr[i],i,arr);
        newArr.push(val);
    }
    return newArr;
}

console.log("Original array: " + numbers);
console.log("Result of Map method: " + resultMap);
console.log("Result of Filter method: " + resultFilter);
console.log("Result of myMap method: " + resultMyMap);