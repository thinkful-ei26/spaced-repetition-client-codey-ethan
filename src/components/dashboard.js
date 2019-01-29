import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

//import ProgressBar from './progress-bar';
import Question from './question';


import './app.css';

export class Dashboard extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>SpanishX</h1>
                </div>
                {/* <ProgressBar /> */}
                <Question />
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));