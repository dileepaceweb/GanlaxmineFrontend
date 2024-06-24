import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  const handleSocialLogin = (platform) => {
    // Implement social login logic here
    console.log(`Attempting to login with ${platform}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>FitPro</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" style={styles.loginButton}>SignUp</button>
      </form>
      <p style={styles.divider}>or continue with</p>
      <div style={styles.socialButtons}>
        <button onClick={() => handleSocialLogin('Google')} style={styles.socialButton}>G</button>
        <button onClick={() => handleSocialLogin('Apple')} style={styles.socialButton}>A</button>
        <button onClick={() => handleSocialLogin('Facebook')} style={styles.socialButton}>f</button>
      </div>
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
  form: {
    width: '100%',
    maxWidth: '300px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    border: '1px solid #444',
    borderRadius: '5px',
    color: 'white',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#9efa00',
    border: 'none',
    borderRadius: '25px',
    color: 'black',
    fontSize: '16px',
    cursor: 'pointer',
  },
  divider: {
    margin: '20px 0',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '300px',
  },
  socialButton: {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    border: '1px solid #444',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default SignUp;