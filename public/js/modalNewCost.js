const buttonNewTransaction = document.querySelector('[data-new-transaction-button]');
const buttonCancelNewTransaction = document.querySelector('[data-button-cancel]');
const modalOverlay = document.querySelector('[data-modaloverlay]');

buttonNewTransaction.addEventListener('click', () => {
  modalOverlay.classList.remove('modal-inactive');
  modalOverlay.classList.add('active');
});

buttonCancelNewTransaction.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.classList.add('modal-inactive');
});