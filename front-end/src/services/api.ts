import { API_ENDPOINTS } from '../config';
import type { Freelancer, BookingData } from '../types';

export const api = {
    async getFreelancers(): Promise<Freelancer[]> {
        const response = await fetch(API_ENDPOINTS.FREELANCERS);
        if (!response.ok) throw new Error('Failed to fetch freelancers');
        return response.json();
    },
    async createBooking(bookingData: BookingData) {
        const response = await fetch(API_ENDPOINTS.BOOKINGS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
        });
        if (!response.ok) throw new Error('Failed to create booking');
        return response.json();
    },
};
