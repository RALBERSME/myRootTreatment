const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")

function changeVisibility() {
    section1.classList.add("hide");
    section2.classList.remove("hide")
}
// select video element
let videoEl = document.getElementById('video');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
videoEl.pause();
 
// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    videoEl.pause();
};

// refresh video frames on interval for smoother playback
setInterval(function(){
    videoEl.currentTime = window.pageYOffset/600;
}, 40);

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll > "10750") {
      window.location.href = "secret.html"
    }
   
});