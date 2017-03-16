import React, { PropTypes } from 'react';

import Question from './../Question/Question'

const QuestionList = ({onQuestionValueChanged, questions}) =>
    <div>
        {questions.map(question =>
            <Question
                key={ question.id }
                onValueChanged={ (value) => onQuestionValueChanged(question.id, value) }
                {...question}
            />
        )}
    </div>;

QuestionList.propTypes = {
  onQuestionValueChanged: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default QuestionList;
