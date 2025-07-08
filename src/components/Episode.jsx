

export const Episode = ({ num, title, guest }) => {
  return `
    <div class="episode">
      <div class="episode__num">${num}</div>
      <div class="episode__body">
        <div class="episode__title">${title}</div>
        <div class="episode__guest">host: ${guest}</div>
      </div>
    </div>
  `;
};
