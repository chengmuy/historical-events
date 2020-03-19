import React, { useState } from "react";
import ReactDOM from "react-dom";

import EventList from "./components/EventList";

const App = () => {
  const [eventList, setEventList] = useState([
    {
      date: "-300",
      description:
        "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.",
      lang: "en",
      category1: "By place",
      category2: "Greece",
      granularity: "year"
    },
    {
      date: "-300",
      description:
        "Pyrrhus, the King of Epirus, is taken as a hostage to Egypt after the Battle of Ipsus and makes a diplomatic marriage with the princess Antigone, daughter of Ptolemy and Berenice.",
      lang: "en",
      category1: "By place",
      category2: "Egypt",
      granularity: "year"
    },
    {
      date: "-300",
      description:
        "Ptolemy concludes an alliance with King Lysimachus of Thrace and gives him his daughter Arsinoe II in marriage.",
      lang: "en",
      category1: "By place",
      category2: "Egypt",
      granularity: "year"
    },
    {
      date: "-300",
      description:
        "Seleucus founds the city of Antioch, some 20 miles up the Orontes River, naming it after his father.",
      lang: "en",
      category1: "By place",
      category2: "Seleucid Empire",
      granularity: "year"
    },
    {
      date: "-300",
      description: "After the death of his wife Apama, Seleucus marries Stratonice, daughter of Demetrius Poliorcetes.",
      lang: "en",
      category1: "By place",
      category2: "Seleucid Empire",
      granularity: "year"
    },
    {
      date: "-300",
      description:
        "The central texts of Jainism, the Jain scriptures, are recorded (approximate date).{{Citation needed|date=March 2009}}",
      lang: "en",
      category1: "By place",
      category2: "India",
      granularity: "year"
    },
    {
      date: "-300",
      description:
        "In Pella (in Macedonia), the artist Gnosis makes a mosaic floor decoration called ''Stag Hunt'' and even signs it with ampquotGnosis made itampquot. It is today preserved at the Archaeological museum in Pella.",
      lang: "en",
      category1: "By topic",
      category2: "Art",
      granularity: "year"
    },
    {
      date: "-299",
      description:
        "The Samnites, seizing their chance when Rome is engaged on the Lombard plain, start the third Samnite War with a collection of mercenaries from Gaul, Sabine, and Etruscan allies to help them.",
      lang: "en",
      category1: "By place",
      category2: "Roman Republic",
      granularity: "year"
    },
    {
      date: "-299",
      description:
        "The state of Qin attacks eight cities of the state of Chu. Chu then sends an envoy to ask the King of Huai to go to Qin to negotiate peace. Qu Yuan risks his life to go up to the court to persuade the King of Huai not to go to the negotiation.",
      lang: "en",
      category1: "By place",
      category2: "China",
      granularity: "year"
    },
    {
      date: "-299",
      description: "King Wuling of Zhao abdicates the throne of Zhao to his son.",
      lang: "en",
      category1: "By place",
      category2: "China",
      granularity: "year"
    },
    {
      date: "-298",
      description:
        "The Samnites defeat the Romans under Lucius Cornelius Scipio Barbatus in the Battle of Camerinum, first battle of the Third Samnite War.",
      lang: "en",
      category1: "By place",
      category2: "Roman Republic",
      granularity: "year"
    },
    {
      date: "-298",
      description:
        "The Roman armies penetrate into the heart of the Samnite territory and then capture the Samnite cities of Taurasia, Bovianum Vetus and Aufidena.",
      lang: "en",
      category1: "By place",
      category2: "Roman Republic",
      granularity: "year"
    },
    {
      date: "-298",
      description:
        "Agathocles, king of Syracuse, assists the Italian Greeks against the Bruttians and supported the Greeks against the Romans.",
      lang: "en",
      category1: "By place",
      category2: "Sicily",
      granularity: "year"
    },
    {
      date: "-298",
      description:
        "Ptolemy gives his stepdaughter Theoxena in marriage to Agathocles, the tyrant of Syracuse (in south-eastern Sicily).",
      lang: "en",
      category1: "By place",
      category2: "Egypt",
      granularity: "year"
    },
    {
      date: "-298",
      description:
        "Ptolemy finally brings the rebellious region of Cyrene under his control. He places the region under the rule of his stepson Magas.",
      lang: "en",
      category1: "By place",
      category2: "Egypt",
      granularity: "year"
    },
    {
      date: "-298",
      description: "Bindusara succeeds his father Chandragupta Maurya as emperor of the Mauryan Empire.",
      lang: "en",
      category1: "By place",
      category2: "India",
      granularity: "year"
    },
    {
      date: "-297",
      description:
        "Fabius Maximus Rullianus becomes consul for the fourth time. He defeats the Samnites in a battle near Tifernum.",
      lang: "en",
      category1: "By place",
      category2: "Roman Republic",
      granularity: "year"
    },
    {
      date: "-297",
      description:
        "Following Cassander's death from illness, Philip IV, Cassander's eldest son, succeeds his father as King of Macedon, but soon after coming to the throne suffers from a wasting disease and dies. Antipater, the next son, rules jointly with his brother Alexander V.",
      lang: "en",
      category1: "By place",
      category2: "Greece",
      granularity: "year"
    },
    {
      date: "-297",
      description:
        "Demetrius Poliorcetes returns to Greece with the aim of becoming master of Macedonia. While Demetrius is in Greece, Lysimachus seizes his possessions in Asia Minor.",
      lang: "en",
      category1: "By place",
      category2: "Greece",
      granularity: "year"
    },
    {
      date: "-297",
      description:
        "Ptolemy decides to support Pyrrhus of Epirus and restores him to his kingdom. At first Pyrrhus reigns with a kinsman, Neoptolemus II of Epirus (who is a son of Cleopatra of Macedonia and a nephew of Alexander the Great), but soon he has him assassinated.",
      lang: "en",
      category1: "By place",
      category2: "Greece",
      granularity: "year"
    }
  ]);

  return (
    <div>
      Hello World
      <EventList eventList={eventList} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
