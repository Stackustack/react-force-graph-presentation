import { ForceGraph2D } from "react-force-graph";

function App() {
  // Random tree
  const N = 100;
  const gData = {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };

  return (
    <div className="App">
      <ForceGraph2D graphData={gData} />
    </div>
  );
}

export default App;
