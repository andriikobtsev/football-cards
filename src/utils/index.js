import moment from 'moment';


function convertTime(time) {
	return moment(time, 'H:m').utcOffset('+0100').format('H:mm').toString();
}

function getAllMatches(data) {
	const allMatches = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i].matches) {
			for (let k=0; k < data[i].matches.length; k++) {
				allMatches.push({name: [data[i].name], match: data[i].matches[k]});
		}
		}
	}
	return allMatches;
}

export {
	convertTime, getAllMatches
}