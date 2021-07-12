import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter counterTitle={"Number of MSA students"}/>
      <Counter counterTitle={"People running the application"}/>
      <Counter counterTitle={"People keeping up"}/>
      <Counter/>
    </div>
  );
}

export default App;
