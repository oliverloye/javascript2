var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

result = votes.reduce(cbReduce,0);


function cbReduce(accumulator, currVal, index, arr) {
    var clint = 0;
    var trump = 0;
    var none = 0;
    if (currVal === "Clinton") {
        clint++;
        console.log(currVal)
    } else if (currVal === "Trump") {
        trump++;
        console.log(currVal)
    } else if (currVal === "None") {
        none++;
        console.log(currVal)
    }
    return {
        Clinton: clint,
        Trump: trump,
        None: none
    }
}

console.log(result);

//Kan ikke få talt ordentlig op..