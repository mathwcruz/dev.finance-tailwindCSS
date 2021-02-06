//Métodos para abrir e fechar o modal
const Modal = {
  open() {
    document.querySelector("[data-modaloverlay]").classList.remove("modal-inactive");
    document.querySelector("[data-modaloverlay]").classList.add("active");
  },
  close() {
    document.querySelector("[data-modaloverlay]").classList.remove("active");
    document.querySelector("[data-modaloverlay]").classList.add("modal-inactive");
  }
};

//Armazenando as informações no LocalStorage
const Storage = {
  //pegando os dados salvos
  get() {
    //transformando a String em Array ao ser pego do browser
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  //setando os dados salvos
  set(transactions) {
    localStorage.setItem(
      "dev.finances:transactions",
      JSON.stringify(transactions) //transformando o Array em String para ser salvo no browser
    );
  },
};

//Métodos para transação
const Transaction = {
  all: Storage.get(),

  //adicionar uma transação
  add(transaction) {
    Transaction.all.push(transaction);

    App.reload();
  },

  //remover uma transação
  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },

  //calcular o valor total das entradas
  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      };
    });
    return income;
  },

  //calcular o valor total das saídas
  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      };
    });
    return expense;
  },

  //calcular o valor total da conta
  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

//Métodos para lidar com o contéudo na página
const DOM = {
  transactionsContainer: document.querySelector("[data-tbody]"),

  //adicionando uma transação
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    tr.dataset.index = index;

    DOM.transactionsContainer.appendChild(tr);
  },

  //setando e estilizando a transação na tabela
  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "text-income" : "text-expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="text-fontDefault table-tbody-td">${transaction.description}</td>
      <td class="font-bold ${CSSclass} table-tbody-td">${amount}</td>
      <td class="date table-tbody-td">${transaction.date}</td>
      <td class="table-tbody-td">
        <img
          onclick="Transaction.remove(${index})"
          class="cursor-pointer"
          src="../images/minus.svg"
          alt="Remover transação"/>
      </td>
      `;

    return html;
  },

  //Atualizando os valores dde entradas, saídas e total
  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  //Excluindo transações repetidas
  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

//Métodos que iráo ser usados posteriormente
const Utils = {
  //formatando o valor da transação
  formatAmount(value) {
    value = value * 100;

    return Math.round(value);
  },

  //formatando a data da transação
  formatDate(date) {
    const splittedDate = date.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  //formatando o valor para moeda (R$)
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

//Méotodos para lidar com o formulário de nova transação
const Form = {
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  //pegando os inputs
  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  //validando os campos do formulário
  validateFields() {
    const { description, amount, date } = Form.getValues();

    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Por favor, preencha todos os campos");
    };
  },

  //formatando os valores do formulário
  formatValues() {
    let { description, amount, date } = Form.getValues();

    amount = Utils.formatAmount(amount);

    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  //limpando os campos do formulário
  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  //acumulando todos os métodos ao enviar os dados do formulário
  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.add(transaction);
      Form.clearFields();
      Modal.close();
    } catch (error) {
      alert(error.message);
    };
  },
};

//Métodos para iniciar e atualizar a aplicação
const App = {
  //iniciando a aplicação
  init() {
    //setando, no HTML, todas as transações realizadas
    Transaction.all.forEach(DOM.addTransaction);

    //atualizando os valores de saída, entrada e total
    DOM.updateBalance();

    //salvando as transações no LocalStorage
    Storage.set(Transaction.all);
  },
  //Atualiando os dados
  reload() {
    //excluindo transações repetidas
    DOM.clearTransactions();

    //iniciando a aplicação com os novos dados
    App.init();
  },
};

App.init();
