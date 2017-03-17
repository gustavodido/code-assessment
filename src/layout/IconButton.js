import React, { PropTypes } from 'react';

const IconButton = (props) => {
    const isActive = expected => {
        let className = 'btn btn-default';
        if (props.isActive) {
            className += ' active';
        }
        return className;
    };

    return <button type='button' className={ isActive(props.isAtive) } onClick={props.onClick }>
                <span className={'glyphicon glyphicon-' + props.icon} aria-hidden='true'></span>
           </button>;
}; 

IconButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default IconButton;

