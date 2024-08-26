import React from 'react';

interface FeatureCardProps {
    title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
    return (
        <div className="m-4 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};

export default FeatureCard;
