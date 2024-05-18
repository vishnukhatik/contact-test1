// src/components/ContactForm.tsx
import React, { useState, useEffect } from "react";
import { Contact } from "../types/Contact";

interface ContactFormProps {
  initialContact?: Contact;
  onSave: (contact: Contact) => void;
}

const ContactForm = ({ initialContact, onSave }: ContactFormProps) => {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
    }
  }, [initialContact]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSave(contact);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label>mobile:</label>
        <input
          type="tel"
          name="mobile"
          value={contact.mobile}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
