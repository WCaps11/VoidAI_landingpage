import logo from './logo.svg';
import { useState, useEffect } from 'react';

import Page_Console from './Components/Page_Console';
import Page_Starting from './Components/Page_Starting';


function App() {
  const [showStarting, setShowStarting] = useState(true);


  
  return (
    <div className="App">
      {showStarting ? <Page_Starting setShowStartingHandler = {setShowStarting} /> : <Page_Console />}
    </div>
  );
}

export default App;
