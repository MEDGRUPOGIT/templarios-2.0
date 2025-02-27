const C = {}, K = {}, W = {}, X = {}, Y = {}, V = {}, i = {};
var a = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.SUCCESS = "success", r))(a || {});
const k = {
  "tp-color": Object.values(a)
};
var L = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(L || {});
const F = {
  "tp-state": Object.values(L)
};
var R = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(R || {});
const q = {
  "tp-size": Object.values(R)
};
var A = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(A || {}), _ = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(_ || {}), O = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(O || {}), l = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(l || {});
const Q = {
  "tp-size": Object.values(A),
  "tp-fill": Object.values(_),
  "tp-color": Object.values(O),
  "tp-name": Object.values(l)
};
var s = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(s || {});
const Z = {
  "tp-color": Object.values(s)
};
var E = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(E || {});
const $ = {
  "tp-size": Object.values(E)
};
var t = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(t || {});
const J = {
  "tp-color": Object.values(t)
};
var e = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(e || {});
const z = {
  "tp-state": Object.values(e)
};
var c = /* @__PURE__ */ ((r) => (r.BORDER = "border", r.BORDER_SECONDARY = "border-secondary", r.BORDER_RIGHT = "border-right", r.BORDER_NONE = "border-none", r))(c || {});
const y = {
  "tp-table-border": Object.values(c)
};
var u = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(u || {}), v = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(v || {}), N = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(N || {}), n = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(n || {});
const x = {
  "tp-size": Object.values(u),
  "tp-fill": Object.values(v),
  "tp-color": Object.values(N),
  "tp-name": Object.values(n)
};
var D = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r))(D || {});
const T = {
  "tp-color": Object.values(D)
};
var b = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(b || {}), G = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(G || {});
const p = {
  "tp-size": Object.values(b),
  "tp-color": Object.values(G)
};
var P = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(P || {});
const rr = {
  "tp-state": Object.values(P)
};
var M = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(M || {}), m = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r))(m || {});
const ar = {
  "tp-size": Object.values(M),
  "tp-color": Object.values(m)
};
var g = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(g || {});
const Lr = {
  "tp-fill": Object.values(g)
};
var d = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(d || {});
const Rr = {
  "tp-type": Object.values(d)
};
var S = /* @__PURE__ */ ((r) => (r.AUTO = "auto", r.COL_MD_AUTO = "col-md-auto", r.COL_4 = "col-4", r.COL_8 = "col-8", r))(S || {}), j = /* @__PURE__ */ ((r) => (r.FLEX = "flex", r.BLOCK = "block", r))(j || {}), H = /* @__PURE__ */ ((r) => (r.CENTER = "center", r.STRETCH = "stretch", r.END = "end", r.START = "start", r))(H || {}), h = /* @__PURE__ */ ((r) => (r.CENTER = "center", r.END = "end", r.START = "start", r))(h || {}), I = /* @__PURE__ */ ((r) => (r.COLUMN = "column", r.COLUMN_REVERSE = "column-reverse", r.ROW_REVERSE = "row-reverse", r))(I || {}), U = /* @__PURE__ */ ((r) => (r.WRAP = "wrap", r.NOWRAP = "nowrap", r))(U || {}), B = /* @__PURE__ */ ((r) => (r.HIDDEN = "hidden", r.AUTO = "auto", r))(B || {}), f = /* @__PURE__ */ ((r) => (r.TOP = "top", r.BOTTOM = "bottom", r.LEFT = "left", r.RIGHT = "right", r.AUTO = "auto", r))(f || {}), w = /* @__PURE__ */ ((r) => (r.CENTER = "center", r.START = "start", r.END = "end", r))(w || {});
const Ar = {
  "tp-col": Object.values(S),
  "tp-display": Object.values(j),
  "tp-align-items": Object.values(H),
  "tp-justify-content": Object.values(h),
  "tp-flex-column": Object.values(I),
  "tp-flex-wrap": Object.values(U),
  "tp-overflow": Object.values(B),
  "tp-border": Object.values(f),
  "tp-text-align": Object.values(w)
};
var o = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(o || {});
const _r = {
  "tp-state": Object.values(o)
};
export {
  k as TP_ALERT,
  Z as TP_BADGE,
  x as TP_BUTTON,
  Q as TP_BUTTON_ICON,
  Lr as TP_CARD,
  K as TP_CHECKBOX,
  F as TP_DATEPICKER,
  ar as TP_ICON,
  z as TP_INPUT,
  $ as TP_MENU,
  C as TP_MENU_NAV,
  q as TP_MODAL,
  X as TP_NAV,
  W as TP_RADIO,
  _r as TP_SELECT,
  T as TP_SELECT_ITEM,
  J as TP_SNACKBAR,
  p as TP_SPINNER,
  Y as TP_TAB,
  y as TP_TABLE,
  Rr as TP_TEXT,
  rr as TP_TEXTAREA,
  V as TP_TOGGLE,
  i as TP_UPPY,
  Ar as TP_UTILS,
  a as TpAlertColor,
  s as TpBadgeColor,
  N as TpButtonColor,
  v as TpButtonFill,
  O as TpButtonIconColor,
  _ as TpButtonIconFill,
  l as TpButtonIconName,
  A as TpButtonIconSize,
  n as TpButtonName,
  u as TpButtonSize,
  g as TpCardFill,
  L as TpDatepickerState,
  m as TpIconColor,
  M as TpIconSize,
  e as TpInputState,
  E as TpMenuSize,
  R as TpModalSize,
  D as TpSelectItemColor,
  o as TpSelectState,
  t as TpSnackbarColor,
  G as TpSpinnerColor,
  b as TpSpinnerSize,
  c as TpTableTableBorder,
  d as TpTextType,
  P as TpTextareaState,
  H as TpUtilsAlignItems,
  f as TpUtilsBorder,
  S as TpUtilsCol,
  j as TpUtilsDisplay,
  I as TpUtilsFlexColumn,
  U as TpUtilsFlexWrap,
  h as TpUtilsJustifyContent,
  B as TpUtilsOverflow,
  w as TpUtilsTextAlign
};
