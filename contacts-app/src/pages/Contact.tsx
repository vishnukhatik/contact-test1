// src/pages/Contact.tsx
import React, { useState } from 'react';
import CreateContact from '../components/CreateContact';
import UpdateContact from '../components/UpdateContact';
import { Contact } from '../types/Contact';

const ContactPage = () => {
  const [contact, setContacts] = useState<Contact|null>(null);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  const handleCreate = (contact: Contact) => {
    setContacts(contact);
  };

  const handleUpdate = (updatedContact: Contact) => {
    setContacts(
      contact
      // contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
    );
  };

  return (
    <div className="page">
      <h2>Contact</h2>
{/*       

      <h2>Contact Management</h2>
      <CreateContact onCreate={handleCreate} />
      {currentContact && (
        <UpdateContact contact={currentContact} onUpdate={handleUpdate} />
      )}
      <h3>Contacts List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => setCurrentContact(contact)}>Edit</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ContactPage;
