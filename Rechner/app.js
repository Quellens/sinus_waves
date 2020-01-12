// Zahlen
const eins = document.getElementById("1");
const zwei = document.getElementById("2");
const drei = document.getElementById("3");
const vier = document.getElementById("4");
const fünf = document.getElementById("5");
const sechs = document.getElementById("6");
const sieben = document.getElementById("7");
const acht = document.getElementById("8");
const neun = document.getElementById("9");
const nuLL = document.getElementById("0");

// Zeichen
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mal = document.getElementById("mal");
const teil = document.getElementById("gteilt");
const point = document.getElementById("point");

//resetbutton und Ergebnisanzeige
const erg = document.getElementById("r");
var anzeige = "";
const resetbutton = document.getElementById("reset");

//resete die Rechnung
function reset() {erg.value = ""; location.reload()}
resetbutton.addEventListener('click', reset);
const removebttn = document.getElementById("remove");
//remove den letzten Wert der Rechnung
function remove() {
    function cutter() {
        anzeige = anzeige.substring(0, anzeige.length - 1);
        return anzeige;
    }
    erg.value = cutter();
}
removebttn.addEventListener("click", remove);


//concatter
 function concatter(val){
     anzeige = anzeige.concat(val);
     return anzeige;
 }

// Zeige die Rechnung im Input-Feld;
function zahlen() {
    function one() {erg.value = concatter(1)}
    eins.addEventListener('click', one);

    function two() { erg.value = concatter(2)}
    zwei.addEventListener('click', two);

    function three() {erg.value = concatter(3)}
    drei.addEventListener('click', three);

    function four() {erg.value = concatter(4)}
    vier.addEventListener('click', four);

    function five() {erg.value = concatter(5)}
    fünf.addEventListener('click', five);

    function six() {erg.value = concatter(6)}
    sechs.addEventListener('click', six);

    function seven() {erg.value = concatter(7)}
    sieben.addEventListener('click', seven);

    function eight() {erg.value = concatter(8)}
    acht.addEventListener('click', eight);

    function nine() {erg.value = concatter(9)}
    neun.addEventListener('click', nine);

    function zero() {erg.value = concatter(0)}
    nuLL.addEventListener('click', zero);
}
zahlen()

// Zeige die Zeichen im Input-Feld;
function zeichen() {
    function teile() {erg.value = concatter("/")}
    
    function substrahier() {erg.value = concatter("-")}
    
    function multiplizier() {erg.value = concatter("*")}

    function addier() {erg.value = concatter("+")}

    function punktier() {erg.value = concatter(".")}

        mal.addEventListener('click', multiplizier);
        teil.addEventListener('click', teile);
        plus.addEventListener('click', addier);
        minus.addEventListener('click', substrahier);
        point.addEventListener('click', punktier)
}
zeichen();



//Rechnung berechnen
function gerechnet() {
    
   function runde(num){return Math.round(num * 100) / 100}
    
   function check(input) {
            var nur_das = "0123456789()-+*/.";
            for (var i = 0; i < input.length; i++)
            return nur_das.includes(input[i]);
            }
    
    if (check(erg.value)){
        //Hier wird gerechnet.:
    erg.value = runde(eval(erg.value))
    anzeige = erg.value;
    }
    if (anzeige == "undefined" || anzeige == "Infinity" || anzeige == "NaN") {
        erg.value = "Error"
        alert("Error, kein Ergebnis!")
    }
}

const istgleichbttn = document.getElementById("erg");

istgleichbttn.addEventListener('click', gerechnet);


