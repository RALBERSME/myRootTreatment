let zahl1 = document.querySelectorAll(".zahl1");
let zahl2 = document.querySelectorAll(".zahl2");
let zahl3 = document.querySelectorAll(".zahl3");
let zahl4 = document.querySelectorAll(".zahl4");
let zahl5 = document.querySelectorAll(".zahl5");
let zahl6 = document.querySelectorAll(".zahl6");
let zahl7 = document.querySelectorAll(".zahl7");
let zahl8 = document.querySelectorAll(".zahl8");
let zahl9 = document.querySelectorAll(".zahl9");
let zahl10 = document.querySelectorAll(".zahl10");
let zahl11 = document.querySelectorAll(".zahl11");
let zahl12 = document.querySelectorAll(".zahl12");
let zahl13 = document.querySelectorAll(".zahl13");
let zahl14 = document.querySelectorAll(".zahl14");
let operator = document.getElementById("operator")


function example1() {
    setzeZahl(zahl1, 2209);
    setzeZahl(zahl2, 22);
    setzeZahl(zahl3, 9);
    setzeZahl(zahl4, 16);
    setzeZahl(zahl5, 25);
    setzeZahl(zahl6, 4);
    setzeZahl(zahl7, 9);
    setzeZahl(zahl8, 3);  
    setzeZahl(zahl9, 7);
    setzeZahl(zahl10, 45);
    setzeZahl(zahl11, "4 x (4 + 1)");
    setzeZahl(zahl12, 5);
    setzeZahl(zahl13, 2025);
    setzeZahl(zahl14, 47); 
    operator.innerHTML = " größer ";   
  }
  function example2() {
    setzeZahl(zahl1, 3844);
    setzeZahl(zahl2, "?");
    setzeZahl(zahl3, "?");
    setzeZahl(zahl4, "?");
    setzeZahl(zahl5, "?");
    setzeZahl(zahl6, "?");
    setzeZahl(zahl7, "?");
    setzeZahl(zahl8, "?");  
    setzeZahl(zahl9, "?");
    setzeZahl(zahl10, "?");
    setzeZahl(zahl11, "?");
    setzeZahl(zahl12, "?");
    setzeZahl(zahl13, "?");
    setzeZahl(zahl14, "?"); 
    operator.innerHTML = " ??? ";   
  }
  function example3() {
    setzeZahl(zahl1, 3844);
    setzeZahl(zahl2, 38);
    setzeZahl(zahl3, 44);
    setzeZahl(zahl4, 36);
    setzeZahl(zahl5, 49);
    setzeZahl(zahl6, 6);
    setzeZahl(zahl7, 4);
    setzeZahl(zahl8, 2);  
    setzeZahl(zahl9, 8);
    setzeZahl(zahl10, 65);
    setzeZahl(zahl11, "6 x (6 + 1)");
    setzeZahl(zahl12, 5);
    setzeZahl(zahl13, 4225);
    setzeZahl(zahl14, 62);   
    operator.innerHTML = " größer ";  
  }
  function setzeZahl(zahlen, setzZahl){
    zahlen.forEach(zahl => zahl.innerHTML = setzZahl )
}

function tables() {
 document.getElementById("imageId").src="Images/tables.png";
}
function table1() {
  document.getElementById("imageId").src="Images/table1.png";
 }
 function table2() {
  document.getElementById("imageId").src="Images/table2.png";
 }