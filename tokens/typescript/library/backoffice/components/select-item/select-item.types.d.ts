import { TpSelectItemColor } from './select-item.enums';
export type TpSelectItem = {
    ['tp-color']: `${TpSelectItemColor}`;
    ['tp-select-item-selected']: boolean;
    ['tp-select-item-cursor-move']: boolean;
};
