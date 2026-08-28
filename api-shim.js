"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/sql.js-httpvfs/dist/index.js
  var require_dist = __commonJS({
    "node_modules/sql.js-httpvfs/dist/index.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
          var n = t();
          for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
        }
      }(exports, function() {
        return (() => {
          "use strict";
          var e = { 870: (e2, t2, n2) => {
            n2.r(t2), n2.d(t2, { createEndpoint: () => o, expose: () => l, proxy: () => v, proxyMarker: () => r, releaseProxy: () => a, transfer: () => y, transferHandlers: () => c, windowEndpoint: () => g, wrap: () => f });
            const r = Symbol("Comlink.proxy"), o = Symbol("Comlink.endpoint"), a = Symbol("Comlink.releaseProxy"), i = Symbol("Comlink.thrown"), s = (e3) => "object" == typeof e3 && null !== e3 || "function" == typeof e3, c = /* @__PURE__ */ new Map([["proxy", { canHandle: (e3) => s(e3) && e3[r], serialize(e3) {
              const { port1: t3, port2: n3 } = new MessageChannel();
              return l(e3, t3), [n3, [n3]];
            }, deserialize: (e3) => (e3.start(), f(e3)) }], ["throw", { canHandle: (e3) => s(e3) && i in e3, serialize({ value: e3 }) {
              let t3;
              return t3 = e3 instanceof Error ? { isError: true, value: { message: e3.message, name: e3.name, stack: e3.stack } } : { isError: false, value: e3 }, [t3, []];
            }, deserialize(e3) {
              if (e3.isError) throw Object.assign(new Error(e3.value.message), e3.value);
              throw e3.value;
            } }]]);
            function l(e3, t3 = self) {
              t3.addEventListener("message", function n3(r2) {
                if (!r2 || !r2.data) return;
                const { id: o2, type: a2, path: s2 } = Object.assign({ path: [] }, r2.data), c2 = (r2.data.argumentList || []).map(w);
                let f2;
                try {
                  const t4 = s2.slice(0, -1).reduce((e4, t5) => e4[t5], e3), n4 = s2.reduce((e4, t5) => e4[t5], e3);
                  switch (a2) {
                    case 0:
                      f2 = n4;
                      break;
                    case 1:
                      t4[s2.slice(-1)[0]] = w(r2.data.value), f2 = true;
                      break;
                    case 2:
                      f2 = n4.apply(t4, c2);
                      break;
                    case 3:
                      f2 = v(new n4(...c2));
                      break;
                    case 4:
                      {
                        const { port1: t5, port2: n5 } = new MessageChannel();
                        l(e3, n5), f2 = y(t5, [t5]);
                      }
                      break;
                    case 5:
                      f2 = void 0;
                  }
                } catch (e4) {
                  f2 = { value: e4, [i]: 0 };
                }
                Promise.resolve(f2).catch((e4) => ({ value: e4, [i]: 0 })).then((e4) => {
                  const [r3, i2] = b(e4);
                  t3.postMessage(Object.assign(Object.assign({}, r3), { id: o2 }), i2), 5 === a2 && (t3.removeEventListener("message", n3), u(t3));
                });
              }), t3.start && t3.start();
            }
            function u(e3) {
              (function(e4) {
                return "MessagePort" === e4.constructor.name;
              })(e3) && e3.close();
            }
            function f(e3, t3) {
              return d(e3, [], t3);
            }
            function p(e3) {
              if (e3) throw new Error("Proxy has been released and is not useable");
            }
            function d(e3, t3 = [], n3 = function() {
            }) {
              let r2 = false;
              const i2 = new Proxy(n3, { get(n4, o2) {
                if (p(r2), o2 === a) return () => E(e3, { type: 5, path: t3.map((e4) => e4.toString()) }).then(() => {
                  u(e3), r2 = true;
                });
                if ("then" === o2) {
                  if (0 === t3.length) return { then: () => i2 };
                  const n5 = E(e3, { type: 0, path: t3.map((e4) => e4.toString()) }).then(w);
                  return n5.then.bind(n5);
                }
                return d(e3, [...t3, o2]);
              }, set(n4, o2, a2) {
                p(r2);
                const [i3, s2] = b(a2);
                return E(e3, { type: 1, path: [...t3, o2].map((e4) => e4.toString()), value: i3 }, s2).then(w);
              }, apply(n4, a2, i3) {
                p(r2);
                const s2 = t3[t3.length - 1];
                if (s2 === o) return E(e3, { type: 4 }).then(w);
                if ("bind" === s2) return d(e3, t3.slice(0, -1));
                const [c2, l2] = m(i3);
                return E(e3, { type: 2, path: t3.map((e4) => e4.toString()), argumentList: c2 }, l2).then(w);
              }, construct(n4, o2) {
                p(r2);
                const [a2, i3] = m(o2);
                return E(e3, { type: 3, path: t3.map((e4) => e4.toString()), argumentList: a2 }, i3).then(w);
              } });
              return i2;
            }
            function m(e3) {
              const t3 = e3.map(b);
              return [t3.map((e4) => e4[0]), (n3 = t3.map((e4) => e4[1]), Array.prototype.concat.apply([], n3))];
              var n3;
            }
            const h = /* @__PURE__ */ new WeakMap();
            function y(e3, t3) {
              return h.set(e3, t3), e3;
            }
            function v(e3) {
              return Object.assign(e3, { [r]: true });
            }
            function g(e3, t3 = self, n3 = "*") {
              return { postMessage: (t4, r2) => e3.postMessage(t4, n3, r2), addEventListener: t3.addEventListener.bind(t3), removeEventListener: t3.removeEventListener.bind(t3) };
            }
            function b(e3) {
              for (const [t3, n3] of c) if (n3.canHandle(e3)) {
                const [r2, o2] = n3.serialize(e3);
                return [{ type: 3, name: t3, value: r2 }, o2];
              }
              return [{ type: 0, value: e3 }, h.get(e3) || []];
            }
            function w(e3) {
              switch (e3.type) {
                case 3:
                  return c.get(e3.name).deserialize(e3.value);
                case 0:
                  return e3.value;
              }
            }
            function E(e3, t3, n3) {
              return new Promise((r2) => {
                const o2 = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
                e3.addEventListener("message", function t4(n4) {
                  n4.data && n4.data.id && n4.data.id === o2 && (e3.removeEventListener("message", t4), r2(n4.data));
                }), e3.start && e3.start(), e3.postMessage(Object.assign({ id: o2 }, t3), n3);
              });
            }
          }, 162: function(e2, t2, n2) {
            var r = this && this.__createBinding || (Object.create ? function(e3, t3, n3, r2) {
              void 0 === r2 && (r2 = n3), Object.defineProperty(e3, r2, { enumerable: true, get: function() {
                return t3[n3];
              } });
            } : function(e3, t3, n3, r2) {
              void 0 === r2 && (r2 = n3), e3[r2] = t3[n3];
            }), o = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
              Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
            } : function(e3, t3) {
              e3.default = t3;
            }), a = this && this.__importStar || function(e3) {
              if (e3 && e3.__esModule) return e3;
              var t3 = {};
              if (null != e3) for (var n3 in e3) "default" !== n3 && Object.prototype.hasOwnProperty.call(e3, n3) && r(t3, e3, n3);
              return o(t3, e3), t3;
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.createDbWorker = void 0;
            const i = a(n2(870));
            async function s(e3) {
              if (e3.data && "eval" === e3.data.action) {
                const t3 = new Int32Array(e3.data.notify, 0, 2), n3 = new Uint8Array(e3.data.notify, 8);
                let r2;
                try {
                  r2 = { ok: await u(e3.data.request) };
                } catch (t4) {
                  console.error("worker request error", e3.data.request, t4), r2 = { err: String(t4) };
                }
                const o2 = new TextEncoder().encode(JSON.stringify(r2));
                n3.set(o2, 0), t3[1] = o2.length, Atomics.notify(t3, 0);
              }
            }
            function c(e3) {
              if ("BODY" === e3.tagName) return "body";
              const t3 = [];
              for (; e3.parentElement && "BODY" !== e3.tagName; ) {
                if (e3.id) {
                  t3.unshift("#" + e3.id);
                  break;
                }
                {
                  let n3 = 1, r2 = e3;
                  for (; r2.previousElementSibling; ) r2 = r2.previousElementSibling, n3++;
                  t3.unshift(e3.tagName.toLowerCase() + ":nth-child(" + n3 + ")");
                }
                e3 = e3.parentElement;
              }
              return t3.join(" > ");
            }
            function l(e3) {
              return Object.keys(e3);
            }
            async function u(e3) {
              if (console.log("dom vtable request", e3), "select" === e3.type) return [...document.querySelectorAll(e3.selector)].map((t3) => {
                const n3 = {};
                for (const r2 of e3.columns) "selector" === r2 ? n3.selector = c(t3) : "parent" === r2 ? t3.parentElement && (n3.parent = t3.parentElement ? c(t3.parentElement) : null) : "idx" === r2 || (n3[r2] = t3[r2]);
                return n3;
              });
              if ("insert" === e3.type) {
                if (!e3.value.parent) throw Error('"parent" column must be set when inserting');
                const t3 = document.querySelectorAll(e3.value.parent);
                if (0 === t3.length) throw Error(`Parent element ${e3.value.parent} could not be found`);
                if (t3.length > 1) throw Error(`Parent element ${e3.value.parent} ambiguous (${t3.length} results)`);
                const n3 = t3[0];
                if (!e3.value.tagName) throw Error("tagName must be set for inserting");
                const r2 = document.createElement(e3.value.tagName);
                for (const t4 of l(e3.value)) if (null !== e3.value[t4]) {
                  if ("tagName" === t4 || "parent" === t4) continue;
                  if ("idx" === t4 || "selector" === t4) throw Error(`${t4} can't be set`);
                  r2[t4] = e3.value[t4];
                }
                return n3.appendChild(r2), null;
              }
              if ("update" === e3.type) {
                const t3 = document.querySelector(e3.value.selector);
                if (!t3) throw Error(`Element ${e3.value.selector} not found!`);
                const n3 = [];
                for (const r2 of l(e3.value)) {
                  const o2 = e3.value[r2];
                  if ("parent" !== r2) {
                    if ("idx" !== r2 && "selector" !== r2 && o2 !== t3[r2]) {
                      if (console.log("SETTING ", r2, t3[r2], "->", o2), "tagName" === r2) throw Error("can't change tagName");
                      n3.push(r2);
                    }
                  } else if (o2 !== c(t3.parentElement)) {
                    const e4 = document.querySelectorAll(o2);
                    if (1 !== e4.length) throw Error(`Invalid target parent: found ${e4.length} matches`);
                    e4[0].appendChild(t3);
                  }
                }
                for (const r2 of n3) t3[r2] = e3.value[r2];
                return null;
              }
              throw Error(`unknown request ${e3.type}`);
            }
            i.transferHandlers.set("WORKERSQLPROXIES", { canHandle: (e3) => false, serialize(e3) {
              throw Error("no");
            }, deserialize: (e3) => (e3.start(), i.wrap(e3)) }), t2.createDbWorker = async function(e3, t3, n3, r2 = 1 / 0) {
              const o2 = new Worker(t3), a2 = i.wrap(o2), c2 = await a2.SplitFileHttpDatabase(n3, e3, void 0, r2);
              return o2.addEventListener("message", s), { db: c2, worker: a2, configs: e3 };
            };
          }, 432: function(e2, t2, n2) {
            var r = this && this.__createBinding || (Object.create ? function(e3, t3, n3, r2) {
              void 0 === r2 && (r2 = n3), Object.defineProperty(e3, r2, { enumerable: true, get: function() {
                return t3[n3];
              } });
            } : function(e3, t3, n3, r2) {
              void 0 === r2 && (r2 = n3), e3[r2] = t3[n3];
            }), o = this && this.__exportStar || function(e3, t3) {
              for (var n3 in e3) "default" === n3 || Object.prototype.hasOwnProperty.call(t3, n3) || r(t3, e3, n3);
            };
            Object.defineProperty(t2, "__esModule", { value: true }), o(n2(162), t2);
          } }, t = {};
          function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var a = t[r] = { exports: {} };
            return e[r].call(a.exports, a, a.exports, n), a.exports;
          }
          return n.d = (e2, t2) => {
            for (var r in t2) n.o(t2, r) && !n.o(e2, r) && Object.defineProperty(e2, r, { enumerable: true, get: t2[r] });
          }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n(432);
        })();
      });
    }
  });

  // web-static/api-shim.ts
  var import_sql = __toESM(require_dist(), 1);

  // src/enrich/estimate.ts
  var CALIBRATION = {
    measuredAt: "2026-08-09",
    capitalEmployeePairs: 2428,
    employeeRevenuePairs: 439
  };
  var EMPLOYEES_BY_CAPITAL = [
    [1e7, 14, 298],
    [5e7, 45, 1250],
    [3e8, 130, 698],
    [Number.POSITIVE_INFINITY, 266, 178]
  ];
  var REVENUE_PER_EMPLOYEE = 297e5;
  function estimateEmployees(capital) {
    if (capital === null || capital <= 0) return null;
    for (const [max, employees, n] of EMPLOYEES_BY_CAPITAL) {
      if (capital < max) {
        return {
          value: employees,
          basis: `\u8CC7\u672C\u91D1${formatYen(capital)}\u306E\u5E2F\u306E\u4E2D\u592E\u5024 (\u5B9F\u6E2C n=${n})`,
          compounded: false
        };
      }
    }
    return null;
  }
  function estimateRevenue(employees, employeesAreEstimated = false) {
    if (employees === null || employees <= 0) return null;
    return {
      value: employees * REVENUE_PER_EMPLOYEE,
      basis: employeesAreEstimated ? `\u63A8\u5B9A\u5F93\u696D\u54E1\u6570 ${employees} \u4EBA \xD7 \u4E00\u4EBA\u5F53\u305F\u308A\u58F2\u4E0A\u9AD8\u306E\u4E2D\u592E\u5024 (\u5B9F\u6E2C n=${CALIBRATION.employeeRevenuePairs})` : `\u5F93\u696D\u54E1\u6570 ${employees} \u4EBA \xD7 \u4E00\u4EBA\u5F53\u305F\u308A\u58F2\u4E0A\u9AD8\u306E\u4E2D\u592E\u5024 (\u5B9F\u6E2C n=${CALIBRATION.employeeRevenuePairs})`,
      compounded: employeesAreEstimated
    };
  }
  function scaleWithEstimates(capital, employees, revenue) {
    const emp = employees !== null && employees > 0 ? { value: employees, estimated: false } : (() => {
      const e = estimateEmployees(capital);
      return e ? { ...e, estimated: true } : null;
    })();
    const rev = revenue !== null && revenue > 0 ? { value: revenue, estimated: false } : (() => {
      if (!emp) return null;
      const r = estimateRevenue(emp.value, emp.estimated);
      return r ? { ...r, estimated: true } : null;
    })();
    return { employees: emp, revenue: rev };
  }
  function employeesSqlExpr(profile = "p") {
    const bands = EMPLOYEES_BY_CAPITAL.map(
      ([max, employees]) => Number.isFinite(max) ? `WHEN ${profile}.capital < ${max} THEN ${employees}` : `ELSE ${employees}`
    ).join(" ");
    return `COALESCE(${profile}.employees,
    CASE WHEN ${profile}.capital IS NULL OR ${profile}.capital <= 0 THEN NULL ${bands} END)`;
  }
  function revenueSqlExpr(profile = "p") {
    return `COALESCE(${profile}.revenue, (${employeesSqlExpr(profile)}) * ${REVENUE_PER_EMPLOYEE})`;
  }
  function formatYen(yen) {
    if (yen >= 1e8) {
      const oku = yen / 1e8;
      return `${oku >= 10 ? Math.round(oku) : oku.toFixed(1).replace(/\.0$/, "")}\u5104\u5186`;
    }
    if (yen >= 1e4) {
      const man = Math.round(yen / 1e4);
      return `${man.toLocaleString("ja-JP")}\u4E07\u5186`;
    }
    return `${yen.toLocaleString("ja-JP")}\u5186`;
  }

  // src/search/bands.ts
  var EMPLOYEE_BANDS = [
    { id: "emp:0-10", label: "10 \u540D\u672A\u6E80", min: null, max: 10 },
    { id: "emp:10-30", label: "10\u301C30 \u540D", min: 10, max: 30 },
    { id: "emp:30-50", label: "30\u301C50 \u540D", min: 30, max: 50 },
    { id: "emp:50-100", label: "50\u301C100 \u540D", min: 50, max: 100 },
    { id: "emp:100-", label: "100 \u540D\u4EE5\u4E0A", min: 100, max: null },
    { id: "emp:300-", label: "300 \u540D\u4EE5\u4E0A", min: 300, max: null }
  ];
  var CAPITAL_BANDS = [
    { id: "cap:100", label: "100 \u4E07\u5186\u4EE5\u4E0A", min: 1e6, max: null },
    { id: "cap:300", label: "300 \u4E07\u5186\u4EE5\u4E0A", min: 3e6, max: null },
    { id: "cap:500", label: "500 \u4E07\u5186\u4EE5\u4E0A", min: 5e6, max: null },
    { id: "cap:1000", label: "1000 \u4E07\u5186\u4EE5\u4E0A", min: 1e7, max: null },
    { id: "cap:3000", label: "3000 \u4E07\u5186\u4EE5\u4E0A", min: 3e7, max: null },
    { id: "cap:5000", label: "5000 \u4E07\u5186\u4EE5\u4E0A", min: 5e7, max: null },
    { id: "cap:10000", label: "1 \u5104\u5186\u4EE5\u4E0A", min: 1e8, max: null }
  ];
  var REVENUE_BANDS = [
    { id: "rev:0-1", label: "1 \u5104\u5186\u672A\u6E80", min: null, max: 1e8 },
    { id: "rev:1-3", label: "1\u301C3 \u5104\u5186", min: 1e8, max: 3e8 },
    { id: "rev:3-5", label: "3\u301C5 \u5104\u5186", min: 3e8, max: 5e8 },
    { id: "rev:5-10", label: "5\u301C10 \u5104\u5186", min: 5e8, max: 1e9 },
    { id: "rev:10-", label: "10 \u5104\u5186\u4EE5\u4E0A", min: 1e9, max: null },
    { id: "rev:30-50", label: "30\u301C50 \u5104\u5186", min: 3e9, max: 5e9 },
    { id: "rev:100-", label: "100 \u5104\u5186\u4EE5\u4E0A", min: 1e10, max: null }
  ];
  function findBand(bands, id) {
    return bands.find((b) => b.id === id);
  }

  // src/enrich/site/extract.ts
  var AT_MARK = String.raw`(?:\[\s*at\s*\]|\(\s*at\s*\)|＠|&#0*64;|&#x40;|\s+at\s+|＜at＞|%40)`;
  var DOT_MARK = String.raw`(?:\[\s*dot\s*\]|\(\s*dot\s*\)|&#0*46;|\s+dot\s+|\.)`;
  var OBFUSCATED_RE = new RegExp(
    String.raw`([a-zA-Z0-9._%+-]{1,64})\s*${AT_MARK}\s*` + String.raw`((?:[a-zA-Z0-9-]{1,63}\s*${DOT_MARK}\s*)+[a-zA-Z]{2,12})(?![a-zA-Z])`,
    "i"
  );
  var DOT_MARK_G = new RegExp(DOT_MARK, "gi");
  var SOCIAL_KEYS = [
    "facebook",
    "instagram",
    "x",
    "linkedin",
    "representativeLinkedin",
    "representativeFacebook",
    "representativeInstagram"
  ];
  function emptySocialLinks() {
    return {
      facebook: [],
      instagram: [],
      x: [],
      linkedin: [],
      representativeLinkedin: [],
      representativeFacebook: [],
      representativeInstagram: []
    };
  }
  function normalizeSocialLinks(value) {
    const out = emptySocialLinks();
    if (typeof value !== "object" || value === null) return out;
    const record = value;
    for (const key of SOCIAL_KEYS) {
      const v = record[key];
      if (typeof v === "string" && v.length > 0) out[key] = [v];
      else if (Array.isArray(v)) out[key] = v.filter((x) => typeof x === "string" && x.length > 0);
    }
    return out;
  }
  var NOT_AN_ACCOUNT = new RegExp(
    [
      "/tr\\b",
      "/sharer",
      "/share\\b",
      "/dialog/",
      "/plugins/",
      "/2008/fbml",
      "/intent/",
      "/pin/create",
      "widgets\\.js",
      "/embed",
      "/oembed",
      "/p/",
      "/reel/",
      "/reels/",
      "/explore/",
      "/accounts/",
      "/stories/",
      "/hashtag/",
      "/search",
      "/i/",
      "/home\\b",
      "/login",
      "/help\\b",
      "/shareArticle",
      "/sharing/",
      "/pub/dir/",
      "/feed/",
      "wix-",
      "squarespace",
      "shopify",
      "wordpress"
    ].join("|"),
    "i"
  );

  // src/search/query.ts
  var SELECT_COLUMNS = `
  c.corporate_number, c.name, c.corp_form, c.pref_name, c.city_name,
  c.address_full, c.post_code, c.kind, c.assignment_date,
  p.industry_code, p.industry_name, p.capital, p.employees, p.revenue,
  p.website_url, p.contact_form_url, p.contact_email, p.contact_tel, p.hiring, p.hiring_roles,
  p.representative, p.business_evidence, p.field_sources, p.social_links
`;
  var fromPlain = (hint = "") => `
  FROM corporations c${hint}
  LEFT JOIN company_profiles p ON p.corporate_number = c.corporate_number`;
  var fromCorpOnly = (hint = "") => `FROM corporations c${hint}`;
  var BLOCKED_EXISTS = `
  EXISTS (SELECT 1 FROM suppressions s WHERE s.corporate_number = c.corporate_number)
  OR EXISTS (SELECT 1 FROM company_profiles pr
              WHERE pr.corporate_number = c.corporate_number AND pr.solicitation_refused = 1)`;
  var FROM_PLAIN = fromPlain();
  var FROM_CORP_ONLY = fromCorpOnly();
  function listIndexHint(filter, options) {
    const orderBy = options.orderBy ?? "fastest";
    if (orderBy !== "name" && orderBy !== "fastest") return "";
    if (filter.activeOnly === false) return "";
    if (usesProfile(filter)) return "";
    if ((filter.keyword?.normalize("NFKC").trim().length ?? 0) >= 3) return "";
    if (filter.prefCodes?.length === 1) return " INDEXED BY idx_corp_active_pref_name";
    return " INDEXED BY idx_corp_active_name";
  }
  var FROM_FTS = `
  FROM corporations_fts f
  CROSS JOIN corporations c ON c.id = f.rowid
  LEFT JOIN company_profiles p ON p.corporate_number = c.corporate_number`;
  var FROM_FTS_CORP_ONLY = `
  FROM corporations_fts f
  CROSS JOIN corporations c ON c.id = f.rowid`;
  function placeholders(n) {
    return new Array(n).fill("?").join(", ");
  }
  function prefixUpperBound(prefix) {
    if (prefix === "") return "\uFFFF";
    const head = prefix.slice(0, -1);
    const last = prefix.charCodeAt(prefix.length - 1);
    return head + String.fromCharCode(last + 1);
  }
  function usesProfile(filter) {
    return Boolean(
      filter.industryCodes?.length || filter.industryMinConfidence !== void 0 || filter.capitalMin !== void 0 || filter.capitalMax !== void 0 || filter.employeesMin !== void 0 || filter.employeesMax !== void 0 || filter.revenueMin !== void 0 || filter.revenueMax !== void 0 || filter.hasWebsite || filter.hasContactForm || filter.hasEmail || filter.reachable || filter.hasRepresentative || (filter.employeeBands?.length ?? 0) > 0 || (filter.capitalBands?.length ?? 0) > 0 || (filter.revenueBands?.length ?? 0) > 0 || filter.hiring || filter.hiringRoles?.length
    );
  }
  function buildWhere(filter, forCount = false, indexHint = "") {
    const clauses = [];
    const params = [];
    const joinProfile = !forCount || usesProfile(filter);
    let from = joinProfile ? fromPlain(indexHint) : fromCorpOnly(indexHint);
    const keyword = filter.keyword?.normalize("NFKC").trim();
    if (keyword) {
      if (keyword.length >= 3) {
        from = joinProfile ? FROM_FTS : FROM_FTS_CORP_ONLY;
        clauses.push("corporations_fts MATCH ?");
        params.push(`"${keyword.replace(/"/g, '""')}"`);
      } else {
        clauses.push("c.name_normalized LIKE ?");
        params.push(`%${keyword}%`);
      }
    }
    const activeOnly = filter.activeOnly ?? true;
    const excludeRefused = filter.excludeRefused ?? true;
    if (activeOnly) clauses.push("c.is_active = 1");
    if (excludeRefused) {
      clauses.push(`NOT (${BLOCKED_EXISTS})`);
    }
    if (filter.prefCodes?.length) {
      clauses.push(`c.pref_code IN (${placeholders(filter.prefCodes.length)})`);
      params.push(...filter.prefCodes);
    }
    if (filter.cityKeys?.length) {
      clauses.push(`(c.pref_code || c.city_code) IN (${placeholders(filter.cityKeys.length)})`);
      params.push(...filter.cityKeys);
    }
    if (filter.kinds?.length) {
      clauses.push(`c.kind IN (${placeholders(filter.kinds.length)})`);
      params.push(...filter.kinds);
    }
    if (filter.corpForms?.length) {
      clauses.push(`c.corp_form IN (${placeholders(filter.corpForms.length)})`);
      params.push(...filter.corpForms);
    }
    if (filter.industryCodes?.length) {
      const ors = filter.industryCodes.map(() => "(p.industry_code >= ? AND p.industry_code < ?)").join(" OR ");
      clauses.push(`(${ors})`);
      for (const code of filter.industryCodes) {
        params.push(code, prefixUpperBound(code));
      }
    }
    if (filter.industryMinConfidence !== void 0) {
      clauses.push("p.industry_confidence >= ?");
      params.push(filter.industryMinConfidence);
    }
    if (filter.capitalMin !== void 0) {
      clauses.push("p.capital >= ?");
      params.push(filter.capitalMin);
    }
    if (filter.capitalMax !== void 0) {
      clauses.push("p.capital <= ?");
      params.push(filter.capitalMax);
    }
    if (filter.employeesMin !== void 0) {
      clauses.push("p.employees >= ?");
      params.push(filter.employeesMin);
    }
    if (filter.employeesMax !== void 0) {
      clauses.push("p.employees <= ?");
      params.push(filter.employeesMax);
    }
    if (filter.revenueMin !== void 0) {
      clauses.push("p.revenue >= ?");
      params.push(filter.revenueMin);
    }
    if (filter.revenueMax !== void 0) {
      clauses.push("p.revenue <= ?");
      params.push(filter.revenueMax);
    }
    if (filter.assignedFrom) {
      clauses.push("c.assignment_date >= ?");
      params.push(filter.assignedFrom);
    }
    if (filter.assignedTo) {
      clauses.push("c.assignment_date <= ?");
      params.push(filter.assignedTo);
    }
    if (filter.hiring) clauses.push("p.hiring = 1");
    if (filter.hiringRoles?.length) {
      const ors = filter.hiringRoles.map(() => "p.hiring_roles LIKE ?").join(" OR ");
      clauses.push(`(${ors})`);
      params.push(...filter.hiringRoles.map((r) => `%${r}%`));
    }
    if (filter.hasWebsite) clauses.push("p.website_url IS NOT NULL AND p.website_url <> ''");
    if (filter.hasContactForm) clauses.push("p.contact_form_url IS NOT NULL AND p.contact_form_url <> ''");
    if (filter.hasEmail) clauses.push("p.contact_email IS NOT NULL AND p.contact_email <> ''");
    if (filter.reachable) {
      clauses.push(
        "((p.contact_email IS NOT NULL AND p.contact_email <> '') OR (p.contact_form_url IS NOT NULL AND p.contact_form_url <> ''))"
      );
    }
    if (filter.hasRepresentative) clauses.push("p.representative IS NOT NULL AND p.representative <> ''");
    const bandClause = (bands, expr, table) => {
      if (!bands || bands.length === 0) return;
      const parts = [];
      for (const id of bands) {
        const band = findBand(table, id);
        if (!band) continue;
        const conds = [`${expr} IS NOT NULL`];
        if (band.min !== null) conds.push(`${expr} >= ${band.min}`);
        if (band.max !== null) conds.push(`${expr} < ${band.max}`);
        parts.push(`(${conds.join(" AND ")})`);
      }
      if (parts.length > 0) clauses.push(`(${parts.join(" OR ")})`);
    };
    bandClause(filter.employeeBands, employeesSqlExpr("p"), EMPLOYEE_BANDS);
    bandClause(filter.capitalBands, "p.capital", CAPITAL_BANDS);
    bandClause(filter.revenueBands, revenueSqlExpr("p"), REVENUE_BANDS);
    return {
      from,
      sql: clauses.length > 0 ? `WHERE ${clauses.join(" AND ")}` : "",
      params
    };
  }
  function buildSelectSql(filter, options = {}, columns = SELECT_COLUMNS) {
    const where = buildWhere(filter, false, listIndexHint(filter, options));
    return {
      sql: `SELECT ${columns} ${where.from} ${where.sql} ${(options.orderBy ?? "fastest") === "fastest" ? fastestOrder(filter) : orderClause(options.orderBy)}`,
      params: where.params
    };
  }
  function fastestOrder(filter) {
    return usesProfile(filter) ? "ORDER BY c.corporate_number" : "ORDER BY c.name_core";
  }
  function orderClause(orderBy) {
    switch (orderBy) {
      case "assigned_desc":
        return "ORDER BY c.assignment_date DESC";
      case "capital_desc":
        return "ORDER BY p.capital DESC NULLS LAST";
      case "employees_desc":
        return "ORDER BY p.employees DESC NULLS LAST";
      case "name":
      default:
        return "ORDER BY c.name_core";
    }
  }
  var EXPORT_HEADER = [
    "\u4F01\u696D\u540D",
    "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    "\u4EE3\u8868\u8005\u540D",
    "\u96FB\u8A71\u756A\u53F7",
    "\u5F93\u696D\u54E1\u6570",
    "\u5F93\u696D\u54E1\u6570\u306E\u5225",
    "\u5E74\u5546",
    "\u5E74\u5546\u306E\u5225",
    "\u516C\u5F0FHP",
    "\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0URL",
    "\u696D\u7A2E",
    "\u4E8B\u696D\u5185\u5BB9",
    "\u4F4F\u6240",
    "\u90F5\u4FBF\u756A\u53F7",
    "\u90FD\u9053\u5E9C\u770C",
    "\u5E02\u533A\u753A\u6751",
    "\u8CC7\u672C\u91D1",
    "\u4EE3\u8868\u8005LinkedIn",
    "\u4EE3\u8868\u8005Facebook",
    "\u4EE3\u8868\u8005Instagram",
    "\u4F1A\u793ELinkedIn",
    "\u4F1A\u793EFacebook",
    "\u4F1A\u793EInstagram",
    "\u4F1A\u793EX",
    "\u63A1\u7528\u4E2D",
    "\u52DF\u96C6\u8077\u7A2E",
    "\u6CD5\u4EBA\u683C",
    "\u6CD5\u4EBA\u756A\u53F7",
    "\u51FA\u5178"
  ];
  function csvEscape(v) {
    if (v === null || v === void 0) return "";
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }
  var LABEL_HEADER = ["\u90F5\u4FBF\u756A\u53F7", "\u4F4F\u6240", "\u4F1A\u793E\u540D", "\u5B9B\u540D", "\u6CD5\u4EBA\u756A\u53F7"];
  function* toLabelCsvLines(rows, honorific = "\u5FA1\u4E2D") {
    yield LABEL_HEADER.join(",");
    for (const r of rows) {
      const postal = r.post_code ? `${r.post_code.slice(0, 3)}-${r.post_code.slice(3)}` : "";
      yield [postal, r.address_full, r.name, `${r.name} ${honorific}`, r.corporate_number].map(csvEscape).join(",");
    }
  }
  function joinUrls(urls) {
    return urls.join("\n");
  }
  function* toCsvLines(rows) {
    yield EXPORT_HEADER.join(",");
    for (const r of rows) {
      const scale = scaleWithEstimates(r.capital, r.employees, r.revenue);
      let sns = emptySocialLinks();
      if (r.social_links) {
        try {
          sns = normalizeSocialLinks(JSON.parse(r.social_links));
        } catch {
        }
      }
      yield [
        r.name,
        r.contact_email,
        r.representative,
        r.contact_tel,
        scale.employees?.value ?? "",
        scale.employees ? scale.employees.estimated ? "\u63A8\u5B9A" : "\u5B9F\u6E2C" : "",
        scale.revenue?.value ?? "",
        scale.revenue ? scale.revenue.estimated ? "\u63A8\u5B9A" : "\u5B9F\u6E2C" : "",
        r.website_url,
        r.contact_form_url,
        r.industry_name,
        r.business_evidence,
        r.address_full,
        r.post_code,
        r.pref_name,
        r.city_name,
        r.capital,
        joinUrls(sns.representativeLinkedin),
        joinUrls(sns.representativeFacebook),
        joinUrls(sns.representativeInstagram),
        joinUrls(sns.linkedin),
        joinUrls(sns.facebook),
        joinUrls(sns.instagram),
        joinUrls(sns.x),
        r.hiring === 1 ? "\u63A1\u7528\u4E2D" : "",
        r.hiring_roles,
        r.corp_form,
        r.corporate_number,
        r.field_sources ?? ""
      ].map(csvEscape).join(",");
    }
  }

  // src/web/params.ts
  function filterFromParams(q) {
    const filter = {
      activeOnly: q.get("includeInactive") !== "1",
      excludeRefused: q.get("includeRefused") !== "1"
    };
    const list = (k) => {
      const v = q.getAll(k).flatMap((s) => s.split(",")).map((s) => s.trim()).filter(Boolean);
      return v.length > 0 ? v : void 0;
    };
    const num = (k) => {
      const v = q.get(k);
      if (v === null || v.trim() === "") return void 0;
      const n = Number(v);
      return Number.isFinite(n) ? n : void 0;
    };
    const keyword = q.get("keyword")?.trim();
    if (keyword) filter.keyword = keyword;
    const pref = list("pref");
    if (pref) filter.prefCodes = pref;
    const city = list("city");
    if (city) {
      const keys = city.flatMap((v) => {
        if (v.length === 5) return [v];
        if (v.length === 3 && pref?.length === 1) return [`${pref[0]}${v}`];
        return [];
      });
      filter.cityKeys = keys.length > 0 ? keys : ["-"];
    }
    const kind = list("kind")?.map(Number).filter(Number.isFinite);
    if (kind?.length) filter.kinds = kind;
    const form = list("form");
    if (form) filter.corpForms = form;
    const industry = list("industry");
    if (industry) filter.industryCodes = industry;
    const conf = num("industryConfidence");
    if (conf !== void 0 && industry) filter.industryMinConfidence = conf;
    for (const [key, set] of [
      ["capitalMin", (v) => filter.capitalMin = v],
      ["capitalMax", (v) => filter.capitalMax = v],
      ["employeesMin", (v) => filter.employeesMin = v],
      ["employeesMax", (v) => filter.employeesMax = v],
      ["revenueMin", (v) => filter.revenueMin = v],
      ["revenueMax", (v) => filter.revenueMax = v]
    ]) {
      const v = num(key);
      if (v !== void 0) set(v);
    }
    if (q.get("hiring") === "1") filter.hiring = true;
    const hiringRoles = list("hiringRole");
    if (hiringRoles) filter.hiringRoles = hiringRoles;
    const assignedFrom = q.get("assignedFrom")?.trim();
    if (assignedFrom) filter.assignedFrom = assignedFrom;
    const assignedTo = q.get("assignedTo")?.trim();
    if (assignedTo) filter.assignedTo = assignedTo;
    if (q.get("hasWebsite") === "1") filter.hasWebsite = true;
    if (q.get("hasContactForm") === "1") filter.hasContactForm = true;
    if (q.get("hasEmail") === "1") filter.hasEmail = true;
    if (q.get("reachable") === "1") filter.reachable = true;
    if (q.get("hasRepresentative") === "1") filter.hasRepresentative = true;
    const employeeBands = list("employeeBand");
    if (employeeBands) filter.employeeBands = employeeBands;
    const capitalBands = list("capitalBand");
    if (capitalBands) filter.capitalBands = capitalBands;
    const revenueBands = list("revenueBand");
    if (revenueBands) filter.revenueBands = revenueBands;
    return filter;
  }
  function optionsFromParams(q) {
    const opts = {};
    const order = q.get("order");
    if (order === "fastest" || order === "name" || order === "assigned_desc" || order === "capital_desc" || order === "employees_desc") {
      opts.orderBy = order;
    }
    return opts;
  }

  // web-static/api-shim.ts
  var here = (name) => new URL(name, document.baseURI).href;
  var dbp = null;
  function db() {
    dbp ?? (dbp = (0, import_sql.createDbWorker)(
      [{ from: "jsonconfig", configUrl: here("db/config.json") }],
      here("sqlite.worker.js"),
      here("sql-wasm.wasm")
    ));
    return dbp;
  }
  async function ask(sql, params) {
    const w = await db();
    return await w.db.query(sql, params);
  }
  var front = null;
  function frontMatter() {
    front ?? (front = fetch(here("meta.json")).then((r) => r.json()));
    return front;
  }
  function precomputedScope(f) {
    const untouched = [
      f.keyword,
      f.kinds,
      f.corpForms,
      f.industryCodes,
      f.industryMinConfidence,
      f.capitalMin,
      f.capitalMax,
      f.employeesMin,
      f.employeesMax,
      f.revenueMin,
      f.revenueMax,
      f.assignedFrom,
      f.assignedTo,
      f.hiring,
      f.hiringRoles,
      f.hasWebsite,
      f.hasContactForm,
      f.hasEmail,
      f.reachable,
      f.hasRepresentative,
      f.employeeBands,
      f.capitalBands,
      f.revenueBands
    ].every((v) => v === void 0 || v === false || Array.isArray(v) && v.length === 0);
    if (!untouched) return null;
    if (f.activeOnly === false) return null;
    const prefs = f.prefCodes ?? [];
    const cities = f.cityKeys ?? [];
    if (cities.length === 1 && cities[0] !== "-") return `city:${cities[0]}`;
    if (cities.length > 0) return null;
    if (prefs.length === 1) return `pref:${prefs[0]}`;
    if (prefs.length > 0) return null;
    return "all";
  }
  var refusedFlag = (f) => f.excludeRefused ?? true ? 0 : 1;
  function nearby(sql) {
    const before = sql;
    const out = sql.replace(
      /JOIN company_profiles p ON p\.corporate_number = c\.corporate_number/g,
      "JOIN company_profiles p ON p.id = c.id"
    ).replace(
      /FROM company_profiles pr\s+WHERE pr\.corporate_number = c\.corporate_number/g,
      "FROM company_profiles pr WHERE pr.id = c.id"
    );
    if (/\b(p|pr)\.corporate_number = c\.corporate_number/.test(out)) {
      throw new Error("\u7D50\u5408\u306E\u66F8\u304D\u63DB\u3048\u304C\u5F53\u305F\u3063\u3066\u3044\u307E\u305B\u3093 (query.ts \u304C\u5909\u308F\u3063\u305F\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059)");
    }
    if (before.includes("company_profiles") && before === out) {
      throw new Error("\u7D50\u5408\u306E\u66F8\u304D\u63DB\u3048\u304C 1 \u3064\u3082\u5F53\u305F\u308A\u307E\u305B\u3093\u3067\u3057\u305F");
    }
    return out;
  }
  async function apiSearch(q) {
    const limit = Math.min(Number(q.get("limit") ?? 50) || 50, 500);
    const offset = Math.max(Number(q.get("offset") ?? 0) || 0, 0);
    const started = Date.now();
    const built = buildSelectSql(filterFromParams(q), { ...optionsFromParams(q), limit, offset });
    const rows = await ask(nearby(`${built.sql} LIMIT ? OFFSET ?`), [...built.params, limit, offset]);
    return {
      // 実測値が無い先には推定を添える。実測か推定かは必ず区別して返す (本体と同じ)
      rows: rows.map((r) => ({ ...r, scale: scaleWithEstimates(r.capital, r.employees, r.revenue) })),
      offset,
      limit,
      elapsedMs: Date.now() - started
    };
  }
  async function apiCount(q) {
    const started = Date.now();
    const filter = filterFromParams(q);
    const scope = precomputedScope(filter);
    if (scope) {
      const rows2 = await ask(
        "SELECT n FROM totals WHERE scope = ? AND refused = ?",
        [scope, refusedFlag(filter)]
      );
      return { total: rows2[0]?.n ?? 0, elapsedMs: Date.now() - started, precomputed: true };
    }
    const where = buildWhere(filter, true);
    const rows = await ask(
      nearby(`SELECT COUNT(*) AS n ${where.from} ${where.sql}`),
      where.params
    );
    return { total: rows[0]?.n ?? 0, elapsedMs: Date.now() - started };
  }
  async function apiBreakdown(q) {
    const dimension = q.get("dimension") ?? "employees";
    const allowed = ["employees", "revenue", "capital", "city", "pref", "industry"];
    if (!allowed.includes(dimension)) return { error: `\u77E5\u3089\u306A\u3044\u5207\u308A\u53E3: ${dimension}` };
    const started = Date.now();
    const filter = filterFromParams(q);
    const scope = precomputedScope(filter);
    if (scope) {
      const rows = await ask(
        `SELECT slice_id, slice_label, n FROM summary
        WHERE scope = ? AND refused = ? AND dimension = ?
        ORDER BY n DESC LIMIT 60`,
        [scope, refusedFlag(filter), dimension]
      );
      return {
        dimension,
        slices: rows.map((r) => ({ id: String(r.slice_id), label: r.slice_label, count: r.n })),
        elapsedMs: Date.now() - started,
        precomputed: true
      };
    }
    return { dimension, slices: await liveBreakdown(filter, dimension), elapsedMs: Date.now() - started };
  }
  async function liveBreakdown(filter, dimension) {
    const where = buildWhere(filter, false);
    const banded = {
      employees: { bands: EMPLOYEE_BANDS, expr: employeesSqlExpr("p") },
      revenue: { bands: REVENUE_BANDS, expr: revenueSqlExpr("p") },
      capital: { bands: CAPITAL_BANDS, expr: "p.capital" }
    };
    const b = banded[dimension];
    if (b) {
      const cols = b.bands.map((band, i) => {
        const parts = [`${b.expr} IS NOT NULL`];
        if (band.min !== null) parts.push(`${b.expr} >= ${band.min}`);
        if (band.max !== null) parts.push(`${b.expr} < ${band.max}`);
        return `SUM(CASE WHEN ${parts.join(" AND ")} THEN 1 ELSE 0 END) AS b${i}`;
      });
      const row = (await ask(
        nearby(`SELECT ${cols.join(", ")} ${where.from} ${where.sql}`),
        where.params
      ))[0] ?? {};
      return b.bands.map((band, i) => ({ id: band.id, label: band.label, count: Number(row[`b${i}`] ?? 0) }));
    }
    const group = {
      city: {
        key: "c.pref_code || c.city_code",
        label: "c.pref_name || c.city_name",
        present: "c.city_code IS NOT NULL AND c.city_code <> ''"
      },
      pref: {
        key: "c.pref_code",
        label: "c.pref_name",
        present: "c.pref_code IS NOT NULL AND c.pref_code <> ''"
      },
      industry: {
        key: "p.industry_code",
        label: "p.industry_name",
        present: "p.industry_code IS NOT NULL AND p.industry_code <> ''"
      }
    };
    const g = group[dimension];
    const rows = await ask(
      nearby(`SELECT ${g.key} AS slice_id, ${g.label} AS slice_label, COUNT(*) AS n
     ${where.from} ${where.sql} AND ${g.present}
      GROUP BY ${g.key} ORDER BY n DESC LIMIT 60`),
      where.params
    );
    return rows.map((r) => ({ id: String(r.slice_id), label: r.slice_label, count: r.n }));
  }
  var EXPORT_CAP = 1e5;
  var EXPORT_PAGE = 5e3;
  async function exportCsv(q) {
    const labels = q.get("labels") === "1";
    const filter = filterFromParams(q);
    const options = optionsFromParams(q);
    const { total } = await apiCount(q);
    if (total > EXPORT_CAP) {
      const ok = confirm(
        `\u6761\u4EF6\u306B\u5408\u3046\u306E\u306F ${total.toLocaleString("ja-JP")} \u4EF6\u3067\u3059\u3002
\u3053\u306E\u753B\u9762\u304B\u3089\u4E00\u5EA6\u306B\u66F8\u304D\u51FA\u305B\u308B\u306E\u306F ${EXPORT_CAP.toLocaleString("ja-JP")} \u4EF6\u307E\u3067\u3067\u3059\u3002

\u5148\u982D ${EXPORT_CAP.toLocaleString("ja-JP")} \u4EF6\u3060\u3051\u3092\u66F8\u304D\u51FA\u3057\u307E\u3059\u304B?
(\u5168\u90E8\u304C\u8981\u308B\u3068\u304D\u306F\u3001\u6761\u4EF6\u3092\u5206\u3051\u3066\u4F55\u56DE\u304B\u306B\u5206\u3051\u3066\u304F\u3060\u3055\u3044)`
      );
      if (!ok) return;
    }
    const rows = [];
    const want = Math.min(total, EXPORT_CAP);
    while (rows.length < want) {
      const built = buildSelectSql(filter, options);
      const page = await ask(
        nearby(`${built.sql} LIMIT ? OFFSET ?`),
        [...built.params, EXPORT_PAGE, rows.length]
      );
      if (page.length === 0) break;
      rows.push(...page);
    }
    const lines = labels ? toLabelCsvLines(rows.slice(0, want)) : toCsvLines(rows.slice(0, want));
    const blob = new Blob(["\uFEFF", ...[...lines].map((l) => l + "\n")], { type: "text/csv;charset=utf-8" });
    const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${labels ? "labels" : "companies"}-${stamp}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e4);
  }
  var json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8" } });
  async function route(path, q) {
    switch (path) {
      case "/api/meta":
        return json((await frontMatter()).meta);
      case "/api/progress":
        return json((await frontMatter()).progress);
      case "/api/outreach-summary":
        return json((await frontMatter()).outreach);
      case "/api/cities": {
        const pref = q.get("pref");
        return json((await frontMatter()).cities[pref ?? ""] ?? []);
      }
      case "/api/search":
        return json(await apiSearch(q));
      case "/api/count":
        return json(await apiCount(q));
      case "/api/breakdown":
        return json(await apiBreakdown(q));
      default:
        return json({ error: "not found" }, 404);
    }
  }
  var nativeFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const raw = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (!raw.startsWith("/api/")) return nativeFetch(input, init);
    const url = new URL(raw, location.origin);
    try {
      return await route(url.pathname, url.searchParams);
    } catch (e) {
      console.error("[\u9759\u7684\u7248] \u554F\u3044\u5408\u308F\u305B\u306B\u5931\u6557\u3057\u307E\u3057\u305F", e);
      return json({ error: String(e?.message ?? e) }, 500);
    }
  };
  window.__eigyoExport = (queryString) => exportCsv(new URLSearchParams(queryString)).catch((e) => {
    console.error("[\u9759\u7684\u7248] \u66F8\u304D\u51FA\u3057\u306B\u5931\u6557\u3057\u307E\u3057\u305F", e);
    alert("\u66F8\u304D\u51FA\u3057\u306B\u5931\u6557\u3057\u307E\u3057\u305F: " + String(e?.message ?? e));
  });
  window.__eigyoStats = async () => (await db()).worker.getStats();
  db().then(
    () => document.documentElement.setAttribute("data-eigyo-db", "ready"),
    (e) => {
      document.documentElement.setAttribute("data-eigyo-db", "failed");
      console.error("[\u9759\u7684\u7248] \u30C7\u30FC\u30BF\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F", e);
    }
  );
})();
