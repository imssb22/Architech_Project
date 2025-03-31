


// function logBody(jsonBody){
//     console.log(jsonBody);
// }

function callbackfn(result){
    // result.json().then(logBody);\
    console.log(result.json())
}

var sendObj = {
    method : "GET"
}

fetch("http://localhost:3000/handlesum?counter=100", sendObj).then(callbackfn);