import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormGroup from "../shared/FormGroup";

type Props = {
    formData: any;
    onChange: (e: any) => void;
    onSubmit: () => void;
};

const BookingForm: React.FC<Props> = ({ formData, onChange, onSubmit }) => {
    return (
        <div className="booking-form">
            <h3 className="form-title">Vos informations</h3>
            <FormGroup label="Prénom *">
                <Input type="text" name="firstName" value={formData.firstName} onChange={onChange} />
            </FormGroup>
            <FormGroup label="Email *">
                <Input type="email" name="email" value={formData.email} onChange={onChange} />
            </FormGroup>
            <FormGroup label="Téléphone *">
                <Input type="tel" name="phone" value={formData.phone} onChange={onChange} />
            </FormGroup>
            <FormGroup label="Société (optionnel)">
                <Input type="text" name="company" value={formData.company} onChange={onChange} />
            </FormGroup>
            <Button onClick={onSubmit} className="confirm-btn" >
                Confirmer le rendez-vous
            </Button>
        </div>
    );
};

export default BookingForm;
