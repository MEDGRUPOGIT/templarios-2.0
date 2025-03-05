import { TpSelectFilterState } from './select-filter.enums';
export type TpSelectFilter = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpSelectFilterState}`;
};
