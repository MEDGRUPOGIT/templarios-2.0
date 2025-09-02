import { TpButtonGroupSize, TpButtonGroupFill, TpButtonGroupColor, TpButtonGroupName } from './button-group.enums';
export type TpButtonGroup = {
    ['tp-size']: `${TpButtonGroupSize}`;
    ['tp-fill']: `${TpButtonGroupFill}`;
    ['tp-color']: `${TpButtonGroupColor}`;
    ['tp-disabled']: boolean;
    ['tp-name']: `${TpButtonGroupName}`;
};
