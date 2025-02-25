import { TpInputState } from './input.enums';
export type TpInput = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpInputState}`;
};
