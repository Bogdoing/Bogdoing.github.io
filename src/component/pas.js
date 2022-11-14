function makeid() 
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 99; i++) {}
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
/*let func = (arg1, arg2, ...argN) => expression;*/

var pass = "";
//console.log(makeid());

for (var i = 0; i < 10; i++){ 
    pass += makeid();
}
console.log(pass);

document.getElementById("demo").innerHTML = "<h1>Pasword <div>"+pass+"</div> </h1>";

