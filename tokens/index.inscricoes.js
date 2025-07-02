const P = {}, b = {}, n = {}, M = {};
var L = /* @__PURE__ */ ((l) => (l.SOLID = "solid", l.CLEAR = "clear", l))(L || {});
const m = {
  "tp-fill": Object.values(L)
};
var _ = /* @__PURE__ */ ((l) => (l.DEFAULT = "default", l.PRIMARY = "primary", l))(_ || {});
const h = {
  "tp-color": Object.values(_)
};
var a = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.DANGER = "danger", l.PRIMARY = "primary", l.NEUTRAL_SOLID_50 = "neutral-solid-50", l))(a || {}), A = /* @__PURE__ */ ((l) => (l.DEFAULT = "default", l.OUTLINE = "outline", l))(A || {});
const H = {
  "tp-color": Object.values(a),
  "tp-fill": Object.values(A)
};
var r = /* @__PURE__ */ ((l) => (l.ERROR = "error", l.SUCCESS = "success", l))(r || {}), R = /* @__PURE__ */ ((l) => (l.START = "start", l.END = "end", l.FEEDBACK = "feedback", l))(R || {});
const B = {
  "tp-state": Object.values(r),
  "tp-icon": Object.values(R)
};
var s = /* @__PURE__ */ ((l) => (l.ERROR = "error", l.SUCCESS = "success", l))(s || {}), O = /* @__PURE__ */ ((l) => (l.START = "start", l.END = "end", l.FEEDBACK = "feedback", l))(O || {});
const D = {
  "tp-state": Object.values(s),
  "tp-icon": Object.values(O)
};
var o = /* @__PURE__ */ ((l) => (l.NEUTRAL = "neutral", l.SUCCESS = "success", l.DANGER = "danger", l))(o || {});
const N = {
  "tp-color": Object.values(o)
};
var t = /* @__PURE__ */ ((l) => (l.LABEL_LG_BOLD_SHORT = "label-lg-bold-short", l.LABEL_LG_BOLD_TALL = "label-lg-bold-tall", l.LABEL_LG_NORMAL_SHORT = "label-lg-normal-short", l.LABEL_LG_NORMAL_TALL = "label-lg-normal-tall", l.LABEL_MD_BOLD_SHORT = "label-md-bold-short", l.LABEL_MD_BOLD_TALL = "label-md-bold-tall", l.LABEL_MD_NORMAL_SHORT = "label-md-normal-short", l.LABEL_MD_NORMAL_TALL = "label-md-normal-tall", l.LABEL_SM_BOLD_SHORT = "label-sm-bold-short", l.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", l.LABEL_SM_NORMAL_SHORT = "label-sm-normal-short", l.LABEL_SM_NORMAL_TALL = "label-sm-normal-tall", l.LABEL_XS_BOLD_SHORT = "label-xs-bold-short", l.LABEL_XS_BOLD_TALL = "label-xs-bold-tall", l.LABEL_XS_NORMAL_SHORT = "label-xs-normal-short", l.LABEL_XS_NORMAL_TALL = "label-xs-normal-tall", l.LABEL_2XS_BOLD_SHORT = "label-2xs-bold-short", l.LABEL_2XS_BOLD_TALL = "label-2xs-bold-tall", l.LABEL_2XS_NORMAL_SHORT = "label-2xs-normal-short", l.LABEL_2XS_NORMAL_TALL = "label-2xs-normal-tall", l.PARAGRAPH_LG_BOLD_SHORT = "paragraph-lg-bold-short", l.PARAGRAPH_LG_BOLD_TALL = "paragraph-lg-bold-tall", l.PARAGRAPH_LG_NORMAL_SHORT = "paragraph-lg-normal-short", l.PARAGRAPH_LG_NORMAL_TALL = "paragraph-lg-normal-tall", l.PARAGRAPH_MD_BOLD_SHORT = "paragraph-md-bold-short", l.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", l.PARAGRAPH_MD_NORMAL_SHORT = "paragraph-md-normal-short", l.PARAGRAPH_MD_NORMAL_TALL = "paragraph-md-normal-tall", l.PARAGRAPH_SM_BOLD_SHORT = "paragraph-sm-bold-short", l.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", l.PARAGRAPH_SM_NORMAL_SHORT = "paragraph-sm-normal-short", l.PARAGRAPH_SM_NORMAL_TALL = "paragraph-sm-normal-tall", l.PARAGRAPH_XS_BOLD_SHORT = "paragraph-xs-bold-short", l.PARAGRAPH_XS_BOLD_TALL = "paragraph-xs-bold-tall", l.PARAGRAPH_XS_NORMAL_SHORT = "paragraph-xs-normal-short", l.PARAGRAPH_XS_NORMAL_TALL = "paragraph-xs-normal-tall", l.PARAGRAPH_2XS_BOLD_SHORT = "paragraph-2xs-bold-short", l.PARAGRAPH_2XS_BOLD_TALL = "paragraph-2xs-bold-tall", l.PARAGRAPH_2XS_NORMAL_SHORT = "paragraph-2xs-normal-short", l.PARAGRAPH_2XS_NORMAL_TALL = "paragraph-2xs-normal-tall", l.TITLE_XL_NORMAL_SHORT = "title-xl-normal-short", l.TITLE_XL_NORMAL_TALL = "title-xl-normal-tall", l.TITLE_LG_NORMAL_SHORT = "title-lg-normal-short", l.TITLE_LG_NORMAL_TALL = "title-lg-normal-tall", l.TITLE_MD_NORMAL_SHORT = "title-md-normal-short", l.TITLE_MD_NORMAL_TALL = "title-md-normal-tall", l.TITLE_SM_NORMAL_SHORT = "title-sm-normal-short", l.TITLE_SM_NORMAL_TALL = "title-sm-normal-tall", l.TITLE_XS_NORMAL_SHORT = "title-xs-normal-short", l.TITLE_XS_NORMAL_TALL = "title-xs-normal-tall", l))(t || {});
const d = {
  "tp-type": Object.values(t)
};
var S = /* @__PURE__ */ ((l) => (l.ERROR = "error", l.SUCCESS = "success", l))(S || {}), E = /* @__PURE__ */ ((l) => (l.START = "start", l.END = "end", l.FEEDBACK = "feedback", l))(E || {});
const G = {
  "tp-state": Object.values(S),
  "tp-icon": Object.values(E)
};
export {
  b as TP_BACK_BUTTON,
  H as TP_BADGE,
  m as TP_BUTTON,
  n as TP_CARD,
  G as TP_DATEPICKER,
  B as TP_INPUT,
  P as TP_ITEM,
  h as TP_LOADER,
  D as TP_SELECT,
  N as TP_SNACKBAR,
  d as TP_TEXT,
  M as TP_TOGGLE,
  a as TpBadgeColor,
  A as TpBadgeFill,
  L as TpButtonFill,
  E as TpDatepickerIcon,
  S as TpDatepickerState,
  R as TpInputIcon,
  r as TpInputState,
  _ as TpLoaderColor,
  O as TpSelectIcon,
  s as TpSelectState,
  o as TpSnackbarColor,
  t as TpTextType
};
