import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  const dayStyle = {
    border: '1px solid lightgrey',
    textAlign: 'center',
    paddingBottom: '5px'
  }
  const dayHead ={
    background: '#CBE4D2',
    marginBottom: '10px'
  }

  return(
    <div style={dayStyle}>
      <h3 style={dayHead}>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>Booth {props.booth}</p>
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
