import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close")
        this.events();
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    events() {
        //click open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //click the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        //any key pressed
        $(document).keyup(this.keyPressHandler.bind(this));
    }
}

export default Modal;