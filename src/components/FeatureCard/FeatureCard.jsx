import React from 'react';
import { viewChange } from '../../actions';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        card: state.viewChange.card,
        feature: state.viewChange.feature
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCardClick: (e) => dispatch(viewChange(e)),
    }
};

class FeatureCard extends React.Component {
    render() {
        const { onCardClick, name, key } = this.props;
        return (
            <div
                onClick={() => onCardClick(this.props.name)}
                key={key}
                className="flex flex-column flex-auto items-center ba-ns br4 shadow-3 b--mid-gray grow ma2 pa2"
            >
                <div className="flex flex-column items-center h3">
                    <h1 className="bb-ns">{name}</h1>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureCard);