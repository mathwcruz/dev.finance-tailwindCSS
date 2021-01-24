//Validação de login
const buttonOpenModal = document.getElementById('buttonModal');
let inputPolicyAndTerms = document.getElementById('polycy&terms');
let modalOverlay = document.getElementById('modal-overlay');

buttonOpenModal.addEventListener('click', () => {
  const user = document.getElementById('user');
  const password = document.getElementById('password');

  if (user.value === "" || password.value === "" || !inputPolicyAndTerms.checked) {
    modalOverlay.classList.remove('modal-inactive');
    modalOverlay.classList.add('active');
  } else {
    user.value = "";
    password.value = "";
    window.location.href = '../views/index.html';
  };

})

const buttonCloseModal = document.getElementById('try-again-button');

buttonCloseModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.classList.add('modal-inactive');
});