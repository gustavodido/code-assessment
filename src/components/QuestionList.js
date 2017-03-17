import React, { PropTypes } from 'react';

import Question from './Question'

const QuestionList = ({ onQuestionValueChanged, questions, category }) => {
    const categoryQuestions = questions.filter(q => q.category === category.label);

    return  <div>
            { 
                categoryQuestions.map(question =>
                    <Question
                        key={ question.id }
                        onValueChanged={ (value) => onQuestionValueChanged(question.id, value) }
                        {...question}
                    />)
            }
            </div>;
}

QuestionList.propTypes = {
  onQuestionValueChanged: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired }).isRequired).isRequired,
  category: PropTypes.object.isRequired
}

export default QuestionList;
