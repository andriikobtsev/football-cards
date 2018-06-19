import React from 'react';
import {MatchCard} from '..';

const MatchList = ({data}) => {
    return (
        <div className="flex border-box justify-space justify-around flex-wrap pa5">
            {
                data.map((item, index) => {
                    return <MatchCard
                        key={index}
                        id={item.name}
                        team1={item.match.team1.name}
                        team2={item.match.team2.name}
                        date={item.match.date}
                        time={item.match.time}
                        timezone={item.match.timezone}
                        score1={item.match.score1}
                        score2={item.match.score2}
                    />
                })
            }
        </div>
    )
};

export default MatchList;