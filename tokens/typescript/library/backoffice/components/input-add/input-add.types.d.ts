import { TpInputAddState } from './input-add.enums';
export type TpInputAdd = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpInputAddState}`;
};
