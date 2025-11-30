import React from "react";
import ProfileCard from "./ProfileCard";

type Props = {
    freelancers: any[];
    onProfileClick: (f: any) => void;
};

const HomePage: React.FC<Props> = ({ freelancers, onProfileClick }) => {
    return (
        <div className="container">
            <h1 className="main-title">Réservez un créneau avec nos freelances</h1>
            <div className="grid-container">
                {freelancers.map((freelancer) => (
                    <ProfileCard key={freelancer.id} freelancer={freelancer} onClick={() => onProfileClick(freelancer)} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
