import { Contact } from '../types/Contact';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:44305/api';

export const fetchContactById = async (id: string | number | undefined): Promise<Contact | null> => {
    try {
        const response =  await axios.get<Contact>(`${API_BASE_URL}/contacts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching contact details:', error);
        return null;// Rethrow the error to be caught by the caller
    }
};

const mockContacts: Contact[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobile: '1234567890', message: 'Hello, how are you?' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', mobile: '9876543210', message: 'Hi, nice to meet you!' },
  ];

// Function to fetch all contacts from the backend API
export const fetchContacts = async (): Promise<Contact[]> => {
    try {
    //   const response = await axios.get<Contact[]>(`${API_BASE_URL}/contacts`);
      return mockContacts;
    } catch (error) {
      // Handle error
      console.error('Error fetching contacts:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
  
  // Function to delete a contact by ID from the backend API
  export const deleteContact = async (id: string | number | undefined): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/contacts/${id}`);
    } catch (error) {
      // Handle error
      console.error(`Error deleting contact with ID ${id}:`, error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
