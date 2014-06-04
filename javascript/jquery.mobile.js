/*! jQuery Mobile v1.1.0 db342b1f315c282692791aa870455901fdb46a55 jquerymobile.com | jquery.org/license */
(function (D, s, k) { typeof define === "function" && define.amd ? define(["jquery"], function (a) { k(a, D, s); return a.mobile }) : k(D.jQuery, D, s) })(this, document, function (D, s, k) {
    (function (a, c, b, e) {
        function f(a) { for (; a && typeof a.originalEvent !== "undefined"; ) a = a.originalEvent; return a } function d(b) { for (var d = {}, f, g; b; ) { f = a.data(b, t); for (g in f) if (f[g]) d[g] = d.hasVirtualBinding = true; b = b.parentNode } return d } function g() { y && (clearTimeout(y), y = 0); y = setTimeout(function () { F = y = 0; C.length = 0; z = false; G = true }, a.vmouse.resetTimerDuration) }
        function h(b, d, g) {
            var c, h; if (!(h = g && g[b])) { if (g = !g)a: { for (g = d.target; g; ) { if ((h = a.data(g, t)) && (!b || h[b])) break a; g = g.parentNode } g = null } h = g } if (h) {
                c = d; var g = c.type, z, j; c = a.Event(c); c.type = b; h = c.originalEvent; z = a.event.props; g.search(/^(mouse|click)/) > -1 && (z = w); if (h) for (j = z.length; j; ) b = z[--j], c[b] = h[b]; if (g.search(/mouse(down|up)|click/) > -1 && !c.which) c.which = 1; if (g.search(/^touch/) !== -1 && (b = f(h), g = b.touches, b = b.changedTouches, g = g && g.length ? g[0] : b && b.length ? b[0] : e)) for (h = 0, len = u.length; h < len; h++) b = u[h],
c[b] = g[b]; a(d.target).trigger(c)
            } return c
        } function j(b) { var d = a.data(b.target, x); if (!z && (!F || F !== d)) if (d = h("v" + b.type, b)) d.isDefaultPrevented() && b.preventDefault(), d.isPropagationStopped() && b.stopPropagation(), d.isImmediatePropagationStopped() && b.stopImmediatePropagation() } function o(b) { var g = f(b).touches, c; if (g && g.length === 1 && (c = b.target, g = d(c), g.hasVirtualBinding)) F = L++, a.data(c, x, F), y && (clearTimeout(y), y = 0), A = G = false, c = f(b).touches[0], s = c.pageX, E = c.pageY, h("vmouseover", b, g), h("vmousedown", b, g) }
        function m(a) { G || (A || h("vmousecancel", a, d(a.target)), A = true, g()) } function p(b) { if (!G) { var c = f(b).touches[0], e = A, z = a.vmouse.moveDistanceThreshold; A = A || Math.abs(c.pageX - s) > z || Math.abs(c.pageY - E) > z; flags = d(b.target); A && !e && h("vmousecancel", b, flags); h("vmousemove", b, flags); g() } } function l(a) { if (!G) { G = true; var b = d(a.target), c; h("vmouseup", a, b); if (!A && (c = h("vclick", a, b)) && c.isDefaultPrevented()) c = f(a).changedTouches[0], C.push({ touchID: F, x: c.clientX, y: c.clientY }), z = true; h("vmouseout", a, b); A = false; g() } } function r(b) {
            var b =
a.data(b, t), d; if (b) for (d in b) if (b[d]) return true; return false
        } function n() { } function k(b) {
            var d = b.substr(1); return { setup: function () { r(this) || a.data(this, t, {}); a.data(this, t)[b] = true; v[b] = (v[b] || 0) + 1; v[b] === 1 && H.bind(d, j); a(this).bind(d, n); if (K) v.touchstart = (v.touchstart || 0) + 1, v.touchstart === 1 && H.bind("touchstart", o).bind("touchend", l).bind("touchmove", p).bind("scroll", m) }, teardown: function () {
                --v[b]; v[b] || H.unbind(d, j); K && (--v.touchstart, v.touchstart || H.unbind("touchstart", o).unbind("touchmove", p).unbind("touchend",
l).unbind("scroll", m)); var f = a(this), g = a.data(this, t); g && (g[b] = false); f.unbind(d, n); r(this) || f.removeData(t)
            } 
            }
        } var t = "virtualMouseBindings", x = "virtualTouchID", c = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), u = "clientX clientY pageX pageY screenX screenY".split(" "), w = a.event.props.concat(a.event.mouseHooks ? a.event.mouseHooks.props : []), v = {}, y = 0, s = 0, E = 0, A = false, C = [], z = false, G = false, K = "addEventListener" in b, H = a(b), L = 1, F = 0; a.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }; for (var I = 0; I < c.length; I++) a.event.special[c[I]] = k(c[I]); K && b.addEventListener("click", function (b) { var d = C.length, f = b.target, g, c, e, h, z; if (d) { g = b.clientX; c = b.clientY; threshold = a.vmouse.clickDistanceThreshold; for (e = f; e; ) { for (h = 0; h < d; h++) if (z = C[h], e === f && Math.abs(z.x - g) < threshold && Math.abs(z.y - c) < threshold || a.data(e, x) === z.touchID) { b.preventDefault(); b.stopPropagation(); return } e = e.parentNode } } }, true)
    })(jQuery, s, k); (function (a, c, b) {
        function e(a) {
            a = a || location.href; return "#" + a.replace(/^[^#]*#?(.*)$/,
"$1")
        } var f = "hashchange", d = k, g, h = a.event.special, j = d.documentMode, o = "on" + f in c && (j === b || j > 7); a.fn[f] = function (a) { return a ? this.bind(f, a) : this.trigger(f) }; a.fn[f].delay = 50; h[f] = a.extend(h[f], { setup: function () { if (o) return false; a(g.start) }, teardown: function () { if (o) return false; a(g.stop) } }); g = function () {
            function g() { var b = e(), d = t(r); if (b !== r) k(r = b, d), a(c).trigger(f); else if (d !== r) location.href = location.href.replace(/#.*/, "") + d; j = setTimeout(g, a.fn[f].delay) } var h = {}, j, r = e(), n = function (a) { return a }, k =
n, t = n; h.start = function () { j || g() }; h.stop = function () { j && clearTimeout(j); j = b }; a.browser.msie && !o && function () {
    var b, c; h.start = function () { if (!b) c = (c = a.fn[f].src) && c + e(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () { c || k(e()); g() }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, d.onpropertychange = function () { try { if (event.propertyName === "title") b.document.title = d.title } catch (a) { } } }; h.stop = n; t = function () { return e(b.location.href) }; k = function (g, c) {
        var e = b.document,
h = a.fn[f].domain; if (g !== c) e.title = d.title, e.open(), h && e.write('<script>document.domain="' + h + '"<\/script>'), e.close(), b.location.hash = g
    } 
} (); return h
        } ()
    })(jQuery, this); (function (a, c) {
        if (a.cleanData) { var b = a.cleanData; a.cleanData = function (f) { for (var d = 0, g; (g = f[d]) != null; d++) a(g).triggerHandler("remove"); b(f) } } else {
            var e = a.fn.remove; a.fn.remove = function (b, d) {
                return this.each(function () {
                    d || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () { a(this).triggerHandler("remove") }); return e.call(a(this),
b, d)
                })
            } 
        } a.widget = function (b, d, g) { var c = b.split(".")[0], e, b = b.split(".")[1]; e = c + "-" + b; if (!g) g = d, d = a.Widget; a.expr[":"][e] = function (d) { return !!a.data(d, b) }; a[c] = a[c] || {}; a[c][b] = function (a, b) { arguments.length && this._createWidget(a, b) }; d = new d; d.options = a.extend(true, {}, d.options); a[c][b].prototype = a.extend(true, d, { namespace: c, widgetName: b, widgetEventPrefix: a[c][b].prototype.widgetEventPrefix || b, widgetBaseClass: e }, g); a.widget.bridge(b, a[c][b]) }; a.widget.bridge = function (b, d) {
            a.fn[b] = function (g) {
                var e =
typeof g === "string", j = Array.prototype.slice.call(arguments, 1), o = this, g = !e && j.length ? a.extend.apply(null, [true, g].concat(j)) : g; if (e && g.charAt(0) === "_") return o; e ? this.each(function () { var d = a.data(this, b); if (!d) throw "cannot call methods on " + b + " prior to initialization; attempted to call method '" + g + "'"; if (!a.isFunction(d[g])) throw "no such method '" + g + "' for " + b + " widget instance"; var e = d[g].apply(d, j); if (e !== d && e !== c) return o = e, false }) : this.each(function () {
    var c = a.data(this, b); c ? c.option(g || {})._init() :
a.data(this, b, new d(g, this))
}); return o
            } 
        }; a.Widget = function (a, b) { arguments.length && this._createWidget(a, b) }; a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (b, d) { a.data(d, this.widgetName, this); this.element = a(d); this.options = a.extend(true, {}, this.options, this._getCreateOptions(), b); var g = this; this.element.bind("remove." + this.widgetName, function () { g.destroy() }); this._create(); this._trigger("create"); this._init() }, _getCreateOptions: function () {
            var b =
{}; a.metadata && (b = a.metadata.get(element)[this.widgetName]); return b
        }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") }, widget: function () { return this.element }, option: function (b, d) {
            var g = b; if (arguments.length === 0) return a.extend({}, this.options); if (typeof b === "string") {
                if (d === c) return this.options[b];
                g = {}; g[b] = d
            } this._setOptions(g); return this
        }, _setOptions: function (b) { var d = this; a.each(b, function (a, b) { d._setOption(a, b) }); return this }, _setOption: function (a, b) { this.options[a] = b; a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b); return this }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (b, d, g) {
            var c = this.options[b], d = a.Event(d);
            d.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(); g = g || {}; if (d.originalEvent) for (var b = a.event.props.length, e; b; ) e = a.event.props[--b], d[e] = d.originalEvent[e]; this.element.trigger(d, g); return !(a.isFunction(c) && c.call(this.element[0], d, g) === false || d.isDefaultPrevented())
        } 
        }
    })(jQuery); (function (a, c) {
        a.widget("mobile.widget", { _createWidget: function () { a.Widget.prototype._createWidget.apply(this, arguments); this._trigger("init") }, _getCreateOptions: function () {
            var b = this.element,
e = {}; a.each(this.options, function (a) { var d = b.jqmData(a.replace(/[A-Z]/g, function (a) { return "-" + a.toLowerCase() })); d !== c && (e[a] = d) }); return e
        }, enhanceWithin: function (b, c) { this.enhance(a(this.options.initSelector, a(b)), c) }, enhance: function (b, c) { var f, d = a(b), d = a.mobile.enhanceable(d); c && d.length && (f = (f = a.mobile.closestPageData(d)) && f.keepNativeSelector() || "", d = d.not(f)); d[this.widgetName]() }, raise: function (a) { throw "Widget [" + this.widgetName + "]: " + a; } 
        })
    })(jQuery); (function (a, c) {
        var b = {}; a.mobile = a.extend({},
{ version: "1.1.0", ns: "", subPageUrlKey: "ui-page", activePageClass: "ui-page-active", activeBtnClass: "ui-btn-active", focusClass: "ui-focus", ajaxEnabled: true, hashListeningEnabled: true, linkBindingEnabled: true, defaultPageTransition: "fade", maxTransitionWidth: false, minScrollBack: 250, touchOverflowEnabled: false, defaultDialogTransition: "pop", loadingMessage: "loading", pageLoadErrorMessage: "Error Loading Page", loadingMessageTextVisible: false, loadingMessageTheme: "a", pageLoadErrorMessageTheme: "e", autoInitializePage: true,
    pushStateEnabled: true, ignoreContentEnabled: false, orientationChangeEnabled: true, buttonMarkup: { hoverDelay: 200 }, keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 }, silentScroll: function (b) {
        if (a.type(b) !==
"number") b = a.mobile.defaultHomeScroll; a.event.special.scrollstart.enabled = false; setTimeout(function () { c.scrollTo(0, b); a(k).trigger("silentscroll", { x: 0, y: b }) }, 20); setTimeout(function () { a.event.special.scrollstart.enabled = true }, 150)
    }, nsNormalizeDict: b, nsNormalize: function (d) { return !d ? void 0 : b[d] || (b[d] = a.camelCase(a.mobile.ns + d)) }, getInheritedTheme: function (a, b) {
        for (var c = a[0], e = "", f = /ui-(bar|body|overlay)-([a-z])\b/, m, p; c; ) { m = c.className || ""; if ((p = f.exec(m)) && (e = p[2])) break; c = c.parentNode } return e ||
b || "a"
    }, closestPageData: function (a) { return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page") }, enhanceable: function (a) { return this.haveParents(a, "enhance") }, hijackable: function (a) { return this.haveParents(a, "ajax") }, haveParents: function (b, c) { if (!a.mobile.ignoreContentEnabled) return b; for (var e = b.length, f = a(), o, m, p, l = 0; l < e; l++) { m = b.eq(l); p = false; for (o = b[l]; o; ) { if ((o.getAttribute ? o.getAttribute("data-" + a.mobile.ns + c) : "") === "false") { p = true; break } o = o.parentNode } p || (f = f.add(m)) } return f } 
},
a.mobile); a.fn.jqmData = function (b, c) { var f; typeof b != "undefined" && (b && (b = a.mobile.nsNormalize(b)), f = this.data.apply(this, arguments.length < 2 ? [b] : [b, c])); return f }; a.jqmData = function (b, c, f) { var e; typeof c != "undefined" && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, f)); return e }; a.fn.jqmRemoveData = function (b) { return this.removeData(a.mobile.nsNormalize(b)) }; a.jqmRemoveData = function (b, c) { return a.removeData(b, a.mobile.nsNormalize(c)) }; a.fn.removeWithDependents = function () { a.removeWithDependents(this) }; a.removeWithDependents =
function (b) { b = a(b); (b.jqmData("dependents") || a()).remove(); b.remove() }; a.fn.addDependents = function (b) { a.addDependents(a(this), b) }; a.addDependents = function (b, c) { var f = a(b).jqmData("dependents") || a(); a(b).jqmData("dependents", a.merge(f, c)) }; a.fn.getEncodedText = function () { return a("<div/>").text(a(this).text()).html() }; a.fn.jqmEnhanceable = function () { return a.mobile.enhanceable(this) }; a.fn.jqmHijackable = function () { return a.mobile.hijackable(this) }; var e = a.find, f = /:jqmData\(([^)]*)\)/g; a.find = function (b,
c, h, j) { b = b.replace(f, "[data-" + (a.mobile.ns || "") + "$1]"); return e.call(this, b, c, h, j) }; a.extend(a.find, e); a.find.matches = function (b, c) { return a.find(b, null, null, c) }; a.find.matchesSelector = function (b, c) { return a.find(c, null, null, [b]).length > 0 } 
    })(jQuery, this); (function (a) {
        a(s); var c = a("html"); a.mobile.media = function () {
            var b = {}, e = a("<div id='jquery-mediatest'>"), f = a("<body>").append(e); return function (a) {
                if (!(a in b)) {
                    var g = k.createElement("style"), h = "@media " + a + " { #jquery-mediatest { position:absolute; } }";
                    g.type = "text/css"; g.styleSheet ? g.styleSheet.cssText = h : g.appendChild(k.createTextNode(h)); c.prepend(f).prepend(g); b[a] = e.css("position") === "absolute"; f.add(g).remove()
                } return b[a]
            } 
        } ()
    })(jQuery); (function (a, c) {
        function b(a) { var b = a.charAt(0).toUpperCase() + a.substr(1), a = (a + " " + g.join(b + " ") + b).split(" "), f; for (f in a) if (d[a[f]] !== c) return true } function e(a, b, c) {
            var d = k.createElement("div"), c = c ? [c] : g, f; for (i = 0; i < c.length; i++) {
                var e = c[i], h = "-" + e.charAt(0).toLowerCase() + e.substr(1) + "-" + a + ": " + b + ";", e = e.charAt(0).toUpperCase() +
e.substr(1) + (a.charAt(0).toUpperCase() + a.substr(1)); d.setAttribute("style", h); d.style[e] && (f = true)
            } return !!f
        } var f = a("<body>").prependTo("html"), d = f[0].style, g = ["Webkit", "Moz", "O"], h = "palmGetResource" in s, j = s.operamini && {}.toString.call(s.operamini) === "[object OperaMini]", o = s.blackberry; a.extend(a.mobile, { browser: {} }); a.mobile.browser.ie = function () { for (var a = 3, b = k.createElement("div"), c = b.all || []; b.innerHTML = "<\!--[if gt IE " + ++a + "]><br><![endif]--\>", c[0]; ); return a > 4 ? a : !a } (); a.extend(a.support,
{ orientation: "orientation" in s && "onorientationchange" in s, touch: "ontouchend" in k, cssTransitions: "WebKitTransitionEvent" in s || e("transition", "height 100ms linear"), pushState: "pushState" in history && "replaceState" in history, mediaquery: a.mobile.media("only all"), cssPseudoElement: !!b("content"), touchOverflow: !!b("overflowScrolling"), cssTransform3d: e("perspective", "10px", "moz") || a.mobile.media("(-" + g.join("-transform-3d),(-") + "-transform-3d),(transform-3d)"), boxShadow: !!b("boxShadow") && !o, scrollTop: ("pageXOffset" in
s || "scrollTop" in k.documentElement || "scrollTop" in f[0]) && !h && !j, dynamicBaseTag: function () { var b = location.protocol + "//" + location.host + location.pathname + "ui-dir/", c = a("head base"), d = null, e = "", g; c.length ? e = c.attr("href") : c = d = a("<base>", { href: b }).appendTo("head"); g = a("<a href='testurl' />").prependTo(f)[0].href; c[0].href = e || location.pathname; d && d.remove(); return g.indexOf(b) === 0 } ()
}); f.remove(); h = function () {
    var a = s.navigator.userAgent; return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") >
-1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
} (); a.mobile.gradeA = function () { return a.support.mediaquery || a.mobile.browser.ie && a.mobile.browser.ie >= 7 }; a.mobile.ajaxBlacklist = s.blackberry && !s.WebKitPoint || j || h; h && a(function () { a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet") }); a.support.boxShadow || a("html").addClass("ui-mobile-nosupport-boxshadow")
    })(jQuery); (function (a, c, b) {
        function e(b, c, d) {
            var f = d.type; d.type = c; a.event.handle.call(b,
d); d.type = f
        } a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (b, c) { a.fn[c] = function (a) { return a ? this.bind(c, a) : this.trigger(c) }; a.attrFn[c] = true }); var f = a.support.touch, d = f ? "touchstart" : "mousedown", g = f ? "touchend" : "mouseup", h = f ? "touchmove" : "mousemove"; a.event.special.scrollstart = { enabled: true, setup: function () {
            function b(a, f) { d = f; e(c, d ? "scrollstart" : "scrollstop", a) } var c = this, d, f; a(c).bind("touchmove scroll",
function (c) { a.event.special.scrollstart.enabled && (d || b(c, true), clearTimeout(f), f = setTimeout(function () { b(c, false) }, 50)) })
        } 
        }; a.event.special.tap = { setup: function () {
            var b = this, c = a(b); c.bind("vmousedown", function (d) {
                function f() { clearTimeout(q) } function g() { f(); c.unbind("vclick", h).unbind("vmouseup", f); a(k).unbind("vmousecancel", g) } function h(a) { g(); n == a.target && e(b, "tap", a) } if (d.which && d.which !== 1) return false; var n = d.target, q; c.bind("vmouseup", f).bind("vclick", h); a(k).bind("vmousecancel", g); q = setTimeout(function () {
                    e(b,
"taphold", a.Event("taphold", { target: n }))
                }, 750)
            })
        } 
        }; a.event.special.swipe = { scrollSupressionThreshold: 10, durationThreshold: 1E3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 75, setup: function () {
            var c = a(this); c.bind(d, function (d) {
                function f(b) { if (l) { var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b; k = { time: (new Date).getTime(), coords: [c.pageX, c.pageY] }; Math.abs(l.coords[0] - k.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault() } } var e = d.originalEvent.touches ?
d.originalEvent.touches[0] : d, l = { time: (new Date).getTime(), coords: [e.pageX, e.pageY], origin: a(d.target) }, k; c.bind(h, f).one(g, function () { c.unbind(h, f); l && k && k.time - l.time < a.event.special.swipe.durationThreshold && Math.abs(l.coords[0] - k.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(l.coords[1] - k.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && l.origin.trigger("swipe").trigger(l.coords[0] > k.coords[0] ? "swipeleft" : "swiperight"); l = k = b })
            })
        } 
        }; (function (a, b) {
            function c() {
                var a =
f(); a !== e && (e = a, d.trigger("orientationchange"))
            } var d = a(b), f, e, g, h, t = { 0: true, 180: true }; if (a.support.orientation && (g = b.innerWidth || a(b).width(), h = b.innerHeight || a(b).height(), g = g > h && g - h > 50, h = t[b.orientation], g && h || !g && !h)) t = { "-90": true, 90: true }; a.event.special.orientationchange = { setup: function () { if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; e = f(); d.bind("throttledresize", c) }, teardown: function () {
                if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; d.unbind("throttledresize",
c)
            }, add: function (a) { var b = a.handler; a.handler = function (a) { a.orientation = f(); return b.apply(this, arguments) } } 
            }; a.event.special.orientationchange.orientation = f = function () { var c = true, c = k.documentElement; return (c = a.support.orientation ? t[b.orientation] : c && c.clientWidth / c.clientHeight < 1.1) ? "portrait" : "landscape" } 
        })(jQuery, c); (function () {
            a.event.special.throttledresize = { setup: function () { a(this).bind("resize", b) }, teardown: function () { a(this).unbind("resize", b) } }; var b = function () {
                f = (new Date).getTime(); g = f -
c; g >= 250 ? (c = f, a(this).trigger("throttledresize")) : (d && clearTimeout(d), d = setTimeout(b, 250 - g))
            }, c = 0, d, f, g
        })(); a.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe", swiperight: "swipe" }, function (b, c) { a.event.special[b] = { setup: function () { a(this).bind(c, a.noop) } } })
    })(jQuery, this); (function (a) {
        a.widget("mobile.page", a.mobile.widget, { options: { theme: "c", domCache: false, keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')" }, _create: function () {
            var a = this; if (a._trigger("beforecreate") ===
false) return false; a.element.attr("tabindex", "0").addClass("ui-page ui-body-" + a.options.theme).bind("pagebeforehide", function () { a.removeContainerBackground() }).bind("pagebeforeshow", function () { a.setContainerBackground() })
        }, removeContainerBackground: function () { a.mobile.pageContainer.removeClass("ui-overlay-" + a.mobile.getInheritedTheme(this.element.parent())) }, setContainerBackground: function (c) { this.options.theme && a.mobile.pageContainer.addClass("ui-overlay-" + (c || this.options.theme)) }, keepNativeSelector: function () {
            var c =
this.options; return c.keepNative && a.trim(c.keepNative) && c.keepNative !== c.keepNativeDefault ? [c.keepNative, c.keepNativeDefault].join(", ") : c.keepNativeDefault
        } 
        })
    })(jQuery); (function (a, c, b) {
        var e = function (d) {
            d === b && (d = true); return function (b, f, e, o) {
                var k = new a.Deferred, p = f ? " reverse" : "", l = a.mobile.urlHistory.getActive().lastScroll || a.mobile.defaultHomeScroll, r = a.mobile.getScreenHeight(), n = a.mobile.maxTransitionWidth !== false && a(c).width() > a.mobile.maxTransitionWidth, q = !a.support.cssTransitions || n || !b ||
b === "none", t = function () { a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + b) }, x = function () { a.event.special.scrollstart.enabled = false; c.scrollTo(0, l); setTimeout(function () { a.event.special.scrollstart.enabled = true }, 150) }, u = function () { o.removeClass(a.mobile.activePageClass + " out in reverse " + b).height("") }, n = function () { o && d && u(); e.addClass(a.mobile.activePageClass); a.mobile.focusPage(e); e.height(r + l); x(); q || e.animationComplete(w); e.addClass(b + " in" + p); q && w() }, w = function () {
    d ||
o && u(); e.removeClass("out in reverse " + b).height(""); t(); a(c).scrollTop() !== l && x(); k.resolve(b, f, e, o, true)
}; t(); o && !q ? (d ? o.animationComplete(n) : n(), o.height(r + a(c).scrollTop()).addClass(b + " out" + p)) : n(); return k.promise()
            } 
        }, f = e(), e = e(false); a.mobile.defaultTransitionHandler = f; a.mobile.transitionHandlers = { "default": a.mobile.defaultTransitionHandler, sequential: f, simultaneous: e }; a.mobile.transitionFallbacks = {}
    })(jQuery, this); (function (a, c) {
        function b(b) {
            r && (!r.closest(".ui-page-active").length || b) &&
r.removeClass(a.mobile.activeBtnClass); r = null
        } function e() { t = false; q.length > 0 && a.mobile.changePage.apply(null, q.pop()) } function f(b, c, d, f) {
            c && c.data("page")._trigger("beforehide", null, { nextPage: b }); b.data("page")._trigger("beforeshow", null, { prevPage: c || a("") }); a.mobile.hidePageLoadingMsg(); d && !a.support.cssTransform3d && a.mobile.transitionFallbacks[d] && (d = a.mobile.transitionFallbacks[d]); d = (a.mobile.transitionHandlers[d || "default"] || a.mobile.defaultTransitionHandler)(d, f, b, c); d.done(function () {
                c &&
c.data("page")._trigger("hide", null, { nextPage: b }); b.data("page")._trigger("show", null, { prevPage: c || a("") })
            }); return d
        } function d() { return s.innerHeight || a(s).height() } function g() { var b = a("." + a.mobile.activePageClass), c = parseFloat(b.css("padding-top")), f = parseFloat(b.css("padding-bottom")); b.css("min-height", d() - c - f) } function h(b, c) { c && b.attr("data-" + a.mobile.ns + "role", c); b.page() } function j(a) { for (; a; ) { if (typeof a.nodeName === "string" && a.nodeName.toLowerCase() == "a") break; a = a.parentNode } return a } function o(b) {
            var b =
a(b).closest(".ui-page").jqmData("url"), c = v.hrefNoHash; if (!b || !l.isPath(b)) b = c; return l.makeUrlAbsolute(b, c)
        } var m = a(s); a("html"); var p = a("head"), l = { urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/, parseUrl: function (b) {
            if (a.type(b) === "object") return b; b = l.urlParseRE.exec(b || "") || []; return { href: b[0] || "", hrefNoHash: b[1] || "", hrefNoSearch: b[2] || "", domain: b[3] || "",
                protocol: b[4] || "", doubleSlash: b[5] || "", authority: b[6] || "", username: b[8] || "", password: b[9] || "", host: b[10] || "", hostname: b[11] || "", port: b[12] || "", pathname: b[13] || "", directory: b[14] || "", filename: b[15] || "", search: b[16] || "", hash: b[17] || ""
            }
        }, makePathAbsolute: function (a, b) {
            if (a && a.charAt(0) === "/") return a; for (var a = a || "", c = (b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? b.split("/") : [], d = a.split("/"), f = 0; f < d.length; f++) { var e = d[f]; switch (e) { case ".": break; case "..": c.length && c.pop(); break; default: c.push(e) } } return "/" +
c.join("/")
        }, isSameDomain: function (a, b) { return l.parseUrl(a).domain === l.parseUrl(b).domain }, isRelativeUrl: function (a) { return l.parseUrl(a).protocol === "" }, isAbsoluteUrl: function (a) { return l.parseUrl(a).protocol !== "" }, makeUrlAbsolute: function (a, b) {
            if (!l.isRelativeUrl(a)) return a; var c = l.parseUrl(a), d = l.parseUrl(b), f = c.protocol || d.protocol, e = c.protocol ? c.doubleSlash : c.doubleSlash || d.doubleSlash, g = c.authority || d.authority, h = c.pathname !== "", j = l.makePathAbsolute(c.pathname || d.filename, d.pathname); return f +
e + g + j + (c.search || !h && d.search || "") + c.hash
        }, addSearchParams: function (b, c) { var d = l.parseUrl(b), f = typeof c === "object" ? a.param(c) : c, e = d.search || "?"; return d.hrefNoSearch + e + (e.charAt(e.length - 1) !== "?" ? "&" : "") + f + (d.hash || "") }, convertUrlToDataUrl: function (a) { var b = l.parseUrl(a); if (l.isEmbeddedPage(b)) return b.hash.split(x)[0].replace(/^#/, ""); else if (l.isSameDomain(b, v)) return b.hrefNoHash.replace(v.domain, ""); return a }, get: function (a) {
            if (a === c) a = location.hash; return l.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,
"")
        }, getFilePath: function (b) { var c = "&" + a.mobile.subPageUrlKey; return b && b.split(c)[0].split(x)[0] }, set: function (a) { location.hash = a }, isPath: function (a) { return /\//.test(a) }, clean: function (a) { return a.replace(v.domain, "") }, stripHash: function (a) { return a.replace(/^#/, "") }, cleanHash: function (a) { return l.stripHash(a.replace(/\?.*$/, "").replace(x, "")) }, isExternal: function (a) { a = l.parseUrl(a); return a.protocol && a.domain !== w.domain ? true : false }, hasProtocol: function (a) { return /^(:?\w+:)/.test(a) }, isFirstPageUrl: function (b) {
            var b =
l.parseUrl(l.makeUrlAbsolute(b, v)), d = a.mobile.firstPage, d = d && d[0] ? d[0].id : c; return (b.hrefNoHash === w.hrefNoHash || y && b.hrefNoHash === v.hrefNoHash) && (!b.hash || b.hash === "#" || d && b.hash.replace(/^#/, "") === d)
        }, isEmbeddedPage: function (a) { a = l.parseUrl(a); return a.protocol !== "" ? a.hash && (a.hrefNoHash === w.hrefNoHash || y && a.hrefNoHash === v.hrefNoHash) : /^#/.test(a.href) } 
        }, r = null, n = { stack: [], activeIndex: 0, getActive: function () { return n.stack[n.activeIndex] }, getPrev: function () { return n.stack[n.activeIndex - 1] }, getNext: function () {
            return n.stack[n.activeIndex +
1]
        }, addNew: function (a, b, c, d, f) { n.getNext() && n.clearForward(); n.stack.push({ url: a, transition: b, title: c, pageUrl: d, role: f }); n.activeIndex = n.stack.length - 1 }, clearForward: function () { n.stack = n.stack.slice(0, n.activeIndex + 1) }, directHashChange: function (b) { var d, f, e; this.getActive(); a.each(n.stack, function (a, c) { b.currentUrl === c.url && (d = a < n.activeIndex, f = !d, e = a) }); this.activeIndex = e !== c ? e : this.activeIndex; d ? (b.either || b.isBack)(true) : f && (b.either || b.isForward)(false) }, ignoreNextHashChange: false
        }, q = [], t = false,
x = "&ui-state=dialog", u = p.children("base"), w = l.parseUrl(location.href), v = u.length ? l.parseUrl(l.makeUrlAbsolute(u.attr("href"), w.href)) : w, y = w.hrefNoHash !== v.hrefNoHash, B = a.support.dynamicBaseTag ? { element: u.length ? u : a("<base>", { href: v.hrefNoHash }).prependTo(p), set: function (a) { B.element.attr("href", l.makeUrlAbsolute(a, v)) }, reset: function () { B.element.attr("href", v.hrefNoHash) } } : c; a.mobile.focusPage = function (a) {
    var b = a.find("[autofocus]"), c = a.find(".ui-title:eq(0)"); b.length ? b.focus() : c.length ? c.focus() :
a.focus()
}; var E = true, A, C; A = function () { if (E) { var b = a.mobile.urlHistory.getActive(); if (b) { var c = m.scrollTop(); b.lastScroll = c < a.mobile.minScrollBack ? a.mobile.defaultHomeScroll : c } } }; C = function () { setTimeout(A, 100) }; m.bind(a.support.pushState ? "popstate" : "hashchange", function () { E = false }); m.one(a.support.pushState ? "popstate" : "hashchange", function () { E = true }); m.one("pagecontainercreate", function () { a.mobile.pageContainer.bind("pagechange", function () { E = true; m.unbind("scrollstop", C); m.bind("scrollstop", C) }) });
        m.bind("scrollstop", C); a.mobile.getScreenHeight = d; a.fn.animationComplete = function (b) { return a.support.cssTransitions ? a(this).one("webkitAnimationEnd animationend", b) : (setTimeout(b, 0), a(this)) }; a.mobile.path = l; a.mobile.base = B; a.mobile.urlHistory = n; a.mobile.dialogHashKey = x; a.mobile.allowCrossDomainPages = false; a.mobile.getDocumentUrl = function (b) { return b ? a.extend({}, w) : w.href }; a.mobile.getDocumentBase = function (b) { return b ? a.extend({}, v) : v.href }; a.mobile._bindPageRemove = function () {
            var b = a(this); !b.data("page").options.domCache &&
b.is(":jqmData(external-page='true')") && b.bind("pagehide.remove", function () { var b = a(this), c = new a.Event("pageremove"); b.trigger(c); c.isDefaultPrevented() || b.removeWithDependents() })
        }; a.mobile.loadPage = function (b, d) {
            var f = a.Deferred(), e = a.extend({}, a.mobile.loadPage.defaults, d), g = null, j = null, k = l.makeUrlAbsolute(b, a.mobile.activePage && o(a.mobile.activePage) || v.hrefNoHash); if (e.data && e.type === "get") k = l.addSearchParams(k, e.data), e.data = c; if (e.data && e.type === "post") e.reloadPage = true; var u = l.getFilePath(k),
n = l.convertUrlToDataUrl(k); e.pageContainer = e.pageContainer || a.mobile.pageContainer; g = e.pageContainer.children(":jqmData(url='" + n + "')"); g.length === 0 && n && !l.isPath(n) && (g = e.pageContainer.children("#" + n).attr("data-" + a.mobile.ns + "url", n)); if (g.length === 0) if (a.mobile.firstPage && l.isFirstPageUrl(u)) a.mobile.firstPage.parent().length && (g = a(a.mobile.firstPage)); else if (l.isEmbeddedPage(u)) return f.reject(k, d), f.promise(); B && B.reset(); if (g.length) {
                if (!e.reloadPage) return h(g, e.role), f.resolve(k, d, g), f.promise();
                j = g
            } var m = e.pageContainer, x = new a.Event("pagebeforeload"), p = { url: b, absUrl: k, dataUrl: n, deferred: f, options: e }; m.trigger(x, p); if (x.isDefaultPrevented()) return f.promise(); if (e.showLoadMsg) var r = setTimeout(function () { a.mobile.showPageLoadingMsg() }, e.loadMsgDelay); !a.mobile.allowCrossDomainPages && !l.isSameDomain(w, k) ? f.reject(k, d) : a.ajax({ url: u, type: e.type, data: e.data, dataType: "html", success: function (c, o, m) {
                var x = a("<div></div>"), v = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1, w = RegExp("\\bdata-" + a.mobile.ns +
"url=[\"']?([^\"'>]*)[\"']?"); RegExp("(<[^>]+\\bdata-" + a.mobile.ns + "role=[\"']?page[\"']?[^>]*>)").test(c) && RegExp.$1 && w.test(RegExp.$1) && RegExp.$1 && (b = u = l.getFilePath(RegExp.$1)); B && B.set(u); x.get(0).innerHTML = c; g = x.find(":jqmData(role='page'), :jqmData(role='dialog')").first(); g.length || (g = a("<div data-" + a.mobile.ns + "role='page'>" + c.split(/<\/?body[^>]*>/gmi)[1] + "</div>")); v && !g.jqmData("title") && (~v.indexOf("&") && (v = a("<div>" + v + "</div>").text()), g.jqmData("title", v)); if (!a.support.dynamicBaseTag) {
                    var q =
l.get(u); g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () { var b = a(this).is("[href]") ? "href" : a(this).is("[src]") ? "src" : "action", c = a(this).attr(b), c = c.replace(location.protocol + "//" + location.host + location.pathname, ""); /^(\w+:|#|\/)/.test(c) || a(this).attr(b, q + c) })
                } g.attr("data-" + a.mobile.ns + "url", l.convertUrlToDataUrl(u)).attr("data-" + a.mobile.ns + "external-page", true).appendTo(e.pageContainer); g.one("pagecreate", a.mobile._bindPageRemove); h(g, e.role); k.indexOf("&" +
a.mobile.subPageUrlKey) > -1 && (g = e.pageContainer.children(":jqmData(url='" + n + "')")); e.showLoadMsg && (clearTimeout(r), a.mobile.hidePageLoadingMsg()); p.xhr = m; p.textStatus = o; p.page = g; e.pageContainer.trigger("pageload", p); f.resolve(k, d, g, j)
            }, error: function (b, c, g) {
                B && B.set(l.get()); p.xhr = b; p.textStatus = c; p.errorThrown = g; b = new a.Event("pageloadfailed"); e.pageContainer.trigger(b, p); b.isDefaultPrevented() || (e.showLoadMsg && (clearTimeout(r), a.mobile.hidePageLoadingMsg(), a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme,
a.mobile.pageLoadErrorMessage, true), setTimeout(a.mobile.hidePageLoadingMsg, 1500)), f.reject(k, d))
            } 
            }); return f.promise()
        }; a.mobile.loadPage.defaults = { type: "get", data: c, reloadPage: false, role: c, showLoadMsg: false, pageContainer: c, loadMsgDelay: 50 }; a.mobile.changePage = function (d, g) {
            if (t) q.unshift(arguments); else {
                var j = a.extend({}, a.mobile.changePage.defaults, g); j.pageContainer = j.pageContainer || a.mobile.pageContainer; j.fromPage = j.fromPage || a.mobile.activePage; var u = j.pageContainer, o = new a.Event("pagebeforechange"),
m = { toPage: d, options: j }; u.trigger(o, m); if (!o.isDefaultPrevented()) if (d = m.toPage, t = true, typeof d == "string") a.mobile.loadPage(d, j).done(function (b, c, d, e) { t = false; c.duplicateCachedPage = e; a.mobile.changePage(d, c) }).fail(function () { t = false; b(true); e(); j.pageContainer.trigger("pagechangefailed", m) }); else {
                    if (d[0] === a.mobile.firstPage[0] && !j.dataUrl) j.dataUrl = w.hrefNoHash; var o = j.fromPage, p = j.dataUrl && l.convertUrlToDataUrl(j.dataUrl) || d.jqmData("url"), v = p; l.getFilePath(p); var r = n.getActive(), s = n.activeIndex ===
0, y = 0, B = k.title, A = j.role === "dialog" || d.jqmData("role") === "dialog"; if (o && o[0] === d[0] && !j.allowSamePageTransition) t = false, u.trigger("pagechange", m); else {
                        h(d, j.role); j.fromHashChange && n.directHashChange({ currentUrl: p, isBack: function () { y = -1 }, isForward: function () { y = 1 } }); try { k.activeElement && k.activeElement.nodeName.toLowerCase() != "body" ? a(k.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur() } catch (E) { } A && r && (p = (r.url || "") + x); if (j.changeHash !== false && p) n.ignoreNextHashChange = true,
l.set(p); var C = !r ? B : d.jqmData("title") || d.children(":jqmData(role='header')").find(".ui-title").getEncodedText(); C && B == k.title && (B = C); d.jqmData("title") || d.jqmData("title", B); j.transition = j.transition || (y && !s ? r.transition : c) || (A ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition); y || n.addNew(p, j.transition, B, v, j.role); k.title = n.getActive().title; a.mobile.activePage = d; j.reverse = j.reverse || y < 0; f(d, o, j.transition, j.reverse).done(function (c, f, g, h, l) {
    b(); j.duplicateCachedPage && j.duplicateCachedPage.remove();
    l || a.mobile.focusPage(d); e(); u.trigger("pagechange", m)
})
                    } 
                } 
            } 
        }; a.mobile.changePage.defaults = { transition: c, reverse: false, changeHash: true, fromHashChange: false, role: c, duplicateCachedPage: c, pageContainer: c, showLoadMsg: true, dataUrl: c, fromPage: c, allowSamePageTransition: false }; a.mobile._registerInternalEvents = function () {
            a(k).delegate("form", "submit", function (b) {
                var c = a(this); if (a.mobile.ajaxEnabled && !c.is(":jqmData(ajax='false')") && c.jqmHijackable().length) {
                    var d = c.attr("method"), e = c.attr("target"), f = c.attr("action");
                    if (!f && (f = o(c), f === v.hrefNoHash)) f = w.hrefNoSearch; f = l.makeUrlAbsolute(f, o(c)); !l.isExternal(f) && !e && (a.mobile.changePage(f, { type: d && d.length && d.toLowerCase() || "get", data: c.serialize(), transition: c.jqmData("transition"), direction: c.jqmData("direction"), reloadPage: true }), b.preventDefault())
                } 
            }); a(k).bind("vclick", function (c) {
                if (!(c.which > 1) && a.mobile.linkBindingEnabled && (c = j(c.target), a(c).jqmHijackable().length && c && l.parseUrl(c.getAttribute("href") || "#").hash !== "#")) b(true), r = a(c).closest(".ui-btn").not(".ui-disabled"),
r.addClass(a.mobile.activeBtnClass), a("." + a.mobile.activePageClass + " .ui-btn").not(c).blur(), a(c).jqmData("href", a(c).attr("href")).attr("href", "#")
            }); a(k).bind("click", function (d) {
                if (a.mobile.linkBindingEnabled) {
                    var f = j(d.target), e = a(f), g; if (f && !(d.which > 1) && e.jqmHijackable().length) {
                        g = function () { s.setTimeout(function () { b(true) }, 200) }; e.jqmData("href") && e.attr("href", e.jqmData("href")); if (e.is(":jqmData(rel='back')")) return s.history.back(), false; var h = o(e), f = l.makeUrlAbsolute(e.attr("href") || "#",
h); if (!a.mobile.ajaxEnabled && !l.isEmbeddedPage(f)) g(); else {
                            if (f.search("#") != -1) if (f = f.replace(/[^#]*#/, "")) f = l.isPath(f) ? l.makeUrlAbsolute(f, h) : l.makeUrlAbsolute("#" + f, w.hrefNoHash); else { d.preventDefault(); return } var h = e.is("[rel='external']") || e.is(":jqmData(ajax='false')") || e.is("[target]"), k = a.mobile.allowCrossDomainPages && w.protocol === "file:" && f.search(/^https?:/) != -1; h || l.isExternal(f) && !k ? g() : (g = e.jqmData("transition"), h = (h = e.jqmData("direction")) && h === "reverse" || e.jqmData("back"), e = e.attr("data-" +
a.mobile.ns + "rel") || c, a.mobile.changePage(f, { transition: g, reverse: h, role: e }), d.preventDefault())
                        } 
                    } 
                } 
            }); a(k).delegate(".ui-page", "pageshow.prefetch", function () { var b = []; a(this).find("a:jqmData(prefetch)").each(function () { var c = a(this), d = c.attr("href"); d && a.inArray(d, b) === -1 && (b.push(d), a.mobile.loadPage(d, { role: c.attr("data-" + a.mobile.ns + "rel") })) }) }); a.mobile._handleHashChange = function (b) {
                var d = l.stripHash(b), f = { transition: a.mobile.urlHistory.stack.length === 0 ? "none" : c, changeHash: false, fromHashChange: true };
                if (!a.mobile.hashListeningEnabled || n.ignoreNextHashChange) n.ignoreNextHashChange = false; else {
                    if (n.stack.length > 1 && d.indexOf(x) > -1) if (a.mobile.activePage.is(".ui-dialog")) n.directHashChange({ currentUrl: d, either: function (b) { var c = a.mobile.urlHistory.getActive(); d = c.pageUrl; a.extend(f, { role: c.role, transition: c.transition, reverse: b }) } }); else { n.directHashChange({ currentUrl: d, isBack: function () { s.history.back() }, isForward: function () { s.history.forward() } }); return } d ? (d = typeof d === "string" && !l.isPath(d) ? l.makeUrlAbsolute("#" +
d, v) : d, a.mobile.changePage(d, f)) : a.mobile.changePage(a.mobile.firstPage, f)
                } 
            }; m.bind("hashchange", function () { a.mobile._handleHashChange(location.hash) }); a(k).bind("pageshow", g); a(s).bind("throttledresize", g)
        } 
    })(jQuery); (function (a, c) {
        var b = {}, e = a(c), f = a.mobile.path.parseUrl(location.href); a.extend(b, { initialFilePath: f.pathname + f.search, initialHref: f.hrefNoHash, state: function () { return { hash: location.hash || "#" + b.initialFilePath, title: k.title, initialHref: b.initialHref} }, resetUIKeys: function (b) {
            var c = "&" +
a.mobile.subPageUrlKey, f = b.indexOf(a.mobile.dialogHashKey); f > -1 ? b = b.slice(0, f) + "#" + b.slice(f) : b.indexOf(c) > -1 && (b = b.split(c).join("#" + c)); return b
        }, hashValueAfterReset: function (c) { c = b.resetUIKeys(c); return a.mobile.path.parseUrl(c).hash }, nextHashChangePrevented: function (c) { a.mobile.urlHistory.ignoreNextHashChange = c; b.onHashChangeDisabled = c }, onHashChange: function () {
            if (!b.onHashChangeDisabled) {
                var c, f; c = location.hash; var e = a.mobile.path.isPath(c), j = e ? location.href : a.mobile.getDocumentUrl(); c = e ? c.replace("#",
"") : c; f = b.state(); c = a.mobile.path.makeUrlAbsolute(c, j); e && (c = b.resetUIKeys(c)); history.replaceState(f, k.title, c)
            } 
        }, onPopState: function (c) { var c = c.originalEvent.state, f, h; if (c) { f = b.hashValueAfterReset(a.mobile.urlHistory.getActive().url); h = b.hashValueAfterReset(c.hash.replace("#", "")); if (f = f !== h) e.one("hashchange.pushstate", function () { b.nextHashChangePrevented(false) }); b.nextHashChangePrevented(false); a.mobile._handleHashChange(c.hash); f && b.nextHashChangePrevented(true) } }, init: function () {
            e.bind("hashchange",
b.onHashChange); e.bind("popstate", b.onPopState); location.hash === "" && history.replaceState(b.state(), k.title, location.href)
        } 
        }); a(function () { a.mobile.pushStateEnabled && a.support.pushState && b.init() })
    })(jQuery, this); jQuery.mobile.transitionFallbacks.pop = "fade"; (function (a) { a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous; a.mobile.transitionFallbacks.slide = "fade" })(jQuery, this); jQuery.mobile.transitionFallbacks.slidedown = "fade"; jQuery.mobile.transitionFallbacks.slideup = "fade";
    jQuery.mobile.transitionFallbacks.flip = "fade"; jQuery.mobile.transitionFallbacks.flow = "fade"; jQuery.mobile.transitionFallbacks.turn = "fade"; (function (a) {
        a.mobile.page.prototype.options.degradeInputs = { color: false, date: false, datetime: false, "datetime-local": false, email: false, month: false, number: false, range: "number", search: "text", tel: false, time: false, url: false, week: false }; a(k).bind("pagecreate create", function (c) {
            var b = a.mobile.closestPageData(a(c.target)), e; if (b) e = b.options, a(c.target).find("input").not(b.keepNativeSelector()).each(function () {
                var b =
a(this), c = this.getAttribute("type"), g = e.degradeInputs[c] || "text"; if (e.degradeInputs[c]) { var h = a("<div>").html(b.clone()).html(), j = h.indexOf(" type=") > -1; b.replaceWith(h.replace(j ? /\s+type=["']?\w+['"]?/ : /\/?>/, ' type="' + g + '" data-' + a.mobile.ns + 'type="' + c + '"' + (j ? "" : ">"))) } 
            })
        })
    })(jQuery); (function (a, c) {
        a.widget("mobile.dialog", a.mobile.widget, { options: { closeBtnText: "Close", overlayTheme: "a", initSelector: ":jqmData(role='dialog')" }, _create: function () {
            var b = this, c = this.element, f = a("<a href='#' data-" + a.mobile.ns +
"icon='delete' data-" + a.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), d = a("<div/>", { role: "dialog", "class": "ui-dialog-contain ui-corner-all ui-overlay-shadow" }); c.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme); c.wrapInner(d).children().find(":jqmData(role='header')").prepend(f).end().children(":first-child").addClass("ui-corner-top").end().children(":last-child").addClass("ui-corner-bottom"); f.bind("click", function () { b.close() }); c.bind("vclick submit", function (b) {
    var b =
a(b.target).closest(b.type === "vclick" ? "a" : "form"), c; b.length && !b.jqmData("transition") && (c = a.mobile.urlHistory.getActive() || {}, b.attr("data-" + a.mobile.ns + "transition", c.transition || a.mobile.defaultDialogTransition).attr("data-" + a.mobile.ns + "direction", "reverse"))
}).bind("pagehide", function () { a(this).find("." + a.mobile.activeBtnClass).removeClass(a.mobile.activeBtnClass) }).bind("pagebeforeshow", function () {
    b.options.overlayTheme && b.element.page("removeContainerBackground").page("setContainerBackground",
b.options.overlayTheme)
})
        }, close: function () { c.history.back() } 
        }); a(k).delegate(a.mobile.dialog.prototype.options.initSelector, "pagecreate", function () { a.mobile.dialog.prototype.enhance(this) })
    })(jQuery, this); (function (a) { a.fn.fieldcontain = function () { return this.addClass("ui-field-contain ui-body ui-br") }; a(k).bind("pagecreate create", function (c) { a(":jqmData(role='fieldcontain')", c.target).jqmEnhanceable().fieldcontain() }) })(jQuery); (function (a) {
        a.fn.grid = function (c) {
            return this.each(function () {
                var b =
a(this), e = a.extend({ grid: null }, c), f = b.children(), d = { solo: 1, a: 2, b: 3, c: 4, d: 5 }, e = e.grid; if (!e) if (f.length <= 5) for (var g in d) d[g] === f.length && (e = g); else e = "a"; d = d[e]; b.addClass("ui-grid-" + e); f.filter(":nth-child(" + d + "n+1)").addClass("ui-block-a"); d > 1 && f.filter(":nth-child(" + d + "n+2)").addClass("ui-block-b"); d > 2 && f.filter(":nth-child(3n+3)").addClass("ui-block-c"); d > 3 && f.filter(":nth-child(4n+4)").addClass("ui-block-d"); d > 4 && f.filter(":nth-child(5n+5)").addClass("ui-block-e")
            })
        } 
    })(jQuery); (function (a) {
        a(k).bind("pagecreate create",
function (c) { a(":jqmData(role='nojs')", c.target).addClass("ui-nojs") })
    })(jQuery); (function (a, c) {
        function b(a) { for (var b; a; ) { if ((b = typeof a.className === "string" && a.className + " ") && b.indexOf("ui-btn ") > -1 && b.indexOf("ui-disabled ") < 0) break; a = a.parentNode } return a } a.fn.buttonMarkup = function (b) {
            for (var b = b && a.type(b) == "object" ? b : {}, d = 0; d < this.length; d++) {
                var g = this.eq(d), h = g[0], j = a.extend({}, a.fn.buttonMarkup.defaults, { icon: b.icon !== c ? b.icon : g.jqmData("icon"), iconpos: b.iconpos !== c ? b.iconpos : g.jqmData("iconpos"),
                    theme: b.theme !== c ? b.theme : g.jqmData("theme") || a.mobile.getInheritedTheme(g, "c"), inline: b.inline !== c ? b.inline : g.jqmData("inline"), shadow: b.shadow !== c ? b.shadow : g.jqmData("shadow"), corners: b.corners !== c ? b.corners : g.jqmData("corners"), iconshadow: b.iconshadow !== c ? b.iconshadow : g.jqmData("iconshadow"), mini: b.mini !== c ? b.mini : g.jqmData("mini")
                }, b), o = "ui-btn-inner", m, p, l, r, n, q; a.each(j, function (b, c) { h.setAttribute("data-" + a.mobile.ns + b, c); g.jqmData(b, c) }); (q = a.data(h.tagName === "INPUT" || h.tagName === "BUTTON" ?
h.parentNode : h, "buttonElements")) ? (h = q.outer, g = a(h), l = q.inner, r = q.text, a(q.icon).remove(), q.icon = null) : (l = k.createElement(j.wrapperEls), r = k.createElement(j.wrapperEls)); n = j.icon ? k.createElement("span") : null; e && !q && e(); if (!j.theme) j.theme = a.mobile.getInheritedTheme(g, "c"); m = "ui-btn ui-btn-up-" + j.theme; m += j.inline ? " ui-btn-inline" : ""; m += j.shadow ? " ui-shadow" : ""; m += j.corners ? " ui-btn-corner-all" : ""; j.mini !== c && (m += j.mini ? " ui-mini" : " ui-fullsize"); j.inline !== c && (m += j.inline === false ? " ui-btn-block" : " ui-btn-inline");
                if (j.icon) j.icon = "ui-icon-" + j.icon, j.iconpos = j.iconpos || "left", p = "ui-icon " + j.icon, j.iconshadow && (p += " ui-icon-shadow"); j.iconpos && (m += " ui-btn-icon-" + j.iconpos, j.iconpos == "notext" && !g.attr("title") && g.attr("title", g.getEncodedText())); o += j.corners ? " ui-btn-corner-all" : ""; j.iconpos && j.iconpos === "notext" && !g.attr("title") && g.attr("title", g.getEncodedText()); q && g.removeClass(q.bcls || ""); g.removeClass("ui-link").addClass(m); l.className = o; r.className = "ui-btn-text"; q || l.appendChild(r); if (n && (n.className =
p, !q || !q.icon)) n.appendChild(k.createTextNode("\u00a0")), l.appendChild(n); for (; h.firstChild && !q; ) r.appendChild(h.firstChild); q || h.appendChild(l); q = { bcls: m, outer: h, inner: l, text: r, icon: n }; a.data(h, "buttonElements", q); a.data(l, "buttonElements", q); a.data(r, "buttonElements", q); n && a.data(n, "buttonElements", q)
            } return this
        }; a.fn.buttonMarkup.defaults = { corners: true, shadow: true, iconshadow: true, wrapperEls: "span" }; var e = function () {
            var c = a.mobile.buttonMarkup.hoverDelay, d, g; a(k).bind({ "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (e) {
                var j,
k = a(b(e.target)), e = e.type; if (k.length) if (j = k.attr("data-" + a.mobile.ns + "theme"), e === "vmousedown") a.support.touch ? d = setTimeout(function () { k.removeClass("ui-btn-up-" + j).addClass("ui-btn-down-" + j) }, c) : k.removeClass("ui-btn-up-" + j).addClass("ui-btn-down-" + j); else if (e === "vmousecancel" || e === "vmouseup") k.removeClass("ui-btn-down-" + j).addClass("ui-btn-up-" + j); else if (e === "vmouseover" || e === "focus") a.support.touch ? g = setTimeout(function () { k.removeClass("ui-btn-up-" + j).addClass("ui-btn-hover-" + j) }, c) : k.removeClass("ui-btn-up-" +
j).addClass("ui-btn-hover-" + j); else if (e === "vmouseout" || e === "blur" || e === "scrollstart") k.removeClass("ui-btn-hover-" + j + " ui-btn-down-" + j).addClass("ui-btn-up-" + j), d && clearTimeout(d), g && clearTimeout(g)
            }, "focusin focus": function (c) { a(b(c.target)).addClass(a.mobile.focusClass) }, "focusout blur": function (c) { a(b(c.target)).removeClass(a.mobile.focusClass) } 
            }); e = null
        }; a(k).bind("pagecreate create", function (b) {
            a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",
b.target).not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    })(jQuery); (function (a) {
        a.mobile.page.prototype.options.backBtnText = "Back"; a.mobile.page.prototype.options.addBackBtn = false; a.mobile.page.prototype.options.backBtnTheme = null; a.mobile.page.prototype.options.headerTheme = "a"; a.mobile.page.prototype.options.footerTheme = "a"; a.mobile.page.prototype.options.contentTheme = null; a(k).delegate(":jqmData(role='page'), :jqmData(role='dialog')", "pagecreate", function () {
            var c = a(this),
b = c.data("page").options, e = c.jqmData("role"), f = b.theme; a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", this).jqmEnhanceable().each(function () {
    var d = a(this), g = d.jqmData("role"), h = d.jqmData("theme"), j = h || b.contentTheme || e === "dialog" && f, k; d.addClass("ui-" + g); if (g === "header" || g === "footer") {
        var m = h || (g === "header" ? b.headerTheme : b.footerTheme) || f; d.addClass("ui-bar-" + m).attr("role", g === "header" ? "banner" : "contentinfo"); g === "header" && (h = d.children("a"), k = h.hasClass("ui-btn-left"),
j = h.hasClass("ui-btn-right"), k = k || h.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, j || h.eq(1).addClass("ui-btn-right")); b.addBackBtn && g === "header" && a(".ui-page").length > 1 && c.jqmData("url") !== a.mobile.path.stripHash(location.hash) && !k && a("<a href='#' class='ui-btn-left' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "icon='arrow-l'>" + b.backBtnText + "</a>").attr("data-" + a.mobile.ns + "theme", b.backBtnTheme || m).prependTo(d); d.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({ role: "heading",
    "aria-level": "1"
})
    } else g === "content" && (j && d.addClass("ui-body-" + j), d.attr("role", "main"))
})
        })
    })(jQuery); (function (a) {
        a.widget("mobile.collapsible", a.mobile.widget, { options: { expandCueText: " click to expand contents", collapseCueText: " click to collapse contents", collapsed: true, heading: "h1,h2,h3,h4,h5,h6,legend", theme: null, contentTheme: null, iconTheme: "d", mini: false, initSelector: ":jqmData(role='collapsible')" }, _create: function () {
            var c = this.element, b = this.options, e = c.addClass("ui-collapsible"), f = c.children(b.heading).first(),
d = e.wrapInner("<div class='ui-collapsible-content'></div>").find(".ui-collapsible-content"), g = c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"); f.is("legend") && (f = a("<div role='heading'>" + f.html() + "</div>").insertBefore(f), f.next().remove()); if (g.length) { if (!b.theme) b.theme = g.jqmData("theme") || a.mobile.getInheritedTheme(g, "c"); if (!b.contentTheme) b.contentTheme = g.jqmData("content-theme"); if (!b.iconPos) b.iconPos = g.jqmData("iconpos"); if (!b.mini) b.mini = g.jqmData("mini") } d.addClass(b.contentTheme ?
"ui-body-" + b.contentTheme : ""); f.insertBefore(d).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({ shadow: false, corners: false, iconpos: c.jqmData("iconpos") || b.iconPos || "left", icon: "plus", mini: b.mini, theme: b.theme }).add(".ui-btn-inner", c).addClass("ui-corner-top ui-corner-bottom"); e.bind("expand collapse", function (c) {
    if (!c.isDefaultPrevented()) {
        c.preventDefault();
        var j = a(this), c = c.type === "collapse", k = b.contentTheme; f.toggleClass("ui-collapsible-heading-collapsed", c).find(".ui-collapsible-heading-status").text(c ? b.expandCueText : b.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-minus", !c).toggleClass("ui-icon-plus", c); j.toggleClass("ui-collapsible-collapsed", c); d.toggleClass("ui-collapsible-content-collapsed", c).attr("aria-hidden", c); if (k && (!g.length || e.jqmData("collapsible-last"))) f.find("a").first().add(f.find(".ui-btn-inner")).toggleClass("ui-corner-bottom",
c), d.toggleClass("ui-corner-bottom", !c); d.trigger("updatelayout")
    } 
}).trigger(b.collapsed ? "collapse" : "expand"); f.bind("click", function (a) { var b = f.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse"; e.trigger(b); a.preventDefault() })
        } 
        }); a(k).bind("pagecreate create", function (c) { a.mobile.collapsible.prototype.enhanceWithin(c.target) })
    })(jQuery); (function (a, c) {
        a.widget("mobile.collapsibleset", a.mobile.widget, { options: { initSelector: ":jqmData(role='collapsible-set')" }, _create: function () {
            var b = this.element.addClass("ui-collapsible-set"),
e = this.options; if (!e.theme) e.theme = a.mobile.getInheritedTheme(b, "c"); if (!e.contentTheme) e.contentTheme = b.jqmData("content-theme"); if (!e.corners) e.corners = b.jqmData("corners") === c ? true : false; b.jqmData("collapsiblebound") || b.jqmData("collapsiblebound", true).bind("expand collapse", function (b) {
    var c = b.type === "collapse", b = a(b.target).closest(".ui-collapsible"), e = b.data("collapsible"); e.options.contentTheme && b.jqmData("collapsible-last") && (b.find(e.options.heading).first().find("a").first().add(".ui-btn-inner").toggleClass("ui-corner-bottom",
c), b.find(".ui-collapsible-content").toggleClass("ui-corner-bottom", !c))
}).bind("expand", function (b) { a(b.target).closest(".ui-collapsible").siblings(".ui-collapsible").trigger("collapse") })
        }, _init: function () { this.refresh() }, refresh: function () {
            var b = this.options, c = this.element.children(":jqmData(role='collapsible')"); a.mobile.collapsible.prototype.enhance(c.not(".ui-collapsible")); c.each(function () { a(this).find(a.mobile.collapsible.prototype.options.heading).find("a").first().add(".ui-btn-inner").removeClass("ui-corner-top ui-corner-bottom") });
            c.first().find("a").first().addClass(b.corners ? "ui-corner-top" : "").find(".ui-btn-inner").addClass("ui-corner-top"); c.last().jqmData("collapsible-last", true).find("a").first().addClass(b.corners ? "ui-corner-bottom" : "").find(".ui-btn-inner").addClass("ui-corner-bottom")
        } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.collapsibleset.prototype.enhanceWithin(b.target) })
    })(jQuery); (function (a, c) {
        a.widget("mobile.navbar", a.mobile.widget, { options: { iconpos: "top", grid: null, initSelector: ":jqmData(role='navbar')" },
            _create: function () {
                var b = this.element, e = b.find("a"), f = e.filter(":jqmData(icon)").length ? this.options.iconpos : c; b.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({ grid: this.options.grid }); f || b.addClass("ui-navbar-noicons"); e.buttonMarkup({ corners: false, shadow: false, inline: true, iconpos: f }); b.delegate("a", "vclick", function (b) { a(b.target).hasClass("ui-disabled") || (e.removeClass(a.mobile.activeBtnClass), a(this).addClass(a.mobile.activeBtnClass)) }); b.closest(".ui-page").bind("pagebeforeshow",
function () { e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass) })
            } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.navbar.prototype.enhanceWithin(b.target) })
    })(jQuery); (function (a) {
        var c = {}; a.widget("mobile.listview", a.mobile.widget, { options: { theme: null, countTheme: "c", headerTheme: "b", dividerTheme: "b", splitIcon: "arrow-r", splitTheme: "b", mini: false, inset: false, initSelector: ":jqmData(role='listview')" }, _create: function () {
            var a = ""; a += this.options.inset ? " ui-listview-inset ui-corner-all ui-shadow " :
""; a += this.element.jqmData("mini") || this.options.mini === true ? " ui-mini" : ""; this.element.addClass(function (c, f) { return f + " ui-listview " + a }); this.refresh(true)
        }, _removeCorners: function (a, c) { a = a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")); c === "top" ? a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl") : c === "bottom" ? a.removeClass("ui-corner-bottom ui-corner-br ui-corner-bl") : a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl ui-corner-bottom ui-corner-br ui-corner-bl") }, _refreshCorners: function (a) {
            var c,
f; this.options.inset && (c = this.element.children("li"), f = a ? c.not(".ui-screen-hidden") : c.filter(":visible"), this._removeCorners(c), c = f.first().addClass("ui-corner-top"), c.add(c.find(".ui-btn-inner").not(".ui-li-link-alt span:first-child")).addClass("ui-corner-top").end().find(".ui-li-link-alt, .ui-li-link-alt span:first-child").addClass("ui-corner-tr").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-tl"), f = f.last().addClass("ui-corner-bottom"), f.add(f.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-bl"));
            a || this.element.trigger("updatelayout")
        }, _findFirstElementByTagName: function (a, c, f, d) { var g = {}; for (g[f] = g[d] = true; a; ) { if (g[a.nodeName]) return a; a = a[c] } return null }, _getChildrenByTagName: function (b, c, f) { var d = [], g = {}; g[c] = g[f] = true; for (b = b.firstChild; b; ) g[b.nodeName] && d.push(b), b = b.nextSibling; return a(d) }, _addThumbClasses: function (b) {
            var c, f, d = b.length; for (c = 0; c < d; c++) f = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), f.length && (f.addClass("ui-li-thumb"), a(this._findFirstElementByTagName(f[0].parentNode,
"parentNode", "li", "LI")).addClass(f.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
        }, refresh: function (b) {
            this.parentPage = this.element.closest(".ui-page"); this._createSubPages(); var c = this.options, f = this.element, d = f.jqmData("dividertheme") || c.dividerTheme, g = f.jqmData("splittheme"), h = f.jqmData("spliticon"), j = this._getChildrenByTagName(f[0], "li", "LI"), o = a.support.cssPseudoElement || !a.nodeName(f[0], "ol") ? 0 : 1, m = {}, p, l, r, n, q, t, x; o && f.find(".ui-li-dec").remove(); if (!c.theme) c.theme = a.mobile.getInheritedTheme(this.element,
"c"); for (var u = 0, w = j.length; u < w; u++) {
                p = j.eq(u); l = "ui-li"; if (b || !p.hasClass("ui-li")) r = p.jqmData("theme") || c.theme, n = this._getChildrenByTagName(p[0], "a", "A"), n.length ? (t = p.jqmData("icon"), p.buttonMarkup({ wrapperEls: "div", shadow: false, corners: false, iconpos: "right", icon: n.length > 1 || t === false ? false : t || "arrow-r", theme: r }), t != false && n.length == 1 && p.addClass("ui-li-has-arrow"), n.first().removeClass("ui-link").addClass("ui-link-inherit"), n.length > 1 && (l += " ui-li-has-alt", n = n.last(), q = g || n.jqmData("theme") ||
c.splitTheme, x = n.jqmData("icon"), n.appendTo(p).attr("title", n.getEncodedText()).addClass("ui-li-link-alt").empty().buttonMarkup({ shadow: false, corners: false, theme: r, icon: false, iconpos: false }).find(".ui-btn-inner").append(a(k.createElement("span")).buttonMarkup({ shadow: true, corners: true, theme: q, iconpos: "notext", icon: x || t || h || c.splitIcon })))) : p.jqmData("role") === "list-divider" ? (l += " ui-li-divider ui-bar-" + d, p.attr("role", "heading"), o && (o = 1)) : l += " ui-li-static ui-body-" + r; o && l.indexOf("ui-li-divider") <
0 && (r = p.is(".ui-li-static:first") ? p : p.find(".ui-link-inherit"), r.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + o++ + ". </span>")); m[l] || (m[l] = []); m[l].push(p[0])
            } for (l in m) a(m[l]).addClass(l).children(".ui-btn-inner").addClass(l); f.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () { var b = a(this); b.prependTo(b.parent()) }).end().find(".ui-li-count").each(function () { a(this).closest("li").addClass("ui-li-has-count") }).addClass("ui-btn-up-" +
(f.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"); this._addThumbClasses(j); this._addThumbClasses(f.find(".ui-link-inherit")); this._refreshCorners(b)
        }, _idStringEscape: function (a) { return a.replace(/[^a-zA-Z0-9]/g, "-") }, _createSubPages: function () {
            var b = this.element, e = b.closest(".ui-page"), f = e.jqmData("url"), d = f || e[0][a.expando], g = b.attr("id"), h = this.options, j = "data-" + a.mobile.ns, k = this, m = e.find(":jqmData(role='footer')").jqmData("id"), p; typeof c[d] === "undefined" && (c[d] = -1); g = g ||
++c[d]; a(b.find("li>ul, li>ol").toArray().reverse()).each(function (c) {
    var d = a(this), e = d.attr("id") || g + "-" + c, c = d.parent(), k = a(d.prevAll().toArray().reverse()), k = k.length ? k : a("<span>" + a.trim(c.contents()[0].nodeValue) + "</span>"), o = k.first().getEncodedText(), e = (f || "") + "&" + a.mobile.subPageUrlKey + "=" + e, x = d.jqmData("theme") || h.theme, u = d.jqmData("counttheme") || b.jqmData("counttheme") || h.countTheme; p = true; d.detach().wrap("<div " + j + "role='page' " + j + "url='" + e + "' " + j + "theme='" + x + "' " + j + "count-theme='" + u + "'><div " +
j + "role='content'></div></div>").parent().before("<div " + j + "role='header' " + j + "theme='" + h.headerTheme + "'><div class='ui-title'>" + o + "</div></div>").after(m ? a("<div " + j + "role='footer' " + j + "id='" + m + "'>") : "").parent().appendTo(a.mobile.pageContainer).page(); d = c.find("a:first"); d.length || (d = a("<a/>").html(k || o).prependTo(c.empty())); d.attr("href", "#" + e)
}).listview(); p && e.is(":jqmData(external-page='true')") && e.data("page").options.domCache === false && e.unbind("pagehide.remove").bind("pagehide.remove", function (b,
c) { var d = c.nextPage; c.nextPage && (d = d.jqmData("url"), d.indexOf(f + "&" + a.mobile.subPageUrlKey) !== 0 && (k.childPages().remove(), e.remove())) })
        }, childPages: function () { var b = this.parentPage.jqmData("url"); return a(":jqmData(url^='" + b + "&" + a.mobile.subPageUrlKey + "')") } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.listview.prototype.enhanceWithin(b.target) })
    })(jQuery); (function (a, c) {
        a.widget("mobile.checkboxradio", a.mobile.widget, { options: { theme: null, initSelector: "input[type='checkbox'],input[type='radio']" },
            _create: function () {
                var b = this, e = this.element, f = a(e).closest("label"), d = f.length ? f : a(e).closest("form,fieldset,:jqmData(role='page'),:jqmData(role='dialog')").find("label").filter("[for='" + e[0].id + "']"), g = e[0].type, f = e.jqmData("mini") || e.closest("form,fieldset").jqmData("mini"), h = g + "-on", j = g + "-off", o = e.parents(":jqmData(type='horizontal')").length ? c : j, m = e.jqmData("iconpos") || e.closest("form,fieldset").jqmData("iconpos"); if (!(g !== "checkbox" && g !== "radio")) {
                    a.extend(this, { label: d, inputtype: g, checkedClass: "ui-" +
h + (o ? "" : " " + a.mobile.activeBtnClass), uncheckedClass: "ui-" + j, checkedicon: "ui-icon-" + h, uncheckedicon: "ui-icon-" + j
                    }); if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.element, "c"); d.buttonMarkup({ theme: this.options.theme, icon: o, shadow: false, mini: f, iconpos: m }); f = k.createElement("div"); f.className = "ui-" + g; e.add(d).wrapAll(f); d.bind({ vmouseover: function (b) { a(this).parent().is(".ui-disabled") && b.stopPropagation() }, vclick: function (a) {
                        if (e.is(":disabled")) a.preventDefault(); else return b._cacheVals(),
e.prop("checked", g === "radio" && true || !e.prop("checked")), e.triggerHandler("click"), b._getInputSet().not(e).prop("checked", false), b._updateAll(), false
                    } 
                    }); e.bind({ vmousedown: function () { b._cacheVals() }, vclick: function () { var c = a(this); c.is(":checked") ? (c.prop("checked", true), b._getInputSet().not(c).prop("checked", false)) : c.prop("checked", false); b._updateAll() }, focus: function () { d.addClass(a.mobile.focusClass) }, blur: function () { d.removeClass(a.mobile.focusClass) } }); this.refresh()
                } 
            }, _cacheVals: function () {
                this._getInputSet().each(function () {
                    a(this).jqmData("cacheVal",
this.checked)
                })
            }, _getInputSet: function () { return this.inputtype === "checkbox" ? this.element : this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']") }, _updateAll: function () { var b = this; this._getInputSet().each(function () { var c = a(this); (this.checked || b.inputtype === "checkbox") && c.trigger("change") }).checkboxradio("refresh") }, refresh: function () {
                var a = this.element[0], c = this.label, f = c.find(".ui-icon"); a.checked ? (c.addClass(this.checkedClass).removeClass(this.uncheckedClass),
f.addClass(this.checkedicon).removeClass(this.uncheckedicon)) : (c.removeClass(this.checkedClass).addClass(this.uncheckedClass), f.removeClass(this.checkedicon).addClass(this.uncheckedicon)); a.disabled ? this.disable() : this.enable()
            }, disable: function () { this.element.prop("disabled", true).parent().addClass("ui-disabled") }, enable: function () { this.element.prop("disabled", false).parent().removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create", function (b) {
            a.mobile.checkboxradio.prototype.enhanceWithin(b.target,
true)
        })
    })(jQuery); (function (a, c) {
        a.widget("mobile.button", a.mobile.widget, { options: { theme: null, icon: null, iconpos: null, inline: false, corners: true, shadow: true, iconshadow: true, initSelector: "button, [type='button'], [type='submit'], [type='reset'], [type='image']", mini: false }, _create: function () {
            var b = this.element, e, f = this.options, d; d = ""; var g; if (b[0].tagName === "A") !b.hasClass("ui-btn") && b.buttonMarkup(); else {
                if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.element, "c"); ~b[0].className.indexOf("ui-btn-left") &&
(d = "ui-btn-left"); ~b[0].className.indexOf("ui-btn-right") && (d = "ui-btn-right"); e = this.button = a("<div></div>").text(b.text() || b.val()).insertBefore(b).buttonMarkup({ theme: f.theme, icon: f.icon, iconpos: f.iconpos, inline: f.inline, corners: f.corners, shadow: f.shadow, iconshadow: f.iconshadow, mini: f.mini }).addClass(d).append(b.addClass("ui-btn-hidden")); f = b.attr("type"); d = b.attr("name"); f !== "button" && f !== "reset" && d && b.bind("vclick", function () {
    g === c && (g = a("<input>", { type: "hidden", name: b.attr("name"), value: b.attr("value") }).insertBefore(b),
a(k).one("submit", function () { g.remove(); g = c }))
}); b.bind({ focus: function () { e.addClass(a.mobile.focusClass) }, blur: function () { e.removeClass(a.mobile.focusClass) } }); this.refresh()
            } 
        }, enable: function () { this.element.attr("disabled", false); this.button.removeClass("ui-disabled").attr("aria-disabled", false); return this._setOption("disabled", false) }, disable: function () { this.element.attr("disabled", true); this.button.addClass("ui-disabled").attr("aria-disabled", true); return this._setOption("disabled", true) }, refresh: function () {
            var b =
this.element; b.prop("disabled") ? this.disable() : this.enable(); a(this.button.data("buttonElements").text).text(b.text() || b.val())
        } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.button.prototype.enhanceWithin(b.target, true) })
    })(jQuery); (function (a) {
        a.fn.controlgroup = function (c) {
            function b(a, b) { a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(b[0]).end().last().addClass(b[1]).addClass("ui-controlgroup-last") } return this.each(function () {
                var e = a(this), f = a.extend({ direction: e.jqmData("type") ||
"vertical", shadow: false, excludeInvisible: true, mini: e.jqmData("mini")
                }, c), d = e.children("legend"), g = f.direction == "horizontal" ? ["ui-corner-left", "ui-corner-right"] : ["ui-corner-top", "ui-corner-bottom"]; e.find("input").first().attr("type"); d.length && (e.wrapInner("<div class='ui-controlgroup-controls'></div>"), a("<div role='heading' class='ui-controlgroup-label'>" + d.html() + "</div>").insertBefore(e.children(0)), d.remove()); e.addClass("ui-corner-all ui-controlgroup ui-controlgroup-" + f.direction); b(e.find(".ui-btn" +
(f.excludeInvisible ? ":visible" : "")).not(".ui-slider-handle"), g); b(e.find(".ui-btn-inner"), g); f.shadow && e.addClass("ui-shadow"); f.mini && e.addClass("ui-mini")
            })
        } 
    })(jQuery); (function (a) { a(k).bind("pagecreate create", function (c) { a(c.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link") }) })(jQuery); (function (a) {
        var c = a("meta[name=viewport]"), b = c.attr("content"), e = b + ",maximum-scale=1, user-scalable=no", f = b + ",maximum-scale=10, user-scalable=yes",
d = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(b); a.mobile.zoom = a.extend({}, { enabled: !d, locked: false, disable: function (b) { if (!d && !a.mobile.zoom.locked) c.attr("content", e), a.mobile.zoom.enabled = false, a.mobile.zoom.locked = b || false }, enable: function (b) { if (!d && (!a.mobile.zoom.locked || b === true)) c.attr("content", f), a.mobile.zoom.enabled = true, a.mobile.zoom.locked = false }, restore: function () { if (!d) c.attr("content", b), a.mobile.zoom.enabled = true } })
    })(jQuery); (function (a) {
        a.widget("mobile.textinput",
a.mobile.widget, { options: { theme: null, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1, initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type])",
    clearSearchButtonText: "clear text"
}, _create: function () {
    var c = this.element, b = this.options, e = b.theme || a.mobile.getInheritedTheme(this.element, "c"), f = " ui-body-" + e, d = c.jqmData("mini") == true, g = d ? " ui-mini" : "", h, j; a("label[for='" + c.attr("id") + "']").addClass("ui-input-text"); h = c.addClass("ui-input-text ui-body-" + e); typeof c[0].autocorrect !== "undefined" && !a.support.touchOverflow && (c[0].setAttribute("autocorrect", "off"), c[0].setAttribute("autocomplete", "off")); c.is("[type='search'],:jqmData(type='search')") ?
(h = c.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + f + g + "'></div>").parent(), j = a("<a href='#' class='ui-input-clear' title='" + b.clearSearchButtonText + "'>" + b.clearSearchButtonText + "</a>").bind("click", function (a) { c.val("").focus().trigger("change"); j.addClass("ui-input-clear-hidden"); a.preventDefault() }).appendTo(h).buttonMarkup({ icon: "delete", iconpos: "notext", corners: true, shadow: true, mini: d }), e = function () {
    setTimeout(function () {
        j.toggleClass("ui-input-clear-hidden",
!c.val())
    }, 0)
}, e(), c.bind("paste cut keyup focus change blur", e)) : c.addClass("ui-corner-all ui-shadow-inset" + f + g); c.focus(function () { h.addClass(a.mobile.focusClass) }).blur(function () { h.removeClass(a.mobile.focusClass) }).bind("focus", function () { b.preventFocusZoom && a.mobile.zoom.disable(true) }).bind("blur", function () { b.preventFocusZoom && a.mobile.zoom.enable(true) }); if (c.is("textarea")) {
        var o = function () { var a = c[0].scrollHeight; c[0].clientHeight < a && c.height(a + 15) }, m; c.keyup(function () {
            clearTimeout(m);
            m = setTimeout(o, 100)
        }); a(k).one("pagechange", o); a.trim(c.val()) && a(s).load(o)
    } 
}, disable: function () { (this.element.attr("disabled", true).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).addClass("ui-disabled") }, enable: function () { (this.element.attr("disabled", false).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).removeClass("ui-disabled") } 
}); a(k).bind("pagecreate create", function (c) {
    a.mobile.textinput.prototype.enhanceWithin(c.target,
true)
})
    })(jQuery); (function (a) {
        a.mobile.listview.prototype.options.filter = false; a.mobile.listview.prototype.options.filterPlaceholder = "Filter items..."; a.mobile.listview.prototype.options.filterTheme = "c"; a.mobile.listview.prototype.options.filterCallback = function (a, b) { return a.toLowerCase().indexOf(b) === -1 }; a(k).delegate(":jqmData(role='listview')", "listviewcreate", function () {
            var c = a(this), b = c.data("listview"); if (b.options.filter) {
                var e = a("<form>", { "class": "ui-listview-filter ui-bar-" + b.options.filterTheme,
                    role: "search"
                }); a("<input>", { placeholder: b.options.filterPlaceholder }).attr("data-" + a.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change", function () {
                    var e = a(this), d = this.value.toLowerCase(), g = null, g = e.jqmData("lastval") + "", h = false, j = ""; e.jqmData("lastval", d); g = d.length < g.length || d.indexOf(g) !== 0 ? c.children() : c.children(":not(.ui-screen-hidden)"); if (d) {
                        for (var k = g.length - 1; k >= 0; k--) e = a(g[k]), j = e.jqmData("filtertext") || e.text(), e.is("li:jqmData(role=list-divider)") ? (e.toggleClass("ui-filter-hidequeue",
!h), h = false) : b.options.filterCallback(j, d) ? e.toggleClass("ui-filter-hidequeue", true) : h = true; g.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", false); g.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", true).toggleClass("ui-filter-hidequeue", false)
                    } else g.toggleClass("ui-screen-hidden", false); b._refreshCorners()
                }).appendTo(e).textinput(); b.options.inset && e.addClass("ui-listview-filter-inset"); e.bind("submit", function () { return false }).insertBefore(c)
            } 
        })
    })(jQuery); (function (a,
c) {
        a.widget("mobile.slider", a.mobile.widget, { options: { theme: null, trackTheme: null, disabled: false, initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')", mini: false }, _create: function () {
            var b = this, e = this.element, f = a.mobile.getInheritedTheme(e, "c"), d = this.options.theme || f, f = this.options.trackTheme || f, g = e[0].nodeName.toLowerCase(), h = g == "select" ? "ui-slider-switch" : "", j = e.attr("id"), o = j + "-label", j = a("[for='" + j + "']").attr("id", o), m = function () {
                return g == "input" ? parseFloat(e.val()) :
e[0].selectedIndex
            }, p = g == "input" ? parseFloat(e.attr("min")) : 0, l = g == "input" ? parseFloat(e.attr("max")) : e.find("option").length - 1, r = s.parseFloat(e.attr("step") || 1), n = this.options.inline || e.jqmData("inline") == true ? " ui-slider-inline" : "", q = this.options.mini || e.jqmData("mini") ? " ui-slider-mini" : "", t = k.createElement("a"), x = a(t), u = k.createElement("div"), w = a(u), v = e.jqmData("highlight") && g != "select" ? function () { var b = k.createElement("div"); b.className = "ui-slider-bg ui-btn-active ui-btn-corner-all"; return a(b).prependTo(w) } () :
false; t.setAttribute("href", "#"); u.setAttribute("role", "application"); u.className = ["ui-slider ", h, " ui-btn-down-", f, " ui-btn-corner-all", n, q].join(""); t.className = "ui-slider-handle"; u.appendChild(t); x.buttonMarkup({ corners: true, theme: d, shadow: true }).attr({ role: "slider", "aria-valuemin": p, "aria-valuemax": l, "aria-valuenow": m(), "aria-valuetext": m(), title: m(), "aria-labelledby": o }); a.extend(this, { slider: w, handle: x, valuebg: v, dragging: false, beforeStart: null, userModified: false, mouseMoved: false }); if (g == "select") {
                d =
k.createElement("div"); d.className = "ui-slider-inneroffset"; h = 0; for (o = u.childNodes.length; h < o; h++) d.appendChild(u.childNodes[h]); u.appendChild(d); x.addClass("ui-slider-handle-snapping"); u = e.find("option"); d = 0; for (h = u.length; d < h; d++) o = !d ? "b" : "a", n = !d ? " ui-btn-down-" + f : " " + a.mobile.activeBtnClass, k.createElement("div"), q = k.createElement("span"), q.className = ["ui-slider-label ui-slider-label-", o, n, " ui-btn-corner-all"].join(""), q.setAttribute("role", "img"), q.appendChild(k.createTextNode(u[d].innerHTML)),
a(q).prependTo(w); b._labels = a(".ui-slider-label", w)
            } j.addClass("ui-slider"); e.addClass(g === "input" ? "ui-slider-input" : "ui-slider-switch").change(function () { b.mouseMoved || b.refresh(m(), true) }).keyup(function () { b.refresh(m(), true, true) }).blur(function () { b.refresh(m(), true) }); a(k).bind("vmousemove", function (a) { if (b.dragging) return b.mouseMoved = true, g === "select" && x.removeClass("ui-slider-handle-snapping"), b.refresh(a), b.userModified = b.beforeStart !== e[0].selectedIndex, false }); w.bind("vmousedown", function (a) {
                b.dragging =
true; b.userModified = false; b.mouseMoved = false; if (g === "select") b.beforeStart = e[0].selectedIndex; b.refresh(a); return false
            }).bind("vclick", false); w.add(k).bind("vmouseup", function () { if (b.dragging) return b.dragging = false, g === "select" && (x.addClass("ui-slider-handle-snapping"), b.mouseMoved ? b.userModified ? b.refresh(b.beforeStart == 0 ? 1 : 0) : b.refresh(b.beforeStart) : b.refresh(b.beforeStart == 0 ? 1 : 0)), b.mouseMoved = false }); w.insertAfter(e); g == "select" && this.handle.bind({ focus: function () { w.addClass(a.mobile.focusClass) },
                blur: function () { w.removeClass(a.mobile.focusClass) } 
            }); this.handle.bind({ vmousedown: function () { a(this).focus() }, vclick: false, keydown: function (c) {
                var d = m(); if (!b.options.disabled) {
                    switch (c.keyCode) { case a.mobile.keyCode.HOME: case a.mobile.keyCode.END: case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: if (c.preventDefault(), !b._keySliding) b._keySliding = true, a(this).addClass("ui-state-active") } switch (c.keyCode) {
                        case a.mobile.keyCode.HOME: b.refresh(p);
                            break; case a.mobile.keyCode.END: b.refresh(l); break; case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: b.refresh(d + r); break; case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: b.refresh(d - r)
                    } 
                } 
            }, keyup: function () { if (b._keySliding) b._keySliding = false, a(this).removeClass("ui-state-active") } 
            }); this.refresh(c, c, true)
        }, refresh: function (b, c, f) {
            (this.options.disabled || this.element.attr("disabled")) && this.disable(); var d = this.element, g = d[0].nodeName.toLowerCase(),
h = g === "input" ? parseFloat(d.attr("min")) : 0, j = g === "input" ? parseFloat(d.attr("max")) : d.find("option").length - 1, k = g === "input" && parseFloat(d.attr("step")) > 0 ? parseFloat(d.attr("step")) : 1; if (typeof b === "object") { if (!this.dragging || b.pageX < this.slider.offset().left - 8 || b.pageX > this.slider.offset().left + this.slider.width() + 8) return; b = Math.round((b.pageX - this.slider.offset().left) / this.slider.width() * 100) } else b == null && (b = g === "input" ? parseFloat(d.val() || 0) : d[0].selectedIndex), b = (parseFloat(b) - h) / (j - h) * 100; if (!isNaN(b)) {
                b <
0 && (b = 0); b > 100 && (b = 100); var m = b / 100 * (j - h) + h, p = (m - h) % k; m -= p; Math.abs(p) * 2 >= k && (m += p > 0 ? k : -k); m = parseFloat(m.toFixed(5)); m < h && (m = h); m > j && (m = j); this.handle.css("left", b + "%"); this.handle.attr({ "aria-valuenow": g === "input" ? m : d.find("option").eq(m).attr("value"), "aria-valuetext": g === "input" ? m : d.find("option").eq(m).getEncodedText(), title: g === "input" ? m : d.find("option").eq(m).getEncodedText() }); this.valuebg && this.valuebg.css("width", b + "%"); if (this._labels) {
                    var h = this.handle.width() / this.slider.width() * 100,
l = b && h + (100 - h) * b / 100, r = b === 100 ? 0 : Math.min(h + 100 - l, 100); this._labels.each(function () { var b = a(this).is(".ui-slider-label-a"); a(this).width((b ? l : r) + "%") })
                } if (!f) f = false, g === "input" ? (f = d.val() !== m, d.val(m)) : (f = d[0].selectedIndex !== m, d[0].selectedIndex = m), !c && f && d.trigger("change")
            } 
        }, enable: function () { this.element.attr("disabled", false); this.slider.removeClass("ui-disabled").attr("aria-disabled", false); return this._setOption("disabled", false) }, disable: function () {
            this.element.attr("disabled", true); this.slider.addClass("ui-disabled").attr("aria-disabled",
true); return this._setOption("disabled", true)
        } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.slider.prototype.enhanceWithin(b.target, true) })
    })(jQuery); (function (a) {
        a.widget("mobile.selectmenu", a.mobile.widget, { options: { theme: null, disabled: false, icon: "arrow-d", iconpos: "right", inline: false, corners: true, shadow: true, iconshadow: true, overlayTheme: "a", hidePlaceholderMenuItems: true, closeText: "Close", nativeMenu: true, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") >
-1, initSelector: "select:not(:jqmData(role='slider'))", mini: false
        }, _button: function () { return a("<div/>") }, _setDisabled: function (a) { this.element.attr("disabled", a); this.button.attr("aria-disabled", a); return this._setOption("disabled", a) }, _focusButton: function () { var a = this; setTimeout(function () { a.button.focus() }, 40) }, _selectOptions: function () { return this.select.find("option") }, _preExtension: function () {
            var c = ""; ~this.element[0].className.indexOf("ui-btn-left") && (c = " ui-btn-left"); ~this.element[0].className.indexOf("ui-btn-right") &&
(c = " ui-btn-right"); this.select = this.element.wrap("<div class='ui-select" + c + "'>"); this.selectID = this.select.attr("id"); this.label = a("label[for='" + this.selectID + "']").addClass("ui-select"); this.isMultiple = this.select[0].multiple; if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.select, "c")
        }, _create: function () {
            this._preExtension(); this._trigger("beforeCreate"); this.button = this._button(); var c = this, b = this.options, e = this.button.text(a(this.select[0].options.item(this.select[0].selectedIndex ==
-1 ? 0 : this.select[0].selectedIndex)).text()).insertBefore(this.select).buttonMarkup({ theme: b.theme, icon: b.icon, iconpos: b.iconpos, inline: b.inline, corners: b.corners, shadow: b.shadow, iconshadow: b.iconshadow, mini: b.mini }); b.nativeMenu && s.opera && s.opera.version && this.select.addClass("ui-select-nativeonly"); if (this.isMultiple) this.buttonCount = a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(e.addClass("ui-li-has-count")); (b.disabled || this.element.attr("disabled")) && this.disable();
            this.select.change(function () { c.refresh() }); this.build()
        }, build: function () {
            var c = this; this.select.appendTo(c.button).bind("vmousedown", function () { c.button.addClass(a.mobile.activeBtnClass) }).bind("focus", function () { c.button.addClass(a.mobile.focusClass) }).bind("blur", function () { c.button.removeClass(a.mobile.focusClass) }).bind("focus vmouseover", function () { c.button.trigger("vmouseover") }).bind("vmousemove", function () { c.button.removeClass(a.mobile.activeBtnClass) }).bind("change blur vmouseout", function () { c.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass) }).bind("change blur",
function () { c.button.removeClass("ui-btn-down-" + c.options.theme) }); c.button.bind("vmousedown", function () { c.options.preventFocusZoom && a.mobile.zoom.disable(true) }).bind("mouseup", function () { c.options.preventFocusZoom && a.mobile.zoom.enable(true) })
        }, selected: function () { return this._selectOptions().filter(":selected") }, selectedIndices: function () { var a = this; return this.selected().map(function () { return a._selectOptions().index(this) }).get() }, setButtonText: function () {
            var c = this, b = this.selected(); this.button.find(".ui-btn-text").text(function () {
                return !c.isMultiple ?
b.text() : b.length ? b.map(function () { return a(this).text() }).get().join(", ") : c.placeholder
            })
        }, setButtonCount: function () { var a = this.selected(); this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length) }, refresh: function () { this.setButtonText(); this.setButtonCount() }, open: a.noop, close: a.noop, disable: function () { this._setDisabled(true); this.button.addClass("ui-disabled") }, enable: function () { this._setDisabled(false); this.button.removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create",
function (c) { a.mobile.selectmenu.prototype.enhanceWithin(c.target, true) })
    })(jQuery); (function (a) {
        var c = function (b) {
            var c = b.selectID, f = b.label, d = b.select.closest(".ui-page"), g = a("<div>", { "class": "ui-selectmenu-screen ui-screen-hidden" }).appendTo(d), h = b._selectOptions(), j = b.isMultiple = b.select[0].multiple, o = c + "-button", m = c + "-menu", p = a("<div data-" + a.mobile.ns + "role='dialog' data-" + a.mobile.ns + "theme='" + b.options.theme + "' data-" + a.mobile.ns + "overlay-theme='" + b.options.overlayTheme + "'><div data-" + a.mobile.ns +
"role='header'><div class='ui-title'>" + f.getEncodedText() + "</div></div><div data-" + a.mobile.ns + "role='content'></div></div>"), l = a("<div>", { "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-" + b.options.overlayTheme + " " + a.mobile.defaultDialogTransition }).insertAfter(g), r = a("<ul>", { "class": "ui-selectmenu-list", id: m, role: "listbox", "aria-labelledby": o }).attr("data-" + a.mobile.ns + "theme", b.options.theme).appendTo(l), n = a("<div>", { "class": "ui-header ui-bar-" + b.options.theme }).prependTo(l),
q = a("<h1>", { "class": "ui-title" }).appendTo(n), t; b.isMultiple && (t = a("<a>", { text: b.options.closeText, href: "#", "class": "ui-btn-left" }).attr("data-" + a.mobile.ns + "iconpos", "notext").attr("data-" + a.mobile.ns + "icon", "delete").appendTo(n).buttonMarkup()); a.extend(b, { select: b.select, selectID: c, buttonId: o, menuId: m, thisPage: d, menuPage: p, label: f, screen: g, selectOptions: h, isMultiple: j, theme: b.options.theme, listbox: l, list: r, header: n, headerTitle: q, headerClose: t, menuPageContent: void 0, menuPageClose: void 0, placeholder: "",
    build: function () {
        var c = this; c.refresh(); c.select.attr("tabindex", "-1").focus(function () { a(this).blur(); c.button.focus() }); c.button.bind("vclick keydown", function (b) { if (b.type == "vclick" || b.keyCode && (b.keyCode === a.mobile.keyCode.ENTER || b.keyCode === a.mobile.keyCode.SPACE)) c.open(), b.preventDefault() }); c.list.attr("role", "listbox").bind("focusin", function (b) { a(b.target).attr("tabindex", "0").trigger("vmouseover") }).bind("focusout", function (b) { a(b.target).attr("tabindex", "-1").trigger("vmouseout") }).delegate("li:not(.ui-disabled, .ui-li-divider)",
"click", function (b) { var d = c.select[0].selectedIndex, e = c.list.find("li:not(.ui-li-divider)").index(this), f = c._selectOptions().eq(e)[0]; f.selected = c.isMultiple ? !f.selected : true; c.isMultiple && a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", f.selected).toggleClass("ui-icon-checkbox-off", !f.selected); (c.isMultiple || d !== e) && c.select.trigger("change"); c.isMultiple || c.close(); b.preventDefault() }).keydown(function (c) {
    var d = a(c.target), e = d.closest("li"); switch (c.keyCode) {
        case 38: return c = e.prev().not(".ui-selectmenu-placeholder"),
c.is(".ui-li-divider") && (c = c.prev()), c.length && (d.blur().attr("tabindex", "-1"), c.addClass("ui-btn-down-" + b.options.theme).find("a").first().focus()), false; case 40: return c = e.next(), c.is(".ui-li-divider") && (c = c.next()), c.length && (d.blur().attr("tabindex", "-1"), c.addClass("ui-btn-down-" + b.options.theme).find("a").first().focus()), false; case 13: case 32: return d.trigger("click"), false
    } 
}); c.menuPage.bind("pagehide", function () { c.list.appendTo(c.listbox); c._focusButton(); a.mobile._bindPageRemove.call(c.thisPage) });
        c.screen.bind("vclick", function () { c.close() }); c.isMultiple && c.headerClose.click(function () { if (c.menuType == "overlay") return c.close(), false }); c.thisPage.addDependents(this.menuPage)
    }, _isRebuildRequired: function () { var a = this.list.find("li"); return this._selectOptions().text() !== a.text() }, refresh: function (b) {
        var c = this; this._selectOptions(); this.selected(); var d = this.selectedIndices(); (b || this._isRebuildRequired()) && c._buildList(); c.setButtonText(); c.setButtonCount(); c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",
false).each(function (b) { a.inArray(b, d) > -1 && (b = a(this), b.attr("aria-selected", true), c.isMultiple ? b.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : b.is(".ui-selectmenu-placeholder") ? b.next().addClass(a.mobile.activeBtnClass) : b.addClass(a.mobile.activeBtnClass)) })
    }, close: function () {
        if (!this.options.disabled && this.isOpen) this.menuType == "page" ? s.history.back() : (this.screen.addClass("ui-screen-hidden"), this.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"),
this.list.appendTo(this.listbox), this._focusButton()), this.isOpen = false
    }, open: function () {
        function b() { c.list.find("." + a.mobile.activeBtnClass + " a").focus() } if (!this.options.disabled) {
            var c = this, d = a(s), e = c.list.parent(), f = e.outerHeight(), e = e.outerWidth(); a(".ui-page-active"); var g = d.scrollTop(), j = c.button.offset().top, h = d.height(), d = d.width(); c.button.addClass(a.mobile.activeBtnClass); setTimeout(function () { c.button.removeClass(a.mobile.activeBtnClass) }, 300); if (f > h - 80 || !a.support.scrollTop) {
                c.menuPage.appendTo(a.mobile.pageContainer).page();
                c.menuPageContent = p.find(".ui-content"); c.menuPageClose = p.find(".ui-header a"); c.thisPage.unbind("pagehide.remove"); if (g == 0 && j > h) c.thisPage.one("pagehide", function () { a(this).jqmData("lastScroll", j) }); c.menuPage.one("pageshow", function () { b(); c.isOpen = true }); c.menuType = "page"; c.menuPageContent.append(c.list); c.menuPage.find("div .ui-title").text(c.label.text()); a.mobile.changePage(c.menuPage, { transition: a.mobile.defaultDialogTransition })
            } else {
                c.menuType = "overlay"; c.screen.height(a(k).height()).removeClass("ui-screen-hidden");
                var l = j - g, m = g + h - j, n = f / 2, o = parseFloat(c.list.parent().css("max-width")), f = l > f / 2 && m > f / 2 ? j + c.button.outerHeight() / 2 - n : l > m ? g + h - f - 30 : g + 30; e < o ? g = (d - e) / 2 : (g = c.button.offset().left + c.button.outerWidth() / 2 - e / 2, g < 30 ? g = 30 : g + e > d && (g = d - e - 30)); c.listbox.append(c.list).removeClass("ui-selectmenu-hidden").css({ top: f, left: g }).addClass("in"); b(); c.isOpen = true
            } 
        } 
    }, _buildList: function () {
        var b = this.options, c = this.placeholder, d = true, e = this.isMultiple ? "checkbox-off" : "false"; this.list.empty().filter(".ui-listview").listview("destroy");
        var f = this.select.find("option"), g = f.length, j = this.select[0], h = "data-" + a.mobile.ns, l = h + "option-index", m = h + "icon"; h += "role"; for (var n = k.createDocumentFragment(), o, p = 0; p < g; p++) {
            var r = f[p], q = a(r), s = r.parentNode, t = q.text(), D = k.createElement("a"), J = []; D.setAttribute("href", "#"); D.appendChild(k.createTextNode(t)); s !== j && s.nodeName.toLowerCase() === "optgroup" && (s = s.getAttribute("label"), s != o && (o = k.createElement("li"), o.setAttribute(h, "list-divider"), o.setAttribute("role", "option"), o.setAttribute("tabindex",
"-1"), o.appendChild(k.createTextNode(s)), n.appendChild(o), o = s)); if (d && (!r.getAttribute("value") || t.length == 0 || q.jqmData("placeholder"))) if (d = false, b.hidePlaceholderMenuItems && J.push("ui-selectmenu-placeholder"), !c) c = this.placeholder = t; q = k.createElement("li"); r.disabled && (J.push("ui-disabled"), q.setAttribute("aria-disabled", true)); q.setAttribute(l, p); q.setAttribute(m, e); q.className = J.join(" "); q.setAttribute("role", "option"); D.setAttribute("tabindex", "-1"); q.appendChild(D); n.appendChild(q)
        } this.list[0].appendChild(n);
        !this.isMultiple && !c.length ? this.header.hide() : this.headerTitle.text(this.placeholder); this.list.listview()
    }, _button: function () { return a("<a>", { href: "#", role: "button", id: this.buttonId, "aria-haspopup": "true", "aria-owns": this.menuId }) } 
})
        }; a(k).bind("selectmenubeforecreate", function (b) { b = a(b.target).data("selectmenu"); b.options.nativeMenu || c(b) })
    })(jQuery); (function (a) {
        a.widget("mobile.fixedtoolbar", a.mobile.widget, { options: { visibleOnPageShow: true, disablePageZoom: true, transition: "slide", fullscreen: false,
            tapToggle: true, tapToggleBlacklist: "a, input, select, textarea, .ui-header-fixed, .ui-footer-fixed", hideDuringFocus: "input, textarea, select", updatePagePadding: true, trackPersistentToolbars: true, supportBlacklist: function () {
                var a = s, b = navigator.userAgent, e = navigator.platform, f = b.match(/AppleWebKit\/([0-9]+)/), f = !!f && f[1], d = b.match(/Fennec\/([0-9]+)/), d = !!d && d[1], g = b.match(/Opera Mobi\/([0-9]+)/), h = !!g && g[1]; return (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("iPod") > -1) && f && f < 534 || a.operamini &&
{}.toString.call(a.operamini) === "[object OperaMini]" || g && h < 7458 || b.indexOf("Android") > -1 && f && f < 533 || d && d < 6 || "palmGetResource" in s && f && f < 534 || b.indexOf("MeeGo") > -1 && b.indexOf("NokiaBrowser/8.5.0") > -1 ? true : false
            }, initSelector: ":jqmData(position='fixed')"
        }, _create: function () {
            var a = this.options, b = this.element, e = b.is(":jqmData(role='header')") ? "header" : "footer", f = b.closest(".ui-page"); a.supportBlacklist() ? this.destroy() : (b.addClass("ui-" + e + "-fixed"), a.fullscreen ? (b.addClass("ui-" + e + "-fullscreen"), f.addClass("ui-page-" +
e + "-fullscreen")) : f.addClass("ui-page-" + e + "-fixed"), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers())
        }, _addTransitionClass: function () { var a = this.options.transition; a && a !== "none" && (a === "slide" && (a = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(a)) }, _bindPageEvents: function () {
            var c = this, b = c.options; c.element.closest(".ui-page").bind("pagebeforeshow", function () { b.disablePageZoom && a.mobile.zoom.disable(true); b.visibleOnPageShow || c.hide(true) }).bind("webkitAnimationStart animationstart updatelayout",
function () { b.updatePagePadding && c.updatePagePadding() }).bind("pageshow", function () { c.updatePagePadding(); b.updatePagePadding && a(s).bind("throttledresize." + c.widgetName, function () { c.updatePagePadding() }) }).bind("pagebeforehide", function (e, f) {
    b.disablePageZoom && a.mobile.zoom.enable(true); b.updatePagePadding && a(s).unbind("throttledresize." + c.widgetName); if (b.trackPersistentToolbars) {
        var d = a(".ui-footer-fixed:jqmData(id)", this), g = a(".ui-header-fixed:jqmData(id)", this), h = d.length && f.nextPage && a(".ui-footer-fixed:jqmData(id='" +
d.jqmData("id") + "')", f.nextPage), j = g.length && f.nextPage && a(".ui-header-fixed:jqmData(id='" + g.jqmData("id") + "')", f.nextPage), h = h || a(); if (h.length || j.length) h.add(j).appendTo(a.mobile.pageContainer), f.nextPage.one("pageshow", function () { h.add(j).appendTo(this) })
    } 
})
        }, _visible: true, updatePagePadding: function () { var a = this.element, b = a.is(".ui-header"); this.options.fullscreen || a.closest(".ui-page").css("padding-" + (b ? "top" : "bottom"), a.outerHeight()) }, _useTransition: function (c) {
            var b = this.element, e = a(s).scrollTop(),
f = b.height(), d = b.closest(".ui-page").height(), g = a.mobile.getScreenHeight(), b = b.is(":jqmData(role='header')") ? "header" : "footer"; return !c && (this.options.transition && this.options.transition !== "none" && (b === "header" && !this.options.fullscreen && e > f || b === "footer" && !this.options.fullscreen && e + g < d - f) || this.options.fullscreen)
        }, show: function (a) { var b = this.element; this._useTransition(a) ? b.removeClass("out ui-fixed-hidden").addClass("in") : b.removeClass("ui-fixed-hidden"); this._visible = true }, hide: function (a) {
            var b =
this.element, e = "out" + (this.options.transition === "slide" ? " reverse" : ""); this._useTransition(a) ? b.addClass(e).removeClass("in").animationComplete(function () { b.addClass("ui-fixed-hidden").removeClass(e) }) : b.addClass("ui-fixed-hidden").removeClass(e); this._visible = false
        }, toggle: function () { this[this._visible ? "hide" : "show"]() }, _bindToggleHandlers: function () {
            var c = this, b = c.options; c.element.closest(".ui-page").bind("vclick", function (e) { b.tapToggle && !a(e.target).closest(b.tapToggleBlacklist).length && c.toggle() }).bind("focusin focusout",
function (e) { if (screen.width < 500 && a(e.target).is(b.hideDuringFocus) && !a(e.target).closest(".ui-header-fixed, .ui-footer-fixed").length) c[e.type === "focusin" && c._visible ? "hide" : "show"]() })
        }, destroy: function () { this.element.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"); this.element.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen") } 
        }); a(k).bind("pagecreate create",
function (c) { a(c.target).jqmData("fullscreen") && a(a.mobile.fixedtoolbar.prototype.options.initSelector, c.target).not(":jqmData(fullscreen)").jqmData("fullscreen", true); a.mobile.fixedtoolbar.prototype.enhanceWithin(c.target) })
    })(jQuery); (function (a, c) {
        if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
            var b = a.mobile.zoom, e, f, d, g, h; a(c).bind("orientationchange.iosorientationfix", b.enable).bind("devicemotion.iosorientationfix", function (a) {
                e = a.originalEvent;
                h = e.accelerationIncludingGravity; f = Math.abs(h.x); d = Math.abs(h.y); g = Math.abs(h.z); !c.orientation && (f > 7 || (g > 6 && d < 8 || g < 8 && d > 6) && f > 5) ? b.enabled && b.disable() : b.enabled || b.enable()
            })
        } 
    })(jQuery, this); (function (a, c) {
        function b() { var b = a("." + a.mobile.activeBtnClass).first(); h.css({ top: a.support.scrollTop && g.scrollTop() + g.height() / 2 || b.length && b.offset().top || 100 }) } function e() {
            var c = h.offset(), d = g.scrollTop(), f = a.mobile.getScreenHeight(); if (c.top < d || c.top - d > f) h.addClass("ui-loader-fakefix"), b(), g.unbind("scroll",
e).bind("scroll", b)
        } function f() { d.removeClass("ui-mobile-rendering") } var d = a("html"); a("head"); var g = a(c); a(c.document).trigger("mobileinit"); if (a.mobile.gradeA()) {
            if (a.mobile.ajaxBlacklist) a.mobile.ajaxEnabled = false; d.addClass("ui-mobile ui-mobile-rendering"); setTimeout(f, 5E3); var h = a("<div class='ui-loader'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>"); a.extend(a.mobile, { showPageLoadingMsg: function (b, c, f) {
                d.addClass("ui-loading"); if (a.mobile.loadingMessage) {
                    var k = f || a.mobile.loadingMessageTextVisible;
                    b = b || a.mobile.loadingMessageTheme; h.attr("class", "ui-loader ui-corner-all ui-body-" + (b || "a") + " ui-loader-" + (k ? "verbose" : "default") + (f ? " ui-loader-textonly" : "")).find("h1").text(c || a.mobile.loadingMessage).end().appendTo(a.mobile.pageContainer); e(); g.bind("scroll", e)
                } 
            }, hidePageLoadingMsg: function () { d.removeClass("ui-loading"); a.mobile.loadingMessage && h.removeClass("ui-loader-fakefix"); a(c).unbind("scroll", b); a(c).unbind("scroll", e) }, initializePage: function () {
                var b = a(":jqmData(role='page'), :jqmData(role='dialog')");
                b.length || (b = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0)); b.each(function () { var b = a(this); b.jqmData("url") || b.attr("data-" + a.mobile.ns + "url", b.attr("id") || location.pathname + location.search) }); a.mobile.firstPage = b.first(); a.mobile.pageContainer = b.first().parent().addClass("ui-mobile-viewport"); g.trigger("pagecontainercreate"); a.mobile.showPageLoadingMsg(); f(); !a.mobile.hashListeningEnabled || !a.mobile.path.stripHash(location.hash) ? a.mobile.changePage(a.mobile.firstPage,
{ transition: "none", reverse: true, changeHash: false, fromHashChange: true }) : g.trigger("hashchange", [true])
            } 
            }); a.mobile._registerInternalEvents(); a(function () { c.scrollTo(0, 1); a.mobile.defaultHomeScroll = !a.support.scrollTop || a(c).scrollTop() === 1 ? 0 : 1; a.fn.controlgroup && a(k).bind("pagecreate create", function (b) { a(":jqmData(role='controlgroup')", b.target).jqmEnhanceable().controlgroup({ excludeInvisible: false }) }); a.mobile.autoInitializePage && a.mobile.initializePage(); g.load(a.mobile.silentScroll) })
        } 
    })(jQuery,
this)
});