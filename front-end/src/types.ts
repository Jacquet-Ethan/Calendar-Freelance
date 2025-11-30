export interface Freelancer {
    id: number;
    name: string;
    specialty: string;
    bio: string | null;
    avatar_url: string | null;
    linkedin: string | null;
    github: string | null;
    malt: string | null;
    portfolio: string | null;
    created_at?: Date;
}

export interface FormData {
    firstName: string;
    email: string;
    phone: string;
    company: string;
}

export interface BookingData {
    freelancer_id: number;
    booking_date: string;
    time_slot: string;
    client_first_name: string;
    client_email: string;
    client_phone: string;
    client_company: string;
}

export type ViewType = "home" | "profile";
