import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';

function Month(props){
  const ulStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '1em',
    height: '33vh',
    border: '1px solid lightgrey'

  }
console.log(props);
  return(
    <div>
      <h2>{props.month}</h2>
        <ul style={ulStyle}>
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
