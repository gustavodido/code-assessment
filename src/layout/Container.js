import React, { PropTypes } from 'react';

const Container = (props) =>
    <div className="container-fluid container-blocked">
        { props.children }
    </div>;

Container.propTypes = {
  children: PropTypes.node,
}

export default Container;

