let modal = document.querySelector('.modal');
let modalPanel = document.querySelector('#modal-panel');
modalPanel.addEventListener('click', function(e) {
    if (e.target === this)
        modalPanel.style.display = "none";

}, false);
modal.addEventListener('click', function() {
    modalPanel.style.display = "flex";
}, false);