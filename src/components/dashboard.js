import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

//import ProgressBar from './progress-bar';
import Question from './question';

import {fetchQuestions} from '../actions/questions';

import './app.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    render() {
        console.log( this.props)
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>SpanishX</h1>
                </div>
                {/* <ProgressBar /> */}
                <Question question={this.props.questions[0].word}/>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions.data,
        answer: state.questions.answer
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));