// FitPro.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const FitPro = () => {
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const styles = {
    container: {
      position: 'relative',
      height: '100vh',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'black',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      objectFit: 'cover',
    },
    content: {
      position: 'relative',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '20%',
      boxSizing: 'border-box',
    },
    logo: {
      fontSize: '36px',
      color: '#9efa00',
      margin: '90px', // Removed margin top and bottom for the logo
    },
    welcome: {
      fontSize: '24px',
      margin: '10px 0',
    },
    tagline: {
      fontSize: '16px',
      margin: '10px 0',
    },
    paginationDots: {
      margin: '20px 0',
    },
    dot: {
      height: '10px',
      width: '10px',
      backgroundColor: '#bbb',
      borderRadius: '50%',
      display: 'inline-block',
      margin: '0 5px',
    },
    activeDot: {
      backgroundColor: '#9efa00',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px', // Added margin top for button container
    },
    button: {
      padding: '10px 20px',
      margin: '10px 0', // Adjusted margin for buttons
      border: 'none',
      borderRadius: '25px',
      fontSize: '18px',
      cursor: 'pointer',
      width: '80%',
      maxWidth: '300px',
    },
    signUpButton: {
      backgroundColor: '#9efa00',
      color: 'black',
    },
    logInButton: {
      backgroundColor: 'transparent',
      border: '2px solid #9efa00',
      color: '#9efa00',
    },
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to '/login' route
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to '/signup' route
  };

  return (
    <div style={styles.container}>
      <img 
        src="path/to/fitness-woman-image.jpg" 
        alt="Fitness woman" 
        style={styles.backgroundImage}
      />
      <div style={styles.content}>
        <h1 style={styles.logo}>FitPro</h1>
        <div>
          <h2 style={styles.welcome}>Welcome to FitPro</h2>
          <p style={styles.tagline}>Where Every Breath Counts – Empowering You to Breathe Easy</p>
          <div style={styles.paginationDots}>
            <span style={{...styles.dot, ...styles.activeDot}}></span>
            <span style={styles.dot}></span>
            <span style={styles.dot}></span>
            <span style={styles.dot}></span>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button style={{...styles.button, ...styles.signUpButton}} onClick={handleSignUpClick}>Sign Up</button>
          <button style={{...styles.button, ...styles.logInButton}} onClick={handleLoginClick}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default FitPro;
