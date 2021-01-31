import { Modal } from './utils.js';

import { maskReplace } from './masksAndRegEx.js';

maskReplace();

//Validação de login
Modal.buttonOpenModal.addEventListener('click', () => {
  const inputsLogin = document.querySelector('.input-sign-in-page');
  const inputCPF = document.getElementById('cpf');
  const inputPassword = document.getElementById('password');

  //  MELHORAR ISSO
  if (inputCPF.value.trim() === "" || inputPassword.value.trim() === "") {
    Modal.openModal(Modal.modalOverlay);
    Modal.closeModal(Modal.buttonCloseModal, Modal.modalOverlay);
  } else {
    inputCPF.value = "";
    inputPassword.value = "";
    window.location.href = "../views/index.html";
  };

  // Fazer isso funcionar
  // inputsLogin.forEach((input) => {
  //   if (input.value === "") {
  //     Modal.openModal(Modal.modalOverlay);
  //     Modal.closeModal(Modal.buttonCloseModal, Modal.modalOverlay)
  //   } else {
  //     input.value = "";
  //       //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
  //       window.location.href = "../views/index.html";
  //   };
  // });
});