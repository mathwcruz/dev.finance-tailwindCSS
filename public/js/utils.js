export const Modal = {
  //Variáveis
  buttonOpenModal: document.querySelector('#buttonModal'),
  buttonCloseModal: document.querySelector('#try-again-button'),
  modalOverlay: document.querySelector('#modal-overlay'),
  //Métodos
  openModal(modal) {
    modal.classList.remove('modal-inactive');
    modal.classList.add('active');
  },
  closeModal(button, modal) {
    button.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.classList.add('modal-inactive');
    });
  },
  changeIcon(icon) {
    icon.classList.remove('fa-exclamation-triangle');
    icon.classList.add('fa-check');
    icon.classList.add('text-background');
  }
};

export const Login = {
  //Métodos
  validateEachInput(inputs, validations) {
    inputs.forEach(input => {
      if (input.value === "") {
        validations.push('false');
      } else {
        validations.push('true');
      };
    });
    return validations;
  }
};