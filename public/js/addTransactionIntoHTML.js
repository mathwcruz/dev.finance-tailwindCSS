import { formatCurrency } from './utils.js';
//Variáveis do Dashboard
export const transactions = [
  {
    description: 'Aluguel',
    amount: -40000, //gasto de R$400,00
    date: '23/01/2021'
  },
  {
    description: 'Salário',
    amount: 180000, //entrada de R$1800,00
    date: '23/01/2021'
  },
  {
    description: 'Bebida',
    amount: -4500, //gasto de R$45,00
    date: '23/01/2021'
  },
];

export const all = transactions;

//Função para setar os dados no HTML
function innerHTMLTransaction(transaction) {
  const CSSclass = transaction.amount > 0 ? "text-income" : "text-expense"; //se for um numero positivo, recebe a classe income, se for negativo, recebe a classe expanse

  const amount = formatCurrency(transaction.amount); //formatando a moeda para R$

  const html = `
      <td class="text-fontDefault table-tbody-td">${transaction.description}</td>
      <td class="font-bold ${CSSclass} table-tbody-td">${amount}</td>
      <td class="date table-tbody-td">${transaction.date}</td>
      <td class="table-tbody-td">
        <img
          class="cursor-pointer"
          src="../images/minus.svg"
          alt="Remover transação"/>
      </td>
  `;
  return html;
};

//Variável contendo o corpo da tabela
const transactionsContainer = document.querySelector('[data-tbody]');

//Função para adicionar a transação
export function addTransaction(transaction, index) {
  const tr = document.createElement('tr');
  tr.classList.add('table-tbody-tr');
  tr.innerHTML = innerHTMLTransaction(transaction);

  transactionsContainer.appendChild(tr);
};

//Função para limpar transações repetidas
export function clearTransactions() {
  transactionsContainer.innerHTML = '';
};