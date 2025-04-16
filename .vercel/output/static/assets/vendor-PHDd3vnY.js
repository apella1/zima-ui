var Ja = Object.defineProperty;
var Xa = (e, t, r) =>
  t in e
    ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var nr = (e, t, r) => Xa(e, typeof t != "symbol" ? t + "" : t, r);
function Qa(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => n[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
function Za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ar = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var an;
function eo() {
  if (an) return W;
  an = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    u = Symbol.for("react.context"),
    s = Symbol.for("react.forward_ref"),
    i = Symbol.for("react.suspense"),
    l = Symbol.for("react.memo"),
    c = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function f(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (v && y[v]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var p = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    m = Object.assign,
    S = {};
  function w(y, P, $) {
    (this.props = y),
      (this.context = P),
      (this.refs = S),
      (this.updater = $ || p);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (y, P) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, P, "setState");
    }),
    (w.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function E() {}
  E.prototype = w.prototype;
  function C(y, P, $) {
    (this.props = y),
      (this.context = P),
      (this.refs = S),
      (this.updater = $ || p);
  }
  var R = (C.prototype = new E());
  (R.constructor = C), m(R, w.prototype), (R.isPureReactComponent = !0);
  var x = Array.isArray,
    d = { H: null, A: null, T: null, S: null, V: null },
    M = Object.prototype.hasOwnProperty;
  function O(y, P, $, z, B, G) {
    return (
      ($ = G.ref),
      { $$typeof: e, type: y, key: P, ref: $ !== void 0 ? $ : null, props: G }
    );
  }
  function A(y, P) {
    return O(y.type, P, void 0, void 0, void 0, y.props);
  }
  function j(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }
  function Y(y) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function ($) {
        return P[$];
      })
    );
  }
  var oe = /\/+/g;
  function we(y, P) {
    return typeof y == "object" && y !== null && y.key != null
      ? Y("" + y.key)
      : P.toString(36);
  }
  function Ee() {}
  function Qe(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Ee, Ee)
            : ((y.status = "pending"),
              y.then(
                function (P) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = P));
                },
                function (P) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = P));
                }
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function X(y, P, $, z, B) {
    var G = typeof y;
    (G === "undefined" || G === "boolean") && (y = null);
    var V = !1;
    if (y === null) V = !0;
    else
      switch (G) {
        case "bigint":
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case e:
            case t:
              V = !0;
              break;
            case c:
              return (V = y._init), X(V(y._payload), P, $, z, B);
          }
      }
    if (V)
      return (
        (B = B(y)),
        (V = z === "" ? "." + we(y, 0) : z),
        x(B)
          ? (($ = ""),
            V != null && ($ = V.replace(oe, "$&/") + "/"),
            X(B, P, $, "", function (ie) {
              return ie;
            }))
          : B != null &&
            (j(B) &&
              (B = A(
                B,
                $ +
                  (B.key == null || (y && y.key === B.key)
                    ? ""
                    : ("" + B.key).replace(oe, "$&/") + "/") +
                  V
              )),
            P.push(B)),
        1
      );
    V = 0;
    var be = z === "" ? "." : z + ":";
    if (x(y))
      for (var ee = 0; ee < y.length; ee++)
        (z = y[ee]), (G = be + we(z, ee)), (V += X(z, P, $, G, B));
    else if (((ee = f(y)), typeof ee == "function"))
      for (y = ee.call(y), ee = 0; !(z = y.next()).done; )
        (z = z.value), (G = be + we(z, ee++)), (V += X(z, P, $, G, B));
    else if (G === "object") {
      if (typeof y.then == "function") return X(Qe(y), P, $, z, B);
      throw (
        ((P = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : P) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return V;
  }
  function Pe(y, P, $) {
    if (y == null) return y;
    var z = [],
      B = 0;
    return (
      X(y, z, "", "", function (G) {
        return P.call($, G, B++);
      }),
      z
    );
  }
  function je(y) {
    if (y._status === -1) {
      var P = y._result;
      (P = P()),
        P.then(
          function ($) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = $));
          },
          function ($) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = $));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = P));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Te =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var P = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof y == "object" &&
                y !== null &&
                typeof y.message == "string"
                  ? String(y.message)
                  : String(y),
              error: y
            });
            if (!window.dispatchEvent(P)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", y);
            return;
          }
          console.error(y);
        };
  function ve() {}
  return (
    (W.Children = {
      map: Pe,
      forEach: function (y, P, $) {
        Pe(
          y,
          function () {
            P.apply(this, arguments);
          },
          $
        );
      },
      count: function (y) {
        var P = 0;
        return (
          Pe(y, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (y) {
        return (
          Pe(y, function (P) {
            return P;
          }) || []
        );
      },
      only: function (y) {
        if (!j(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      }
    }),
    (W.Component = w),
    (W.Fragment = r),
    (W.Profiler = a),
    (W.PureComponent = C),
    (W.StrictMode = n),
    (W.Suspense = i),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (y) {
        return d.H.useMemoCache(y);
      }
    }),
    (W.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (y, P, $) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + "."
        );
      var z = m({}, y.props),
        B = y.key,
        G = void 0;
      if (P != null)
        for (V in (P.ref !== void 0 && (G = void 0),
        P.key !== void 0 && (B = "" + P.key),
        P))
          !M.call(P, V) ||
            V === "key" ||
            V === "__self" ||
            V === "__source" ||
            (V === "ref" && P.ref === void 0) ||
            (z[V] = P[V]);
      var V = arguments.length - 2;
      if (V === 1) z.children = $;
      else if (1 < V) {
        for (var be = Array(V), ee = 0; ee < V; ee++)
          be[ee] = arguments[ee + 2];
        z.children = be;
      }
      return O(y.type, B, void 0, void 0, G, z);
    }),
    (W.createContext = function (y) {
      return (
        (y = {
          $$typeof: u,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: o, _context: y }),
        y
      );
    }),
    (W.createElement = function (y, P, $) {
      var z,
        B = {},
        G = null;
      if (P != null)
        for (z in (P.key !== void 0 && (G = "" + P.key), P))
          M.call(P, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (B[z] = P[z]);
      var V = arguments.length - 2;
      if (V === 1) B.children = $;
      else if (1 < V) {
        for (var be = Array(V), ee = 0; ee < V; ee++)
          be[ee] = arguments[ee + 2];
        B.children = be;
      }
      if (y && y.defaultProps)
        for (z in ((V = y.defaultProps), V)) B[z] === void 0 && (B[z] = V[z]);
      return O(y, G, void 0, void 0, null, B);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (y) {
      return { $$typeof: s, render: y };
    }),
    (W.isValidElement = j),
    (W.lazy = function (y) {
      return { $$typeof: c, _payload: { _status: -1, _result: y }, _init: je };
    }),
    (W.memo = function (y, P) {
      return { $$typeof: l, type: y, compare: P === void 0 ? null : P };
    }),
    (W.startTransition = function (y) {
      var P = d.T,
        $ = {};
      d.T = $;
      try {
        var z = y(),
          B = d.S;
        B !== null && B($, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(ve, Te);
      } catch (G) {
        Te(G);
      } finally {
        d.T = P;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return d.H.useCacheRefresh();
    }),
    (W.use = function (y) {
      return d.H.use(y);
    }),
    (W.useActionState = function (y, P, $) {
      return d.H.useActionState(y, P, $);
    }),
    (W.useCallback = function (y, P) {
      return d.H.useCallback(y, P);
    }),
    (W.useContext = function (y) {
      return d.H.useContext(y);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (y, P) {
      return d.H.useDeferredValue(y, P);
    }),
    (W.useEffect = function (y, P, $) {
      var z = d.H;
      if (typeof $ == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return z.useEffect(y, P);
    }),
    (W.useId = function () {
      return d.H.useId();
    }),
    (W.useImperativeHandle = function (y, P, $) {
      return d.H.useImperativeHandle(y, P, $);
    }),
    (W.useInsertionEffect = function (y, P) {
      return d.H.useInsertionEffect(y, P);
    }),
    (W.useLayoutEffect = function (y, P) {
      return d.H.useLayoutEffect(y, P);
    }),
    (W.useMemo = function (y, P) {
      return d.H.useMemo(y, P);
    }),
    (W.useOptimistic = function (y, P) {
      return d.H.useOptimistic(y, P);
    }),
    (W.useReducer = function (y, P, $) {
      return d.H.useReducer(y, P, $);
    }),
    (W.useRef = function (y) {
      return d.H.useRef(y);
    }),
    (W.useState = function (y) {
      return d.H.useState(y);
    }),
    (W.useSyncExternalStore = function (y, P, $) {
      return d.H.useSyncExternalStore(y, P, $);
    }),
    (W.useTransition = function () {
      return d.H.useTransition();
    }),
    (W.version = "19.1.0"),
    W
  );
}
var on;
function Mr() {
  return on || ((on = 1), (ar.exports = eo())), ar.exports;
}
var b = Mr();
const to = Za(b),
  Du = Qa({ __proto__: null, default: to }, [b]);
var or = { exports: {} },
  fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ln;
function ro() {
  if (ln) return fe;
  ln = 1;
  var e = Mr();
  function t(i) {
    var l = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var c = 2; c < arguments.length; c++)
        l += "&args[]=" + encodeURIComponent(arguments[c]);
    }
    return (
      "Minified React error #" +
      i +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var n = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r
      },
      p: 0,
      findDOMNode: null
    },
    a = Symbol.for("react.portal");
  function o(i, l, c) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: v == null ? null : "" + v,
      children: i,
      containerInfo: l,
      implementation: c
    };
  }
  var u = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(i, l) {
    if (i === "font") return "";
    if (typeof l == "string") return l === "use-credentials" ? l : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n),
    (fe.createPortal = function (i, l) {
      var c =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11))
        throw Error(t(299));
      return o(i, l, null, c);
    }),
    (fe.flushSync = function (i) {
      var l = u.T,
        c = n.p;
      try {
        if (((u.T = null), (n.p = 2), i)) return i();
      } finally {
        (u.T = l), (n.p = c), n.d.f();
      }
    }),
    (fe.preconnect = function (i, l) {
      typeof i == "string" &&
        (l
          ? ((l = l.crossOrigin),
            (l =
              typeof l == "string"
                ? l === "use-credentials"
                  ? l
                  : ""
                : void 0))
          : (l = null),
        n.d.C(i, l));
    }),
    (fe.prefetchDNS = function (i) {
      typeof i == "string" && n.d.D(i);
    }),
    (fe.preinit = function (i, l) {
      if (typeof i == "string" && l && typeof l.as == "string") {
        var c = l.as,
          v = s(c, l.crossOrigin),
          f = typeof l.integrity == "string" ? l.integrity : void 0,
          p = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
        c === "style"
          ? n.d.S(i, typeof l.precedence == "string" ? l.precedence : void 0, {
              crossOrigin: v,
              integrity: f,
              fetchPriority: p
            })
          : c === "script" &&
            n.d.X(i, {
              crossOrigin: v,
              integrity: f,
              fetchPriority: p,
              nonce: typeof l.nonce == "string" ? l.nonce : void 0
            });
      }
    }),
    (fe.preinitModule = function (i, l) {
      if (typeof i == "string")
        if (typeof l == "object" && l !== null) {
          if (l.as == null || l.as === "script") {
            var c = s(l.as, l.crossOrigin);
            n.d.M(i, {
              crossOrigin: c,
              integrity: typeof l.integrity == "string" ? l.integrity : void 0,
              nonce: typeof l.nonce == "string" ? l.nonce : void 0
            });
          }
        } else l == null && n.d.M(i);
    }),
    (fe.preload = function (i, l) {
      if (
        typeof i == "string" &&
        typeof l == "object" &&
        l !== null &&
        typeof l.as == "string"
      ) {
        var c = l.as,
          v = s(c, l.crossOrigin);
        n.d.L(i, c, {
          crossOrigin: v,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0,
          nonce: typeof l.nonce == "string" ? l.nonce : void 0,
          type: typeof l.type == "string" ? l.type : void 0,
          fetchPriority:
            typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
          referrerPolicy:
            typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
          imageSrcSet:
            typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
          imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
          media: typeof l.media == "string" ? l.media : void 0
        });
      }
    }),
    (fe.preloadModule = function (i, l) {
      if (typeof i == "string")
        if (l) {
          var c = s(l.as, l.crossOrigin);
          n.d.m(i, {
            as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
            crossOrigin: c,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0
          });
        } else n.d.m(i);
    }),
    (fe.requestFormReset = function (i) {
      n.d.r(i);
    }),
    (fe.unstable_batchedUpdates = function (i, l) {
      return i(l);
    }),
    (fe.useFormState = function (i, l, c) {
      return u.H.useFormState(i, l, c);
    }),
    (fe.useFormStatus = function () {
      return u.H.useHostTransitionStatus();
    }),
    (fe.version = "19.1.0"),
    fe
  );
}
var un;
function Mu() {
  if (un) return or.exports;
  un = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (or.exports = ro()), or.exports;
}
var ir = { exports: {} },
  lr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sn;
function no() {
  if (sn) return lr;
  sn = 1;
  var e = Mr();
  function t(i, l) {
    return (i === l && (i !== 0 || 1 / i === 1 / l)) || (i !== i && l !== l);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useSyncExternalStore,
    a = e.useRef,
    o = e.useEffect,
    u = e.useMemo,
    s = e.useDebugValue;
  return (
    (lr.useSyncExternalStoreWithSelector = function (i, l, c, v, f) {
      var p = a(null);
      if (p.current === null) {
        var m = { hasValue: !1, value: null };
        p.current = m;
      } else m = p.current;
      p = u(
        function () {
          function w(d) {
            if (!E) {
              if (((E = !0), (C = d), (d = v(d)), f !== void 0 && m.hasValue)) {
                var M = m.value;
                if (f(M, d)) return (R = M);
              }
              return (R = d);
            }
            if (((M = R), r(C, d))) return M;
            var O = v(d);
            return f !== void 0 && f(M, O) ? ((C = d), M) : ((C = d), (R = O));
          }
          var E = !1,
            C,
            R,
            x = c === void 0 ? null : c;
          return [
            function () {
              return w(l());
            },
            x === null
              ? void 0
              : function () {
                  return w(x());
                }
          ];
        },
        [l, c, v, f]
      );
      var S = n(i, p[0], p[1]);
      return (
        o(
          function () {
            (m.hasValue = !0), (m.value = S);
          },
          [S]
        ),
        s(S),
        S
      );
    }),
    lr
  );
}
var cn;
function ao() {
  return cn || ((cn = 1), (ir.exports = no())), ir.exports;
}
var oo = ao();
function Xn(e) {
  e();
}
function io() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Xn(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) r.push(n), (n = n.next);
      return r;
    },
    subscribe(r) {
      let n = !0;
      const a = (t = { callback: r, next: null, prev: t });
      return (
        a.prev ? (a.prev.next = a) : (e = a),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            a.next ? (a.next.prev = a.prev) : (t = a.prev),
            a.prev ? (a.prev.next = a.next) : (e = a.next));
        }
      );
    }
  };
}
var fn = { notify() {}, get: () => [] };
function lo(e, t) {
  let r,
    n = fn,
    a = 0,
    o = !1;
  function u(S) {
    c();
    const w = n.subscribe(S);
    let E = !1;
    return () => {
      E || ((E = !0), w(), v());
    };
  }
  function s() {
    n.notify();
  }
  function i() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return o;
  }
  function c() {
    a++, r || ((r = e.subscribe(i)), (n = io()));
  }
  function v() {
    a--, r && a === 0 && (r(), (r = void 0), n.clear(), (n = fn));
  }
  function f() {
    o || ((o = !0), c());
  }
  function p() {
    o && ((o = !1), v());
  }
  const m = {
    addNestedSub: u,
    notifyNestedSubs: s,
    handleChangeWrapper: i,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return m;
}
var uo = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  so = uo(),
  co = () => typeof navigator < "u" && navigator.product === "ReactNative",
  fo = co(),
  ho = () => (so || fo ? b.useLayoutEffect : b.useEffect),
  po = ho();
function dn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ou(e, t) {
  if (dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let a = 0; a < r.length; a++)
    if (!Object.prototype.hasOwnProperty.call(t, r[a]) || !dn(e[r[a]], t[r[a]]))
      return !1;
  return !0;
}
var ur = Symbol.for("react-redux-context"),
  sr = typeof globalThis < "u" ? globalThis : {};
