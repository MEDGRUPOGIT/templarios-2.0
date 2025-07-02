import { TpSelectState, TpSelectIcon } from './select.enums';
export type TpSelect = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpSelectState}`;
    ['tp-icon']: `${TpSelectIcon}`;
};
