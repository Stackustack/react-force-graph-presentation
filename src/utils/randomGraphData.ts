import { faker } from "@faker-js/faker";
import _ from "lodash";

interface RandomGraphDataParams {
  numOfElements?: number;
}

export const randomGraphData = ({
  numOfElements = 100,
}: RandomGraphDataParams) => {
  const gData = {
    nodes: [...Array(numOfElements).keys()].map((i) => ({
      id: i,
      label: faker.commerce.product(),
      hypeLevel: _.random(10, 20),
      noOfUser: _.random(100, 2000),
    })),
    links: [...Array(numOfElements).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };

  return gData;
};
