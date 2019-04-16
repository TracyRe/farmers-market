import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){

  return(
    <div>
      <h3>{props.month}</h3>
      <ul>
        <li>{props.selection} </li>
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;
