import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import Progress from './progress';
import Question from './question';

import './app.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <Question />
            </div>
        );
    }
}

export default requiresLogin()(connect()(Dashboard));