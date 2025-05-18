

let inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let firstName = document.getElementById("first");
        let lastName = document.getElementById("last");
        if(firstName.value == "") {
            alert("Zumindest der Vorname muss eingegeben werden!");
        } 

        if (firstName.value != "") {
        inputForm.classList.add("hide")
        let body = document.getElementsByTagName("body")[0]; 
        body.style.backgroundImage = "linear-gradient(135deg, rgba(255,255,204,1) 25%, transparent 25%), linear-gradient(225deg, #eec628 25%, transparent 25%), linear-gradient(45deg, #eec628 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,204,1) 25%, #e5e5f7 25%)";  
        body.style.backgroundPosition = "10px 0, 10px 0, 0 0, 0 0"; 
        body.style.backgroundRepeat = "repeat"; 
        let certificate = document.getElementById("showCertificate");
        certificate.classList.remove("hide")
        let intro = document.querySelector(".intro"); 
        intro.classList.add("hide"); 
        let setzeVorname = document.getElementById("setzeVorname"); 
        setzeVorname.innerHTML = firstName.value; 
        let setzeNachname = document.getElementById("setzeNachname"); 
        setzeNachname.innerHTML = lastName.value;
        } 

});
   

