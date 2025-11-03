const D = {}, d = {}, h = {}, H = {};
var _ = /* @__PURE__ */ ((L) => (L.SUCCESS = "success", L.DANGER = "danger", L.PRIMARY = "primary", L.NEUTRAL_SOLID_50 = "neutral-solid-50", L))(_ || {}), l = /* @__PURE__ */ ((L) => (L.DEFAULT = "default", L.OUTLINE = "outline", L))(l || {});
const B = {
  "tp-color": Object.values(_),
  "tp-fill": Object.values(l)
};
var a = /* @__PURE__ */ ((L) => (L.ACTIVE = "active", L.COMPLETED = "completed", L.DISABLED = "disabled", L))(a || {});
const o = {
  "tp-state-item": Object.values(a)
};
var A = /* @__PURE__ */ ((L) => (L.ERROR = "error", L.SUCCESS = "success", L))(A || {}), r = /* @__PURE__ */ ((L) => (L.START = "start", L.END = "end", L.FEEDBACK = "feedback", L))(r || {});
const u = {
  "tp-state": Object.values(A),
  "tp-icon": Object.values(r)
};
var R = /* @__PURE__ */ ((L) => (L.SOLID = "solid", L.CLEAR = "clear", L))(R || {});
const n = {
  "tp-fill": Object.values(R)
};
var s = /* @__PURE__ */ ((L) => (L.ERROR = "error", L.SUCCESS = "success", L))(s || {}), O = /* @__PURE__ */ ((L) => (L.START = "start", L.END = "end", L.FEEDBACK = "feedback", L))(O || {});
const t = {
  "tp-state": Object.values(s),
  "tp-icon": Object.values(O)
};
var E = /* @__PURE__ */ ((L) => (L.NEUTRAL = "neutral", L.SUCCESS = "success", L.DANGER = "danger", L))(E || {});
const G = {
  "tp-color": Object.values(E)
};
var S = /* @__PURE__ */ ((L) => (L.DEFAULT = "default", L.PRIMARY = "primary", L))(S || {});
const i = {
  "tp-color": Object.values(S)
};
var M = /* @__PURE__ */ ((L) => (L.ERROR = "error", L.SUCCESS = "success", L))(M || {}), m = /* @__PURE__ */ ((L) => (L.START = "start", L.END = "end", L.FEEDBACK = "feedback", L))(m || {});
const N = {
  "tp-state": Object.values(M),
  "tp-icon": Object.values(m)
};
var P = /* @__PURE__ */ ((L) => (L.LABEL_XL_BOLD_SHORT = "label-xl-bold-short", L.LABEL_XL_BOLD_TALL = "label-xl-bold-tall", L.LABEL_XL_NORMAL_SHORT = "label-xl-normal-short", L.LABEL_XL_NORMAL_TALL = "label-xl-normal-tall", L.LABEL_XL_MEDIUM_SHORT = "label-xl-medium-short", L.LABEL_XL_MEDIUM_TALL = "label-xl-medium-tall", L.LABEL_XL_BLACK_SHORT = "label-xl-black-short", L.LABEL_XL_BLACK_TALL = "label-xl-black-tall", L.LABEL_LG_BOLD_SHORT = "label-lg-bold-short", L.LABEL_LG_BOLD_TALL = "label-lg-bold-tall", L.LABEL_LG_NORMAL_SHORT = "label-lg-normal-short", L.LABEL_LG_NORMAL_TALL = "label-lg-normal-tall", L.LABEL_LG_MEDIUM_SHORT = "label-lg-medium-short", L.LABEL_LG_MEDIUM_TALL = "label-lg-medium-tall", L.LABEL_LG_BLACK_SHORT = "label-lg-black-short", L.LABEL_LG_BLACK_TALL = "label-lg-black-tall", L.LABEL_MD_BOLD_SHORT = "label-md-bold-short", L.LABEL_MD_BOLD_TALL = "label-md-bold-tall", L.LABEL_MD_NORMAL_SHORT = "label-md-normal-short", L.LABEL_MD_NORMAL_TALL = "label-md-normal-tall", L.LABEL_MD_MEDIUM_SHORT = "label-md-medium-short", L.LABEL_MD_MEDIUM_TALL = "label-md-medium-tall", L.LABEL_MD_BLACK_SHORT = "label-md-black-short", L.LABEL_MD_BLACK_TALL = "label-md-black-tall", L.LABEL_SM_BOLD_SHORT = "label-sm-bold-short", L.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", L.LABEL_SM_NORMAL_SHORT = "label-sm-normal-short", L.LABEL_SM_NORMAL_TALL = "label-sm-normal-tall", L.LABEL_SM_MEDIUM_SHORT = "label-sm-medium-short", L.LABEL_SM_MEDIUM_TALL = "label-sm-medium-tall", L.LABEL_SM_BLACK_SHORT = "label-sm-black-short", L.LABEL_SM_BLACK_TALL = "label-sm-black-tall", L.LABEL_XS_BOLD_SHORT = "label-xs-bold-short", L.LABEL_XS_BOLD_TALL = "label-xs-bold-tall", L.LABEL_XS_NORMAL_SHORT = "label-xs-normal-short", L.LABEL_XS_NORMAL_TALL = "label-xs-normal-tall", L.LABEL_XS_MEDIUM_SHORT = "label-xs-medium-short", L.LABEL_XS_MEDIUM_TALL = "label-xs-medium-tall", L.LABEL_XS_BLACK_SHORT = "label-xs-black-short", L.LABEL_XS_BLACK_TALL = "label-xs-black-tall", L.LABEL_2XS_BOLD_SHORT = "label-2xs-bold-short", L.LABEL_2XS_BOLD_TALL = "label-2xs-bold-tall", L.LABEL_2XS_NORMAL_SHORT = "label-2xs-normal-short", L.LABEL_2XS_NORMAL_TALL = "label-2xs-normal-tall", L.LABEL_2XS_MEDIUM_SHORT = "label-2xs-medium-short", L.LABEL_2XS_MEDIUM_TALL = "label-2xs-medium-tall", L.LABEL_2XS_BLACK_SHORT = "label-2xs-black-short", L.LABEL_2XS_BLACK_TALL = "label-2xs-black-tall", L.PARAGRAPH_XL_BOLD_SHORT = "paragraph-xl-bold-short", L.PARAGRAPH_XL_BOLD_TALL = "paragraph-xl-bold-tall", L.PARAGRAPH_XL_NORMAL_SHORT = "paragraph-xl-normal-short", L.PARAGRAPH_XL_NORMAL_TALL = "paragraph-xl-normal-tall", L.PARAGRAPH_XL_MEDIUM_SHORT = "paragraph-xl-medium-short", L.PARAGRAPH_XL_MEDIUM_TALL = "paragraph-xl-medium-tall", L.PARAGRAPH_XL_BLACK_SHORT = "paragraph-xl-black-short", L.PARAGRAPH_XL_BLACK_TALL = "paragraph-xl-black-tall", L.PARAGRAPH_LG_BOLD_SHORT = "paragraph-lg-bold-short", L.PARAGRAPH_LG_BOLD_TALL = "paragraph-lg-bold-tall", L.PARAGRAPH_LG_NORMAL_SHORT = "paragraph-lg-normal-short", L.PARAGRAPH_LG_NORMAL_TALL = "paragraph-lg-normal-tall", L.PARAGRAPH_LG_MEDIUM_SHORT = "paragraph-lg-medium-short", L.PARAGRAPH_LG_MEDIUM_TALL = "paragraph-lg-medium-tall", L.PARAGRAPH_LG_BLACK_SHORT = "paragraph-lg-black-short", L.PARAGRAPH_LG_BLACK_TALL = "paragraph-lg-black-tall", L.PARAGRAPH_MD_BOLD_SHORT = "paragraph-md-bold-short", L.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", L.PARAGRAPH_MD_NORMAL_SHORT = "paragraph-md-normal-short", L.PARAGRAPH_MD_NORMAL_TALL = "paragraph-md-normal-tall", L.PARAGRAPH_MD_MEDIUM_SHORT = "paragraph-md-medium-short", L.PARAGRAPH_MD_MEDIUM_TALL = "paragraph-md-medium-tall", L.PARAGRAPH_MD_BLACK_SHORT = "paragraph-md-black-short", L.PARAGRAPH_MD_BLACK_TALL = "paragraph-md-black-tall", L.PARAGRAPH_SM_BOLD_SHORT = "paragraph-sm-bold-short", L.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", L.PARAGRAPH_SM_NORMAL_SHORT = "paragraph-sm-normal-short", L.PARAGRAPH_SM_NORMAL_TALL = "paragraph-sm-normal-tall", L.PARAGRAPH_SM_MEDIUM_SHORT = "paragraph-sm-medium-short", L.PARAGRAPH_SM_MEDIUM_TALL = "paragraph-sm-medium-tall", L.PARAGRAPH_SM_BLACK_SHORT = "paragraph-sm-black-short", L.PARAGRAPH_SM_BLACK_TALL = "paragraph-sm-black-tall", L.PARAGRAPH_XS_BOLD_SHORT = "paragraph-xs-bold-short", L.PARAGRAPH_XS_BOLD_TALL = "paragraph-xs-bold-tall", L.PARAGRAPH_XS_NORMAL_SHORT = "paragraph-xs-normal-short", L.PARAGRAPH_XS_NORMAL_TALL = "paragraph-xs-normal-tall", L.PARAGRAPH_XS_MEDIUM_SHORT = "paragraph-xs-medium-short", L.PARAGRAPH_XS_MEDIUM_TALL = "paragraph-xs-medium-tall", L.PARAGRAPH_XS_BLACK_SHORT = "paragraph-xs-black-short", L.PARAGRAPH_XS_BLACK_TALL = "paragraph-xs-black-tall", L.PARAGRAPH_2XS_BOLD_SHORT = "paragraph-2xs-bold-short", L.PARAGRAPH_2XS_BOLD_TALL = "paragraph-2xs-bold-tall", L.PARAGRAPH_2XS_NORMAL_SHORT = "paragraph-2xs-normal-short", L.PARAGRAPH_2XS_NORMAL_TALL = "paragraph-2xs-normal-tall", L.PARAGRAPH_2XS_MEDIUM_SHORT = "paragraph-2xs-medium-short", L.PARAGRAPH_2XS_MEDIUM_TALL = "paragraph-2xs-medium-tall", L.PARAGRAPH_2XS_BLACK_SHORT = "paragraph-2xs-black-short", L.PARAGRAPH_2XS_BLACK_TALL = "paragraph-2xs-black-tall", L.TITLE_XL_NORMAL_SHORT = "title-xl-normal-short", L.TITLE_XL_NORMAL_TALL = "title-xl-normal-tall", L.TITLE_LG_NORMAL_SHORT = "title-lg-normal-short", L.TITLE_LG_NORMAL_TALL = "title-lg-normal-tall", L.TITLE_MD_NORMAL_SHORT = "title-md-normal-short", L.TITLE_MD_NORMAL_TALL = "title-md-normal-tall", L.TITLE_SM_NORMAL_SHORT = "title-sm-normal-short", L.TITLE_SM_NORMAL_TALL = "title-sm-normal-tall", L.TITLE_XS_NORMAL_SHORT = "title-xs-normal-short", L.TITLE_XS_NORMAL_TALL = "title-xs-normal-tall", L))(P || {}), b = /* @__PURE__ */ ((L) => (L.NEUTRAL_SOLID_10 = "neutral-solid-10", L.NEUTRAL_SOLID_15 = "neutral-solid-15", L.NEUTRAL_SOLID_20 = "neutral-solid-20", L.NEUTRAL_SOLID_25 = "neutral-solid-25", L.NEUTRAL_SOLID_30 = "neutral-solid-30", L.NEUTRAL_SOLID_35 = "neutral-solid-35", L.NEUTRAL_SOLID_40 = "neutral-solid-40", L.NEUTRAL_SOLID_45 = "neutral-solid-45", L.NEUTRAL_SOLID_50 = "neutral-solid-50", L.NEUTRAL_SOLID_55 = "neutral-solid-55", L.NEUTRAL_SOLID_60 = "neutral-solid-60", L.NEUTRAL_SOLID_65 = "neutral-solid-65", L.NEUTRAL_SOLID_70 = "neutral-solid-70", L.NEUTRAL_SOLID_75 = "neutral-solid-75", L.NEUTRAL_SOLID_80 = "neutral-solid-80", L.NEUTRAL_SOLID_85 = "neutral-solid-85", L.NEUTRAL_SOLID_90 = "neutral-solid-90", L.NEUTRAL_SOLID_95 = "neutral-solid-95", L.NEUTRAL_SOLID_100 = "neutral-solid-100", L.PRIMARY_DEFAULT = "primary-default", L.PRIMARY_HARD = "primary-hard", L.PRIMARY_HARDER = "primary-harder", L.DANGER_SOLID_DEFAULT = "danger-solid-default", L.SUCCESS_SOLID_DEFAULT = "success-solid-default", L))(b || {});
const g = {
  "tp-type": Object.values(P),
  "tp-color": Object.values(b)
};
export {
  D as TP_BACK_BUTTON,
  B as TP_BADGE,
  n as TP_BUTTON,
  H as TP_CARD,
  u as TP_DATEPICKER,
  t as TP_INPUT,
  h as TP_ITEM,
  i as TP_LOADER,
  N as TP_SELECT,
  G as TP_SNACKBAR,
  o as TP_STEP,
  g as TP_TEXT,
  d as TP_TOGGLE,
  _ as TpBadgeColor,
  l as TpBadgeFill,
  R as TpButtonFill,
  r as TpDatepickerIcon,
  A as TpDatepickerState,
  O as TpInputIcon,
  s as TpInputState,
  S as TpLoaderColor,
  m as TpSelectIcon,
  M as TpSelectState,
  E as TpSnackbarColor,
  a as TpStepStateItem,
  b as TpTextColor,
  P as TpTextType
};
