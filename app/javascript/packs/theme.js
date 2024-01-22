!(function () {
  "use strict";
  var e, t, i, n;
  (e = void 0),
    (t = function () {
      let e = new Map(),
        t = {
          set(t, i, n) {
            e.has(t) || e.set(t, new Map());
            let s = e.get(t);
            if (!s.has(i) && 0 !== s.size) {
              console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(s.keys())[0]
                }.`
              );
              return;
            }
            s.set(i, n);
          },
          get: (t, i) => (e.has(t) && e.get(t).get(i)) || null,
          remove(t, i) {
            if (!e.has(t)) return;
            let n = e.get(t);
            n.delete(i), 0 === n.size && e.delete(t);
          },
        },
        i = "transitionend",
        n = (e) => (
          e &&
            window.CSS &&
            window.CSS.escape &&
            (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
          e
        ),
        s = (e) =>
          null == e
            ? `${e}`
            : Object.prototype.toString
                .call(e)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase(),
        r = (e) => {
          do e += Math.floor(1e6 * Math.random());
          while (document.getElementById(e));
          return e;
        },
        o = (e) => {
          if (!e) return 0;
          let { transitionDuration: t, transitionDelay: i } =
              window.getComputedStyle(e),
            n = Number.parseFloat(t),
            s = Number.parseFloat(i);
          return n || s
            ? ((t = t.split(",")[0]),
              (i = i.split(",")[0]),
              (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
            : 0;
        },
        a = (e) => {
          e.dispatchEvent(new Event(i));
        },
        l = (e) =>
          !!e &&
          "object" == typeof e &&
          (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        c = (e) =>
          l(e)
            ? e.jquery
              ? e[0]
              : e
            : "string" == typeof e && e.length > 0
            ? document.querySelector(n(e))
            : null,
        u = (e) => {
          if (!l(e) || 0 === e.getClientRects().length) return !1;
          let t =
              "visible" === getComputedStyle(e).getPropertyValue("visibility"),
            i = e.closest("details:not([open])");
          if (!i) return t;
          if (i !== e) {
            let n = e.closest("summary");
            if ((n && n.parentNode !== i) || null === n) return !1;
          }
          return t;
        },
        h = (e) =>
          !!(
            !e ||
            e.nodeType !== Node.ELEMENT_NODE ||
            e.classList.contains("disabled")
          ) ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute("disabled") &&
              "false" !== e.getAttribute("disabled")),
        d = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            let t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? d(e.parentNode)
            : null;
        },
        f = () => {},
        p = (e) => {
          e.offsetHeight;
        },
        g = () =>
          window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
        m = [],
        v = (e) => {
          "loading" === document.readyState
            ? (m.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (let e of m) e();
                }),
              m.push(e))
            : e();
        },
        b = () => "rtl" === document.documentElement.dir,
        y = (e) => {
          v(() => {
            let t = g();
            if (t) {
              let i = e.NAME,
                n = t.fn[i];
              (t.fn[i] = e.jQueryInterface),
                (t.fn[i].Constructor = e),
                (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
            }
          });
        },
        $ = (e, t = [], i = e) => ("function" == typeof e ? e(...t) : i),
        w = (e, t, n = !0) => {
          if (!n) {
            $(e);
            return;
          }
          let s = o(t) + 5,
            r = !1,
            l = ({ target: n }) => {
              n === t && ((r = !0), t.removeEventListener(i, l), $(e));
            };
          t.addEventListener(i, l),
            setTimeout(() => {
              r || a(t);
            }, s);
        },
        A = (e, t, i, n) => {
          let s = e.length,
            r = e.indexOf(t);
          return -1 === r
            ? !i && n
              ? e[s - 1]
              : e[0]
            : ((r += i ? 1 : -1),
              n && (r = (r + s) % s),
              e[Math.max(0, Math.min(r, s - 1))]);
        },
        E = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        C = /::\d+$/,
        T = {},
        S = 1,
        L = { mouseenter: "mouseover", mouseleave: "mouseout" },
        k = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function _(e, t) {
        return (t && `${t}::${S++}`) || e.uidEvent || S++;
      }
      function O(e) {
        let t = _(e);
        return (e.uidEvent = t), (T[t] = T[t] || {}), T[t];
      }
      function D(e, t, i = null) {
        return Object.values(e).find(
          (e) => e.callable === t && e.delegationSelector === i
        );
      }
      function I(e, t, i) {
        let n = "string" == typeof t,
          s = q(e);
        return k.has(s) || (s = e), [n, n ? i : t || i, s];
      }
      function P(e, t, i, n, s) {
        var r, o, a, l, c, u;
        if ("string" != typeof t || !e) return;
        let [h, d, f] = I(t, i, n);
        t in L &&
          (d =
            ((r = d),
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return r.call(this, e);
            }));
        let p = O(e),
          g = p[f] || (p[f] = {}),
          m = D(g, d, h ? i : null);
        if (m) {
          m.oneOff = m.oneOff && s;
          return;
        }
        let v = _(d, t.replace(E, "")),
          b = h
            ? ((o = e),
              (a = i),
              (l = d),
              function e(t) {
                let i = o.querySelectorAll(a);
                for (let { target: n } = t; n && n !== this; n = n.parentNode)
                  for (let s of i)
                    if (s === n)
                      return (
                        H(t, { delegateTarget: n }),
                        e.oneOff && F.off(o, t.type, a, l),
                        l.apply(n, [t])
                      );
              })
            : ((c = e),
              (u = d),
              function e(t) {
                return (
                  H(t, { delegateTarget: c }),
                  e.oneOff && F.off(c, t.type, u),
                  u.apply(c, [t])
                );
              });
        (b.delegationSelector = h ? i : null),
          (b.callable = d),
          (b.oneOff = s),
          (b.uidEvent = v),
          (g[v] = b),
          e.addEventListener(f, b, h);
      }
      function M(e, t, i, n, s) {
        let r = D(t[i], n, s);
        r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
      }
      function N(e, t, i, n) {
        let s = t[i] || {};
        for (let [r, o] of Object.entries(s))
          r.includes(n) && M(e, t, i, o.callable, o.delegationSelector);
      }
      function q(e) {
        return L[(e = e.replace(x, ""))] || e;
      }
      let F = {
        on(e, t, i, n) {
          P(e, t, i, n, !1);
        },
        one(e, t, i, n) {
          P(e, t, i, n, !0);
        },
        off(e, t, i, n) {
          if ("string" != typeof t || !e) return;
          let [s, r, o] = I(t, i, n),
            a = o !== t,
            l = O(e),
            c = l[o] || {},
            u = t.startsWith(".");
          if (void 0 !== r) {
            if (!Object.keys(c).length) return;
            M(e, l, o, r, s ? i : null);
            return;
          }
          if (u) for (let h of Object.keys(l)) N(e, l, h, t.slice(1));
          for (let [d, f] of Object.entries(c)) {
            let p = d.replace(C, "");
            (!a || t.includes(p)) &&
              M(e, l, o, f.callable, f.delegationSelector);
          }
        },
        trigger(e, t, i) {
          if ("string" != typeof t || !e) return null;
          let n = g(),
            s = q(t),
            r = null,
            o = !0,
            a = !0,
            l = !1;
          t !== s &&
            n &&
            ((r = n.Event(t, i)),
            n(e).trigger(r),
            (o = !r.isPropagationStopped()),
            (a = !r.isImmediatePropagationStopped()),
            (l = r.isDefaultPrevented()));
          let c = H(new Event(t, { bubbles: o, cancelable: !0 }), i);
          return (
            l && c.preventDefault(),
            a && e.dispatchEvent(c),
            c.defaultPrevented && r && r.preventDefault(),
            c
          );
        },
      };
      function H(e, t = {}) {
        for (let [i, n] of Object.entries(t))
          try {
            e[i] = n;
          } catch (s) {
            Object.defineProperty(e, i, { configurable: !0, get: () => n });
          }
        return e;
      }
      function j(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
          return JSON.parse(decodeURIComponent(e));
        } catch (t) {
          return e;
        }
      }
      function z(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      let W = {
        setDataAttribute(e, t, i) {
          e.setAttribute(`data-bs-${z(t)}`, i);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute(`data-bs-${z(t)}`);
        },
        getDataAttributes(e) {
          if (!e) return {};
          let t = {},
            i = Object.keys(e.dataset).filter(
              (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
            );
          for (let n of i) {
            let s = n.replace(/^bs/, "");
            t[(s = s.charAt(0).toLowerCase() + s.slice(1, s.length))] = j(
              e.dataset[n]
            );
          }
          return t;
        },
        getDataAttribute: (e, t) => j(e.getAttribute(`data-bs-${z(t)}`)),
      };
      class B {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw Error(
            'You have to implement the static method "NAME", for each component!'
          );
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return e;
        }
        _mergeConfigObj(e, t) {
          let i = l(t) ? W.getDataAttribute(t, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof i ? i : {}),
            ...(l(t) ? W.getDataAttributes(t) : {}),
            ...("object" == typeof e ? e : {}),
          };
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
          for (let [i, n] of Object.entries(t)) {
            let r = e[i],
              o = l(r) ? "element" : s(r);
            if (!RegExp(n).test(o))
              throw TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`
              );
          }
        }
      }
      class R extends B {
        constructor(e, i) {
          if ((super(), !(e = c(e)))) return;
          (this._element = e),
            (this._config = this._getConfig(i)),
            t.set(this._element, this.constructor.DATA_KEY, this);
        }
        dispose() {
          for (let e of (t.remove(this._element, this.constructor.DATA_KEY),
          F.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this)))
            this[e] = null;
        }
        _queueCallback(e, t, i = !0) {
          w(e, t, i);
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e, this._element)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        static getInstance(e) {
          return t.get(c(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return (
            this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
          );
        }
        static get VERSION() {
          return "5.3.2";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(e) {
          return `${e}${this.EVENT_KEY}`;
        }
      }
      let V = (e) => {
          let t = e.getAttribute("data-bs-target");
          if (!t || "#" === t) {
            let i = e.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            i.includes("#") &&
              !i.startsWith("#") &&
              (i = `#${i.split("#")[1]}`),
              (t = i && "#" !== i ? n(i.trim()) : null);
          }
          return t;
        },
        Q = {
          find: (e, t = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(t, e)),
          findOne: (e, t = document.documentElement) =>
            Element.prototype.querySelector.call(t, e),
          children: (e, t) =>
            [].concat(...e.children).filter((e) => e.matches(t)),
          parents(e, t) {
            let i = [],
              n = e.parentNode.closest(t);
            for (; n; ) i.push(n), (n = n.parentNode.closest(t));
            return i;
          },
          prev(e, t) {
            let i = e.previousElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let i = e.nextElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
          focusableChildren(e) {
            let t = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((e) => `${e}:not([tabindex^="-"])`)
              .join(",");
            return this.find(t, e).filter((e) => !h(e) && u(e));
          },
          getSelectorFromElement(e) {
            let t = V(e);
            return t && Q.findOne(t) ? t : null;
          },
          getElementFromSelector(e) {
            let t = V(e);
            return t ? Q.findOne(t) : null;
          },
          getMultipleElementsFromSelector(e) {
            let t = V(e);
            return t ? Q.find(t) : [];
          },
        },
        K = (e, t = "hide") => {
          let i = `click.dismiss${e.EVENT_KEY}`,
            n = e.NAME;
          F.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
              (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
              h(this))
            )
              return;
            let s = Q.getElementFromSelector(this) || this.closest(`.${n}`),
              r = e.getOrCreateInstance(s);
            r[t]();
          });
        },
        Y = ".bs.alert",
        U = `close${Y}`,
        X = `closed${Y}`;
      class G extends R {
        static get NAME() {
          return "alert";
        }
        close() {
          let e = F.trigger(this._element, U);
          if (e.defaultPrevented) return;
          this._element.classList.remove("show");
          let t = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
          this._element.remove(), F.trigger(this._element, X), this.dispose();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = G.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      K(G, "close"), y(G);
      let J = '[data-bs-toggle="button"]',
        Z = "click.bs.button.data-api";
      class ee extends R {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = ee.getOrCreateInstance(this);
            "toggle" === e && t[e]();
          });
        }
      }
      F.on(document, Z, J, (e) => {
        e.preventDefault();
        let t = e.target.closest(J),
          i = ee.getOrCreateInstance(t);
        i.toggle();
      }),
        y(ee);
      let et = ".bs.swipe",
        ei = `touchstart${et}`,
        en = `touchmove${et}`,
        es = `touchend${et}`,
        er = `pointerdown${et}`,
        eo = `pointerup${et}`,
        ea = { endCallback: null, leftCallback: null, rightCallback: null },
        el = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class ec extends B {
        constructor(e, t) {
          if ((super(), (this._element = e), !e || !ec.isSupported())) return;
          (this._config = this._getConfig(t)),
            (this._deltaX = 0),
            (this._supportPointerEvents = Boolean(window.PointerEvent)),
            this._initEvents();
        }
        static get Default() {
          return ea;
        }
        static get DefaultType() {
          return el;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          F.off(this._element, et);
        }
        _start(e) {
          if (!this._supportPointerEvents) {
            this._deltaX = e.touches[0].clientX;
            return;
          }
          this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
        }
        _end(e) {
          this._eventIsPointerPenTouch(e) &&
            (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            $(this._config.endCallback);
        }
        _move(e) {
          this._deltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          let e = Math.abs(this._deltaX);
          if (e <= 40) return;
          let t = e / this._deltaX;
          (this._deltaX = 0),
            t &&
              $(t > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents
            ? (F.on(this._element, er, (e) => this._start(e)),
              F.on(this._element, eo, (e) => this._end(e)),
              this._element.classList.add("pointer-event"))
            : (F.on(this._element, ei, (e) => this._start(e)),
              F.on(this._element, en, (e) => this._move(e)),
              F.on(this._element, es, (e) => this._end(e)));
        }
        _eventIsPointerPenTouch(e) {
          return (
            this._supportPointerEvents &&
            ("pen" === e.pointerType || "touch" === e.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      let eu = ".bs.carousel",
        eh = ".data-api",
        ed = "next",
        ef = "prev",
        ep = "left",
        eg = "right",
        em = `slide${eu}`,
        e8 = `slid${eu}`,
        ev = `keydown${eu}`,
        eb = `mouseenter${eu}`,
        ey = `mouseleave${eu}`,
        e$ = `dragstart${eu}`,
        ew = `load${eu}${eh}`,
        eA = `click${eu}${eh}`,
        eE = "carousel",
        ex = "active",
        eC = ".active",
        eT = ".carousel-item",
        eS = eC + eT,
        eL = { ArrowLeft: eg, ArrowRight: ep },
        ek = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        e_ = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class eO extends R {
        constructor(e, t) {
          super(e, t),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Q.findOne(
              ".carousel-indicators",
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === eE && this.cycle();
        }
        static get Default() {
          return ek;
        }
        static get DefaultType() {
          return e_;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(ed);
        }
        nextWhenVisible() {
          !document.hidden && u(this._element) && this.next();
        }
        prev() {
          this._slide(ef);
        }
        pause() {
          this._isSliding && a(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ));
        }
        _maybeEnableCycle() {
          if (this._config.ride) {
            if (this._isSliding) {
              F.one(this._element, e8, () => this.cycle());
              return;
            }
            this.cycle();
          }
        }
        to(e) {
          let t = this._getItems();
          if (e > t.length - 1 || e < 0) return;
          if (this._isSliding) {
            F.one(this._element, e8, () => this.to(e));
            return;
          }
          let i = this._getItemIndex(this._getActive());
          i !== e && this._slide(e > i ? ed : ef, t[e]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(e) {
          return (e.defaultInterval = e.interval), e;
        }
        _addEventListeners() {
          this._config.keyboard &&
            F.on(this._element, ev, (e) => this._keydown(e)),
            "hover" === this._config.pause &&
              (F.on(this._element, eb, () => this.pause()),
              F.on(this._element, ey, () => this._maybeEnableCycle())),
            this._config.touch &&
              ec.isSupported() &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (let e of Q.find(".carousel-item img", this._element))
            F.on(e, e$, (e) => e.preventDefault());
          let t = () => {
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          };
          this._swipeHelper = new ec(this._element, {
            leftCallback: () => this._slide(this._directionToOrder(ep)),
            rightCallback: () => this._slide(this._directionToOrder(eg)),
            endCallback: t,
          });
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          let t = eL[e.key];
          t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
        }
        _getItemIndex(e) {
          return this._getItems().indexOf(e);
        }
        _setActiveIndicatorElement(e) {
          if (!this._indicatorsElement) return;
          let t = Q.findOne(eC, this._indicatorsElement);
          t.classList.remove(ex), t.removeAttribute("aria-current");
          let i = Q.findOne(
            `[data-bs-slide-to="${e}"]`,
            this._indicatorsElement
          );
          i && (i.classList.add(ex), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          let e = this._activeElement || this._getActive();
          if (!e) return;
          let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          this._config.interval = t || this._config.defaultInterval;
        }
        _slide(e, t = null) {
          if (this._isSliding) return;
          let i = this._getActive(),
            n = e === ed,
            s = t || A(this._getItems(), i, n, this._config.wrap);
          if (s === i) return;
          let r = this._getItemIndex(s),
            o = (t) =>
              F.trigger(this._element, t, {
                relatedTarget: s,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(i),
                to: r,
              }),
            a = o(em);
          if (a.defaultPrevented || !i || !s) return;
          let l = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(r),
            (this._activeElement = s);
          let c = n ? "carousel-item-start" : "carousel-item-end",
            u = n ? "carousel-item-next" : "carousel-item-prev";
          s.classList.add(u), p(s), i.classList.add(c), s.classList.add(c);
          let h = () => {
            s.classList.remove(c, u),
              s.classList.add(ex),
              i.classList.remove(ex, u, c),
              (this._isSliding = !1),
              o(e8);
          };
          this._queueCallback(h, i, this._isAnimated()), l && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Q.findOne(eS, this._element);
        }
        _getItems() {
          return Q.find(eT, this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(e) {
          return b() ? (e === ep ? ef : ed) : e === ep ? ed : ef;
        }
        _orderToDirection(e) {
          return b() ? (e === ef ? ep : eg) : e === ef ? eg : ep;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = eO.getOrCreateInstance(this, e);
            if ("number" == typeof e) {
              t.to(e);
              return;
            }
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      F.on(document, eA, "[data-bs-slide], [data-bs-slide-to]", function (e) {
        let t = Q.getElementFromSelector(this);
        if (!t || !t.classList.contains(eE)) return;
        e.preventDefault();
        let i = eO.getOrCreateInstance(t),
          n = this.getAttribute("data-bs-slide-to");
        if (n) {
          i.to(n), i._maybeEnableCycle();
          return;
        }
        if ("next" === W.getDataAttribute(this, "slide")) {
          i.next(), i._maybeEnableCycle();
          return;
        }
        i.prev(), i._maybeEnableCycle();
      }),
        F.on(window, ew, () => {
          let e = Q.find('[data-bs-ride="carousel"]');
          for (let t of e) eO.getOrCreateInstance(t);
        }),
        y(eO);
      let eD = ".bs.collapse",
        e9 = `show${eD}`,
        eI = `shown${eD}`,
        eP = `hide${eD}`,
        eM = `hidden${eD}`,
        eN = `click${eD}.data-api`,
        eq = "show",
        eF = "collapse",
        eH = "collapsing",
        ej = `:scope .${eF} .${eF}`,
        ez = '[data-bs-toggle="collapse"]',
        eW = { parent: null, toggle: !0 },
        eB = { parent: "(null|element)", toggle: "boolean" };
      class eR extends R {
        constructor(e, t) {
          super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
          let i = Q.find(ez);
          for (let n of i) {
            let s = Q.getSelectorFromElement(n),
              r = Q.find(s).filter((e) => e === this._element);
            null !== s && r.length && this._triggerArray.push(n);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return eW;
        }
        static get DefaultType() {
          return eB;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let e = [];
          if (
            (this._config.parent &&
              (e = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing"
              )
                .filter((e) => e !== this._element)
                .map((e) => eR.getOrCreateInstance(e, { toggle: !1 }))),
            e.length && e[0]._isTransitioning)
          )
            return;
          let t = F.trigger(this._element, e9);
          if (t.defaultPrevented) return;
          for (let i of e) i.hide();
          let n = this._getDimension();
          this._element.classList.remove(eF),
            this._element.classList.add(eH),
            (this._element.style[n] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          let s = () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(eH),
                this._element.classList.add(eF, eq),
                (this._element.style[n] = ""),
                F.trigger(this._element, eI);
            },
            r = n[0].toUpperCase() + n.slice(1),
            o = `scroll${r}`;
          this._queueCallback(s, this._element, !0),
            (this._element.style[n] = `${this._element[o]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          let e = F.trigger(this._element, eP);
          if (e.defaultPrevented) return;
          let t = this._getDimension();
          for (let i of ((this._element.style[t] = `${
            this._element.getBoundingClientRect()[t]
          }px`),
          p(this._element),
          this._element.classList.add(eH),
          this._element.classList.remove(eF, eq),
          this._triggerArray)) {
            let n = Q.getElementFromSelector(i);
            n && !this._isShown(n) && this._addAriaAndCollapsedClass([i], !1);
          }
          this._isTransitioning = !0;
          let s = () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(eH),
              this._element.classList.add(eF),
              F.trigger(this._element, eM);
          };
          (this._element.style[t] = ""),
            this._queueCallback(s, this._element, !0);
        }
        _isShown(e = this._element) {
          return e.classList.contains(eq);
        }
        _configAfterMerge(e) {
          return (e.toggle = Boolean(e.toggle)), (e.parent = c(e.parent)), e;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          let e = this._getFirstLevelChildren(ez);
          for (let t of e) {
            let i = Q.getElementFromSelector(t);
            i && this._addAriaAndCollapsedClass([t], this._isShown(i));
          }
        }
        _getFirstLevelChildren(e) {
          let t = Q.find(ej, this._config.parent);
          return Q.find(e, this._config.parent).filter((e) => !t.includes(e));
        }
        _addAriaAndCollapsedClass(e, t) {
          if (e.length)
            for (let i of e)
              i.classList.toggle("collapsed", !t),
                i.setAttribute("aria-expanded", t);
        }
        static jQueryInterface(e) {
          let t = {};
          return (
            "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function () {
              let i = eR.getOrCreateInstance(this, t);
              if ("string" == typeof e) {
                if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                i[e]();
              }
            })
          );
        }
      }
      F.on(document, eN, ez, function (e) {
        for (let t of (("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault(),
        Q.getMultipleElementsFromSelector(this)))
          eR.getOrCreateInstance(t, { toggle: !1 }).toggle();
      }),
        y(eR);
      var e0 = "bottom",
        eV = "right",
        eQ = "left",
        e4 = "auto",
        eK = ["top", e0, eV, eQ],
        eY = "start",
        eU = "clippingParents",
        e1 = "viewport",
        e3 = "popper",
        e2 = "reference",
        eX = eK.reduce(function (e, t) {
          return e.concat([t + "-" + eY, t + "-end"]);
        }, []),
        e6 = [].concat(eK, [e4]).reduce(function (e, t) {
          return e.concat([t, t + "-" + eY, t + "-end"]);
        }, []),
        e7 = "beforeRead",
        e5 = "read",
        eG = "afterRead",
        eJ = "beforeMain",
        eZ = "main",
        te = "afterMain",
        tt = "beforeWrite",
        ti = "write",
        tn = "afterWrite",
        ts = [e7, e5, eG, eJ, eZ, te, tt, ti, tn];
      function tr(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function to(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ta(e) {
        var t = to(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function tl(e) {
        var t = to(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function tc(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = to(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      let tu = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function e(t) {
          var i = t.state;
          Object.keys(i.elements).forEach(function (e) {
            var t = i.styles[e] || {},
              n = i.attributes[e] || {},
              s = i.elements[e];
            tl(s) &&
              tr(s) &&
              (Object.assign(s.style, t),
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t
                  ? s.removeAttribute(e)
                  : s.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function e(t) {
          var i = t.state,
            n = {
              popper: {
                position: i.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(i.elements.popper.style, n.popper),
            (i.styles = n),
            i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
            function () {
              Object.keys(i.elements).forEach(function (e) {
                var t = i.elements[e],
                  s = i.attributes[e] || {},
                  r = Object.keys(
                    i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                tl(t) &&
                  tr(t) &&
                  (Object.assign(t.style, r),
                  Object.keys(s).forEach(function (e) {
                    t.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function th(e) {
        return e.split("-")[0];
      }
      var td = Math.max,
        tf = Math.min,
        tp = Math.round;
      function tg() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function tm() {
        return !/^((?!chrome|android).)*safari/i.test(tg());
      }
      function t8(e, t, i) {
        void 0 === t && (t = !1), void 0 === i && (i = !1);
        var n = e.getBoundingClientRect(),
          s = 1,
          r = 1;
        t &&
          tl(e) &&
          ((s = (e.offsetWidth > 0 && tp(n.width) / e.offsetWidth) || 1),
          (r = (e.offsetHeight > 0 && tp(n.height) / e.offsetHeight) || 1));
        var o = (ta(e) ? to(e) : window).visualViewport,
          a = !tm() && i,
          l = (n.left + (a && o ? o.offsetLeft : 0)) / s,
          c = (n.top + (a && o ? o.offsetTop : 0)) / r,
          u = n.width / s,
          h = n.height / r;
        return {
          width: u,
          height: h,
          top: c,
          right: l + u,
          bottom: c + h,
          left: l,
          x: l,
          y: c,
        };
      }
      function tv(e) {
        var t = t8(e),
          i = e.offsetWidth,
          n = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - i) && (i = t.width),
          1 >= Math.abs(t.height - n) && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
        );
      }
      function tb(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && tc(i)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function ty(e) {
        return to(e).getComputedStyle(e);
      }
      function t$(e) {
        return ["table", "td", "th"].indexOf(tr(e)) >= 0;
      }
      function tw(e) {
        return ((ta(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function tA(e) {
        return "html" === tr(e)
          ? e
          : e.assignedSlot || e.parentNode || (tc(e) ? e.host : null) || tw(e);
      }
      function tE(e) {
        return tl(e) && "fixed" !== ty(e).position ? e.offsetParent : null;
      }
      function tx(e) {
        for (
          var t = to(e), i = tE(e);
          i && t$(i) && "static" === ty(i).position;

        )
          i = tE(i);
        return i &&
          ("html" === tr(i) ||
            ("body" === tr(i) && "static" === ty(i).position))
          ? t
          : i ||
              (function e(t) {
                var i = /firefox/i.test(tg());
                if (
                  /Trident/i.test(tg()) &&
                  tl(t) &&
                  "fixed" === ty(t).position
                )
                  return null;
                var n = tA(t);
                for (
                  tc(n) && (n = n.host);
                  tl(n) && 0 > ["html", "body"].indexOf(tr(n));

                ) {
                  var s = ty(n);
                  if (
                    "none" !== s.transform ||
                    "none" !== s.perspective ||
                    "paint" === s.contain ||
                    -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                    (i && "filter" === s.willChange) ||
                    (i && s.filter && "none" !== s.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function tC(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function tT(e, t, i) {
        return td(e, tf(t, i));
      }
      function tS() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function tL(e) {
        return Object.assign({}, tS(), e);
      }
      function tk(e, t) {
        return t.reduce(function (t, i) {
          return (t[i] = e), t;
        }, {});
      }
      let t_ = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function e(t) {
          var i,
            n = t.state,
            s = t.name,
            r = t.options,
            o = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            l = th(n.placement),
            c = tC(l),
            u = [eQ, eV].indexOf(l) >= 0 ? "height" : "width";
          if (o && a) {
            var h,
              d,
              f =
                ((h = r.padding),
                (d = n),
                tL(
                  "number" !=
                    typeof (h =
                      "function" == typeof h
                        ? h(
                            Object.assign({}, d.rects, {
                              placement: d.placement,
                            })
                          )
                        : h)
                    ? h
                    : tk(h, eK)
                )),
              p = tv(o),
              g =
                n.rects.reference[u] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[u],
              m = a[c] - n.rects.reference[c],
              v = tx(o),
              b = v
                ? "y" === c
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = f["y" === c ? "top" : eQ],
              $ = b - p[u] - f["y" === c ? e0 : eV],
              w = b / 2 - p[u] / 2 + (g / 2 - m / 2),
              A = tT(y, w, $),
              E = c;
            n.modifiersData[s] =
              (((i = {})[E] = A), (i.centerOffset = A - w), i);
          }
        },
        effect: function e(t) {
          var i = t.state,
            n = t.options.element,
            s = void 0 === n ? "[data-popper-arrow]" : n;
          null != s &&
            ("string" != typeof s ||
              (s = i.elements.popper.querySelector(s))) &&
            tb(i.elements.popper, s) &&
            (i.elements.arrow = s);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function tO(e) {
        return e.split("-")[1];
      }
      var tD = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function t9(e) {
        var t,
          i,
          n = e.popper,
          s = e.popperRect,
          r = e.placement,
          o = e.variation,
          a = e.offsets,
          l = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          h = e.roundOffsets,
          d = e.isFixed,
          f = a.x,
          p = void 0 === f ? 0 : f,
          g = a.y,
          m = void 0 === g ? 0 : g,
          v = "function" == typeof h ? h({ x: p, y: m }) : { x: p, y: m };
        (p = v.x), (m = v.y);
        var b = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          $ = eQ,
          w = "top",
          A = window;
        if (u) {
          var E = tx(n),
            x = "clientHeight",
            C = "clientWidth";
          E === to(n) &&
            ((E = tw(n)),
            "static" !== ty(E).position &&
              "absolute" === l &&
              ((x = "scrollHeight"), (C = "scrollWidth"))),
            ("top" === r || ((r === eQ || r === eV) && "end" === o)) &&
              ((w = e0),
              (m -=
                (d && E === A && A.visualViewport
                  ? A.visualViewport.height
                  : E[x]) - s.height),
              (m *= c ? 1 : -1)),
            (r === eQ || (("top" === r || r === e0) && "end" === o)) &&
              (($ = eV),
              (p -=
                (d && E === A && A.visualViewport
                  ? A.visualViewport.width
                  : E[C]) - s.width),
              (p *= c ? 1 : -1));
        }
        var T,
          S,
          L,
          k,
          _,
          O = Object.assign({ position: l }, u && tD),
          D =
            !0 === h
              ? ((T = { x: p, y: m }),
                (S = to(n)),
                (L = T.x),
                (k = T.y),
                {
                  x: tp(L * (_ = S.devicePixelRatio || 1)) / _ || 0,
                  y: tp(k * _) / _ || 0,
                })
              : { x: p, y: m };
        return ((p = D.x), (m = D.y), c)
          ? Object.assign(
              {},
              O,
              (((i = {})[w] = y ? "0" : ""),
              (i[$] = b ? "0" : ""),
              (i.transform =
                1 >= (A.devicePixelRatio || 1)
                  ? "translate(" + p + "px, " + m + "px)"
                  : "translate3d(" + p + "px, " + m + "px, 0)"),
              i)
            )
          : Object.assign(
              {},
              O,
              (((t = {})[w] = y ? m + "px" : ""),
              (t[$] = b ? p + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      let tI = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function e(t) {
          var i = t.state,
            n = t.options,
            s = n.gpuAcceleration,
            r = n.adaptive,
            o = n.roundOffsets,
            a = void 0 === o || o,
            l = {
              placement: th(i.placement),
              variation: tO(i.placement),
              popper: i.elements.popper,
              popperRect: i.rects.popper,
              gpuAcceleration: void 0 === s || s,
              isFixed: "fixed" === i.options.strategy,
            };
          null != i.modifiersData.popperOffsets &&
            (i.styles.popper = Object.assign(
              {},
              i.styles.popper,
              t9(
                Object.assign({}, l, {
                  offsets: i.modifiersData.popperOffsets,
                  position: i.options.strategy,
                  adaptive: void 0 === r || r,
                  roundOffsets: a,
                })
              )
            )),
            null != i.modifiersData.arrow &&
              (i.styles.arrow = Object.assign(
                {},
                i.styles.arrow,
                t9(
                  Object.assign({}, l, {
                    offsets: i.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: a,
                  })
                )
              )),
            (i.attributes.popper = Object.assign({}, i.attributes.popper, {
              "data-popper-placement": i.placement,
            }));
        },
        data: {},
      };
      var tP = { passive: !0 };
      let tM = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function e() {},
        effect: function e(t) {
          var i = t.state,
            n = t.instance,
            s = t.options,
            r = s.scroll,
            o = void 0 === r || r,
            a = s.resize,
            l = void 0 === a || a,
            c = to(i.elements.popper),
            u = [].concat(i.scrollParents.reference, i.scrollParents.popper);
          return (
            o &&
              u.forEach(function (e) {
                e.addEventListener("scroll", n.update, tP);
              }),
            l && c.addEventListener("resize", n.update, tP),
            function () {
              o &&
                u.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, tP);
                }),
                l && c.removeEventListener("resize", n.update, tP);
            }
          );
        },
        data: {},
      };
      var tN = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function tq(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return tN[e];
        });
      }
      var tF = { start: "end", end: "start" };
      function tH(e) {
        return e.replace(/start|end/g, function (e) {
          return tF[e];
        });
      }
      function tj(e) {
        var t,
          i = to(e);
        return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
      }
      function tz(e) {
        return t8(tw(e)).left + tj(e).scrollLeft;
      }
      function tW(e) {
        var t = ty(e),
          i = t.overflow,
          n = t.overflowX,
          s = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
      }
      function tB(e, t) {
        void 0 === t && (t = []);
        var i,
          n = (function e(t) {
            return ["html", "body", "#document"].indexOf(tr(t)) >= 0
              ? t.ownerDocument.body
              : tl(t) && tW(t)
              ? t
              : e(tA(t));
          })(e),
          s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
          r = to(n),
          o = s ? [r].concat(r.visualViewport || [], tW(n) ? n : []) : n,
          a = t.concat(o);
        return s ? a : a.concat(tB(tA(o)));
      }
      function tR(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function t0(e, t, i) {
        var n, s, r, o, a, l, c, u, h, d, f, p;
        return t === e1
          ? tR(
              (function e(t, i) {
                var n = to(t),
                  s = tw(t),
                  r = n.visualViewport,
                  o = s.clientWidth,
                  a = s.clientHeight,
                  l = 0,
                  c = 0;
                if (r) {
                  (o = r.width), (a = r.height);
                  var u = tm();
                  (u || (!u && "fixed" === i)) &&
                    ((l = r.offsetLeft), (c = r.offsetTop));
                }
                return { width: o, height: a, x: l + tz(t), y: c };
              })(e, i)
            )
          : ta(t)
          ? ((n = t),
            ((r = t8(n, !1, "fixed" === (s = i))).top = r.top + n.clientTop),
            (r.left = r.left + n.clientLeft),
            (r.bottom = r.top + n.clientHeight),
            (r.right = r.left + n.clientWidth),
            (r.width = n.clientWidth),
            (r.height = n.clientHeight),
            (r.x = r.left),
            (r.y = r.top),
            r)
          : tR(
              ((o = tw(e)),
              (l = tw(o)),
              (c = tj(o)),
              (u = null == (a = o.ownerDocument) ? void 0 : a.body),
              (h = td(
                l.scrollWidth,
                l.clientWidth,
                u ? u.scrollWidth : 0,
                u ? u.clientWidth : 0
              )),
              (d = td(
                l.scrollHeight,
                l.clientHeight,
                u ? u.scrollHeight : 0,
                u ? u.clientHeight : 0
              )),
              (f = -c.scrollLeft + tz(o)),
              (p = -c.scrollTop),
              "rtl" === ty(u || l).direction &&
                (f += td(l.clientWidth, u ? u.clientWidth : 0) - h),
              { width: h, height: d, x: f, y: p })
            );
      }
      function tV(e) {
        var t,
          i = e.reference,
          n = e.element,
          s = e.placement,
          r = s ? th(s) : null,
          o = s ? tO(s) : null,
          a = i.x + i.width / 2 - n.width / 2,
          l = i.y + i.height / 2 - n.height / 2;
        switch (r) {
          case "top":
            t = { x: a, y: i.y - n.height };
            break;
          case e0:
            t = { x: a, y: i.y + i.height };
            break;
          case eV:
            t = { x: i.x + i.width, y: l };
            break;
          case eQ:
            t = { x: i.x - n.width, y: l };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var c = r ? tC(r) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (o) {
            case eY:
              t[c] = t[c] - (i[u] / 2 - n[u] / 2);
              break;
            case "end":
              t[c] = t[c] + (i[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      function tQ(e, t) {
        void 0 === t && (t = {});
        var i,
          n,
          s,
          r,
          o,
          a,
          l,
          c,
          u,
          h,
          d = t,
          f = d.placement,
          p = void 0 === f ? e.placement : f,
          g = d.strategy,
          m = void 0 === g ? e.strategy : g,
          v = d.boundary,
          b = d.rootBoundary,
          y = d.elementContext,
          $ = void 0 === y ? e3 : y,
          w = d.altBoundary,
          A = d.padding,
          E = void 0 === A ? 0 : A,
          x = tL("number" != typeof E ? E : tk(E, eK)),
          C = e.rects.popper,
          T = e.elements[void 0 !== w && w ? ($ === e3 ? e2 : e3) : $],
          S =
            ((i = ta(T) ? T : T.contextElement || tw(e.elements.popper)),
            (n = void 0 === v ? eU : v),
            (s = void 0 === b ? e1 : b),
            (r = m),
            (u = (c = [].concat(
              "clippingParents" === n
                ? ((o = i),
                  (a = tB(tA(o))),
                  (l =
                    ["absolute", "fixed"].indexOf(ty(o).position) >= 0 && tl(o)
                      ? tx(o)
                      : o),
                  ta(l)
                    ? a.filter(function (e) {
                        return ta(e) && tb(e, l) && "body" !== tr(e);
                      })
                    : [])
                : [].concat(n),
              [s]
            ))[0]),
            ((h = c.reduce(function (e, t) {
              var n = t0(i, t, r);
              return (
                (e.top = td(n.top, e.top)),
                (e.right = tf(n.right, e.right)),
                (e.bottom = tf(n.bottom, e.bottom)),
                (e.left = td(n.left, e.left)),
                e
              );
            }, t0(i, u, r))).width = h.right - h.left),
            (h.height = h.bottom - h.top),
            (h.x = h.left),
            (h.y = h.top),
            h),
          L = t8(e.elements.reference),
          k = tV({
            reference: L,
            element: C,
            strategy: "absolute",
            placement: p,
          }),
          _ = tR(Object.assign({}, C, k)),
          O = $ === e3 ? _ : L,
          D = {
            top: S.top - O.top + x.top,
            bottom: O.bottom - S.bottom + x.bottom,
            left: S.left - O.left + x.left,
            right: O.right - S.right + x.right,
          },
          I = e.modifiersData.offset;
        if ($ === e3 && I) {
          var P = I[p];
          Object.keys(D).forEach(function (e) {
            var t = [eV, e0].indexOf(e) >= 0 ? 1 : -1,
              i = ["top", e0].indexOf(e) >= 0 ? "y" : "x";
            D[e] += P[i] * t;
          });
        }
        return D;
      }
      let t4 = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function e(t) {
          var i = t.state,
            n = t.options,
            s = t.name;
          if (!i.modifiersData[s]._skip) {
            for (
              var r = n.mainAxis,
                o = void 0 === r || r,
                a = n.altAxis,
                l = void 0 === a || a,
                c = n.fallbackPlacements,
                u = n.padding,
                h = n.boundary,
                d = n.rootBoundary,
                f = n.altBoundary,
                p = n.flipVariations,
                g = void 0 === p || p,
                m = n.allowedAutoPlacements,
                v = i.options.placement,
                b = th(v),
                y = [v]
                  .concat(
                    c ||
                      (b !== v && g
                        ? (function e(t) {
                            if (th(t) === e4) return [];
                            var i = tq(t);
                            return [tH(t), i, tH(i)];
                          })(v)
                        : [tq(v)])
                  )
                  .reduce(function (e, t) {
                    var n, s, r, o, a, l, c, f, p, v, b, y, $, w;
                    return e.concat(
                      th(t) === e4
                        ? ((n = i),
                          (s = {
                            placement: t,
                            boundary: h,
                            rootBoundary: d,
                            padding: u,
                            flipVariations: g,
                            allowedAutoPlacements: m,
                          }),
                          (o = (r = s).placement),
                          (a = r.boundary),
                          (l = r.rootBoundary),
                          (c = r.padding),
                          (f = r.flipVariations),
                          (v =
                            void 0 === (p = r.allowedAutoPlacements) ? e6 : p),
                          0 ===
                            ($ = (y = (b = tO(o))
                              ? f
                                ? eX
                                : eX.filter(function (e) {
                                    return tO(e) === b;
                                  })
                              : eK).filter(function (e) {
                              return v.indexOf(e) >= 0;
                            })).length && ($ = y),
                          Object.keys(
                            (w = $.reduce(function (e, t) {
                              return (
                                (e[t] = tQ(n, {
                                  placement: t,
                                  boundary: a,
                                  rootBoundary: l,
                                  padding: c,
                                })[th(t)]),
                                e
                              );
                            }, {}))
                          ).sort(function (e, t) {
                            return w[e] - w[t];
                          }))
                        : t
                    );
                  }, []),
                $ = i.rects.reference,
                w = i.rects.popper,
                A = new Map(),
                E = !0,
                x = y[0],
                C = 0;
              C < y.length;
              C++
            ) {
              var T = y[C],
                S = th(T),
                L = tO(T) === eY,
                k = ["top", e0].indexOf(S) >= 0,
                _ = k ? "width" : "height",
                O = tQ(i, {
                  placement: T,
                  boundary: h,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: u,
                }),
                D = k ? (L ? eV : eQ) : L ? e0 : "top";
              $[_] > w[_] && (D = tq(D));
              var I = tq(D),
                P = [];
              if (
                (o && P.push(O[S] <= 0),
                l && P.push(O[D] <= 0, O[I] <= 0),
                P.every(function (e) {
                  return e;
                }))
              ) {
                (x = T), (E = !1);
                break;
              }
              A.set(T, P);
            }
            if (E)
              for (
                var M = g ? 3 : 1,
                  N = function e(t) {
                    var i = y.find(function (e) {
                      var i = A.get(e);
                      if (i)
                        return i.slice(0, t).every(function (e) {
                          return e;
                        });
                    });
                    if (i) return (x = i), "break";
                  },
                  q = M;
                q > 0 && "break" !== N(q);
                q--
              );
            i.placement !== x &&
              ((i.modifiersData[s]._skip = !0),
              (i.placement = x),
              (i.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function tK(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function tY(e) {
        return ["top", eV, e0, eQ].some(function (t) {
          return e[t] >= 0;
        });
      }
      let tU = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function e(t) {
            var i = t.state,
              n = t.name,
              s = i.rects.reference,
              r = i.rects.popper,
              o = i.modifiersData.preventOverflow,
              a = tQ(i, { elementContext: "reference" }),
              l = tQ(i, { altBoundary: !0 }),
              c = tK(a, s),
              u = tK(l, r, o),
              h = tY(c),
              d = tY(u);
            (i.modifiersData[n] = {
              referenceClippingOffsets: c,
              popperEscapeOffsets: u,
              isReferenceHidden: h,
              hasPopperEscaped: d,
            }),
              (i.attributes.popper = Object.assign({}, i.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d,
              }));
          },
        },
        t1 = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function e(t) {
            var i = t.state,
              n = t.options,
              s = t.name,
              r = n.offset,
              o = void 0 === r ? [0, 0] : r,
              a = e6.reduce(function (e, t) {
                var n, s, r, a, l, c, u, h;
                return (
                  (e[t] =
                    ((n = t),
                    (s = i.rects),
                    (r = o),
                    (l = [eQ, "top"].indexOf((a = th(n))) >= 0 ? -1 : 1),
                    (u = (c =
                      "function" == typeof r
                        ? r(Object.assign({}, s, { placement: n }))
                        : r)[0]),
                    (h = c[1]),
                    (u = u || 0),
                    (h = (h || 0) * l),
                    [eQ, eV].indexOf(a) >= 0
                      ? { x: h, y: u }
                      : { x: u, y: h })),
                  e
                );
              }, {}),
              l = a[i.placement],
              c = l.x,
              u = l.y;
            null != i.modifiersData.popperOffsets &&
              ((i.modifiersData.popperOffsets.x += c),
              (i.modifiersData.popperOffsets.y += u)),
              (i.modifiersData[s] = a);
          },
        },
        t3 = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function e(t) {
            var i = t.state,
              n = t.name;
            i.modifiersData[n] = tV({
              reference: i.rects.reference,
              element: i.rects.popper,
              strategy: "absolute",
              placement: i.placement,
            });
          },
          data: {},
        },
        t2 = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function e(t) {
            var i,
              n = t.state,
              s = t.options,
              r = t.name,
              o = s.mainAxis,
              a = s.altAxis,
              l = s.boundary,
              c = s.rootBoundary,
              u = s.altBoundary,
              h = s.padding,
              d = s.tether,
              f = void 0 === d || d,
              p = s.tetherOffset,
              g = void 0 === p ? 0 : p,
              m = tQ(n, {
                boundary: l,
                rootBoundary: c,
                padding: h,
                altBoundary: u,
              }),
              v = th(n.placement),
              b = tO(n.placement),
              y = !b,
              $ = tC(v),
              w = "x" === (i = $) ? "y" : "x",
              A = n.modifiersData.popperOffsets,
              E = n.rects.reference,
              x = n.rects.popper,
              C =
                "function" == typeof g
                  ? g(Object.assign({}, n.rects, { placement: n.placement }))
                  : g,
              T =
                "number" == typeof C
                  ? { mainAxis: C, altAxis: C }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
              S = n.modifiersData.offset
                ? n.modifiersData.offset[n.placement]
                : null,
              L = { x: 0, y: 0 };
            if (A) {
              if (void 0 === o || o) {
                var k,
                  _ = "y" === $ ? "top" : eQ,
                  O = "y" === $ ? e0 : eV,
                  D = "y" === $ ? "height" : "width",
                  I = A[$],
                  P = I + m[_],
                  M = I - m[O],
                  N = f ? -x[D] / 2 : 0,
                  q = b === eY ? E[D] : x[D],
                  F = b === eY ? -x[D] : -E[D],
                  H = n.elements.arrow,
                  j = f && H ? tv(H) : { width: 0, height: 0 },
                  z = n.modifiersData["arrow#persistent"]
                    ? n.modifiersData["arrow#persistent"].padding
                    : tS(),
                  W = z[_],
                  B = z[O],
                  R = tT(0, E[D], j[D]),
                  V = y
                    ? E[D] / 2 - N - R - W - T.mainAxis
                    : q - R - W - T.mainAxis,
                  Q = y
                    ? -E[D] / 2 + N + R + B + T.mainAxis
                    : F + R + B + T.mainAxis,
                  K = n.elements.arrow && tx(n.elements.arrow),
                  Y = K
                    ? "y" === $
                      ? K.clientTop || 0
                      : K.clientLeft || 0
                    : 0,
                  U = null != (k = null == S ? void 0 : S[$]) ? k : 0,
                  X = tT(
                    f ? tf(P, I + V - U - Y) : P,
                    I,
                    f ? td(M, I + Q - U) : M
                  );
                (A[$] = X), (L[$] = X - I);
              }
              if (void 0 !== a && a) {
                var G,
                  J,
                  Z,
                  ee,
                  et,
                  ei = A[w],
                  en = "y" === w ? "height" : "width",
                  es = ei + m["x" === $ ? "top" : eQ],
                  er = ei - m["x" === $ ? e0 : eV],
                  eo = -1 !== ["top", eQ].indexOf(v),
                  ea = null != (G = null == S ? void 0 : S[w]) ? G : 0,
                  el = eo ? es : ei - E[en] - x[en] - ea + T.altAxis,
                  ec = eo ? ei + E[en] + x[en] - ea - T.altAxis : er,
                  eu =
                    f && eo
                      ? ((J = el),
                        (Z = ei),
                        (ee = ec),
                        (et = tT(J, Z, ee)) > ee ? ee : et)
                      : tT(f ? el : es, ei, f ? ec : er);
                (A[w] = eu), (L[w] = eu - ei);
              }
              n.modifiersData[r] = L;
            }
          },
          requiresIfExists: ["offset"],
        };
      var tX = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function t6() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function t7(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = t.defaultOptions,
          r = void 0 === s ? tX : s;
        return function e(t, i, s) {
          void 0 === s && (s = r);
          var o,
            a,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, tX, r),
              modifiersData: {},
              elements: { reference: t, popper: i },
              attributes: {},
              styles: {},
            },
            c = [],
            u = !1,
            h = {
              state: l,
              setOptions: function e(s) {
                var o,
                  a,
                  u,
                  f,
                  p,
                  g,
                  m,
                  v,
                  b = "function" == typeof s ? s(l.options) : s;
                d(),
                  (l.options = Object.assign({}, r, l.options, b)),
                  (l.scrollParents = {
                    reference: ta(t)
                      ? tB(t)
                      : t.contextElement
                      ? tB(t.contextElement)
                      : [],
                    popper: tB(i),
                  });
                var y =
                  ((v =
                    ((f = u =
                      Object.keys(
                        (a = (o = [].concat(n, l.options.modifiers)).reduce(
                          function (e, t) {
                            var i = e[t.name];
                            return (
                              (e[t.name] = i
                                ? Object.assign({}, i, t, {
                                    options: Object.assign(
                                      {},
                                      i.options,
                                      t.options
                                    ),
                                    data: Object.assign({}, i.data, t.data),
                                  })
                                : t),
                              e
                            );
                          },
                          {}
                        ))
                      ).map(function (e) {
                        return a[e];
                      })),
                    (p = new Map()),
                    (g = new Set()),
                    (m = []),
                    f.forEach(function (e) {
                      p.set(e.name, e);
                    }),
                    f.forEach(function (e) {
                      g.has(e.name) ||
                        (function e(t) {
                          g.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!g.has(t)) {
                                  var i = p.get(t);
                                  i && e(i);
                                }
                              }),
                            m.push(t);
                        })(e);
                    }),
                    m)),
                  ts.reduce(function (e, t) {
                    return e.concat(
                      v.filter(function (e) {
                        return e.phase === t;
                      })
                    );
                  }, []));
                return (
                  (l.orderedModifiers = y.filter(function (e) {
                    return e.enabled;
                  })),
                  l.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var s = n({
                          state: l,
                          name: t,
                          instance: h,
                          options: void 0 === i ? {} : i,
                        }),
                        r = function e() {};
                      c.push(s || r);
                    }
                  }),
                  h.update()
                );
              },
              forceUpdate: function e() {
                if (!u) {
                  var t,
                    i,
                    n,
                    s,
                    r,
                    o,
                    a,
                    c,
                    d,
                    f,
                    p,
                    g,
                    m,
                    v,
                    b,
                    y = l.elements,
                    $ = y.reference,
                    w = y.popper;
                  if (t6($, w)) {
                    (l.rects = {
                      reference:
                        ((n = $),
                        (s = tx(w)),
                        (r = "fixed" === l.options.strategy),
                        (o = tl(s)),
                        (p =
                          tl(s) &&
                          ((d =
                            tp((c = (a = s).getBoundingClientRect()).width) /
                              a.offsetWidth || 1),
                          (f = tp(c.height) / a.offsetHeight || 1),
                          1 !== d || 1 !== f)),
                        (g = tw(s)),
                        (m = t8(n, p, r)),
                        (v = { scrollLeft: 0, scrollTop: 0 }),
                        (b = { x: 0, y: 0 }),
                        (o || (!o && !r)) &&
                          (("body" !== tr(s) || tW(g)) &&
                            (v =
                              ((t = s),
                              t !== to(t) && tl(t)
                                ? {
                                    scrollLeft: (i = t).scrollLeft,
                                    scrollTop: i.scrollTop,
                                  }
                                : tj(t))),
                          tl(s)
                            ? ((b = t8(s, !0)),
                              (b.x += s.clientLeft),
                              (b.y += s.clientTop))
                            : g && (b.x = tz(g))),
                        {
                          x: m.left + v.scrollLeft - b.x,
                          y: m.top + v.scrollTop - b.y,
                          width: m.width,
                          height: m.height,
                        }),
                      popper: tv(w),
                    }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (e) {
                        return (l.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var A = 0; A < l.orderedModifiers.length; A++) {
                      if (!0 === l.reset) {
                        (l.reset = !1), (A = -1);
                        continue;
                      }
                      var E = l.orderedModifiers[A],
                        x = E.fn,
                        C = E.options,
                        T = void 0 === C ? {} : C,
                        S = E.name;
                      "function" == typeof x &&
                        (l =
                          x({ state: l, options: T, name: S, instance: h }) ||
                          l);
                    }
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    h.forceUpdate(), e(l);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function e() {
                d(), (u = !0);
              },
            };
          if (!t6(t, i)) return h;
          function d() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            h.setOptions(s).then(function (e) {
              !u && s.onFirstUpdate && s.onFirstUpdate(e);
            }),
            h
          );
        };
      }
      var t5 = t7(),
        tG = t7({ defaultModifiers: [tM, t3, tI, tu] }),
        tJ = t7({ defaultModifiers: [tM, t3, tI, tu, t1, t4, t2, t_, tU] });
      let tZ = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              afterMain: te,
              afterRead: eG,
              afterWrite: tn,
              applyStyles: tu,
              arrow: t_,
              auto: e4,
              basePlacements: eK,
              beforeMain: eJ,
              beforeRead: e7,
              beforeWrite: tt,
              bottom: e0,
              clippingParents: eU,
              computeStyles: tI,
              createPopper: tJ,
              createPopperBase: t5,
              createPopperLite: tG,
              detectOverflow: tQ,
              end: "end",
              eventListeners: tM,
              flip: t4,
              hide: tU,
              left: eQ,
              main: eZ,
              modifierPhases: ts,
              offset: t1,
              placements: e6,
              popper: e3,
              popperGenerator: t7,
              popperOffsets: t3,
              preventOverflow: t2,
              read: e5,
              reference: e2,
              right: eV,
              start: eY,
              top: "top",
              variationPlacements: eX,
              viewport: e1,
              write: ti,
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        ie = "dropdown",
        it = ".bs.dropdown",
        ii = ".data-api",
        is = "ArrowDown",
        ir = `hide${it}`,
        io = `hidden${it}`,
        ia = `show${it}`,
        il = `shown${it}`,
        ic = `click${it}${ii}`,
        iu = `keydown${it}${ii}`,
        ih = `keyup${it}${ii}`,
        id = "show",
        ip = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        ig = `${ip}.${id}`,
        im = ".dropdown-menu",
        i8 = b() ? "top-end" : "top-start",
        iv = b() ? "top-start" : "top-end",
        ib = b() ? "bottom-end" : "bottom-start",
        iy = b() ? "bottom-start" : "bottom-end",
        i$ = b() ? "left-start" : "right-start",
        iw = b() ? "right-start" : "left-start",
        iA = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        iE = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class ix extends R {
        constructor(e, t) {
          super(e, t),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Q.next(this._element, im)[0] ||
              Q.prev(this._element, im)[0] ||
              Q.findOne(im, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
          return iA;
        }
        static get DefaultType() {
          return iE;
        }
        static get NAME() {
          return ie;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (h(this._element) || this._isShown()) return;
          let e = { relatedTarget: this._element },
            t = F.trigger(this._element, ia, e);
          if (!t.defaultPrevented) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (let i of [].concat(...document.body.children))
                F.on(i, "mouseover", f);
            this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(id),
              this._element.classList.add(id),
              F.trigger(this._element, il, e);
          }
        }
        hide() {
          if (h(this._element) || !this._isShown()) return;
          let e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(e) {
          let t = F.trigger(this._element, ir, e);
          if (!t.defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (let i of [].concat(...document.body.children))
                F.off(i, "mouseover", f);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(id),
              this._element.classList.remove(id),
              this._element.setAttribute("aria-expanded", "false"),
              W.removeDataAttribute(this._menu, "popper"),
              F.trigger(this._element, io, e);
          }
        }
        _getConfig(e) {
          if (
            "object" == typeof (e = super._getConfig(e)).reference &&
            !l(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect
          )
            throw TypeError(
              `${ie.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
          return e;
        }
        _createPopper() {
          if (void 0 === tZ)
            throw TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = this._parent)
            : l(this._config.reference)
            ? (e = c(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          let t = this._getPopperConfig();
          this._popper = tJ(e, this._menu, t);
        }
        _isShown() {
          return this._menu.classList.contains(id);
        }
        _getPlacement() {
          let e = this._parent;
          if (e.classList.contains("dropend")) return i$;
          if (e.classList.contains("dropstart")) return iw;
          if (e.classList.contains("dropup-center")) return "top";
          if (e.classList.contains("dropdown-center")) return "bottom";
          let t =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return e.classList.contains("dropup") ? (t ? iv : i8) : t ? iy : ib;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          let { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _getPopperConfig() {
          let e = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (W.setDataAttribute(this._menu, "popper", "static"),
              (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            { ...e, ...$(this._config.popperConfig, [e]) }
          );
        }
        _selectMenuItem({ key: e, target: t }) {
          let i = Q.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          ).filter((e) => u(e));
          i.length && A(i, t, e === is, !i.includes(t)).focus();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = ix.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
        static clearMenus(e) {
          if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
          let t = Q.find(ig);
          for (let i of t) {
            let n = ix.getInstance(i);
            if (!n || !1 === n._config.autoClose) continue;
            let s = e.composedPath(),
              r = s.includes(n._menu);
            if (
              s.includes(n._element) ||
              ("inside" === n._config.autoClose && !r) ||
              ("outside" === n._config.autoClose && r) ||
              (n._menu.contains(e.target) &&
                (("keyup" === e.type && "Tab" === e.key) ||
                  /input|select|option|textarea|form/i.test(e.target.tagName)))
            )
              continue;
            let o = { relatedTarget: n._element };
            "click" === e.type && (o.clickEvent = e), n._completeHide(o);
          }
        }
        static dataApiKeydownHandler(e) {
          let t = /input|textarea/i.test(e.target.tagName),
            i = "Escape" === e.key,
            n = ["ArrowUp", is].includes(e.key);
          if ((!n && !i) || (t && !i)) return;
          e.preventDefault();
          let s = this.matches(ip)
              ? this
              : Q.prev(this, ip)[0] ||
                Q.next(this, ip)[0] ||
                Q.findOne(ip, e.delegateTarget.parentNode),
            r = ix.getOrCreateInstance(s);
          if (n) {
            e.stopPropagation(), r.show(), r._selectMenuItem(e);
            return;
          }
          r._isShown() && (e.stopPropagation(), r.hide(), s.focus());
        }
      }
      F.on(document, iu, ip, ix.dataApiKeydownHandler),
        F.on(document, iu, im, ix.dataApiKeydownHandler),
        F.on(document, ic, ix.clearMenus),
        F.on(document, ih, ix.clearMenus),
        F.on(document, ic, ip, function (e) {
          e.preventDefault(), ix.getOrCreateInstance(this).toggle();
        }),
        y(ix);
      let iC = "backdrop",
        iT = "show",
        iS = `mousedown.bs.${iC}`,
        iL = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        ik = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class i_ extends B {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
        }
        static get Default() {
          return iL;
        }
        static get DefaultType() {
          return ik;
        }
        static get NAME() {
          return iC;
        }
        show(e) {
          if (!this._config.isVisible) {
            $(e);
            return;
          }
          this._append();
          let t = this._getElement();
          this._config.isAnimated && p(t),
            t.classList.add(iT),
            this._emulateAnimation(() => {
              $(e);
            });
        }
        hide(e) {
          if (!this._config.isVisible) {
            $(e);
            return;
          }
          this._getElement().classList.remove(iT),
            this._emulateAnimation(() => {
              this.dispose(), $(e);
            });
        }
        dispose() {
          this._isAppended &&
            (F.off(this._element, iS),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            let e = document.createElement("div");
            (e.className = this._config.className),
              this._config.isAnimated && e.classList.add("fade"),
              (this._element = e);
          }
          return this._element;
        }
        _configAfterMerge(e) {
          return (e.rootElement = c(e.rootElement)), e;
        }
        _append() {
          if (this._isAppended) return;
          let e = this._getElement();
          this._config.rootElement.append(e),
            F.on(e, iS, () => {
              $(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }
        _emulateAnimation(e) {
          w(e, this._getElement(), this._config.isAnimated);
        }
      }
      let iO = ".bs.focustrap",
        iD = `focusin${iO}`,
        i9 = `keydown.tab${iO}`,
        iI = "backward",
        iP = { autofocus: !0, trapElement: null },
        iM = { autofocus: "boolean", trapElement: "element" };
      class iN extends B {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        static get Default() {
          return iP;
        }
        static get DefaultType() {
          return iM;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          !this._isActive &&
            (this._config.autofocus && this._config.trapElement.focus(),
            F.off(document, iO),
            F.on(document, iD, (e) => this._handleFocusin(e)),
            F.on(document, i9, (e) => this._handleKeydown(e)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), F.off(document, iO));
        }
        _handleFocusin(e) {
          let { trapElement: t } = this._config;
          if (e.target === document || e.target === t || t.contains(e.target))
            return;
          let i = Q.focusableChildren(t);
          0 === i.length
            ? t.focus()
            : this._lastTabNavDirection === iI
            ? i[i.length - 1].focus()
            : i[0].focus();
        }
        _handleKeydown(e) {
          "Tab" === e.key &&
            (this._lastTabNavDirection = e.shiftKey ? iI : "forward");
        }
      }
      let iq = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        iF = ".sticky-top",
        iH = "padding-right",
        ij = "margin-right";
      class iz {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          let e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          let e = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, iH, (t) => t + e),
            this._setElementAttributes(iq, iH, (t) => t + e),
            this._setElementAttributes(iF, ij, (t) => t - e);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, iH),
            this._resetElementAttributes(iq, iH),
            this._resetElementAttributes(iF, ij);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(e, t, i) {
          let n = this.getWidth(),
            s = (e) => {
              if (e !== this._element && window.innerWidth > e.clientWidth + n)
                return;
              this._saveInitialAttribute(e, t);
              let s = window.getComputedStyle(e).getPropertyValue(t);
              e.style.setProperty(t, `${i(Number.parseFloat(s))}px`);
            };
          this._applyManipulationCallback(e, s);
        }
        _saveInitialAttribute(e, t) {
          let i = e.style.getPropertyValue(t);
          i && W.setDataAttribute(e, t, i);
        }
        _resetElementAttributes(e, t) {
          let i = (e) => {
            let i = W.getDataAttribute(e, t);
            if (null === i) {
              e.style.removeProperty(t);
              return;
            }
            W.removeDataAttribute(e, t), e.style.setProperty(t, i);
          };
          this._applyManipulationCallback(e, i);
        }
        _applyManipulationCallback(e, t) {
          if (l(e)) {
            t(e);
            return;
          }
          for (let i of Q.find(e, this._element)) t(i);
        }
      }
      let iW = ".bs.modal",
        iB = `hide${iW}`,
        iR = `hidePrevented${iW}`,
        i0 = `hidden${iW}`,
        iV = `show${iW}`,
        iQ = `shown${iW}`,
        i4 = `resize${iW}`,
        iK = `click.dismiss${iW}`,
        iY = `mousedown.dismiss${iW}`,
        iU = `keydown.dismiss${iW}`,
        i1 = `click${iW}.data-api`,
        i3 = "modal-open",
        i2 = "show",
        iX = "modal-static",
        i6 = { backdrop: !0, focus: !0, keyboard: !0 },
        i7 = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class i5 extends R {
        constructor(e, t) {
          super(e, t),
            (this._dialog = Q.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new iz()),
            this._addEventListeners();
        }
        static get Default() {
          return i6;
        }
        static get DefaultType() {
          return i7;
        }
        static get NAME() {
          return "modal";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown || this._isTransitioning) return;
          let t = F.trigger(this._element, iV, { relatedTarget: e });
          !t.defaultPrevented &&
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(i3),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
        }
        hide() {
          if (!this._isShown || this._isTransitioning) return;
          let e = F.trigger(this._element, iB);
          !e.defaultPrevented &&
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(i2),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            ));
        }
        dispose() {
          F.off(window, iW),
            F.off(this._dialog, iW),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new i_({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new iN({ trapElement: this._element });
        }
        _showElement(e) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0);
          let t = Q.findOne(".modal-body", this._dialog);
          t && (t.scrollTop = 0),
            p(this._element),
            this._element.classList.add(i2);
          let i = () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              F.trigger(this._element, iQ, { relatedTarget: e });
          };
          this._queueCallback(i, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          F.on(this._element, iU, (e) => {
            if ("Escape" === e.key) {
              if (this._config.keyboard) {
                this.hide();
                return;
              }
              this._triggerBackdropTransition();
            }
          }),
            F.on(window, i4, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            F.on(this._element, iY, (e) => {
              F.one(this._element, iK, (t) => {
                if (this._element === e.target && this._element === t.target) {
                  if ("static" === this._config.backdrop) {
                    this._triggerBackdropTransition();
                    return;
                  }
                  this._config.backdrop && this.hide();
                }
              });
            });
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(i3),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                F.trigger(this._element, i0);
            });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          let e = F.trigger(this._element, iR);
          if (e.defaultPrevented) return;
          let t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            i = this._element.style.overflowY;
          !("hidden" === i || this._element.classList.contains(iX)) &&
            (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(iX),
            this._queueCallback(() => {
              this._element.classList.remove(iX),
                this._queueCallback(() => {
                  this._element.style.overflowY = i;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          let e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._scrollBar.getWidth(),
            i = t > 0;
          if (i && !e) {
            let n = b() ? "paddingLeft" : "paddingRight";
            this._element.style[n] = `${t}px`;
          }
          if (!i && e) {
            let s = b() ? "paddingRight" : "paddingLeft";
            this._element.style[s] = `${t}px`;
          }
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            let i = i5.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
              i[e](t);
            }
          });
        }
      }
      F.on(document, i1, '[data-bs-toggle="modal"]', function (e) {
        let t = Q.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          F.one(t, iV, (e) => {
            !e.defaultPrevented &&
              F.one(t, i0, () => {
                u(this) && this.focus();
              });
          });
        let i = Q.findOne(".modal.show");
        i && i5.getInstance(i).hide();
        let n = i5.getOrCreateInstance(t);
        n.toggle(this);
      }),
        K(i5),
        y(i5);
      let iG = ".bs.offcanvas",
        iJ = ".data-api",
        iZ = `load${iG}${iJ}`,
        ne = "show",
        nt = "showing",
        ni = "hiding",
        nn = ".offcanvas.show",
        ns = `show${iG}`,
        nr = `shown${iG}`,
        no = `hide${iG}`,
        na = `hidePrevented${iG}`,
        nl = `hidden${iG}`,
        nc = `resize${iG}`,
        nu = `click${iG}${iJ}`,
        nh = `keydown.dismiss${iG}`,
        nd = { backdrop: !0, keyboard: !0, scroll: !1 },
        nf = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class np extends R {
        constructor(e, t) {
          super(e, t),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }
        static get Default() {
          return nd;
        }
        static get DefaultType() {
          return nf;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown) return;
          let t = F.trigger(this._element, ns, { relatedTarget: e });
          if (t.defaultPrevented) return;
          (this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new iz().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(nt);
          let i = () => {
            (!this._config.scroll || this._config.backdrop) &&
              this._focustrap.activate(),
              this._element.classList.add(ne),
              this._element.classList.remove(nt),
              F.trigger(this._element, nr, { relatedTarget: e });
          };
          this._queueCallback(i, this._element, !0);
        }
        hide() {
          if (!this._isShown) return;
          let e = F.trigger(this._element, no);
          if (e.defaultPrevented) return;
          this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(ni),
            this._backdrop.hide();
          let t = () => {
            this._element.classList.remove(ne, ni),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              this._config.scroll || new iz().reset(),
              F.trigger(this._element, nl);
          };
          this._queueCallback(t, this._element, !0);
        }
        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        _initializeBackDrop() {
          let e = () => {
              if ("static" === this._config.backdrop) {
                F.trigger(this._element, na);
                return;
              }
              this.hide();
            },
            t = Boolean(this._config.backdrop);
          return new i_({
            className: "offcanvas-backdrop",
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t ? e : null,
          });
        }
        _initializeFocusTrap() {
          return new iN({ trapElement: this._element });
        }
        _addEventListeners() {
          F.on(this._element, nh, (e) => {
            if ("Escape" === e.key) {
              if (this._config.keyboard) {
                this.hide();
                return;
              }
              F.trigger(this._element, na);
            }
          });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = np.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      F.on(document, nu, '[data-bs-toggle="offcanvas"]', function (e) {
        let t = Q.getElementFromSelector(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this))
        )
          return;
        F.one(t, nl, () => {
          u(this) && this.focus();
        });
        let i = Q.findOne(nn);
        i && i !== t && np.getInstance(i).hide();
        let n = np.getOrCreateInstance(t);
        n.toggle(this);
      }),
        F.on(window, iZ, () => {
          for (let e of Q.find(nn)) np.getOrCreateInstance(e).show();
        }),
        F.on(window, nc, () => {
          for (let e of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(e).position &&
              np.getOrCreateInstance(e).hide();
        }),
        K(np),
        y(np);
      let ng = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        nm = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        n8 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        nv = (e, t) => {
          let i = e.nodeName.toLowerCase();
          return t.includes(i)
            ? !nm.has(i) || Boolean(n8.test(e.nodeValue))
            : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
        },
        nb = {
          allowList: ng,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        ny = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        n$ = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class nw extends B {
        constructor(e) {
          super(), (this._config = this._getConfig(e));
        }
        static get Default() {
          return nb;
        }
        static get DefaultType() {
          return ny;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((e) => this._resolvePossibleFunction(e))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(e) {
          return (
            this._checkContent(e),
            (this._config.content = { ...this._config.content, ...e }),
            this
          );
        }
        toHtml() {
          let e = document.createElement("div");
          for (let [t, i] of ((e.innerHTML = this._maybeSanitize(
            this._config.template
          )),
          Object.entries(this._config.content)))
            this._setContent(e, i, t);
          let n = e.children[0],
            s = this._resolvePossibleFunction(this._config.extraClass);
          return s && n.classList.add(...s.split(" ")), n;
        }
        _typeCheckConfig(e) {
          super._typeCheckConfig(e), this._checkContent(e.content);
        }
        _checkContent(e) {
          for (let [t, i] of Object.entries(e))
            super._typeCheckConfig({ selector: t, entry: i }, n$);
        }
        _setContent(e, t, i) {
          let n = Q.findOne(i, e);
          if (n) {
            if (!(t = this._resolvePossibleFunction(t))) {
              n.remove();
              return;
            }
            if (l(t)) {
              this._putElementInTemplate(c(t), n);
              return;
            }
            if (this._config.html) {
              n.innerHTML = this._maybeSanitize(t);
              return;
            }
            n.textContent = t;
          }
        }
        _maybeSanitize(e) {
          return this._config.sanitize
            ? (function e(t, i, n) {
                if (!t.length) return t;
                if (n && "function" == typeof n) return n(t);
                let s = new window.DOMParser(),
                  r = s.parseFromString(t, "text/html"),
                  o = [].concat(...r.body.querySelectorAll("*"));
                for (let a of o) {
                  let l = a.nodeName.toLowerCase();
                  if (!Object.keys(i).includes(l)) {
                    a.remove();
                    continue;
                  }
                  let c = [].concat(...a.attributes),
                    u = [].concat(i["*"] || [], i[l] || []);
                  for (let h of c) nv(h, u) || a.removeAttribute(h.nodeName);
                }
                return r.body.innerHTML;
              })(e, this._config.allowList, this._config.sanitizeFn)
            : e;
        }
        _resolvePossibleFunction(e) {
          return $(e, [this]);
        }
        _putElementInTemplate(e, t) {
          if (this._config.html) {
            (t.innerHTML = ""), t.append(e);
            return;
          }
          t.textContent = e.textContent;
        }
      }
      let nA = new Set(["sanitize", "allowList", "sanitizeFn"]),
        nE = "fade",
        nx = "show",
        nC = ".modal",
        nT = "hide.bs.modal",
        nS = "hover",
        nL = "focus",
        nk = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: b() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: b() ? "right" : "left",
        },
        n_ = {
          allowList: ng,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 6],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        nO = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class nD extends R {
        constructor(e, t) {
          if (void 0 === tZ)
            throw TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          super(e, t),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
          return n_;
        }
        static get DefaultType() {
          return nO;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          if (this._isEnabled) {
            if (
              ((this._activeTrigger.click = !this._activeTrigger.click),
              this._isShown())
            ) {
              this._leave();
              return;
            }
            this._enter();
          }
        }
        dispose() {
          clearTimeout(this._timeout),
            F.off(this._element.closest(nC), nT, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title")
              ),
            this._disposePopper(),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw Error("Please use show on visible elements");
          if (!(this._isWithContent() && this._isEnabled)) return;
          let e = F.trigger(this._element, this.constructor.eventName("show")),
            t = d(this._element),
            i = (t || this._element.ownerDocument.documentElement).contains(
              this._element
            );
          if (e.defaultPrevented || !i) return;
          this._disposePopper();
          let n = this._getTipElement();
          this._element.setAttribute("aria-describedby", n.getAttribute("id"));
          let { container: s } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (s.append(n),
              F.trigger(this._element, this.constructor.eventName("inserted"))),
            (this._popper = this._createPopper(n)),
            n.classList.add(nx),
            "ontouchstart" in document.documentElement)
          )
            for (let r of [].concat(...document.body.children))
              F.on(r, "mouseover", f);
          let o = () => {
            F.trigger(this._element, this.constructor.eventName("shown")),
              !1 === this._isHovered && this._leave(),
              (this._isHovered = !1);
          };
          this._queueCallback(o, this.tip, this._isAnimated());
        }
        hide() {
          if (!this._isShown()) return;
          let e = F.trigger(this._element, this.constructor.eventName("hide"));
          if (e.defaultPrevented) return;
          let t = this._getTipElement();
          if (
            (t.classList.remove(nx), "ontouchstart" in document.documentElement)
          )
            for (let i of [].concat(...document.body.children))
              F.off(i, "mouseover", f);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[nL] = !1),
            (this._activeTrigger[nS] = !1),
            (this._isHovered = null);
          let n = () => {
            !this._isWithActiveTrigger() &&
              (this._isHovered || this._disposePopper(),
              this._element.removeAttribute("aria-describedby"),
              F.trigger(this._element, this.constructor.eventName("hidden")));
          };
          this._queueCallback(n, this.tip, this._isAnimated());
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          );
        }
        _createTipElement(e) {
          let t = this._getTemplateFactory(e).toHtml();
          if (!t) return null;
          t.classList.remove(nE, nx),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
          let i = r(this.constructor.NAME).toString();
          return (
            t.setAttribute("id", i),
            this._isAnimated() && t.classList.add(nE),
            t
          );
        }
        setContent(e) {
          (this._newContent = e),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(e) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(e)
              : (this._templateFactory = new nw({
                  ...this._config,
                  content: e,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(e) {
          return this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig()
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(nE))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(nx);
        }
        _createPopper(e) {
          let t = $(this._config.placement, [this, e, this._element]),
            i = nk[t.toUpperCase()];
          return tJ(this._element, e, this._getPopperConfig(i));
        }
        _getOffset() {
          let { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _resolvePossibleFunction(e) {
          return $(e, [this._element]);
        }
        _getPopperConfig(e) {
          let t = {
            placement: e,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (e) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    e.state.placement
                  );
                },
              },
            ],
          };
          return { ...t, ...$(this._config.popperConfig, [t]) };
        }
        _setListeners() {
          let e = this._config.trigger.split(" ");
          for (let t of e)
            if ("click" === t)
              F.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (e) => {
                  let t = this._initializeOnDelegatedTarget(e);
                  t.toggle();
                }
              );
            else if ("manual" !== t) {
              let i =
                  t === nS
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                n =
                  t === nS
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              F.on(this._element, i, this._config.selector, (e) => {
                let t = this._initializeOnDelegatedTarget(e);
                (t._activeTrigger["focusin" === e.type ? nL : nS] = !0),
                  t._enter();
              }),
                F.on(this._element, n, this._config.selector, (e) => {
                  let t = this._initializeOnDelegatedTarget(e);
                  (t._activeTrigger["focusout" === e.type ? nL : nS] =
                    t._element.contains(e.relatedTarget)),
                    t._leave();
                });
            }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            F.on(this._element.closest(nC), nT, this._hideModalHandler);
        }
        _fixTitle() {
          let e = this._element.getAttribute("title");
          e &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"));
        }
        _enter() {
          if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return;
          }
          (this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show);
        }
        _leave() {
          !this._isWithActiveTrigger() &&
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(e, t) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(e) {
          let t = W.getDataAttributes(this._element);
          for (let i of Object.keys(t)) nA.has(i) && delete t[i];
          return (
            (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return (
            (e.container = !1 === e.container ? document.body : c(e.container)),
            "number" == typeof e.delay &&
              (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
          );
        }
        _getDelegateConfig() {
          let e = {};
          for (let [t, i] of Object.entries(this._config))
            this.constructor.Default[t] !== i && (e[t] = i);
          return (e.selector = !1), (e.trigger = "manual"), e;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = nD.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      y(nD);
      let n9 = {
          ...nD.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click",
        },
        nI = { ...nD.DefaultType, content: "(null|string|element|function)" };
      class nP extends nD {
        static get Default() {
          return n9;
        }
        static get DefaultType() {
          return nI;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return {
            ".popover-header": this._getTitle(),
            ".popover-body": this._getContent(),
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = nP.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      y(nP);
      let nM = ".bs.scrollspy",
        nN = `activate${nM}`,
        nq = `click${nM}`,
        nF = `load${nM}.data-api`,
        nH = "active",
        nj = "[href]",
        nz = ".nav-link",
        nW = `${nz}, .nav-item > ${nz}, .list-group-item`,
        nB = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        nR = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class n0 extends R {
        constructor(e, t) {
          super(e, t),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh();
        }
        static get Default() {
          return nB;
        }
        static get DefaultType() {
          return nR;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          for (let e of (this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver()),
          this._observableSections.values()))
            this._observer.observe(e);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(e) {
          return (
            (e.target = c(e.target) || document.body),
            (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
            "string" == typeof e.threshold &&
              (e.threshold = e.threshold
                .split(",")
                .map((e) => Number.parseFloat(e))),
            e
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (F.off(this._config.target, nq),
            F.on(this._config.target, nq, nj, (e) => {
              let t = this._observableSections.get(e.target.hash);
              if (t) {
                e.preventDefault();
                let i = this._rootElement || window,
                  n = t.offsetTop - this._element.offsetTop;
                if (i.scrollTo) {
                  i.scrollTo({ top: n, behavior: "smooth" });
                  return;
                }
                i.scrollTop = n;
              }
            }));
        }
        _getNewObserver() {
          let e = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((e) => this._observerCallback(e), e);
        }
        _observerCallback(e) {
          let t = (e) => this._targetLinks.get(`#${e.target.id}`),
            i = (e) => {
              (this._previousScrollData.visibleEntryTop = e.target.offsetTop),
                this._process(t(e));
            },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
          for (let r of ((this._previousScrollData.parentScrollTop = n), e)) {
            if (!r.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(t(r));
              continue;
            }
            let o =
              r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && o) {
              if ((i(r), !n)) return;
              continue;
            }
            s || o || i(r);
          }
        }
        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()),
            (this._observableSections = new Map());
          let e = Q.find(nj, this._config.target);
          for (let t of e) {
            if (!t.hash || h(t)) continue;
            let i = Q.findOne(decodeURI(t.hash), this._element);
            u(i) &&
              (this._targetLinks.set(decodeURI(t.hash), t),
              this._observableSections.set(t.hash, i));
          }
        }
        _process(e) {
          this._activeTarget !== e &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = e),
            e.classList.add(nH),
            this._activateParents(e),
            F.trigger(this._element, nN, { relatedTarget: e }));
        }
        _activateParents(e) {
          if (e.classList.contains("dropdown-item")) {
            Q.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(
              nH
            );
            return;
          }
          for (let t of Q.parents(e, ".nav, .list-group"))
            for (let i of Q.prev(t, nW)) i.classList.add(nH);
        }
        _clearActiveClass(e) {
          e.classList.remove(nH);
          let t = Q.find(`${nj}.${nH}`, e);
          for (let i of t) i.classList.remove(nH);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = n0.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      F.on(window, nF, () => {
        for (let e of Q.find('[data-bs-spy="scroll"]'))
          n0.getOrCreateInstance(e);
      }),
        y(n0);
      let nV = ".bs.tab",
        nQ = `hide${nV}`,
        n4 = `hidden${nV}`,
        nK = `show${nV}`,
        nY = `shown${nV}`,
        nU = `click${nV}`,
        n1 = `keydown${nV}`,
        n3 = `load${nV}`,
        n2 = "ArrowRight",
        nX = "ArrowDown",
        n6 = "Home",
        n7 = "active",
        n5 = "fade",
        nG = "show",
        nJ = ".dropdown-toggle",
        nZ = `:not(${nJ})`,
        se = `.nav-link${nZ}, .list-group-item${nZ}, [role="tab"]${nZ}`,
        st =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        si = `${se}, ${st}`,
        sn = `.${n7}[data-bs-toggle="tab"], .${n7}[data-bs-toggle="pill"], .${n7}[data-bs-toggle="list"]`;
      class ss extends R {
        constructor(e) {
          if (
            (super(e),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            !this._parent)
          )
            return;
          this._setInitialAttributes(this._parent, this._getChildren()),
            F.on(this._element, n1, (e) => this._keydown(e));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          let e = this._element;
          if (this._elemIsActive(e)) return;
          let t = this._getActiveElem(),
            i = t ? F.trigger(t, nQ, { relatedTarget: e }) : null,
            n = F.trigger(e, nK, { relatedTarget: t });
          !n.defaultPrevented &&
            (!i || !i.defaultPrevented) &&
            (this._deactivate(t, e), this._activate(e, t));
        }
        _activate(e, t) {
          if (!e) return;
          e.classList.add(n7), this._activate(Q.getElementFromSelector(e));
          let i = () => {
            if ("tab" !== e.getAttribute("role")) {
              e.classList.add(nG);
              return;
            }
            e.removeAttribute("tabindex"),
              e.setAttribute("aria-selected", !0),
              this._toggleDropDown(e, !0),
              F.trigger(e, nY, { relatedTarget: t });
          };
          this._queueCallback(i, e, e.classList.contains(n5));
        }
        _deactivate(e, t) {
          if (!e) return;
          e.classList.remove(n7),
            e.blur(),
            this._deactivate(Q.getElementFromSelector(e));
          let i = () => {
            if ("tab" !== e.getAttribute("role")) {
              e.classList.remove(nG);
              return;
            }
            e.setAttribute("aria-selected", !1),
              e.setAttribute("tabindex", "-1"),
              this._toggleDropDown(e, !1),
              F.trigger(e, n4, { relatedTarget: t });
          };
          this._queueCallback(i, e, e.classList.contains(n5));
        }
        _keydown(e) {
          if (!["ArrowLeft", n2, "ArrowUp", nX, n6, "End"].includes(e.key))
            return;
          e.stopPropagation(), e.preventDefault();
          let t = this._getChildren().filter((e) => !h(e)),
            i;
          if ([n6, "End"].includes(e.key))
            i = t[e.key === n6 ? 0 : t.length - 1];
          else {
            let n = [n2, nX].includes(e.key);
            i = A(t, e.target, n, !0);
          }
          i &&
            (i.focus({ preventScroll: !0 }), ss.getOrCreateInstance(i).show());
        }
        _getChildren() {
          return Q.find(si, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((e) => this._elemIsActive(e)) || null;
        }
        _setInitialAttributes(e, t) {
          for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"),
          t))
            this._setInitialAttributesOnChild(i);
        }
        _setInitialAttributesOnChild(e) {
          e = this._getInnerElement(e);
          let t = this._elemIsActive(e),
            i = this._getOuterElement(e);
          e.setAttribute("aria-selected", t),
            i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e);
        }
        _setInitialAttributesOnTargetPanel(e) {
          let t = Q.getElementFromSelector(e);
          t &&
            (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id &&
              this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
        }
        _toggleDropDown(e, t) {
          let i = this._getOuterElement(e);
          if (!i.classList.contains("dropdown")) return;
          let n = (e, n) => {
            let s = Q.findOne(e, i);
            s && s.classList.toggle(n, t);
          };
          n(nJ, n7),
            n(".dropdown-menu", nG),
            i.setAttribute("aria-expanded", t);
        }
        _setAttributeIfNotExists(e, t, i) {
          e.hasAttribute(t) || e.setAttribute(t, i);
        }
        _elemIsActive(e) {
          return e.classList.contains(n7);
        }
        _getInnerElement(e) {
          return e.matches(si) ? e : Q.findOne(si, e);
        }
        _getOuterElement(e) {
          return e.closest(".nav-item, .list-group-item") || e;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = ss.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      F.on(document, nU, st, function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          !h(this) && ss.getOrCreateInstance(this).show();
      }),
        F.on(window, n3, () => {
          for (let e of Q.find(sn)) ss.getOrCreateInstance(e);
        }),
        y(ss);
      let sr = ".bs.toast",
        so = `mouseover${sr}`,
        sa = `mouseout${sr}`,
        sl = `focusin${sr}`,
        sc = `focusout${sr}`,
        su = `hide${sr}`,
        sh = `hidden${sr}`,
        sd = `show${sr}`,
        sf = `shown${sr}`,
        sp = "hide",
        sg = "show",
        sm = "showing",
        s8 = { animation: "boolean", autohide: "boolean", delay: "number" },
        sv = { animation: !0, autohide: !0, delay: 5e3 };
      class sb extends R {
        constructor(e, t) {
          super(e, t),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get Default() {
          return sv;
        }
        static get DefaultType() {
          return s8;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          let e = F.trigger(this._element, sd);
          if (e.defaultPrevented) return;
          this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
          let t = () => {
            this._element.classList.remove(sm),
              F.trigger(this._element, sf),
              this._maybeScheduleHide();
          };
          this._element.classList.remove(sp),
            p(this._element),
            this._element.classList.add(sg, sm),
            this._queueCallback(t, this._element, this._config.animation);
        }
        hide() {
          if (!this.isShown()) return;
          let e = F.trigger(this._element, su);
          if (e.defaultPrevented) return;
          let t = () => {
            this._element.classList.add(sp),
              this._element.classList.remove(sm, sg),
              F.trigger(this._element, sh);
          };
          this._element.classList.add(sm),
            this._queueCallback(t, this._element, this._config.animation);
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(sg),
            super.dispose();
        }
        isShown() {
          return this._element.classList.contains(sg);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            !this._hasMouseInteraction &&
            !this._hasKeyboardInteraction &&
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = t;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = t;
          }
          if (t) {
            this._clearTimeout();
            return;
          }
          let i = e.relatedTarget;
          !(this._element === i || this._element.contains(i)) &&
            this._maybeScheduleHide();
        }
        _setListeners() {
          F.on(this._element, so, (e) => this._onInteraction(e, !0)),
            F.on(this._element, sa, (e) => this._onInteraction(e, !1)),
            F.on(this._element, sl, (e) => this._onInteraction(e, !0)),
            F.on(this._element, sc, (e) => this._onInteraction(e, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = sb.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      return (
        K(sb),
        y(sb),
        {
          Alert: G,
          Button: ee,
          Carousel: eO,
          Collapse: eR,
          Dropdown: ix,
          Modal: i5,
          Offcanvas: np,
          Popover: nP,
          ScrollSpy: n0,
          Tab: ss,
          Toast: sb,
          Tooltip: nD,
        }
      );
    }),
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
          t()),
    window.Element &&
      !Element.prototype.closest &&
      (Element.prototype.closest = function (e) {
        var t,
          i = (this.document || this.ownerDocument).querySelectorAll(e),
          n = this;
        do for (t = i.length; --t >= 0 && i.item(t) !== n; );
        while (t < 0 && (n = n.parentElement));
        return n;
      }),
    (function () {
      if ("function" == typeof window.CustomEvent) return !1;
      function e(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
      }
      (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })(),
    (function () {
      for (
        var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
        i < t.length && !window.requestAnimationFrame;
        ++i
      )
        (window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[t[i] + "CancelAnimationFrame"] ||
            window[t[i] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (t, i) {
          var n = new Date().getTime(),
            s = Math.max(0, 16 - (n - e)),
            r = window.setTimeout(function () {
              t(n + s);
            }, s);
          return (e = n + s), r;
        }),
        window.cancelAnimationFrame ||
          (window.cancelAnimationFrame = function (e) {
            clearTimeout(e);
          });
    })(),
    (i =
      "undefined" != typeof global
        ? global
        : "undefined" != typeof window
        ? window
        : void 0),
    (n = function (e) {
      var t = {
          ignore: "[data-scroll-ignore]",
          header: null,
          topOnEmptyHash: !0,
          speed: 500,
          speedAsDuration: !1,
          durationMax: null,
          durationMin: null,
          clip: !0,
          offset: 0,
          easing: "easeInOutCubic",
          customEasing: null,
          updateURL: !0,
          popstate: !0,
          emitEvents: !0,
        },
        i = function () {
          var e = {};
          return (
            Array.prototype.forEach.call(arguments, function (t) {
              for (var i in t) {
                if (!t.hasOwnProperty(i)) return;
                e[i] = t[i];
              }
            }),
            e
          );
        },
        n = function (e) {
          "#" === e.charAt(0) && (e = e.substr(1));
          for (
            var t,
              i = String(e),
              n = i.length,
              s = -1,
              r = "",
              o = i.charCodeAt(0);
            ++s < n;

          ) {
            if (0 === (t = i.charCodeAt(s)))
              throw new InvalidCharacterError(
                "Invalid character: the input contains U+0000."
              );
            if (
              (t >= 1 && t <= 31) ||
              127 == t ||
              (0 === s && t >= 48 && t <= 57) ||
              (1 === s && t >= 48 && t <= 57 && 45 === o)
            ) {
              r += "\\" + t.toString(16) + " ";
              continue;
            }
            if (
              t >= 128 ||
              45 === t ||
              95 === t ||
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 90) ||
              (t >= 97 && t <= 122)
            ) {
              r += i.charAt(s);
              continue;
            }
            r += "\\" + i.charAt(s);
          }
          return "#" + r;
        },
        s = function (e, t) {
          var i;
          return (
            "easeInQuad" === e.easing && (i = t * t),
            "easeOutQuad" === e.easing && (i = t * (2 - t)),
            "easeInOutQuad" === e.easing &&
              (i = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
            "easeInCubic" === e.easing && (i = t * t * t),
            "easeOutCubic" === e.easing && (i = --t * t * t + 1),
            "easeInOutCubic" === e.easing &&
              (i =
                t < 0.5
                  ? 4 * t * t * t
                  : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
            "easeInQuart" === e.easing && (i = t * t * t * t),
            "easeOutQuart" === e.easing && (i = 1 - --t * t * t * t),
            "easeInOutQuart" === e.easing &&
              (i = t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
            "easeInQuint" === e.easing && (i = t * t * t * t * t),
            "easeOutQuint" === e.easing && (i = 1 + --t * t * t * t * t),
            "easeInOutQuint" === e.easing &&
              (i =
                t < 0.5
                  ? 16 * t * t * t * t * t
                  : 1 + 16 * --t * t * t * t * t),
            e.customEasing && (i = e.customEasing(t)),
            i || t
          );
        },
        r = function () {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        },
        o = function (t, i, n, s) {
          var o = 0;
          if (t.offsetParent)
            do (o += t.offsetTop), (t = t.offsetParent);
            while (t);
          return (
            (o = Math.max(o - i - n, 0)),
            s && (o = Math.min(o, r() - e.innerHeight)),
            o
          );
        },
        a = function (t) {
          var i;
          return t
            ? ((i = t),
              parseInt(e.getComputedStyle(i).height, 10) + t.offsetTop)
            : 0;
        },
        l = function (e, t) {
          var i = t.speedAsDuration ? t.speed : Math.abs((e / 1e3) * t.speed);
          return t.durationMax && i > t.durationMax
            ? t.durationMax
            : t.durationMin && i < t.durationMin
            ? t.durationMin
            : parseInt(i, 10);
        },
        c = function (t) {
          if (history.replaceState && t.updateURL && !history.state) {
            var i = e.location.hash;
            (i = i || ""),
              history.replaceState(
                { smoothScroll: JSON.stringify(t), anchor: i || e.pageYOffset },
                document.title,
                i || e.location.href
              );
          }
        },
        u = function (e, t, i) {
          !t &&
            history.pushState &&
            i.updateURL &&
            history.pushState(
              { smoothScroll: JSON.stringify(i), anchor: e.id },
              document.title,
              e === document.documentElement ? "#top" : "#" + e.id
            );
        },
        h = function (t, i, n) {
          0 === t && document.body.focus(),
            n ||
              (t.focus(),
              document.activeElement !== t &&
                (t.setAttribute("tabindex", "-1"),
                t.focus(),
                (t.style.outline = "none")),
              e.scrollTo(0, i));
        },
        d = function (t, i, n, s) {
          if (i.emitEvents && "function" == typeof e.CustomEvent) {
            var r = new CustomEvent(t, {
              bubbles: !0,
              detail: { anchor: n, toggle: s },
            });
            document.dispatchEvent(r);
          }
        };
      return function (f, p) {
        var g,
          m,
          v,
          b,
          y = {};
        (y.cancelScroll = function (e) {
          cancelAnimationFrame(b), (b = null), e || d("scrollCancel", g);
        }),
          (y.animateScroll = function (n, c, f) {
            y.cancelScroll();
            var p,
              m,
              $,
              w = i(g || t, f || {}),
              A = "[object Number]" === Object.prototype.toString.call(n),
              E = A || !n.tagName ? null : n;
            if (A || E) {
              var x = e.pageYOffset;
              w.header && !v && (v = document.querySelector(w.header));
              var C = a(v),
                T = A
                  ? n
                  : o(
                      E,
                      C,
                      parseInt(
                        "function" == typeof w.offset
                          ? w.offset(n, c)
                          : w.offset,
                        10
                      ),
                      w.clip
                    ),
                S = T - x,
                L = r(),
                k = 0,
                _ = l(S, w),
                O = function (t, i) {
                  var s = e.pageYOffset;
                  if (t == i || s == i || (x < i && e.innerHeight + s) >= L)
                    return (
                      y.cancelScroll(!0),
                      h(n, i, A),
                      d("scrollStop", w, n, c),
                      (p = null),
                      (b = null),
                      !0
                    );
                },
                D = function (t) {
                  p || (p = t),
                    (k += t - p),
                    (m = (m = 0 === _ ? 0 : k / _) > 1 ? 1 : m),
                    ($ = x + S * s(w, m)),
                    e.scrollTo(0, Math.floor($)),
                    O($, T) || ((b = e.requestAnimationFrame(D)), (p = t));
                };
              if (
                (0 === e.pageYOffset && e.scrollTo(0, 0),
                u(n, A, w),
                "matchMedia" in e &&
                  e.matchMedia("(prefers-reduced-motion)").matches)
              ) {
                h(n, Math.floor(T), !1);
                return;
              }
              d("scrollStart", w, n, c),
                y.cancelScroll(!0),
                e.requestAnimationFrame(D);
            }
          });
        var $ = function (t) {
            var i, s;
            if (
              !(
                t.defaultPrevented ||
                0 !== t.button ||
                t.metaKey ||
                t.ctrlKey ||
                t.shiftKey ||
                !("closest" in t.target) ||
                !(m = t.target.closest(f)) ||
                "a" !== m.tagName.toLowerCase() ||
                t.target.closest(g.ignore)
              ) &&
              m.hostname === e.location.hostname &&
              m.pathname === e.location.pathname &&
              /#/.test(m.href)
            ) {
              try {
                i = n(decodeURIComponent(m.hash));
              } catch (r) {
                i = n(m.hash);
              }
              if ("#" === i) {
                if (!g.topOnEmptyHash) return;
                s = document.documentElement;
              } else s = document.querySelector(i);
              (s = s || "#top" !== i ? s : document.documentElement) &&
                (t.preventDefault(), c(g), y.animateScroll(s, m));
            }
          },
          w = function (e) {
            if (
              null !== history.state &&
              history.state.smoothScroll &&
              history.state.smoothScroll === JSON.stringify(g)
            ) {
              var t = history.state.anchor;
              if (
                "string" != typeof t ||
                !t ||
                (t = document.querySelector(n(history.state.anchor)))
              )
                y.animateScroll(t, null, { updateURL: !1 });
            }
          };
        return (
          (y.destroy = function () {
            g &&
              (document.removeEventListener("click", $, !1),
              e.removeEventListener("popstate", w, !1),
              y.cancelScroll(),
              (g = null),
              (m = null),
              (v = null),
              (b = null));
          }),
          (function () {
            if (
              !(
                "querySelector" in document &&
                "addEventListener" in e &&
                "requestAnimationFrame" in e &&
                "closest" in e.Element.prototype
              )
            )
              throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            y.destroy(),
              (v = (g = i(t, p || {})).header
                ? document.querySelector(g.header)
                : null),
              document.addEventListener("click", $, !1),
              g.updateURL &&
                g.popstate &&
                e.addEventListener("popstate", w, !1);
          })(),
          y
        );
      };
    }),
    "function" == typeof define && define.amd
      ? define([], function () {
          return n(i);
        })
      : "object" == typeof exports
      ? (module.exports = n(i))
      : (i.SmoothScroll = n(i)),
    (() => {
      let e = document.querySelector(".navbar-sticky");
      if (null == e) return;
      let t = e.classList,
        i = e.offsetHeight;
      t.contains("position-absolute")
        ? window.addEventListener("scroll", (t) => {
            t.currentTarget.pageYOffset > 500
              ? e.classList.add("navbar-stuck")
              : e.classList.remove("navbar-stuck");
          })
        : window.addEventListener("scroll", (t) => {
            t.currentTarget.pageYOffset > 500
              ? ((document.body.style.paddingTop = i + "px"),
                e.classList.add("navbar-stuck"))
              : ((document.body.style.paddingTop = ""),
                e.classList.remove("navbar-stuck"));
          });
    })(),
    new SmoothScroll("[data-scroll]", {
      speed: 800,
      speedAsDuration: !0,
      offset: (e, t) => t.dataset.scrollOffset || 40,
      header: "[data-scroll-header]",
      updateURL: !1,
    }),
    (() => {
      let e = document.querySelector(".btn-scroll-top");
      if (null == e) return;
      let t = parseInt(600, 10);
      window.addEventListener("scroll", (i) => {
        i.currentTarget.pageYOffset > t
          ? e.classList.add("show")
          : e.classList.remove("show");
      });
    })(),
    (() => {
      let e = document.querySelectorAll(".password-toggle");
      for (let t = 0; t < e.length; t++) {
        let i = e[t].querySelector(".form-control");
        e[t].querySelector(".password-toggle-btn").addEventListener(
          "click",
          (e) => {
            "checkbox" === e.target.type &&
              (e.target.checked ? (i.type = "text") : (i.type = "password"));
          },
          !1
        );
      }
    })(),
    (() => {
      let e = document.querySelector(".rellax");
      null !== e && new Rellax(".rellax", { horizontal: !0 });
    })(),
    (() => {
      let e = document.querySelectorAll(".parallax");
      for (let t = 0; t < e.length; t++) new Parallax(e[t]);
    })();
  (e, t, i) => {
    for (let n = 0; n < e.length; n++) t.call(void 0, n, e[n]);
  },
    (() => {
      let e = document.querySelectorAll(".gallery");
      if (e.length)
        for (let t = 0; t < e.length; t++) {
          let i = !!e[t].dataset.thumbnails,
            n = !!e[t].dataset.video,
            s = [lgZoom, lgFullscreen],
            r = n ? [lgVideo] : [],
            o = i ? [lgThumbnail] : [],
            a = [...s, ...r, ...o];
          lightGallery(e[t], {
            selector: ".gallery-item",
            plugins: a,
            licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
            download: !1,
            autoplayVideoOnSlide: !0,
            zoomFromOrigin: !1,
            youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
            vimeoPlayerParams: { byline: 0, portrait: 0, color: "6366f1" },
          });
        }
    })(),
    (() => {
      let e = document.querySelectorAll(".range-slider");
      for (let t = 0; t < e.length; t++) {
        let i = e[t].querySelector(".range-slider-ui"),
          n = e[t].querySelector(".range-slider-value-min"),
          s = e[t].querySelector(".range-slider-value-max"),
          r = {
            dataStartMin: parseInt(e[t].dataset.startMin, 10),
            dataStartMax: parseInt(e[t].dataset.startMax, 10),
            dataMin: parseInt(e[t].dataset.min, 10),
            dataMax: parseInt(e[t].dataset.max, 10),
            dataStep: parseInt(e[t].dataset.step, 10),
            dataPips: e[t].dataset.pips,
            dataTooltips:
              !e[t].dataset.tooltips || "true" === e[t].dataset.tooltips,
            dataTooltipPrefix: e[t].dataset.tooltipPrefix || "",
            dataTooltipSuffix: e[t].dataset.tooltipSuffix || "",
          },
          o = r.dataStartMax
            ? [r.dataStartMin, r.dataStartMax]
            : [r.dataStartMin],
          a = !!r.dataStartMax || "lower";
        noUiSlider.create(i, {
          start: o,
          connect: a,
          step: r.dataStep,
          pips: !!r.dataPips && { mode: "count", values: 5 },
          tooltips: r.dataTooltips,
          range: { min: r.dataMin, max: r.dataMax },
          format: {
            to: function (e) {
              return (
                r.dataTooltipPrefix + parseInt(e, 10) + r.dataTooltipSuffix
              );
            },
            from: function (e) {
              return Number(e);
            },
          },
        }),
          i.noUiSlider.on("update", (e, t) => {
            let i = e[t];
            (i = i.replace(/\D/g, "")),
              t
                ? s && (s.value = Math.round(i))
                : n && (n.value = Math.round(i));
          }),
          n &&
            n.addEventListener("change", function () {
              i.noUiSlider.set([this.value, null]);
            }),
          s &&
            s.addEventListener("change", function () {
              i.noUiSlider.set([null, this.value]);
            });
      }
    })(),
    window.addEventListener(
      "load",
      () => {
        let e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, (e) => {
          e.addEventListener(
            "submit",
            (t) => {
              !1 === e.checkValidity() &&
                (t.preventDefault(), t.stopPropagation()),
                e.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    ),
    (() => {
      let e = document.querySelectorAll("[data-format]");
      if (0 !== e.length)
        for (let t = 0; t < e.length; t++) {
          let i = e[t],
            n = i.parentNode.querySelector(".credit-card-icon"),
            s;
          void 0 != i.dataset.format && (s = JSON.parse(i.dataset.format)),
            n
              ? new Cleave(i, {
                  ...s,
                  onCreditCardTypeChanged(e) {
                    n.className = "credit-card-icon " + e;
                  },
                })
              : new Cleave(i, s);
        }
    })(),
    (() => {
      let e = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      e.map((e) => new bootstrap.Tooltip(e, { trigger: "hover" }));
    })(),
    (() => {
      let e = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      e.map((e) => new bootstrap.Popover(e));
    })(),
    (() => {
      let e = [].slice.call(document.querySelectorAll(".toast"));
      e.map((e) => new bootstrap.Toast(e));
    })(),
    (() => {
      let e = document.querySelectorAll('[data-bs-toggle="video"]');
      if (e.length)
        for (let t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: "this",
            plugins: [lgVideo],
            licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
            download: !1,
            youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
            vimeoPlayerParams: { byline: 0, portrait: 0, color: "6366f1" },
          });
    })(),
    (() => {
      let e = document.querySelectorAll(".price-switch-wrapper");
      if (!(e.length <= 0))
        for (let t = 0; t < e.length; t++)
          e[t]
            .querySelector('[data-bs-toggle="price"]')
            .addEventListener("change", (e) => {
              let t = e.currentTarget.querySelector('input[type="checkbox"]'),
                i = e.currentTarget
                  .closest(".price-switch-wrapper")
                  .querySelectorAll("[data-monthly-price]"),
                n = e.currentTarget
                  .closest(".price-switch-wrapper")
                  .querySelectorAll("[data-annual-price]");
              for (let s = 0; s < i.length; s++)
                !0 == t.checked
                  ? i[s].classList.add("d-none")
                  : i[s].classList.remove("d-none");
              for (let r = 0; r < i.length; r++)
                !0 == t.checked
                  ? n[r].classList.remove("d-none")
                  : n[r].classList.add("d-none");
            });
    })(),
    (() => {
      let e = document.querySelectorAll(".masonry-grid"),
        t;
      if (null !== e)
        for (let i = 0; i < e.length; i++) {
          (t = new Shuffle(e[i], {
            itemSelector: ".masonry-grid-item",
            sizer: ".masonry-grid-item",
          })),
            imagesLoaded(e[i]).on("progress", () => {
              t.layout();
            });
          let n = e[i].closest(".masonry-filterable");
          if (null === n) return;
          let s = n.querySelectorAll(".masonry-filters [data-group]");
          for (let r = 0; r < s.length; r++)
            s[r].addEventListener("click", function (e) {
              let i = n.querySelector(".masonry-filters .active"),
                s = this.dataset.group;
              null !== i && i.classList.remove("active"),
                this.classList.add("active"),
                t.filter(s),
                e.preventDefault();
            });
        }
    })(),
    (() => {
      let e = document.querySelectorAll(".subscription-form");
      if (null === e) return;
      for (let t = 0; t < e.length; t++) {
        let i = e[t].querySelector('button[type="submit"]'),
          n = i.innerHTML,
          s = e[t].querySelector(".form-control"),
          r = e[t].querySelector(".subscription-form-antispam"),
          o = e[t].querySelector(".subscription-status");
        e[t].addEventListener("submit", function (e) {
          e && e.preventDefault(), "" === r.value && a(this, i, s, n, o);
        });
      }
      let a = (e, t, i, n, s) => {
        t.innerHTML = "Sending...";
        let r = e.action.replace("/post?", "/post-json?"),
          o = "&" + i.name + "=" + encodeURIComponent(i.value),
          a = document.createElement("script");
        (a.src = r + "&c=callback" + o), document.body.appendChild(a);
        let l = "callback";
        window[l] = (e) => {
          delete window[l],
            document.body.removeChild(a),
            (t.innerHTML = n),
            "success" == e.result
              ? (i.classList.remove("is-invalid"),
                i.classList.add("is-valid"),
                s.classList.remove("status-error"),
                s.classList.add("status-success"),
                (s.innerHTML = e.msg),
                setTimeout(() => {
                  i.classList.remove("is-valid"),
                    (s.innerHTML = ""),
                    s.classList.remove("status-success");
                }, 6e3))
              : (i.classList.remove("is-valid"),
                i.classList.add("is-invalid"),
                s.classList.remove("status-success"),
                s.classList.add("status-error"),
                (s.innerHTML = e.msg.substring(4)),
                setTimeout(() => {
                  i.classList.remove("is-invalid"),
                    (s.innerHTML = ""),
                    s.classList.remove("status-error");
                }, 6e3));
        };
      };
    })(),
    (() => {
      let e = document.querySelectorAll(".animation-on-hover");
      e.forEach((e) => {
        e.addEventListener("mouseover", () => {
          let t = e.querySelectorAll("lottie-player");
          t.forEach((e) => {
            e.setDirection(1), e.play();
          });
        }),
          e.addEventListener("mouseleave", () => {
            let t = e.querySelectorAll("lottie-player");
            t.forEach((e) => {
              e.setDirection(-1), e.play();
            });
          });
      });
    })(),
    (() => {
      let e = document.querySelectorAll(".audio-player");
      if (0 !== e.length)
        for (let t = 0; t < e.length; t++) {
          let i = e[t],
            n = i.querySelector("audio"),
            s = i.querySelector(".ap-play-button"),
            r = i.querySelector(".ap-seek-slider"),
            o = i.querySelector(".ap-volume-slider"),
            a = i.querySelector(".ap-duration"),
            l = i.querySelector(".ap-current-time"),
            c = "play",
            u = null;
          s.addEventListener("click", (e) => {
            "play" === c
              ? (e.currentTarget.classList.add("ap-pause"),
                n.play(),
                requestAnimationFrame(m),
                (c = "pause"))
              : (e.currentTarget.classList.remove("ap-pause"),
                n.pause(),
                cancelAnimationFrame(u),
                (c = "play"));
          });
          let h = (e) => {
            e === r
              ? i.style.setProperty(
                  "--seek-before-width",
                  (e.value / e.max) * 100 + "%"
                )
              : i.style.setProperty(
                  "--volume-before-width",
                  (e.value / e.max) * 100 + "%"
                );
          };
          r.addEventListener("input", (e) => {
            h(e.target);
          }),
            o.addEventListener("input", (e) => {
              h(e.target);
            });
          let d = (e) => {
              let t = Math.floor(e / 60),
                i = Math.floor(e % 60),
                n = i < 10 ? `0${i}` : `${i}`;
              return `${t}:${n}`;
            },
            f = () => {
              a.textContent = d(n.duration);
            },
            p = () => {
              r.max = Math.floor(n.duration);
            },
            g = () => {
              if (n.buffered.length > 0) {
                let e = Math.floor(n.buffered.end(n.buffered.length - 1));
                i.style.setProperty(
                  "--buffered-width",
                  `${(e / r.max) * 100}%`
                );
              }
            },
            m = () => {
              (r.value = Math.floor(n.currentTime)),
                (l.textContent = d(r.value)),
                i.style.setProperty(
                  "--seek-before-width",
                  `${(r.value / r.max) * 100}%`
                ),
                (u = requestAnimationFrame(m));
            };
          n.readyState > 0
            ? (f(), p(), g())
            : n.addEventListener("loadedmetadata", () => {
                f(), p(), g();
              }),
            n.addEventListener("progress", g),
            r.addEventListener("input", () => {
              (l.textContent = d(r.value)), n.paused || cancelAnimationFrame(u);
            }),
            r.addEventListener("change", () => {
              (n.currentTime = r.value), n.paused || requestAnimationFrame(m);
            }),
            o.addEventListener("input", (e) => {
              let t = e.target.value;
              n.volume = t / 100;
            });
        }
    })();
})();
