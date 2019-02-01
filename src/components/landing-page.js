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
            <p>SpanishX presents users with a sequence of words, so that they can practice and improve their Spanish language skills. The order of the words changes based on past answer history. Just enter the English word for each Spanish word to get going.</p>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
