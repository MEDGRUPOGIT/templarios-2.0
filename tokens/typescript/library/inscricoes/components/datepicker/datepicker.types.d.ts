import { TpDatepickerState, TpDatepickerIcon } from './datepicker.enums';
export type TpDatepicker = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpDatepickerState}`;
    ['tp-icon']: `${TpDatepickerIcon}`;
};
