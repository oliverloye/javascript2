function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var myDaughter = new Person("Luna","Løye",0);

var getFirstName = (function () {
    var input = myDaughter.firstName;
    return function () {return input;}
})();

var getLastName = (function () {
    var input = myDaughter.lastName;
    return function () {return input;}
})();

var getAge = (function () {
    var input = myDaughter.age;
    return function () {return input;}
})();




console.log(getFirstName());
console.log(getLastName())
console.log(getAge());

console.log("My daughter's name is " + getFirstName() + " " + getLastName() + " and her age is " + getAge() + "!");