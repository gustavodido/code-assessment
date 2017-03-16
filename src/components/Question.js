import React, { PropTypes } from 'react';

const Question = ({ onValueChanged, label, value }) => {
  const isActive = expected => {
    let className = "btn btn-default";
     if (value === expected) {
       className += " active";
     }
     return className;
  };

  return <div>
      { label }

      <div className="btn-group pull-right" data-toggle="buttons">
        <button type="button" className={ isActive(-1) } onClick={() => onValueChanged(-1) }>
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button> 
        <button type="button" className={ isActive(0) } onClick={() => onValueChanged(0 ) }>
          <span className="glyphicon glyphicon-record" aria-hidden="true"></span>
        </button> 
        <button type="button" className={ isActive(1) } onClick={() => onValueChanged(+1) }>
        <span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
        </button> 
      </div>

      { value }
    </div>;
} 

Question.propTypes = {
  onValueChanged: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Question;
