import React, { PropTypes } from 'react';

const Column = (props) =>
    <div className={ "col-md-" + props.size }>
        { props.children }
    </div>;

Column.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number.isRequired
}

export default Column;

