import { toggleSafelist } from './toggles/toggle.safelist';

const safelist = [...toggleSafelist];

exports.safelist = safelist;
