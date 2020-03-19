import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { debounce } from "lodash";

import api from "./api";
import EventList from "./components/EventList";
import Search from "./components/Search";

const App = ({ initialTerm }) => {
  const [eventList, setEventList] = useState([]);

  const updateEvents = debounce(async (searchTerm, page = 1) => {
    const results = await api.getSearchResults(searchTerm, page);
    setEventList(results);
  }, 250);

  return (
    <div>
      <Search updateEvents={updateEvents} {...{ initialTerm }} />
      <EventList eventList={eventList} />
    </div>
  );
};

ReactDOM.render(<App initialTerm="epidemic" />, document.getElementById("app"));
