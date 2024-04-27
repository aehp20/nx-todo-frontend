import { toggleSafelist } from './toggles/toggle.safelist';
import { buttonSafelist } from './buttons/button.safelist';

const safelist = [...toggleSafelist, ...buttonSafelist];

exports.safelist = safelist;
