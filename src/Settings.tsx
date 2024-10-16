import { Switch, Text, Flex, Select } from "@radix-ui/themes";
import { abc, wheelsOnTheBus } from "./songs/index";
import { Song } from "./songs/song.model";

interface SettingsProps {
  setSelectedSong: (song: Song) => void;
  showNotes: boolean;
  setShowNotes: (value: boolean) => void;
  showText: boolean;
  setShowText: (value: boolean) => void;
  setSize: (value: number) => void;
}

function Settings({
  setSelectedSong,
  showNotes,
  setShowNotes,
  showText,
  setShowText,
  setSize,
}: SettingsProps) {
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

  const handleSize = (value: string) => {
    setSize(parseFloat(value));
  };

  return (
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
          <Switch
            checked={showNotes}
            onCheckedChange={(isChecked) => handleShowNotes(isChecked)}
          />
          Show Notes
        </Flex>
      </Text>
      <Text as="label" size="4">
        <Flex gap="2">
          <Switch
            checked={showText}
            onCheckedChange={(isChecked) => handleShowText(isChecked)}
          />
          Show Text
        </Flex>
      </Text>
      <Select.Root defaultValue="1" onValueChange={handleSize}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="1">sm</Select.Item>
            <Select.Item value="1.5">md</Select.Item>
            <Select.Item value="2">lg</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export default Settings;
