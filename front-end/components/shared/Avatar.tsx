import React from "react";

type Props = {
    src: string;
    alt?: string;
    size?: "small" | "medium" | "large";
};

const Avatar: React.FC<Props> = ({ src, alt = "", size = "medium" }) => {
    return <img className={`avatar avatar--${size}`} src={src} alt={alt} />;
};

export default Avatar;
