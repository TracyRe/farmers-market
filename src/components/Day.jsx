import React from 'react';
import PropTypes from 'prop-types';

function Day(props){


  return(
    <div>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>Booth: {props.booth}</h4>
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
