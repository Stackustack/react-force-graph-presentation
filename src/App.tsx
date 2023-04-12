import { ForceGraph2D } from "react-force-graph";
import { simpleGraphData } from "./utils/simpleGraphData";

function App() {
  return <ForceGraph2D graphData={simpleGraphData} />;
}

export default App;
