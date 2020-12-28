// 상품정보 아코디언
// <script defer src="../js/accordion.js"></script> 넣어도 됨!

let title = document.querySelectorAll(".title")
let accordion = document.querySelector(".accordion")
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", accordionFold)
}
function accordionFold(e) {
  let accordionOn = e.target.closest("li")
  accordionOn.classList.toggle("on")
}
