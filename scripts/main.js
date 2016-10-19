(function() {
    if (document.readyState != 'loading') {
        let m = new SimpleModal();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            let m = new SimpleModal();
        });
    }
})();