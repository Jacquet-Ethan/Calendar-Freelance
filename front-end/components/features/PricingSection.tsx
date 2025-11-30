import React from 'react';
import Card from '../ui/Card';

interface Pricing {
    id: number;
    title: string;
    description: string | null;
    price: number;
    duration: string | null;
}

interface Props {
    pricing: Pricing[];
}

const PricingSection: React.FC<Props> = ({ pricing }) => {
    if (!pricing || pricing.length === 0) {
        return null;
    }
    return (
        <Card className="pricing-card">
            <h2 className="section-title">Mes offres</h2>
            <div className="pricing-list">
                {pricing.map((offer) => (
                    <div key={offer.id} className="pricing-item">
                        <div className="pricing-header">
                            <h3 className="pricing-title">{offer.title}</h3>
                            <span className="pricing-price">{offer.price}€</span>
                        </div>
                        {offer.description && (
                            <p className="pricing-description">{offer.description}</p>
                        )}
                        {offer.duration && (
                            <p className="pricing-duration">{offer.duration}</p>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default PricingSection;
