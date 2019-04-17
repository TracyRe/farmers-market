import React from 'react';

function Header(){
  const headerStyle = {
    textAlign: 'center',
    paddingBottom: '1em'
  }

  return(
    <div style={headerStyle}>
      <h1>Avery's Organics</h1>
    </div>
  );
}

export default Header;
