import Bar from "./Bar";

function Xylophone() {
  // ten notes of the xylophone
  const notes = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];
  return (
    <div>
      <h1>Xylophone</h1>
      {notes.map((note, index) => (
        <Bar key={index} note={note} />
      ))}
    </div>
  );
}

export default Xylophone;
