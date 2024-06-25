import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const userName = location.state?.userName || 'User';

  return (
    <div className="welcome-screen">
      <BackgroundImage />
      <WelcomeMessage userName={userName} />
      <StartButton />
    </div>
  );
};

const BackgroundImage = () => {
  return (
    <div className="background-image">
      {/* Add your background image here */}
    </div>
  );
};

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="welcome-message">
      <h1>Hi {userName}</h1>
      <p>Welcome to FitPro!</p>
      <p>Answer a few questions so FitPro can best help you achieve your goal.</p>
    </div>
  );
};

const StartButton = () => {
  return (
    <button className="start-button">
      Start Now
    </button>
  );
};

export default Welcome;
