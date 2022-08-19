import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      <h2>Word Games</h2>
      {
        <WordCard value={word}/>
      }
    </div>
  );
}

export default App;
