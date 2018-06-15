function convertTime(date, time, timezone) {
    const dateString = `${date} ${time} ${timezone}`;
    const local = new Date(dateString);
    return local.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
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