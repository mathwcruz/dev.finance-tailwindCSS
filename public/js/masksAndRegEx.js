//Máscaras
export const masks = {
  birthdate(date) {
    return date
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\/\d{4})\d+?$/, "$1");
  },
  cpf(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  },
  phone(phone) {
    return phone
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
};

//Função que faz a máscara funcionar
//REFATORAR PARA UTILIZAR APEANS UMA VEZ
export function maskReplace() {
  const inputs = document
    .querySelectorAll(".input-sign-in-page")
    .forEach((input) => {
      const field = input.name;
      input.addEventListener(
        "input",
        (e) => {
          e.target.value = masks[field](e.target.value);
        },
        false
      );
    });
};

//VER COMO VALIDAR AS EXPRESSOES E RETORNAR TRUE OU FALSE
/*
const inputs = document.querySelectorAll(".input-modal");

export const patterns = {
  name: /^[\w.*]{1,+}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,15})(\.[a-z]{2,8})?$/
};

export function validate(campo, regEx) {
  if (regEx.test(campo.value) === true) {
    campo.classList.add() = "valid";
  } else {
    campo.classList.add() = "invalid";
  }
}
*/
