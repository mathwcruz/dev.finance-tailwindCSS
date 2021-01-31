//Variáveis Sign-in Sign-up page
export const buttonOpenModalLogin = document.getElementById('buttonModal');
export const buttonCloseModalLogin = document.getElementById('try-again-button');
export let modalOverlay = document.getElementById('modal-overlay');
export let AlertIcon = document.querySelector('[data-icon-alert]');
export let buttonCloseModal = document.getElementById('try-again-button');

//Variáveis Modal - New Transaction
export const buttonNewTransaction = document.querySelector('[data-new-transaction-button]');
export const buttonCancelNewTransaction = document.querySelector('[data-button-cancel]');

//Função para abrir o modal da sign-up sign-in page
export function openModal(modal) {
  modal.classList.remove('modal-inactive');
  modal.classList.add('active');
};

//Função para fechar o modal da sign-up sign-in page
export function buttonCloseModalError(button, modal) {
  button.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.classList.add('modal-inactive');
  });
};

//Função para mudar o ícone de alerta
export function changeAlertIcon(icon) {
  icon.classList.remove('fa-exclamation-triangle');
  icon.classList.add('fa-check');
  icon.classList.add('text-green-700');
};

//Função para fechar o modal contendo mensagem de sucesso ao cadastrar
export function buttonCloseModalSuccess(button) {
  button.textContent = "Logar";
  button.classList.add('hover:bg-white');

  button.addEventListener('click', () => {
    window.location.href = "../views/sign-in.html";
  });
};

//Função para formatar a moeda
export function formatCurrency(value) {
  const signal = Number(value) < 0 ? '-' : ''; //recebendo sinal de negativo caso o número seja menor que 0 e não irá receber nada se for maior do que 0

  value = String(value).replace(/\D/g, ''); //trocando tudo que não for número, por um espaço em branco

  value = Number(value) / 100; //formatando o número com casas decimais

  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });//formatando na moeda brasileira (R$)

  return signal + value; //retornando o valor formatado
};

//Função para formatar o valor da transação
export function formatAmount(value) {
  value = Number(value) * 100;

  console.log(value);

  return value;
};