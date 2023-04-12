import { ForceGraph2D } from "react-force-graph";
import { randomGraphData } from "./utils/randomGraphData";

function App() {
  return <ForceGraph2D graphData={randomGraphData({ numOfElements: 20 })} />;
}

export default App;
