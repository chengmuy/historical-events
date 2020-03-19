import React from "react";
import EventListEntry from "./EventListEntry";

const EventList = ({ eventList }) => {
  return (
    <div>
      <h1>EventList here</h1>
      {eventList.map(e => (
        <EventListEntry entry={e} />
      ))}
    </div>
  );
};

export default EventList;
