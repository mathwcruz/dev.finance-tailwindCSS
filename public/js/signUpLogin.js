//Função para abrir o modal
function openModal(modal) {
  modal.classList.remove('modal-inactive');
  modal.classList.add('active');
};

//Função para fechar o modal 
function buttonCloseModalError(button, modal) {
  button.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.classList.add('modal-inactive');
  });
};

//Função para mudar o ícone de alerta
function changeAlertIcon(icon) {
  icon.classList.remove('fa-exclamation-triangle');
  icon.classList.add('fa-check');
  icon.classList.add('text-green-700');
};

//Função para fechar o modal contendo mensagem de sucesso ao cadastrar
function buttonCloseModalSuccess(button) {
  button.textContent = "Logar";
  button.classList.add('hover:bg-white');

  button.addEventListener('click', () => {
    window.location.href = "../views/sign-in.html";
  });
};

//Variáveis
const buttonOpenModalLogin = document.getElementById('buttonModal');
let modalOverlay = document.getElementById('modal-overlay');
let AlertIcon = document.querySelector('[data-icon-alert]');
let buttonCloseModal = document.getElementById('try-again-button');

//Validação de cadastro
const buttonOpenModalRegister = document.querySelector('[data-button-register]');
const termsAndPolicy = document.getElementById('polycy&terms');

buttonOpenModalRegister.addEventListener('click', () => {
  const inputsRegister = document.querySelectorAll('.input-modal');
  inputsRegister.forEach((input) => {
    if (input.value === "" || termsAndPolicy.checked === false) {
      openModal(modalOverlay);
      buttonCloseModalError(buttonCloseModal, modalOverlay)
    } else {
      const titleModalSuccess = document.querySelector('[data-title-modal-success]');
      const paragraphModalSuccess = document.querySelector('[data-paragraph-modal-success]');
      changeAlertIcon(AlertIcon);

      input.value = "";

      openModal(modalOverlay);
      titleModalSuccess.textContent = "Cadastro efetuado com sucesso!";
      paragraphModalSuccess.textContent = "Clique no botão abaixo para logar-se";
      buttonCloseModalSuccess(buttonCloseModal);

      //VER PQ AO PREECHER SOMENTE UM CAMPO, ELE JA VALIDA O LOGIN/CADASTRO
    };
  });
});

//Máscaras
const masks = {
  birthdate (date) {
    return date
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1');
  },
  cpf (value) {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  },
  phone (phone) {
      return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  },
  cep (cep) {
    return cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
  }
  
};

//Função que faz a máscara funcionar
document.querySelectorAll('.mask').forEach(input => {
  const field = input.name;
  input.addEventListener('input', (e) => {
    e.target.value = masks[field](e.target.value);
  }, false);
});