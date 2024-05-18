import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "components/ContactForm";
import { Contact } from "../types/Contact";
import { fetchContactById } from "services/contact";
import { Col, Container, Row } from "react-bootstrap";

const AddEditContactPage = () => {
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  const { id } = useParams<{ id?: string }>();

  const fetchContactDetails = async (id: string): Promise<void> => {
    try {
      const contact: Contact | null = await fetchContactById(id);
      if (contact) {
        setContactToEdit(contact);
      } else {
        // Handle error or display a message indicating that the contact was not found
        console.log("Could not find contact");
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching contact details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      setMode("edit");
      fetchContactDetails(id);
    }
  }, [id]);

  const handleSaveContact = (contact: Contact) => {
    try {
      if (mode === "add") {
        // Handle adding new contact
        console.log("Adding contact:", contact);
      } else {
        // Handle editing existing contact
        console.log("Editing contact:", contact);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={8} sm={12}>
        <h1>{mode === "add" ? "Add Contact" : "Edit Contact"}</h1>
        {mode === "edit" && contactToEdit && (
          <ContactForm
            initialContact={contactToEdit}
            onSave={handleSaveContact}
          />
        )}
        {mode === "add" && <ContactForm onSave={handleSaveContact} />}
        </Col>
      </Row>
    </Container>
  );
};

export default AddEditContactPage;
