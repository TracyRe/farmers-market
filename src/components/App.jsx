import React from "react";
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import SeasonalProduce from './SeasonalProduce';

function App(){

  return (
    <div>
      <style global jsx>{`

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          padding: 2em;
          font-family: Helvetica, Arial, sans-serif;
        }

      `}</style>
      <Header/>
      <MarketSchedule/>
      <SeasonalProduce/>
    </div>
  );

}

export default App;
