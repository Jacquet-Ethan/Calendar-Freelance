import React from "react";

type Props = {
    type?: string;
    name?: string;
    value?: any;
    onChange?: (e: any) => void;
    placeholder?: string;
    className?: string;
};

const Input: React.FC<Props> = ({ type = "text", name, value, onChange, placeholder, className = "" }) => {
    return (
        <input
            className={`input ${className}`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
