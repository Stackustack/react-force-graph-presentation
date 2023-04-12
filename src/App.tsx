import { ForceGraph2D } from "react-force-graph";
import { technologiesGraphData } from "./utils/technologiesGraphData";

function App() {
  // Calculate the maximum depth of the tree
  const maxDepth = Math.max(
    ...technologiesGraphData.nodes.map((node) => node.depth)
  );

  const getNodeSize = (node) => {
    const depthSizeFactor = maxDepth - node.depth + 1;
    return depthSizeFactor * 1;
  };

  return (
    <ForceGraph2D
      graphData={technologiesGraphData}
      nodeLabel="label"
      nodeAutoColorBy="group"
      nodeVal={getNodeSize}
      linkDirectionalArrowLength={6}
      linkDirectionalArrowRelPos={1}
    />
  );
}

export default App;
