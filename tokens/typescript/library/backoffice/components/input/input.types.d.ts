import { TpInputState, TpInputName } from './input.enums';
export type TpInput = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpInputState}`;
    ['tp-name']: `${TpInputName}`;
};
