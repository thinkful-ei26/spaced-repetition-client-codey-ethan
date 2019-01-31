import React from 'react';
import {connect} from 'react-redux';

export function NavBar(props) {
    let status;
    if (props.loggedIn) {
        return (
            status = (
                <div>
                    SpanishX
                    <button onClick={() => console.log('logout')}>logout</button>
                </div>  
            )
        )
    }
    else if (!props.loggedIn) {
        return (
            status = (
                <div>
                    SpanishX
                    <button onClick={() => console.log('login')}>login</button>
                </div>
            )
        )
    }

    return (
        <div className="nav">
            {status}
        </div>
    );
    
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser
    };
};

export default connect(mapStateToProps)(NavBar);