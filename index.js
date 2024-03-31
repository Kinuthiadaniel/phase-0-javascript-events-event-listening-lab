function addingEventListener() {
const input = document.getElementById("button");
function clickAlert(){
  alert("Who is clicking me?!")
}
const divide = document.getElementById("main");
divide.addEventListener("click", clickAlert)
input.addEventListener("click", clickAlert)
}
addingEventListener();
