import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p className="no-contacts">No contacts found. Add your first contact!</p>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <div key={contact._id} className="contact-card">
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                {contact.address && <p><strong>Address:</strong> {contact.address}</p>}
              </div>
              <div className="contact-actions">
                <button 
                  className="edit-btn" 
                  onClick={() => onEdit(contact)}
                >
                  Edit
                </button>
                <button 
                  className="delete-btn" 
                  onClick={() => onDelete(contact._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
