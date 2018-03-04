const TBODY = document.getElementById("tblbody"); //TableBody where the persons will be printed
const URL = "http://uinames.com/api/?"; //api root url

const GENDER = document.getElementById("gender");
const REGION = document.getElementById("region");
const AMOUNT = document.getElementById("amount");

var obj;
var obj1;
var obj2;

function getFullName(item,index) {
    var name = [item.name];
    var surname = [item.surname];
    var gender = [item.gender];
    //var fullname = [item.name,item.surname,item.gender].join("','");
    fullname = "'"+name+"'," + "'"+surname+"',"+ "'"+gender+"'";
    return fullname;
}

function displaySQL() {
    if(AMOUNT.value > 1) {
        document.getElementById("sql").innerHTML = "INSERT INTO names (name,surname,gender) VALUES (" + obj.map(getFullName) + ");";
    } else {
        document.getElementById("sql").innerHTML = "INSERT INTO names (name,surname,gender) VALUES ('" + obj.name + "','" + obj.surname + "','" + obj.gender + "');";
    }
}

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function submitBoth() {
    var finaleUrl = URL + "amount=" + AMOUNT.value + "&region=" + REGION.value;
    console.log(finaleUrl);

    var conf = {method: 'get'};
    var promise = fetch(finaleUrl, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        obj = JSON.parse(text);
        
        if (obj.length > 1) {
            for (var i = 0; i < obj.length; i++) {
                var tr = createNode('tr');
                var tdName = createNode('td');
                var tdSurname = createNode('td');
                var tdGender = createNode('td');

                tdName.innerHTML = obj[i].name;
                tdSurname.innerHTML = obj[i].surname;
                tdGender.innerHTML = obj[i].gender;

                append(tr, tdName);
                append(tr, tdSurname);
                append(tr, tdGender);
                append(TBODY, tr);

            }
        } else
            tblbody.innerHTML = "<tr><td>" + obj.name + "</td><td>" + obj.surname + "</td><td>" + obj.gender + "</td></tr>";
    });

}

function submitAllCountries() {
    var finaleUrl = URL + "amount=" + AMOUNT.value + "&gender=" + GENDER.value;
    console.log(finaleUrl);

    var conf = {method: 'get'};
    var promise = fetch(finaleUrl, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        obj = JSON.parse(text);
        console.log(obj);
        if (obj.length > 1) {
            for (var i = 0; i < obj.length; i++) {
                var tr = createNode('tr');
                var tdName = createNode('td');
                var tdSurname = createNode('td');
                var tdGender = createNode('td');

                tdName.innerHTML = obj[i].name;
                tdSurname.innerHTML = obj[i].surname;
                tdGender.innerHTML = obj[i].gender;

                append(tr, tdName);
                append(tr, tdSurname);
                append(tr, tdGender);
                append(TBODY, tr);

            }
        } else
            tblbody.innerHTML = "<tr><td>" + obj.name + "</td><td>" + obj.surname + "</td><td>" + obj.gender + "</td></tr>";
    });
}

function submitAll() {
    var finaleUrl = URL + "amount=" + AMOUNT.value;
    console.log(finaleUrl);

    var conf = {method: 'get'};
    var promise = fetch(finaleUrl, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        obj = JSON.parse(text);
        console.log(obj);
        if (obj.length > 1) {
            for (var i = 0; i < obj.length; i++) {
                var tr = createNode('tr');
                var tdName = createNode('td');
                var tdSurname = createNode('td');
                var tdGender = createNode('td');

                tdName.innerHTML = obj[i].name;
                tdSurname.innerHTML = obj[i].surname;
                tdGender.innerHTML = obj[i].gender;

                append(tr, tdName);
                append(tr, tdSurname);
                append(tr, tdGender);
                append(TBODY, tr);

            }
        } else
            tblbody.innerHTML = "<tr><td>" + obj.name + "</td><td>" + obj.surname + "</td><td>" + obj.gender + "</td></tr>";
    });
    
}

function submitFunction() {
    if (GENDER.value === "both" && REGION.value === "All") {
        submitAll();
        return;
    } else if (REGION.value === "All") {
        submitAllCountries();
        return;
    } else if (GENDER.value === "both"){
        submitBoth();
        return;
    }
        
    var finaleUrl = URL + "amount=" + AMOUNT.value + "&region=" + REGION.value + "&gender=" + GENDER.value;
    console.log(finaleUrl);

    var conf = {method: 'get'};
    var promise = fetch(finaleUrl, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        obj = JSON.parse(text);
        console.log(obj);
        if (obj.length > 1) {
            for (var i = 0; i < obj.length; i++) {
                var tr = createNode('tr');
                var tdName = createNode('td');
                var tdSurname = createNode('td');
                var tdGender = createNode('td');

                tdName.innerHTML = obj[i].name;
                tdSurname.innerHTML = obj[i].surname;
                tdGender.innerHTML = obj[i].gender;

                append(tr, tdName);
                append(tr, tdSurname);
                append(tr, tdGender);
                append(TBODY, tr);

            }
        } else
            tblbody.innerHTML = "<tr><td>" + obj.name + "</td><td>" + obj.surname + "</td><td>" + obj.gender + "</td></tr>";
    });
}


