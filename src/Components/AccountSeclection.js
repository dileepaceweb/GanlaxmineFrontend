import React from 'react';

const AccountSelection = () => {
  const accounts = [
    { name: 'Balam Singh', email: 'balamrawat123@gmail.com', hasPhoto: true },
    { name: 'Balam Singh', email: 'balamstorage@gmail.com', hasPhoto: false },
  ];

  const handleAccountSelect = (email) => {
    console.log(`Selected account: ${email}`);
    // Implement account selection logic here
  };

  const handleAddAccount = () => {
    console.log('Add another account');
    // Implement add account logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>FitPro</div>
      <h1 style={styles.title}>Choose an account</h1>
      <p style={styles.subtitle}>to continue to Fitplan</p>
      
      {accounts.map((account, index) => (
        <div key={index} style={styles.accountItem} onClick={() => handleAccountSelect(account.email)}>
          {account.hasPhoto ? (
            <img src="path_to_photo.jpg" alt={account.name} style={styles.accountPhoto} />
          ) : (
            <div style={styles.accountInitial}>{account.name[0]}</div>
          )}
          <div style={styles.accountInfo}>
            <div style={styles.accountName}>{account.name}</div>
            <div style={styles.accountEmail}>{account.email}</div>
          </div>
        </div>
      ))}
      
      <div style={styles.addAccount} onClick={handleAddAccount}>
        <span style={styles.addIcon}>+</span>
        Add another account
      </div>
      
      <p style={styles.disclaimer}>
        To continue, Google will share your name, email address and profile picture with Fitplan. 
        Before using this app, review its <a href="#" style={styles.link}>privacy policy</a> and <a href="#" style={styles.link}>terms of service</a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: 'white',
  },
  logo: {
    backgroundColor: '#333',
    color: '#9efa00',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  accountItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  accountPhoto: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  accountInitial: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#brown',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    fontSize: '20px',
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontWeight: 'bold',
  },
  accountEmail: {
    fontSize: '14px',
    color: '#666',
  },
  addAccount: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    color: '#1a73e8',
  },
  addIcon: {
    marginRight: '10px',
    fontSize: '20px',
  },
  disclaimer: {
    fontSize: '12px',
    color: '#666',
    marginTop: '20px',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
  },
};

export default AccountSelection;