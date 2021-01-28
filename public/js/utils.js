//Função para abrir o modal
export function openModal(modal) {
  modal.classList.remove('modal-inactive');
  modal.classList.add('active');
};

//Função para fechar o modal 
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

//Variáveis
export const buttonOpenModalLogin = document.getElementById('buttonModal');
export const buttonCloseModalLogin = document.getElementById('try-again-button');
export let modalOverlay = document.getElementById('modal-overlay');
export let AlertIcon = document.querySelector('[data-icon-alert]');
export let buttonCloseModal = document.getElementById('try-again-button');