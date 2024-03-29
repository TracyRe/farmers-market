import React from 'react';
import Day from './Day';




const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function MarketSchedule(){

  const h2Style = {
    paddingTop: '1em',
    paddingBottom: '.5em'
  }

  return(
    <div>
      <style jsx>{`

        .schedule {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(16.5%, 160px));
            grid-auto
            text-align: center;
        }


      `}</style>
      <hr/>

    <h2 style={h2Style}>Where and When to Find Us</h2>
      <div className="schedule">
      {marketSchedule.map((schedule, index) =>
        <Day day={schedule.day}
          location={schedule.location}
          hours={schedule.hours}
          booth={schedule.booth}
          key={index}/>
      )}
      </div>

    </div>
  );
}

export default MarketSchedule;
