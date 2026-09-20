import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <img className="logo-backdrop" src="./assets/Logo with Name Transparent.png" alt="Logo for Sāwol sussex" />
      <div className="landing-page-spinner-container">
        <strong className='text-align-right'>Website coming soon</strong>
        <img className="loading-star" src="./assets/Star.png" alt='' />
        <strong>Find us on socials</strong>
      </div>
      <div className="landing-page-socials-container">
        <div className="landing-page-social-logo-container">
          <img src="./assets/Facebook Logo.png" alt="Facebook" onClick={() => window.open('https://www.facebook.com/profile.php?id=61594729580585', '_blank')} />
        </div>
        <div className="landing-page-social-logo-container">
          <img src="./assets/Instagram Logo.png" alt="Instagram" onClick={() => window.open('https://www.instagram.com/sawolsussex', '_blank')} />
        </div>
      </div>
    </div>
  );
}

export default App;
