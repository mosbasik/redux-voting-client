import React from 'react'

class Management extends React.PureComponent {
    render() {
        return <div className="management">
            <button ref="next"
                    className="next"
                    onClick={() => this.props.next()}>
                Next
            </button>
        </div>;
    }
}

export default Management;

