import React, { PropTypes } from 'react';

import QuestionResults from './../constants/QuestionResults'

import './Question.css';

const Question = ({ onValueChanged, label, value }) => {
  const isActive = expected => {
    let className = 'btn btn-default';
     if (value === expected) {
       className += ' active';
     }
     return className;
  };

  return <div className='clearfix margin-bottom'>
          <div className="pull-left margin-top">
            { label }
          </div>  
          <div className='btn-group pull-right' data-toggle='buttons'>
            <button type='button' className={ isActive(QuestionResults.Bad) } onClick={() => onValueChanged(QuestionResults.Bad) }>
              <span className='glyphicon glyphicon-remove-circle' aria-hidden='true'></span>
            </button> 
            <button type='button' className={ isActive(QuestionResults.Mixed) } onClick={() => onValueChanged(QuestionResults.Mixed) }>
              <span className='glyphicon glyphicon-record' aria-hidden='true'></span>
            </button> 
            <button type='button' className={ isActive(QuestionResults.Good) } onClick={() => onValueChanged(QuestionResults.Good) }>
            <span className='glyphicon glyphicon-ok-circle' aria-hidden='true'></span>
            </button> 
          </div>
        </div>;
} 

Question.propTypes = {
  onValueChanged: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Question;
