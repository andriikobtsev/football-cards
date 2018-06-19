import React from 'react';
import {connect} from 'react-redux';
import {SearchBox, Scroll, ErrorBoundry, FeatureList} from '../../components';
import {requestData, setSearchField, viewChange } from '../../actions';
import Particles from 'react-particles-js';
import './App.css';
import { particlesParams } from './particles';
import MatchList from "../../components/MatchList/MatchList";

const mapStateToProps = state => {
    return {
        searchField: state.searchCards.searchField,
        data: state.requestData.data,
        isPending: state.requestData.isPending,
        error: state.requestData.error,
        card: state.viewChange.card,
        featureView: state.viewChange.featureView
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestData: () => dispatch(requestData()),
        viewChange: () => dispatch(viewChange())
    }
};

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestData();
    }

    render() {
        const {searchField, onSearchChange, data, isPending, card, featureView, viewChange } = this.props;
        const filtered = data.filter(item => {
            return item.match.team1.name.toLowerCase().includes(searchField) ||
                item.match.team2.name.toLowerCase().includes(searchField);
        });
        return isPending ?
            <h1 className="tc">Loading</h1>
            :
            (
                <div>
                    <div className="flex flex-column items-center">
                        <h1 className="flex justify-center avenir">Football Cards</h1>
                        <button
                            onClick={viewChange}
                            className="ba-ns br4 shadow-3 b--mid-gray grow ma1 pa2"
                        >BackToFeatureCards
                        </button>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <Particles className='particles' params={particlesParams}/>
                                {(featureView) ? <FeatureList /> : <MatchList data={filtered}/>}
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