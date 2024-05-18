// src/components/CreateContact.tsx
import React from 'react';
import ContactForm from './ContactForm';
import { Contact } from '../types/Contact';

interface CreateContactProps {
  onCreate: (contact: Contact) => void;
}

const CreateContact = ({ onCreate }: CreateContactProps) => {
  const handleSave = (contact: Contact) => {
    const newContact = { ...contact, id: Math.random().toString(36).substr(2, 9) };
    onCreate(newContact);
  };

  return (
    <div className="container">
      <h2>Create Contact</h2>
      <ContactForm onSave={handleSave} />
    </div>
  );
};

export default CreateContact;
