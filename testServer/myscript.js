function getAllUsers() {
    document.getElementById("showAllUsers").addEventListener("click", function() {
        document.getElementById("divShow").innerHTML = "test";
        var url = "http://localhost:3000/users";
        var conf = {method: 'get'};
        var promise = fetch(url, conf);
        promise.then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);
            divShow.innerHTML = text;
        });
    });
    
}

function getUserById() {
    var input = document.getElementById("inputNumber");
    console.log(input.value);
    document.getElementById("showUser").addEventListener("click", function() {
        document.getElementById("divShow").innerHTML = "test";
        var url = "http://localhost:3000/users/" + input.value;
        var conf = {method: 'get'};
        var promise = fetch(url, conf);
        promise.then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);
            divShow.innerHTML = text;
        });
    });

}

function addUser() {
    var age = document.getElementById("inputAge");
    var name = document.getElementById("inputName");
    var gender = document.getElementById("inputGender");
    var email = document.getElementById("inputEmail");

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({
        "age": age.value,
        "name": name.value,
        "gender": gender.value,
        "email": email.value
    });
    xhr.send(data);



    document.getElementById("showUser").addEventListener("click", function() {
        document.getElementById("divShow").innerHTML = "test";
        var url = "http://localhost:3000/users/";
        var conf = {method: 'post'};
        var promise = fetch(url, conf);
        promise.then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);
            divShow.innerHTML = text;
        });
    });
}


/*
function myFunction() {
    document.getElementById("sBtn").addEventListener("click", function(){
        document.getElementById("app").innerHTML = "Hello World";
        var url = "/NewServlet";
        var conf = {method: 'get'};
        var promise = fetch(url, conf);
        promise.then(function(response){
            return response.text();
        }).then(function(text){
            console.log(text);
            app.innerHTML = 'Her kommer tekst fra server til at stå: ' + text;
        });
        //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    });
}*/
