//Máscaras
export const masks = {
  birthdate(date) {
    return date
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1');
  },
  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },
  phone(phone) {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  },
  cep(cep) {
    return cep
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

};

//Função que faz a máscara funcionar
export function maskReplace() {
  const inputs = document.querySelectorAll('.input-sign-in-page').forEach(input => {
    const field = input.name;
    input.addEventListener('input', (e) => {
      e.target.value = masks[field](e.target.value);
    }, false);
  });
};

//VER COMO VALIDAR AS EXPRESSOES E RETORNAR TRUE OU FALSE
/*
const inputs = document.querySelectorAll('.input-modal');

const patterns = {
  name: /^[\w.*]{1,+}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,15})(\.[a-z]{2,8})?$/,
  birthdate: /^(\d{2})\/(\d{2})\/(\d{4})$/,
  cpf: /(\d{3})(\d{3})(\d{3})(\d{2})/,
  phone:/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
  cep:/[0-9]{5}-[0-9]{3}/,
  address:/[\w.*]{1,+}/
};

function validate(campo, regEx) {
  if (regEx.test(campo.value) === true) {
    campo.classList.add() = 'valid';
  } else {
    campo.classList.add() = 'invalid';
  };
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
*/