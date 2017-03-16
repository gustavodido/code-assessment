import React, { PropTypes } from 'react';

const Row = (props) =>
    <div className="row">
        { props.children }
    </div>;

Row.propTypes = {
  children: PropTypes.node
}

export default Row;

