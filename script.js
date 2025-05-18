const button = document.querySelector("button"); 
const agreement = document.querySelector(".agreement");
const intro = document.querySelector(".intro");


button.addEventListener("click", function(){
    button.innerHTML = "Stimme zunächst dem Haftungsverzicht zu" + "<br>" + 
                        "(schiebe den Regler nach rechts)."
    agreement.classList.remove("hide");
    intro.style.animation = "introStop 3s ease-in-out infinite"

})

function goAhead() {
    const confirm = document.getElementById("confirm").checked
    button.innerHTML = "Gut gemacht!"
    button.style.color = "black"; 
    button.style.fontSize = "1.5rem";
    button.style.backgroundColor = "#c0f318";
    document.getElementById("tooth").classList.remove("hide")
    document.querySelector("label").innerHTML ="Ja, ich bin mit allem einverstanden!"
    setTimeout(() =>{
        window.location.href = 'warmUp.html';
    }, 3000)
  }
