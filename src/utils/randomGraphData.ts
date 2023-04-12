interface RandomGraphDataParams {
  numOfElements?: number;
}

export const randomGraphData = ({
  numOfElements = 100,
}: RandomGraphDataParams) => {
  const gData = {
    nodes: [...Array(numOfElements).keys()].map((i) => ({ id: i })),
    links: [...Array(numOfElements).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };

  return gData;
};
