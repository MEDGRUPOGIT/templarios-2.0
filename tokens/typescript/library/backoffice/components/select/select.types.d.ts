import { TpSelectState } from './select.enums';
export type TpSelect = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpSelectState}`;
};
