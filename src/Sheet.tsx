import Dot from "./Dot";
import { Song } from "./songs/song.model";

function Sheet({
  notes,
  selectedSong,
  showText,
}: {
  notes: Record<string, { color: string }>;
  selectedSong: Song;
  showText: boolean;
}) {
  const rows = selectedSong.notes.map((row, i) => {
    const cells = row.map((entry, j) => {
      return (
        <div key={j} className="flex flex-col">
          {entry.note ? (
            <Dot key={j} color={notes[entry.note].color} />
          ) : (
            <Dot key={j} color="bg-transparent" />
          )}
          <div className="text-center">{showText && entry.text}</div>
        </div>
      );
    });
    return (
      <div key={i} className="flex flex-row gap-8">
        {cells}
      </div>
    );
  });

  return (
    <>
      <h2 className="text-5xl text-center mb-6">{selectedSong.title}</h2>
      <div className="flex flex-col items-center gap-2">{rows}</div>
    </>
  );
}

export default Sheet;
