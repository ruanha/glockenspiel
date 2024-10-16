import { useState } from "react";
import { Switch, Text, Flex } from "@radix-ui/themes";
import { abc, wheelsOnTheBus } from "./songs/index";
import { Song } from "./songs/song.model";
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
  const songs: Record<string, Song> = {
    abc,
    wheelsOnTheBus,
  } as const;
  const options = Object.keys(songs).map((song) => (
    <option key={song} value={song}>
      {songs[song].title}
    </option>
  ));

  const handleShowNotes = (value: boolean) => {
    setShowNotes(value);
    localStorage.setItem("showNotes", value.toString());
  };

  const handleShowText = (value: boolean) => {
    setShowText(value);
    localStorage.setItem("showText", value.toString());
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-6">
        <select
          name="songs"
          id="songs"
          onChange={(event) => setSelectedSong(songs[event.target.value])}
          className="p-2 m-2 bg-gray-200 rounded-md text-lg text-gray-800 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {options}
        </select>

        <Text as="label" size="4">
          <Flex gap="2">
            {" "}
            <Switch
              checked={showNotes}
              onCheckedChange={(isChecked) => handleShowNotes(isChecked)}
            />
            Show Notes
          </Flex>
        </Text>

        <Text as="label" size="4">
          <Flex gap="2">
            {" "}
            <Switch
              checked={showText}
              onCheckedChange={(isChecked) => handleShowText(isChecked)}
            />
            Show Text
          </Flex>
        </Text>
      </div>
      <Sheet notes={notes} selectedSong={selectedSong} showText={showText} />
      <Glockenspiel notes={notes} showNotes={showNotes} />
    </div>
  );
}

export default App;
