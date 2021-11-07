import logo from './logo.svg';
import './App.css';
import { fetchStores } from './reduxThunk/stores/api';
import StoresContainer from './containers/stores/StoresContainer';
import {createLogger} from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer from './reduxThunk';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

function App() {

  const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk))
  return (
    <Provider store={store}>
    <div className="App">
     
        <StoresContainer></StoresContainer>
    </div>
    </Provider>
  );
}

export default App;
