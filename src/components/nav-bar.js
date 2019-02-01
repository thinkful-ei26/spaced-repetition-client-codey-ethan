import React from 'react';
import {connect} from 'react-redux';

import {clearAuth} from '../actions/auth';

export class NavBar extends React.Component {
    render() {
        let status;
        if (this.props.loggedIn) {
            return (
                status = (
                    <div>
                        SpanishX
                        <button onClick={() => { 
                            this.props.dispatch(clearAuth());
                            localStorage.removeItem('authToken');
                        }}>logout</button>
                    </div>  
                )
            )
        }
        else if (!this.props.loggedIn) {
            return (
                status = (<div></div>)
            )
        }
        return (
            <div className="nav">
                {status}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser
    };
};

export default connect(mapStateToProps)(NavBar);