export const randomHex = () => (Math.round(Math.random()*155)+100)
  .toString(16)
  .toUpperCase();

export const makeRandomColor = () => '#' + randomHex() + randomHex() + randomHex();