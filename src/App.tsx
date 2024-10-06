import Glockenspiel from "./Glockenspiel";
import Sheet from "./Sheet";

function App() {
  const notes = {
    C3: { color: "bg-indigo-800" },
    D3: { color: "bg-fuchsia-800" },
    E3: { color: "bg-yellow-300" },
    F3: { color: "bg-red-600" },
    G3: { color: "bg-gray-900" },
    A3: { color: "bg-gray-300" },
    B3: { color: "bg-green-800" },
    C4: { color: "bg-blue-200" },
    D4: { color: "bg-pink-300" },
    E4: { color: "bg-amber-600" },
  };
  return (
    <div className="flex flex-col">
      <Sheet notes={notes} />
      <Glockenspiel notes={notes} />
    </div>
  );
}

export default App;
