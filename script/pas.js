function makeid() 
{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 99; i++) {}
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function pass() {
    let pass = "";

    for (let i = 0; i < 10; i++){
        pass += makeid();
    }
    console.log(pass);

    document.getElementById("pas").innerHTML = ' ' + pass;
}

pass();