import React from 'react';
import PropTypes from 'prop-types';

function Day(props){


  return(
    <div>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>Booth: {props.booth}</h3>
      <hr/>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
