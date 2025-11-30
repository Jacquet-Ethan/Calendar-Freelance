import React from "react";
import Card from "../ui/Card";
import BookingCalendar from "./BookingCalendar";
import BookingForm from "./BookingForm";

type Props = {
    selectedDate?: Date | null;
    onDateSelect: (d: Date) => void;
    formData: any;
    onFormChange: (e: any) => void;
    onSubmit: () => void;
};

const BookingSection: React.FC<Props> = ({ selectedDate, onDateSelect, formData, onFormChange, onSubmit }) => {
    return (
        <Card className="booking-section">
            <h2 className="section-title">Réserver un créneau</h2>
            <BookingCalendar onDateSelect={onDateSelect} selectedDate={selectedDate} />
            {selectedDate && (
                <BookingForm formData={formData} onChange={onFormChange} onSubmit={onSubmit} />
            )}
        </Card>
    );
};

export default BookingSection;
