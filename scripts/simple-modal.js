let modals = document.querySelectorAll('.modal');
let modalPanels = document.querySelectorAll('.modal-panel');
for (modalPanel of modalPanels) {
    modalPanel.addEventListener('click', function(e) {
        if (e.target === this)
            this.style.display = "none";
    }, false);
}

for (let modal of modals) {
    modal.addEventListener('click', function() {
        let contentId = this.id;
        console.log(contentId);
        let modalPanel = document.querySelector(`#${contentId}.modal-panel`);
        modalPanel.style.display = "flex";
    }, false);
}