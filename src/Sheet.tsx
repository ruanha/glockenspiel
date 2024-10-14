import { abc } from "./songs/abc";
import Dot from "./Dot";

function Sheet({ notes }: { notes: Record<string, { color: string }> }) {
  const rows = abc.notes.map((row, i) => {
    const cells = row.map((entry, j) => {
      return (
        <div key={j} className="flex flex-col">
          {entry.note ? (
            <Dot key={j} color={notes[entry.note].color} />
          ) : (
            <Dot key={j} color="bg-transparent" />
          )}
          <div className="text-center">{entry.text}</div>
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
      <h2 className="text-5xl text-center mb-6">{abc.title}</h2>
      <div className="flex flex-col items-center gap-2">{rows}</div>
    </>
  );
}

export default Sheet;
