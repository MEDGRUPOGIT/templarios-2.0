const h = {}, B = {}, f = {}, X = {}, w = {};
var L = /* @__PURE__ */ ((r) => (r.TEXT_COLORS = "text-colors", r.COLUMNS = "columns", r.LEGEND_BOTTOM_XL = "legend-bottom-xl", r))(L || {});
const K = {
  "tp-name": Object.values(L)
};
var a = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(a || {});
const W = {
  "tp-fill": Object.values(a)
};
var _ = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(_ || {}), A = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(A || {}), l = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(l || {}), R = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(R || {});
const Y = {
  "tp-size": Object.values(_),
  "tp-fill": Object.values(A),
  "tp-color": Object.values(l),
  "tp-name": Object.values(R)
};
var s = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(s || {});
const V = {
  "tp-size": Object.values(s)
};
var O = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(O || {}), E = /* @__PURE__ */ ((r) => (r.INPUT = "input", r.INPUT_NO_LABEL = "input-no-label", r))(E || {});
const Z = {
  "tp-state": Object.values(O),
  "tp-name": Object.values(E)
};
var t = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(t || {});
const q = {
  "tp-color": Object.values(t)
};
var u = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(u || {}), n = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(n || {}), N = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(N || {}), D = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(D || {});
const J = {
  "tp-size": Object.values(u),
  "tp-fill": Object.values(n),
  "tp-color": Object.values(N),
  "tp-name": Object.values(D)
};
var c = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(c || {});
const Q = {
  "tp-size": Object.values(c)
};
var G = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(G || {});
const $ = {
  "tp-color": Object.values(G)
};
var m = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(m || {}), v = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r.LIGHT = "light", r))(v || {});
const C = {
  "tp-size": Object.values(m),
  "tp-color": Object.values(v)
};
var e = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(e || {});
const F = {
  "tp-size": Object.values(e)
};
var P = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(P || {}), M = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(M || {});
const k = {
  "tp-size": Object.values(P),
  "tp-color": Object.values(M)
};
var g = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(g || {});
const o = {
  "tp-state": Object.values(g)
};
var b = /* @__PURE__ */ ((r) => (r.BORDER_HORIZONTAL = "border-horizontal", r.BORDER_VERTICAL = "border-vertical", r.BORDER_INNER = "border-inner", r.BORDER_ALL = "border-all", r))(b || {}), d = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r))(d || {}), U = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r))(U || {});
const z = {
  "tp-border": Object.values(b),
  "tp-cell-level": Object.values(d),
  "tp-feedback": Object.values(U)
};
var I = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(I || {}), S = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.NEUTRAL_SOLID_100 = "neutral-solid-100", r.NEUTRAL_SOLID_200 = "neutral-solid-200", r.NEUTRAL_SOLID_300 = "neutral-solid-300", r.NEUTRAL_SOLID_400 = "neutral-solid-400", r.NEUTRAL_SOLID_500 = "neutral-solid-500", r.NEUTRAL_SOLID_600 = "neutral-solid-600", r.NEUTRAL_SOLID_700 = "neutral-solid-700", r.NEUTRAL_SOLID_800 = "neutral-solid-800", r.NEUTRAL_SOLID_900 = "neutral-solid-900", r))(S || {});
const y = {
  "tp-type": Object.values(I),
  "tp-color": Object.values(S)
};
var i = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(i || {});
const x = {
  "tp-state": Object.values(i)
};
var j = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(j || {});
const T = {
  "tp-state": Object.values(j)
};
var H = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(H || {});
const p = {
  "tp-state": Object.values(H)
};
export {
  K as TP_APEXCHARTS,
  q as TP_BADGE,
  Y as TP_BUTTON,
  J as TP_BUTTON_ICON,
  W as TP_CARD,
  h as TP_CHECKBOX,
  V as TP_CKEDITOR,
  p as TP_DATEPICKER,
  B as TP_DIALOG,
  C as TP_ICON,
  Z as TP_INPUT,
  o as TP_INPUT_CHIP,
  F as TP_MENU,
  Q as TP_MODAL,
  X as TP_RADIO,
  x as TP_SELECT,
  $ as TP_SNACKBAR,
  k as TP_SPINNER,
  w as TP_TAB,
  z as TP_TABLE,
  y as TP_TEXT,
  T as TP_TEXTAREA,
  f as TP_TOGGLE,
  L as TpApexchartsName,
  t as TpBadgeColor,
  l as TpButtonColor,
  A as TpButtonFill,
  N as TpButtonIconColor,
  n as TpButtonIconFill,
  D as TpButtonIconName,
  u as TpButtonIconSize,
  R as TpButtonName,
  _ as TpButtonSize,
  a as TpCardFill,
  s as TpCkeditorSize,
  H as TpDatepickerState,
  v as TpIconColor,
  m as TpIconSize,
  g as TpInputChipState,
  E as TpInputName,
  O as TpInputState,
  e as TpMenuSize,
  c as TpModalSize,
  i as TpSelectState,
  G as TpSnackbarColor,
  M as TpSpinnerColor,
  P as TpSpinnerSize,
  b as TpTableBorder,
  d as TpTableCellLevel,
  U as TpTableFeedback,
  S as TpTextColor,
  I as TpTextType,
  j as TpTextareaState
};
