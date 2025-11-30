export interface Freelancer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  avatar_url: string;
  linkedin: string;
  github: string;
  malt: string;
  portfolio: string;
  created_at?: Date;
}

export interface Booking {
  id?: number;
  freelancer_id: number;
  booking_date: Date;
  time_slot: string;
  client_first_name: string;
  client_email: string;
  client_phone: string;
  client_company?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at?: Date;
}
