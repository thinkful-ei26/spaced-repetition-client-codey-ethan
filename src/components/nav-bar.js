import React from 'react';
import {connect} from 'react-redux';

import {clearAuth} from '../actions/auth';

import './nav-bar.css'

export class NavBar extends React.Component {
    render() {
        let status;
        if (this.props.loggedIn) {
            return (
                status = (
                    <nav role="navigation">
                        SpanishX
                        <button className="auth-button" onClick={() => { 
                            this.props.dispatch(clearAuth());
                            localStorage.removeItem('authToken');
                        }}>Log Out</button>
                    </nav>  
                )
            )
        }
        else if (!this.props.loggedIn) {
            return (
                status = (
                    <nav role="navigation">
                        SpanishX
                    </nav> 
                )
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