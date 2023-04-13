export const customNodeLabel = (node) => {
  return `
    <div class="tooltip" >
      <div class="tooltip__header">${node.label}</div>
      <dl class="tooltip__data-list">
        <div class="tooltip__data-list__item">
          <dt class="tooltip__data-list__item__label">Hype level:</dt>
          <dd class="tooltip__data-list__item__value">${node.hypeLevel || 0}</dd>
        </div>
        <div class="tooltip__data-list__item">
          <dt class="tooltip__data-list__item__label">Number of users:</dt>
          <dd class="tooltip__data-list__item__value">${node.noOfUser || 0}</dd>
        </div>
      </dl>
    <div/>
  `;
};
