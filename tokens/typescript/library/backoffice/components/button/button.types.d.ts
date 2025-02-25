import { TpButtonSize, TpButtonFill, TpButtonColor, TpButtonName } from './button.enums';
export type TpButton = {
    ['tp-size']: `${TpButtonSize}`;
    ['tp-fill']: `${TpButtonFill}`;
    ['tp-color']: `${TpButtonColor}`;
    ['tp-disabled']: boolean;
    ['tp-name']: `${TpButtonName}`;
};
