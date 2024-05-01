import { toggleSafelist } from './toggles/toggle.safelist';
import { buttonSafelist } from './buttons/button.safelist';
import { labelSafelist } from './labels/label.safelist';
import { inputSafelist } from './inputs/input.safelist';
import { navBarSafelist } from './navBar/navBar.safelist';

const safelist = [
  ...toggleSafelist,
  ...buttonSafelist,
  ...labelSafelist,
  ...inputSafelist,
  ...navBarSafelist,
];

module.exports = {
  safelist,
};
