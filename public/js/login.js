//Validação de login
const buttonOpenModal = document.getElementById('buttonModal');

buttonOpenModal.addEventListener('click', () => {
  const user = document.getElementById('user');
  const password = document.getElementById('password');

  if (user.value == "" || password.value == "") {
    var modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('active');
    // return false;
  } else {
    user.value = "";
    password.value = "";
  };

  console.log("ta funfando?");
})

const buttonCloseModal = document.getElementById('try-again-button');

buttonCloseModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});