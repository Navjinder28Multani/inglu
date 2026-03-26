import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleAddContact = () => {
    setEditingContact(null);
    setShowForm(true);
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  const handleContactSaved = (savedContact) => {
    fetchContacts();
    handleFormClose();
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchContacts();
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Manager</h1>
        <button className="add-btn" onClick={handleAddContact}>
          Add New Contact
        </button>
      </header>
      
      <main className="App-main">
        {showForm && (
          <ContactForm
            contact={editingContact}
            onClose={handleFormClose}
            onSave={handleContactSaved}
          />
        )}
        
        <ContactList
          contacts={contacts}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
        />
      </main>
    </div>
  );
}

export default App;
