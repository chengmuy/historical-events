import React from "react";

const EventListEntry = ({ entry }) => {
  return (
    <div>
      <h2>Event List Entry here</h2>
      <div>Date: {entry.date}</div>
      <div>Location: {entry.category2}</div>
      <div>Synposis: {entry.description}</div>
    </div>
  );
};

export default EventListEntry;
