const w = {}, W = {}, Y = {}, X = {}, K = {}, V = {}, Z = {};
var L = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.SUCCESS = "success", r))(L || {});
const q = {
  "tp-color": Object.values(L)
};
var a = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.BORDERED = "bordered", r.ELEVATED = "elevated", r))(a || {});
const J = {
  "tp-fill": Object.values(a)
};
var _ = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.WARNING_LIGHT = "warning-light", r.INFO = "info", r.PRIMARY = "primary", r.GRAY_DARK = "gray-dark", r.GRAY_LIGHT = "gray-light", r))(_ || {});
const Q = {
  "tp-color": Object.values(_)
};
var R = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r))(R || {}), A = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.DARK = "dark", r.LIGHT = "light", r))(A || {});
const $ = {
  "tp-size": Object.values(R),
  "tp-color": Object.values(A)
}, C = {};
var s = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(s || {});
const k = {
  "tp-size": Object.values(s)
};
var l = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(l || {});
const F = {
  "tp-state": Object.values(l)
};
var O = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(O || {});
const z = {
  "tp-size": Object.values(O)
};
var E = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r))(E || {});
const o = {
  "tp-color": Object.values(E)
};
var t = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(t || {});
const y = {
  "tp-state": Object.values(t)
};
var n = /* @__PURE__ */ ((r) => (r["2XL"] = "2xl", r.XL = "xl", r.LG = "lg", r.MD = "md", r.SM = "sm", r.AUTO = "auto", r))(n || {});
const x = {
  "tp-size": Object.values(n)
};
var u = /* @__PURE__ */ ((r) => (r.BORDER_HORIZONTAL = "border-horizontal", r.BORDER_VERTICAL = "border-vertical", r.BORDER_INNER = "border-inner", r.BORDER_ALL = "border-all", r))(u || {}), N = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r))(N || {}), c = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r))(c || {});
const T = {
  "tp-border": Object.values(u),
  "tp-cell-level": Object.values(N),
  "tp-feedback": Object.values(c)
};
var D = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.DANGER = "danger", r.WARNING = "warning", r.INFO = "info", r))(D || {});
const p = {
  "tp-color": Object.values(D)
};
var G = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(G || {});
const rr = {
  "tp-state": Object.values(G)
};
var v = /* @__PURE__ */ ((r) => (r.TEXT_COLORS = "text-colors", r.COLUMNS = "columns", r.LEGEND_BOTTOM_XL = "legend-bottom-xl", r))(v || {});
const Lr = {
  "tp-name": Object.values(v)
};
var e = /* @__PURE__ */ ((r) => (r.LG = "lg", r.MD = "md", r.SM = "sm", r))(e || {}), P = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.DARK = "dark", r.GRAY = "gray", r))(P || {});
const ar = {
  "tp-size": Object.values(e),
  "tp-color": Object.values(P)
};
var m = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(m || {});
const _r = {
  "tp-state": Object.values(m)
};
var M = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(M || {});
const Rr = {
  "tp-state": Object.values(M)
};
var S = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r))(S || {});
const Ar = {
  "tp-color": Object.values(S)
};
var b = /* @__PURE__ */ ((r) => (r.PARAGRAPH_MD_REGULAR_NORMAL = "paragraph-md-regular-normal", r.PARAGRAPH_MD_BOLD_NORMAL = "paragraph-md-bold-normal", r.PARAGRAPH_MD_LIGHT_NORMAL = "paragraph-md-light-normal", r.PARAGRAPH_SM_REGULAR_NORMAL = "paragraph-sm-regular-normal", r.PARAGRAPH_SM_BOLD_NORMAL = "paragraph-sm-bold-normal", r.PARAGRAPH_SM_LIGHT_NORMAL = "paragraph-sm-light-normal", r.TITLE_LG_REGULAR_NORMAL = "title-lg-regular-normal", r.TITLE_LG_BOLD_NORMAL = "title-lg-bold-normal", r.TITLE_MD_REGULAR_NORMAL = "title-md-regular-normal", r.TITLE_MD_BOLD_NORMAL = "title-md-bold-normal", r.LABEL_MD_REGULAR_NORMAL = "label-md-regular-normal", r.LABEL_MD_BOLD_NORMAL = "label-md-bold-normal", r.LABEL_MD_LIGHT_NORMAL = "label-md-light-normal", r.LABEL_SM_REGULAR_NORMAL = "label-sm-regular-normal", r.LABEL_SM_BOLD_NORMAL = "label-sm-bold-normal", r.LABEL_SM_LIGHT_NORMAL = "label-sm-light-normal", r.PARAGRAPH_MD_REGULAR_TALL = "paragraph-md-regular-tall", r.PARAGRAPH_MD_BOLD_TALL = "paragraph-md-bold-tall", r.PARAGRAPH_MD_LIGHT_TALL = "paragraph-md-light-tall", r.PARAGRAPH_SM_REGULAR_TALL = "paragraph-sm-regular-tall", r.PARAGRAPH_SM_BOLD_TALL = "paragraph-sm-bold-tall", r.PARAGRAPH_SM_LIGHT_TALL = "paragraph-sm-light-tall", r.TITLE_LG_REGULAR_TALL = "title-lg-regular-tall", r.TITLE_LG_BOLD_TALL = "title-lg-bold-tall", r.TITLE_MD_REGULAR_TALL = "title-md-regular-tall", r.TITLE_MD_BOLD_TALL = "title-md-bold-tall", r.LABEL_MD_REGULAR_TALL = "label-md-regular-tall", r.LABEL_MD_BOLD_TALL = "label-md-bold-tall", r.LABEL_MD_LIGHT_TALL = "label-md-light-tall", r.LABEL_SM_REGULAR_TALL = "label-sm-regular-tall", r.LABEL_SM_BOLD_TALL = "label-sm-bold-tall", r.LABEL_SM_LIGHT_TALL = "label-sm-light-tall", r))(b || {}), g = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.INFO = "info", r.PRIMARY = "primary", r.NEUTRAL_SOLID_100 = "neutral-solid-100", r.NEUTRAL_SOLID_200 = "neutral-solid-200", r.NEUTRAL_SOLID_300 = "neutral-solid-300", r.NEUTRAL_SOLID_400 = "neutral-solid-400", r.NEUTRAL_SOLID_500 = "neutral-solid-500", r.NEUTRAL_SOLID_600 = "neutral-solid-600", r.NEUTRAL_SOLID_700 = "neutral-solid-700", r.NEUTRAL_SOLID_800 = "neutral-solid-800", r.NEUTRAL_SOLID_900 = "neutral-solid-900", r))(g || {});
const sr = {
  "tp-type": Object.values(b),
  "tp-color": Object.values(g)
};
var d = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(d || {});
const lr = {
  "tp-state": Object.values(d)
};
var U = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(U || {}), I = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(I || {}), i = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(i || {}), j = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(j || {});
const Or = {
  "tp-size": Object.values(U),
  "tp-fill": Object.values(I),
  "tp-color": Object.values(i),
  "tp-name": Object.values(j)
};
var H = /* @__PURE__ */ ((r) => (r.MD = "md", r.SM = "sm", r))(H || {}), h = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(h || {}), B = /* @__PURE__ */ ((r) => (r.GRAY = "gray", r.DANGER = "danger", r.SUCCESS = "success", r.WARNING = "warning", r.DARK = "dark", r.INFO = "info", r))(B || {}), f = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(f || {});
const Er = {
  "tp-size": Object.values(H),
  "tp-fill": Object.values(h),
  "tp-color": Object.values(B),
  "tp-name": Object.values(f)
};
export {
  q as TP_ALERT,
  Lr as TP_APEXCHARTS,
  w as TP_ASIDE_NAV,
  Ar as TP_BADGE,
  V as TP_BREADCRUMBS,
  Er as TP_BUTTON,
  Or as TP_BUTTON_ICON,
  J as TP_CARD,
  W as TP_CHECKBOX,
  k as TP_CKEDITOR,
  _r as TP_DATEPICKER,
  Q as TP_FLAG_TAG,
  $ as TP_ICON,
  F as TP_INPUT,
  lr as TP_INPUT_ADD,
  z as TP_MENU,
  x as TP_MODAL,
  X as TP_RADIO,
  y as TP_SELECT,
  rr as TP_SELECT_FILTER,
  o as TP_SELECT_ITEM,
  p as TP_SNACKBAR,
  ar as TP_SPINNER,
  Y as TP_STEPS,
  Z as TP_TAB,
  T as TP_TABLE,
  sr as TP_TEXT,
  Rr as TP_TEXTAREA,
  K as TP_TOGGLE,
  C as TP_UPLOADER,
  L as TpAlertColor,
  v as TpApexchartsName,
  S as TpBadgeColor,
  B as TpButtonColor,
  h as TpButtonFill,
  i as TpButtonIconColor,
  I as TpButtonIconFill,
  j as TpButtonIconName,
  U as TpButtonIconSize,
  f as TpButtonName,
  H as TpButtonSize,
  a as TpCardFill,
  s as TpCkeditorSize,
  m as TpDatepickerState,
  _ as TpFlagTagColor,
  A as TpIconColor,
  R as TpIconSize,
  d as TpInputAddState,
  l as TpInputState,
  O as TpMenuSize,
  n as TpModalSize,
  G as TpSelectFilterState,
  E as TpSelectItemColor,
  t as TpSelectState,
  D as TpSnackbarColor,
  P as TpSpinnerColor,
  e as TpSpinnerSize,
  u as TpTableBorder,
  N as TpTableCellLevel,
  c as TpTableFeedback,
  g as TpTextColor,
  b as TpTextType,
  M as TpTextareaState
};
