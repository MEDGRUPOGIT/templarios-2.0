import { TpTextareaState } from './textarea.enums';
export type TpTextarea = {
    ['tp-disabled']: boolean;
    ['tp-state']: `${TpTextareaState}`;
};
