const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")

function changeVisibility() {
    section1.classList.add("hide");
    section2.classList.remove("hide")
}
let videoEl = document.getElementById('video');
videoEl.pause();
 
window.onscroll = function(){
    videoEl.pause();
};

setInterval(function(){
    videoEl.currentTime = window.pageYOffset/600;
}, 40);

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll > "10750") {
      window.location.href = "secretEngl.html"
    }
   
});