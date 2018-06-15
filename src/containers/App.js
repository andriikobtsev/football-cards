import React from 'react';
import {connect} from 'react-redux';
import {MatchList, SearchBox, Scroll, ErrorBoundry} from '../components';
import {requestData, setSearchField} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchCards.searchField,
        data: state.requestData.data,
        isPending: state.requestData.isPending,
        error: state.requestData.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestData: () => dispatch(requestData())
    }
};

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestData();
    }

    render() {
        const {searchField, onSearchChange, data, isPending} = this.props;
        const filtered = data.filter(item => {
            return item.match.team1.name.toLowerCase().includes(searchField) ||
                item.match.team2.name.toLowerCase().includes(searchField);

        });

        return isPending ?
            <h1>Loading</h1>
            :
            (
                <div>
                    <div className="flex flex-column items-center">
                        <h1 className="flex justify-center avenir">Football Cards</h1>
                        <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);