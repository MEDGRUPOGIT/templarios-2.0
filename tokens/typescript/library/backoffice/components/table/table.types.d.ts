import { TpTableBorder, TpTableCellLevel, TpTableFeedback } from './table.enums';
export type TpTable = {
    ['tp-break-word']: boolean;
    ['tp-action']: boolean;
    ['tp-border']: `${TpTableBorder}`;
    ['tp-cell-level']: `${TpTableCellLevel}`;
    ['tp-center']: boolean;
    ['tp-odd']: boolean;
    ['tp-disabled']: boolean;
    ['tp-min-width-full']: boolean;
    ['tp-cell-min-width-full']: boolean;
    ['tp-hover']: boolean;
    ['tp-pointer']: boolean;
    ['tp-responsive']: boolean;
    ['tp-feedback']: `${TpTableFeedback}`;
    ['tp-min-width-initial']: boolean;
};
