import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';

function Month(props){
console.log(props);
  return(
    <div>
      <h2>{props.month}</h2>
        <ul>
        {props.selection.map((produce, index) =>
            <Produce selection={produce}
              key={index}/>
          )}
        </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
};

export default Month;
