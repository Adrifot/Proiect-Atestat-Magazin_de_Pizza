let inputs = document.getElementsByTagName("input");
let select = document.getElementsByTagName("select");
let submit = document.getElementById("final");

submit.onclick = function() {
    let empty = false;
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == "" || select[0].value == "") empty = true;
    }
    if(empty) alert("Va rugam sa completati toate datele!");
    else if(!inputs[2].value.includes("@")) alert("Verificati corectitudinea e-mailului introdus!");
    else {
        document.getElementById("main").style.display = "none";
        document.getElementById("thanks").style.display = "block";
        let clientName = document.getElementById("clientName");
        clientName.innerHTML = inputs[1].value;
        let clientAddress = document.getElementById("clientAddress");
        clientAddress.innerHTML = inputs[5].value + ", " + inputs[4].value + ", " + select[0].value;
        let foot = document.getElementsByTagName("footer");
        foot[0].style.bottom = "0";
        foot[0].style.position = "fixed";
        foot[0].style.width = "100%";
    }
};