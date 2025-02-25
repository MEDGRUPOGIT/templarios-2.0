import { TpInputState, TpInputIcon } from './input.enums';
export type TpInput = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpInputState}`;
    ['tp-icon']: `${TpInputIcon}`;
};
