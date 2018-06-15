import React from 'react';
import { convertTime } from '../../utils';

const MatchCard = ({ id, team1, team2, date, time, score1, score2 }) => {
	return (
		<div className="flex flex-column flex-auto items-center ba br4 shadow-3 b--mid-gray grow border-box ma2 pa2 db outline-0-ns mr3">
			<div className="flex flex-column items-center h3">
				<h1 className="bb-ns">{id}</h1>
				<h4>{date}</h4>
			</div>
			<h3>{convertTime(time)}</h3>
			<div className="flex flex-row">
				<div className="flex flex-column items-center">
					<h2 className="calisto ttu fw2 pre">{team1}</h2>
					<h3>{score1}</h3>
				</div>
				<h2 className="ph2">:</h2>
				<div className="flex flex-column items-center">
					<h2 className="calisto ttu fw2 pre">{team2}</h2>
					<h3>{score2}</h3>
				</div>
			</div>
		</div>
	)
}

export default MatchCard;