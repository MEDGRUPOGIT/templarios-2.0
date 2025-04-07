const w = {}, W = {}, Y = {}, X = {}, K = {}, V = {}, Z = {}, q = {};
var L = /* @__PURE__ */ ((r) => (r.TEXT_COLORS = "text-colors", r.COLUMNS = "columns", r.LEGEND_BOTTOM_XL = "legend-bottom-xl", r))(L || {});
const J = {
  "tp-name": Object.values(L)
};
var a = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(a || {}), _ = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r.LIGHT = "light", r))(_ || {});
const Q = {
  "tp-size": Object.values(a),
  "tp-color": Object.values(_)
};
var R = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(R || {});
const $ = {
  "tp-state": Object.values(R)
};
var A = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.SUCCESS = "success", r))(A || {});
const C = {
  "tp-color": Object.values(A)
};
var s = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(s || {});
const k = {
  "tp-fill": Object.values(s)
};
var l = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(l || {}), O = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(O || {}), E = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(E || {}), t = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(t || {});
const F = {
  "tp-size": Object.values(l),
  "tp-fill": Object.values(O),
  "tp-color": Object.values(E),
  "tp-name": Object.values(t)
};
var n = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(n || {});
const z = {
  "tp-state": Object.values(n)
};
var u = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r))(u || {});
const o = {
  "tp-color": Object.values(u)
};
var N = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(N || {});
const y = {
  "tp-state": Object.values(N)
};
var c = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(c || {}), D = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(D || {});
const x = {
  "tp-size": Object.values(c),
  "tp-color": Object.values(D)
};
var G = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(G || {});
const T = {
  "tp-color": Object.values(G)
};
var v = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(v || {});
const p = {
  "tp-size": Object.values(v)
};
var e = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(e || {});
const rr = {
  "tp-state": Object.values(e)
};
var P = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(P || {});
const Lr = {
  "tp-color": Object.values(P)
};
var m = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(m || {}), M = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.NEUTRAL_SOLID_100 = "neutral-solid-100", r.NEUTRAL_SOLID_200 = "neutral-solid-200", r.NEUTRAL_SOLID_300 = "neutral-solid-300", r.NEUTRAL_SOLID_400 = "neutral-solid-400", r.NEUTRAL_SOLID_500 = "neutral-solid-500", r.NEUTRAL_SOLID_600 = "neutral-solid-600", r.NEUTRAL_SOLID_700 = "neutral-solid-700", r.NEUTRAL_SOLID_800 = "neutral-solid-800", r.NEUTRAL_SOLID_900 = "neutral-solid-900", r))(M || {});
const ar = {
  "tp-type": Object.values(m),
  "tp-color": Object.values(M)
};
var S = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(S || {});
const _r = {
  "tp-size": Object.values(S)
};
var b = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(b || {});
const Rr = {
  "tp-size": Object.values(b)
};
var g = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(g || {}), d = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(d || {}), U = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(U || {}), I = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(I || {});
const Ar = {
  "tp-size": Object.values(g),
  "tp-fill": Object.values(d),
  "tp-color": Object.values(U),
  "tp-name": Object.values(I)
};
var i = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(i || {});
const sr = {
  "tp-state": Object.values(i)
};
var j = /* @__PURE__ */ ((r) => (r.BORDER_HORIZONTAL = "border-horizontal", r.BORDER_VERTICAL = "border-vertical", r.BORDER_INNER = "border-inner", r.BORDER_ALL = "border-all", r))(j || {}), H = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r))(H || {}), h = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r))(h || {});
const lr = {
  "tp-border": Object.values(j),
  "tp-cell-level": Object.values(H),
  "tp-feedback": Object.values(h)
};
var B = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.WARNING_LIGHT = "warning-light", r.INFO = "info", r.PRIMARY = "primary", r.GRAY_DARK = "gray-dark", r.GRAY_LIGHT = "gray-light", r))(B || {});
const Or = {
  "tp-color": Object.values(B)
};
var f = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(f || {});
const Er = {
  "tp-state": Object.values(f)
};
export {
  C as TP_ALERT,
  J as TP_APEXCHARTS,
  K as TP_ASIDE_NAV,
  T as TP_BADGE,
  w as TP_BREADCRUMBS,
  Ar as TP_BUTTON,
  F as TP_BUTTON_ICON,
  k as TP_CARD,
  W as TP_CHECKBOX,
  Rr as TP_CKEDITOR,
  z as TP_DATEPICKER,
  Or as TP_FLAG_TAG,
  Q as TP_ICON,
  rr as TP_INPUT,
  $ as TP_INPUT_ADD,
  p as TP_MENU,
  _r as TP_MODAL,
  Y as TP_RADIO,
  y as TP_SELECT,
  Er as TP_SELECT_FILTER,
  o as TP_SELECT_ITEM,
  Lr as TP_SNACKBAR,
  x as TP_SPINNER,
  X as TP_STEPS,
  V as TP_TAB,
  lr as TP_TABLE,
  ar as TP_TEXT,
  sr as TP_TEXTAREA,
  Z as TP_TOGGLE,
  q as TP_UPLOADER,
  A as TpAlertColor,
  L as TpApexchartsName,
  G as TpBadgeColor,
  U as TpButtonColor,
  d as TpButtonFill,
  E as TpButtonIconColor,
  O as TpButtonIconFill,
  t as TpButtonIconName,
  l as TpButtonIconSize,
  I as TpButtonName,
  g as TpButtonSize,
  s as TpCardFill,
  b as TpCkeditorSize,
  n as TpDatepickerState,
  B as TpFlagTagColor,
  _ as TpIconColor,
  a as TpIconSize,
  R as TpInputAddState,
  e as TpInputState,
  v as TpMenuSize,
  S as TpModalSize,
  f as TpSelectFilterState,
  u as TpSelectItemColor,
  N as TpSelectState,
  P as TpSnackbarColor,
  D as TpSpinnerColor,
  c as TpSpinnerSize,
  j as TpTableBorder,
  H as TpTableCellLevel,
  h as TpTableFeedback,
  M as TpTextColor,
  m as TpTextType,
  i as TpTextareaState
};
