import { Modal, Login } from './utils.js';

import { maskReplace } from './masksAndRegEx.js';

maskReplace();

const validations = [];

function validateForm() {
  if (validations.includes('false')) {
    Modal.openModal(Modal.modalOverlay);
    Modal.closeModal(Modal.buttonCloseModal, Modal.modalOverlay);
  } else {
    window.location.href = "../views/index.html";
  };
};

//Validação de login
Modal.buttonOpenModal.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.input-sign-in-page');

  Login.validateEachInput(inputs, validations);
  validateForm();
});