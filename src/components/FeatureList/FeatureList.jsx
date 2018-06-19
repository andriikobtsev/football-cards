import React from 'react';
import { FeatureCard } from '..';

const data = [
    {
        name: "matches"
    },
    {
        name: "groups"
    },
    {
        name: "teams"
    }
];

const FeatureList = () => {
    return (
        <div className="flex justify-around flex-wrap pa5 flex-auto-ns">
            {
                data.map((item, index) => {
                    return <FeatureCard
                        key={index}
                        name={item.name}
                    />
                })
            }
        </div>
    )
};

export default FeatureList;