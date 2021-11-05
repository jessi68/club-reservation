import logo from './logo.svg';
import './App.css';
import { fetchStores } from './reduxThunk/stores/stores';

function App() {

  fetchStores();
  
  return (
    <div className="App">
      <div>
       테스트
      </div>
    </div>
  );
}

export default App;
