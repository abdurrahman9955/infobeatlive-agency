import axios  from 'axios';
import Cookies from 'js-cookie';
export const getAccessToken = (): string | null => Cookies.get('accessToken') || null;

export const setTokensAndUserId = (accessToken: string | null, refreshToken: string | null, userId: string | null): void => {
    if (accessToken) {
        Cookies.set('accessToken', accessToken, { expires: 30 });
    }
    if (userId) {
        Cookies.set('userId', userId, { expires: 30 });
    }
    if (refreshToken) {
        Cookies.set('refreshToken', refreshToken, { expires: 30 });
    }
};

 export const SOCKET_BASE_URL: string =  'http://localhost:8080';
 export const BASE_URL: string =  'infobeatlive-agency-backend-production.up.railway.app/api';  
 
 const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
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


export interface RegisterRequest {
    email: string;
    fullName: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UpdatePasswordRequest {
    email: string;
    newPassword: string;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    error?: string;
}

export const auth = {
    register: async (data: RegisterRequest): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>('/auth/register/register', data);
        return response.data;
    },

    login: async (data: LoginRequest): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>('/auth/login/login', data);
        return response.data;
    },

    updatePassword: async (data: UpdatePasswordRequest): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>('/auth/forgotPassword/update-password', data);
        return response.data;
    },
};
