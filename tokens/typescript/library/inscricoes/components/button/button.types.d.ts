import { TpButtonFill } from './button.enums';
export type TpButton = {
    ['tp-fill']: `${TpButtonFill}`;
    ['tp-disabled']: boolean;
    ['tp-loading']: boolean;
    ['tp-no-padding']: boolean;
};
