import logo from './logo.svg';
import './App.css';
import { fetchStores } from './reduxThunk/stores/api';
import StoresContainer from './containers/stores/StoresContainer';
import {createLogger} from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer from './reduxThunk';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import StoresPageForStudent from './pages/StoresPageForUser/WatchStoresPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import { useEffect } from 'react';

function App() {

  let tempStore = [];

  useEffect( async () => {
      const stores =  await fetchStores();
      console.log(stores);
      tempStore = stores[0];
  }, [])

  const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk))
    return (
    <Provider store={store}>
    <div>
        {/* <StoresPageForStudent></StoresPageForStudent> */}
        <ReservationPage store={{
          address: "서울특별시 서대문구 창천동 연세로12길 33",
          closeTime: "22:00",
          headerCount: 30,
          id: "0LK11liFTjUbk2lRPdmc",
          name: "아웃백스테이크하우스",
          openTime: "11:30",
          ownerId: "1345656",
          roadAddress: "연세로12길",
          storeNumber: "\"'5466\""
        }}></ReservationPage>
    </div>
    </Provider>
  );
}


export default App;
