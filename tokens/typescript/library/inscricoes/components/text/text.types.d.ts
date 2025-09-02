import { TpTextType, TpTextColor } from './text.enums';
export type TpText = {
    ['tp-type']: `${TpTextType}`;
    ['tp-color']: `${TpTextColor}`;
};
