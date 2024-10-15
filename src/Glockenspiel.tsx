import Bar from "./Bar";

function Glockenspiel({
  notes,
  showNotes,
}: {
  notes: Record<string, { color: string }>;
  showNotes: boolean;
}) {
  const keys = Object.keys(notes);

  return (
    <div className="flex flex-row gap-4 flex-wrap" id="glockenspiel">
      {keys.map((key, index) => (
        <Bar
          key={index}
          note={key}
          color={notes[key].color}
          showNote={showNotes}
        />
      ))}
    </div>
  );
}

export default Glockenspiel;
