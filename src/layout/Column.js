import React, { PropTypes } from 'react';

const Column = (props) =>
    <div className="col-md-4">
        { props.children }
    </div>;

Column.propTypes = {
  children: PropTypes.node,
}

export default Column;

