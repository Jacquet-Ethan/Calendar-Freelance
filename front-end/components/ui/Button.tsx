import React from "react";

type Props = {
    children: React.ReactNode;
    onClick?: (e?: any) => void;
    variant?: "primary" | "back";
    className?: string;
};

const Button: React.FC<Props> = ({ children, onClick, variant = "primary", className = "" }) => {
    return (
        <button className={`btn ${variant === "back" ? "btn--back" : "btn--primary"} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
