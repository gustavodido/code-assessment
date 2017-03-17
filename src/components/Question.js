import React, { PropTypes } from 'react';

import IconButton from './../layout/IconButton'
import QuestionResults from './../constants/QuestionResults'

import './Question.css';

const Question = ({ onValueChanged, label, value }) => 
   <div className='clearfix margin-bottom'>
      <div className="pull-left margin-top">
        { label }
      </div>  
      <div className='btn-group pull-right' data-toggle='buttons'>
        <IconButton isActive={value === QuestionResults.Bad} icon='thumbs-down' onClick={() => onValueChanged(QuestionResults.Bad) } />
        <IconButton isActive={value === QuestionResults.Mixed} icon='minus-sign' onClick={() => onValueChanged(QuestionResults.Mixed) } />
        <IconButton isActive={value === QuestionResults.Good} icon='thumbs-up' onClick={() => onValueChanged(QuestionResults.Good) } />
      </div>
    </div>;

Question.propTypes = {
  onValueChanged: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Question;
