//what if we wanted to have limitless modals?
//what if we wanted to have chained modals?
//what if we wanted different sizes?
//what if the content was from another file?
//what if we wanted other methods for closing/opening the modal?
//what if we wanted the user to be able to use arbitrary selectors names?
let modals = document.querySelectorAll('.modal');
let modalPanel = document.querySelector('#modal-panel');
modalPanel.addEventListener('click', function(e) {
    if (e.target === this)
        this.style.display = "none";
}, false);

for (let modal of modals) {
    modal.addEventListener('click', function() {
        let contentId = this.dataset.modalContent;
        console.log(contentId);
        let modalContent = document.querySelector(`#${contentId}`).cloneNode();
        modalContent.classList.add('open');
        modalPanel.innerHTML = '';

        modalPanel.appendChild(modalContent);
        modalPanel.style.display = "flex";
    }, false);
}