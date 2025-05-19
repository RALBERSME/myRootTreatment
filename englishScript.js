const button3 = document.getElementById("button3"); 
const agreement = document.querySelector(".agreement");
const intro1 = document.querySelector(".intro1");

button3.addEventListener("click", function(){
    button3.innerHTML = "First agree to the waiver of liability" + "<br>" + 
                        "(move the slider to the right)."
    agreement.classList.remove("hide");
    intro1.style.animation = "introStop 3s ease-in-out infinite"
    button3.style.background = "linear-gradient(to bottom,rgb(192, 248, 6), #c0f318);";
    button3.disabled = "true";
})

function goAhead1() {
    const confirm1 = document.getElementById("confirm1").checked
    button3.innerHTML = "Well Done!"
    button3.style.fontSize = "1.5rem";
    button3.style.background = "linear-gradient(to bottom,rgb(192, 248, 6), #c0f318);";
     // document.getElementById("tooth1").classList.remove("hide")
    document.getElementById("girl").src= "Images/hai.png"; 
    document.getElementById("label").innerHTML ="Yes, I agree with everything!"
    setTimeout(() =>{
        window.location.href = 'warmUpEngl.html';
    }, 3000)
  }