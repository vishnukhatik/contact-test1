// src/components/ContactForm.tsx
import React, { useState, useEffect } from 'react';
import { Contact } from '../types/Contact';
import { Form, Button } from 'react-bootstrap';

interface ContactFormProps {
    initialContact?: Contact | any;
    onSave: (contact: Contact) => void;
}

const ContactForm = ({ initialContact, onSave }: ContactFormProps) => {
    const [contact, setContact] = useState<Contact>({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        if (initialContact) {
            setContact(initialContact);
        }
    }, [initialContact]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(contact);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formMobile">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    placeholder="Enter your Mobile Number"
                    name="mobile"
                    value={contact.mobile}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" className='btn-custom-primary float-end mt-3' type="submit">
                Save
            </Button>
        </Form>
    );
};

export default ContactForm;
