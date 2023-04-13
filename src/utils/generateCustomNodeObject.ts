// @ts-nocheck
export const generateCustomNodeObject = (node, ctx) => {
  drawTriangle({ ctx, x: node.x, y: node.y, nodeScale: node.hypeLevel });
  colorNode({ ctx, color: "#4D9DAE" });
};

// Draws triangle shape
function drawTriangle({
  ctx,
  x,
  y,
  nodeScale,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  nodeScale: number;
}) {
  const oneThirdOfHeight = 0.34;
  const TwoThirdOfHeight = 0.67;

  ctx.beginPath();
  ctx.moveTo(x, y - TwoThirdOfHeight * nodeScale);
  ctx.lineTo(
    x - TwoThirdOfHeight * nodeScale,
    y + oneThirdOfHeight * nodeScale
  );
  ctx.lineTo(
    x + TwoThirdOfHeight * nodeScale,
    y + oneThirdOfHeight * nodeScale
  );
  ctx.closePath();
}

// Fills the shape with color
function colorNode({
  ctx,
  color,
}: {
  ctx: CanvasRenderingContext2D;
  color: string;
}) {
  ctx.fillStyle = color;
  ctx.fill();

  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.strokeStyle = color;
  ctx.stroke();
}
