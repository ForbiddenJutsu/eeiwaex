//const modal = document.getElementById("myModal");
//
//// Get the button that opens the modal
//const btn = document.getElementById("myBtnHome");
//
//// Get the <span> element that closes the modal
//const span = document.getElementsByClassName("close")[0];
//
//// When the user clicks on the button, open the modal
//btn.onclick = function () {
//  modal.style.display = "block";
//}
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//  modal.style.display = "none";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
//  if (event.target === modal) {
//    modal.style.display = "none";
//  }
//}


const  modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn) {
btn.onclick = function() {
const modal = btn.getAttribute("data-modal");

document.getElementById(modal).style.display = "block";
};
});
const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(function (btn){
  btn.onclick = function () {
const modal = btn.closest('.modal').style.display = 'none';
  }
})

window.onclick = function(e){
  if(e.target.className == 'modal') {
    e.target.style.display = 'none';
  }}
