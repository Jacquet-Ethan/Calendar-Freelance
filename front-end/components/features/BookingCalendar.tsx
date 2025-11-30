import React from "react";
import { Calendar } from "lucide-react";
import Input from "../ui/Input";

type Props = {
    onDateSelect: (date: Date) => void;
    selectedDate?: Date | null;
};

const BookingCalendar: React.FC<Props> = ({ onDateSelect }) => {
    return (
        <div className="calendar-simple">
            <Calendar size={48} className="calendar-icon" />
            <p className="calendar-text">Sélectionnez une date pour votre rendez-vous</p>
            <Input
                type="date"
                onChange={(e: any) => {
                    const val = e.target.value;
                    if (!val) return;
                    onDateSelect(new Date(val));
                }}
                className="date-input"
            />
        </div>
    );
};

export default BookingCalendar;
