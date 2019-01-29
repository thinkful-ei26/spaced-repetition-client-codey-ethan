import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';

export class QuestionForm extends React.Component {
    onSubmit(value) {
        this.props.handleAnswer(value);
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="question-form"
                onSubmit={this.props.handleSubmit(value =>
                    this.onSubmit(value)
                )}>
                {error}
                <label htmlFor="answer"></label>
                <Field
                    component={Input}
                    type="text"
                    name="answer"
                    id="answer"
                    validate={[required, nonEmpty]}
                />
                <button>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'question',
    onSubmitFail: (errors, dispatch) => dispatch(focus('question', 'answer'))
})(QuestionForm);
