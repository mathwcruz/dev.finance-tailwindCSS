import {
  buttonCloseModalLogin,
  modalOverlay,
  openModal,
  buttonCloseModalError,
  formatAmount
} from './utils.js';

//Variáveis
const button = document.querySelector('[data-button-transaction]');
let inputDescription = document.querySelector('input#description').value;
let inputAmount = document.querySelector('input#amount').value;
let inputDate = document.querySelector('input#date').value;

//Função para validar o formulário
function validateFields() {
  if (inputDescription.trim() === "" || inputAmount.trim() === "" || inputDate.trim() === "") {
    // openModal(modalOverlay);
    // buttonCloseModalError(buttonCloseModalLogin, modalOverlay);
  } else {
    inputDescription.value = '';
    inputAmount.value = '';
    inputDate.value = '';
  }
};

//Função para formatar os dados
function formatValues() {
  inputAmount= formatAmount(inputAmount);
};

//Função para submeter os dados do formulário
button.addEventListener('click', (event) => {
  event.preventDefault();

  validateFields();
  formatValues();

});