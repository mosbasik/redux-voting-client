import React from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Tally from './Tally';
import Management from './Management';
import * as actionCreators from '../action_creators';

export class Results extends React.PureComponent {
    render() {
        return this.props.winner ?

            <Winner ref="winner" winner={this.props.winner} /> :

            <div className="results">
                <Tally pair={this.props.pair} tally={this.props.tally} />
                <Management next={this.props.next} />
            </div>;
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(
    mapStateToProps,
    actionCreators
)(Results);
