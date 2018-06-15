import React from 'react';
import { MatchList, SearchBox, Scroll, ErrorBoundry } from '../components';
import { getAllMatches } from '../utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
			.then(response => response.json())
			.then(data => this.setState({ data: getAllMatches(data.rounds) }))
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value.toLowerCase() });
	}

	render() {
		const filtered = this.state.data.filter(item => {
			return  item.match.team1.name.toLowerCase().includes(this.state.searchField) || 
					item.match.team2.name.toLowerCase().includes(this.state.searchField);
		
		})

		return (
		<div>
			<div className="flex flex-column items-center">
			<h1 className = "flex justify-center avenir">Football Cards</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<MatchList data={filtered}/>
				</ErrorBoundry>	
			</Scroll>
		</div>
		<div>
			<p className="tr mr4">worldcup2018</p>
		</div>
		</div>
	)
	}
}

export default App;