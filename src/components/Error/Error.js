import React from 'react';
import './Error.css';

class Error extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="error"><h2>Unable to fetch data..!</h2></div>;
        }
        return this.props.children;
    }
}

export default Error;