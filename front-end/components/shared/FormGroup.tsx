import React from "react";

type Props = {
    label: string;
    children: React.ReactNode;
};

const FormGroup: React.FC<Props> = ({ label, children }) => {
    return (
        <div className="form-group">
            <label className="form-group__label">{label}</label>
            {children}
        </div>
    );
};

export default FormGroup;
