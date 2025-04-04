import { TpCheckboxSize } from './checkbox.enums';
export type TpCheckbox = {
    ['tp-disabled']: boolean;
    ['tp-indeterminate']: boolean;
    ['tp-checked']: boolean;
    ['tp-size']: `${TpCheckboxSize}`;
};
