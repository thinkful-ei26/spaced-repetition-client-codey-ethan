import React from 'react';
import {connect} from 'react-redux';

import QuestionForm from './question-form';

import {fetchQuestions, setStatusCorrect, setStatusIncorrect, resetStatus, incrementScore} from '../actions/questions';

export class Question extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    nextQuestion() {
        this.props.dispatch(resetStatus());
        this.props.dispatch(fetchQuestions());
    }

    handleAnswer(value) {
        if(value.answer === this.props.questions.answer) {
            this.props.dispatch(setStatusCorrect());
            this.props.dispatch(incrementScore());
        }
        else {
             this.props.dispatch(setStatusIncorrect());
        }
    }
    
    render() {
        console.log(this.props.score)
        let status;
        let form = (
            <QuestionForm handleAnswer={(value) => this.handleAnswer(value)}/>
        );
        if (this.props.status) {
            form = (
                <button onClick={() => this.nextQuestion()}>next</button>
            )
        }
        if (this.props.status === 'correct') {
            status = (
                <div className="form-correct" aria-live="polite">
                    Correct!
                </div>
            );
        }
        if (this.props.status === 'incorrect') {
            status = (
                <div className="form-incorrect" aria-live="polite">
                    Wrong! the answer was {this.props.questions.answer}
                </div>
            );
        }
        return (
            <div className="container">
                {status}
                <div>Score: {this.props.score}</div>
                <h2 className="word">{this.props.questions.word}</h2>
                {form}
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        questions: state.questions.data,
        status: state.questions.status,
        score: state.questions.score
    };
};

export default connect(mapStateToProps)(Question);