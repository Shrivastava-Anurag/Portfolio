import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ color, thickness }) => {
  const dividerStyle = {
    backgroundColor: color,
    height: thickness,
    width: '100%',
    margin: '40px 0px', // You can adjust the margin as needed
  };

  return <div style={dividerStyle}></div>;
};

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.string,
};

Divider.defaultProps = {
  color: '#8c8c8c', // Default color is black
  thickness: '1px', // Default thickness is 1 pixel
};

export default Divider;