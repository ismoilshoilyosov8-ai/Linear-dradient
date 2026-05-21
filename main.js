let body = document.querySelector(`body`)
let container = document.querySelector(`.container`);
let colorText = document.querySelector(`.color-text`);
const values = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
];
renderColor();
function renderColor() {
  let hashtag = `#`;
  for (let i = 0; i < 6; i++) {
    const randomColor = Math.trunc(Math.random() * values.length);
    hashtag += values[randomColor];
  }
  return hashtag;
}
container.addEventListener(`click`, () => {
    body.style.background = `linear-gradient(to left, ${renderColor()}, ${renderColor()})`;
    container.style.background = body.style.background;
});
colorText.style.display = `none`;