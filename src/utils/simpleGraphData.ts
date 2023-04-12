const nodes = [{ id: "1st_node" }, { id: "2nd_node" }, { id: "3rd_node" }];

const links = [
  { source: "2nd_node", target: "1st_node" },
  { source: "3rd_node", target: "2nd_node" },
];

export const simpleGraphData = { nodes, links };
