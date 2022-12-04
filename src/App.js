import React from "react";
import './styles.css';
import Tuiter from "./components/tuiter";
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Tuiter/>
      </PersistGate>
    </Provider>
  );
}

export default App;
