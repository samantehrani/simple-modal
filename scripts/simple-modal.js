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