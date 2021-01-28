import {
  buttonOpenModalLogin,
  buttonCloseModalLogin,
  modalOverlay,
  openModal,
  buttonCloseModalError,
} from './utils.js';

import { maskReplace, masks } from './masksAndRegEx.js';

//Máscara
// const masks = {
//   cpf(value) {
//     return value
//       .replace(/\D/g, '')
//       .replace(/(\d{3})(\d)/, '$1.$2')
//       .replace(/(\d{3})(\d)/, '$1.$2')
//       .replace(/(\d{3})(\d{1,2})/, '$1-$2')
//       .replace(/(-\d{2})\d+?$/, '$1');
//   }
// };

const inputs = document.querySelectorAll('.input-sign-in-page');

maskReplace();

//Validação de login
buttonOpenModalLogin.addEventListener('click', () => {
  const inputCPF = document.getElementById('cpf');
  const inputPassword = document.getElementById('password');

  //  MELHORAR ISSO
  if (inputCPF.value === "" || inputPassword.value === "") {
    openModal(modalOverlay);
    buttonCloseModalError(buttonCloseModalLogin, modalOverlay)
  } else {
    inputCPF.value = "";
    inputPassword.value = "";
    window.location.href = "../views/index.html";
  };

  // Fazer isso funcionar
  // inputsLogin.forEach((input) => {
  //   if (input.value === "") {
  //     openModal(modalOverlay);
  //     buttonCloseModalError(buttonCloseModalLogin, modalOverlay)
  //   } else {
  //     input.value = "";
  //       //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
  //       window.location.href = "../views/index.html";
  //   };
  // });
});