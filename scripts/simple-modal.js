//what if we wanted to have limitless modals?
//what if we wanted to have chained modals?
//what if we wanted different sizes?
//what if the content was from another file?
//what if we wanted other methods for closing/opening the modal?
//what if we wanted the user to be able to use arbitrary selectors names?
class SimpleModal {
    constructor(cas = 'modal') {
        this.contentAttributeSelector = cas;
        this.contentAttribute = cas.replace(/(\-\w)/g, (m) => m[1].toUpperCase());

        this.modalPanel = document.createElement('div');
        this.modalPanel.setAttribute('id', `${this.contentAttributeSelector}-layer`);

        this.stylesheet = this.addStyleSheet();
        this.registerModals();
    }
    addStyleSheet() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(`#${this.contentAttributeSelector}-layer {
                                                        position: fixed;
                                                        justify-content: center;
                                                        align-items: center;
                                                        top: 0;
                                                        left: 0;
                                                        width: 100vw;
                                                        height: 100vh;
                                                        background-color: rgba(0, 0, 0, 0.7);
                                                    }
                                                    [data-${this.contentAttributeSelector}-content] {
                                                        display: none;
                                                    }`));
        document.head.appendChild(style);
        return style.sheet;
    }
    registerModals() {
        let modals = document.querySelectorAll(`[data-${this.contentAttributeSelector}]`);
        for (let modal of modals) {
            modal.addEventListener('click', (evnt) => this.handleClick(evnt), false);
        }
    }
    parseOptions(str) {
        //validate str
        //apply defaults
        return JSON.parse(str);
    }
    handleClick(evnt) {
        this.openModal(this.parseOptions(evnt.target.dataset[this.contentAttribute]));
    }
    openModal(options) {
        console.log(options);
        let content;
        if (options.contentId) {
            let contentHolderNode = document.querySelector(`[data-${this.contentAttributeSelector}-content=${options.contentId}]`);
            content = contentHolderNode.innerHTML || 'No Content Found!';
        }
        this.modalPanel.innerHTML = content;
        document.body.appendChild(this.modalPanel);

    }
}