import { toggleSafelist } from './toggles/toggle.safelist';
import { buttonSafelist } from './buttons/button.safelist';
import { inputSafelist } from './inputs/input.safelist';

const safelist = [...toggleSafelist, ...buttonSafelist, ...inputSafelist];

exports.safelist = safelist;
