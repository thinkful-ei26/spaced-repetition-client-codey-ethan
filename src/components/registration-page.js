import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

// Components
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <div className="container">
            <h2>Register</h2>
            <RegistrationForm />
            <Link to="/">or Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
