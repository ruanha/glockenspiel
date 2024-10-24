import Bar from "./Bar";

function Glockenspiel({
  notes,
  showNotes,
  size,
}: {
  notes: Record<string, { color: string; height: number }>;
  showNotes: boolean;
  size: number;
}) {
  const keys = Object.keys(notes);

  return (
    <div
      className="flex flex-row items-center gap-4 flex-wrap"
      id="glockenspiel"
    >
      {keys.map((key, index) => (
        <Bar
          key={index}
          note={key}
          color={notes[key].color}
          height={notes[key].height * size}
          width={2 * size}
          showNote={showNotes}
        />
      ))}
    </div>
  );
}

export default Glockenspiel;
