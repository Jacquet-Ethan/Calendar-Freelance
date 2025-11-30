import React from "react";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Card: React.FC<Props> = ({ children, onClick, className = "" }) => {
    return (
        <div className={`card ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
