import { TpTimepickerState } from './timepicker.enums';
export type TpTimepicker = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpTimepickerState}`;
};
