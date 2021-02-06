import { Modal } from "./utils.js";

import { masks } from "./masksAndRegEx.js";

//Máscara
function maskReplace() {
  document.querySelectorAll(".mask").forEach((input) => {
    const field = input.name;
    input.addEventListener("input", (e) => {
      e.target.value = masks[field](e.target.value);
    }, false
    );
  });
};

maskReplace();

//Validação de cadastro
const buttonOpenModalRegister = document.querySelector("[data-button-register]");
const termsAndPolicy = document.getElementById("polycy&terms");
const icon = document.querySelector('[data-icon]');

//Função para validar o formulário de cadastro
function validateForm() {
  const inputName = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const inputBirthdate = document.getElementById('birthdate').value;
  const inputCPF = document.getElementById('cpf').value;
  const inputPhone = document.getElementById('phone').value;
  const inputPassword = document.getElementById('password').value;

  if(inputName === "" || inputEmail === "" || inputBirthdate === "" || inputCPF === "" || inputPhone === "" || inputPassword === "" ||termsAndPolicy.checked === false) {
    Modal.openModal(Modal.modalOverlay);
    Modal.closeModal(Modal.buttonCloseModal, Modal.modalOverlay);
  } else {
    const titleModalSuccess = document.querySelector("[data-title-modal-success]");
    const paragraphModalSuccess = document.querySelector("[data-paragraph-modal-success]");

    Modal.openModal(Modal.modalOverlay);
    Modal.changeIcon(icon);
    titleModalSuccess.textContent = "Cadastro efetuado com sucesso!";
    paragraphModalSuccess.textContent = "Clique no botão abaixo para logar-se";
    Modal.buttonCloseModal.innerHTML = "Logar";
    Modal.buttonCloseModal.addEventListener('click', () => {
      window.location.href = '../views/sign-in.html';
    });
  };
};

buttonOpenModalRegister.addEventListener("click", () => {
  validateForm();
});