import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router } from "react-router-dom";
import RouterDOM from './components/RouterDOM';
import { CardProvider } from './CardContext';

function App() {
  return (
    <CardProvider>
      <Router>
        <div className="App">
          <Header />
          <RouterDOM />
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
