import React from 'react';

// export default React.createClass({
class Winner extends React.PureComponent {
    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
}

export default Winner;
