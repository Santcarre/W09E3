import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import TopMenu from './components/navbar/navbar';
import AppRouter from './components/router/router';
import Counter from './components/navbar/counter';
import { Header } from './components/Counter/Header';
import { Balance } from './components/Counter/Balance';
import { IncomeOfPeople } from './components/Counter/IncomeOfPeople';
import { TransactionList } from './components/Counter/TransactionList';
import { AddTurno } from './components/Counter/AddTurno';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <AppRouter />
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeOfPeople />
          <TransactionList />
          <AddTurno />
          
        </div>
      </div>
    </div>
  );
}

export default App;
