let zahl1 = document.getElementById("zahl1");
let zahl2 = document.querySelectorAll(".zahl2");
let zahl3 = document.querySelectorAll(".zahl3");
let zahl4 = document.querySelectorAll(".zahl4");
let zahl6 = document.querySelectorAll(".zahl6");
let zahl7 = document.querySelectorAll(".zahl7");

function example1() {
  zahl1.innerHTML = "45";
  setzeZahl(zahl2, 4);
  setzeZahl(zahl3, 5);
  setzeZahl(zahl4, 25);
  setzeZahl(zahl6, 5);
  setzeZahl(zahl7, 20);
}
function example2() {
    zahl1.innerHTML = "135";
    setzeZahl(zahl2, 13);
    setzeZahl(zahl3, 5);
    setzeZahl(zahl4, 25);
    setzeZahl(zahl6, 14);
    setzeZahl(zahl7, 13*14);
  }
  function example3() {
    zahl1.innerHTML = "65";
    setzeZahl(zahl2, 6);
    setzeZahl(zahl3, 5);
    setzeZahl(zahl4, 25);
    setzeZahl(zahl6, 7);
    setzeZahl(zahl7, 6*7);
  }
  function example4() {
    zahl1.innerHTML = "115";
    setzeZahl(zahl2, "?");
    setzeZahl(zahl3, "?");
    setzeZahl(zahl4, "?");
    setzeZahl(zahl6, "?");
    setzeZahl(zahl7, "?");
   }
  function example5() {
    zahl1.innerHTML = "115";
    setzeZahl(zahl2, 11);
    setzeZahl(zahl3, 5);
    setzeZahl(zahl4, 25);
    setzeZahl(zahl6, 12);
    setzeZahl(zahl7, 11*12);
  }
function setzeZahl(zahlen, setzZahl){
    zahlen.forEach(zahl => zahl.innerHTML = setzZahl )
}