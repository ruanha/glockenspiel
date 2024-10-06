import Bar from "./Bar";

function Glockenspiel({ notes }: { notes: Record<string, { color: string }> }) {
  const keys = Object.keys(notes);

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {keys.map((key, index) => (
        <Bar key={index} note={key} color={notes[key].color} />
      ))}
    </div>
  );
}

export default Glockenspiel;
