export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
    FREELANCERS: `${API_BASE_URL}/api/freelancers`,
    BOOKINGS: `${API_BASE_URL}/api/bookings`,
} as const;
