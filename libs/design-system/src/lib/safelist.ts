import { toggleSafelist } from './toggles/toggle.safelist';
import { buttonSafelist } from './buttons/button.safelist';
import { labelSafelist } from './labels/label.safelist';
import { inputSafelist } from './inputs/input.safelist';
import { navBarSafelist } from './navBar/navBar.safelist';
import { titleSafelist } from './title/index.safelist';

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
