import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo, setUserInfo } from '../redux/reducers/userReducer';

const User = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setUserName(user.userName || '');
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
  
        const data = await response.json();
        dispatch(setUserInfo(data.body));
      } catch (error) {
        console.error('Erreur:', error.message);
      }
    };
  
    fetchUserData();
  }, [dispatch]);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          userName,
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }

      const updatedData = await response.json();

      dispatch(updateUserInfo(updatedData.body));

      setIsEditing(false);
    } catch (error) {
      console.error('Erreur:', error.message);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        
        {!isEditing ? (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        ) : (
          <div className="edit-container">
            <form onSubmit={handleSave}>
              <div className="input-group">
                <label>User name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>First name</label>
                <input type="text" value={firstName} disabled style={{ color: 'gray' }} />
              </div>
              <div className="input-group">
                <label>Last name</label>
                <input type="text" value={lastName} disabled style={{ color: 'gray' }} />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
    </main>
  );
};

export default User;