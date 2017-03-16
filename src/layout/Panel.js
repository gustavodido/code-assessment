import React, { PropTypes } from 'react';

const Panel = (props) =>
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title">{ props.title }</h3>
        </div>
        <div className="panel-body">
            { props.children }
        </div>
  </div>

Panel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Panel;

