import { TpTableTableBorder } from './table.enums';
export type TpTable = {
    ['tp-table-break-word']: boolean;
    ['tp-table-action']: boolean;
    ['tp-table-border']: `${TpTableTableBorder}`;
    ['tp-table-center']: boolean;
    ['tp-table-even']: boolean;
    ['tp-table-header-min-width']: boolean;
    ['tp-table-hover']: boolean;
    ['tp-table-pointer']: boolean;
    ['tp-table-responsive']: boolean;
    ['tp-table-row-error']: boolean;
    ['tp-table-min-width-initial']: boolean;
};
