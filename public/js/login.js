//Função para abrir o modal
function openModal(modal) {
  modal.classList.remove('modal-inactive');
  modal.classList.add('active');
};

//Função para fechar o modal 
function closeModal(modal) {
  modal.classList.remove('active');
  modal.classList.add('modal-inactive');
};

//Função para mudar o ícone de alerta
function changeAlertIcon(icon) {
  icon.classList.remove('fa-exclamation-triangle');
  icon.classList.add('fa-check');
  icon.classList.add('text-green-700');
};

//Função para fechar o modal contendo mensagem de sucesso ao cadastar
function buttonCloseModalSuccess(button) {
  button.textContent = "Logar";
  button.classList.add('hover:bg-white');

  button.addEventListener('click', () => {
    window.location.href = "../views/sign-in.html";
  });
};

//Variáveis globais
const buttonOpenModalLogin = document.getElementById('buttonModal');
let modalOverlay = document.getElementById('modal-overlay');
let AlertIcon = document.querySelector('[data-icon-alert]');
let buttonCloseModal = document.getElementById('try-again-button');

//Validação de login
buttonOpenModalLogin.addEventListener('click', () => {
  const inputsLogin = document.querySelectorAll('.input-mark');
  inputsLogin.forEach((input) => {
    if (input.value === "") {
      openModal(modalOverlay);
    } else {
      input.value = "";
      //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
      // window.location.href = "../views/index.html";
    };
  });
});

//Validação de cadastro
const buttonOpenModalRegister = document.querySelector('[data-button-register]');
const termsAndPolicy = document.getElementById('polycy&terms');

buttonOpenModalRegister.addEventListener('click', () => {
  const inputsRegister = document.querySelectorAll('.input-modal');
  inputsRegister.forEach((input) => {
    if (input.value === "" || termsAndPolicy.checked === false) {
      openModal(modalOverlay);
    } else {
      const titleModalSuccess = document.querySelector('[data-title-modal-success]');
      const paragraphModalSuccess = document.querySelector('[data-paragraph-modal-success]');
      changeAlertIcon(AlertIcon);

      input.value = "";

      openModal(modalOverlay);
      titleModalSuccess.textContent = "Cadastro efetuado com sucesso!";
      paragraphModalSuccess.textContent = "Clique no botão abaixo para seguir para logar-se";
      buttonCloseModalSuccess(buttonCloseModal);

      //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
    };
  });
});