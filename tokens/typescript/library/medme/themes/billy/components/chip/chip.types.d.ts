import { TpChipIcon, TpChipImg } from './chip.enums';
export type TpChip = {
    ['tp-disabled']: boolean;
    ['tp-icon']: `${TpChipIcon}`;
    ['tp-img']: `${TpChipImg}`;
    ['tp-checked']: boolean;
};
