import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider, signInWithPopup } from './fireBaseConfig';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting to login with:", { email, password, rememberMe });
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
        rememberMe,
      });

      console.log('Response from server:', response);

      if (response.data.success) {
        console.log('Login successful:', response.data);
        // Redirect to the welcome page
        navigate('/welcome');
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(`Logged in with ${provider.providerId}:`, result.user);
      // Assuming the backend can handle social login token
      const token = await result.user.getIdToken();
      const response = await axios.post('http://localhost:5000/auth/social-login', {
        token,
        provider: provider.providerId,
      });

      if (response.data.success) {
        console.log('Social login successful:', response.data);
        // Redirect to the welcome page
        navigate('/welcome');
      } else {
        console.error('Social login failed:', response.data.message);
      }
    } catch (error) {
      console.error(`Error logging in with ${provider.providerId}:`, error);
    }
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
        <button type="submit" style={styles.loginButton}>Log In</button>
      </form>
      <p style={styles.divider}>or continue with</p>
      <div style={styles.socialButtons}>
        <button onClick={() => handleSocialLogin(googleProvider)} style={styles.socialButton}>G</button>
        <button onClick={() => handleSocialLogin(facebookProvider)} style={styles.socialButton}>f</button>
        <button onClick={() => console.log('Apple login not implemented yet')} style={styles.socialButton}>A</button>
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

export default Login;
