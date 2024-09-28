import React from "react";
import RoomCard from "./RoomCard";

const RoomComponent = ({ roomInfo }) => {
  // console.log(roomInfo[29]);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of Rooms</h1>
        {/* <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <RoomCard key={id} myData={curVal} />;
          })}
        </div> */}
        <div className="grid">
          {roomInfo.map((curVal, id) => {
            return <RoomCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
