import { toggleSafelist } from './toggles/toggle.safelist';
import { buttonSafelist } from './buttons/button.safelist';
import { labelSafelist } from './labels/label.safelist';
import { inputSafelist } from './inputs/input.safelist';

const safelist = [
  ...toggleSafelist,
  ...buttonSafelist,
  ...labelSafelist,
  ...inputSafelist,
];

exports.safelist = safelist;
