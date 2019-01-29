import React from 'react';

import QuestionForm from './question-form';

export function Question(props) {
    return (
        <div className="container">
            {props.question}
            <QuestionForm />
        </div>
    );
}

export default Question;