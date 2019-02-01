import React from 'react';
import {connect} from 'react-redux';

import QuestionForm from './question-form';

import './question.css';

import {fetchQuestions, setStatusCorrect, setStatusIncorrect, resetStatus, incrementScore, postAnswer, fetchProgress, toggleProgress} from '../actions/questions';

export class Question extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
        this.props.dispatch(fetchProgress());
    }

    toggleProgress() {
        this.props.dispatch(toggleProgress());
    }

    nextQuestion() {
        this.props.dispatch(resetStatus());
        this.props.dispatch(fetchProgress());
        this.props.dispatch(fetchQuestions());
    }

    handleAnswer(value) {
        
        if(value.answer === this.props.questions.data.answer) {
            this.props.dispatch(postAnswer(value.answer));
            this.props.dispatch(setStatusCorrect());
            this.props.dispatch(incrementScore());

        }
        else {
            this.props.dispatch(postAnswer(value.answer));
            this.props.dispatch(setStatusIncorrect());
        }
    }
    
    render() {
        console.log(this.props)
        
        const incorrectGifs = ["https://i.makeagif.com/media/11-20-2015/hTMHqC.gif", "https://78.media.tumblr.com/b7367787d4e83fa43bff40553298cf1d/tumblr_mjf3h2B4WG1qcepzco4_r1_250.gif", "https://media.giphy.com/media/fM4iQFyuHeoJW/giphy.gif"]
        const correctGifs = ["https://media.giphy.com/media/JrjNe1zbLYd3y/giphy.gif", "https://media.giphy.com/media/sxjczRKltBE9G/giphy.gif", "http://33.media.tumblr.com/20ebb47c81ba159ee7f46f9e3c2f8662/tumblr_mnj7bgPeMT1sqghjko2_250.gif"]
        let incorrect = incorrectGifs[Math.floor(Math.random() * incorrectGifs.length)]
        let correct = correctGifs[Math.floor(Math.random() * correctGifs.length)]

        let status, progress;
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
                    <div className="response">Correct!</div>
                    
                    <img className="gif" src={correct} alt="Thumbs down" />
                </div>
                
            );
        }
        if (this.props.status === 'incorrect') {
            status = (
                <div className="form-incorrect" aria-live="polite">
                    <div className="response">Wrong! the answer was {this.props.questions.data.answer}</div>
                    <img className ="gif" src={incorrect} alt="Thumbs down" />
                </div>
            );
        }
        if (this.props.questions.showProgress) {
            progress = (
                <ul>
                    {this.props.questions.progress.map(word => {
                        return( 
                            <li key={word.word}>{word.word}: {word.numberOfCorrectAnswers}/{word.numberOfAnswers}</li>
                        )
                    })}
                </ul>
            );
        }
        else if(!this.props.questions.showProgress) {
            progress = (
                <ul></ul>
            );
        }
        return (
            <div className="container">
                {status}
                <div className="score">Score: {this.props.score}</div>
                <h2 className="word">{this.props.questions.data.word}</h2>
                {form}
                <button className="progress-btn" onClick={() => this.toggleProgress()}>Progress</button>
                {progress}
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        status: state.questions.status,
        score: state.questions.score
    };
};

export default connect(mapStateToProps)(Question);