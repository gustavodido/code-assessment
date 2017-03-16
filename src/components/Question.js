import React, { PropTypes } from 'react';

const Question = ({ onValueChanged, label, value }) =>
  <div>
    { label }
    <button onClick={() => onValueChanged(-1) }>-1</button>
    <button onClick={() => onValueChanged(0 ) }> 0</button>
    <button onClick={() => onValueChanged(+1) }>+1</button>
    { value }
  </div>;

Question.propTypes = {
  onValueChanged: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Question;
