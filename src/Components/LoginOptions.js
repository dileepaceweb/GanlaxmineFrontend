import React from 'react';

const LoginOptions = () => {
  const handleLogin = (method) => {
    console.log(`Logging in with ${method}`);
    // Implement actual login logic here
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>FitPro</h1>
      
      <button 
        style={{...styles.button, ...styles.googleButton}} 
        onClick={() => handleLogin('Google')}
      >
        <span style={styles.icon}>G</span>
        Continue with Google
      </button>
      
      <button 
        style={{...styles.button, ...styles.facebookButton}} 
        onClick={() => handleLogin('Facebook')}
      >
        <span style={styles.icon}>f</span>
        Continue with Facebook
      </button>
      
      <button 
        style={{...styles.button, ...styles.appleButton}} 
        onClick={() => handleLogin('Apple')}
      >
        <span style={styles.icon}>🍎</span>
        Continue with Apple
      </button>

      <p style={styles.divider}>OR</p>

      <button 
        style={{...styles.button, ...styles.emailButton}} 
        onClick={() => handleLogin('Email')}
      >
        Continue with Email
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
  },
  logo: {
    color: '#9efa00',
    fontSize: '36px',
    marginBottom: '40px',
  },
  button: {
    width: '100%',
    maxWidth: '300px',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    color: 'white',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
    color: 'white',
  },
  appleButton: {
    backgroundColor: 'white',
    color: 'black',
  },
  emailButton: {
    backgroundColor: '#9efa00',
    color: 'black',
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
  },
  divider: {
    margin: '20px 0',
  },
};

export default LoginOptions;