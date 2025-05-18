const button1 = document.getElementById("button1"); 
const button2 = document.getElementById("button2"); 
const agreement = document.querySelector(".agreement");
const intro = document.querySelector(".intro");


button1.addEventListener("click", function(){
    button1.innerHTML = "Stimme zunächst dem Haftungsverzicht zu" + "<br>" + 
                        "(schiebe den Regler nach rechts)."
    agreement.classList.remove("hide");
    intro.style.animation = "introStop 3s ease-in-out infinite"
    button2.style.display = "none"; 
    button1.style.background = "linear-gradient(to bottom,rgb(192, 248, 6), #c0f318);";
})

function goAhead() {
    const confirm = document.getElementById("confirm").checked
    button1.innerHTML = "Gut gemacht!"
    button1.style.fontSize = "1.5rem";
    button1.style.background = "linear-gradient(to bottom,rgb(192, 248, 6), #c0f318);";
    document.getElementById("tooth").classList.remove("hide")
    document.querySelector("label").innerHTML ="Ja, ich bin mit allem einverstanden!"
    setTimeout(() =>{
        window.location.href = 'warmUp.html';
    }, 3000)
  }
