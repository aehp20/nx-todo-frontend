import { buttonSafelist } from './buttons/index.safelist';
import { inputSafelist } from './inputs/index.safelist';
import { labelSafelist } from './labels/index.safelist';
import { navBarSafelist } from './navBar/index.safelist';
import { titleSafelist } from './title/index.safelist';
import { toggleSafelist } from './toggles/index.safelist';

const safelist = [
  ...toggleSafelist,
  ...buttonSafelist,
  ...labelSafelist,
  ...inputSafelist,
  ...navBarSafelist,
  ...titleSafelist,
];

module.exports = {
  safelist,
};
