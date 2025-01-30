import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState('');
      
    const handleUpdate = (updatedUser) => {
        setUser(updatedUser);
        setModalOpen(false);
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Échec de la mise à jour des informations');
      }

      const data = await response.json();
      console.log('Réponse API:', data);
      alert('Informations mises à jour avec succès');
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Modifier les informations</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div>
                <label>Nom</label>
                <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Prénom</label>
                <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Mise à jour...' : 'Enregistrer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;