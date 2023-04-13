import { ForceGraph2D } from "react-force-graph";
import { customNodeLabel } from "./utils/customNodeLabel";
import { generateCustomNodeObject } from "./utils/generateCustomNodeObject";
import { randomGraphData } from "./utils/randomGraphData";

function App() {
  return (
    <ForceGraph2D
      graphData={randomGraphData({})}
      nodeLabel={customNodeLabel}
      nodeCanvasObject={generateCustomNodeObject}
    />
  );
}

export default App;
