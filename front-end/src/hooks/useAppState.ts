import { useState, useCallback } from 'react';
import type { Freelancer, FormData, ViewType } from '../types';

export const useAppState = () => {
    const [currentView, setCurrentView] = useState<ViewType>('home');
    const [selectedFreelancer, setSelectedFreelancer] = useState<Freelancer | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        phone: '',
        company: '',
    });
    const handleProfileClick = useCallback((freelancer: Freelancer) => {
        setSelectedFreelancer(freelancer);
        setCurrentView('profile');
    }, []);
    const handleBack = useCallback(() => {
        setCurrentView('home');
        setSelectedFreelancer(null);
        setSelectedDate(null);
        setFormData({ firstName: '', email: '', phone: '', company: '' });
    }, []);
    const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);
    return {
        currentView,
        selectedFreelancer,
        selectedDate,
        setSelectedDate,
        formData,
        setFormData,
        handleProfileClick,
        handleBack,
        handleFormChange,
    };
};
