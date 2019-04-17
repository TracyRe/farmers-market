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
          width: 100vw;
        }

        h1, h2{
          text-align: center;
          font-weight: normal;
          font-size: 3em;
        }


      `}</style>
      <Header/>
      <MarketSchedule/>
      <SeasonalProduce/>
    </div>
  );

}

export default App;
