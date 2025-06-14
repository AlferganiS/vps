/* modernizr-custom.js */
!(function (window, document, undefined) {
    function is(e, t) {
        return typeof e === t;
    }
    function testRunner() {
        var e, t, r, n, i, o, d;
        for (var a in tests)
            if (tests.hasOwnProperty(a)) {
                if (((e = []), (t = tests[a]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))) for (r = 0; r < t.options.aliases.length; r++) e.push(t.options.aliases[r].toLowerCase());
                for (n = is(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
                    (o = e[i]),
                        (d = o.split(".")),
                        1 === d.length ? (Modernizr[d[0]] = n) : (!Modernizr[d[0]] || Modernizr[d[0]] instanceof Boolean || (Modernizr[d[0]] = new Boolean(Modernizr[d[0]])), (Modernizr[d[0]][d[1]] = n)),
                        classes.push((n ? "" : "no-") + d.join("-"));
            }
    }
    function setClasses(e) {
        var t = docElement.className,
            r = Modernizr._config.classPrefix || "";
        if ((isSVG && (t = t.baseVal), Modernizr._config.enableJSClass)) {
            var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
            t = t.replace(n, "$1" + r + "js$2");
        }
        Modernizr._config.enableClasses && ((t += " " + r + e.join(" " + r)), isSVG ? (docElement.className.baseVal = t) : (docElement.className = t));
    }
    function addTest(e, t) {
        if ("object" == typeof e) for (var r in e) hasOwnProp(e, r) && addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            var n = e.split("."),
                i = Modernizr[n[0]];
            if ((2 == n.length && (i = i[n[1]]), "undefined" != typeof i)) return Modernizr;
            (t = "function" == typeof t ? t() : t),
                1 == n.length ? (Modernizr[n[0]] = t) : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), (Modernizr[n[0]][n[1]] = t)),
                setClasses([(t && 0 != t ? "" : "no-") + n.join("-")]),
                Modernizr._trigger(e, t);
        }
        return Modernizr;
    }
    function createElement() {
        return "function" != typeof document.createElement
            ? document.createElement(arguments[0])
            : isSVG
            ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0])
            : document.createElement.apply(document, arguments);
    }
    function contains(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function roundedEquals(e, t) {
        return e - 1 === t || e === t || e + 1 === t;
    }
    function getBody() {
        var e = document.body;
        return e || ((e = createElement(isSVG ? "svg" : "body")), (e.fake = !0)), e;
    }
    function cssToDOM(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, t, r) {
                return t + r.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function injectElementWithStyles(e, t, r, n) {
        var i,
            o,
            d,
            a,
            s = "modernizr",
            l = createElement("div"),
            c = getBody();
        if (parseInt(r, 10)) for (; r--; ) (d = createElement("div")), (d.id = n ? n[r] : s + (r + 1)), l.appendChild(d);
        return (
            (i = createElement("style")),
            (i.type = "text/css"),
            (i.id = "s" + s),
            (c.fake ? c : l).appendChild(i),
            c.appendChild(l),
            i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)),
            (l.id = s),
            c.fake && ((c.style.background = ""), (c.style.overflow = "hidden"), (a = docElement.style.overflow), (docElement.style.overflow = "hidden"), docElement.appendChild(c)),
            (o = t(l, e)),
            c.fake ? (c.parentNode.removeChild(c), (docElement.style.overflow = a), docElement.offsetHeight) : l.parentNode.removeChild(l),
            !!o
        );
    }
    function fnBind(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    function testDOMProps(e, t, r) {
        var n;
        for (var i in e) if (e[i] in t) return r === !1 ? e[i] : ((n = t[e[i]]), is(n, "function") ? fnBind(n, r || t) : n);
        return !1;
    }
    function domToCSS(e) {
        return e
            .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function nativeTestProps(e, t) {
        var r = e.length;
        if ("CSS" in window && "supports" in window.CSS) {
            for (; r--; ) if (window.CSS.supports(domToCSS(e[r]), t)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in window) {
            for (var n = []; r--; ) n.push("(" + domToCSS(e[r]) + ":" + t + ")");
            return (
                (n = n.join(" or ")),
                injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == getComputedStyle(e, null).position;
                })
            );
        }
        return undefined;
    }
    function testProps(e, t, r, n) {
        function i() {
            d && (delete mStyle.style, delete mStyle.modElem);
        }
        if (((n = is(n, "undefined") ? !1 : n), !is(r, "undefined"))) {
            var o = nativeTestProps(e, r);
            if (!is(o, "undefined")) return o;
        }
        for (var d, a, s, l, c, u = ["modernizr", "tspan", "samp"]; !mStyle.style && u.length; ) (d = !0), (mStyle.modElem = createElement(u.shift())), (mStyle.style = mStyle.modElem.style);
        for (s = e.length, a = 0; s > a; a++)
            if (((l = e[a]), (c = mStyle.style[l]), contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined)) {
                if (n || is(r, "undefined")) return i(), "pfx" == t ? l : !0;
                try {
                    mStyle.style[l] = r;
                } catch (p) {}
                if (mStyle.style[l] != c) return i(), "pfx" == t ? l : !0;
            }
        return i(), !1;
    }
    function testPropsAll(e, t, r, n, i) {
        var o = e.charAt(0).toUpperCase() + e.slice(1),
            d = (e + " " + cssomPrefixes.join(o + " ") + o).split(" ");
        return is(t, "string") || is(t, "undefined") ? testProps(d, t, n, i) : ((d = (e + " " + domPrefixes.join(o + " ") + o).split(" ")), testDOMProps(d, t, r));
    }
    function testAllProps(e, t, r) {
        return testPropsAll(e, undefined, undefined, t, r);
    }
    var tests = [],
        ModernizrProto = {
            _version: "3.3.1",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, t) {
                var r = this;
                setTimeout(function () {
                    t(r[e]);
                }, 0);
            },
            addTest: function (e, t, r) {
                tests.push({ name: e, fn: t, options: r });
            },
            addAsyncTest: function (e) {
                tests.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = ModernizrProto),
        (Modernizr = new Modernizr()),
        Modernizr.addTest("beacon", "sendBeacon" in navigator),
        Modernizr.addTest("applicationcache", "applicationCache" in window),
        Modernizr.addTest(
            "blobconstructor",
            function () {
                try {
                    return !!new Blob();
                } catch (e) {
                    return !1;
                }
            },
            { aliases: ["blob-constructor"] }
        ),
        Modernizr.addTest("cookies", function () {
            try {
                document.cookie = "cookietest=1";
                var e = -1 != document.cookie.indexOf("cookietest=");
                return (document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"), e;
            } catch (t) {
                return !1;
            }
        }),
        Modernizr.addTest("cors", "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()),
        Modernizr.addTest("customprotocolhandler", function () {
            if (!navigator.registerProtocolHandler) return !1;
            try {
                navigator.registerProtocolHandler("thisShouldFail");
            } catch (e) {
                return e instanceof TypeError;
            }
            return !1;
        }),
        Modernizr.addTest("customevent", "CustomEvent" in window && "function" == typeof window.CustomEvent),
        Modernizr.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype),
        Modernizr.addTest("eventlistener", "addEventListener" in window),
        Modernizr.addTest("geolocation", "geolocation" in navigator),
        Modernizr.addTest("history", function () {
            var e = navigator.userAgent;
            return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0")) || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")
                ? window.history && "pushState" in window.history
                : !1;
        }),
        Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode),
        Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON),
        Modernizr.addTest("notification", function () {
            if (!window.Notification || !window.Notification.requestPermission) return !1;
            if ("granted" === window.Notification.permission) return !0;
            try {
                new window.Notification("");
            } catch (e) {
                if ("TypeError" === e.name) return !1;
            }
            return !0;
        }),
        Modernizr.addTest("postmessage", "postMessage" in window),
        Modernizr.addTest("queryselector", "querySelector" in document && "querySelectorAll" in document),
        Modernizr.addTest("serviceworker", "serviceWorker" in navigator),
        Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
        Modernizr.addTest("templatestrings", function () {
            var supports;
            try {
                eval("``"), (supports = !0);
            } catch (e) {}
            return !!supports;
        }),
        Modernizr.addTest("typedarrays", "ArrayBuffer" in window);
    var supports = !1;
    try {
        supports = "WebSocket" in window && 2 === window.WebSocket.CLOSING;
    } catch (e) {}
    Modernizr.addTest("websockets", supports),
        Modernizr.addTest("xdomainrequest", "XDomainRequest" in window),
        Modernizr.addTest("webaudio", function () {
            var e = "webkitAudioContext" in window,
                t = "AudioContext" in window;
            return Modernizr._config.usePrefixes ? e || t : t;
        });
    var CSS = window.CSS;
    Modernizr.addTest("cssescape", CSS ? "function" == typeof CSS.escape : !1);
    var newSyntax = "CSS" in window && "supports" in window.CSS,
        oldSyntax = "supportsCSS" in window;
    Modernizr.addTest("supports", newSyntax || oldSyntax),
        Modernizr.addTest("target", function () {
            var e = window.document;
            if (!("querySelectorAll" in e)) return !1;
            try {
                return e.querySelectorAll(":target"), !0;
            } catch (t) {
                return !1;
            }
        }),
        Modernizr.addTest("microdata", "getItems" in document),
        Modernizr.addTest("mutationobserver", !!window.MutationObserver || !!window.WebKitMutationObserver),
        Modernizr.addTest("picture", "HTMLPictureElement" in window),
        Modernizr.addTest("es5array", function () {
            return !!(
                Array.prototype &&
                Array.prototype.every &&
                Array.prototype.filter &&
                Array.prototype.forEach &&
                Array.prototype.indexOf &&
                Array.prototype.lastIndexOf &&
                Array.prototype.map &&
                Array.prototype.some &&
                Array.prototype.reduce &&
                Array.prototype.reduceRight &&
                Array.isArray
            );
        }),
        Modernizr.addTest("es5date", function () {
            var e = "2013-04-12T06:06:37.307Z",
                t = !1;
            try {
                t = !!Date.parse(e);
            } catch (r) {}
            return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && t);
        }),
        Modernizr.addTest("es5function", function () {
            return !(!Function.prototype || !Function.prototype.bind);
        }),
        Modernizr.addTest("es5object", function () {
            return !!(
                Object.keys &&
                Object.create &&
                Object.getPrototypeOf &&
                Object.getOwnPropertyNames &&
                Object.isSealed &&
                Object.isFrozen &&
                Object.isExtensible &&
                Object.getOwnPropertyDescriptor &&
                Object.defineProperty &&
                Object.defineProperties &&
                Object.seal &&
                Object.freeze &&
                Object.preventExtensions
            );
        }),
        Modernizr.addTest(
            "strictmode",
            (function () {
                "use strict";
                return !this;
            })()
        ),
        Modernizr.addTest("es5string", function () {
            return !(!String.prototype || !String.prototype.trim);
        }),
        Modernizr.addTest("es5syntax", function () {
            var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars;
            try {
                return (
                    (stringAccess = eval('"foobar"[3] === "b"')),
                    (getter = eval("({ get x(){ return 1 } }).x === 1")),
                    eval("({ set x(v){ value = v; } }).x = 1"),
                    (setter = 1 === value),
                    eval("obj = ({ if: 1 })"),
                    (reservedWords = 1 === obj["if"]),
                    (zeroWidthChars = eval("_â€Œâ€ = true")),
                    stringAccess && getter && setter && reservedWords && zeroWidthChars
                );
            } catch (ignore) {
                return !1;
            }
        }),
        Modernizr.addTest("es5undefined", function () {
            var e, t;
            try {
                (t = window.undefined), (window.undefined = 12345), (e = "undefined" == typeof window.undefined), (window.undefined = t);
            } catch (r) {
                return !1;
            }
            return e;
        }),
        Modernizr.addTest("es5", function () {
            return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined);
        }),
        Modernizr.addTest(
            "es6array",
            !!(
                Array.prototype &&
                Array.prototype.copyWithin &&
                Array.prototype.fill &&
                Array.prototype.find &&
                Array.prototype.findIndex &&
                Array.prototype.keys &&
                Array.prototype.entries &&
                Array.prototype.values &&
                Array.from &&
                Array.of
            )
        ),
        Modernizr.addTest("es6collections", !!(window.Map && window.Set && window.WeakMap && window.WeakSet)),
        Modernizr.addTest("generators", function () {
            try {
                new Function("function* test() {}")();
            } catch (e) {
                return !1;
            }
            return !0;
        }),
        Modernizr.addTest(
            "es6math",
            !!(
                Math &&
                Math.clz32 &&
                Math.cbrt &&
                Math.imul &&
                Math.sign &&
                Math.log10 &&
                Math.log2 &&
                Math.log1p &&
                Math.expm1 &&
                Math.cosh &&
                Math.sinh &&
                Math.tanh &&
                Math.acosh &&
                Math.asinh &&
                Math.atanh &&
                Math.hypot &&
                Math.trunc &&
                Math.fround
            )
        ),
        Modernizr.addTest(
            "es6number",
            !!(
                Number.isFinite &&
                Number.isInteger &&
                Number.isSafeInteger &&
                Number.isNaN &&
                Number.parseInt &&
                Number.parseFloat &&
                Number.isInteger(Number.MAX_SAFE_INTEGER) &&
                Number.isInteger(Number.MIN_SAFE_INTEGER) &&
                Number.isFinite(Number.EPSILON)
            )
        ),
        Modernizr.addTest("es6object", !!(Object.assign && Object.is && Object.setPrototypeOf)),
        Modernizr.addTest("promises", function () {
            return (
                "Promise" in window &&
                "resolve" in window.Promise &&
                "reject" in window.Promise &&
                "all" in window.Promise &&
                "race" in window.Promise &&
                (function () {
                    var e;
                    return (
                        new window.Promise(function (t) {
                            e = t;
                        }),
                        "function" == typeof e
                    );
                })()
            );
        }),
        Modernizr.addTest("es6string", !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.contains)),
        Modernizr.addTest("devicemotion", "DeviceMotionEvent" in window),
        Modernizr.addTest("deviceorientation", "DeviceOrientationEvent" in window),
        Modernizr.addTest("filereader", !!(window.File && window.FileList && window.FileReader)),
        Modernizr.addTest("lowbandwidth", function () {
            var e = navigator.connection || { type: 0 };
            return 3 == e.type || 4 == e.type || /^[23]g$/.test(e.type);
        }),
        Modernizr.addTest("eventsource", "EventSource" in window),
        Modernizr.addTest("fetch", "fetch" in window),
        Modernizr.addTest(
            "xhrresponsetype",
            (function () {
                if ("undefined" == typeof XMLHttpRequest) return !1;
                var e = new XMLHttpRequest();
                return e.open("get", "/", !0), "response" in e;
            })()
        ),
        Modernizr.addTest("xhr2", "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()),
        Modernizr.addTest("speechsynthesis", "SpeechSynthesisUtterance" in window),
        Modernizr.addTest("localstorage", function () {
            var e = "modernizr";
            try {
                return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
            } catch (t) {
                return !1;
            }
        }),
        Modernizr.addTest("sessionstorage", function () {
            var e = "modernizr";
            try {
                return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
            } catch (t) {
                return !1;
            }
        }),
        Modernizr.addTest("websqldatabase", "openDatabase" in window),
        Modernizr.addTest("svgfilters", function () {
            var e = !1;
            try {
                e = "SVGFEColorMatrixElement" in window && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
            } catch (t) {}
            return e;
        }),
        Modernizr.addTest("urlparser", function () {
            var e;
            try {
                return (e = new URL("http://modernizr.com/")), "http://modernizr.com/" === e.href;
            } catch (t) {
                return !1;
            }
        }),
        Modernizr.addTest("websocketsbinary", function () {
            var e,
                t = "https:" == location.protocol ? "wss" : "ws";
            if ("WebSocket" in window) {
                if ((e = "binaryType" in WebSocket.prototype)) return e;
                try {
                    return !!new WebSocket(t + "://.").binaryType;
                } catch (r) {}
            }
            return !1;
        }),
        Modernizr.addTest("atobbtoa", "atob" in window && "btoa" in window, { aliases: ["atob-btoa"] }),
        Modernizr.addTest("framed", window.location != top.location),
        Modernizr.addTest("sharedworkers", "SharedWorker" in window),
        Modernizr.addTest("webworkers", "Worker" in window);
    var classes = [];
    Modernizr.addTest("contains", is(String.prototype.contains, "function"));
    var hasOwnProp;
    !(function () {
        var e = {}.hasOwnProperty;
        hasOwnProp =
            is(e, "undefined") || is(e.call, "undefined")
                ? function (e, t) {
                      return t in e && is(e.constructor.prototype[t], "undefined");
                  }
                : function (t, r) {
                      return e.call(t, r);
                  };
    })();
    var docElement = document.documentElement;
    Modernizr.addTest("contextmenu", "contextMenu" in docElement && "HTMLMenuItemElement" in window),
        Modernizr.addTest("cssall", "all" in docElement.style),
        Modernizr.addTest("willchange", "willChange" in docElement.style),
        Modernizr.addTest("classlist", "classList" in docElement),
        Modernizr.addTest("documentfragment", function () {
            return "createDocumentFragment" in document && "appendChild" in docElement;
        });
    var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    ModernizrProto._prefixes = prefixes;
    var isSVG = "svg" === docElement.nodeName.toLowerCase();
    (ModernizrProto._l = {}),
        (ModernizrProto.on = function (e, t) {
            this._l[e] || (this._l[e] = []),
                this._l[e].push(t),
                Modernizr.hasOwnProperty(e) &&
                    setTimeout(function () {
                        Modernizr._trigger(e, Modernizr[e]);
                    }, 0);
        }),
        (ModernizrProto._trigger = function (e, t) {
            if (this._l[e]) {
                var r = this._l[e];
                setTimeout(function () {
                    var e, n;
                    for (e = 0; e < r.length; e++) (n = r[e])(t);
                }, 0),
                    delete this._l[e];
            }
        }),
        Modernizr._q.push(function () {
            ModernizrProto.addTest = addTest;
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onerror = function () {
                addTest("exiforientation", !1, { aliases: ["exif-orientation"] });
            }),
                (e.onload = function () {
                    addTest("exiforientation", 2 !== e.width, { aliases: ["exif-orientation"] });
                }),
                (e.src =
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q==");
        }),
        Modernizr.addAsyncTest(function () {
            function e() {
                clearTimeout(t), window.removeEventListener("deviceproximity", e), addTest("proximity", !0);
            }
            var t,
                r = 300;
            "ondeviceproximity" in window && "onuserproximity" in window
                ? (window.addEventListener("deviceproximity", e),
                  (t = setTimeout(function () {
                      window.removeEventListener("deviceproximity", e), addTest("proximity", !1);
                  }, r)))
                : addTest("proximity", !1);
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onload = e.onerror = function () {
                addTest("jpeg2000", 1 == e.width);
            }),
                (e.src =
                    "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=");
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onload = e.onerror = function () {
                addTest("jpegxr", 1 == e.width, { aliases: ["jpeg-xr"] });
            }),
                (e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==");
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onerror = function () {
                addTest("webpalpha", !1, { aliases: ["webp-alpha"] });
            }),
                (e.onload = function () {
                    addTest("webpalpha", 1 == e.width, { aliases: ["webp-alpha"] });
                }),
                (e.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onerror = function () {
                addTest("webpanimation", !1, { aliases: ["webp-animation"] });
            }),
                (e.onload = function () {
                    addTest("webpanimation", 1 == e.width, { aliases: ["webp-animation"] });
                }),
                (e.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA");
        }),
        Modernizr.addAsyncTest(function () {
            var e = new Image();
            (e.onerror = function () {
                addTest("webplossless", !1, { aliases: ["webp-lossless"] });
            }),
                (e.onload = function () {
                    addTest("webplossless", 1 == e.width, { aliases: ["webp-lossless"] });
                }),
                (e.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
        }),
        Modernizr.addAsyncTest(function () {
            function e(e, t, r) {
                function n(t) {
                    var n = t && "load" === t.type ? 1 == i.width : !1,
                        o = "webp" === e;
                    addTest(e, o ? new Boolean(n) : n), r && r(t);
                }
                var i = new Image();
                (i.onerror = n), (i.onload = n), (i.src = t);
            }
            var t = [
                    { uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" },
                    { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" },
                    { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" },
                    { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" },
                ],
                r = t.shift();
            e(r.name, r.uri, function (r) {
                if (r && "load" === r.type) for (var n = 0; n < t.length; n++) e(t[n].name, t[n].uri);
            });
        }),
        Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
        Modernizr.addAsyncTest(function () {
            function e() {
                var e = new Image();
                (e.onerror = function () {
                    addTest("datauri", !0), (Modernizr.datauri = new Boolean(!0)), (Modernizr.datauri.over32kb = !1);
                }),
                    (e.onload = function () {
                        addTest("datauri", !0), (Modernizr.datauri = new Boolean(!0)), (Modernizr.datauri.over32kb = 1 == e.width && 1 == e.height);
                    });
                for (var t = "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; t.length < 33e3; ) t = "\r\n" + t;
                e.src = "data:image/gif;base64," + t;
            }
            -1 !== navigator.userAgent.indexOf("MSIE 7.") &&
                setTimeout(function () {
                    addTest("datauri", !1);
                }, 10);
            var t = new Image();
            (t.onerror = function () {
                addTest("datauri", !1);
            }),
                (t.onload = function () {
                    1 == t.width && 1 == t.height ? e() : addTest("datauri", !1);
                }),
                (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");
        }),
        Modernizr.addAsyncTest(function () {
            function e() {
                addTest("blobworkers", !1), t();
            }
            function t() {
                a && n.revokeObjectURL(a), d && d.terminate(), s && clearTimeout(s);
            }
            try {
                var r = window.BlobBuilder,
                    n = window.URL;
                Modernizr._config.usePrefix && ((r = r || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.OBlobBuilder), (n = n || window.MozURL || window.webkitURL || window.MSURL || window.OURL));
                var i,
                    o,
                    d,
                    a,
                    s,
                    l = "Modernizr",
                    c = "this.onmessage=function(e){postMessage(e.data)}";
                try {
                    i = new Blob([c], { type: "text/javascript" });
                } catch (u) {}
                i || ((o = new r()), o.append(c), (i = o.getBlob())),
                    (a = n.createObjectURL(i)),
                    (d = new Worker(a)),
                    (d.onmessage = function (e) {
                        addTest("blobworkers", l === e.data), t();
                    }),
                    (d.onerror = e),
                    (s = setTimeout(e, 200)),
                    d.postMessage(l);
            } catch (u) {
                e();
            }
        }),
        Modernizr.addAsyncTest(function () {
            try {
                var e = "Modernizr",
                    t = new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");
                (t.onmessage = function (r) {
                    t.terminate(), addTest("dataworkers", e === r.data), (t = null);
                }),
                    (t.onerror = function () {
                        addTest("dataworkers", !1), (t = null);
                    }),
                    setTimeout(function () {
                        addTest("dataworkers", !1);
                    }, 200),
                    t.postMessage(e);
            } catch (r) {
                setTimeout(function () {
                    addTest("dataworkers", !1);
                }, 0);
            }
        }),
        Modernizr.addTest("audio", function () {
            var e = createElement("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType) &&
                    ((t = new Boolean(t)),
                    (t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                    (t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
                    (t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
                    (t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                    (t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")));
            } catch (r) {}
            return t;
        }),
        Modernizr.addTest("canvas", function () {
            var e = createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"));
        }),
        Modernizr.addTest("canvastext", function () {
            return Modernizr.canvas === !1 ? !1 : "function" == typeof createElement("canvas").getContext("2d").fillText;
        }),
        Modernizr.addTest("contenteditable", function () {
            if ("contentEditable" in docElement) {
                var e = createElement("div");
                return (e.contentEditable = !0), "true" === e.contentEditable;
            }
        }),
        Modernizr.addTest("emoji", function () {
            if (!Modernizr.canvastext) return !1;
            var e = window.devicePixelRatio || 1,
                t = 12 * e,
                r = createElement("canvas"),
                n = r.getContext("2d");
            return (n.fillStyle = "#f00"), (n.textBaseline = "top"), (n.font = "32px Arial"), n.fillText("ðŸ¨", 0, 0), 0 !== n.getImageData(t, t, 1, 1).data[0];
        }),
        addTest("htmlimports", "import" in createElement("link")),
        Modernizr.addTest("olreversed", "reversed" in createElement("ol")),
        Modernizr.addTest("userdata", !!createElement("div").addBehavior),
        Modernizr.addTest("video", function () {
            var e = createElement("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) &&
                    ((t = new Boolean(t)),
                    (t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")),
                    (t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")),
                    (t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")),
                    (t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")),
                    (t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")));
            } catch (r) {}
            return t;
        }),
        Modernizr.addTest("vml", function () {
            var e,
                t = createElement("div"),
                r = !1;
            return isSVG || ((t.innerHTML = '<v:shape id="vml_flag1" adj="1" />'), (e = t.firstChild), "style" in e && (e.style.behavior = "url(#default#VML)"), (r = e ? "object" == typeof e.adj : !0)), r;
        }),
        Modernizr.addTest("webanimations", "animate" in createElement("div")),
        Modernizr.addTest("webgl", function () {
            var e = createElement("canvas"),
                t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
            return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in window;
        }),
        Modernizr.addTest("adownload", !window.externalHost && "download" in createElement("a")),
        Modernizr.addTest("audioloop", "loop" in createElement("audio")),
        Modernizr.addTest("canvasblending", function () {
            if (Modernizr.canvas === !1) return !1;
            var e = createElement("canvas").getContext("2d");
            try {
                e.globalCompositeOperation = "screen";
            } catch (t) {}
            return "screen" === e.globalCompositeOperation;
        });
    var canvas = createElement("canvas");
    Modernizr.addTest("todataurljpeg", function () {
        return !!Modernizr.canvas && 0 === canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg");
    }),
        Modernizr.addTest("todataurlpng", function () {
            return !!Modernizr.canvas && 0 === canvas.toDataURL("image/png").indexOf("data:image/png");
        }),
        Modernizr.addTest("todataurlwebp", function () {
            var e = !1;
            try {
                e = !!Modernizr.canvas && 0 === canvas.toDataURL("image/webp").indexOf("data:image/webp");
            } catch (t) {}
            return e;
        }),
        Modernizr.addTest("canvaswinding", function () {
            if (Modernizr.canvas === !1) return !1;
            var e = createElement("canvas").getContext("2d");
            return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), e.isPointInPath(5, 5, "evenodd") === !1;
        }),
        Modernizr.addTest("bgpositionshorthand", function () {
            var e = createElement("a"),
                t = e.style,
                r = "right 10px bottom 10px";
            return (t.cssText = "background-position: " + r + ";"), t.backgroundPosition === r;
        }),
        Modernizr.addTest("csscalc", function () {
            var e = "width:",
                t = "calc(10px);",
                r = createElement("a");
            return (r.style.cssText = e + prefixes.join(t + e)), !!r.style.length;
        }),
        Modernizr.addTest("cubicbezierrange", function () {
            var e = createElement("a");
            return (e.style.cssText = prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); ")), !!e.style.length;
        }),
        Modernizr.addTest("cssgradients", function () {
            for (var e, t = "background-image:", r = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "", i = 0, o = prefixes.length - 1; o > i; i++)
                (e = 0 === i ? "to " : ""), (n += t + prefixes[i] + "linear-gradient(" + e + "left top, #9f9, white);");
            Modernizr._config.usePrefixes && (n += t + "-webkit-" + r);
            var d = createElement("a"),
                a = d.style;
            return (a.cssText = n), ("" + a.backgroundImage).indexOf("gradient") > -1;
        }),
        Modernizr.addTest("multiplebgs", function () {
            var e = createElement("a").style;
            return (e.cssText = "background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(e.background);
        }),
        Modernizr.addTest("opacity", function () {
            var e = createElement("a").style;
            return (e.cssText = prefixes.join("opacity:.55;")), /^0.55$/.test(e.opacity);
        }),
        Modernizr.addTest("csspointerevents", function () {
            var e = createElement("a").style;
            return (e.cssText = "pointer-events:auto"), "auto" === e.pointerEvents;
        }),
        Modernizr.addTest("csspositionsticky", function () {
            var e = "position:",
                t = "sticky",
                r = createElement("a"),
                n = r.style;
            return (n.cssText = e + prefixes.join(t + ";" + e).slice(0, -e.length)), -1 !== n.position.indexOf(t);
        }),
        Modernizr.addTest("regions", function () {
            if (isSVG) return !1;
            var e = Modernizr.prefixed("flowFrom"),
                t = Modernizr.prefixed("flowInto"),
                r = !1;
            if (!e || !t) return r;
            var n = createElement("iframe"),
                i = createElement("div"),
                o = createElement("div"),
                d = createElement("div"),
                a = "modernizr_flow_for_regions_check";
            (o.innerText = "M"), (i.style.cssText = "top: 150px; left: 150px; padding: 0px;"), (d.style.cssText = "width: 50px; height: 50px; padding: 42px;"), (d.style[e] = a), i.appendChild(o), i.appendChild(d), docElement.appendChild(i);
            var s,
                l,
                c = o.getBoundingClientRect();
            return (
                (o.style[t] = a),
                (s = o.getBoundingClientRect()),
                (l = parseInt(s.left - c.left, 10)),
                docElement.removeChild(i),
                42 == l ? (r = !0) : (docElement.appendChild(n), (c = n.getBoundingClientRect()), (n.style[t] = a), (s = n.getBoundingClientRect()), c.height > 0 && c.height !== s.height && 0 === s.height && (r = !0)),
                (o = d = i = n = undefined),
                r
            );
        }),
        Modernizr.addTest("cssremunit", function () {
            var e = createElement("a").style;
            try {
                e.fontSize = "3rem";
            } catch (t) {}
            return /rem/.test(e.fontSize);
        }),
        Modernizr.addTest("rgba", function () {
            var e = createElement("a").style;
            return (e.cssText = "background-color:rgba(150,255,150,.5)"), ("" + e.backgroundColor).indexOf("rgba") > -1;
        }),
        Modernizr.addTest("preserve3d", function () {
            var e = createElement("a"),
                t = createElement("a");
            (e.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);"),
                (t.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);"),
                e.appendChild(t),
                docElement.appendChild(e);
            var r = t.getBoundingClientRect();
            return docElement.removeChild(e), r.width && r.width < 4;
        }),
        Modernizr.addTest(
            "createelementattrs",
            function () {
                try {
                    return "test" == createElement('<input name="test" />').getAttribute("name");
                } catch (e) {
                    return !1;
                }
            },
            { aliases: ["createelement-attrs"] }
        ),
        Modernizr.addTest("dataset", function () {
            var e = createElement("div");
            return e.setAttribute("data-a-b", "c"), !(!e.dataset || "c" !== e.dataset.aB);
        }),
        Modernizr.addTest("hidden", "hidden" in createElement("a")),
        Modernizr.addTest("bdi", function () {
            var e = createElement("div"),
                t = createElement("bdi");
            (t.innerHTML = "&#1573;"), e.appendChild(t), docElement.appendChild(e);
            var r = "rtl" === (window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).direction;
            return docElement.removeChild(e), r;
        }),
        Modernizr.addTest("outputelem", "value" in createElement("output")),
        Modernizr.addTest("progressbar", createElement("progress").max !== undefined),
        Modernizr.addTest("meter", createElement("meter").max !== undefined),
        Modernizr.addTest("ruby", function () {
            function e(e, t) {
                var r;
                return window.getComputedStyle ? (r = document.defaultView.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle && (r = e.currentStyle[t]), r;
            }
            function t() {
                docElement.removeChild(r), (r = null), (n = null), (i = null);
            }
            var r = createElement("ruby"),
                n = createElement("rt"),
                i = createElement("rp"),
                o = "display",
                d = "fontSize";
            return r.appendChild(i), r.appendChild(n), docElement.appendChild(r), "none" == e(i, o) || ("ruby" == e(r, o) && "ruby-text" == e(n, o)) || ("6pt" == e(i, d) && "6pt" == e(n, d)) ? (t(), !0) : (t(), !1);
        }),
        Modernizr.addTest("template", "content" in createElement("template")),
        Modernizr.addTest("time", "valueAsDate" in createElement("time")),
        Modernizr.addTest("texttrackapi", "function" == typeof createElement("video").addTextTrack),
        Modernizr.addTest("track", "kind" in createElement("track")),
        Modernizr.addTest("unknownelements", function () {
            var e = createElement("a");
            return (e.innerHTML = "<xyz></xyz>"), 1 === e.childNodes.length;
        }),
        Modernizr.addTest("capture", "capture" in createElement("input")),
        Modernizr.addTest("fileinput", function () {
            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
            var e = createElement("input");
            return (e.type = "file"), !e.disabled;
        }),
        Modernizr.addTest("formattribute", function () {
            var e,
                t = createElement("form"),
                r = createElement("input"),
                n = createElement("div"),
                i = "formtest" + new Date().getTime(),
                o = !1;
            t.id = i;
            try {
                r.setAttribute("form", i);
            } catch (d) {
                document.createAttribute && ((e = document.createAttribute("form")), (e.nodeValue = i), r.setAttributeNode(e));
            }
            return n.appendChild(t), n.appendChild(r), docElement.appendChild(n), (o = t.elements && 1 === t.elements.length && r.form == t), n.parentNode.removeChild(n), o;
        }),
        Modernizr.addTest("placeholder", "placeholder" in createElement("input") && "placeholder" in createElement("textarea")),
        Modernizr.addTest("sandbox", "sandbox" in createElement("iframe")),
        Modernizr.addTest("seamless", "seamless" in createElement("iframe")),
        Modernizr.addTest("srcdoc", "srcdoc" in createElement("iframe")),
        Modernizr.addAsyncTest(function () {
            if (!Modernizr.canvas) return !1;
            var e = new Image(),
                t = createElement("canvas"),
                r = t.getContext("2d");
            (e.onload = function () {
                addTest("apng", function () {
                    return "undefined" == typeof t.getContext ? !1 : (r.drawImage(e, 0, 0), 0 === r.getImageData(0, 0, 1, 1).data[3]);
                });
            }),
                (e.src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==");
        }),
        Modernizr.addTest("imgcrossorigin", "crossOrigin" in createElement("img")),
        Modernizr.addAsyncTest(function () {
            var e,
                t,
                r,
                n = createElement("img"),
                i = "sizes" in n;
            !i && "srcset" in n
                ? ((t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=="),
                  (e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                  (r = function () {
                      addTest("sizes", 2 == n.width);
                  }),
                  (n.onload = r),
                  (n.onerror = r),
                  n.setAttribute("sizes", "9px"),
                  (n.srcset = e + " 1w," + t + " 8w"),
                  (n.src = e))
                : addTest("sizes", i);
        }),
        Modernizr.addTest("srcset", "srcset" in createElement("img")),
        Modernizr.addTest("inputformaction", !!("formAction" in createElement("input")), { aliases: ["input-formaction"] }),
        Modernizr.addTest("inputformenctype", !!("formEnctype" in createElement("input")), { aliases: ["input-formenctype"] }),
        Modernizr.addTest("inputformmethod", !!("formMethod" in createElement("input"))),
        Modernizr.addTest("inputformtarget", !!("formtarget" in createElement("input")), { aliases: ["input-formtarget"] }),
        Modernizr.addTest("scriptasync", "async" in createElement("script")),
        Modernizr.addTest("scriptdefer", "defer" in createElement("script")),
        Modernizr.addTest("stylescoped", "scoped" in createElement("style")),
        Modernizr.addTest("inlinesvg", function () {
            var e = createElement("div");
            return (e.innerHTML = "<svg/>"), "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
        }),
        Modernizr.addTest("textareamaxlength", !!("maxLength" in createElement("textarea"))),
        Modernizr.addTest("videoloop", "loop" in createElement("video")),
        Modernizr.addTest("videopreload", "preload" in createElement("video")),
        Modernizr.addAsyncTest(function () {
            if (((Modernizr.webglextensions = new Boolean(!1)), Modernizr.webgl)) {
                var e, t, r;
                try {
                    (e = createElement("canvas")), (t = e.getContext("webgl") || e.getContext("experimental-webgl")), (r = t.getSupportedExtensions());
                } catch (n) {
                    return;
                }
                t !== undefined && (Modernizr.webglextensions = new Boolean(!0));
                for (var i = -1, o = r.length; ++i < o; ) Modernizr.webglextensions[r[i]] = !0;
                e = undefined;
            }
        });
    var hasEvent = (function () {
        function e(e, r) {
            var n;
            return e
                ? ((r && "string" != typeof r) || (r = createElement(r || "div")),
                  (e = "on" + e),
                  (n = e in r),
                  !n && t && (r.setAttribute || (r = createElement("div")), r.setAttribute(e, ""), (n = "function" == typeof r[e]), r[e] !== undefined && (r[e] = undefined), r.removeAttribute(e)),
                  n)
                : !1;
        }
        var t = !("onblur" in document.documentElement);
        return e;
    })();
    (ModernizrProto.hasEvent = hasEvent),
        Modernizr.addTest("ambientlight", hasEvent("devicelight", window)),
        Modernizr.addTest("hashchange", function () {
            return hasEvent("hashchange", window) === !1 ? !1 : document.documentMode === undefined || document.documentMode > 7;
        }),
        Modernizr.addTest("inputsearchevent", hasEvent("search"));
    var inputElem = createElement("input"),
        inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        attrs = {};
    (Modernizr.input = (function (e) {
        for (var t = 0, r = e.length; r > t; t++) attrs[e[t]] = !!(e[t] in inputElem);
        return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs;
    })(inputattrs)),
        Modernizr.addTest("datalistelem", Modernizr.input.list);
    var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        inputs = {};
    Modernizr.inputtypes = (function (e) {
        for (var t, r, n, i = e.length, o = "1)", d = 0; i > d; d++)
            inputElem.setAttribute("type", (t = e[d])),
                (n = "text" !== inputElem.type && "style" in inputElem),
                n &&
                    ((inputElem.value = o),
                    (inputElem.style.cssText = "position:absolute;visibility:hidden;"),
                    /^range$/.test(t) && inputElem.style.WebkitAppearance !== undefined
                        ? (docElement.appendChild(inputElem),
                          (r = document.defaultView),
                          (n = r.getComputedStyle && "textfield" !== r.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight),
                          docElement.removeChild(inputElem))
                        : /^(search|tel)$/.test(t) || (n = /^(url|email)$/.test(t) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != o)),
                (inputs[e[d]] = !!n);
        return inputs;
    })(inputtypes);
    var modElem = { elem: createElement("modernizr") };
    Modernizr._q.push(function () {
        delete modElem.elem;
    }),
        Modernizr.addTest("csschunit", function () {
            var e,
                t = modElem.elem.style;
            try {
                (t.fontSize = "3ch"), (e = -1 !== t.fontSize.indexOf("ch"));
            } catch (r) {
                e = !1;
            }
            return e;
        }),
        Modernizr.addTest("cssexunit", function () {
            var e,
                t = modElem.elem.style;
            try {
                (t.fontSize = "3ex"), (e = -1 !== t.fontSize.indexOf("ex"));
            } catch (r) {
                e = !1;
            }
            return e;
        }),
        Modernizr.addTest("hsla", function () {
            var e = createElement("a").style;
            return (e.cssText = "background-color:hsla(120,40%,100%,.5)"), contains(e.backgroundColor, "rgba") || contains(e.backgroundColor, "hsla");
        });
    var testXhrType = function (e) {
        if ("undefined" == typeof XMLHttpRequest) return !1;
        var t = new XMLHttpRequest();
        t.open("get", "/", !0);
        try {
            t.responseType = e;
        } catch (r) {
            return !1;
        }
        return "response" in t && t.responseType == e;
    };
    Modernizr.addTest("xhrresponsetypearraybuffer", testXhrType("arraybuffer")),
        Modernizr.addTest("xhrresponsetypeblob", testXhrType("blob")),
        Modernizr.addTest("xhrresponsetypedocument", testXhrType("document")),
        Modernizr.addTest("xhrresponsetypejson", testXhrType("json")),
        Modernizr.addTest("xhrresponsetypetext", testXhrType("text"));
    var toStringFn = {}.toString;
    Modernizr.addTest("svgclippaths", function () {
        return !!document.createElementNS && /SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
    }),
        Modernizr.addTest("svgforeignobject", function () {
            return !!document.createElementNS && /SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")));
        }),
        Modernizr.addTest("smil", function () {
            return !!document.createElementNS && /SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "animate")));
        });
    var testStyles = (ModernizrProto.testStyles = injectElementWithStyles);
    Modernizr.addTest("hiddenscroll", function () {
        return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}", function (e) {
            return e.offsetWidth === e.clientWidth;
        });
    }),
        Modernizr.addTest("mathml", function () {
            var e;
            return (
                testStyles("#modernizr{position:absolute;display:inline-block}", function (t) {
                    (t.innerHTML += "<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>"), (e = t.offsetHeight > t.offsetWidth);
                }),
                e
            );
        }),
        Modernizr.addTest("touchevents", function () {
            var e;
            if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) e = !0;
            else {
                var t = ["@media (", prefixes.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                testStyles(t, function (t) {
                    e = 9 === t.offsetTop;
                });
            }
            return e;
        }),
        Modernizr.addTest("unicoderange", function () {
            return Modernizr.testStyles(
                '@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',
                function (e) {
                    for (var t = [".", ".", "m", "m"], r = 0; r < t.length; r++) {
                        var n = createElement("span");
                        (n.innerHTML = t[r]), (n.className = r % 2 ? "mono" : ""), e.appendChild(n), (t[r] = n.clientWidth);
                    }
                    return t[0] !== t[1] && t[2] === t[3];
                }
            );
        }),
        Modernizr.addTest("unicode", function () {
            var e,
                t = createElement("span"),
                r = createElement("span");
            return (
                testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}", function (n) {
                    (t.innerHTML = isSVG ? "å¦‡" : "&#5987;"), (r.innerHTML = isSVG ? "â˜†" : "&#9734;"), n.appendChild(t), n.appendChild(r), (e = "offsetWidth" in t && t.offsetWidth !== r.offsetWidth);
                }),
                e
            );
        }),
        Modernizr.addTest("checked", function () {
            return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function (e) {
                var t = createElement("input");
                return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft;
            });
        }),
        testStyles(
            "#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",
            function (e) {
                var t,
                    r = e.childNodes;
                (t = r[0].offsetLeft < r[1].offsetLeft), Modernizr.addTest("displaytable", t, { aliases: ["display-table"] });
            },
            2
        );
    var blacklist = (function () {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            r = e.match(/w(eb)?osbrowser/gi),
            n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            i = 533 > t && e.match(/android/gi);
        return r || i || n;
    })();
    blacklist
        ? Modernizr.addTest("fontface", !1)
        : testStyles('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
              var r = document.getElementById("smodernizr"),
                  n = r.sheet || r.styleSheet,
                  i = n ? (n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "") : "",
                  o = /src/i.test(i) && 0 === i.indexOf(t.split(" ")[0]);
              Modernizr.addTest("fontface", o);
          }),
        testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (e) {
            Modernizr.addTest("generatedcontent", e.offsetHeight >= 7);
        }),
        Modernizr.addTest("hairline", function () {
            return testStyles("#modernizr {border:.5px solid transparent}", function (e) {
                return 1 === e.offsetHeight;
            });
        }),
        Modernizr.addTest("cssinvalid", function () {
            return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function (e) {
                var t = createElement("input");
                return (t.required = !0), e.appendChild(t), t.clientWidth > 10;
            });
        }),
        testStyles(
            "#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",
            function (e) {
                Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth);
            },
            2
        ),
        testStyles(
            "#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",
            function (e) {
                for (var t = e.getElementsByTagName("div"), r = !0, n = 0; 5 > n; n++) r = r && t[n].offsetWidth === (n % 2) + 1;
                Modernizr.addTest("nthchild", r);
            },
            5
        ),
        testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}", function (e) {
            Modernizr.addTest("cssscrollbar", 40 == e.scrollWidth);
        }),
        Modernizr.addTest("siblinggeneral", function () {
            return testStyles(
                "#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",
                function (e) {
                    return 200 == e.lastChild.offsetWidth;
                },
                2
            );
        }),
        testStyles(
            "#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",
            function (e) {
                var t = e.firstChild;
                (t.innerHTML = "This is a text written in Arial"), Modernizr.addTest("subpixelfont", window.getComputedStyle ? "44px" !== window.getComputedStyle(t, null).getPropertyValue("width") : !1);
            },
            1,
            ["subpixel"]
        ),
        Modernizr.addTest("cssvalid", function () {
            return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function (e) {
                var t = createElement("input");
                return e.appendChild(t), t.clientWidth > 10;
            });
        }),
        testStyles("#modernizr { height: 50vh; }", function (e) {
            var t = parseInt(window.innerHeight / 2, 10),
                r = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
            Modernizr.addTest("cssvhunit", r == t);
        }),
        testStyles(
            "#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",
            function (e) {
                var t = e.childNodes[2],
                    r = e.childNodes[1],
                    n = e.childNodes[0],
                    i = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
                    o = n.clientWidth / 100,
                    d = n.clientHeight / 100,
                    a = parseInt(50 * Math.max(o, d), 10),
                    s = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
                Modernizr.addTest("cssvmaxunit", roundedEquals(a, s) || roundedEquals(a, s - i));
            },
            3
        ),
        testStyles(
            "#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",
            function (e) {
                var t = e.childNodes[2],
                    r = e.childNodes[1],
                    n = e.childNodes[0],
                    i = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
                    o = n.clientWidth / 100,
                    d = n.clientHeight / 100,
                    a = parseInt(50 * Math.min(o, d), 10),
                    s = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
                Modernizr.addTest("cssvminunit", roundedEquals(a, s) || roundedEquals(a, s - i));
            },
            3
        ),
        testStyles("#modernizr { width: 50vw; }", function (e) {
            var t = parseInt(window.innerWidth / 2, 10),
                r = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
            Modernizr.addTest("cssvwunit", r == t);
        }),
        Modernizr.addTest("details", function () {
            var e,
                t = createElement("details");
            return "open" in t
                ? (testStyles("#modernizr details{display:block}", function (r) {
                      r.appendChild(t), (t.innerHTML = "<summary>a</summary>b"), (e = t.offsetHeight), (t.open = !0), (e = e != t.offsetHeight);
                  }),
                  e)
                : !1;
        }),
        Modernizr.addTest("oninput", function () {
            var e,
                t = createElement("input");
            if ((t.setAttribute("oninput", "return"), hasEvent("oninput", docElement) || "function" == typeof t.oninput)) return !0;
            try {
                var r = document.createEvent("KeyboardEvent");
                e = !1;
                var n = function (t) {
                    (e = !0), t.preventDefault(), t.stopPropagation();
                };
                r.initKeyEvent("keypress", !0, !0, window, !1, !1, !1, !1, 0, "e".charCodeAt(0)),
                    docElement.appendChild(t),
                    t.addEventListener("input", n, !1),
                    t.focus(),
                    t.dispatchEvent(r),
                    t.removeEventListener("input", n, !1),
                    docElement.removeChild(t);
            } catch (i) {
                e = !1;
            }
            return e;
        }),
        Modernizr.addTest("localizednumber", function () {
            if (!Modernizr.inputtypes.number) return !1;
            if (!Modernizr.formvalidation) return !1;
            var e,
                t = createElement("div"),
                r = getBody(),
                n = (function () {
                    return docElement.insertBefore(r, docElement.firstElementChild || docElement.firstChild);
                })();
            t.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
            var i = t.childNodes[0];
            n.appendChild(t), i.focus();
            try {
                document.execCommand("InsertText", !1, "1,1");
            } catch (o) {}
            return (e = "number" === i.type && 1.1 === i.valueAsNumber && i.checkValidity()), n.removeChild(t), r.fake && n.parentNode.removeChild(n), e;
        });
    var mq = (function () {
        var e = window.matchMedia || window.msMatchMedia;
        return e
            ? function (t) {
                  var r = e(t);
                  return (r && r.matches) || !1;
              }
            : function (e) {
                  var t = !1;
                  return (
                      injectElementWithStyles("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
                          t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle).position;
                      }),
                      t
                  );
              };
    })();
    (ModernizrProto.mq = mq), Modernizr.addTest("mediaqueries", mq("only all"));
    var omPrefixes = "Moz O ms Webkit",
        domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
    (ModernizrProto._domPrefixes = domPrefixes),
        Modernizr.addTest("pointerevents", function () {
            var e = !1,
                t = domPrefixes.length;
            for (e = Modernizr.hasEvent("pointerdown"); t-- && !e; ) hasEvent(domPrefixes[t] + "pointerdown") && (e = !0);
            return e;
        }),
        Modernizr.addTest("fileinputdirectory", function () {
            var e = createElement("input"),
                t = "directory";
            if (((e.type = "file"), t in e)) return !0;
            for (var r = 0, n = domPrefixes.length; n > r; r++) if (domPrefixes[r] + t in e) return !0;
            return !1;
        });
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var atRule = function (e) {
        var t,
            r = prefixes.length,
            n = window.CSSRule;
        if ("undefined" == typeof n) return undefined;
        if (!e) return !1;
        if (((e = e.replace(/^@/, "")), (t = e.replace(/-/g, "_").toUpperCase() + "_RULE"), t in n)) return "@" + e;
        for (var i = 0; r > i; i++) {
            var o = prefixes[i],
                d = o.toUpperCase() + "_" + t;
            if (d in n) return "@-" + o.toLowerCase() + "-" + e;
        }
        return !1;
    };
    ModernizrProto.atRule = atRule;
    var mStyle = { style: modElem.elem.style };
    Modernizr._q.unshift(function () {
        delete mStyle.style;
    });
    var testProp = (ModernizrProto.testProp = function (e, t, r) {
        return testProps([e], undefined, t, r);
    });
    Modernizr.addTest("textshadow", testProp("textShadow", "1px 1px")), (ModernizrProto.testAllProps = testPropsAll);
    var prefixed = (ModernizrProto.prefixed = function (e, t, r) {
        return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)), t ? testPropsAll(e, t, r) : testPropsAll(e, "pfx"));
    });
    Modernizr.addTest("batteryapi", !!prefixed("battery", navigator), { aliases: ["battery-api"] });
    var crypto = prefixed("crypto", window);
    Modernizr.addTest("crypto", !!prefixed("subtle", crypto)),
        Modernizr.addTest("dart", !!prefixed("startDart", navigator)),
        Modernizr.addTest("forcetouch", function () {
            return hasEvent(prefixed("mouseforcewillbegin", window, !1), window) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1;
        }),
        Modernizr.addTest("fullscreen", !(!prefixed("exitFullscreen", document, !1) && !prefixed("cancelFullScreen", document, !1))),
        Modernizr.addTest("gamepads", !!prefixed("getGamepads", navigator));
    var indexeddb;
    try {
        indexeddb = prefixed("indexedDB", window);
    } catch (e) {}
    Modernizr.addTest("indexeddb", !!indexeddb),
        indexeddb && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in indexeddb),
        Modernizr.addAsyncTest(function () {
            var e,
                t,
                r,
                n = "detect-blob-support",
                i = !1;
            try {
                e = prefixed("indexedDB", window);
            } catch (o) {}
            if (!Modernizr.indexeddb || !Modernizr.indexeddb.deletedatabase) return !1;
            try {
                e.deleteDatabase(n).onsuccess = function () {
                    (t = e.open(n, 1)),
                        (t.onupgradeneeded = function () {
                            t.result.createObjectStore("store");
                        }),
                        (t.onsuccess = function () {
                            r = t.result;
                            try {
                                r.transaction("store", "readwrite").objectStore("store").put(new Blob(), "key"), (i = !0);
                            } catch (o) {
                                i = !1;
                            } finally {
                                addTest("indexeddbblob", i), r.close(), e.deleteDatabase(n);
                            }
                        });
                };
            } catch (o) {
                addTest("indexeddbblob", !1);
            }
        }),
        Modernizr.addTest("intl", !!prefixed("Intl", window)),
        Modernizr.addTest("pagevisibility", !!prefixed("hidden", document, !1)),
        Modernizr.addTest("performance", !!prefixed("performance", window)),
        Modernizr.addTest("pointerlock", !!prefixed("exitPointerLock", document)),
        Modernizr.addTest("quotamanagement", function () {
            var e = prefixed("temporaryStorage", navigator),
                t = prefixed("persistentStorage", navigator);
            return !(!e || !t);
        }),
        Modernizr.addTest("requestanimationframe", !!prefixed("requestAnimationFrame", window), { aliases: ["raf"] }),
        Modernizr.addTest("vibrate", !!prefixed("vibrate", navigator)),
        Modernizr.addTest("webintents", !!prefixed("startActivity", navigator)),
        Modernizr.addTest("lowbattery", function () {
            var e = 0.2,
                t = prefixed("battery", navigator);
            return !!(t && !t.charging && t.level <= e);
        });
    var crypto = prefixed("crypto", window),
        supportsGetRandomValues;
    if (crypto && "getRandomValues" in crypto && "Uint32Array" in window) {
        var array = new Uint32Array(10),
            values = crypto.getRandomValues(array);
        supportsGetRandomValues = values && is(values[0], "number");
    }
    Modernizr.addTest("getrandomvalues", !!supportsGetRandomValues),
        Modernizr.addTest("backgroundblendmode", prefixed("backgroundBlendMode", "text")),
        Modernizr.addTest("objectfit", !!prefixed("objectFit"), { aliases: ["object-fit"] }),
        Modernizr.addTest("wrapflow", function () {
            var e = prefixed("wrapFlow");
            if (!e || isSVG) return !1;
            var t = e
                    .replace(/([A-Z])/g, function (e, t) {
                        return "-" + t.toLowerCase();
                    })
                    .replace(/^ms-/, "-ms-"),
                r = createElement("div"),
                n = createElement("div"),
                i = createElement("span");
            (n.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + t + ":end;"), (i.innerText = "X"), r.appendChild(n), r.appendChild(i), docElement.appendChild(r);
            var o = i.offsetLeft;
            return docElement.removeChild(r), (n = i = r = undefined), 150 == o;
        }),
        Modernizr.addTest("filesystem", !!prefixed("requestFileSystem", window)),
        Modernizr.addTest("requestautocomplete", !!prefixed("requestAutocomplete", createElement("form"))),
        Modernizr.addTest("speechrecognition", !!prefixed("SpeechRecognition", window));
    var url = prefixed("URL", window, !1);
    (url = url && window[url]),
        Modernizr.addTest("bloburls", url && "revokeObjectURL" in url && "createObjectURL" in url),
        Modernizr.addAsyncTest(function () {
            function e() {
                addTest("transferables", !1), t();
            }
            function t() {
                a && URL.revokeObjectURL(a), s && s.terminate(), i && clearTimeout(i);
            }
            var r = !!(Modernizr.blobconstructor && Modernizr.bloburls && Modernizr.webworkers && Modernizr.typedarrays);
            if (!r) return addTest("transferables", !1);
            try {
                var n,
                    i,
                    o = 'var hello = "world"',
                    d = new Blob([o], { type: "text/javascript" }),
                    a = URL.createObjectURL(d),
                    s = new Worker(a);
                (s.onerror = e), (i = setTimeout(e, 200)), (n = new ArrayBuffer(1)), s.postMessage(n, [n]), addTest("transferables", 0 === n.byteLength), t();
            } catch (l) {
                e();
            }
        }),
        Modernizr.addTest("getusermedia", !!prefixed("getUserMedia", navigator)),
        Modernizr.addTest("peerconnection", !!prefixed("RTCPeerConnection", window)),
        Modernizr.addTest("datachannel", function () {
            if (!Modernizr.peerconnection) return !1;
            for (var e = 0, t = domPrefixes.length; t > e; e++) {
                var r = window[domPrefixes[e] + "RTCPeerConnection"];
                if (r) {
                    var n = new r({ iceServers: [{ url: "stun:0" }] });
                    return "createDataChannel" in n;
                }
            }
            return !1;
        }),
        Modernizr.addTest("matchmedia", !!prefixed("matchMedia", window)),
        (ModernizrProto.testAllProps = testAllProps),
        Modernizr.addTest("ligatures", testAllProps("fontFeatureSettings", '"liga" 1')),
        Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0)),
        Modernizr.addTest("csspseudoanimations", function () {
            var e = !1;
            if (!Modernizr.cssanimations || !window.getComputedStyle) return e;
            var t = [
                "@",
                Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""),
                '#modernizr:before { content:" "; font-size:5px;',
                Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),
                "}",
            ].join("");
            return (
                Modernizr.testStyles(t, function (t) {
                    e = "10px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size");
                }),
                e
            );
        }),
        Modernizr.addTest("appearance", testAllProps("appearance")),
        Modernizr.addTest("backdropfilter", testAllProps("backdropFilter")),
        Modernizr.addTest("backgroundcliptext", function () {
            return testAllProps("backgroundClip", "text");
        }),
        Modernizr.addTest("bgpositionxy", function () {
            return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0);
        }),
        Modernizr.addTest("bgrepeatround", testAllProps("backgroundRepeat", "round")),
        Modernizr.addTest("bgrepeatspace", testAllProps("backgroundRepeat", "space")),
        Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)),
        Modernizr.addTest("bgsizecover", testAllProps("backgroundSize", "cover")),
        Modernizr.addTest("borderimage", testAllProps("borderImage", "url() 1", !0)),
        Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)),
        Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)),
        Modernizr.addTest("boxsizing", testAllProps("boxSizing", "border-box", !0) && (document.documentMode === undefined || document.documentMode > 7)),
        (function () {
            Modernizr.addTest("csscolumns", function () {
                var e = !1,
                    t = testAllProps("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e));
                } catch (r) {}
                return e;
            });
            for (var e, t, r = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], n = 0; n < r.length; n++)
                (e = r[n].toLowerCase()), (t = testAllProps("column" + r[n])), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || testAllProps(r[n])), Modernizr.addTest("csscolumns." + e, t);
        })(),
        Modernizr.addTest("displayrunin", testAllProps("display", "run-in"), { aliases: ["display-runin"] }),
        Modernizr.addTest("ellipsis", testAllProps("textOverflow", "ellipsis")),
        Modernizr.addTest("cssfilters", function () {
            if (Modernizr.supports) return testAllProps("filter", "blur(2px)");
            var e = createElement("a");
            return (e.style.cssText = prefixes.join("filter:blur(2px); ")), !!e.style.length && (document.documentMode === undefined || document.documentMode > 9);
        }),
        Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)),
        Modernizr.addTest("flexboxlegacy", testAllProps("boxDirection", "reverse", !0)),
        Modernizr.addTest("flexboxtweener", testAllProps("flexAlign", "end", !0)),
        Modernizr.addTest("flexwrap", testAllProps("flexWrap", "wrap", !0)),
        Modernizr.addTest("cssmask", testAllProps("maskRepeat", "repeat-x", !0)),
        Modernizr.addTest("overflowscrolling", testAllProps("overflowScrolling", "touch", !0)),
        Modernizr.addTest("cssreflections", testAllProps("boxReflect", "above", !0)),
        Modernizr.addTest("cssresize", testAllProps("resize", "both", !0)),
        Modernizr.addTest("scrollsnappoints", testAllProps("scrollSnapType")),
        Modernizr.addTest("shapes", testAllProps("shapeOutside", "content-box", !0)),
        Modernizr.addTest("textalignlast", testAllProps("textAlignLast")),
        Modernizr.addTest("csstransforms", function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0);
        }),
        Modernizr.addTest("csstransforms3d", function () {
            var e = !!testAllProps("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in docElement.style)) {
                var r,
                    n = "#modernizr{width:0;height:0}";
                Modernizr.supports ? (r = "@supports (perspective: 1px)") : ((r = "@media (transform-3d)"), t && (r += ",(-webkit-transform-3d)")),
                    (r += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
                    testStyles(n + r, function (t) {
                        e = 7 === t.offsetWidth && 18 === t.offsetHeight;
                    });
            }
            return e;
        }),
        Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)),
        Modernizr.addTest("csspseudotransitions", function () {
            var e = !1;
            if (!Modernizr.csstransitions || !window.getComputedStyle) return e;
            var t = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";
            return (
                Modernizr.testStyles(t, function (t) {
                    window.getComputedStyle(t, ":before").getPropertyValue("font-size"), (t.className += "trigger"), (e = "5px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size"));
                }),
                e
            );
        }),
        Modernizr.addTest("userselect", testAllProps("userSelect", "none", !0)),
        testRunner(),
        delete ModernizrProto.addTest,
        delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    window.Modernizr = Modernizr;
})(window, document);
