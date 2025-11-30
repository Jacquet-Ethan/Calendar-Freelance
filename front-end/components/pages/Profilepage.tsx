import React from "react";
import Button from "../ui/Button";
import { ArrowLeft } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import LinkList from "../features/LinkList";
import BookingSection from "../features/BookingSection";

type Props = {
    freelancer: any;
    onBack: () => void;
    selectedDate?: Date | null;
    onDateSelect: (d: Date) => void;
    formData: any;
    onFormChange: (e: any) => void;
    onSubmit: () => void;
};

const ProfilePage: React.FC<Props> = ({ freelancer, onBack, selectedDate, onDateSelect, formData, onFormChange, onSubmit }) => {
    return (
        <div className="container">
            <Button variant="back" onClick={onBack}>
                <ArrowLeft size={18} />
                <span style={{ marginLeft: 8 }}>Retour</span>
            </Button>
            <div className="section-spacing">
                <ProfileHeader freelancer={freelancer} />
            </div>
            <div className="section-spacing">
                <LinkList links={{
                    linkedin: freelancer.linkedin,
                    github: freelancer.github,
                    malt: freelancer.malt,
                    portfolio: freelancer.portfolio
                }} />
            </div>
            <BookingSection
                selectedDate={selectedDate}
                onDateSelect={onDateSelect}
                formData={formData}
                onFormChange={onFormChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default ProfilePage;