function mo() {
  if (!b.createContext) return {};
  const e = sr[ur] ?? (sr[ur] = new Map());
  let t = e.get(b.createContext);
  return t || ((t = b.createContext(null)), e.set(b.createContext, t)), t;
}
var Fe = mo();
function yo(e) {
  const { children: t, context: r, serverState: n, store: a } = e,
    o = b.useMemo(() => {
      const i = lo(a);
      return {
        store: a,
        subscription: i,
        getServerState: n ? () => n : void 0
      };
    }, [a, n]),
    u = b.useMemo(() => a.getState(), [a]);
  po(() => {
    const { subscription: i } = o;
    return (
      (i.onStateChange = i.notifyNestedSubs),
      i.trySubscribe(),
      u !== a.getState() && i.notifyNestedSubs(),
      () => {
        i.tryUnsubscribe(), (i.onStateChange = void 0);
      }
    );
  }, [o, u]);
  const s = r || Fe;
  return b.createElement(s.Provider, { value: o }, t);
}
var Lu = yo;
function Or(e = Fe) {
  return function () {
    return b.useContext(e);
  };
}
var Qn = Or();
function Zn(e = Fe) {
  const t = e === Fe ? Qn : Or(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var vo = Zn();
function go(e = Fe) {
  const t = e === Fe ? vo : Zn(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Au = go(),
  wo = (e, t) => e === t;
function Eo(e = Fe) {
  const t = e === Fe ? Qn : Or(e),
    r = (n, a = {}) => {
      const { equalityFn: o = wo } =
          typeof a == "function" ? { equalityFn: a } : a,
        u = t(),
        { store: s, subscription: i, getServerState: l } = u;
      b.useRef(!0);
      const c = b.useCallback(
          {
            [n.name](f) {
              return n(f);
            }
          }[n.name],
          [n]
        ),
        v = oo.useSyncExternalStoreWithSelector(
          i.addNestedSub,
          s.getState,
          l || s.getState,
          c,
          o
        );
      return b.useDebugValue(v), v;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Nu = Eo(),
  ku = Xn,
  lt = {},
  hn;
function bo() {
  if (hn) return lt;
  (hn = 1),
    Object.defineProperty(lt, "__esModule", { value: !0 }),
    (lt.parse = u),
    (lt.serialize = l);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    n = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    o = (() => {
      const f = function () {};
      return (f.prototype = Object.create(null)), f;
    })();
  function u(f, p) {
    const m = new o(),
      S = f.length;
    if (S < 2) return m;
    const w = (p == null ? void 0 : p.decode) || c;
    let E = 0;
    do {
      const C = f.indexOf("=", E);
      if (C === -1) break;
      const R = f.indexOf(";", E),
        x = R === -1 ? S : R;
      if (C > x) {
        E = f.lastIndexOf(";", C - 1) + 1;
        continue;
      }
      const d = s(f, E, C),
        M = i(f, C, d),
        O = f.slice(d, M);
      if (m[O] === void 0) {
        let A = s(f, C + 1, x),
          j = i(f, x, A);
        const Y = w(f.slice(A, j));
        m[O] = Y;
      }
      E = x + 1;
    } while (E < S);
    return m;
  }
  function s(f, p, m) {
    do {
      const S = f.charCodeAt(p);
      if (S !== 32 && S !== 9) return p;
    } while (++p < m);
    return m;
  }
  function i(f, p, m) {
    for (; p > m; ) {
      const S = f.charCodeAt(--p);
      if (S !== 32 && S !== 9) return p + 1;
    }
    return m;
  }
  function l(f, p, m) {
    const S = (m == null ? void 0 : m.encode) || encodeURIComponent;
    if (!e.test(f)) throw new TypeError(`argument name is invalid: ${f}`);
    const w = S(p);
    if (!t.test(w)) throw new TypeError(`argument val is invalid: ${p}`);
    let E = f + "=" + w;
    if (!m) return E;
    if (m.maxAge !== void 0) {
      if (!Number.isInteger(m.maxAge))
        throw new TypeError(`option maxAge is invalid: ${m.maxAge}`);
      E += "; Max-Age=" + m.maxAge;
    }
    if (m.domain) {
      if (!r.test(m.domain))
        throw new TypeError(`option domain is invalid: ${m.domain}`);
      E += "; Domain=" + m.domain;
    }
    if (m.path) {
      if (!n.test(m.path))
        throw new TypeError(`option path is invalid: ${m.path}`);
      E += "; Path=" + m.path;
    }
    if (m.expires) {
      if (!v(m.expires) || !Number.isFinite(m.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${m.expires}`);
      E += "; Expires=" + m.expires.toUTCString();
    }
    if (
      (m.httpOnly && (E += "; HttpOnly"),
      m.secure && (E += "; Secure"),
      m.partitioned && (E += "; Partitioned"),
      m.priority)
    )
      switch (
        typeof m.priority == "string" ? m.priority.toLowerCase() : void 0
      ) {
        case "low":
          E += "; Priority=Low";
          break;
        case "medium":
          E += "; Priority=Medium";
          break;
        case "high":
          E += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${m.priority}`);
      }
    if (m.sameSite)
      switch (
        typeof m.sameSite == "string" ? m.sameSite.toLowerCase() : m.sameSite
      ) {
        case !0:
        case "strict":
          E += "; SameSite=Strict";
          break;
        case "lax":
          E += "; SameSite=Lax";
          break;
        case "none":
          E += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${m.sameSite}`);
      }
    return E;
  }
  function c(f) {
    if (f.indexOf("%") === -1) return f;
    try {
      return decodeURIComponent(f);
    } catch {
      return f;
    }
  }
  function v(f) {
    return a.call(f) === "[object Date]";
  }
  return lt;
}
bo();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ea = (e) => {
    throw TypeError(e);
  },
  Ro = (e, t, r) => t.has(e) || ea("Cannot " + r),
  cr = (e, t, r) => (
    Ro(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  _o = (e, t, r) =>
    t.has(e)
      ? ea("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  pn = "popstate";
function So(e = {}) {
  function t(n, a) {
    let { pathname: o, search: u, hash: s } = n.location;
    return yt(
      "",
      { pathname: o, search: u, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : ze(a);
  }
  return xo(t, r, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ne(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Co() {
  return Math.random().toString(36).substring(2, 10);
}
function mn(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function yt(e, t, r = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Ie(t) : t),
    state: r,
    key: (t && t.key) || n || Co()
  };
}
function ze({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Ie(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function xo(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    u = a.history,
    s = "POP",
    i = null,
    l = c();
  l == null && ((l = 0), u.replaceState({ ...u.state, idx: l }, ""));
  function c() {
    return (u.state || { idx: null }).idx;
  }
  function v() {
    s = "POP";
    let w = c(),
      E = w == null ? null : w - l;
    (l = w), i && i({ action: s, location: S.location, delta: E });
  }
  function f(w, E) {
    s = "PUSH";
    let C = yt(S.location, w, E);
    l = c() + 1;
    let R = mn(C, l),
      x = S.createHref(C);
    try {
      u.pushState(R, "", x);
    } catch (d) {
      if (d instanceof DOMException && d.name === "DataCloneError") throw d;
      a.location.assign(x);
    }
    o && i && i({ action: s, location: S.location, delta: 1 });
  }
  function p(w, E) {
    s = "REPLACE";
    let C = yt(S.location, w, E);
    l = c();
    let R = mn(C, l),
      x = S.createHref(C);
    u.replaceState(R, "", x),
      o && i && i({ action: s, location: S.location, delta: 0 });
  }
  function m(w) {
    let E = a.location.origin !== "null" ? a.location.origin : a.location.href,
      C = typeof w == "string" ? w : ze(w);
    return (
      (C = C.replace(/ $/, "%20")),
      K(
        E,
        `No window.location.(origin|href) available to create URL for href: ${C}`
      ),
      new URL(C, E)
    );
  }
  let S = {
    get action() {
      return s;
    },
    get location() {
      return e(a, u);
    },
    listen(w) {
      if (i) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(pn, v),
        (i = w),
        () => {
          a.removeEventListener(pn, v), (i = null);
        }
      );
    },
    createHref(w) {
      return t(a, w);
    },
    createURL: m,
    encodeLocation(w) {
      let E = m(w);
      return { pathname: E.pathname, search: E.search, hash: E.hash };
    },
    push: f,
    replace: p,
    go(w) {
      return u.go(w);
    }
  };
  return S;
}
var ft,
  yn = class {
    constructor(e) {
      if ((_o(this, ft, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (cr(this, ft).has(e)) return cr(this, ft).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      cr(this, ft).set(e, t);
    }
  };
ft = new WeakMap();
var Po = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function To(e) {
  return Po.has(e);
}
var Do = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children"
]);
function Mo(e) {
  return Do.has(e);
}
function Oo(e) {
  return e.index === !0;
}
function Ht(e, t, r = [], n = {}) {
  return e.map((a, o) => {
    let u = [...r, String(o)],
      s = typeof a.id == "string" ? a.id : u.join("-");
    if (
      (K(
        a.index !== !0 || !a.children,
        "Cannot specify children on an index route"
      ),
      K(
        !n[s],
        `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`
      ),
      Oo(a))
    ) {
      let i = { ...a, ...t(a), id: s };
      return (n[s] = i), i;
    } else {
      let i = { ...a, ...t(a), id: s, children: void 0 };
      return (
        (n[s] = i), a.children && (i.children = Ht(a.children, t, u, n)), i
      );
    }
  });
}
function $e(e, t, r = "/") {
  return It(e, t, r, !1);
}
function It(e, t, r, n) {
  let a = typeof t == "string" ? Ie(t) : t,
    o = ye(a.pathname || "/", r);
  if (o == null) return null;
  let u = ta(e);
  Ao(u);
  let s = null;
  for (let i = 0; s == null && i < u.length; ++i) {
    let l = Bo(o);
    s = Ho(u[i], l, n);
  }
  return s;
}
function Lo(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function ta(e, t = [], r = [], n = "") {
  let a = (o, u, s) => {
    let i = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: u,
      route: o
    };
    i.relativePath.startsWith("/") &&
      (K(
        i.relativePath.startsWith(n),
        `Absolute route path "${i.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (i.relativePath = i.relativePath.slice(n.length)));
    let l = _e([n, i.relativePath]),
      c = r.concat(i);
    o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`
      ),
      ta(o.children, t, c, l)),
      !(o.path == null && !o.index) &&
        t.push({ path: l, score: jo(l, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, u) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) a(o, u);
      else for (let i of ra(o.path)) a(o, u, i);
    }),
    t
  );
}
function ra(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [o, ""] : [o];
  let u = ra(n.join("/")),
    s = [];
  return (
    s.push(...u.map((i) => (i === "" ? o : [o, i].join("/")))),
    a && s.push(...u),
    s.map((i) => (e.startsWith("/") && i === "" ? "/" : i))
  );
}
function Ao(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Uo(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var No = /^:[\w-]+$/,
  ko = 3,
  $o = 2,
  Fo = 1,
  zo = 10,
  Io = -2,
  vn = (e) => e === "*";
function jo(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(vn) && (n += Io),
    t && (n += $o),
    r
      .filter((a) => !vn(a))
      .reduce((a, o) => a + (No.test(o) ? ko : o === "" ? Fo : zo), n)
  );
}
function Uo(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ho(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = "/",
    u = [];
  for (let s = 0; s < n.length; ++s) {
    let i = n[s],
      l = s === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      v = Wt(
        { path: i.relativePath, caseSensitive: i.caseSensitive, end: l },
        c
      ),
      f = i.route;
    if (
      (!v &&
        l &&
        r &&
        !n[n.length - 1].route.index &&
        (v = Wt(
          { path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 },
          c
        )),
      !v)
    )
      return null;
    Object.assign(a, v.params),
      u.push({
        params: a,
        pathname: _e([o, v.pathname]),
        pathnameBase: qo(_e([o, v.pathnameBase])),
        route: f
      }),
      v.pathnameBase !== "/" && (o = _e([o, v.pathnameBase]));
  }
  return u;
}
function Wt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Wo(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    u = o.replace(/(.)\/+$/, "$1"),
    s = a.slice(1);
  return {
    params: n.reduce((l, { paramName: c, isOptional: v }, f) => {
      if (c === "*") {
        let m = s[f] || "";
        u = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const p = s[f];
      return (
        v && !p ? (l[c] = void 0) : (l[c] = (p || "").replace(/%2F/g, "/")), l
      );
    }, {}),
    pathname: o,
    pathnameBase: u,
    pattern: e
  };
}
function Wo(e, t = !1, r = !0) {
  ne(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, s, i) => (
            n.push({ paramName: s, isOptional: i != null }),
            i ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function Bo(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ne(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function ye(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Vo(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? Ie(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Ko(r, t)) : t,
    search: Yo(n),
    hash: Go(a)
  };
}
function Ko(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function fr(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function na(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Lr(e) {
  let t = na(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Ar(e, t, r, n = !1) {
  let a;
  typeof e == "string"
    ? (a = Ie(e))
    : ((a = { ...e }),
      K(
        !a.pathname || !a.pathname.includes("?"),
        fr("?", "pathname", "search", a)
      ),
      K(
        !a.pathname || !a.pathname.includes("#"),
        fr("#", "pathname", "hash", a)
      ),
      K(!a.search || !a.search.includes("#"), fr("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "",
    u = o ? "/" : a.pathname,
    s;
  if (u == null) s = r;
  else {
    let v = t.length - 1;
    if (!n && u.startsWith("..")) {
      let f = u.split("/");
      for (; f[0] === ".."; ) f.shift(), (v -= 1);
      a.pathname = f.join("/");
    }
    s = v >= 0 ? t[v] : "/";
  }
  let i = Vo(a, s),
    l = u && u !== "/" && u.endsWith("/"),
    c = (o || u === ".") && r.endsWith("/");
  return !i.pathname.endsWith("/") && (l || c) && (i.pathname += "/"), i;
}
var _e = (e) => e.join("/").replace(/\/\/+/g, "/"),
  qo = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yo = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Go = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Bt = class {
    constructor(e, t, r, n = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = n),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function vt(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var aa = ["POST", "PUT", "PATCH", "DELETE"],
  Jo = new Set(aa),
  Xo = ["GET", ...aa],
  Qo = new Set(Xo),
  Zo = new Set([301, 302, 303, 307, 308]),
  ei = new Set([307, 308]),
  dr = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  ti = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  ut = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ri = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  oa = "remix-router-transitions",
  ia = Symbol("ResetLoaderData");
function ni(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let n = e.mapRouteProperties || ri,
    a = {},
    o = Ht(e.routes, n, void 0, a),
    u,
    s = e.basename || "/",
    i = e.dataStrategy || si,
    l = { unstable_middleware: !1, ...e.future },
    c = null,
    v = new Set(),
    f = null,
    p = null,
    m = null,
    S = e.hydrationData != null,
    w = $e(o, e.history.location, s),
    E = !1,
    C = null;
  if (w == null && !e.patchRoutesOnNavigation) {
    let h = me(404, { pathname: e.history.location.pathname }),
      { matches: g, route: _ } = On(o);
    (w = g), (C = { [_.id]: h });
  }
  w &&
    !e.hydrationData &&
    Mt(w, o, e.history.location.pathname).active &&
    (w = null);
  let R;
  if (w)
    if (w.some((h) => h.route.lazy)) R = !1;
    else if (!w.some((h) => h.route.loader)) R = !0;
    else {
      let h = e.hydrationData ? e.hydrationData.loaderData : null,
        g = e.hydrationData ? e.hydrationData.errors : null;
      if (g) {
        let _ = w.findIndex((T) => g[T.route.id] !== void 0);
        R = w.slice(0, _ + 1).every((T) => !br(T.route, h, g));
      } else R = w.every((_) => !br(_.route, h, g));
    }
  else {
    (R = !1), (w = []);
    let h = Mt(null, o, e.history.location.pathname);
    h.active && h.matches && ((E = !0), (w = h.matches));
  }
  let x,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: w,
      initialized: R,
      navigation: dr,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || C,
      fetchers: new Map(),
      blockers: new Map()
    },
    M = "POP",
    O = !1,
    A,
    j = !1,
    Y = new Map(),
    oe = null,
    we = !1,
    Ee = !1,
    Qe = new Set(),
    X = new Map(),
    Pe = 0,
    je = -1,
    Te = new Map(),
    ve = new Set(),
    y = new Map(),
    P = new Map(),
    $ = new Set(),
    z = new Map(),
    B,
    G = null;
  function V() {
    if (
      ((c = e.history.listen(({ action: h, location: g, delta: _ }) => {
        if (B) {
          B(), (B = void 0);
          return;
        }
        ne(
          z.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let T = en({
          currentLocation: d.location,
          nextLocation: g,
          historyAction: h
        });
        if (T && _ != null) {
          let D = new Promise((U) => {
            B = U;
          });
          e.history.go(_ * -1),
            Dt(T, {
              state: "blocked",
              location: g,
              proceed() {
                Dt(T, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: g
                }),
                  D.then(() => e.history.go(_));
              },
              reset() {
                let U = new Map(d.blockers);
                U.set(T, ut), ie({ blockers: U });
              }
            });
          return;
        }
        return Ue(h, g);
      })),
      r)
    ) {
      bi(t, Y);
      let h = () => Ri(t, Y);
      t.addEventListener("pagehide", h),
        (oe = () => t.removeEventListener("pagehide", h));
    }
    return d.initialized || Ue("POP", d.location, { initialHydration: !0 }), x;
  }
  function be() {
    c && c(),
      oe && oe(),
      v.clear(),
      A && A.abort(),
      d.fetchers.forEach((h, g) => er(g)),
      d.blockers.forEach((h, g) => Zr(g));
  }
  function ee(h) {
    return v.add(h), () => v.delete(h);
  }
  function ie(h, g = {}) {
    d = { ...d, ...h };
    let _ = [],
      T = [];
    d.fetchers.forEach((D, U) => {
      D.state === "idle" && ($.has(U) ? _.push(U) : T.push(U));
    }),
      $.forEach((D) => {
        !d.fetchers.has(D) && !X.has(D) && _.push(D);
      }),
      [...v].forEach((D) =>
        D(d, {
          deletedFetchers: _,
          viewTransitionOpts: g.viewTransitionOpts,
          flushSync: g.flushSync === !0
        })
      ),
      _.forEach((D) => er(D)),
      T.forEach((D) => d.fetchers.delete(D));
  }
  function Ze(h, g, { flushSync: _ } = {}) {
    var L, k;
    let T =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        ge(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((L = h.state) == null ? void 0 : L._isRedirect) !== !0,
      D;
    g.actionData
      ? Object.keys(g.actionData).length > 0
        ? (D = g.actionData)
        : (D = null)
      : T
        ? (D = d.actionData)
        : (D = null);
    let U = g.loaderData
        ? Dn(d.loaderData, g.loaderData, g.matches || [], g.errors)
        : d.loaderData,
      I = d.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((H, q) => I.set(q, ut)));
    let N =
      O === !0 ||
      (d.navigation.formMethod != null &&
        ge(d.navigation.formMethod) &&
        ((k = h.state) == null ? void 0 : k._isRedirect) !== !0);
    u && ((o = u), (u = void 0)),
      we ||
        M === "POP" ||
        (M === "PUSH"
          ? e.history.push(h, h.state)
          : M === "REPLACE" && e.history.replace(h, h.state));
    let F;
    if (M === "POP") {
      let H = Y.get(d.location.pathname);
      H && H.has(h.pathname)
        ? (F = { currentLocation: d.location, nextLocation: h })
        : Y.has(h.pathname) &&
          (F = { currentLocation: h, nextLocation: d.location });
    } else if (j) {
      let H = Y.get(d.location.pathname);
      H
        ? H.add(h.pathname)
        : ((H = new Set([h.pathname])), Y.set(d.location.pathname, H)),
        (F = { currentLocation: d.location, nextLocation: h });
    }
    ie(
      {
        ...g,
        actionData: D,
        loaderData: U,
        historyAction: M,
        location: h,
        initialized: !0,
        navigation: dr,
        revalidation: "idle",
        restoreScrollPosition: rn(h, g.matches || d.matches),
        preventScrollReset: N,
        blockers: I
      },
      { viewTransitionOpts: F, flushSync: _ === !0 }
    ),
      (M = "POP"),
      (O = !1),
      (j = !1),
      (we = !1),
      (Ee = !1),
      G == null || G.resolve(),
      (G = null);
  }
  async function Kr(h, g) {
    if (typeof h == "number") {
      e.history.go(h);
      return;
    }
    let _ = Er(
        d.location,
        d.matches,
        s,
        h,
        g == null ? void 0 : g.fromRouteId,
        g == null ? void 0 : g.relative
      ),
      { path: T, submission: D, error: U } = gn(!1, _, g),
      I = d.location,
      N = yt(d.location, T, g && g.state);
    N = { ...N, ...e.history.encodeLocation(N) };
    let F = g && g.replace != null ? g.replace : void 0,
      L = "PUSH";
    F === !0
      ? (L = "REPLACE")
      : F === !1 ||
        (D != null &&
          ge(D.formMethod) &&
          D.formAction === d.location.pathname + d.location.search &&
          (L = "REPLACE"));
    let k =
        g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
      H = (g && g.flushSync) === !0,
      q = en({ currentLocation: I, nextLocation: N, historyAction: L });
    if (q) {
      Dt(q, {
        state: "blocked",
        location: N,
        proceed() {
          Dt(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: N
          }),
            Kr(h, g);
        },
        reset() {
          let Q = new Map(d.blockers);
          Q.set(q, ut), ie({ blockers: Q });
        }
      });
      return;
    }
    await Ue(L, N, {
      submission: D,
      pendingError: U,
      preventScrollReset: k,
      replace: g && g.replace,
      enableViewTransition: g && g.viewTransition,
      flushSync: H
    });
  }
  function $a() {
    G || (G = _i()), Zt(), ie({ revalidation: "loading" });
    let h = G.promise;
    return d.navigation.state === "submitting"
      ? h
      : d.navigation.state === "idle"
        ? (Ue(d.historyAction, d.location, {
            startUninterruptedRevalidation: !0
          }),
          h)
        : (Ue(M || d.historyAction, d.navigation.location, {
            overrideNavigation: d.navigation,
            enableViewTransition: j === !0
          }),
          h);
  }
  async function Ue(h, g, _) {
    A && A.abort(),
      (A = null),
      (M = h),
      (we = (_ && _.startUninterruptedRevalidation) === !0),
      Ka(d.location, d.matches),
      (O = (_ && _.preventScrollReset) === !0),
      (j = (_ && _.enableViewTransition) === !0);
    let T = u || o,
      D = _ && _.overrideNavigation,
      U =
        _ != null &&
        _.initialHydration &&
        d.matches &&
        d.matches.length > 0 &&
        !E
          ? d.matches
          : $e(T, g, s),
      I = (_ && _.flushSync) === !0;
    if (
      U &&
      d.initialized &&
      !Ee &&
      yi(d.location, g) &&
      !(_ && _.submission && ge(_.submission.formMethod))
    ) {
      Ze(g, { matches: U }, { flushSync: I });
      return;
    }
    let N = Mt(U, T, g.pathname);
    if ((N.active && N.matches && (U = N.matches), !U)) {
      let { error: te, notFoundMatches: Z, route: ae } = tr(g.pathname);
      Ze(
        g,
        { matches: Z, loaderData: {}, errors: { [ae.id]: te } },
        { flushSync: I }
      );
      return;
    }
    A = new AbortController();
    let F = rt(e.history, g, A.signal, _ && _.submission),
      L = new yn(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      k;
    if (_ && _.pendingError)
      k = [Ve(U).route.id, { type: "error", error: _.pendingError }];
    else if (_ && _.submission && ge(_.submission.formMethod)) {
      let te = await Fa(F, g, _.submission, U, L, N.active, {
        replace: _.replace,
        flushSync: I
      });
      if (te.shortCircuited) return;
      if (te.pendingActionResult) {
        let [Z, ae] = te.pendingActionResult;
        if (he(ae) && vt(ae.error) && ae.error.status === 404) {
          (A = null),
            Ze(g, {
              matches: te.matches,
              loaderData: {},
              errors: { [Z]: ae.error }
            });
          return;
        }
      }
      (U = te.matches || U),
        (k = te.pendingActionResult),
        (D = hr(g, _.submission)),
        (I = !1),
        (N.active = !1),
        (F = rt(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: H,
      matches: q,
      loaderData: Q,
      errors: se
    } = await za(
      F,
      g,
      U,
      L,
      N.active,
      D,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      I,
      k
    );
    H ||
      ((A = null),
      Ze(g, { matches: q || U, ...Mn(k), loaderData: Q, errors: se }));
  }
  async function Fa(h, g, _, T, D, U, I = {}) {
    Zt();
    let N = wi(g, _);
    if ((ie({ navigation: N }, { flushSync: I.flushSync === !0 }), U)) {
      let k = await Ot(T, g.pathname, h.signal);
      if (k.type === "aborted") return { shortCircuited: !0 };
      if (k.type === "error") {
        let H = Ve(k.partialMatches).route.id;
        return {
          matches: k.partialMatches,
          pendingActionResult: [H, { type: "error", error: k.error }]
        };
      } else if (k.matches) T = k.matches;
      else {
        let { notFoundMatches: H, error: q, route: Q } = tr(g.pathname);
        return {
          matches: H,
          pendingActionResult: [Q.id, { type: "error", error: q }]
        };
      }
    }
    let F,
      L = dt(T, g);
    if (!L.route.action && !L.route.lazy)
      F = {
        type: "error",
        error: me(405, {
          method: h.method,
          pathname: g.pathname,
          routeId: L.route.id
        })
      };
    else {
      let k = await nt("action", h, [L], T, D, null);
      if (((F = k[L.route.id]), !F)) {
        for (let H of T)
          if (k[H.route.id]) {
            F = k[H.route.id];
            break;
          }
      }
      if (h.signal.aborted) return { shortCircuited: !0 };
    }
    if (Ke(F)) {
      let k;
      return (
        I && I.replace != null
          ? (k = I.replace)
          : (k =
              xn(F.response.headers.get("Location"), new URL(h.url), s) ===
              d.location.pathname + d.location.search),
        await He(h, F, !0, { submission: _, replace: k }),
        { shortCircuited: !0 }
      );
    }
    if (he(F)) {
      let k = Ve(T, L.route.id);
      return (
        (I && I.replace) !== !0 && (M = "PUSH"),
        { matches: T, pendingActionResult: [k.route.id, F] }
      );
    }
    return { matches: T, pendingActionResult: [L.route.id, F] };
  }
  async function za(h, g, _, T, D, U, I, N, F, L, k, H) {
    let q = U || hr(g, I),
      Q = I || N || An(q),
      se = !we && !L;
    if (D) {
      if (se) {
        let ce = qr(H);
        ie(
          { navigation: q, ...(ce !== void 0 ? { actionData: ce } : {}) },
          { flushSync: k }
        );
      }
      let J = await Ot(_, g.pathname, h.signal);
      if (J.type === "aborted") return { shortCircuited: !0 };
      if (J.type === "error") {
        let ce = Ve(J.partialMatches).route.id;
        return {
          matches: J.partialMatches,
          loaderData: {},
          errors: { [ce]: J.error }
        };
      } else if (J.matches) _ = J.matches;
      else {
        let { error: ce, notFoundMatches: Nt, route: it } = tr(g.pathname);
        return { matches: Nt, loaderData: {}, errors: { [it.id]: ce } };
      }
    }
    let te = u || o,
      [Z, ae] = En(e.history, d, _, Q, g, L === !0, Ee, Qe, $, y, ve, te, s, H);
    if (((je = ++Pe), Z.length === 0 && ae.length === 0)) {
      let J = Xr();
      return (
        Ze(
          g,
          {
            matches: _,
            loaderData: {},
            errors: H && he(H[1]) ? { [H[0]]: H[1].error } : null,
            ...Mn(H),
            ...(J ? { fetchers: new Map(d.fetchers) } : {})
          },
          { flushSync: k }
        ),
        { shortCircuited: !0 }
      );
    }
    if (se) {
      let J = {};
      if (!D) {
        J.navigation = q;
        let ce = qr(H);
        ce !== void 0 && (J.actionData = ce);
      }
      ae.length > 0 && (J.fetchers = Ia(ae)), ie(J, { flushSync: k });
    }
    ae.forEach((J) => {
      Ne(J.key), J.controller && X.set(J.key, J.controller);
    });
    let et = () => ae.forEach((J) => Ne(J.key));
    A && A.signal.addEventListener("abort", et);
    let { loaderResults: at, fetcherResults: Me } = await Yr(_, Z, ae, h, T);
    if (h.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener("abort", et),
      ae.forEach((J) => X.delete(J.key));
    let Re = kt(at);
    if (Re)
      return await He(h, Re.result, !0, { replace: F }), { shortCircuited: !0 };
    if (((Re = kt(Me)), Re))
      return (
        ve.add(Re.key),
        await He(h, Re.result, !0, { replace: F }),
        { shortCircuited: !0 }
      );
    let { loaderData: rr, errors: ot } = Tn(d, _, at, H, ae, Me);
    L && d.errors && (ot = { ...d.errors, ...ot });
    let We = Xr(),
      Lt = Qr(je),
      At = We || Lt || ae.length > 0;
    return {
      matches: _,
      loaderData: rr,
      errors: ot,
      ...(At ? { fetchers: new Map(d.fetchers) } : {})
    };
  }
  function qr(h) {
    if (h && !he(h[1])) return { [h[0]]: h[1].data };
    if (d.actionData)
      return Object.keys(d.actionData).length === 0 ? null : d.actionData;
  }
  function Ia(h) {
    return (
      h.forEach((g) => {
        let _ = d.fetchers.get(g.key),
          T = st(void 0, _ ? _.data : void 0);
        d.fetchers.set(g.key, T);
      }),
      new Map(d.fetchers)
    );
  }
  async function ja(h, g, _, T) {
    Ne(h);
    let D = (T && T.flushSync) === !0,
      U = u || o,
      I = Er(d.location, d.matches, s, _, g, T == null ? void 0 : T.relative),
      N = $e(U, I, s),
      F = Mt(N, U, I);
    if ((F.active && F.matches && (N = F.matches), !N)) {
      De(h, g, me(404, { pathname: I }), { flushSync: D });
      return;
    }
    let { path: L, submission: k, error: H } = gn(!0, I, T);
    if (H) {
      De(h, g, H, { flushSync: D });
      return;
    }
    let q = dt(N, L),
      Q = new yn(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      se = (T && T.preventScrollReset) === !0;
    if (k && ge(k.formMethod)) {
      await Ua(h, g, L, q, N, Q, F.active, D, se, k);
      return;
    }
    y.set(h, { routeId: g, path: L }),
      await Ha(h, g, L, q, N, Q, F.active, D, se, k);
  }
  async function Ua(h, g, _, T, D, U, I, N, F, L) {
    Zt(), y.delete(h);
    function k(re) {
      if (!re.route.action && !re.route.lazy) {
        let tt = me(405, { method: L.formMethod, pathname: _, routeId: g });
        return De(h, g, tt, { flushSync: N }), !0;
      }
      return !1;
    }
    if (!I && k(T)) return;
    let H = d.fetchers.get(h);
    Ae(h, Ei(L, H), { flushSync: N });
    let q = new AbortController(),
      Q = rt(e.history, _, q.signal, L);
    if (I) {
      let re = await Ot(D, _, Q.signal, h);
      if (re.type === "aborted") return;
      if (re.type === "error") {
        De(h, g, re.error, { flushSync: N });
        return;
      } else if (re.matches) {
        if (((D = re.matches), (T = dt(D, _)), k(T))) return;
      } else {
        De(h, g, me(404, { pathname: _ }), { flushSync: N });
        return;
      }
    }
    X.set(h, q);
    let se = Pe,
      Z = (await nt("action", Q, [T], D, U, h))[T.route.id];
    if (Q.signal.aborted) {
      X.get(h) === q && X.delete(h);
      return;
    }
    if ($.has(h)) {
      if (Ke(Z) || he(Z)) {
        Ae(h, ke(void 0));
        return;
      }
    } else {
      if (Ke(Z))
        if ((X.delete(h), je > se)) {
          Ae(h, ke(void 0));
          return;
        } else
          return (
            ve.add(h),
            Ae(h, st(L)),
            He(Q, Z, !1, { fetcherSubmission: L, preventScrollReset: F })
          );
      if (he(Z)) {
        De(h, g, Z.error);
        return;
      }
    }
    let ae = d.navigation.location || d.location,
      et = rt(e.history, ae, q.signal),
      at = u || o,
      Me =
        d.navigation.state !== "idle"
          ? $e(at, d.navigation.location, s)
          : d.matches;
    K(Me, "Didn't find any matches after fetcher action");
    let Re = ++Pe;
    Te.set(h, Re);
    let rr = st(L, Z.data);
    d.fetchers.set(h, rr);
    let [ot, We] = En(e.history, d, Me, L, ae, !1, Ee, Qe, $, y, ve, at, s, [
      T.route.id,
      Z
    ]);
    We.filter((re) => re.key !== h).forEach((re) => {
      let tt = re.key,
        nn = d.fetchers.get(tt),
        Ga = st(void 0, nn ? nn.data : void 0);
      d.fetchers.set(tt, Ga), Ne(tt), re.controller && X.set(tt, re.controller);
    }),
      ie({ fetchers: new Map(d.fetchers) });
    let Lt = () => We.forEach((re) => Ne(re.key));
    q.signal.addEventListener("abort", Lt);
    let { loaderResults: At, fetcherResults: J } = await Yr(Me, ot, We, et, U);
    if (q.signal.aborted) return;
    q.signal.removeEventListener("abort", Lt),
      Te.delete(h),
      X.delete(h),
      We.forEach((re) => X.delete(re.key));
    let ce = kt(At);
    if (ce) return He(et, ce.result, !1, { preventScrollReset: F });
    if (((ce = kt(J)), ce))
      return ve.add(ce.key), He(et, ce.result, !1, { preventScrollReset: F });
    let { loaderData: Nt, errors: it } = Tn(d, Me, At, void 0, We, J);
    if (d.fetchers.has(h)) {
      let re = ke(Z.data);
      d.fetchers.set(h, re);
    }
    Qr(Re),
      d.navigation.state === "loading" && Re > je
        ? (K(M, "Expected pending action"),
          A && A.abort(),
          Ze(d.navigation.location, {
            matches: Me,
            loaderData: Nt,
            errors: it,
            fetchers: new Map(d.fetchers)
          }))
        : (ie({
            errors: it,
            loaderData: Dn(d.loaderData, Nt, Me, it),
            fetchers: new Map(d.fetchers)
          }),
          (Ee = !1));
  }
  async function Ha(h, g, _, T, D, U, I, N, F, L) {
    let k = d.fetchers.get(h);
    Ae(h, st(L, k ? k.data : void 0), { flushSync: N });
    let H = new AbortController(),
      q = rt(e.history, _, H.signal);
    if (I) {
      let Z = await Ot(D, _, q.signal, h);
      if (Z.type === "aborted") return;
      if (Z.type === "error") {
        De(h, g, Z.error, { flushSync: N });
        return;
      } else if (Z.matches) (D = Z.matches), (T = dt(D, _));
      else {
        De(h, g, me(404, { pathname: _ }), { flushSync: N });
        return;
      }
    }
    X.set(h, H);
    let Q = Pe,
      te = (await nt("loader", q, [T], D, U, h))[T.route.id];
    if ((X.get(h) === H && X.delete(h), !q.signal.aborted)) {
      if ($.has(h)) {
        Ae(h, ke(void 0));
        return;
      }
      if (Ke(te))
        if (je > Q) {
          Ae(h, ke(void 0));
          return;
        } else {
          ve.add(h), await He(q, te, !1, { preventScrollReset: F });
          return;
        }
      if (he(te)) {
        De(h, g, te.error);
        return;
      }
      Ae(h, ke(te.data));
    }
  }
  async function He(
    h,
    g,
    _,
    {
      submission: T,
      fetcherSubmission: D,
      preventScrollReset: U,
      replace: I
    } = {}
  ) {
    g.response.headers.has("X-Remix-Revalidate") && (Ee = !0);
    let N = g.response.headers.get("Location");
    K(N, "Expected a Location header on the redirect Response"),
      (N = xn(N, new URL(h.url), s));
    let F = yt(d.location, N, { _isRedirect: !0 });
    if (r) {
      let se = !1;
      if (g.response.headers.has("X-Remix-Reload-Document")) se = !0;
      else if (Nr.test(N)) {
        const te = e.history.createURL(N);
        se = te.origin !== t.location.origin || ye(te.pathname, s) == null;
      }
      if (se) {
        I ? t.location.replace(N) : t.location.assign(N);
        return;
      }
    }
    A = null;
    let L =
        I === !0 || g.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: k, formAction: H, formEncType: q } = d.navigation;
    !T && !D && k && H && q && (T = An(d.navigation));
    let Q = T || D;
    if (ei.has(g.response.status) && Q && ge(Q.formMethod))
      await Ue(L, F, {
        submission: { ...Q, formAction: N },
        preventScrollReset: U || O,
        enableViewTransition: _ ? j : void 0
      });
    else {
      let se = hr(F, T);
      await Ue(L, F, {
        overrideNavigation: se,
        fetcherSubmission: D,
        preventScrollReset: U || O,
        enableViewTransition: _ ? j : void 0
      });
    }
  }
  async function nt(h, g, _, T, D, U) {
    let I,
      N = {};
    try {
      I = await fi(i, h, g, _, T, U, a, n, D);
    } catch (F) {
      return (
        _.forEach((L) => {
          N[L.route.id] = { type: "error", error: F };
        }),
        N
      );
    }
    for (let [F, L] of Object.entries(I))
      if (vi(L)) {
        let k = L.result;
        N[F] = { type: "redirect", response: pi(k, g, F, T, s) };
      } else N[F] = await hi(L);
    return N;
  }
  async function Yr(h, g, _, T, D) {
    let U = nt("loader", T, g, h, D, null),
      I = Promise.all(
        _.map(async (L) => {
          if (L.matches && L.match && L.controller) {
            let H = (
              await nt(
                "loader",
                rt(e.history, L.path, L.controller.signal),
                [L.match],
                L.matches,
                D,
                L.key
              )
            )[L.match.route.id];
            return { [L.key]: H };
          } else
            return Promise.resolve({
              [L.key]: { type: "error", error: me(404, { pathname: L.path }) }
            });
        })
      ),
      N = await U,
      F = (await I).reduce((L, k) => Object.assign(L, k), {});
    return { loaderResults: N, fetcherResults: F };
  }
  function Zt() {
    (Ee = !0),
      y.forEach((h, g) => {
        X.has(g) && Qe.add(g), Ne(g);
      });
  }
  function Ae(h, g, _ = {}) {
    d.fetchers.set(h, g),
      ie(
        { fetchers: new Map(d.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function De(h, g, _, T = {}) {
    let D = Ve(d.matches, g);
    er(h),
      ie(
        { errors: { [D.route.id]: _ }, fetchers: new Map(d.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function Gr(h) {
    return (
      P.set(h, (P.get(h) || 0) + 1),
      $.has(h) && $.delete(h),
      d.fetchers.get(h) || ti
    );
  }
  function er(h) {
    let g = d.fetchers.get(h);
    X.has(h) && !(g && g.state === "loading" && Te.has(h)) && Ne(h),
      y.delete(h),
      Te.delete(h),
      ve.delete(h),
      $.delete(h),
      Qe.delete(h),
      d.fetchers.delete(h);
  }
  function Wa(h) {
    let g = (P.get(h) || 0) - 1;
    g <= 0 ? (P.delete(h), $.add(h)) : P.set(h, g),
      ie({ fetchers: new Map(d.fetchers) });
  }
  function Ne(h) {
    let g = X.get(h);
    g && (g.abort(), X.delete(h));
  }
  function Jr(h) {
    for (let g of h) {
      let _ = Gr(g),
        T = ke(_.data);
      d.fetchers.set(g, T);
    }
  }
  function Xr() {
    let h = [],
      g = !1;
    for (let _ of ve) {
      let T = d.fetchers.get(_);
      K(T, `Expected fetcher: ${_}`),
        T.state === "loading" && (ve.delete(_), h.push(_), (g = !0));
    }
    return Jr(h), g;
  }
  function Qr(h) {
    let g = [];
    for (let [_, T] of Te)
      if (T < h) {
        let D = d.fetchers.get(_);
        K(D, `Expected fetcher: ${_}`),
          D.state === "loading" && (Ne(_), Te.delete(_), g.push(_));
      }
    return Jr(g), g.length > 0;
  }
  function Ba(h, g) {
    let _ = d.blockers.get(h) || ut;
    return z.get(h) !== g && z.set(h, g), _;
  }
  function Zr(h) {
    d.blockers.delete(h), z.delete(h);
  }
  function Dt(h, g) {
    let _ = d.blockers.get(h) || ut;
    K(
      (_.state === "unblocked" && g.state === "blocked") ||
        (_.state === "blocked" && g.state === "blocked") ||
        (_.state === "blocked" && g.state === "proceeding") ||
        (_.state === "blocked" && g.state === "unblocked") ||
        (_.state === "proceeding" && g.state === "unblocked"),
      `Invalid blocker state transition: ${_.state} -> ${g.state}`
    );
    let T = new Map(d.blockers);
    T.set(h, g), ie({ blockers: T });
  }
  function en({ currentLocation: h, nextLocation: g, historyAction: _ }) {
    if (z.size === 0) return;
    z.size > 1 && ne(!1, "A router only supports one blocker at a time");
    let T = Array.from(z.entries()),
      [D, U] = T[T.length - 1],
      I = d.blockers.get(D);
    if (
      !(I && I.state === "proceeding") &&
      U({ currentLocation: h, nextLocation: g, historyAction: _ })
    )
      return D;
  }
  function tr(h) {
    let g = me(404, { pathname: h }),
      _ = u || o,
      { matches: T, route: D } = On(_);
    return { notFoundMatches: T, route: D, error: g };
  }
  function Va(h, g, _) {
    if (((f = h), (m = g), (p = _ || null), !S && d.navigation === dr)) {
      S = !0;
      let T = rn(d.location, d.matches);
      T != null && ie({ restoreScrollPosition: T });
    }
    return () => {
      (f = null), (m = null), (p = null);
    };
  }
  function tn(h, g) {
    return (
      (p &&
        p(
          h,
          g.map((T) => Lo(T, d.loaderData))
        )) ||
      h.key
    );
  }
  function Ka(h, g) {
    if (f && m) {
      let _ = tn(h, g);
      f[_] = m();
    }
  }
  function rn(h, g) {
    if (f) {
      let _ = tn(h, g),
        T = f[_];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function Mt(h, g, _) {
    if (e.patchRoutesOnNavigation)
      if (h) {
        if (Object.keys(h[0].params).length > 0)
          return { active: !0, matches: It(g, _, s, !0) };
      } else return { active: !0, matches: It(g, _, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ot(h, g, _, T) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: h };
    let D = h;
    for (;;) {
      let U = u == null,
        I = u || o,
        N = a;
      try {
        await e.patchRoutesOnNavigation({
          signal: _,
          path: g,
          matches: D,
          fetcherKey: T,
          patch: (k, H) => {
            _.aborted || Rn(k, H, I, N, n);
          }
        });
      } catch (k) {
        return { type: "error", error: k, partialMatches: D };
      } finally {
        U && !_.aborted && (o = [...o]);
      }
      if (_.aborted) return { type: "aborted" };
      let F = $e(I, g, s);
      if (F) return { type: "success", matches: F };
      let L = It(I, g, s, !0);
      if (
        !L ||
        (D.length === L.length &&
          D.every((k, H) => k.route.id === L[H].route.id))
      )
        return { type: "success", matches: null };
      D = L;
    }
  }
  function qa(h) {
    (a = {}), (u = Ht(h, n, void 0, a));
  }
  function Ya(h, g) {
    let _ = u == null;
    Rn(h, g, u || o, a, n), _ && ((o = [...o]), ie({}));
  }
  return (
    (x = {
      get basename() {
        return s;
      },
      get future() {
        return l;
      },
      get state() {
        return d;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: V,
      subscribe: ee,
      enableScrollRestoration: Va,
      navigate: Kr,
      fetch: ja,
      revalidate: $a,
      createHref: (h) => e.history.createHref(h),
      encodeLocation: (h) => e.history.encodeLocation(h),
      getFetcher: Gr,
      deleteFetcher: Wa,
      dispose: be,
      getBlocker: Ba,
      deleteBlocker: Zr,
      patchRoutes: Ya,
      _internalFetchControllers: X,
      _internalSetRoutes: qa
    }),
    x
  );
}
function ai(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Er(e, t, r, n, a, o) {
  let u, s;
  if (a) {
    u = [];
    for (let l of t)
      if ((u.push(l), l.route.id === a)) {
        s = l;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let i = Ar(n || ".", Lr(u), ye(e.pathname, r) || e.pathname, o === "path");
  if (
    (n == null && ((i.search = e.search), (i.hash = e.hash)),
    (n == null || n === "" || n === ".") && s)
  ) {
    let l = kr(i.search);
    if (s.route.index && !l)
      i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && l) {
      let c = new URLSearchParams(i.search),
        v = c.getAll("index");
      c.delete("index"),
        v.filter((p) => p).forEach((p) => c.append("index", p));
      let f = c.toString();
      i.search = f ? `?${f}` : "";
    }
  }
  return (
    r !== "/" && (i.pathname = i.pathname === "/" ? r : _e([r, i.pathname])),
    ze(i)
  );
}
function gn(e, t, r) {
  if (!r || !ai(r)) return { path: t };
  if (r.formMethod && !gi(r.formMethod))
    return { path: t, error: me(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: me(400, { type: "invalid-body" }) }),
    o = (r.formMethod || "get").toUpperCase(),
    u = fa(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ge(o)) return n();
      let v =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (f, [p, m]) => `${f}${p}=${m}
`,
                ""
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: v
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!ge(o)) return n();
      try {
        let v = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: v,
            text: void 0
          }
        };
      } catch {
        return n();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, i;
  if (r.formData) (s = Rr(r.formData)), (i = r.formData);
  else if (r.body instanceof FormData) (s = Rr(r.body)), (i = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (i = Pn(s));
  else if (r.body == null) (s = new URLSearchParams()), (i = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (i = Pn(s));
    } catch {
      return n();
    }
  let l = {
    formMethod: o,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: i,
    json: void 0,
    text: void 0
  };
  if (ge(l.formMethod)) return { path: t, submission: l };
  let c = Ie(t);
  return (
    e && c.search && kr(c.search) && s.append("index", ""),
    (c.search = `?${s}`),
    { path: ze(c), submission: l }
  );
}
function wn(e, t, r = !1) {
  let n = e.findIndex((a) => a.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function En(e, t, r, n, a, o, u, s, i, l, c, v, f, p) {
  let m = p ? (he(p[1]) ? p[1].error : p[1].data) : void 0,
    S = e.createURL(t.location),
    w = e.createURL(a),
    E = r;
  o && t.errors
    ? (E = wn(r, Object.keys(t.errors)[0], !0))
    : p && he(p[1]) && (E = wn(r, p[0]));
  let C = p ? p[1].statusCode : void 0,
    R = C && C >= 400,
    x = E.filter((M, O) => {
      let { route: A } = M;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (o) return br(A, t.loaderData, t.errors);
      if (oi(t.loaderData, t.matches[O], M)) return !0;
      let j = t.matches[O],
        Y = M;
      return bn(M, {
        currentUrl: S,
        currentParams: j.params,
        nextUrl: w,
        nextParams: Y.params,
        ...n,
        actionResult: m,
        actionStatus: C,
        defaultShouldRevalidate: R
          ? !1
          : u ||
            S.pathname + S.search === w.pathname + w.search ||
            S.search !== w.search ||
            ii(j, Y)
      });
    }),
    d = [];
  return (
    l.forEach((M, O) => {
      if (o || !r.some((we) => we.route.id === M.routeId) || i.has(O)) return;
      let A = $e(v, M.path, f);
      if (!A) {
        d.push({
          key: O,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null
        });
        return;
      }
      let j = t.fetchers.get(O),
        Y = dt(A, M.path),
        oe = !1;
      c.has(O)
        ? (oe = !1)
        : s.has(O)
          ? (s.delete(O), (oe = !0))
          : j && j.state !== "idle" && j.data === void 0
            ? (oe = u)
            : (oe = bn(Y, {
                currentUrl: S,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: w,
                nextParams: r[r.length - 1].params,
                ...n,
                actionResult: m,
                actionStatus: C,
                defaultShouldRevalidate: R ? !1 : u
              })),
        oe &&
          d.push({
            key: O,
            routeId: M.routeId,
            path: M.path,
            matches: A,
            match: Y,
            controller: new AbortController()
          });
    }),
    [x, d]
  );
}
function br(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && t[e.id] !== void 0,
    a = r != null && r[e.id] !== void 0;
  return !n && a
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !n && !a;
}
function oi(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function ii(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function bn(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function Rn(e, t, r, n, a) {
  let o;
  if (e) {
    let i = n[e];
    K(i, `No route found to patch children into: routeId = ${e}`),
      i.children || (i.children = []),
      (o = i.children);
  } else o = r;
  let u = t.filter((i) => !o.some((l) => la(i, l))),
    s = Ht(
      u,
      a,
      [e || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
      n
    );
  o.push(...s);
}
function la(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var a;
            return (a = t.children) == null ? void 0 : a.some((o) => la(r, o));
          })
      : !1;
}
var _n = new WeakMap(),
  ua = ({ key: e, route: t, manifest: r, mapRouteProperties: n }) => {
    let a = r[t.id];
    if (
      (K(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object")
    )
      return;
    let o = a.lazy[e];
    if (!o) return;
    let u = _n.get(a);
    u || ((u = {}), _n.set(a, u));
    let s = u[e];
    if (s) return s;
    let i = (async () => {
      let l = To(e),
        v = a[e] !== void 0 && e !== "hasErrorBoundary";
      if (l)
        ne(
          !l,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (u[e] = Promise.resolve());
      else if (v)
        ne(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
        );
      else {
        let f = await o();
        f != null && (Object.assign(a, { [e]: f }), Object.assign(a, n(a)));
      }
      typeof a.lazy == "object" &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((f) => f === void 0) && (a.lazy = void 0));
    })();
    return (u[e] = i), i;
  },
  Sn = new WeakMap();
function li(e, t, r, n) {
  let a = r[e.id];
  if ((K(a, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let l = Sn.get(a);
    if (l) return { lazyRoutePromise: l, lazyHandlerPromise: l };
    let c = (async () => {
      K(typeof e.lazy == "function", "No lazy route function found");
      let v = await e.lazy(),
        f = {};
      for (let p in v) {
        let m = v[p];
        if (m === void 0) continue;
        let S = Mo(p),
          E = a[p] !== void 0 && p !== "hasErrorBoundary";
        S
          ? ne(
              !S,
              "Route property " +
                p +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : E
            ? ne(
                !E,
                `Route "${a.id}" has a static property "${p}" defined but its lazy function is also returning a value for this property. The lazy route property "${p}" will be ignored.`
              )
            : (f[p] = m);
      }
      Object.assign(a, f), Object.assign(a, { ...n(a), lazy: void 0 });
    })();
    return Sn.set(a, c), { lazyRoutePromise: c, lazyHandlerPromise: c };
  }
  let o = Object.keys(e.lazy),
    u = [],
    s;
  for (let l of o) {
    let c = ua({ key: l, route: e, manifest: r, mapRouteProperties: n });
    c && (u.push(c), l === t && (s = c));
  }
  return {
    lazyRoutePromise: Promise.all(u).then(() => {}),
    lazyHandlerPromise: s
  };
}
function sa(e) {
  return e !== void 0;
}
function ui(e, t, r) {
  let n = e
    .map(({ route: a }) => {
      if (!(typeof a.lazy != "object" || !a.lazy.unstable_middleware))
        return ua({
          key: "unstable_middleware",
          route: a,
          manifest: t,
          mapRouteProperties: r
        });
    })
    .filter(sa);
  return n.length > 0 ? Promise.all(n) : void 0;
}
async function Cn(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function si(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? ci(
        e,
        !1,
        () => Cn(e),
        (t, r) => ({ [r]: { type: "error", result: t } })
      )
    : Cn(e);
}
async function ci(e, t, r, n) {
  let { matches: a, request: o, params: u, context: s } = e,
    i = { handlerResult: void 0 };
  try {
    let l = a.flatMap((v) =>
        v.route.unstable_middleware
          ? v.route.unstable_middleware.map((f) => [v.route.id, f])
          : []
      ),
      c = await ca({ request: o, params: u, context: s }, l, t, i, r);
    return t ? c : i.handlerResult;
  } catch (l) {
    if (!i.middlewareError) throw l;
    let c = await n(i.middlewareError.error, i.middlewareError.routeId);
    return i.handlerResult ? Object.assign(i.handlerResult, c) : c;
  }
}
async function ca(e, t, r, n, a, o = 0) {
  let { request: u } = e;
  if (u.signal.aborted)
    throw u.signal.reason
      ? u.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${u.method} ${u.url}`
        );
  let s = t[o];
  if (!s) return (n.handlerResult = await a()), n.handlerResult;
  let [i, l] = s,
    c = !1,
    v,
    f = async () => {
      if (c) throw new Error("You may only call `next()` once per middleware");
      (c = !0), await ca(e, t, r, n, a, o + 1);
    };
  try {
    let p = await l(
      { request: e.request, params: e.params, context: e.context },
      f
    );
    return c ? (p === void 0 ? v : p) : f();
  } catch (p) {
    throw (
      (n.middlewareError
        ? n.middlewareError.error !== p &&
          (n.middlewareError = { routeId: i, error: p })
        : (n.middlewareError = { routeId: i, error: p }),
      p)
    );
  }
}
async function fi(e, t, r, n, a, o, u, s, i) {
  let l = ui(a, u, s),
    c = a.map((m) => li(m.route, t, u, s));
  l && (await l);
  let v = a.map((m, S) => {
      let { lazyRoutePromise: w, lazyHandlerPromise: E } = c[S],
        C = n.some((x) => x.route.id === m.route.id);
      return {
        ...m,
        shouldLoad: C,
        resolve: async (x) => (
          x &&
            r.method === "GET" &&
            (m.route.lazy || m.route.loader) &&
            (C = !0),
          C
            ? di({
                type: t,
                request: r,
                match: m,
                lazyHandlerPromise: E,
                lazyRoutePromise: w,
                handlerOverride: x,
                scopedContext: i
              })
            : Promise.resolve({ type: "data", result: void 0 })
        )
      };
    }),
    f = await e({
      matches: v,
      request: r,
      params: a[0].params,
      fetcherKey: o,
      context: i
    }),
    p = c.flatMap((m) => Object.values(m).filter(sa));
  try {
    await Promise.all(p);
  } catch {}
  return f;
}
async function di({
  type: e,
  request: t,
  match: r,
  lazyHandlerPromise: n,
  lazyRoutePromise: a,
  handlerOverride: o,
  scopedContext: u
}) {
  let s,
    i,
    l = (c) => {
      let v,
        f = new Promise((S, w) => (v = w));
      (i = () => v()), t.signal.addEventListener("abort", i);
      let p = (S) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${r.route.id}]`
                )
              )
            : c(
                { request: t, params: r.params, context: u },
                ...(S !== void 0 ? [S] : [])
              ),
        m = (async () => {
          try {
            return { type: "data", result: await (o ? o((w) => p(w)) : p()) };
          } catch (S) {
            return { type: "error", result: S };
          }
        })();
      return Promise.race([m, f]);
    };
  try {
    let c = r.route[e];
    if (n || a)
      if (c) {
        let v,
          [f] = await Promise.all([
            l(c).catch((p) => {
              v = p;
            }),
            n,
            a
          ]);
        if (v !== void 0) throw v;
        s = f;
      } else if ((await n, (c = r.route[e]), c))
        [s] = await Promise.all([l(c), a]);
      else if (e === "action") {
        let v = new URL(t.url),
          f = v.pathname + v.search;
        throw me(405, { method: t.method, pathname: f, routeId: r.route.id });
      } else return { type: "data", result: void 0 };
    else if (c) s = await l(c);
    else {
      let v = new URL(t.url),
        f = v.pathname + v.search;
      throw me(404, { pathname: f });
    }
  } catch (c) {
    return { type: "error", result: c };
  } finally {
    i && t.signal.removeEventListener("abort", i);
  }
  return s;
}
async function hi(e) {
  var n, a, o, u, s, i;
  let { result: t, type: r } = e;
  if (da(t)) {
    let l;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (l = null)
          : (l = await t.json())
        : (l = await t.text());
    } catch (c) {
      return { type: "error", error: c };
    }
    return r === "error"
      ? {
          type: "error",
          error: new Bt(t.status, t.statusText, l),
          statusCode: t.status,
          headers: t.headers
        }
      : { type: "data", data: l, statusCode: t.status, headers: t.headers };
  }
  return r === "error"
    ? Ln(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (n = t.init) == null ? void 0 : n.status,
            headers:
              (a = t.init) != null && a.headers
                ? new Headers(t.init.headers)
                : void 0
          }
        : {
            type: "error",
            error: new Bt(
              ((o = t.init) == null ? void 0 : o.status) || 500,
              void 0,
              t.data
            ),
            statusCode: vt(t) ? t.status : void 0,
            headers:
              (u = t.init) != null && u.headers
                ? new Headers(t.init.headers)
                : void 0
          }
      : { type: "error", error: t, statusCode: vt(t) ? t.status : void 0 }
    : Ln(t)
      ? {
          type: "data",
          data: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers:
            (i = t.init) != null && i.headers
              ? new Headers(t.init.headers)
              : void 0
        }
      : { type: "data", data: t };
}
function pi(e, t, r, n, a) {
  let o = e.headers.get("Location");
  if (
    (K(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Nr.test(o))
  ) {
    let u = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    (o = Er(new URL(t.url), u, a, o)), e.headers.set("Location", o);
  }
  return e;
}
function xn(e, t, r) {
  if (Nr.test(e)) {
    let n = e,
      a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      o = ye(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function rt(e, t, r, n) {
  let a = e.createURL(fa(t)).toString(),
    o = { signal: r };
  if (n && ge(n.formMethod)) {
    let { formMethod: u, formEncType: s } = n;
    (o.method = u.toUpperCase()),
      s === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": s })),
          (o.body = JSON.stringify(n.json)))
        : s === "text/plain"
          ? (o.body = n.text)
          : s === "application/x-www-form-urlencoded" && n.formData
            ? (o.body = Rr(n.formData))
            : (o.body = n.formData);
  }
  return new Request(a, o);
}
function Rr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function Pn(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function mi(e, t, r, n = !1, a = !1) {
  let o = {},
    u = null,
    s,
    i = !1,
    l = {},
    c = r && he(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((v) => {
      if (!(v.route.id in t)) return;
      let f = v.route.id,
        p = t[f];
      if (
        (K(!Ke(p), "Cannot handle redirect results in processLoaderData"),
        he(p))
      ) {
        let m = p.error;
        if ((c !== void 0 && ((m = c), (c = void 0)), (u = u || {}), a))
          u[f] = m;
        else {
          let S = Ve(e, f);
          u[S.route.id] == null && (u[S.route.id] = m);
        }
        n || (o[f] = ia),
          i || ((i = !0), (s = vt(p.error) ? p.error.status : 500)),
          p.headers && (l[f] = p.headers);
      } else
        (o[f] = p.data),
          p.statusCode && p.statusCode !== 200 && !i && (s = p.statusCode),
          p.headers && (l[f] = p.headers);
    }),
    c !== void 0 && r && ((u = { [r[0]]: c }), (o[r[0]] = void 0)),
    { loaderData: o, errors: u, statusCode: s || 200, loaderHeaders: l }
  );
}
function Tn(e, t, r, n, a, o) {
  let { loaderData: u, errors: s } = mi(t, r, n);
  return (
    a.forEach((i) => {
      let { key: l, match: c, controller: v } = i,
        f = o[l];
      if (
        (K(f, "Did not find corresponding fetcher result"),
        !(v && v.signal.aborted))
      )
        if (he(f)) {
          let p = Ve(e.matches, c == null ? void 0 : c.route.id);
          (s && s[p.route.id]) || (s = { ...s, [p.route.id]: f.error }),
            e.fetchers.delete(l);
        } else if (Ke(f)) K(!1, "Unhandled fetcher revalidation redirect");
        else {
          let p = ke(f.data);
          e.fetchers.set(l, p);
        }
    }),
    { loaderData: u, errors: s }
  );
}
function Dn(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== ia)
    .reduce((o, [u, s]) => ((o[u] = s), o), {});
  for (let o of r) {
    let u = o.route.id;
    if (
      (!t.hasOwnProperty(u) &&
        e.hasOwnProperty(u) &&
        o.route.loader &&
        (a[u] = e[u]),
      n && n.hasOwnProperty(u))
    )
      break;
  }
  return a;
}
function Mn(e) {
  return e
    ? he(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ve(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function On(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__"
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t
  };
}
function me(
  e,
  { pathname: t, routeId: r, method: n, type: a, message: o } = {}
) {
  let u = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((u = "Bad Request"),
        n && t && r
          ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : a === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((u = "Forbidden"), (s = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((u = "Not Found"), (s = `No route matches URL "${t}"`))
          : e === 405 &&
            ((u = "Method Not Allowed"),
            n && t && r
              ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : n && (s = `Invalid request method "${n.toUpperCase()}"`)),
    new Bt(e || 500, u, new Error(s), !0)
  );
}
function kt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (Ke(a)) return { key: n, result: a };
  }
}
function fa(e) {
  let t = typeof e == "string" ? Ie(e) : e;
  return ze({ ...t, hash: "" });
}
function yi(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function vi(e) {
  return da(e.result) && Zo.has(e.result.status);
}
function he(e) {
  return e.type === "error";
}
function Ke(e) {
  return (e && e.type) === "redirect";
}
function Ln(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function da(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function gi(e) {
  return Qo.has(e.toUpperCase());
}
function ge(e) {
  return Jo.has(e.toUpperCase());
}
function kr(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function dt(e, t) {
  let r = typeof t == "string" ? Ie(t).search : t.search;
  if (e[e.length - 1].route.index && kr(r || "")) return e[e.length - 1];
  let n = na(e);
  return n[n.length - 1];
}
function An(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: o,
    json: u
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (u !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: u,
        text: void 0
      };
  }
}
function hr(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
      };
}
function wi(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function st(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
      };
}
function Ei(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function ke(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function bi(e, t) {
  try {
    let r = e.sessionStorage.getItem(oa);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function Ri(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(oa, JSON.stringify(r));
    } catch (n) {
      ne(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function _i() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var Je = b.createContext(null);
Je.displayName = "DataRouter";
var Rt = b.createContext(null);
Rt.displayName = "DataRouterState";
var $r = b.createContext({ isTransitioning: !1 });
$r.displayName = "ViewTransition";
var ha = b.createContext(new Map());
ha.displayName = "Fetchers";
var Si = b.createContext(null);
Si.displayName = "Await";
var Ce = b.createContext(null);
Ce.displayName = "Navigation";
var Gt = b.createContext(null);
Gt.displayName = "Location";
var xe = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
xe.displayName = "Route";
var Fr = b.createContext(null);
Fr.displayName = "RouteError";
function Ci(e, { relative: t } = {}) {
  K(_t(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r, navigator: n } = b.useContext(Ce),
    { hash: a, pathname: o, search: u } = St(e, { relative: t }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : _e([r, o])),
    n.createHref({ pathname: s, search: u, hash: a })
  );
}
function _t() {
  return b.useContext(Gt) != null;
}
function Xe() {
  return (
    K(
      _t(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    b.useContext(Gt).location
  );
}
var pa =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ma(e) {
  b.useContext(Ce).static || b.useLayoutEffect(e);
}
function xi() {
  let { isDataRoute: e } = b.useContext(xe);
  return e ? Ui() : Pi();
}
function Pi() {
  K(
    _t(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = b.useContext(Je),
    { basename: t, navigator: r } = b.useContext(Ce),
    { matches: n } = b.useContext(xe),
    { pathname: a } = Xe(),
    o = JSON.stringify(Lr(n)),
    u = b.useRef(!1);
  return (
    ma(() => {
      u.current = !0;
    }),
    b.useCallback(
      (i, l = {}) => {
        if ((ne(u.current, pa), !u.current)) return;
        if (typeof i == "number") {
          r.go(i);
          return;
        }
        let c = Ar(i, JSON.parse(o), a, l.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : _e([t, c.pathname])),
          (l.replace ? r.replace : r.push)(c, l.state, l);
      },
      [t, r, o, a, e]
    )
  );
}
var Ti = b.createContext(null);
function Di(e) {
  let t = b.useContext(xe).outlet;
  return t && b.createElement(Ti.Provider, { value: e }, t);
}
function St(e, { relative: t } = {}) {
  let { matches: r } = b.useContext(xe),
    { pathname: n } = Xe(),
    a = JSON.stringify(Lr(r));
  return b.useMemo(() => Ar(e, JSON.parse(a), n, t === "path"), [e, a, n, t]);
}
function Mi(e, t, r, n) {
  K(
    _t(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a, static: o } = b.useContext(Ce),
    { matches: u } = b.useContext(xe),
    s = u[u.length - 1],
    i = s ? s.params : {},
    l = s ? s.pathname : "/",
    c = s ? s.pathnameBase : "/",
    v = s && s.route;
  {
    let C = (v && v.path) || "";
    ya(
      l,
      !v || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`
    );
  }
  let f = Xe(),
    p;
  p = f;
  let m = p.pathname || "/",
    S = m;
  if (c !== "/") {
    let C = c.replace(/^\//, "").split("/");
    S = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let w =
    !o && r && r.matches && r.matches.length > 0
      ? r.matches
      : $e(e, { pathname: S });
  return (
    ne(
      v || w != null,
      `No routes matched location "${p.pathname}${p.search}${p.hash}" `
    ),
    ne(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    ki(
      w &&
        w.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, i, C.params),
            pathname: _e([
              c,
              a.encodeLocation
                ? a.encodeLocation(C.pathname).pathname
                : C.pathname
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? c
                : _e([
                    c,
                    a.encodeLocation
                      ? a.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase
                  ])
          })
        ),
      u,
      r,
      n
    )
  );
}
function Oi() {
  let e = ji(),
    t = vt(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    a = { padding: "0.5rem", backgroundColor: n },
    o = { padding: "2px 4px", backgroundColor: n },
    u = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (u = b.createElement(
      b.Fragment,
      null,
      b.createElement("p", null, "💿 Hey developer 👋"),
      b.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        b.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        b.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? b.createElement("pre", { style: a }, r) : null,
      u
    )
  );
}
var Li = b.createElement(Oi, null),
  Ai = class extends b.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? b.createElement(
            xe.Provider,
            { value: this.props.routeContext },
            b.createElement(Fr.Provider, {
              value: this.state.error,
              children: this.props.component
            })
          )
        : this.props.children;
    }
  };
function Ni({ routeContext: e, match: t, children: r }) {
  let n = b.useContext(Je);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    b.createElement(xe.Provider, { value: e }, r)
  );
}
function ki(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let a = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = a.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id]) !== void 0
    );
    K(
      i >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`
    ),
      (a = a.slice(0, Math.min(a.length, i + 1)));
  }
  let u = !1,
    s = -1;
  if (r)
    for (let i = 0; i < a.length; i++) {
      let l = a[i];
      if (
        ((l.route.HydrateFallback || l.route.hydrateFallbackElement) && (s = i),
        l.route.id)
      ) {
        let { loaderData: c, errors: v } = r,
          f =
            l.route.loader &&
            !c.hasOwnProperty(l.route.id) &&
            (!v || v[l.route.id] === void 0);
        if (l.route.lazy || f) {
          (u = !0), s >= 0 ? (a = a.slice(0, s + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((i, l, c) => {
    let v,
      f = !1,
      p = null,
      m = null;
    r &&
      ((v = o && l.route.id ? o[l.route.id] : void 0),
      (p = l.route.errorElement || Li),
      u &&
        (s < 0 && c === 0
          ? (ya(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (f = !0),
            (m = null))
          : s === c &&
            ((f = !0), (m = l.route.hydrateFallbackElement || null))));
    let S = t.concat(a.slice(0, c + 1)),
      w = () => {
        let E;
        return (
          v
            ? (E = p)
            : f
              ? (E = m)
              : l.route.Component
                ? (E = b.createElement(l.route.Component, null))
                : l.route.element
                  ? (E = l.route.element)
                  : (E = i),
          b.createElement(Ni, {
            match: l,
            routeContext: { outlet: i, matches: S, isDataRoute: r != null },
            children: E
          })
        );
      };
    return r && (l.route.ErrorBoundary || l.route.errorElement || c === 0)
      ? b.createElement(Ai, {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: v,
          children: w(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 }
        })
      : w();
  }, null);
}
function zr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $i(e) {
  let t = b.useContext(Je);
  return K(t, zr(e)), t;
}
function Fi(e) {
  let t = b.useContext(Rt);
  return K(t, zr(e)), t;
}
function zi(e) {
  let t = b.useContext(xe);
  return K(t, zr(e)), t;
}
function Ir(e) {
  let t = zi(e),
    r = t.matches[t.matches.length - 1];
  return (
    K(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function Ii() {
  return Ir("useRouteId");
}
function ji() {
  var n;
  let e = b.useContext(Fr),
    t = Fi("useRouteError"),
    r = Ir("useRouteError");
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function Ui() {
  let { router: e } = $i("useNavigate"),
    t = Ir("useNavigate"),
    r = b.useRef(!1);
  return (
    ma(() => {
      r.current = !0;
    }),
    b.useCallback(
      async (a, o = {}) => {
        ne(r.current, pa),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var Nn = {};
function ya(e, t, r) {
  !t && !Nn[e] && ((Nn[e] = !0), ne(!1, r));
}
var kn = {};
function $n(e, t) {
  !e && !kn[t] && ((kn[t] = !0), console.warn(t));
}
function Hi(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return (
    e.Component &&
      (e.element &&
        ne(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: b.createElement(e.Component),
        Component: void 0
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        ne(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: b.createElement(e.HydrateFallback),
        HydrateFallback: void 0
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        ne(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: b.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
      })),
    t
  );
}
var Wi = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), e(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), t(r));
          });
      }));
  }
};
function $u({ router: e, flushSync: t }) {
  let [r, n] = b.useState(e.state),
    [a, o] = b.useState(),
    [u, s] = b.useState({ isTransitioning: !1 }),
    [i, l] = b.useState(),
    [c, v] = b.useState(),
    [f, p] = b.useState(),
    m = b.useRef(new Map()),
    S = b.useCallback(
      (R, { deletedFetchers: x, flushSync: d, viewTransitionOpts: M }) => {
        R.fetchers.forEach((A, j) => {
          A.data !== void 0 && m.current.set(j, A.data);
        }),
          x.forEach((A) => m.current.delete(A)),
          $n(
            d === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let O =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          ($n(
            M == null || O,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !M || !O)
        ) {
          t && d ? t(() => n(R)) : b.startTransition(() => n(R));
          return;
        }
        if (t && d) {
          t(() => {
            c && (i && i.resolve(), c.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: M.currentLocation,
                nextLocation: M.nextLocation
              });
          });
          let A = e.window.document.startViewTransition(() => {
            t(() => n(R));
          });
          A.finished.finally(() => {
            t(() => {
              l(void 0), v(void 0), o(void 0), s({ isTransitioning: !1 });
            });
          }),
            t(() => v(A));
          return;
        }
        c
          ? (i && i.resolve(),
            c.skipTransition(),
            p({
              state: R,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation
            }))
          : (o(R),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation
            }));
      },
      [e.window, t, c, i]
    );
  b.useLayoutEffect(() => e.subscribe(S), [e, S]),
    b.useEffect(() => {
      u.isTransitioning && !u.flushSync && l(new Wi());
    }, [u]),
    b.useEffect(() => {
      if (i && a && e.window) {
        let R = a,
          x = i.promise,
          d = e.window.document.startViewTransition(async () => {
            b.startTransition(() => n(R)), await x;
          });
        d.finished.finally(() => {
          l(void 0), v(void 0), o(void 0), s({ isTransitioning: !1 });
        }),
          v(d);
      }
    }, [a, i, e.window]),
    b.useEffect(() => {
      i && a && r.location.key === a.location.key && i.resolve();
    }, [i, c, r.location, a]),
    b.useEffect(() => {
      !u.isTransitioning &&
        f &&
        (o(f.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: f.currentLocation,
          nextLocation: f.nextLocation
        }),
        p(void 0));
    }, [u.isTransitioning, f]);
  let w = b.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (R) => e.navigate(R),
        push: (R, x, d) =>
          e.navigate(R, {
            state: x,
            preventScrollReset: d == null ? void 0 : d.preventScrollReset
          }),
        replace: (R, x, d) =>
          e.navigate(R, {
            replace: !0,
            state: x,
            preventScrollReset: d == null ? void 0 : d.preventScrollReset
          })
      }),
      [e]
    ),
    E = e.basename || "/",
    C = b.useMemo(
      () => ({ router: e, navigator: w, static: !1, basename: E }),
      [e, w, E]
    );
  return b.createElement(
    b.Fragment,
    null,
    b.createElement(
      Je.Provider,
      { value: C },
      b.createElement(
        Rt.Provider,
        { value: r },
        b.createElement(
          ha.Provider,
          { value: m.current },
          b.createElement(
            $r.Provider,
            { value: u },
            b.createElement(
              Ki,
              {
                basename: E,
                location: r.location,
                navigationType: r.historyAction,
                navigator: w
              },
              b.createElement(Bi, {
                routes: e.routes,
                future: e.future,
                state: r
              })
            )
          )
        )
      )
    ),
    null
  );
}
var Bi = b.memo(Vi);
function Vi({ routes: e, future: t, state: r }) {
  return Mi(e, void 0, r, t);
}
function Fu(e) {
  return Di(e.context);
}
function Ki({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: n = "POP",
  navigator: a,
  static: o = !1
}) {
  K(
    !_t(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let u = e.replace(/^\/*/, "/"),
    s = b.useMemo(
      () => ({ basename: u, navigator: a, static: o, future: {} }),
      [u, a, o]
    );
  typeof r == "string" && (r = Ie(r));
  let {
      pathname: i = "/",
      search: l = "",
      hash: c = "",
      state: v = null,
      key: f = "default"
    } = r,
    p = b.useMemo(() => {
      let m = ye(i, u);
      return m == null
        ? null
        : {
            location: { pathname: m, search: l, hash: c, state: v, key: f },
            navigationType: n
          };
    }, [u, i, l, c, v, f, n]);
  return (
    ne(
      p != null,
      `<Router basename="${u}"> is not able to match the URL "${i}${l}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : b.createElement(
          Ce.Provider,
          { value: s },
          b.createElement(Gt.Provider, { children: t, value: p })
        )
  );
}
var jt = "get",
  Ut = "application/x-www-form-urlencoded";
function Jt(e) {
  return e != null && typeof e.tagName == "string";
}
function qi(e) {
  return Jt(e) && e.tagName.toLowerCase() === "button";
}
function Yi(e) {
  return Jt(e) && e.tagName.toLowerCase() === "form";
}
function Gi(e) {
  return Jt(e) && e.tagName.toLowerCase() === "input";
}
function Ji(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xi(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ji(e);
}
var $t = null;
function Qi() {
  if ($t === null)
    try {
      new FormData(document.createElement("form"), 0), ($t = !1);
    } catch {
      $t = !0;
    }
  return $t;
}
var Zi = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function pr(e) {
  return e != null && !Zi.has(e)
    ? (ne(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`
      ),
      null)
    : e;
}
function el(e, t) {
  let r, n, a, o, u;
  if (Yi(e)) {
    let s = e.getAttribute("action");
    (n = s ? ye(s, t) : null),
      (r = e.getAttribute("method") || jt),
      (a = pr(e.getAttribute("enctype")) || Ut),
      (o = new FormData(e));
  } else if (qi(e) || (Gi(e) && (e.type === "submit" || e.type === "image"))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let i = e.getAttribute("formaction") || s.getAttribute("action");
    if (
      ((n = i ? ye(i, t) : null),
      (r = e.getAttribute("formmethod") || s.getAttribute("method") || jt),
      (a =
        pr(e.getAttribute("formenctype")) ||
        pr(s.getAttribute("enctype")) ||
        Ut),
      (o = new FormData(s, e)),
      !Qi())
    ) {
      let { name: l, type: c, value: v } = e;
      if (c === "image") {
        let f = l ? `${l}.` : "";
        o.append(`${f}x`, "0"), o.append(`${f}y`, "0");
      } else l && o.append(l, v);
    }
  } else {
    if (Jt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = jt), (n = null), (a = Ut), (u = e);
  }
  return (
    o && a === "text/plain" && ((u = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: u }
  );
}
function jr(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function tl(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function rl(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function nl(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let u = await tl(o, r);
        return u.links ? u.links() : [];
      }
      return [];
    })
  );
  return ll(
    n
      .flat(1)
      .filter(rl)
      .filter((a) => a.rel === "stylesheet" || a.rel === "preload")
      .map((a) =>
        a.rel === "stylesheet"
          ? { ...a, rel: "prefetch", as: "style" }
          : { ...a, rel: "prefetch" }
      )
  );
}
function Fn(e, t, r, n, a, o) {
  let u = (i, l) => (r[l] ? i.route.id !== r[l].route.id : !0),
    s = (i, l) => {
      var c;
      return (
        r[l].pathname !== i.pathname ||
        (((c = r[l].route.path) == null ? void 0 : c.endsWith("*")) &&
          r[l].params["*"] !== i.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((i, l) => u(i, l) || s(i, l))
    : o === "data"
      ? t.filter((i, l) => {
          var v;
          let c = n.routes[i.route.id];
          if (!c || !c.hasLoader) return !1;
          if (u(i, l) || s(i, l)) return !0;
          if (i.route.shouldRevalidate) {
            let f = i.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams: ((v = r[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: i.params,
              defaultShouldRevalidate: !0
            });
            if (typeof f == "boolean") return f;
          }
          return !0;
        })
      : [];
}
function al(e, t, { includeHydrateFallback: r } = {}) {
  return ol(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let o = [a.module];
        return (
          a.clientActionModule && (o = o.concat(a.clientActionModule)),
          a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)),
          r &&
            a.hydrateFallbackModule &&
            (o = o.concat(a.hydrateFallbackModule)),
          a.imports && (o = o.concat(a.imports)),
          o
        );
      })
      .flat(1)
  );
}
function ol(e) {
  return [...new Set(e)];
}
function il(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function ll(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((n, a) => {
      let o = JSON.stringify(il(a));
      return r.has(o) || (r.add(o), n.push({ key: o, link: a })), n;
    }, [])
  );
}
function ul(e, t) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : t && ye(r.pathname, t) === "/"
        ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function va() {
  let e = b.useContext(Je);
  return (
    jr(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function sl() {
  let e = b.useContext(Rt);
  return (
    jr(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var Ur = b.createContext(void 0);
Ur.displayName = "FrameworkContext";
function ga() {
  let e = b.useContext(Ur);
  return (
    jr(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function cl(e, t) {
  let r = b.useContext(Ur),
    [n, a] = b.useState(!1),
    [o, u] = b.useState(!1),
    {
      onFocus: s,
      onBlur: i,
      onMouseEnter: l,
      onMouseLeave: c,
      onTouchStart: v
    } = t,
    f = b.useRef(null);
  b.useEffect(() => {
    if ((e === "render" && u(!0), e === "viewport")) {
      let S = (E) => {
          E.forEach((C) => {
            u(C.isIntersecting);
          });
        },
        w = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        f.current && w.observe(f.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    b.useEffect(() => {
      if (n) {
        let S = setTimeout(() => {
          u(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [n]);
  let p = () => {
      a(!0);
    },
    m = () => {
      a(!1), u(!1);
    };
  return r
    ? e !== "intent"
      ? [o, f, {}]
      : [
          o,
          f,
          {
            onFocus: ct(s, p),
            onBlur: ct(i, m),
            onMouseEnter: ct(l, p),
            onMouseLeave: ct(c, m),
            onTouchStart: ct(v, p)
          }
        ]
    : [!1, f, {}];
}
function ct(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function fl({ page: e, ...t }) {
  let { router: r } = va(),
    n = b.useMemo(() => $e(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? b.createElement(hl, { page: e, matches: n, ...t }) : null;
}
function dl(e) {
  let { manifest: t, routeModules: r } = ga(),
    [n, a] = b.useState([]);
  return (
    b.useEffect(() => {
      let o = !1;
      return (
        nl(e, t, r).then((u) => {
          o || a(u);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function hl({ page: e, matches: t, ...r }) {
  let n = Xe(),
    { manifest: a, routeModules: o } = ga(),
    { basename: u } = va(),
    { loaderData: s, matches: i } = sl(),
    l = b.useMemo(() => Fn(e, t, i, a, n, "data"), [e, t, i, a, n]),
    c = b.useMemo(() => Fn(e, t, i, a, n, "assets"), [e, t, i, a, n]),
    v = b.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let m = new Set(),
        S = !1;
      if (
        (t.forEach((E) => {
          var R;
          let C = a.routes[E.route.id];
          !C ||
            !C.hasLoader ||
            ((!l.some((x) => x.route.id === E.route.id) &&
              E.route.id in s &&
              (R = o[E.route.id]) != null &&
              R.shouldRevalidate) ||
            C.hasClientLoader
              ? (S = !0)
              : m.add(E.route.id));
        }),
        m.size === 0)
      )
        return [];
      let w = ul(e, u);
      return (
        S &&
          m.size > 0 &&
          w.searchParams.set(
            "_routes",
            t
              .filter((E) => m.has(E.route.id))
              .map((E) => E.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [u, s, n, a, l, t, e, o]),
    f = b.useMemo(() => al(c, a), [c, a]),
    p = dl(c);
  return b.createElement(
    b.Fragment,
    null,
    v.map((m) =>
      b.createElement("link", {
        key: m,
        rel: "prefetch",
        as: "fetch",
        href: m,
        ...r
      })
    ),
    f.map((m) =>
      b.createElement("link", { key: m, rel: "modulepreload", href: m, ...r })
    ),
    p.map(({ key: m, link: S }) => b.createElement("link", { key: m, ...S }))
  );
}
function pl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var wa =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  wa && (window.__reactRouterVersion = "7.5.0");
} catch {}
function zu(e, t) {
  return ni({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: So({ window: t == null ? void 0 : t.window }),
    hydrationData: ml(),
    routes: e,
    mapRouteProperties: Hi,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function ml() {
  let e = window == null ? void 0 : window.__staticRouterHydrationData;
  return e && e.errors && (e = { ...e, errors: yl(e.errors) }), e;
}
function yl(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Bt(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let o = window[a.__subType];
        if (typeof o == "function")
          try {
            let u = new o(a.message);
            (u.stack = ""), (r[n] = u);
          } catch {}
      }
      if (r[n] == null) {
        let o = new Error(a.message);
        (o.stack = ""), (r[n] = o);
      }
    } else r[n] = a;
  return r;
}
var Ea = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ba = b.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: n = "none",
      relative: a,
      reloadDocument: o,
      replace: u,
      state: s,
      target: i,
      to: l,
      preventScrollReset: c,
      viewTransition: v,
      ...f
    },
    p
  ) {
    let { basename: m } = b.useContext(Ce),
      S = typeof l == "string" && Ea.test(l),
      w,
      E = !1;
    if (typeof l == "string" && S && ((w = l), wa))
      try {
        let j = new URL(window.location.href),
          Y = l.startsWith("//") ? new URL(j.protocol + l) : new URL(l),
          oe = ye(Y.pathname, m);
        Y.origin === j.origin && oe != null
          ? (l = oe + Y.search + Y.hash)
          : (E = !0);
      } catch {
        ne(
          !1,
          `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = Ci(l, { relative: a }),
      [R, x, d] = cl(n, f),
      M = El(l, {
        replace: u,
        state: s,
        target: i,
        preventScrollReset: c,
        relative: a,
        viewTransition: v
      });
    function O(j) {
      t && t(j), j.defaultPrevented || M(j);
    }
    let A = b.createElement("a", {
      ...f,
      ...d,
      href: w || C,
      onClick: E || o ? t : O,
      ref: pl(p, x),
      target: i,
      "data-discover": !S && r === "render" ? "true" : void 0
    });
    return R && !S
      ? b.createElement(b.Fragment, null, A, b.createElement(fl, { page: C }))
      : A;
  });
ba.displayName = "Link";
var vl = b.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: a = !1,
    style: o,
    to: u,
    viewTransition: s,
    children: i,
    ...l
  },
  c
) {
  let v = St(u, { relative: l.relative }),
    f = Xe(),
    p = b.useContext(Rt),
    { navigator: m, basename: S } = b.useContext(Ce),
    w = p != null && Cl(v) && s === !0,
    E = m.encodeLocation ? m.encodeLocation(v).pathname : v.pathname,
    C = f.pathname,
    R =
      p && p.navigation && p.navigation.location
        ? p.navigation.location.pathname
        : null;
  r ||
    ((C = C.toLowerCase()),
    (R = R ? R.toLowerCase() : null),
    (E = E.toLowerCase())),
    R && S && (R = ye(R, S) || R);
  const x = E !== "/" && E.endsWith("/") ? E.length - 1 : E.length;
  let d = C === E || (!a && C.startsWith(E) && C.charAt(x) === "/"),
    M =
      R != null &&
      (R === E || (!a && R.startsWith(E) && R.charAt(E.length) === "/")),
    O = { isActive: d, isPending: M, isTransitioning: w },
    A = d ? t : void 0,
    j;
  typeof n == "function"
    ? (j = n(O))
    : (j = [
        n,
        d ? "active" : null,
        M ? "pending" : null,
        w ? "transitioning" : null
      ]
        .filter(Boolean)
        .join(" "));
  let Y = typeof o == "function" ? o(O) : o;
  return b.createElement(
    ba,
    {
      ...l,
      "aria-current": A,
      className: j,
      ref: c,
      style: Y,
      to: u,
      viewTransition: s
    },
    typeof i == "function" ? i(O) : i
  );
});
vl.displayName = "NavLink";
var gl = b.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: u = jt,
      action: s,
      onSubmit: i,
      relative: l,
      preventScrollReset: c,
      viewTransition: v,
      ...f
    },
    p
  ) => {
    let m = _l(),
      S = Sl(s, { relative: l }),
      w = u.toLowerCase() === "get" ? "get" : "post",
      E = typeof s == "string" && Ea.test(s),
      C = (R) => {
        if ((i && i(R), R.defaultPrevented)) return;
        R.preventDefault();
        let x = R.nativeEvent.submitter,
          d = (x == null ? void 0 : x.getAttribute("formmethod")) || u;
        m(x || R.currentTarget, {
          fetcherKey: t,
          method: d,
          navigate: r,
          replace: a,
          state: o,
          relative: l,
          preventScrollReset: c,
          viewTransition: v
        });
      };
    return b.createElement("form", {
      ref: p,
      method: w,
      action: S,
      onSubmit: n ? i : C,
      ...f,
      "data-discover": !E && e === "render" ? "true" : void 0
    });
  }
);
gl.displayName = "Form";
function wl(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ra(e) {
  let t = b.useContext(Je);
  return K(t, wl(e)), t;
}
function El(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: a,
    relative: o,
    viewTransition: u
  } = {}
) {
  let s = xi(),
    i = Xe(),
    l = St(e, { relative: o });
  return b.useCallback(
    (c) => {
      if (Xi(c, t)) {
        c.preventDefault();
        let v = r !== void 0 ? r : ze(i) === ze(l);
        s(e, {
          replace: v,
          state: n,
          preventScrollReset: a,
          relative: o,
          viewTransition: u
        });
      }
    },
    [i, s, l, r, n, t, e, a, o, u]
  );
}
var bl = 0,
  Rl = () => `__${String(++bl)}__`;
