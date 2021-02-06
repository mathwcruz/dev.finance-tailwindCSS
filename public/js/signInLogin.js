import { Modal } from './utils.js';

import { masks } from './masksAndRegEx.js';

//Função paara setar máscaras nos inputs do formulários
function maskReplace() {
  const inputs = document.querySelectorAll('#cpf');
  inputs.forEach((input) => {
    const field = input.name;
    input.addEventListener("input", (e) => {
      e.target.value = masks[field](e.target.value);
    }, false
    );
  });
};

//Função para validar o formulário de login
function validateForm() {
  const inputCPF = document.getElementById('cpf').value;
  const inputPassword = document.getElementById('password').value;

  if (inputCPF === "" || inputPassword === "") {
    Modal.openModal(Modal.modalOverlay);
    Modal.closeModal(Modal.buttonCloseModal, Modal.modalOverlay);
  } else {
    window.location.href = '../views/index.html';
  };
};

maskReplace();

//Validação de login
Modal.buttonOpenModal.addEventListener('click', () => {
  validateForm();
});