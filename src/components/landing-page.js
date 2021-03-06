import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="container">
            <h2>Sign In</h2>
            <p>this app is used for learning spanish. Just type in the correct answer when prompted with a spanish word.</p>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
