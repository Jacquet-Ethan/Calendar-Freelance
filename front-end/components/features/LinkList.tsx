import React from "react";
import Card from "../ui/Card";
import { Linkedin, Github, Briefcase } from "lucide-react";

type Props = {
    links?: {
        linkedin?: string;
        github?: string;
        malt?: string;
        portfolio?: string;
    };
};

const LinkList: React.FC<Props> = ({ links = {} }) => {
    const linkItems = [
        { icon: <Linkedin size={20} />, label: "LinkedIn", url: links?.linkedin },
        { icon: <Github size={20} />, label: "GitHub", url: links?.github },
        { icon: <Briefcase size={20} />, label: "Malt", url: links?.malt },
        { icon: <Briefcase size={20} />, label: "Portfolio", url: links?.portfolio }
    ];

    return (
        <Card className="links-card">
            <h2 className="section-title">Mes liens</h2>
            <div className="links-list">
                {linkItems.map((item, idx) =>
                    item.url ? (
                        <a key={idx} className="link-item" href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ) : null
                )}
            </div>
        </Card>
    );
};

export default LinkList;
