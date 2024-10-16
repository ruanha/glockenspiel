import { useState } from "react";
import { abc } from "./songs/index";
import { Song } from "./songs/song.model";
import Settings from "./Settings";
import Glockenspiel from "./Glockenspiel";
import Sheet from "./Sheet";

function App() {
  const [selectedSong, setSelectedSong] = useState<Song>(abc);
  const [showNotes, setShowNotes] = useState(
    JSON.parse(localStorage.getItem("showNotes") || "true") as boolean
  );
  const [showText, setShowText] = useState(
    JSON.parse(localStorage.getItem("showText") || "true") as boolean
  );
  const [size, setSize] = useState(1);

  const notes = {
    C3: { color: "bg-indigo-800", height: 9.4 },
    D3: { color: "bg-fuchsia-800", height: 9 },
    E3: { color: "bg-yellow-300", height: 8.6 },
    F3: { color: "bg-red-600", height: 8.4 },
    G3: { color: "bg-gray-900", height: 8 },
    A3: { color: "bg-gray-300", height: 7.6 },
    B3: { color: "bg-green-800", height: 7.2 },
    C4: { color: "bg-blue-200", height: 7 },
    D4: { color: "bg-pink-300", height: 6.6 },
    E4: { color: "bg-amber-600", height: 6.2 },
  };

  const handleShowNotes = (value: boolean) => {
    setShowNotes(value);
    localStorage.setItem("showNotes", value.toString());
  };

  const handleShowText = (value: boolean) => {
    setShowText(value);
    localStorage.setItem("showText", value.toString());
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <Settings
        setSelectedSong={setSelectedSong}
        showNotes={showNotes}
        setShowNotes={handleShowNotes}
        showText={showText}
        setShowText={handleShowText}
        setSize={setSize}
      />
      <Sheet notes={notes} selectedSong={selectedSong} showText={showText} />
      <Glockenspiel notes={notes} showNotes={showNotes} size={size} />
    </div>
  );
}

export default App;
