const w = {}, W = {}, Y = {}, V = {};
var a = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(a || {});
const C = {
  "tp-fill": Object.values(a)
};
var L = /* @__PURE__ */ ((r) => (r.TEXT_COLORS = "text-colors", r.COLUMNS = "columns", r.LEGEND_BOTTOM_XL = "legend-bottom-xl", r))(L || {});
const Z = {
  "tp-name": Object.values(L)
};
var _ = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(_ || {});
const q = {
  "tp-color": Object.values(_)
};
var A = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(A || {});
const J = {
  "tp-state": Object.values(A)
};
var R = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(R || {});
const Q = {
  "tp-size": Object.values(R)
};
var s = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(s || {}), l = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(l || {}), O = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(O || {}), E = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(E || {});
const $ = {
  "tp-size": Object.values(s),
  "tp-fill": Object.values(l),
  "tp-color": Object.values(O),
  "tp-name": Object.values(E)
};
var t = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(t || {}), N = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(N || {}), n = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(n || {}), e = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(e || {});
const F = {
  "tp-size": Object.values(t),
  "tp-fill": Object.values(N),
  "tp-color": Object.values(n),
  "tp-name": Object.values(e)
};
var u = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(u || {});
const k = {
  "tp-size": Object.values(u)
};
var c = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(c || {}), D = /* @__PURE__ */ ((r) => (r.INPUT = "input", r.INPUT_NO_LABEL = "input-no-label", r))(D || {});
const z = {
  "tp-state": Object.values(c),
  "tp-name": Object.values(D)
};
var v = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(v || {});
const y = {
  "tp-state": Object.values(v)
};
var m = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(m || {});
const o = {
  "tp-state": Object.values(m)
};
var P = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(P || {}), M = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r.LIGHT = "light", r))(M || {});
const x = {
  "tp-size": Object.values(P),
  "tp-color": Object.values(M)
};
var g = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(g || {});
const T = {
  "tp-color": Object.values(g)
};
var b = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(b || {}), G = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.NEUTRAL_SOLID_100 = "neutral-solid-100", r.NEUTRAL_SOLID_200 = "neutral-solid-200", r.NEUTRAL_SOLID_300 = "neutral-solid-300", r.NEUTRAL_SOLID_400 = "neutral-solid-400", r.NEUTRAL_SOLID_500 = "neutral-solid-500", r.NEUTRAL_SOLID_600 = "neutral-solid-600", r.NEUTRAL_SOLID_700 = "neutral-solid-700", r.NEUTRAL_SOLID_800 = "neutral-solid-800", r.NEUTRAL_SOLID_900 = "neutral-solid-900", r))(G || {});
const p = {
  "tp-type": Object.values(b),
  "tp-color": Object.values(G)
};
var U = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(U || {}), d = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(d || {});
const rr = {
  "tp-size": Object.values(U),
  "tp-color": Object.values(d)
};
var I = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(I || {});
const ar = {
  "tp-state": Object.values(I)
};
var S = /* @__PURE__ */ ((r) => (r.BORDER_HORIZONTAL = "border-horizontal", r.BORDER_VERTICAL = "border-vertical", r.BORDER_INNER = "border-inner", r.BORDER_ALL = "border-all", r))(S || {}), i = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r))(i || {}), j = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r))(j || {});
const Lr = {
  "tp-border": Object.values(S),
  "tp-cell-level": Object.values(i),
  "tp-feedback": Object.values(j)
};
var H = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(H || {});
const _r = {
  "tp-state": Object.values(H)
};
var h = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(h || {});
const Ar = {
  "tp-size": Object.values(h)
};
var f = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(f || {}), B = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(B || {}), K = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(K || {}), X = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(X || {});
const Rr = {
  "tp-size": Object.values(f),
  "tp-fill": Object.values(B),
  "tp-color": Object.values(K),
  "tp-name": Object.values(X)
};
export {
  Z as TP_APEXCHARTS,
  q as TP_BADGE,
  Rr as TP_BUTTON,
  $ as TP_BUTTON_GROUP,
  F as TP_BUTTON_ICON,
  C as TP_CARD,
  W as TP_CHECKBOX,
  Q as TP_CKEDITOR,
  J as TP_DATEPICKER,
  x as TP_ICON,
  z as TP_INPUT,
  o as TP_INPUT_CHIP,
  k as TP_MENU,
  Ar as TP_MODAL,
  w as TP_RADIO,
  y as TP_SELECT,
  T as TP_SNACKBAR,
  rr as TP_SPINNER,
  Y as TP_TAB,
  Lr as TP_TABLE,
  p as TP_TEXT,
  _r as TP_TEXTAREA,
  ar as TP_TIMEPICKER,
  V as TP_TOGGLE,
  L as TpApexchartsName,
  _ as TpBadgeColor,
  K as TpButtonColor,
  B as TpButtonFill,
  O as TpButtonGroupColor,
  l as TpButtonGroupFill,
  E as TpButtonGroupName,
  s as TpButtonGroupSize,
  n as TpButtonIconColor,
  N as TpButtonIconFill,
  e as TpButtonIconName,
  t as TpButtonIconSize,
  X as TpButtonName,
  f as TpButtonSize,
  a as TpCardFill,
  R as TpCkeditorSize,
  A as TpDatepickerState,
  M as TpIconColor,
  P as TpIconSize,
  m as TpInputChipState,
  D as TpInputName,
  c as TpInputState,
  u as TpMenuSize,
  h as TpModalSize,
  v as TpSelectState,
  g as TpSnackbarColor,
  d as TpSpinnerColor,
  U as TpSpinnerSize,
  S as TpTableBorder,
  i as TpTableCellLevel,
  j as TpTableFeedback,
  G as TpTextColor,
  b as TpTextType,
  H as TpTextareaState,
  I as TpTimepickerState
};
