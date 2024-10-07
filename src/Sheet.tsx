import { abc } from "./songs/abc";
import Dot from "./Dot";

function Sheet({ notes }: { notes: Record<string, { color: string }> }) {
  const rows = abc.map((row, i) => {
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
  return <div className="flex flex-col gap-4">{rows}</div>;
}

export default Sheet;
