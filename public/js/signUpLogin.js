import {
  openModal,
  buttonCloseModalError,
  changeAlertIcon,
  buttonCloseModalSuccess,
  modalOverlay,
  AlertIcon,
  buttonCloseModal,
} from "./utils.js";

import { masks } from "./masksAndRegEx.js";

//Máscara
function maskReplace() {
  document.querySelectorAll(".mask").forEach((input) => {
    const field = input.name;
    input.addEventListener(
      "input",
      (e) => {
        e.target.value = masks[field](e.target.value);
      },
      false
    );
  });
}

maskReplace();

//Validação de cadastro
const buttonOpenModalRegister = document.querySelector(
  "[data-button-register]"
);
const termsAndPolicy = document.getElementById("polycy&terms");

buttonOpenModalRegister.addEventListener("click", () => {
  const inputsRegister = document.querySelectorAll(".input-modal");

  //VER PQ NAO FUNCIONA
  // for (let x = 0; x < inputsRegister.length; x++) {
  //   if (inputsRegister[x].value === "" || termsAndPolicy.checked === false) {
  //     openModal(modalOverlay);
  //     buttonCloseModalError(buttonCloseModal, modalOverlay);
  //   } else {
  //     const titleModalSuccess = document.querySelector(
  //       "[data-title-modal-success]"
  //     );
  //     const paragraphModalSuccess = document.querySelector(
  //       "[data-paragraph-modal-success]"
  //     );
  //     changeAlertIcon(AlertIcon);

  //     input.value = "";

  //     openModal(modalOverlay);
  //     titleModalSuccess.textContent = "Cadastro efetuado com sucesso!";
  //     paragraphModalSuccess.textContent =
  //       "Clique no botão abaixo para logar-se";
  //     buttonCloseModalSuccess(buttonCloseModal);
  //   }
  // }

  //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
  inputsRegister.forEach((input) => {
    if (input.value === "" || termsAndPolicy.checked === false) {
      openModal(modalOverlay);
      buttonCloseModalError(buttonCloseModal, modalOverlay);
    } else {
      const titleModalSuccess = document.querySelector(
        "[data-title-modal-success]"
      );
      const paragraphModalSuccess = document.querySelector(
        "[data-paragraph-modal-success]"
      );
      changeAlertIcon(AlertIcon);

      input.value = "";

      openModal(modalOverlay);
      titleModalSuccess.textContent = "Cadastro efetuado com sucesso!";
      paragraphModalSuccess.textContent =
        "Clique no botão abaixo para logar-se";
      buttonCloseModalSuccess(buttonCloseModal);
    }
  });
});
