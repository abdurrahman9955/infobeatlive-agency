import axios from 'axios';
import { getAccessToken } from './auth';
import { BASE_URL } from './auth';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    try {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error('Error retrieving access token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface ContactData {
    fullName: string;
    businessName: string; 
    country: string;
    phoneNumber: string;
    email: string;
    reason: string;
    statement: string;
}

export interface ContactResponse {
    success: boolean;
    newContact?: string;
    contacts?: string[];
    contact?: string;
    updatedContact?: string;
    message?: string;
    error?: string;
}

export const contacts = {
  
    create: async (data: ContactData): Promise<ContactResponse> => {
        const response = await api.post<ContactResponse>('/contact/contacts/create', data);
        return response.data;
    },
  
    getAll: async (): Promise<ContactResponse> => {
        const response = await api.get<ContactResponse>('/contact/contacts/get-all');
        return response.data;
    },

    getById: async (id: string): Promise<ContactResponse> => {
        const response = await api.get<ContactResponse>(`/contact/contacts/get/${id}`);
        return response.data;
    },

    update: async (id: string, data: Partial<ContactData>): Promise<ContactResponse> => {
        const response = await api.put<ContactResponse>(`/contact/contacts/update/${id}`, data);
        return response.data;
    },

    delete: async (id: string): Promise<ContactResponse> => {
        const response = await api.delete<ContactResponse>(`/contact/contacts/delete/${id}`);
        return response.data;
    },
};

