var myName = "Oliver";

var setName = (function (myName) {
    var input = myName;
    return function () {return input;}
})();

console.log(setName(myName));
