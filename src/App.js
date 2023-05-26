import './App.css';
import AddTransaction from './components/AddTransaction';
import Balence from './components/Balence';
import Header from './components/Header'  
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balence/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
