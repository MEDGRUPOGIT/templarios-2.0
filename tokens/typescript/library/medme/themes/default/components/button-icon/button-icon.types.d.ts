import { TpButtonIconSize, TpButtonIconFill, TpButtonIconColor, TpButtonIconName } from './button-icon.enums';
export type TpButtonIcon = {
    ['tp-size']: `${TpButtonIconSize}`;
    ['tp-fill']: `${TpButtonIconFill}`;
    ['tp-color']: `${TpButtonIconColor}`;
    ['tp-name']: `${TpButtonIconName}`;
    ['tp-disabled']: boolean;
};
