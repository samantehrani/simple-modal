let modals = document.querySelectorAll('.modal');
let modalPanel = document.querySelector('#modal-panel');
modalPanel.addEventListener('click', function(e) {
    if (e.target === this)
        modalPanel.style.display = "none";

}, false);
for (let modal of modals) {
    modal.addEventListener('click', function() {
        modalPanel.style.display = "flex";
    }, false);
}