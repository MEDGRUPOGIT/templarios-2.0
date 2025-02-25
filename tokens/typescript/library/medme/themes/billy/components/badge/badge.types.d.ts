import { TpBadgeSize, TpBadgeColor, TpBadgeName } from './badge.enums';
export type TpBadge = {
    ['tp-size']: `${TpBadgeSize}`;
    ['tp-color']: `${TpBadgeColor}`;
    ['tp-name']: `${TpBadgeName}`;
};
