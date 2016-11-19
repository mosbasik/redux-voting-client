import React from 'react';

import Winner from './Winner';
import Tally from './Tally';
import Management from './Management';

class Results extends React.PureComponent {
    render() {
        return this.props.winner ?

            <Winner ref="winner" winner={this.props.winner} /> :

            <div className="results">
                <Tally pair={this.props.pair} tally={this.props.tally} />
                <Management next={this.props.next} />
            </div>;
    }
}

export default Results;
