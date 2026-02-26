
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


export interface FeedbackData {
    name: string;
    email: string;
    reason: string;
    statement: string;
    rating: number;
}

export interface FeedbackResponse {
    success: boolean;
    newFeedback?: string;
    feedbacks?: string[];
    feedback?: string;
    updatedFeedback?: string;
    message?: string;
    error?: string;
}

export const feedback = {
  
    create: async (data: FeedbackData): Promise<FeedbackResponse> => {
        const response = await api.post<FeedbackResponse>('/feedback/feedback/create', data);
        return response.data;
    },
    
    getAll: async (): Promise<FeedbackResponse> => {
        const response = await api.get<FeedbackResponse>('/feedback/feedback/get-all');
        return response.data;
    },

    getById: async (id: string): Promise<FeedbackResponse> => {
        const response = await api.get<FeedbackResponse>(`/feedback/feedback/get/${id}`);
        return response.data;
    },

    update: async (id: string, data: Partial<FeedbackData>): Promise<FeedbackResponse> => {
        const response = await api.put<FeedbackResponse>(`/feedback/feedback/update/${id}`, data);
        return response.data;
    },

    delete: async (id: string): Promise<FeedbackResponse> => {
        const response = await api.delete<FeedbackResponse>(`/feedback/feedback/delete/${id}`);
        return response.data;
    },
};