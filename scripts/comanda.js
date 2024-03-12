let minbuts = document.getElementsByClassName("minbut");
let ins = document.getElementsByClassName("input");
let plusbuts = document.getElementsByClassName("plusbut");
/*se creeaza 3 vectori care contin elementele necesare: butoanele minus, butoanele plus, si zonele de input.
fiecare vector contine doar elemente identice din aceeasi clasa. */
let listpiz = document.getElementsByClassName("piz"); //vectori pentru afisarea comenzii
let nrs = document.getElementsByClassName("nr");

for (var i = 0; i < minbuts.length; i++) { //se ia fiecare element .minbut si i se asociaza o functie care modifica valoarea din zona de input
    let a = i; //se defineste o noua variabila, care sa asocieze fiecarui buton numai functia care modifica zona de input legata de butonul respectiv. Altfel, un buton va modifica toate valorile clasei .input, chiar si cele neasociate
    minbuts[i].addEventListener("click", function () { //asocierea functiei
        if(ins[a].value>0) {
            ins[a].value--;
        }
    });
}

for (var j = 0; j < plusbuts.length; j++) {
    let b = j;
    plusbuts[j].addEventListener("click", function () {
		ins[b].value++;
    });
}

let submitbut = document.getElementById("submit"); 
submitbut.onclick = function() {
    let sum = ins[0].value*18 + ins[1].value*18 + ins[2].value*21 + ins[3].value*20 + ins[4].value*24 + ins[5].value*26 + ins[6].value*20 + ins[7].value*26;
    if(sum>0) {//se afiseaza lista de comenzi si pretul final salvat in "sum"
        document.getElementById("pizza_list").style.display = "none";
        document.getElementById("comanda_banner").style.display = "none";
        document.getElementById("continue").style.display = "block";
        for(var x = 0; x < ins.length; x++) {
            let y = x;
            if(ins[y].value>0) {
                listpiz[y].style.display = "block";
                nrs[y].innerHTML = "x" + ins[y].value;
            }
        }
        document.getElementById("price").innerHTML = `${sum} RON`;
        let foot = document.getElementsByTagName("footer");
        foot[0].style.bottom = "0";
        foot[0].style.position = "fixed";
        foot[0].style.width = "100%";
    }
    else if(sum==0) alert("Nu ati comandat nimic!");
    else alert("EROARE");
}
 
document.getElementById("back").onclick = function() {//se sterg datele din afisarea comenzii, se revine la selectarea produselor
    document.getElementById("pizza_list").style.display = "flex";
    document.getElementById("comanda_banner").style.display = "block";
    document.getElementById("continue").style.display = "none";
    let foot = document.getElementsByTagName("footer");
    foot[0].style.bottom = "0";
    foot[0].style.position = "relative";
    for(var x = 0; x < ins.length; x++) {//stergerea datelor vechi
        listpiz[x].style.display = "none";
        nrs[x].innerHTML = " ";
    }
}