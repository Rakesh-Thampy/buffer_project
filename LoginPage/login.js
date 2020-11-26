// Get the modal
var login= document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        modal.style.display = "none";
    }
}