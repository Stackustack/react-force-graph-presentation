import { ForceGraph2D } from "react-force-graph";
import { customNodeLabel } from "./utils/customNodeLabel";
import { randomGraphData } from "./utils/randomGraphData";

function App() {
  return <ForceGraph2D graphData={randomGraphData({})} nodeLabel={customNodeLabel} />;
}

export default App;
