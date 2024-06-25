import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider, signInWithPopup } from './fireBaseConfig';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Strong password regex: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate email and password format
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // Clear any previous messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      console.log("Attempting to sign up with:", { email, password, rememberMe });
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
        rememberMe,
      });

      console.log('Response from server:', response);

      if (response.data.success) {
        console.log('Sign-up successful:', response.data);
        // Set success message and redirect to the welcome page
        setSuccessMessage('Sign-up successful. Redirecting to Welcome page...');
        setTimeout(() => {
          navigate('/welcome', { state: { userName: response.data.userName } });
        }, 2000); // Redirect after 2 seconds
      } else {
        console.error('Sign-up failed:', response.data.message);
        setErrorMessage(response.data.message || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setErrorMessage('Error during sign-up. Please try again.');
    }
  };

  const handleSocialSignUp = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(`Signed up with ${provider.providerId}:`, result.user);
      const token = await result.user.getIdToken();
      const response = await axios.post('http://localhost:5000/auth/social-register', {
        token,
        provider: provider.providerId,
      });

      if (response.data.success) {
        console.log('Social sign-up successful:', response.data);
        // Set success message and redirect to the welcome page
        setSuccessMessage('Social sign-up successful. Redirecting to Welcome page...');
        setTimeout(() => {
          navigate('/welcome', { state: { userName: response.data.userName } });
        }, 2000); // Redirect after 2 seconds
      } else {
        console.error('Social sign-up failed:', response.data.message);
        setErrorMessage(response.data.message || 'Social sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error(`Error signing up with ${provider.providerId}:`, error);
      setErrorMessage(`Error signing up with ${provider.providerId}. Please try again.`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>FitPro</h1>
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <form onSubmit={handleSignUp} style={styles.form}>
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
        <button type="submit" style={styles.loginButton}>Sign Up</button>
      </form>
      <p style={styles.divider}>or continue with</p>
      <div style={styles.socialButtons}>
        <button onClick={() => handleSocialSignUp(googleProvider)} style={styles.socialButton}>G</button>
        <button onClick={() => handleSocialSignUp(facebookProvider)} style={styles.socialButton}>f</button>
        <button onClick={() => console.log('Apple sign-up not implemented yet')} style={styles.socialButton}>A</button>
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
  errorMessage: {
    backgroundColor: '#ffcccc',
    color: 'red',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  successMessage: {
    backgroundColor: '#ccffcc',
    color: 'green',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

export default SignUp;
