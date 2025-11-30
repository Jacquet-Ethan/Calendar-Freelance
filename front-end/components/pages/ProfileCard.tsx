import React from "react";
import Card from "../ui/Card";
import Avatar from "../shared/Avatar";
import Button from "../ui/Button";

type Freelancer = any;
type Props = {
    freelancer: Freelancer;
    onClick?: () => void;
};

const ProfileCard: React.FC<Props> = ({ freelancer, onClick }) => {
    return (
        <Card className="profile-card" onClick={onClick}>
            <Avatar src={freelancer.avatar_url || freelancer.avatar} alt={freelancer.name} size="medium" />
            <h2 className="name">{freelancer.name}</h2>
            <p className="specialty">{freelancer.specialty}</p>
            <p className="bio-preview">{freelancer.bio ? freelancer.bio.substring(0, 80) + "..." : "Pas de description"}</p>
            <Button>Voir le profil</Button>
        </Card>
    );
};

export default ProfileCard;