//THIS METHOD IS TRASH!!!
//console.log("LOL");
//
//    var urlMale = URL + "amount=" + AMOUNT.value + "&region=" + REGION.value + "&gender=male";
//    var urlFemale = URL + "amount=" + AMOUNT.value + "&region=" + REGION.value + "&gender=female";
//
//
//    var conf = {method: 'get'};
//    var promise = fetch(urlMale, conf);
//    promise.then(function (response) {
//        return response.text();
//    }).then(function (text) {
//        obj1 = JSON.parse(text);
//        console.log(obj1);
//    });
//    var conf = {method: 'get'};
//    var promise = fetch(urlFemale, conf);
//    promise.then(function (response) {
//        return response.text();
//    }).then(function (text) {
//
//        obj2 = JSON.parse(text);
//        console.log(obj2);
//
//    });
//
//    //console.log(obj1.name);
//
//
//    var objNames = [];
//    var objSurnames = [];
//    var objGenders = [];
////    var obj2Names = [];
////    var obj2Surnames = [];
////    var obj2Genders = [];
//
//    setTimeout(function () { //I know this setTimeout solution is silly...
//        if (AMOUNT.value > 1) {
//            for (var i = 0; i < obj1.length; i++) {
//                objNames.push(obj1[i]);
////                objSurnames.push(obj1[i].surname);
////                objGenders.push(obj1[i].gender);
//
//                console.log(obj1[i].name)
//
//            }
//
//            for (var i = 0; i < obj2.length; i++) {
//                objNames.push(obj2[i]);
////                objSurnames.push(obj2[i].surname);
////                objGenders.push(obj2[i].gender);
//
//                console.log(obj2[i].name)
//
//            }
//            console.log(objNames)
//            for (var i = 0; i < objNames.length; i++) {
//                var tr = createNode('tr');
//                var tdName = createNode('td');
//                var tdSurname = createNode('td');
//                var tdGender = createNode('td');
//                tdName.innerHTML = objNames[i].name;
//                tdSurname.innerHTML = objNames[i].surname;
//                tdGender.innerHTML = objNames[i].gender;
//
//                append(tr, tdName);
//                append(tr, tdSurname);
//                append(tr, tdGender);
//                append(TBODY, tr);
//            }
//
//
//
//        } else {
//            console.log(obj1.name);
//            //tblbody.innerHTML = obj1.surname + " " + obj2.surname;
//            tblbody.innerHTML = "<tr><td>" + obj1.name + "</td><td>" + obj1.surname + "</td><td>" + obj1.gender + "</td></tr><tr><td>" + obj2.name + "</td><td>" + obj2.surname + "</td><td>" + obj2.gender + "</td></tr>";
//        }
//    }, 2000);



//$(function submit2() {
//    //var finaleUrl = URL + "amount=" + AMOUNT.value + "&region=" + REGION.value + "&gender=" + GENDER.value;
//    var entries = [];
//    var cbUrl = "http://uinames.com/api/?callback=?";
//    $.getJSON(cbUrl, function (data) {
//        $.each(data.entries, function (i, f) {
//            var tblRow = "<tr><td>" + f.name + "</td>" + "<td>" + f.surname + "</td></tr>";
//            // "<tr>" + "<td>" + f.id + "</td>" + "<td>" + f.user.username + "</td>" + "<td>" + f.message + "</td>" + "<td> " + f.location + "</td>" + "<td>" + f.at + "</td>" + "</tr>"        
//            $(tblRow).appendTo("#tbl tbody");
//        });
//
//    });
//});


//let persons = response.results; //get the results
//        return persons.map(function(person) { //Map through the result and for each, do the code below 
//            let td = createNode('td'); //create the table element
//            td.innerHTML = '§{person.name}';
//            append(TBODY, td);
//        })



//    fetch(url)
//            .then((resp) => resp.json()) // Transform the data into json
//            .then(function (data) {
//                // Here you get the data to modify as you please
//            })
//    })
//            .catch(function (error) {
//                console.log(error);// If there is any error you will catch them here
//            });
//
//}

//function displaySQL() {
//
//}