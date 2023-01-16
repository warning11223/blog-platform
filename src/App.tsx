import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {StateType} from './state/state';

type AppProps = {
    state: StateType
}

function App({state}: AppProps) {
  return (
    <>
        <Header />
        <Main state={state}/>
    </>
  );
}

export default App;
