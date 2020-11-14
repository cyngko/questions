import React from 'react';
import QuestionsApp from './components/questionsApp';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <QuestionsApp />
    </div>
  );
}

export default App;
