//Variáveis
const buttonOpenModalLogin = document.getElementById('buttonModal');
const buttonCloseModalLogin = document.getElementById('try-again-button');
let modalOverlay = document.getElementById('modal-overlay');

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

//Validação de login
buttonOpenModalLogin.addEventListener('click', () => {
  const inputCPF = document.getElementById('cpf');
  const inputPassword = document.getElementById('password');

  //FAZER UMA MÁSCARA PARA O INPUT DE CPF
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