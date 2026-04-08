import React from 'react';
import myphoto from './myphoto.JPG';     
import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      {/* 1. फोटो वाला हिस्सा */}
      <div className="header-section">
        <img 
          src={myphoto} 
          alt="Dev with Mom" 
          className="profile-img"
        />
    
        {/* 2. नाम (Dev Sharma) */}
        <h2 className="dev-name">
          Dev Sharma
        </h2>

        {/* 3. माँ वाला Quotation */}
        <p className="mom-quote">
          "Calculations for a better future with Mom's blessings ❤️"
        </p>
      </div>
     
      {/* 4. कैलकुलेटर */}
      <Calculator />

      {/* 5. फुटर (Footer) - यहाँ जोड़ा गया है */}
      <footer className="footer">
        Copyright © Dev Sharma
      </footer>
    </div>
  );
}

export default App;