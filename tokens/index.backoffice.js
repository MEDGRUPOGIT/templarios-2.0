const h = {}, B = {}, f = {}, X = {}, w = {};
var L = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(L || {});
const K = {
  "tp-color": Object.values(L)
};
var a = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(a || {}), _ = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(_ || {}), A = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(A || {}), l = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(l || {});
const W = {
  "tp-size": Object.values(a),
  "tp-fill": Object.values(_),
  "tp-color": Object.values(A),
  "tp-name": Object.values(l)
};
var R = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(R || {});
const Y = {
  "tp-fill": Object.values(R)
};
var s = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(s || {});
const V = {
  "tp-size": Object.values(s)
};
var O = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(O || {}), E = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(E || {}), t = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(t || {}), u = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(u || {});
const Z = {
  "tp-size": Object.values(O),
  "tp-fill": Object.values(E),
  "tp-color": Object.values(t),
  "tp-name": Object.values(u)
};
var n = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(n || {});
const q = {
  "tp-size": Object.values(n)
};
var N = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(N || {});
const J = {
  "tp-state": Object.values(N)
};
var D = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(D || {});
const Q = {
  "tp-state": Object.values(D)
};
var c = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(c || {});
const $ = {
  "tp-size": Object.values(c)
};
var G = /* @__PURE__ */ ((r) => (r.TEXT_COLORS = "text-colors", r.COLUMNS = "columns", r.LEGEND_BOTTOM_XL = "legend-bottom-xl", r))(G || {});
const C = {
  "tp-name": Object.values(G)
};
var m = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(m || {}), v = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(v || {});
const F = {
  "tp-size": Object.values(m),
  "tp-color": Object.values(v)
};
var e = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(e || {}), P = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r.LIGHT = "light", r))(P || {});
const k = {
  "tp-size": Object.values(e),
  "tp-color": Object.values(P)
};
var M = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(M || {}), g = /* @__PURE__ */ ((r) => (r.INPUT = "input", r.INPUT_NO_LABEL = "input-no-label", r))(g || {});
const o = {
  "tp-state": Object.values(M),
  "tp-name": Object.values(g)
};
var b = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(b || {});
const z = {
  "tp-color": Object.values(b)
};
var d = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(d || {});
const y = {
  "tp-state": Object.values(d)
};
var U = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(U || {}), I = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.NEUTRAL_SOLID_100 = "neutral-solid-100", r.NEUTRAL_SOLID_200 = "neutral-solid-200", r.NEUTRAL_SOLID_300 = "neutral-solid-300", r.NEUTRAL_SOLID_400 = "neutral-solid-400", r.NEUTRAL_SOLID_500 = "neutral-solid-500", r.NEUTRAL_SOLID_600 = "neutral-solid-600", r.NEUTRAL_SOLID_700 = "neutral-solid-700", r.NEUTRAL_SOLID_800 = "neutral-solid-800", r.NEUTRAL_SOLID_900 = "neutral-solid-900", r))(I || {});
const x = {
  "tp-type": Object.values(U),
  "tp-color": Object.values(I)
};
var S = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(S || {});
const T = {
  "tp-state": Object.values(S)
};
var i = /* @__PURE__ */ ((r) => (r.BORDER_HORIZONTAL = "border-horizontal", r.BORDER_VERTICAL = "border-vertical", r.BORDER_INNER = "border-inner", r.BORDER_ALL = "border-all", r))(i || {}), j = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r))(j || {}), H = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r))(H || {});
const p = {
  "tp-border": Object.values(i),
  "tp-cell-level": Object.values(j),
  "tp-feedback": Object.values(H)
};
export {
  C as TP_APEXCHARTS,
  K as TP_BADGE,
  W as TP_BUTTON,
  Z as TP_BUTTON_ICON,
  Y as TP_CARD,
  f as TP_CHECKBOX,
  V as TP_CKEDITOR,
  J as TP_DATEPICKER,
  h as TP_DIALOG,
  k as TP_ICON,
  o as TP_INPUT,
  Q as TP_INPUT_CHIP,
  $ as TP_MENU,
  q as TP_MODAL,
  X as TP_RADIO,
  y as TP_SELECT,
  z as TP_SNACKBAR,
  F as TP_SPINNER,
  B as TP_TAB,
  p as TP_TABLE,
  x as TP_TEXT,
  T as TP_TEXTAREA,
  w as TP_TOGGLE,
  G as TpApexchartsName,
  L as TpBadgeColor,
  A as TpButtonColor,
  _ as TpButtonFill,
  t as TpButtonIconColor,
  E as TpButtonIconFill,
  u as TpButtonIconName,
  O as TpButtonIconSize,
  l as TpButtonName,
  a as TpButtonSize,
  R as TpCardFill,
  s as TpCkeditorSize,
  N as TpDatepickerState,
  P as TpIconColor,
  e as TpIconSize,
  D as TpInputChipState,
  g as TpInputName,
  M as TpInputState,
  c as TpMenuSize,
  n as TpModalSize,
  d as TpSelectState,
  b as TpSnackbarColor,
  v as TpSpinnerColor,
  m as TpSpinnerSize,
  i as TpTableBorder,
  j as TpTableCellLevel,
  H as TpTableFeedback,
  I as TpTextColor,
  U as TpTextType,
  S as TpTextareaState
};
