import Bar from "./Bar";

function Glockenspiel() {
  const bars = [
    { note: "C3", color: "bg-red-500" },
    { note: "D3", color: "bg-orange-500" },
    { note: "E3", color: "bg-yellow-500" },
    { note: "F3", color: "bg-green-500" },
    { note: "G3", color: "bg-blue-500" },
    { note: "A3", color: "bg-indigo-500" },
    { note: "B3", color: "bg-purple-500" },
    { note: "C4", color: "bg-red-200" },
    { note: "D4", color: "bg-orange-200" },
    { note: "E4", color: "bg-yellow-200" },
  ];
  return (
    <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 flex-wrap">
      {bars.map((bar, index) => (
        <Bar key={index} note={bar.note} color={bar.color} />
      ))}
    </div>
  );
}

export default Glockenspiel;
