import { TpButtonIconFill, TpButtonIconName } from './button-icon.enums';
export type TpButtonIcon = {
    ['tp-fill']: `${TpButtonIconFill}`;
    ['tp-name']: `${TpButtonIconName}`;
    ['tp-disabled']: boolean;
};
