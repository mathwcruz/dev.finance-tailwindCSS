import { formatCurrency } from './utils.js';
import { all, transactions } from './addTransactionIntoHTML.js';
import { App } from './addNewTransaction.js';

//Funções para calcular entradas, saídas e o total
//VER COMO DEIXAR O NUMERO COM UMA CLASSE DIFERENTE CASO SEJA NEGATIVO
function incomes() {
  let income = 0;

  all.forEach(transaction => {
    if (transaction.amount > 0) {
      income += transaction.amount; //somando as entradas
    }
  });

  return income;
};

function expenses() {
  let expense = 0;

  all.forEach(transaction => {
    if (transaction.amount < 0) {
      expense += transaction.amount; //somando as saídas
    };
  });

  return expense;
};

function total() {
  return incomes() + expenses(); //retornando o total, seja negativo ou positivo
};

export function add(transaction) {
  all.push(transaction);

  App.reload();
}

//Função para remover uma transação
export function remove(index) {
  all.splice(index, 1); //deletando um elemento a partir do index

  App.reload();
};

//Função para atualizar os valores do Dashboard
export function updateBalance() {
  document.querySelector('#incomeDisplay').innerHTML = formatCurrency(incomes()); //upadate entradas
  document.querySelector('#expenseDisplay').innerHTML = formatCurrency(expenses()); //update saidas
  document.querySelector('#totalDisplay').innerHTML = formatCurrency(total()); //update total
};