function _l() {
  let { router: e } = Ra("useSubmit"),
    { basename: t } = b.useContext(Ce),
    r = Ii();
  return b.useCallback(
    async (n, a = {}) => {
      let { action: o, method: u, encType: s, formData: i, body: l } = el(n, t);
      if (a.navigate === !1) {
        let c = a.fetcherKey || Rl();
        await e.fetch(c, r, a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: l,
          formMethod: a.method || u,
          formEncType: a.encType || s,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: l,
          formMethod: a.method || u,
          formEncType: a.encType || s,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, t, r]
  );
}
function Sl(e, { relative: t } = {}) {
  let { basename: r } = b.useContext(Ce),
    n = b.useContext(xe);
  K(n, "useFormAction must be used inside a RouteContext");
  let [a] = n.matches.slice(-1),
    o = { ...St(e || ".", { relative: t }) },
    u = Xe();
  if (e == null) {
    o.search = u.search;
    let s = new URLSearchParams(o.search),
      i = s.getAll("index");
    if (i.some((c) => c === "")) {
      s.delete("index"),
        i.filter((v) => v).forEach((v) => s.append("index", v));
      let c = s.toString();
      o.search = c ? `?${c}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : _e([r, o.pathname])),
    ze(o)
  );
}
function Cl(e, t = {}) {
  let r = b.useContext($r);
  K(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Ra("useViewTransitionState"),
    a = St(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = ye(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    u = ye(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Wt(a.pathname, u) != null || Wt(a.pathname, o) != null;
}
new TextEncoder();
function le(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var xl = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  zn = xl,
  mr = () => Math.random().toString(36).substring(7).split("").join("."),
  Pl = {
    INIT: `@@redux/INIT${mr()}`,
    REPLACE: `@@redux/REPLACE${mr()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mr()}`
  },
  Vt = Pl;
function Hr(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _a(e, t, r) {
  if (typeof e != "function") throw new Error(le(2));
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(le(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(le(1));
    return r(_a)(e, t);
  }
  let n = e,
    a = t,
    o = new Map(),
    u = o,
    s = 0,
    i = !1;
  function l() {
    u === o &&
      ((u = new Map()),
      o.forEach((w, E) => {
        u.set(E, w);
      }));
  }
  function c() {
    if (i) throw new Error(le(3));
    return a;
  }
  function v(w) {
    if (typeof w != "function") throw new Error(le(4));
    if (i) throw new Error(le(5));
    let E = !0;
    l();
    const C = s++;
    return (
      u.set(C, w),
      function () {
        if (E) {
          if (i) throw new Error(le(6));
          (E = !1), l(), u.delete(C), (o = null);
        }
      }
    );
  }
  function f(w) {
    if (!Hr(w)) throw new Error(le(7));
    if (typeof w.type > "u") throw new Error(le(8));
    if (typeof w.type != "string") throw new Error(le(17));
    if (i) throw new Error(le(9));
    try {
      (i = !0), (a = n(a, w));
    } finally {
      i = !1;
    }
    return (
      (o = u).forEach((C) => {
        C();
      }),
      w
    );
  }
  function p(w) {
    if (typeof w != "function") throw new Error(le(10));
    (n = w), f({ type: Vt.REPLACE });
  }
  function m() {
    const w = v;
    return {
      subscribe(E) {
        if (typeof E != "object" || E === null) throw new Error(le(11));
        function C() {
          const x = E;
          x.next && x.next(c());
        }
        return C(), { unsubscribe: w(C) };
      },
      [zn]() {
        return this;
      }
    };
  }
  return (
    f({ type: Vt.INIT }),
    { dispatch: f, subscribe: v, getState: c, replaceReducer: p, [zn]: m }
  );
}
function Tl(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: Vt.INIT }) > "u") throw new Error(le(12));
    if (typeof r(void 0, { type: Vt.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(le(13));
  });
}
function Dl(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let a;
  try {
    Tl(r);
  } catch (o) {
    a = o;
  }
  return function (u = {}, s) {
    if (a) throw a;
    let i = !1;
    const l = {};
    for (let c = 0; c < n.length; c++) {
      const v = n[c],
        f = r[v],
        p = u[v],
        m = f(p, s);
      if (typeof m > "u") throw (s && s.type, new Error(le(14)));
      (l[v] = m), (i = i || m !== p);
    }
    return (i = i || n.length !== Object.keys(u).length), i ? l : u;
  };
}
function Kt(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n))
        );
}
function Ml(...e) {
  return (t) => (r, n) => {
    const a = t(r, n);
    let o = () => {
      throw new Error(le(15));
    };
    const u = { getState: a.getState, dispatch: (i, ...l) => o(i, ...l) },
      s = e.map((i) => i(u));
    return (o = Kt(...s)(a.dispatch)), { ...a, dispatch: o };
  };
}
function Ol(e) {
  return Hr(e) && "type" in e && typeof e.type == "string";
}
var Wr = Symbol.for("immer-nothing"),
  pt = Symbol.for("immer-draftable"),
  de = Symbol.for("immer-state");
function ue(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var qe = Object.getPrototypeOf;
function Le(e) {
  return !!e && !!e[de];
}
function Se(e) {
  var t;
  return e
    ? Sa(e) ||
        Array.isArray(e) ||
        !!e[pt] ||
        !!((t = e.constructor) != null && t[pt]) ||
        Ct(e) ||
        xt(e)
    : !1;
}
var Ll = Object.prototype.constructor.toString();
function Sa(e) {
  if (!e || typeof e != "object") return !1;
  const t = qe(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === Ll;
}
function Iu(e) {
  return Le(e) || ue(15, e), e[de].base_;
}
function gt(e, t) {
  Ye(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function Ye(e) {
  const t = e[de];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ct(e) ? 2 : xt(e) ? 3 : 0;
}
function wt(e, t) {
  return Ye(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function yr(e, t) {
  return Ye(e) === 2 ? e.get(t) : e[t];
}
function Ca(e, t, r) {
  const n = Ye(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Al(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ct(e) {
  return e instanceof Map;
}
function xt(e) {
  return e instanceof Set;
}
function Be(e) {
  return e.copy_ || e.base_;
}
function _r(e, t) {
  if (Ct(e)) return new Map(e);
  if (xt(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Sa(e);
  if (t === !0 || (t === "class_only" && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[de];
    let a = Reflect.ownKeys(n);
    for (let o = 0; o < a.length; o++) {
      const u = a[o],
        s = n[u];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (n[u] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[u]
          });
    }
    return Object.create(qe(e), n);
  } else {
    const n = qe(e);
    if (n !== null && r) return { ...e };
    const a = Object.create(n);
    return Object.assign(a, e);
  }
}
function Br(e, t = !1) {
  return (
    Xt(e) ||
      Le(e) ||
      !Se(e) ||
      (Ye(e) > 1 && (e.set = e.add = e.clear = e.delete = Nl),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => Br(n, !0))),
    e
  );
}
function Nl() {
  ue(2);
}
function Xt(e) {
  return Object.isFrozen(e);
}
var Sr = {};
function Ge(e) {
  const t = Sr[e];
  return t || ue(0, e), t;
}
function kl(e, t) {
  Sr[e] || (Sr[e] = t);
}
var Et;
function xa() {
  return Et;
}
function $l(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function In(e, t) {
  t &&
    (Ge("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Cr(e) {
  xr(e), e.drafts_.forEach(Fl), (e.drafts_ = null);
}
function xr(e) {
  e === Et && (Et = e.parent_);
}
function jn(e) {
  return (Et = $l(Et, e));
}
function Fl(e) {
  const t = e[de];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Un(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[de].modified_ && (Cr(t), ue(4)),
        Se(e) && ((e = qt(t, e)), t.parent_ || Yt(t, e)),
        t.patches_ &&
          Ge("Patches").generateReplacementPatches_(
            r[de].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = qt(t, r, [])),
    Cr(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Wr ? e : void 0
  );
}
function qt(e, t, r) {
  if (Xt(t)) return t;
  const n = t[de];
  if (!n) return gt(t, (a, o) => Hn(e, n, t, a, o, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return Yt(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let o = a,
      u = !1;
    n.type_ === 3 && ((o = new Set(a)), a.clear(), (u = !0)),
      gt(o, (s, i) => Hn(e, n, a, s, i, r, u)),
      Yt(e, a, !1),
      r &&
        e.patches_ &&
        Ge("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function Hn(e, t, r, n, a, o, u) {
  if (Le(a)) {
    const s =
        o && t && t.type_ !== 3 && !wt(t.assigned_, n) ? o.concat(n) : void 0,
      i = qt(e, a, s);
    if ((Ca(r, n, i), Le(i))) e.canAutoFreeze_ = !1;
    else return;
  } else u && r.add(a);
  if (Se(a) && !Xt(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    qt(e, a),
      (!t || !t.scope_.parent_) &&
        typeof n != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        Yt(e, a);
  }
}
function Yt(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Br(t, r);
}
function zl(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : xa(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    };
  let a = n,
    o = Vr;
  r && ((a = [n]), (o = bt));
  const { revoke: u, proxy: s } = Proxy.revocable(a, o);
  return (n.draft_ = s), (n.revoke_ = u), s;
}
var Vr = {
    get(e, t) {
      if (t === de) return e;
      const r = Be(e);
      if (!wt(r, t)) return Il(e, r, t);
      const n = r[t];
      return e.finalized_ || !Se(n)
        ? n
        : n === vr(e.base_, t)
          ? (gr(e), (e.copy_[t] = Tr(n, e)))
          : n;
    },
    has(e, t) {
      return t in Be(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Be(e));
    },
    set(e, t, r) {
      const n = Pa(Be(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const a = vr(Be(e), t),
          o = a == null ? void 0 : a[de];
        if (o && o.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (Al(r, a) && (r !== void 0 || wt(e.base_, t))) return !0;
        gr(e), Pr(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        vr(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), gr(e), Pr(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = Be(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t]
        }
      );
    },
    defineProperty() {
      ue(11);
    },
    getPrototypeOf(e) {
      return qe(e.base_);
    },
    setPrototypeOf() {
      ue(12);
    }
  },
  bt = {};
gt(Vr, (e, t) => {
  bt[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
bt.deleteProperty = function (e, t) {
  return bt.set.call(this, e, t, void 0);
};
bt.set = function (e, t, r) {
  return Vr.set.call(this, e[0], t, r, e[0]);
};
function vr(e, t) {
  const r = e[de];
  return (r ? Be(r) : e)[t];
}
function Il(e, t, r) {
  var a;
  const n = Pa(t, r);
  return n
    ? "value" in n
      ? n.value
      : (a = n.get) == null
        ? void 0
        : a.call(e.draft_)
    : void 0;
}
function Pa(e, t) {
  if (!(t in e)) return;
  let r = qe(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = qe(r);
  }
}
function Pr(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Pr(e.parent_));
}
function gr(e) {
  e.copy_ || (e.copy_ = _r(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var jl = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == "function" && typeof r != "function") {
          const o = r;
          r = t;
          const u = this;
          return function (i = o, ...l) {
            return u.produce(i, (c) => r.call(this, c, ...l));
          };
        }
        typeof r != "function" && ue(6),
          n !== void 0 && typeof n != "function" && ue(7);
        let a;
        if (Se(t)) {
          const o = jn(this),
            u = Tr(t, void 0);
          let s = !0;
          try {
            (a = r(u)), (s = !1);
          } finally {
            s ? Cr(o) : xr(o);
          }
          return In(o, n), Un(a, o);
        } else if (!t || typeof t != "object") {
          if (
            ((a = r(t)),
            a === void 0 && (a = t),
            a === Wr && (a = void 0),
            this.autoFreeze_ && Br(a, !0),
            n)
          ) {
            const o = [],
              u = [];
            Ge("Patches").generateReplacementPatches_(t, a, o, u), n(o, u);
          }
          return a;
        } else ue(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (u, ...s) => this.produceWithPatches(u, (i) => t(i, ...s));
        let n, a;
        return [
          this.produce(t, r, (u, s) => {
            (n = u), (a = s);
          }),
          n,
          a
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Se(e) || ue(8), Le(e) && (e = Ul(e));
    const t = jn(this),
      r = Tr(e, void 0);
    return (r[de].isManual_ = !0), xr(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[de];
    (!r || !r.isManual_) && ue(9);
    const { scope_: n } = r;
    return In(n, t), Un(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const a = t[r];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Ge("Patches").applyPatches_;
    return Le(e) ? n(e, t) : this.produce(e, (a) => n(a, t));
  }
};
function Tr(e, t) {
  const r = Ct(e)
    ? Ge("MapSet").proxyMap_(e, t)
    : xt(e)
      ? Ge("MapSet").proxySet_(e, t)
      : zl(e, t);
  return (t ? t.scope_ : xa()).drafts_.push(r), r;
}
function Ul(e) {
  return Le(e) || ue(10, e), Ta(e);
}
function Ta(e) {
  if (!Se(e) || Xt(e)) return e;
  const t = e[de];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = _r(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = _r(e, !0);
  return (
    gt(r, (n, a) => {
      Ca(r, n, Ta(a));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function ju() {
  const t = "replace",
    r = "add",
    n = "remove";
  function a(f, p, m, S) {
    switch (f.type_) {
      case 0:
      case 2:
        return u(f, p, m, S);
      case 1:
        return o(f, p, m, S);
      case 3:
        return s(f, p, m, S);
    }
  }
  function o(f, p, m, S) {
    let { base_: w, assigned_: E } = f,
      C = f.copy_;
    C.length < w.length && (([w, C] = [C, w]), ([m, S] = [S, m]));
    for (let R = 0; R < w.length; R++)
      if (E[R] && C[R] !== w[R]) {
        const x = p.concat([R]);
        m.push({ op: t, path: x, value: v(C[R]) }),
          S.push({ op: t, path: x, value: v(w[R]) });
      }
    for (let R = w.length; R < C.length; R++) {
      const x = p.concat([R]);
      m.push({ op: r, path: x, value: v(C[R]) });
    }
    for (let R = C.length - 1; w.length <= R; --R) {
      const x = p.concat([R]);
      S.push({ op: n, path: x });
    }
  }
  function u(f, p, m, S) {
    const { base_: w, copy_: E } = f;
    gt(f.assigned_, (C, R) => {
      const x = yr(w, C),
        d = yr(E, C),
        M = R ? (wt(w, C) ? t : r) : n;
      if (x === d && M === t) return;
      const O = p.concat(C);
      m.push(M === n ? { op: M, path: O } : { op: M, path: O, value: d }),
        S.push(
          M === r
            ? { op: n, path: O }
            : M === n
              ? { op: r, path: O, value: v(x) }
              : { op: t, path: O, value: v(x) }
        );
    });
  }
  function s(f, p, m, S) {
    let { base_: w, copy_: E } = f,
      C = 0;
    w.forEach((R) => {
      if (!E.has(R)) {
        const x = p.concat([C]);
        m.push({ op: n, path: x, value: R }),
          S.unshift({ op: r, path: x, value: R });
      }
      C++;
    }),
      (C = 0),
      E.forEach((R) => {
        if (!w.has(R)) {
          const x = p.concat([C]);
          m.push({ op: r, path: x, value: R }),
            S.unshift({ op: n, path: x, value: R });
        }
        C++;
      });
  }
  function i(f, p, m, S) {
    m.push({ op: t, path: [], value: p === Wr ? void 0 : p }),
      S.push({ op: t, path: [], value: f });
  }
  function l(f, p) {
    return (
      p.forEach((m) => {
        const { path: S, op: w } = m;
        let E = f;
        for (let d = 0; d < S.length - 1; d++) {
          const M = Ye(E);
          let O = S[d];
          typeof O != "string" && typeof O != "number" && (O = "" + O),
            (M === 0 || M === 1) &&
              (O === "__proto__" || O === "constructor") &&
              ue(19),
            typeof E == "function" && O === "prototype" && ue(19),
            (E = yr(E, O)),
            typeof E != "object" && ue(18, S.join("/"));
        }
        const C = Ye(E),
          R = c(m.value),
          x = S[S.length - 1];
        switch (w) {
          case t:
            switch (C) {
              case 2:
                return E.set(x, R);
              case 3:
                ue(16);
              default:
                return (E[x] = R);
            }
          case r:
            switch (C) {
              case 1:
                return x === "-" ? E.push(R) : E.splice(x, 0, R);
              case 2:
                return E.set(x, R);
              case 3:
                return E.add(R);
              default:
                return (E[x] = R);
            }
          case n:
            switch (C) {
              case 1:
                return E.splice(x, 1);
              case 2:
                return E.delete(x);
              case 3:
                return E.delete(m.value);
              default:
                return delete E[x];
            }
          default:
            ue(17, w);
        }
      }),
      f
    );
  }
  function c(f) {
    if (!Se(f)) return f;
    if (Array.isArray(f)) return f.map(c);
    if (Ct(f))
      return new Map(Array.from(f.entries()).map(([m, S]) => [m, c(S)]));
    if (xt(f)) return new Set(Array.from(f).map(c));
    const p = Object.create(qe(f));
    for (const m in f) p[m] = c(f[m]);
    return wt(f, pt) && (p[pt] = f[pt]), p;
  }
  function v(f) {
    return Le(f) ? c(f) : f;
  }
  kl("Patches", {
    applyPatches_: l,
    generatePatches_: a,
    generateReplacementPatches_: i
  });
}
var pe = new jl(),
  Da = pe.produce,
  Uu = pe.produceWithPatches.bind(pe);
pe.setAutoFreeze.bind(pe);
pe.setUseStrictShallowCopy.bind(pe);
var Hu = pe.applyPatches.bind(pe);
pe.createDraft.bind(pe);
pe.finishDraft.bind(pe);
function Hl(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function Wl(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Bl(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((n) =>
        typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
      )
      .join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Wn = (e) => (Array.isArray(e) ? e : [e]);
function Vl(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Bl(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function Kl(e, t) {
  const r = [],
    { length: n } = e;
  for (let a = 0; a < n; a++) r.push(e[a].apply(null, t));
  return r;
}
var ql = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Yl = typeof WeakRef < "u" ? WeakRef : ql,
  Gl = 0,
  Bn = 1;
function Ft() {
  return { s: Gl, v: void 0, o: null, p: null };
}
function Ma(e, t = {}) {
  let r = Ft();
  const { resultEqualityCheck: n } = t;
  let a,
    o = 0;
  function u() {
    var v;
    let s = r;
    const { length: i } = arguments;
    for (let f = 0, p = i; f < p; f++) {
      const m = arguments[f];
      if (typeof m == "function" || (typeof m == "object" && m !== null)) {
        let S = s.o;
        S === null && (s.o = S = new WeakMap());
        const w = S.get(m);
        w === void 0 ? ((s = Ft()), S.set(m, s)) : (s = w);
      } else {
        let S = s.p;
        S === null && (s.p = S = new Map());
        const w = S.get(m);
        w === void 0 ? ((s = Ft()), S.set(m, s)) : (s = w);
      }
    }
    const l = s;
    let c;
    if (s.s === Bn) c = s.v;
    else if (((c = e.apply(null, arguments)), o++, n)) {
      const f =
        ((v = a == null ? void 0 : a.deref) == null ? void 0 : v.call(a)) ?? a;
      f != null && n(f, c) && ((c = f), o !== 0 && o--),
        (a =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new Yl(c)
            : c);
    }
    return (l.s = Bn), (l.v = c), c;
  }
  return (
    (u.clearCache = () => {
      (r = Ft()), u.resetResultsCount();
    }),
    (u.resultsCount = () => o),
    (u.resetResultsCount = () => {
      o = 0;
    }),
    u
  );
}
function Jl(e, ...t) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    n = (...a) => {
      let o = 0,
        u = 0,
        s,
        i = {},
        l = a.pop();
      typeof l == "object" && ((i = l), (l = a.pop())),
        Hl(
          l,
          `createSelector expects an output function after the inputs, but received: [${typeof l}]`
        );
      const c = { ...r, ...i },
        {
          memoize: v,
          memoizeOptions: f = [],
          argsMemoize: p = Ma,
          argsMemoizeOptions: m = []
        } = c,
        S = Wn(f),
        w = Wn(m),
        E = Vl(a),
        C = v(
          function () {
            return o++, l.apply(null, arguments);
          },
          ...S
        ),
        R = p(
          function () {
            u++;
            const d = Kl(E, arguments);
            return (s = C.apply(null, d)), s;
          },
          ...w
        );
      return Object.assign(R, {
        resultFunc: l,
        memoizedResultFunc: C,
        dependencies: E,
        dependencyRecomputations: () => u,
        resetDependencyRecomputations: () => {
          u = 0;
        },
        lastResult: () => s,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: v,
        argsMemoize: p
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Xl = Jl(Ma),
  Ql = Object.assign(
    (e, t = Xl) => {
      Wl(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        n = r.map((o) => e[o]);
      return t(n, (...o) => o.reduce((u, s, i) => ((u[r[i]] = s), u), {}));
    },
    { withTypes: () => Ql }
  );
function Oa(e) {
  return ({ dispatch: r, getState: n }) =>
    (a) =>
    (o) =>
      typeof o == "function" ? o(r, n, e) : a(o);
}
var Zl = Oa(),
  eu = Oa,
  tu =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Kt
              : Kt.apply(null, arguments);
        },
  ru = (e) => e && typeof e.match == "function";
function mt(e, t) {
  function r(...n) {
    if (t) {
      let a = t(...n);
      if (!a) throw new Error(Oe(0));
      return {
        type: e,
        payload: a.payload,
        ...("meta" in a && { meta: a.meta }),
        ...("error" in a && { error: a.error })
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Ol(n) && n.type === e),
    r
  );
}
var La = class ht extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ht.prototype);
  }
  static get [Symbol.species]() {
    return ht;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ht(...t[0].concat(this))
      : new ht(...t.concat(this));
  }
};
function Vn(e) {
  return Se(e) ? Da(e, () => {}) : e;
}
function Kn(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function nu(e) {
  return typeof e == "boolean";
}
var au = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: o = !0
      } = t ?? {};
      let u = new La();
      return r && (nu(r) ? u.push(Zl) : u.push(eu(r.extraArgument))), u;
    },
  Aa = "RTK_autoBatch",
  Wu = () => (e) => ({ payload: e, meta: { [Aa]: !0 } }),
  qn = (e) => (t) => {
    setTimeout(t, e);
  },
  ou =
    (e = { type: "raf" }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let a = !0,
        o = !1,
        u = !1;
      const s = new Set(),
        i =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : qn(10)
              : e.type === "callback"
                ? e.queueNotification
                : qn(e.timeout),
        l = () => {
          (u = !1), o && ((o = !1), s.forEach((c) => c()));
        };
      return Object.assign({}, n, {
        subscribe(c) {
          const v = () => a && c(),
            f = n.subscribe(v);
          return (
            s.add(c),
            () => {
              f(), s.delete(c);
            }
          );
        },
        dispatch(c) {
          var v;
          try {
            return (
              (a = !((v = c == null ? void 0 : c.meta) != null && v[Aa])),
              (o = !a),
              o && (u || ((u = !0), i(l))),
              n.dispatch(c)
            );
          } finally {
            a = !0;
          }
        }
      });
    },
  iu = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let a = new La(e);
      return n && a.push(ou(typeof n == "object" ? n : void 0)), a;
    };
function Bu(e) {
  const t = au(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: a = !0,
      preloadedState: o = void 0,
      enhancers: u = void 0
    } = e || {};
  let s;
  if (typeof r == "function") s = r;
  else if (Hr(r)) s = Dl(r);
  else throw new Error(Oe(1));
  let i;
  typeof n == "function" ? (i = n(t)) : (i = t());
  let l = Kt;
  a && (l = tu({ trace: !1, ...(typeof a == "object" && a) }));
  const c = Ml(...i),
    v = iu(c);
  let f = typeof u == "function" ? u(v) : v();
  const p = l(...f);
  return _a(s, o, p);
}
function Na(e) {
  const t = {},
    r = [];
  let n;
  const a = {
    addCase(o, u) {
      const s = typeof o == "string" ? o : o.type;
      if (!s) throw new Error(Oe(28));
      if (s in t) throw new Error(Oe(29));
      return (t[s] = u), a;
    },
    addMatcher(o, u) {
      return r.push({ matcher: o, reducer: u }), a;
    },
    addDefaultCase(o) {
      return (n = o), a;
    }
  };
  return e(a), [t, r, n];
}
function lu(e) {
  return typeof e == "function";
}
function uu(e, t) {
  let [r, n, a] = Na(t),
    o;
  if (lu(e)) o = () => Vn(e());
  else {
    const s = Vn(e);
    o = () => s;
  }
  function u(s = o(), i) {
    let l = [
      r[i.type],
      ...n.filter(({ matcher: c }) => c(i)).map(({ reducer: c }) => c)
    ];
    return (
      l.filter((c) => !!c).length === 0 && (l = [a]),
      l.reduce((c, v) => {
        if (v)
          if (Le(c)) {
            const p = v(c, i);
            return p === void 0 ? c : p;
          } else {
            if (Se(c)) return Da(c, (f) => v(f, i));
            {
              const f = v(c, i);
              if (f === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return f;
            }
          }
        return c;
      }, s)
    );
  }
  return (u.getInitialState = o), u;
}
var ka = (e, t) => (ru(e) ? e.match(t) : e(t));
function Pt(...e) {
  return (t) => e.some((r) => ka(r, t));
}
function Yn(...e) {
  return (t) => e.every((r) => ka(r, t));
}
function Qt(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string",
    n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Tt(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function su(...e) {
  return e.length === 0
    ? (t) => Qt(t, ["pending"])
    : Tt(e)
      ? Pt(...e.map((t) => t.pending))
      : su()(e[0]);
}
function Dr(...e) {
  return e.length === 0
    ? (t) => Qt(t, ["rejected"])
    : Tt(e)
      ? Pt(...e.map((t) => t.rejected))
      : Dr()(e[0]);
}
function cu(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? Yn(Dr(...e), t)
    : Tt(e)
      ? Yn(Dr(...e), t)
      : cu()(e[0]);
}
function fu(...e) {
  return e.length === 0
    ? (t) => Qt(t, ["fulfilled"])
    : Tt(e)
      ? Pt(...e.map((t) => t.fulfilled))
      : fu()(e[0]);
}
function du(...e) {
  return e.length === 0
    ? (t) => Qt(t, ["pending", "fulfilled", "rejected"])
    : Tt(e)
      ? Pt(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : du()(e[0]);
}
var hu = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  pu = (e = 21) => {
    let t = "",
      r = e;
    for (; r--; ) t += hu[(Math.random() * 64) | 0];
    return t;
  },
  mu = ["name", "message", "stack", "code"],
  wr = class {
    constructor(e, t) {
      nr(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Gn = class {
    constructor(e, t) {
      nr(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  yu = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const r of mu) typeof e[r] == "string" && (t[r] = e[r]);
      return t;
    }
    return { message: String(e) };
  },
  Jn = "External signal was aborted",
  Vu = (() => {
    function e(t, r, n) {
      const a = mt(t + "/fulfilled", (i, l, c, v) => ({
          payload: i,
          meta: {
            ...(v || {}),
            arg: c,
            requestId: l,
            requestStatus: "fulfilled"
          }
        })),
        o = mt(t + "/pending", (i, l, c) => ({
          payload: void 0,
          meta: { ...(c || {}), arg: l, requestId: i, requestStatus: "pending" }
        })),
        u = mt(t + "/rejected", (i, l, c, v, f) => ({
          payload: v,
          error: ((n && n.serializeError) || yu)(i || "Rejected"),
          meta: {
            ...(f || {}),
            arg: c,
            requestId: l,
            rejectedWithValue: !!v,
            requestStatus: "rejected",
            aborted: (i == null ? void 0 : i.name) === "AbortError",
            condition: (i == null ? void 0 : i.name) === "ConditionError"
          }
        }));
      function s(i, { signal: l } = {}) {
        return (c, v, f) => {
          const p = n != null && n.idGenerator ? n.idGenerator(i) : pu(),
            m = new AbortController();
          let S, w;
          function E(R) {
            (w = R), m.abort();
          }
          l &&
            (l.aborted
              ? E(Jn)
              : l.addEventListener("abort", () => E(Jn), { once: !0 }));
          const C = (async function () {
            var d, M;
            let R;
            try {
              let O =
                (d = n == null ? void 0 : n.condition) == null
                  ? void 0
                  : d.call(n, i, { getState: v, extra: f });
              if ((gu(O) && (O = await O), O === !1 || m.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false."
                };
              const A = new Promise((j, Y) => {
                (S = () => {
                  Y({ name: "AbortError", message: w || "Aborted" });
                }),
                  m.signal.addEventListener("abort", S);
              });
              c(
                o(
                  p,
                  i,
                  (M = n == null ? void 0 : n.getPendingMeta) == null
                    ? void 0
                    : M.call(
                        n,
                        { requestId: p, arg: i },
                        { getState: v, extra: f }
                      )
                )
              ),
                (R = await Promise.race([
                  A,
                  Promise.resolve(
                    r(i, {
                      dispatch: c,
                      getState: v,
                      extra: f,
                      requestId: p,
                      signal: m.signal,
                      abort: E,
                      rejectWithValue: (j, Y) => new wr(j, Y),
                      fulfillWithValue: (j, Y) => new Gn(j, Y)
                    })
                  ).then((j) => {
                    if (j instanceof wr) throw j;
                    return j instanceof Gn
                      ? a(j.payload, p, i, j.meta)
                      : a(j, p, i);
                  })
                ]));
            } catch (O) {
              R =
                O instanceof wr ? u(null, p, i, O.payload, O.meta) : u(O, p, i);
            } finally {
              S && m.signal.removeEventListener("abort", S);
            }
            return (
              (n &&
                !n.dispatchConditionRejection &&
                u.match(R) &&
                R.meta.condition) ||
                c(R),
              R
            );
          })();
          return Object.assign(C, {
            abort: E,
            requestId: p,
            arg: i,
            unwrap() {
              return C.then(vu);
            }
          });
        };
      }
      return Object.assign(s, {
        pending: o,
        rejected: u,
        fulfilled: a,
        settled: Pt(u, a),
        typePrefix: t
      });
    }
    return (e.withTypes = () => e), e;
  })();
function vu(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function gu(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var wu = Symbol.for("rtk-slice-createasyncthunk");
function Eu(e, t) {
  return `${e}/${t}`;
}
function bu({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[wu];
  return function (a) {
    const { name: o, reducerPath: u = o } = a;
    if (!o) throw new Error(Oe(11));
    const s =
        (typeof a.reducers == "function" ? a.reducers(_u()) : a.reducers) || {},
      i = Object.keys(s),
      l = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(R, x) {
          const d = typeof R == "string" ? R : R.type;
          if (!d) throw new Error(Oe(12));
          if (d in l.sliceCaseReducersByType) throw new Error(Oe(13));
          return (l.sliceCaseReducersByType[d] = x), c;
        },
        addMatcher(R, x) {
          return l.sliceMatchers.push({ matcher: R, reducer: x }), c;
        },
        exposeAction(R, x) {
          return (l.actionCreators[R] = x), c;
        },
        exposeCaseReducer(R, x) {
          return (l.sliceCaseReducersByName[R] = x), c;
        }
      };
    i.forEach((R) => {
      const x = s[R],
        d = {
          reducerName: R,
          type: Eu(o, R),
          createNotation: typeof a.reducers == "function"
        };
      Cu(x) ? Pu(d, x, c, t) : Su(d, x, c);
    });
    function v() {
      const [R = {}, x = [], d = void 0] =
          typeof a.extraReducers == "function"
            ? Na(a.extraReducers)
            : [a.extraReducers],
        M = { ...R, ...l.sliceCaseReducersByType };
      return uu(a.initialState, (O) => {
        for (let A in M) O.addCase(A, M[A]);
        for (let A of l.sliceMatchers) O.addMatcher(A.matcher, A.reducer);
        for (let A of x) O.addMatcher(A.matcher, A.reducer);
        d && O.addDefaultCase(d);
      });
    }
    const f = (R) => R,
      p = new Map();
    let m;
    function S(R, x) {
      return m || (m = v()), m(R, x);
    }
    function w() {
      return m || (m = v()), m.getInitialState();
    }
    function E(R, x = !1) {
      function d(O) {
        let A = O[R];
        return typeof A > "u" && x && (A = w()), A;
      }
      function M(O = f) {
        const A = Kn(p, x, () => new WeakMap());
        return Kn(A, O, () => {
          const j = {};
          for (const [Y, oe] of Object.entries(a.selectors ?? {}))
            j[Y] = Ru(oe, O, w, x);
          return j;
        });
      }
      return {
        reducerPath: R,
        getSelectors: M,
        get selectors() {
          return M(d);
        },
        selectSlice: d
      };
    }
    const C = {
      name: o,
      reducer: S,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: w,
      ...E(u),
      injectInto(R, { reducerPath: x, ...d } = {}) {
        const M = x ?? u;
        return (
          R.inject({ reducerPath: M, reducer: S }, d), { ...C, ...E(M, !0) }
        );
      }
    };
    return C;
  };
}
function Ru(e, t, r, n) {
  function a(o, ...u) {
    let s = t(o);
    return typeof s > "u" && n && (s = r()), e(s, ...u);
  }
  return (a.unwrapped = e), a;
}
var Ku = bu();
function _u() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            }
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: r
        };
      },
      asyncThunk: e
    }
  );
}
function Su({ type: e, reducerName: t, createNotation: r }, n, a) {
  let o, u;
  if ("reducer" in n) {
    if (r && !xu(n)) throw new Error(Oe(17));
    (o = n.reducer), (u = n.prepare);
  } else o = n;
  a.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, u ? mt(e, u) : mt(e));
}
function Cu(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function xu(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Pu({ type: e, reducerName: t }, r, n, a) {
  if (!a) throw new Error(Oe(18));
  const {
      payloadCreator: o,
      fulfilled: u,
      pending: s,
      rejected: i,
      settled: l,
      options: c
    } = r,
    v = a(e, o, c);
  n.exposeAction(t, v),
    u && n.addCase(v.fulfilled, u),
    s && n.addCase(v.pending, s),
    i && n.addCase(v.rejected, i),
    l && n.addMatcher(v.settled, l),
    n.exposeCaseReducer(t, {
      fulfilled: u || zt,
      pending: s || zt,
      rejected: i || zt,
      settled: l || zt
    });
}
function zt() {}
function Oe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
export {
  Dr as A,
  su as B,
  Se as C,
  Uu as D,
  Ol as E,
  du as F,
  Le as G,
  Iu as H,
  ku as I,
  vo as J,
  Ou as K,
  ba as L,
  zu as M,
  $u as N,
  Fu as O,
  Bu as P,
  Lu as Q,
  to as R,
  Aa as S,
  Mu as a,
  b,
  Du as c,
  Vu as d,
  Ku as e,
  Au as f,
  Za as g,
  Nu as h,
  xi as i,
  Oe as j,
  Hr as k,
  ju as l,
  mt as m,
  pu as n,
  Xl as o,
  Da as p,
  Wu as q,
  Mr as r,
  Pt as s,
  cu as t,
  Xe as u,
  fu as v,
  Ma as w,
  Hu as x,
  Dl as y,
  Yn as z
};
