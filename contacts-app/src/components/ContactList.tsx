import React from 'react';
import { Contact } from 'types/Contact';
import { Button, Table } from 'react-bootstrap';

interface ContactListProps {
  contacts: Contact[];
  onEdit: (id: string| number | undefined) => void;
  onDelete: (id: string | number | undefined) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.mobile}</td>
            <td>
              <Button variant="primary" size="sm" onClick={() => onEdit(contact.id)}>Edit</Button>{' '}
              <Button variant="danger" size="sm" onClick={() => onDelete(contact.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactList;
