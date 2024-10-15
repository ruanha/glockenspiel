import { useState } from "react";
import { Switch, Text, Flex } from "@radix-ui/themes";
import { abc, wheelsOnTheBus } from "./songs/index";
import { Song } from "./songs/song.model";
import Glockenspiel from "./Glockenspiel";
import Sheet from "./Sheet";

function App() {
  const [selectedSong, setSelectedSong] = useState<Song>(abc);
  const [showNotes, setShowNotes] = useState(true);
  const [showText, setShowText] = useState(true);
  const notes = {
    C3: { color: "bg-indigo-800" },
    D3: { color: "bg-fuchsia-800" },
    E3: { color: "bg-yellow-300" },
    F3: { color: "bg-red-600" },
    G3: { color: "bg-gray-900" },
    A3: { color: "bg-gray-300" },
    B3: { color: "bg-green-800" },
    C4: { color: "bg-blue-200" },
    D4: { color: "bg-pink-300" },
    E4: { color: "bg-amber-600" },
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
              defaultChecked
              onCheckedChange={() => setShowNotes(!showNotes)}
            />
            Show Notes
          </Flex>
        </Text>

        <Text as="label" size="4">
          <Flex gap="2">
            {" "}
            <Switch
              defaultChecked
              onCheckedChange={() => setShowText(!showText)}
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
