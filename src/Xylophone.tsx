import Bar from "./Bar";

function Xylophone() {
  const bars = [
    { note: "C", color: "bg-red-500" },
    { note: "D", color: "bg-orange-500" },
    { note: "E", color: "bg-yellow-500" },
    { note: "F", color: "bg-green-500" },
    { note: "G", color: "bg-blue-500" },
    { note: "A", color: "bg-indigo-500" },
    { note: "B", color: "bg-purple-500" },
    { note: "C", color: "bg-red-200" },
    { note: "D", color: "bg-orange-200" },
    { note: "E", color: "bg-yellow-200" },
  ];
  return (
    <div className="flex flex-row gap-8">
      {bars.map((bar, index) => (
        <Bar key={index} note={bar.note} color={bar.color} />
      ))}
    </div>
  );
}

export default Xylophone;
