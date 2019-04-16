import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){


  return(
  
      <li>{props.selection}</li>

  );
}

Produce.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;
