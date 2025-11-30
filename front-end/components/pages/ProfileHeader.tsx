import React from "react";
import Card from "../ui/Card";
import Avatar from "../shared/Avatar";

type Props = {
    freelancer: any;
};

const ProfileHeader: React.FC<Props> = ({ freelancer }) => {
    return (
        <Card className="profile-header">
            <Avatar src={freelancer.avatar_url || freelancer.avatar} alt={freelancer.name} size="large" />
            <h1 className="profile-name">{freelancer.name}</h1>
            <p className="profile-specialty">{freelancer.specialty}</p>
            <p className="profile-bio">{freelancer.bio || "Pas de description disponible"}</p>
        </Card>
    );
};

export default ProfileHeader;
