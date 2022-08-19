import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      <h2>Word Games</h2>
      <p>ถ้ากดได้ถูกต้อง ไฟจะขึ้นค้างทั้ง 5 ตัวอักษร</p>
      <p>แต่ถ้าไม่ถูกต้อง ไฟก็จะดับอีกครั้ง^^</p>
      {
        <WordCard value={word}/>
      }
    </div>
  );
}

export default App;
