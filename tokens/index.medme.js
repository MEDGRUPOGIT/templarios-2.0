const U = {}, m = {};
var e = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.WARNING = "warning", r.INFO = "info", r.SUCCESS = "success", r))(e || {});
const G = {
  "tp-mode": Object.values(e)
};
var t = /* @__PURE__ */ ((r) => (r.SM = "sm", r.MD = "md", r))(t || {});
const S = {
  "tp-size": Object.values(t)
};
var s = /* @__PURE__ */ ((r) => (r.SM = "sm", r.LG = "lg", r))(s || {}), O = /* @__PURE__ */ ((r) => (r.RED = "red", r.YELLOW = "yellow", r.GREEN = "green", r.NEUTRAL = "neutral", r.BLUE = "blue", r))(O || {}), a = /* @__PURE__ */ ((r) => (r.BADGE = "badge", r.BADGE_ICON = "badge-icon", r))(a || {});
const M = {
  "tp-size": Object.values(s),
  "tp-color": Object.values(O),
  "tp-name": Object.values(a)
};
var v = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.WEAK = "weak", r.STRONG = "strong", r))(v || {}), u = /* @__PURE__ */ ((r) => (r.MD = "md", r.LG = "lg", r))(u || {});
const T = {
  "tp-fill": Object.values(v),
  "tp-size": Object.values(u)
};
var c = /* @__PURE__ */ ((r) => (r.SM = "sm", r.MD = "md", r))(c || {});
const i = {
  "tp-size": Object.values(c)
};
var n = /* @__PURE__ */ ((r) => (r.SM = "sm", r.MD = "md", r.LG = "lg", r))(n || {}), l = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.CLEAR = "clear", r))(l || {}), E = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.CONTRAST = "contrast", r.NEUTRAL = "neutral", r))(E || {}), b = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(b || {});
const I = {
  "tp-size": Object.values(n),
  "tp-fill": Object.values(l),
  "tp-color": Object.values(E),
  "tp-name": Object.values(b)
};
var N = /* @__PURE__ */ ((r) => (r.SM = "sm", r.MD = "md", r.LG = "lg", r))(N || {}), R = /* @__PURE__ */ ((r) => (r.SOLID = "solid", r.OUTLINE = "outline", r.CLEAR = "clear", r))(R || {}), A = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.NEUTRAL = "neutral", r))(A || {}), j = /* @__PURE__ */ ((r) => (r.BUTTON = "button", r.BUTTON_ICON = "button-icon", r))(j || {});
const d = {
  "tp-size": Object.values(N),
  "tp-fill": Object.values(R),
  "tp-color": Object.values(A),
  "tp-name": Object.values(j)
};
var _ = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.SUCCESS = "success", r))(_ || {}), D = /* @__PURE__ */ ((r) => (r.START = "start", r.END = "end", r))(D || {});
const f = {
  "tp-state": Object.values(_),
  "tp-icon": Object.values(D)
};
var L = /* @__PURE__ */ ((r) => (r.START = "start", r.END = "end", r.BOTH = "both", r))(L || {}), P = /* @__PURE__ */ ((r) => (r.ONE = "one", r.TWO = "two", r.THREE = "three", r))(P || {});
const w = {
  "tp-icon": Object.values(L),
  "tp-img": Object.values(P)
};
export {
  M as TP_BADGE,
  d as TP_BUTTON,
  I as TP_BUTTON_ICON,
  i as TP_CHECKBOX,
  w as TP_CHIP,
  T as TP_FAB,
  f as TP_INPUT,
  U as TP_NAVIGATION_DOTS,
  S as TP_RADIO,
  m as TP_TAB_ITEM,
  G as TP_TOAST,
  O as TpBadgeColor,
  a as TpBadgeName,
  s as TpBadgeSize,
  A as TpButtonColor,
  R as TpButtonFill,
  E as TpButtonIconColor,
  l as TpButtonIconFill,
  b as TpButtonIconName,
  n as TpButtonIconSize,
  j as TpButtonName,
  N as TpButtonSize,
  c as TpCheckboxSize,
  L as TpChipIcon,
  P as TpChipImg,
  v as TpFabFill,
  u as TpFabSize,
  D as TpInputIcon,
  _ as TpInputState,
  t as TpRadioSize,
  e as TpToastMode
};
