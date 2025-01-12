import logo from './logo.svg';
import { useState, useEffect } from 'react';

import Page_Console from './Components/Page_Console';
import Page_Starting from './Components/Page_Starting';


function App() {
  const [showStarting, setShowStarting] = useState(true);









  useEffect(() => {
    // Set a timeout to switch to Page_Console after 2 seconds
    const timer = setTimeout(() => {
      setShowStarting(false); // Switch to Page_Console after 2 seconds
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className="App">
      {showStarting ? <Page_Starting /> : <Page_Console />}
    </div>
  );
}

export default App;
