import { TpUtilsCol, TpUtilsDisplay, TpUtilsAlignItems, TpUtilsJustifyContent, TpUtilsFlexColumn, TpUtilsFlexWrap, TpUtilsOverflow, TpUtilsBorder, TpUtilsTextAlign } from './utils.enums';
export type TpUtils = {
    ['tp-row']: boolean;
    ['tp-col']: `${TpUtilsCol}`;
    ['tp-display']: `${TpUtilsDisplay}`;
    ['tp-align-items']: `${TpUtilsAlignItems}`;
    ['tp-justify-content']: `${TpUtilsJustifyContent}`;
    ['tp-flex-column']: `${TpUtilsFlexColumn}`;
    ['tp-flex-wrap']: `${TpUtilsFlexWrap}`;
    ['tp-flex-grow-1']: boolean;
    ['tp-w-100']: boolean;
    ['tp-h-100']: boolean;
    ['tp-overflow']: `${TpUtilsOverflow}`;
    ['tp-border']: `${TpUtilsBorder}`;
    ['tp-text-align']: `${TpUtilsTextAlign}`;
    ['tp-clamp']: boolean;
};
