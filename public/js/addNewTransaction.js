import {
  all,
  addTransaction,
  clearTransactions
} from './addTransactionIntoHTML.js';

import { updateBalance, 
  add,
  remove } from './updateDashboardValue.js';

//Objeto responsável por iniciar a aplicação
export const App = {
  init() {
    //Adicionando cada transação já realizada ao HTML
    all.forEach(transaction => {
      addTransaction(transaction);
    });

    updateBalance();
  },
  reload() {
    clearTransactions();
    App.init();
  }
};

App.init();