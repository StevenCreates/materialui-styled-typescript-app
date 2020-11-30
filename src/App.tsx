import React from 'react';
import './App.css';
import Types from './components/Types'
import Functions from './components/Functions';
import { Head } from './components/Head';
import BasicButton from './components/BasicButton';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
        <Head title="Hello" isActive={true}/>
        <Types /> 
        <Functions />
        <BasicButton />
    </div>
  );
}

export default App;
