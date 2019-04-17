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

  }

  const h3Style= {
    fontSize: '1.5em',
    padding: '.25em 0',
    background: '#CBE4D2',
    textAlign: 'center'
  }

  const monthBox= {
    marginTop: '1em',
    border: '1px solid lightgrey'
  }
console.log(props);
  return(
    <div style={monthBox}>
      <h3 style={h3Style}>{props.month}</h3>
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
