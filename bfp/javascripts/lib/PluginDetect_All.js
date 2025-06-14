/*
PluginDetect v0.8.9
www.pinlady.net/PluginDetect/license/
[ QuickTime Java DevalVR Flash Shockwave WindowsMediaPlayer Silverlight VLC AdobeReader PDFReader RealPlayer IEcomponent ActiveX PDFjs ]
[ isMinVersion getVersion hasMimeType onDetectionDone onWindowLoaded onBeforeInstantiate ]
[ AllowActiveX BetterIE ]
*/
(function() {
    var j = {
        version: "0.8.9",
        name: "PluginDetect",
        addPlugin: function(p, q) {
            if (p && j.isString(p) && q && j.isFunc(q.getVersion)) {
                p = p.replace(/\s/g, "").toLowerCase();
                j.Plugins[p] = q;
                if (!j.isDefined(q.getVersionDone)) {
                    q.installed = null;
                    q.version = null;
                    q.version0 = null;
                    q.getVersionDone = null;
                    q.pluginName = p;
                }
            }
        },
        openTag: "<",
        hasOwnPROP: {}.constructor.prototype.hasOwnProperty,
        hasOwn: function(s, t) {
            var p;
            try {
                p = j.hasOwnPROP.call(s, t);
            } catch (q) {}
            return !!p;
        },
        rgx: {
            str: /string/i,
            num: /number/i,
            fun: /function/i,
            arr: /array/i
        },
        toString: {}.constructor.prototype.toString,
        isDefined: function(p) {
            return typeof p != "undefined";
        },
        isArray: function(p) {
            return j.rgx.arr.test(j.toString.call(p));
        },
        isString: function(p) {
            return j.rgx.str.test(j.toString.call(p));
        },
        isNum: function(p) {
            return j.rgx.num.test(j.toString.call(p));
        },
        isStrNum: function(p) {
            return j.isString(p) && /\d/.test(p);
        },
        isFunc: function(p) {
            return j.rgx.fun.test(j.toString.call(p));
        },
        getNumRegx: /[\d][\d\.\_,\-]*/,
        splitNumRegx: /[\.\_,\-]/g,
        getNum: function(q, r) {
            var p = j.isStrNum(q) ? (j.isDefined(r) ? new RegExp(r) : j.getNumRegx).exec(q) : null;
            return p ? p[0] : null;
        },
        compareNums: function(w, u, t) {
            var s,
                r,
                q,
                v = parseInt;
            if (j.isStrNum(w) && j.isStrNum(u)) {
                if (j.isDefined(t) && t.compareNums) {
                    return t.compareNums(w, u);
                }
                s = w.split(j.splitNumRegx);
                r = u.split(j.splitNumRegx);
                for (q = 0; q < Math.min(s.length, r.length); q++) {
                    if (v(s[q], 10) > v(r[q], 10)) {
                        return 1;
                    }
                    if (v(s[q], 10) < v(r[q], 10)) {
                        return -1;
                    }
                }
            }
            return 0;
        },
        formatNum: function(q, r) {
            var p, s;
            if (!j.isStrNum(q)) {
                return null;
            }
            if (!j.isNum(r)) {
                r = 4;
            }
            r--;
            s = q.replace(/\s/g, "").split(j.splitNumRegx).concat(["0", "0", "0", "0"]);
            for (p = 0; p < 4; p++) {
                if (/^(0+)(.+)$/.test(s[p])) {
                    s[p] = RegExp.$2;
                }
                if (p > r || !/\d/.test(s[p])) {
                    s[p] = "0";
                }
            }
            return s.slice(0, 4).join(",");
        },
        pd: {
            getPROP: function(s, q, p) {
                try {
                    if (s) {
                        p = s[q];
                    }
                } catch (r) {}
                return p;
            },
            findNavPlugin: function(u) {
                if (u.dbug) {
                    return u.dbug;
                }
                var A = null;
                if (window.navigator) {
                    var z = {
                            Find: j.isString(u.find) ? new RegExp(u.find, "i") : u.find,
                            Find2: j.isString(u.find2) ? new RegExp(u.find2, "i") : u.find2,
                            Avoid: u.avoid ? j.isString(u.avoid) ? new RegExp(u.avoid, "i") : u.avoid : 0,
                            Num: u.num ? /\d/ : 0
                        },
                        s,
                        r,
                        t,
                        y,
                        x,
                        q,
                        p = navigator.mimeTypes,
                        w = navigator.plugins;
                    if (u.mimes && p) {
                        y = j.isArray(u.mimes) ? [].concat(u.mimes) : j.isString(u.mimes) ? [u.mimes] : [];
                        for (s = 0; s < y.length; s++) {
                            r = 0;
                            try {
                                if (j.isString(y[s]) && /[^\s]/.test(y[s])) {
                                    r = p[y[s]].enabledPlugin;
                                }
                            } catch (v) {}
                            if (r) {
                                t = this.findNavPlugin_(r, z);
                                if (t.obj) {
                                    A = t.obj;
                                }
                                if (A && !j.dbug) {
                                    return A;
                                }
                            }
                        }
                    }
                    if (u.plugins && w) {
                        x = j.isArray(u.plugins) ? [].concat(u.plugins) : j.isString(u.plugins) ? [u.plugins] : [];
                        for (s = 0; s < x.length; s++) {
                            r = 0;
                            try {
                                if (x[s] && j.isString(x[s])) {
                                    r = w[x[s]];
                                }
                            } catch (v) {}
                            if (r) {
                                t = this.findNavPlugin_(r, z);
                                if (t.obj) {
                                    A = t.obj;
                                }
                                if (A && !j.dbug) {
                                    return A;
                                }
                            }
                        }
                        q = w.length;
                        if (j.isNum(q)) {
                            for (s = 0; s < q; s++) {
                                r = 0;
                                try {
                                    r = w[s];
                                } catch (v) {}
                                if (r) {
                                    t = this.findNavPlugin_(r, z);
                                    if (t.obj) {
                                        A = t.obj;
                                    }
                                    if (A && !j.dbug) {
                                        return A;
                                    }
                                }
                            }
                        }
                    }
                }
                return A;
            },
            findNavPlugin_: function(t, s) {
                var r = t.description || "",
                    q = t.name || "",
                    p = {};
                if (s.Find.test(r) && (!s.Find2 || s.Find2.test(q)) && (!s.Num || s.Num.test(RegExp.leftContext + RegExp.rightContext)) || s.Find.test(q) && (!s.Find2 || s.Find2.test(r)) && (!s.Num || s.Num.test(RegExp.leftContext + RegExp.rightContext))) {
                    if (!s.Avoid || !(s.Avoid.test(r) || s.Avoid.test(q))) {
                        p.obj = t;
                    }
                }
                return p;
            },
            getVersionDelimiter: ",",
            findPlugin: function(r) {
                var q,
                    p = {
                        status: -3,
                        plugin: 0
                    };
                if (!j.isString(r)) {
                    return p;
                }
                if (r.length == 1) {
                    this.getVersionDelimiter = r;
                    return p;
                }
                r = r.toLowerCase().replace(/\s/g, "");
                q = j.Plugins[r];
                if (!q || !q.getVersion) {
                    return p;
                }
                p.plugin = q;
                p.status = 1;
                return p;
            }
        },
        getPluginFileVersion: function(u, q) {
            var t,
                s,
                v,
                p,
                r = -1;
            if (!u) {
                return q;
            }
            if (u.version) {
                t = j.getNum(u.version + "");
            }
            if (!t || !q) {
                return q || t || null;
            }
            t = j.formatNum(t);
            q = j.formatNum(q);
            s = q.split(j.splitNumRegx);
            v = t.split(j.splitNumRegx);
            for (p = 0; p < s.length; p++) {
                if (r > -1 && p > r && s[p] != "0") {
                    return q;
                }
                if (v[p] != s[p]) {
                    if (r == -1) {
                        r = p;
                    }
                    if (s[p] != "0") {
                        return q;
                    }
                }
            }
            return t;
        },
        AXO: function() {
            var q;
            try {
                q = new window.ActiveXObject();
            } catch (p) {}
            return q ? null : window.ActiveXObject;
        }(),
        getAXO: function(p) {
            var r = null;
            try {
                r = new j.AXO(p);
            } catch (q) {
                j.errObj = q;
            }
            if (r) {
                j.browser.ActiveXEnabled = !0;
            }
            return r;
        },
        browser: {
            detectPlatform: function() {
                var r = this,
                    q,
                    p = window.navigator ? navigator.platform || "" : "";
                j.OS = 100;
                if (p) {
                    var s = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                    for (q = s.length - 2; q >= 0; q = q - 2) {
                        if (s[q] && new RegExp(s[q], "i").test(p)) {
                            j.OS = s[q + 1];
                            break;
                        }
                    }
                }
            },
            detectIE: function() {
                var r = this,
                    u = document,
                    t,
                    q,
                    v = window.navigator ? navigator.userAgent || "" : "",
                    w,
                    p,
                    y;
                r.ActiveXFilteringEnabled = !1;
                r.ActiveXEnabled = !1;
                try {
                    r.ActiveXFilteringEnabled = !!window.external.msActiveXFilteringEnabled();
                } catch (s) {}
                p = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM", "TDCCtl.TDCCtl", "Shell.UIHelper", "HtmlDlgSafeHelper.HtmlDlgSafeHelper", "Scripting.Dictionary"];
                y = ["WMPlayer.OCX", "ShockwaveFlash.ShockwaveFlash", "AgControl.AgControl"];
                w = p.concat(y);
                for (t = 0; t < w.length; t++) {
                    if (j.getAXO(w[t]) && !j.dbug) {
                        break;
                    }
                }
                if (r.ActiveXEnabled && r.ActiveXFilteringEnabled) {
                    for (t = 0; t < y.length; t++) {
                        if (j.getAXO(y[t])) {
                            r.ActiveXFilteringEnabled = !1;
                            break;
                        }
                    }
                }
                q = u.documentMode;
                try {
                    u.documentMode = "";
                } catch (s) {}
                r.isIE = r.ActiveXEnabled;
                r.isIE = r.isIE || j.isNum(u.documentMode) || new Function("return/*@cc_on!@*/!1")();
                try {
                    u.documentMode = q;
                } catch (s) {}
                r.verIE = null;
                if (r.isIE) {
                    r.verIE = (j.isNum(u.documentMode) && u.documentMode >= 7 ? u.documentMode : 0) || (/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i.test(v) ? parseFloat(RegExp.$1, 10) : 7);
                }
                r.betterIE();
            },
            betterIE: function() {
                var r = this,
                    v = document;
                r.verIEtrue = null;
                r.docModeIE = null;
                if (r.isIE) {
                    var s,
                        u = v.createElement("div"),
                        q,
                        p = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                    try {
                        u.style.behavior = "url(#default#clientcaps)";
                    } catch (t) {}
                    for (q = 0; q < p.length; q++) {
                        try {
                            r.verIEtrue = u.getComponentVersion(p[q], "componentid").replace(/,/g, ".");
                        } catch (t) {}
                        if (r.verIEtrue && !j.dbug) {
                            break;
                        }
                    }
                    s = parseFloat(r.verIEtrue || "0", 10);
                    r.docModeIE = v.documentMode || (/back/i.test(v.compatMode || "") ? 5 : s) || r.verIE;
                    r.verIE = s || r.docModeIE;
                }
            },
            detectNonIE: function() {
                var p = this,
                    s = window.navigator ? navigator : {},
                    r = p.isIE ? "" : s.userAgent || "",
                    t = s.vendor || "",
                    q = s.product || "";
                p.isGecko = /Gecko/i.test(q) && /Gecko\s*\/\s*\d/i.test(r);
                p.verGecko = p.isGecko ? j.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(r) ? RegExp.$1 : "0.9") : null;
                p.isOpera = /(OPR\s*\/|Opera\s*\/\s*\d.*\s*Version\s*\/|Opera\s*[\/]?)\s*(\d+[\.,\d]*)/i.test(r);
                p.verOpera = p.isOpera ? j.formatNum(RegExp.$2) : null;
                p.isChrome = !p.isOpera && /(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i.test(r);
                p.verChrome = p.isChrome ? j.formatNum(RegExp.$2) : null;
                p.isSafari = !p.isOpera && !p.isChrome && (/Apple/i.test(t) || !t) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(r);
                p.verSafari = p.isSafari && /Version\s*\/\s*(\d[\d\.]*)/i.test(r) ? j.formatNum(RegExp.$1) : null;
            },
            init: function() {
                var p = this;
                p.detectPlatform();
                p.detectIE();
                p.detectNonIE();
            }
        },
        init: {
            hasRun: 0,
            library: function() {
                window[j.name] = j;
                var q = this,
                    p = document;
                j.win.init();
                j.head = p.getElementsByTagName("head")[0] || p.getElementsByTagName("body")[0] || p.body || null;
                j.browser.init();
                q.hasRun = 1;
            }
        },
        ev: {
            handler: function(t, s, r, q, p) {
                return function() {
                    t(s, r, q, p);
                };
            },
            setTimeout: function(q, p) {
                if (j.win && j.win.unload) {
                    return;
                }
                setTimeout(q, p);
            },
            fPush: function(q, p) {
                if (j.isArray(p) && (j.isFunc(q) || j.isArray(q) && q.length > 0 && j.isFunc(q[0]))) {
                    p.push(q);
                }
            },
            call0: function(q) {
                var p = j.isArray(q) ? q.length : -1;
                if (p > 0 && j.isFunc(q[0])) {
                    q[0](j, p > 1 ? q[1] : 0, p > 2 ? q[2] : 0, p > 3 ? q[3] : 0);
                } else {
                    if (j.isFunc(q)) {
                        q(j);
                    }
                }
            },
            callArray0: function(p) {
                var q = this,
                    r;
                if (j.isArray(p)) {
                    while (p.length) {
                        r = p[0];
                        p.splice(0, 1);
                        if (j.win && j.win.unload && p !== j.win.unloadHndlrs) {} else {
                            q.call0(r);
                        }
                    }
                }
            },
            call: function(q) {
                var p = this;
                p.call0(q);
                p.ifDetectDoneCallHndlrs();
            },
            callArray: function(p) {
                var q = this;
                q.callArray0(p);
                q.ifDetectDoneCallHndlrs();
            },
            allDoneHndlrs: [],
            ifDetectDoneCallHndlrs: function() {
                var r = this,
                    p,
                    q;
                if (!r.allDoneHndlrs.length) {
                    return;
                }
                if (j.win) {
                    if (!j.win.loaded || j.win.loadPrvtHndlrs.length || j.win.loadPblcHndlrs.length) {
                        return;
                    }
                }
                if (j.Plugins) {
                    for (p in j.Plugins) {
                        if (j.hasOwn(j.Plugins, p)) {
                            q = j.Plugins[p];
                            if (q && j.isFunc(q.getVersion)) {
                                if (q.OTF == 3 || q.DoneHndlrs && q.DoneHndlrs.length || q.BIHndlrs && q.BIHndlrs.length) {
                                    return;
                                }
                            }
                        }
                    }
                }
                r.callArray0(r.allDoneHndlrs);
            }
        },
        isMinVersion: function(v, u, r, q) {
            var s = j.pd.findPlugin(v),
                t,
                p = -1;
            if (s.status < 0) {
                return s.status;
            }
            t = s.plugin;
            u = j.formatNum(j.isNum(u) ? u.toString() : j.isStrNum(u) ? j.getNum(u) : "0");
            if (t.getVersionDone != 1) {
                t.getVersion(u, r, q);
                if (t.getVersionDone === null) {
                    t.getVersionDone = 1;
                }
            }
            if (t.installed !== null) {
                p = t.installed <= 0.5 ? t.installed : t.installed == 0.7 ? 1 : t.version === null ? 0 : j.compareNums(t.version, u, t) >= 0 ? 1 : -0.1;
            }
            return p;
        },
        getVersion: function(u, r, q) {
            var s = j.pd.findPlugin(u),
                t,
                p;
            if (s.status < 0) {
                return null;
            }
            t = s.plugin;
            if (t.getVersionDone != 1) {
                t.getVersion(null, r, q);
                if (t.getVersionDone === null) {
                    t.getVersionDone = 1;
                }
            }
            p = t.version || t.version0;
            p = p ? p.replace(j.splitNumRegx, j.pd.getVersionDelimiter) : p;
            return p;
        },
        hasMimeType: function(t) {
            if (t && window.navigator && navigator.mimeTypes) {
                var w,
                    v,
                    q,
                    s,
                    p = navigator.mimeTypes,
                    r = j.isArray(t) ? [].concat(t) : j.isString(t) ? [t] : [];
                s = r.length;
                for (q = 0; q < s; q++) {
                    w = 0;
                    try {
                        if (j.isString(r[q]) && /[^\s]/.test(r[q])) {
                            w = p[r[q]];
                        }
                    } catch (u) {}
                    v = w ? w.enabledPlugin : 0;
                    if (v && (v.name || v.description)) {
                        return w;
                    }
                }
            }
            return null;
        },
        onDetectionDone: function(u, t, q, p) {
            var r = j.pd.findPlugin(u),
                v,
                s;
            if (r.status == -3) {
                return -1;
            }
            s = r.plugin;
            if (!j.isArray(s.DoneHndlrs)) {
                s.DoneHndlrs = [];
            }
            if (s.getVersionDone != 1) {
                v = j.getVersion ? j.getVersion(u, q, p) : j.isMinVersion(u, "0", q, p);
            }
            if (s.installed != -0.5 && s.installed != 0.5) {
                j.ev.call(t);
                return 1;
            }
            j.ev.fPush(t, s.DoneHndlrs);
            return 0;
        },
        onWindowLoaded: function(p) {
            if (j.win.loaded) {
                j.ev.call(p);
            } else {
                j.ev.fPush(p, j.win.loadPblcHndlrs);
            }
        },
        onBeforeInstantiate: function(s, r) {
            var p = j.pd.findPlugin(s),
                q = p.plugin;
            if (p.status == -3) {
                return;
            }
            if (!j.isArray(q.BIHndlrs)) {
                q.BIHndlrs = [];
            }
            j.ev.fPush(r, q.BIHndlrs);
        },
        codebase: {
            isDisabled: function() {
                if (j.browser.ActiveXEnabled && j.isDefined(j.pd.getPROP(document.createElement("object"), "object"))) {
                    return 0;
                }
                return 1;
            },
            pluginMayBeHanging: function(q) {
                var r = this,
                    p;
                if (!r.isDisabled() && q && j.isDefined(j.pd.getPROP(q, "readyState")) && j.pd.getPROP(q.firstChild, "object")) {
                    p = j.pd.getPROP(q.firstChild, "readyState");
                    if (j.isNum(p) && p != 4) {
                        return 1;
                    }
                }
                return 0;
            },
            emptyGarbage: function() {
                var r = this,
                    p,
                    t = r.HTML,
                    q = 0;
                if (!t.length) {
                    return;
                }
                for (p = t.length - 1; p >= r.len; p--) {
                    if (t[p] && t[p].span && r.pluginMayBeHanging(t[p].span)) {
                        r.emptyNode(t[p].span);
                        t[p].span = null;
                        q = 1;
                    }
                }
                r.len = t.length;
                if (q) {
                    try {
                        window.CollectGarbage();
                    } catch (s) {}
                }
            },
            isMin: function(u, t) {
                var s = this,
                    r,
                    q,
                    p = 0;
                if (!j.isStrNum(t) || s.isDisabled()) {
                    return p;
                }
                s.init(u);
                if (!u.L) {
                    u.L = {};
                    for (r = 0; r < u.Lower.length; r++) {
                        if (s.isActiveXObject(u, u.Lower[r])) {
                            u.L = s.convert(u, u.Lower[r]);
                            break;
                        }
                    }
                }
                if (u.L.v) {
                    q = s.convert(u, t, 1);
                    if (q.x >= 0) {
                        p = (u.L.x == q.x ? s.isActiveXObject(u, q.v) : j.compareNums(t, u.L.v) <= 0) ? 1 : -1;
                    }
                }
                return p;
            },
            search: function(v) {
                var B = this,
                    w = v.$$,
                    q = 0,
                    r;
                r = v.searchHasRun || B.isDisabled() ? 1 : 0;
                v.searchHasRun = 1;
                if (r) {
                    return v.version || null;
                }
                B.init(v);
                var F,
                    E,
                    D,
                    s = v.DIGITMAX,
                    t,
                    p,
                    C = 99999999,
                    u = [0, 0, 0, 0],
                    G = [0, 0, 0, 0];
                var A = function(y, J) {
                    var H = [].concat(u),
                        I;
                    H[y] = J;
                    I = B.isActiveXObject(v, H.join(","));
                    if (I) {
                        q = 1;
                        u[y] = J;
                    } else {
                        G[y] = J;
                    }
                    return I;
                };
                for (F = 0; F < G.length; F++) {
                    u[F] = Math.floor(v.DIGITMIN[F]) || 0;
                    t = u.join(",");
                    p = u.slice(0, F).concat([C, C, C, C]).slice(0, u.length).join(",");
                    for (D = 0; D < s.length; D++) {
                        if (j.isArray(s[D])) {
                            s[D].push(0);
                            if (s[D][F] > G[F] && j.compareNums(p, v.Lower[D]) >= 0 && j.compareNums(t, v.Upper[D]) < 0) {
                                G[F] = Math.floor(s[D][F]);
                            }
                        }
                    }
                    for (E = 0; E < 30; E++) {
                        if (G[F] - u[F] <= 16) {
                            for (D = G[F]; D >= u[F] + (F ? 1 : 0); D--) {
                                if (A(F, D)) {
                                    break;
                                }
                            }
                            break;
                        }
                        A(F, Math.round((G[F] + u[F]) / 2));
                    }
                    if (!q) {
                        break;
                    }
                    G[F] = u[F];
                }
                if (q) {
                    v.version = B.convert(v, u.join(",")).v;
                }
                return v.version || null;
            },
            emptyNode: function(p) {
                try {
                    p.innerHTML = "";
                } catch (q) {}
            },
            HTML: [],
            len: 0,
            onUnload: function(r, q) {
                var p,
                    s = q.HTML;
                for (p = 0; p < s.length; p++) {
                    if (s[p] && s[p].span) {
                        q.emptyNode(s[p].span);
                        s[p].span = null;
                        s[p] = 0;
                    }
                }
            },
            init: function(s) {
                if (!s.init) {
                    s.init = 1;
                    var r = this,
                        p,
                        q;
                    j.ev.fPush([r.onUnload, r], j.win.unloadHndlrs);
                    s.tagA = '<object width="1" height="1" style="display:none;" codebase="#version=';
                    q = s.classID || s.$$.classID || "";
                    s.tagB = '" ' + (/clsid\s*:/i.test(q) ? 'classid="' : 'type="') + q + '">' + j.openTag + "/object>";
                    for (p = 0; p < s.Lower.length; p++) {
                        s.Lower[p] = j.formatNum(s.Lower[p]);
                        s.Upper[p] = j.formatNum(s.Upper[p]);
                    }
                }
            },
            isActiveXObject: function(u, q) {
                var t = this,
                    p = 0,
                    s = u.$$,
                    r = document.createElement("span");
                if (u.min && j.compareNums(q, u.min) <= 0) {
                    return 1;
                }
                if (u.max && j.compareNums(q, u.max) >= 0) {
                    return 0;
                }
                if (s.BIHndlrs && s.BIHndlrs.length) {
                    j.ev.callArray(s.BIHndlrs);
                }
                r.innerHTML = u.tagA + q + u.tagB;
                if (j.pd.getPROP(r.firstChild, "object")) {
                    p = 1;
                }
                if (p) {
                    u.min = q;
                    t.HTML.push({
                        span: r
                    });
                } else {
                    u.max = q;
                    r.innerHTML = "";
                }
                return p;
            },
            convert_: function(t, p, q, s) {
                var r = t.convert[p];
                return r ? j.isFunc(r) ? j.formatNum(r(q.split(j.splitNumRegx), s).join(",")) : q : r;
            },
            convert: function(v, r, u) {
                var t = this,
                    q,
                    p,
                    s;
                r = j.formatNum(r);
                p = {
                    v: r,
                    x: -1
                };
                if (r) {
                    for (q = 0; q < v.Lower.length; q++) {
                        s = t.convert_(v, q, v.Lower[q]);
                        if (s && j.compareNums(r, u ? s : v.Lower[q]) >= 0 && (!q || j.compareNums(r, u ? t.convert_(v, q, v.Upper[q]) : v.Upper[q]) < 0)) {
                            p.v = t.convert_(v, q, r, u);
                            p.x = q;
                            break;
                        }
                    }
                }
                return p;
            },
            z: 0
        },
        win: {
            disable: function() {
                this.cancel = true;
            },
            cancel: false,
            loaded: false,
            unload: false,
            hasRun: 0,
            init: function() {
                var p = this;
                if (!p.hasRun) {
                    p.hasRun = 1;
                    if (/complete/i.test(document.readyState || "")) {
                        p.loaded = true;
                    } else {
                        p.addEvent("load", p.onLoad);
                    }
                    p.addEvent("unload", p.onUnload);
                }
            },
            addEvent: function(r, q) {
                var s = this,
                    p = window;
                if (p.addEventListener) {
                    p.addEventListener(r, q, false);
                } else {
                    if (p.attachEvent) {
                        p.attachEvent("on" + r, q);
                    } else {
                        p["on" + r] = s.concatFn(q, p["on" + r]);
                    }
                }
            },
            removeEvent: function(r, q) {
                var p = window;
                if (p.removeEventListener) {
                    p.removeEventListener(r, q, false);
                } else {
                    if (p.detachEvent) {
                        p.detachEvent("on" + r, q);
                    }
                }
            },
            concatFn: function(q, p) {
                return function() {
                    q();
                    if (typeof p == "function") {
                        p();
                    }
                };
            },
            loadPrvtHndlrs: [],
            loadPblcHndlrs: [],
            unloadHndlrs: [],
            onUnload: function() {
                var p = j.win;
                if (p.unload) {
                    return;
                }
                p.unload = true;
                p.removeEvent("load", p.onLoad);
                p.removeEvent("unload", p.onUnload);
                j.ev.callArray(p.unloadHndlrs);
            },
            count: 0,
            countMax: 1,
            intervalLength: 10,
            onLoad: function() {
                var p = j.win;
                if (p.loaded || p.unload || p.cancel) {
                    return;
                }
                if (p.count < p.countMax && p.loadPrvtHndlrs.length) {
                    j.ev.setTimeout(p.onLoad, p.intervalLength);
                } else {
                    p.loaded = true;
                    j.ev.callArray(p.loadPrvtHndlrs);
                    j.ev.callArray(p.loadPblcHndlrs);
                }
                p.count++;
            }
        },
        DOM: {
            isEnabled: {
                objectTag: function() {
                    var q = j.browser,
                        p = q.isIE ? 0 : 1;
                    if (q.ActiveXEnabled) {
                        p = 1;
                    }
                    return !!p;
                },
                objectTagUsingActiveX: function() {
                    var p = 0;
                    if (j.browser.ActiveXEnabled) {
                        p = 1;
                    }
                    return !!p;
                },
                objectProperty: function(p) {
                    if (p && p.tagName && j.browser.isIE) {
                        if (/applet/i.test(p.tagName)) {
                            return !this.objectTag() || j.isDefined(j.pd.getPROP(document.createElement("object"), "object")) ? 1 : 0;
                        }
                        return j.isDefined(j.pd.getPROP(document.createElement(p.tagName), "object")) ? 1 : 0;
                    }
                    return 0;
                }
            },
            HTML: [],
            div: null,
            divID: "plugindetect",
            divWidth: 300,
            getDiv: function() {
                return this.div || document.getElementById(this.divID) || null;
            },
            initDiv: function() {
                var q = this,
                    p;
                if (!q.div) {
                    p = q.getDiv();
                    if (p) {
                        q.div = p;
                    } else {
                        q.div = document.createElement("div");
                        q.div.id = q.divID;
                        q.setStyle(q.div, q.getStyle.div());
                        q.insertDivInBody(q.div);
                    }
                    j.ev.fPush([q.onUnload, q], j.win.unloadHndlrs);
                }
                p = 0;
            },
            pluginSize: 1,
            altHTML: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
            emptyNode: function(q) {
                var p = this;
                if (q && /div|span/i.test(q.tagName || "")) {
                    if (j.browser.isIE) {
                        p.setStyle(q, ["display", "none"]);
                    }
                    try {
                        q.innerHTML = "";
                    } catch (r) {}
                }
            },
            removeNode: function(p) {
                try {
                    if (p && p.parentNode) {
                        p.parentNode.removeChild(p);
                    }
                } catch (q) {}
            },
            onUnload: function(u, t) {
                var r,
                    q,
                    s,
                    v,
                    w = t.HTML,
                    p = w.length;
                if (p) {
                    for (q = p - 1; q >= 0; q--) {
                        v = w[q];
                        if (v) {
                            t.emptyNode(v.span);
                            t.removeNode(v.span);
                            v.span = null;
                        }
                        w[q] = 0;
                    }
                }
                r = t.getDiv();
                t.emptyNode(r);
                t.removeNode(r);
                s = 0;
                r = 0;
                t.div = 0;
            },
            width: function() {
                var t = this,
                    s = t.span,
                    q,
                    r,
                    p = -1;
                q = s && j.isNum(s.scrollWidth) ? s.scrollWidth : p;
                r = s && j.isNum(s.offsetWidth) ? s.offsetWidth : p;
                s = 0;
                return r > 0 ? r : q > 0 ? q : Math.max(r, q);
            },
            obj: function() {
                return this.span ? this.span.firstChild || null : null;
            },
            readyState: function() {
                var p = this;
                return j.browser.isIE && j.isDefined(j.pd.getPROP(p.span, "readyState")) ? j.pd.getPROP(p.obj(), "readyState") : j.UNDEFINED;
            },
            objectProperty: function() {
                var r = this,
                    q = r.DOM,
                    p;
                if (q.isEnabled.objectProperty(r)) {
                    p = j.pd.getPROP(r.obj(), "object");
                }
                return p;
            },
            getTagStatus: function(q, A, F, E, t, D, v) {
                var G = this;
                if (!q || !q.span) {
                    return -2;
                }
                var y = q.width(),
                    r = q.obj() ? 1 : 0,
                    s = q.readyState(),
                    p = q.objectProperty();
                if (p) {
                    return 1.5;
                }
                var u = /clsid\s*\:/i,
                    C = F && u.test(F.outerHTML || "") ? F : E && u.test(E.outerHTML || "") ? E : 0,
                    w = F && !u.test(F.outerHTML || "") ? F : E && !u.test(E.outerHTML || "") ? E : 0,
                    z = q && u.test(q.outerHTML || "") ? C : w;
                if (!A || !A.span || !z || !z.span) {
                    return 0;
                }
                var x = z.width(),
                    B = A.width(),
                    H = z.readyState();
                if (y < 0 || x < 0 || B <= G.pluginSize) {
                    return 0;
                }
                if (v && !q.pi && j.isDefined(p) && j.browser.isIE && q.tagName == z.tagName && q.time <= z.time && y === x && s === 0 && H !== 0) {
                    q.pi = 1;
                }
                if (x < B) {
                    return q.pi ? -0.1 : 0;
                }
                if (y == B || !r) {
                    if (!q.winLoaded && D) {
                        return q.pi ? -0.5 : -1;
                    }
                    if (j.isNum(t)) {
                        if (!j.isNum(q.count2)) {
                            q.count2 = t;
                        }
                        if (t - q.count2 > 0) {
                            return q.pi ? -0.5 : -1;
                        }
                    }
                } else {
                    if (y == G.pluginSize && r && (!j.isNum(s) || s === 4)) {
                        if (!q.winLoaded && D) {
                            return 1;
                        }
                        if (j.isNum(t)) {
                            if (!j.isNum(q.count)) {
                                q.count = t;
                            }
                            if (q.winLoaded && t - q.count > 4) {
                                return 1;
                            }
                        }
                    } else {
                        if (!q.winLoaded && D) {
                            return q.pi ? -0.5 : -1;
                        }
                        if (j.isNum(t)) {
                            if (!j.isNum(q.count3)) {
                                q.count3 = t;
                            }
                            if (q.winLoaded && q.count3 - t > 6) {
                                return q.pi ? -0.5 : -1;
                            }
                        }
                    }
                }
                return q.pi ? -0.1 : 0;
            },
            setStyle: function(q, t) {
                var s = q.style,
                    p;
                if (s && t) {
                    for (p = 0; p < t.length; p = p + 2) {
                        try {
                            s[t[p]] = t[p + 1];
                        } catch (r) {}
                    }
                }
                q = 0;
                s = 0;
            },
            getStyle: {
                span: function() {
                    var p = j.DOM;
                    return [].concat(this.Default).concat(["display", "inline", "fontSize", p.pluginSize + 3 + "px", "lineHeight", p.pluginSize + 3 + "px"]);
                },
                div: function() {
                    var p = j.DOM;
                    return [].concat(this.Default).concat(["display", "block", "width", p.divWidth + "px", "height", p.pluginSize + 3 + "px", "fontSize", p.pluginSize + 3 + "px", "lineHeight", p.pluginSize + 3 + "px", "position", "absolute", "right", "9999px", "top", "-9999px"]);
                },
                plugin: function(q) {
                    var p = j.DOM;
                    return "background-color:transparent;background-image:none;vertical-align:baseline;outline-style:none;border-style:none;padding:0px;margin:0px;visibility:" + (q ? "hidden;" : "visible;") + "display:inline;font-size:" + (p.pluginSize + 3) + "px;line-height:" + (p.pluginSize + 3) + "px;";
                },
                Default: ["backgroundColor", "transparent", "backgroundImage", "none", "verticalAlign", "baseline", "outlineStyle", "none", "borderStyle", "none", "padding", "0px", "margin", "0px", "visibility", "visible"]
            },
            insertDivInBody: function(v, t) {
                var u = "pd33993399",
                    q = null,
                    s = t ? window.top.document : window.document,
                    p = s.getElementsByTagName("body")[0] || s.body;
                if (!p) {
                    try {
                        s.write('<div id="' + u + '">.' + j.openTag + "/div>");
                        q = s.getElementById(u);
                    } catch (r) {}
                }
                p = s.getElementsByTagName("body")[0] || s.body;
                if (p) {
                    p.insertBefore(v, p.firstChild);
                    if (q) {
                        p.removeChild(q);
                    }
                }
                v = 0;
            },
            insert: function(u, t, v, p, y, w, B) {
                var E = this,
                    A = document,
                    G,
                    F,
                    D = A.createElement("span"),
                    s,
                    C;
                if (!j.isDefined(p)) {
                    p = "";
                }
                if (j.isString(u) && /[^\s]/.test(u)) {
                    u = u.toLowerCase().replace(/\s/g, "");
                    G = j.openTag + u + " ";
                    G += 'style="' + E.getStyle.plugin(w) + '" ';
                    var r = 1,
                        q = 1;
                    for (C = 0; C < t.length; C = C + 2) {
                        if (/[^\s]/.test(t[C + 1])) {
                            G += t[C] + '="' + t[C + 1] + '" ';
                        }
                        if (/width/i.test(t[C])) {
                            r = 0;
                        }
                        if (/height/i.test(t[C])) {
                            q = 0;
                        }
                    }
                    G += (r ? 'width="' + E.pluginSize + '" ' : "") + (q ? 'height="' + E.pluginSize + '" ' : "");
                    if (u == "embed") {
                        G += " />";
                    } else {
                        G += ">";
                        for (C = 0; C < v.length; C = C + 2) {
                            if (/[^\s]/.test(v[C + 1])) {
                                G += j.openTag + 'param name="' + v[C] + '" value="' + v[C + 1] + '" />';
                            }
                        }
                        G += p + j.openTag + "/" + u + ">";
                    }
                } else {
                    u = "";
                    G = p;
                }
                if (!B) {
                    E.initDiv();
                }
                s = B || E.getDiv();
                F = {
                    span: null,
                    winLoaded: j.win.loaded,
                    tagName: u,
                    outerHTML: G,
                    DOM: E,
                    time: new Date().getTime(),
                    width: E.width,
                    obj: E.obj,
                    readyState: E.readyState,
                    objectProperty: E.objectProperty
                };
                if (s && s.parentNode) {
                    if (y && y.BIHndlrs && y.BIHndlrs.length) {
                        j.ev.callArray(y.BIHndlrs);
                    }
                    E.setStyle(D, E.getStyle.span());
                    s.appendChild(D);
                    try {
                        D.innerHTML = G;
                    } catch (z) {}
                    F.span = D;
                    F.winLoaded = j.win.loaded;
                }
                D = 0;
                s = 0;
                B = 0;
                E.HTML.push(F);
                return F;
            }
        },
        file: {
            any: "fileStorageAny999",
            valid: "fileStorageValid999",
            save: function(s, t, r) {
                var q = this,
                    p;
                if (s && j.isDefined(r)) {
                    if (!s[q.any]) {
                        s[q.any] = [];
                    }
                    if (!s[q.valid]) {
                        s[q.valid] = [];
                    }
                    s[q.any].push(r);
                    p = q.split(t, r);
                    if (p) {
                        s[q.valid].push(p);
                    }
                }
            },
            getValidLength: function(p) {
                return p && p[this.valid] ? p[this.valid].length : 0;
            },
            getAnyLength: function(p) {
                return p && p[this.any] ? p[this.any].length : 0;
            },
            getValid: function(r, p) {
                var q = this;
                return r && r[q.valid] ? q.get(r[q.valid], p) : null;
            },
            getAny: function(r, p) {
                var q = this;
                return r && r[q.any] ? q.get(r[q.any], p) : null;
            },
            get: function(s, p) {
                var r = s.length - 1,
                    q = j.isNum(p) ? p : r;
                return q < 0 || q > r ? null : s[q];
            },
            split: function(t, q) {
                var s = null,
                    p,
                    r;
                t = t ? t.replace(".", "\\.") : "";
                r = new RegExp("^(.*[^\\/])(" + t + "\\s*)$");
                if (j.isString(q) && r.test(q)) {
                    p = RegExp.$1.split("/");
                    s = {
                        name: p[p.length - 1],
                        ext: RegExp.$2,
                        full: q
                    };
                    p[p.length - 1] = "";
                    s.path = p.join("/");
                }
                return s;
            }
        },
        Plugins: {}
    };
    j.init.library();
    var i = {
        setPluginStatus: function(q, p, s) {
            var r = this;
            r.version = p ? j.formatNum(p, 3) : null;
            r.installed = r.version ? 1 : s ? s > 0 ? 0.7 : -0.1 : q ? 0 : -1;
            r.getVersionDone = r.installed == 0.7 || r.installed == -0.1 || r.nav.done === 0 ? 0 : 1;
            j.codebase.emptyGarbage();
        },
        getVersion: function(s, t) {
            var u = this,
                p = null,
                r = 0,
                q;
            t = j.browser.isIE ? 0 : t;
            if ((!r || j.dbug) && u.nav.query(t).installed) {
                r = 1;
            }
            if ((!p || j.dbug) && u.nav.query(t).version) {
                p = u.nav.version;
            }
            q = !p ? u.codebase.isMin(s) : 0;
            if (q) {
                u.setPluginStatus(0, 0, q);
                return;
            }
            if (!p || j.dbug) {
                q = u.codebase.search();
                if (q) {
                    r = 1;
                    p = q;
                }
            }
            if ((!r || j.dbug) && u.axo.query().installed) {
                r = 1;
            }
            if ((!p || j.dbug) && u.axo.query().version) {
                p = u.axo.version;
            }
            u.setPluginStatus(r, p);
        },
        nav: {
            done: null,
            installed: 0,
            version: null,
            result: [0, 0],
            mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime", "application/x-rtsp", "application/x-sdp", "application/sdp", "audio/vnd.qcelp", "video/sd-video", "audio/mpeg", "video/mp4", "video/3gpp2", "application/x-mpeg", "audio/x-m4b", "audio/x-aac", "video/flc"],
            find: "QuickTime.*Plug-?in",
            find2: "QuickTime.*Plug-?in",
            find3filename: "QuickTime|QT",
            avoid: "Totem|VLC|RealPlayer|Helix|MPlayer|Windows\\s*Media\\s*Player",
            plugins: "QuickTime Plug-in",
            detect: function(s) {
                var t = this,
                    r,
                    q,
                    p = {
                        installed: 0,
                        version: null,
                        plugin: null
                    };
                r = j.pd.findNavPlugin({
                    find: t.find,
                    find2: s ? 0 : t.find2,
                    avoid: s ? 0 : t.avoid,
                    mimes: t.mimeType,
                    plugins: t.plugins
                });
                if (r) {
                    p.plugin = r;
                    p.installed = 1;
                    q = new RegExp(t.find, "i");
                    if (r.name && q.test(r.name + "")) {
                        p.version = j.getNum(r.name + "");
                    }
                }
                return p;
            },
            query: function(r) {
                var q = this,
                    t,
                    s;
                r = r ? 1 : 0;
                if (q.done === null) {
                    if (j.hasMimeType(q.mimeType)) {
                        s = q.detect(1);
                        if (s.installed) {
                            t = q.detect(0);
                            q.result = [t, t.installed ? t : s];
                        }
                        var x = q.result[0],
                            v = q.result[1],
                            w = new RegExp(q.avoid, "i"),
                            u = new RegExp(q.find3filename, "i"),
                            p;
                        x = x ? x.plugin : 0;
                        v = v ? v.plugin : 0;
                        if (!x && v && v.name && (!v.description || /^[\s]*$/.test(v.description + "")) && !w.test(v.name + "")) {
                            p = (v.filename || "") + "";
                            if (/^.*[\\\/]([^\\\/]*)$/.test(p)) {
                                p = RegExp.$1;
                            }
                            if (p && u.test(p) && !w.test(p)) {
                                q.result[0] = q.result[1];
                            }
                        }
                    }
                    q.done = q.result[0] === q.result[1] ? 1 : 0;
                }
                if (q.result[r]) {
                    q.installed = q.result[r].installed;
                    q.version = q.result[r].version;
                }
                return q;
            }
        },
        codebase: {
            classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
            isMin: function(r) {
                var s = this,
                    q,
                    p = 0;
                s.$$ = i;
                if (j.isStrNum(r)) {
                    q = r.split(j.splitNumRegx);
                    if (q.length > 3 && parseInt(q[3], 10) > 0) {
                        q[3] = "9999";
                    }
                    r = q.join(",");
                    p = j.codebase.isMin(s, r);
                }
                return p;
            },
            search: function() {
                this.$$ = i;
                return j.codebase.search(this);
            },
            DIGITMAX: [
                [12, 11, 11],
                [7, 60],
                [7, 11, 11], 0, [7, 11, 11]
            ],
            DIGITMIN: [5, 0, 0, 0],
            Upper: ["999", "7,60", "7,50", "7,6", "7,5"],
            Lower: ["7,60", "7,50", "7,6", "7,5", "0"],
            convert: [1, function(r, q) {
                return q ? [r[0], r[1] + r[2], r[3], "0"] : [r[0], r[1].charAt(0), r[1].charAt(1), r[2]];
            }, 1, 0, 1]
        },
        axo: {
            hasRun: 0,
            installed: 0,
            version: null,
            progID: ["QuickTimeCheckObject.QuickTimeCheck", "QuickTimeCheckObject.QuickTimeCheck.1"],
            progID0: "QuickTime.QuickTime",
            query: function() {
                var r = this,
                    t,
                    p,
                    q,
                    s = r.hasRun || !j.browser.ActiveXEnabled;
                r.hasRun = 1;
                if (s) {
                    return r;
                }
                for (p = 0; p < r.progID.length; p++) {
                    t = j.getAXO(r.progID[p]);
                    if (t) {
                        r.installed = 1;
                        q = j.pd.getPROP(t, "QuickTimeVersion");
                        if (q && q.toString) {
                            q = q.toString(16);
                            r.version = parseInt(q.charAt(0) || "0", 16) + "." + parseInt(q.charAt(1) || "0", 16) + "." + parseInt(q.charAt(2) || "0", 16);
                            if (!j.dbug) {
                                break;
                            }
                        }
                    }
                }
                return r;
            }
        }
    };
    j.addPlugin("quicktime", i);
    var a = {
        mimeType: ["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"],
        mimeType_dummy: "application/dummymimejavaapplet",
        classID: "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",
        classID_dummy: "clsid:8AD9C840-044E-11D1-B3E9-BA9876543210",
        navigator: {
            init: function() {
                var q = this,
                    p = a;
                q.mimeObj = j.hasMimeType(p.mimeType);
                if (q.mimeObj) {
                    q.pluginObj = q.mimeObj.enabledPlugin;
                }
            },
            a: function() {
                try {
                    return window.navigator.javaEnabled();
                } catch (p) {}
                return 1;
            }(),
            javaEnabled: function() {
                return !!this.a;
            },
            mimeObj: 0,
            pluginObj: 0
        },
        OTF: null,
        getVerifyTagsDefault: function() {
            return [1, this.applet.isDisabled.VerifyTagsDefault_1() ? 0 : 1, 1];
        },
        getVersion: function(x, u, w) {
            var q = this,
                s,
                p = q.applet,
                v = q.verify,
                y = q.navigator,
                t = null,
                z = null,
                r = null;
            if (q.getVersionDone === null) {
                q.OTF = 0;
                y.init();
                if (v) {
                    v.init();
                }
            }
            p.setVerifyTagsArray(w);
            j.file.save(q, ".jar", u);
            if (q.getVersionDone === 0) {
                if (p.should_Insert_Query_Any()) {
                    s = p.insert_Query_Any(x);
                    q.setPluginStatus(s[0], s[1], t, x);
                }
                return;
            }
            if ((!t || j.dbug) && q.navMime.query().version) {
                t = q.navMime.version;
            }
            if ((!t || j.dbug) && q.navPlugin.query().version) {
                t = q.navPlugin.version;
            }
            if ((!t || j.dbug) && q.DTK.query().version) {
                t = q.DTK.version;
            }
            if (q.nonAppletDetectionOk(t)) {
                r = t;
            }
            q.setPluginStatus(r, z, t, x);
            if (p.should_Insert_Query_Any()) {
                s = p.insert_Query_Any(x);
                if (s[0]) {
                    r = s[0];
                    z = s[1];
                }
            }
            q.setPluginStatus(r, z, t, x);
        },
        nonAppletDetectionOk: function(q) {
            var t = this,
                p = t.navigator,
                r = j.browser,
                s = 1;
            if (!q || !p.javaEnabled() || !r.isIE && !p.mimeObj) {
                s = 0;
            }
            return s;
        },
        setPluginStatus: function(v, w, p, u) {
            var t = this,
                s,
                q = 0,
                r = t.applet;
            p = p || t.version0;
            s = r.isRange(v);
            if (s) {
                if (r.setRange(s, u) == v) {
                    q = s;
                }
                v = 0;
            }
            if (t.OTF < 3) {
                t.installed = q ? q > 0 ? 0.7 : -0.1 : v ? 1 : p ? -0.2 : -1;
            }
            if (t.OTF == 2 && t.NOTF && !t.applet.getResult()[0]) {
                t.installed = p ? -0.2 : -1;
            }
            if (t.OTF == 3 && t.installed != -0.5 && t.installed != 0.5) {
                t.installed = t.NOTF.isJavaActive(1) >= 1 ? 0.5 : -0.5;
            }
            if (t.OTF == 4 && (t.installed == -0.5 || t.installed == 0.5)) {
                if (v) {
                    t.installed = 1;
                } else {
                    if (q) {
                        t.installed = q > 0 ? 0.7 : -0.1;
                    } else {
                        if (t.NOTF.isJavaActive(1) >= 1) {
                            if (p) {
                                t.installed = 1;
                                v = p;
                            } else {
                                t.installed = 0;
                            }
                        } else {
                            if (p) {
                                t.installed = -0.2;
                            } else {
                                t.installed = -1;
                            }
                        }
                    }
                }
            }
            if (p) {
                t.version0 = j.formatNum(j.getNum(p));
            }
            if (v && !q) {
                t.version = j.formatNum(j.getNum(v));
            }
            if (w && j.isString(w)) {
                t.vendor = w;
            }
            if (!t.vendor) {
                t.vendor = "";
            }
            if (t.verify && t.verify.isEnabled()) {
                t.getVersionDone = 0;
            } else {
                if (t.getVersionDone != 1) {
                    if (t.OTF < 2) {
                        t.getVersionDone = 0;
                    } else {
                        t.getVersionDone = t.applet.can_Insert_Query_Any() ? 0 : 1;
                    }
                }
            }
            j.codebase.emptyGarbage();
        },
        DTK: {
            hasRun: 0,
            status: null,
            VERSIONS: [],
            version: "",
            HTML: null,
            Plugin2Status: null,
            classID: ["clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA", "clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA"],
            mimeType: ["application/java-deployment-toolkit", "application/npruntime-scriptable-plugin;DeploymentToolkit"],
            isDisabled: function(p) {
                var q = this;
                if (q.HTML) {
                    return 1;
                }
                if (p || j.dbug) {
                    return 0;
                }
                if (q.hasRun || !j.DOM.isEnabled.objectTagUsingActiveX()) {
                    return 1;
                }
                return 0;
            },
            query: function(B) {
                var z = this,
                    t = a,
                    A,
                    v,
                    p = j.DOM.altHTML,
                    u = {},
                    q,
                    s = null,
                    w = null,
                    r = z.isDisabled(B);
                z.hasRun = 1;
                if (r) {
                    return z;
                }
                z.status = 0;
                if (j.DOM.isEnabled.objectTagUsingActiveX()) {
                    for (A = 0; A < z.classID.length; A++) {
                        z.HTML = j.DOM.insert("object", ["classid", z.classID[A]], [], p);
                        s = z.HTML.obj();
                        if (j.pd.getPROP(s, "jvms")) {
                            break;
                        }
                    }
                } else {
                    v = j.hasMimeType(z.mimeType);
                    if (v && v.type) {
                        z.HTML = j.DOM.insert("object", ["type", v.type], [], p);
                        s = z.HTML.obj();
                    }
                }
                if (s) {
                    try {
                        q = j.pd.getPROP(s, "jvms");
                        if (q) {
                            w = q.getLength();
                            if (j.isNum(w)) {
                                z.status = w > 0 ? 1 : -1;
                                for (A = 0; A < w; A++) {
                                    v = j.getNum(q.get(w - 1 - A).version);
                                    if (v) {
                                        z.VERSIONS.push(v);
                                        u["a" + j.formatNum(v)] = 1;
                                    }
                                }
                            }
                        }
                    } catch (y) {}
                    if (z.VERSIONS.length) {
                        z.version = j.formatNum(z.VERSIONS[0]);
                    }
                }
                return z;
            }
        },
        navMime: {
            hasRun: 0,
            mimetype: "",
            version: "",
            mimeObj: 0,
            pluginObj: 0,
            regexJPI: /^\s*application\/x-java-applet;jpi-version\s*=\s*(\d.*)$/i,
            isDisabled: function() {
                var p = this,
                    q = a;
                if (p.hasRun || !q.navigator.mimeObj) {
                    return 1;
                }
                return 0;
            },
            update: function(s) {
                var p = this,
                    r = s ? s.enabledPlugin : 0,
                    q = s && p.regexJPI.test(s.type || "") ? j.formatNum(j.getNum(RegExp.$1)) : 0;
                if (q && r && (r.description || r.name)) {
                    if (j.compareNums(q, p.version || j.formatNum("0")) > 0) {
                        p.version = q;
                        p.mimeObj = s;
                        p.pluginObj = r;
                        p.mimetype = s.type;
                    }
                }
            },
            query: function() {
                var t = this,
                    s = a,
                    w,
                    v,
                    B,
                    A,
                    z,
                    r,
                    q = navigator.mimeTypes,
                    p = t.isDisabled();
                t.hasRun = 1;
                if (p) {
                    return t;
                }
                r = q.length;
                if (j.isNum(r)) {
                    for (w = 0; w < r; w++) {
                        B = 0;
                        try {
                            B = q[w];
                        } catch (u) {}
                        t.update(B);
                    }
                }
                if (!t.version || j.dbug) {
                    z = j.isArray(s.mimeType) ? s.mimeType : [s.mimeType];
                    for (w = 0; w < z.length; w++) {
                        B = 0;
                        try {
                            B = q[z[w]];
                        } catch (u) {}
                        A = B ? B.enabledPlugin : 0;
                        r = A ? A.length : null;
                        if (j.isNum(r)) {
                            for (v = 0; v < r; v++) {
                                B = 0;
                                try {
                                    B = A[v];
                                } catch (u) {}
                                t.update(B);
                            }
                        }
                    }
                }
                return t;
            }
        },
        navPlugin: {
            hasRun: 0,
            version: "",
            getPlatformNum: function() {
                var q = a,
                    p = 0,
                    r = /Java.*TM.*Platform[^\d]*(\d+)[\.,_]?(\d*)\s*U?(?:pdate)?\s*(\d*)/i,
                    s = j.pd.findNavPlugin({
                        find: r,
                        mimes: q.mimeType,
                        plugins: 1
                    });
                if (s && (r.test(s.name || "") || r.test(s.description || "")) && parseInt(RegExp.$1, 10) >= 5) {
                    p = "1," + RegExp.$1 + "," + (RegExp.$2 ? RegExp.$2 : "0") + "," + (RegExp.$3 ? RegExp.$3 : "0");
                }
                return p;
            },
            getPluginNum: function() {
                var s = this,
                    q = a,
                    p = 0,
                    u,
                    t,
                    r,
                    w,
                    v = 0;
                r = /Java[^\d]*Plug-in/i;
                w = j.pd.findNavPlugin({
                    find: r,
                    num: 1,
                    mimes: q.mimeType,
                    plugins: 1,
                    dbug: v
                });
                if (w) {
                    u = s.checkPluginNum(w.description, r);
                    t = s.checkPluginNum(w.name, r);
                    p = u && t ? j.compareNums(u, t) > 0 ? u : t : u || t;
                }
                if (!p) {
                    r = /Java.*\d.*Plug-in/i;
                    w = j.pd.findNavPlugin({
                        find: r,
                        mimes: q.mimeType,
                        plugins: 1,
                        dbug: v
                    });
                    if (w) {
                        u = s.checkPluginNum(w.description, r);
                        t = s.checkPluginNum(w.name, r);
                        p = u && t ? j.compareNums(u, t) > 0 ? u : t : u || t;
                    }
                }
                return p;
            },
            checkPluginNum: function(s, r) {
                var p, q;
                p = r.test(s) ? j.formatNum(j.getNum(s)) : 0;
                if (p && j.compareNums(p, j.formatNum("10")) >= 0) {
                    q = p.split(j.splitNumRegx);
                    p = j.formatNum("1," + (parseInt(q[0], 10) - 3) + ",0," + q[1]);
                }
                if (p && (j.compareNums(p, j.formatNum("1,3")) < 0 || j.compareNums(p, j.formatNum("2")) >= 0)) {
                    p = 0;
                }
                return p;
            },
            query: function() {
                var t = this,
                    s = a,
                    r,
                    p = 0,
                    q = t.hasRun || !s.navigator.mimeObj;
                t.hasRun = 1;
                if (q) {
                    return t;
                }
                if (!p || j.dbug) {
                    r = t.getPlatformNum();
                    if (r) {
                        p = r;
                    }
                }
                if (!p || j.dbug) {
                    r = t.getPluginNum();
                    if (r) {
                        p = r;
                    }
                }
                if (p) {
                    t.version = j.formatNum(p);
                }
                return t;
            }
        },
        applet: {
            codebase: {
                isMin: function(p) {
                    this.$$ = a;
                    return j.codebase.isMin(this, p);
                },
                search: function() {
                    this.$$ = a;
                    return j.codebase.search(this);
                },
                DIGITMAX: [
                    [15, 128],
                    [6, 0, 512], 0, [1, 5, 2, 256], 0, [1, 4, 1, 1],
                    [1, 4, 0, 64],
                    [1, 3, 2, 32]
                ],
                DIGITMIN: [1, 0, 0, 0],
                Upper: ["999", "10", "5,0,20", "1,5,0,20", "1,4,1,20", "1,4,1,2", "1,4,1", "1,4"],
                Lower: ["10", "5,0,20", "1,5,0,20", "1,4,1,20", "1,4,1,2", "1,4,1", "1,4", "0"],
                convert: [function(r, q) {
                    return q ? [parseInt(r[0], 10) > 1 ? "99" : parseInt(r[1], 10) + 3 + "", r[3], "0", "0"] : ["1", parseInt(r[0], 10) - 3 + "", "0", r[1]];
                }, function(r, q) {
                    return q ? [r[1], r[2], r[3] + "0", "0"] : ["1", r[0], r[1], r[2].substring(0, r[2].length - 1 || 1)];
                }, 0, function(r, q) {
                    return q ? [r[0], r[1], r[2], r[3] + "0"] : [r[0], r[1], r[2], r[3].substring(0, r[3].length - 1 || 1)];
                }, 0, 1, function(r, q) {
                    return q ? [r[0], r[1], r[2], r[3] + "0"] : [r[0], r[1], r[2], r[3].substring(0, r[3].length - 1 || 1)];
                }, 1]
            },
            results: [
                [null, null],
                [null, null],
                [null, null],
                [null, null]
            ],
            getResult: function() {
                var q = this,
                    s = q.results,
                    p,
                    r = [];
                for (p = s.length - 1; p >= 0; p--) {
                    r = s[p];
                    if (r[0]) {
                        break;
                    }
                }
                r = [].concat(r);
                return r;
            },
            DummySpanTagHTML: 0,
            HTML: [0, 0, 0, 0],
            active: [0, 0, 0, 0],
            DummyObjTagHTML: 0,
            DummyObjTagHTML2: 0,
            allowed: [1, 1, 1, 1],
            VerifyTagsHas: function(q) {
                var r = this,
                    p;
                for (p = 0; p < r.allowed.length; p++) {
                    if (r.allowed[p] === q) {
                        return 1;
                    }
                }
                return 0;
            },
            saveAsVerifyTagsArray: function(r) {
                var q = this,
                    p;
                if (j.isArray(r)) {
                    for (p = 1; p < q.allowed.length; p++) {
                        if (r.length > p - 1 && j.isNum(r[p - 1])) {
                            if (r[p - 1] < 0) {
                                r[p - 1] = 0;
                            }
                            if (r[p - 1] > 3) {
                                r[p - 1] = 3;
                            }
                            q.allowed[p] = r[p - 1];
                        }
                    }
                    q.allowed[0] = q.allowed[3];
                }
            },
            setVerifyTagsArray: function(r) {
                var q = this,
                    p = a;
                if (p.getVersionDone === null) {
                    q.saveAsVerifyTagsArray(p.getVerifyTagsDefault());
                }
                if (j.dbug) {
                    q.saveAsVerifyTagsArray([3, 3, 3]);
                } else {
                    if (r) {
                        q.saveAsVerifyTagsArray(r);
                    }
                }
            },
            isDisabled: {
                single: function(q) {
                    var p = this;
                    if (p.all()) {
                        return 1;
                    }
                    if (q == 1) {
                        return !j.DOM.isEnabled.objectTag();
                    }
                    if (q == 2) {
                        return p.AppletTag();
                    }
                    if (q === 0) {
                        return j.codebase.isDisabled();
                    }
                    if (q == 3) {
                        return !j.DOM.isEnabled.objectTagUsingActiveX();
                    }
                    return 1;
                },
                all_: null,
                all: function() {
                    var r = this,
                        t = a,
                        q = t.navigator,
                        p,
                        s = j.browser;
                    if (r.all_ === null) {
                        if (s.isOpera && j.compareNums(s.verOpera, "13,0,0,0") < 0 && !q.javaEnabled() || r.AppletTag() && !j.DOM.isEnabled.objectTag() || !q.mimeObj && !s.isIE) {
                            p = 1;
                        } else {
                            p = 0;
                        }
                        r.all_ = p;
                    }
                    return r.all_;
                },
                AppletTag: function() {
                    var q = a,
                        p = q.navigator;
                    return j.browser.isIE ? !p.javaEnabled() : 0;
                },
                VerifyTagsDefault_1: function() {
                    var q = j.browser,
                        p = 1;
                    if (q.isIE && !q.ActiveXEnabled) {
                        p = 0;
                    }
                    if (q.isIE && q.verIE < 9 || q.verGecko && j.compareNums(q.verGecko, j.formatNum("2")) < 0 || q.isSafari && (!q.verSafari || j.compareNums(q.verSafari, j.formatNum("4")) < 0) || q.isOpera && j.compareNums(q.verOpera, j.formatNum("11")) < 0) {
                        p = 0;
                    }
                    return p;
                }
            },
            can_Insert_Query: function(s) {
                var q = this,
                    r = q.results[0][0],
                    p = q.getResult()[0];
                if (q.HTML[s] || s === 0 && r !== null && !q.isRange(r) || s === 0 && p && !q.isRange(p)) {
                    return 0;
                }
                return !q.isDisabled.single(s);
            },
            can_Insert_Query_Any: function() {
                var q = this,
                    p;
                for (p = 0; p < q.results.length; p++) {
                    if (q.can_Insert_Query(p)) {
                        return 1;
                    }
                }
                return 0;
            },
            should_Insert_Query: function(s) {
                var r = this,
                    t = r.allowed,
                    q = a,
                    p = r.getResult()[0];
                p = p && (s > 0 || !r.isRange(p));
                if (!r.can_Insert_Query(s) || t[s] === 0) {
                    return 0;
                }
                if (t[s] == 3 || t[s] == 2.8 && !p) {
                    return 1;
                }
                if (!q.nonAppletDetectionOk(q.version0)) {
                    if (t[s] == 2 || t[s] == 1 && !p) {
                        return 1;
                    }
                }
                return 0;
            },
            should_Insert_Query_Any: function() {
                var q = this,
                    p;
                for (p = 0; p < q.allowed.length; p++) {
                    if (q.should_Insert_Query(p)) {
                        return 1;
                    }
                }
                return 0;
            },
            query: function(t) {
                var p = this,
                    s = a,
                    x = null,
                    y = null,
                    q = p.results,
                    r,
                    v,
                    u = p.HTML[t];
                if (!u || !u.obj() || q[t][0] || s.bridgeDisabled) {
                    return;
                }
                r = u.obj();
                v = u.readyState();
                if (!j.isNum(v) || v == 4) {
                    try {
                        x = j.getNum(r.getVersion() + "");
                        y = r.getVendor() + "";
                        r.statusbar(j.win.loaded ? " " : " ");
                    } catch (w) {}
                    if (x && j.isStrNum(x) && !(j.dbug && s.OTF < 3)) {
                        q[t] = [x, y];
                        p.active[t] = 2;
                    }
                }
            },
            isRange: function(p) {
                return (/^[<>]/.test(p || "") ? p.charAt(0) == ">" ? 1 : -1 : 0);
            },
            setRange: function(q, p) {
                return (q ? q > 0 ? ">" : "<" : "") + (j.isString(p) ? p : "");
            },
            insertJavaTag: function(y, z, p, s, D) {
                var t = a,
                    v = "A.class",
                    A = j.file.getValid(t),
                    x = A.name + A.ext,
                    w = A.path;
                var u = ["archive", x, "code", v],
                    E = (s ? ["width", s] : []).concat(D ? ["height", D] : []),
                    r = ["mayscript", "true"],
                    C = ["scriptable", "true", "codebase_lookup", "false"].concat(r),
                    B = t.navigator,
                    q = !j.browser.isIE && B.mimeObj && B.mimeObj.type ? B.mimeObj.type : t.mimeType[0];
                if (y == 1) {
                    return j.browser.isIE ? j.DOM.insert("object", ["type", q].concat(E), ["codebase", w].concat(u).concat(C), p, t, 0, z) : j.DOM.insert("object", ["type", q].concat(E), ["codebase", w].concat(u).concat(C), p, t, 0, z);
                }
                if (y == 2) {
                    return j.browser.isIE ? j.DOM.insert("applet", ["alt", p].concat(r).concat(u).concat(E), ["codebase", w].concat(C), p, t, 0, z) : j.DOM.insert("applet", ["codebase", w, "alt", p].concat(r).concat(u).concat(E), [].concat(C), p, t, 0, z);
                }
                if (y == 3) {
                    return j.browser.isIE ? j.DOM.insert("object", ["classid", t.classID].concat(E), ["codebase", w].concat(u).concat(C), p, t, 0, z) : j.DOM.insert();
                }
                if (y == 4) {
                    return j.DOM.insert("embed", ["codebase", w].concat(u).concat(["type", q]).concat(C).concat(E), [], p, t, 0, z);
                }
                return j.DOM.insert();
            },
            insert_Query_Any: function(u) {
                var t = this,
                    s = a,
                    v = t.results,
                    w = t.HTML,
                    r = j.DOM.altHTML,
                    q,
                    p = j.file.getValid(s);
                if (t.should_Insert_Query(0)) {
                    if (s.OTF < 2) {
                        s.OTF = 2;
                    }
                    v[0] = [0, 0];
                    q = u ? t.codebase.isMin(u) : t.codebase.search();
                    if (q) {
                        v[0][0] = u ? t.setRange(q, u) : q;
                    }
                    t.active[0] = q ? 1.5 : -1;
                }
                if (!p) {
                    return t.getResult();
                }
                if (!t.DummySpanTagHTML) {
                    t.DummySpanTagHTML = j.DOM.insert("", [], [], r);
                }
                if (t.should_Insert_Query(1)) {
                    if (s.OTF < 2) {
                        s.OTF = 2;
                    }
                    w[1] = t.insertJavaTag(1, 0, r);
                    v[1] = [0, 0];
                    t.query(1);
                }
                if (t.should_Insert_Query(2)) {
                    if (s.OTF < 2) {
                        s.OTF = 2;
                    }
                    w[2] = t.insertJavaTag(2, 0, r);
                    v[2] = [0, 0];
                    t.query(2);
                }
                if (t.should_Insert_Query(3)) {
                    if (s.OTF < 2) {
                        s.OTF = 2;
                    }
                    w[3] = t.insertJavaTag(3, 0, r);
                    v[3] = [0, 0];
                    t.query(3);
                }
                if (j.DOM.isEnabled.objectTag()) {
                    if (!t.DummyObjTagHTML && (w[1] || w[2])) {
                        t.DummyObjTagHTML = j.DOM.insert("object", ["type", s.mimeType_dummy], [], r);
                    }
                    if (!t.DummyObjTagHTML2 && w[3]) {
                        t.DummyObjTagHTML2 = j.DOM.insert("object", ["classid", s.classID_dummy], [], r);
                    }
                }
                s.NOTF.init();
                return t.getResult();
            }
        },
        NOTF: {
            winLoaded: 0,
            count: 0,
            countMax: 25,
            intervalLength: 250,
            init: function() {
                var q = this,
                    p = a;
                if (p.OTF < 3 && q.shouldContinueQuery()) {
                    p.OTF = 3;
                    if (!j.win.loaded) {
                        j.win.loadPrvtHndlrs.push([q.onWinLoadQuery, q]);
                    }
                    j.ev.setTimeout(q.onIntervalQuery, q.intervalLength);
                }
            },
            shouldContinueQuery: function() {
                var u = this,
                    s = a,
                    r = s.applet,
                    q,
                    t = 0,
                    p = 0;
                if (j.win.loaded && u.count > u.countMax) {
                    return p;
                }
                for (q = 0; q < r.results.length; q++) {
                    if (r.HTML[q]) {
                        if (!j.win.loaded && u.count > u.countMax && j.codebase.pluginMayBeHanging(r.HTML[q].span)) {
                            t = 1;
                            r.HTML[q].DELETE = 1;
                        }
                        if (!t && !r.results[q][0] && (r.allowed[q] >= 2 || r.allowed[q] == 1 && !r.getResult()[0]) && u.isAppletActive(q) >= 0) {
                            p = 1;
                        }
                    }
                }
                return p;
            },
            isJavaActive: function(s) {
                var u = this,
                    r = a,
                    p,
                    q,
                    t = -9;
                for (p = 0; p < r.applet.HTML.length; p++) {
                    q = u.isAppletActive(p, s);
                    if (q > t) {
                        t = q;
                    }
                }
                return t;
            },
            isAppletActive: function(t, u) {
                var v = this,
                    q = a,
                    A = q.navigator,
                    p = q.applet,
                    w = p.HTML[t],
                    s = p.active,
                    z,
                    r = 0,
                    y,
                    B = s[t];
                if (u || B >= 1.5 || !w || !w.span) {
                    return B;
                }
                y = j.DOM.getTagStatus(w, p.DummySpanTagHTML, p.DummyObjTagHTML, p.DummyObjTagHTML2, v.count, v.winLoaded);
                for (z = 0; z < s.length; z++) {
                    if (s[z] > 0) {
                        r = 1;
                    }
                }
                if (y != 1) {
                    B = y;
                } else {
                    if (j.browser.isIE || q.version0 && A.javaEnabled() && A.mimeObj && (w.tagName == "object" || r)) {
                        B = 1;
                    } else {
                        B = 0;
                    }
                }
                s[t] = B;
                return B;
            },
            onWinLoadQuery: function(p, q) {
                p.ev.setTimeout(q.onWinLoadQuery2, Math.floor(q.intervalLength / 2));
            },
            onWinLoadQuery2: function() {
                var p = a.NOTF;
                p.winLoaded = 1;
                if (a.OTF == 3) {
                    p.queryCompleted(p.queryAllApplets());
                }
            },
            onIntervalQuery: function() {
                var q = a.NOTF,
                    p;
                q.count++;
                if (a.OTF == 3) {
                    p = q.queryAllApplets();
                    if (!q.shouldContinueQuery()) {
                        q.queryCompleted(p);
                    }
                }
                if (a.OTF == 3) {
                    j.ev.setTimeout(q.onIntervalQuery, q.intervalLength);
                }
            },
            queryAllApplets: function() {
                var t = this,
                    s = a,
                    r = s.applet,
                    q,
                    p;
                for (q = 0; q < r.results.length; q++) {
                    r.query(q);
                }
                p = r.getResult();
                return p;
            },
            queryCompleted: function(q) {
                var t = this,
                    s = a,
                    r = s.applet,
                    p;
                if (s.OTF >= 4) {
                    return;
                }
                s.OTF = 4;
                t.isJavaActive();
                for (p = 0; p < r.HTML.length; p++) {
                    if (r.HTML[p] && r.HTML[p].DELETE) {
                        j.DOM.emptyNode(r.HTML[p].span);
                        r.HTML[p].span = null;
                    }
                }
                s.setPluginStatus(q[0], q[1], 0);
                j.ev.callArray(s.DoneHndlrs);
            }
        }
    };
    j.addPlugin("java", a);
    var m = {
        getVersion: function() {
            var r = this,
                p = null,
                q;
            if ((!q || j.dbug) && r.nav.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.nav.query().version) {
                p = r.nav.version;
            }
            if ((!q || j.dbug) && r.axo.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.axo.query().version) {
                p = r.axo.version;
            }
            r.installed = p ? 1 : q ? 0 : -1;
            r.version = j.formatNum(p);
        },
        nav: {
            hasRun: 0,
            installed: 0,
            version: null,
            mimeType: "application/x-devalvrx",
            query: function() {
                var s = this,
                    p,
                    r,
                    q = s.hasRun || !j.hasMimeType(s.mimeType);
                s.hasRun = 1;
                if (q) {
                    return s;
                }
                r = j.pd.findNavPlugin({
                    find: "DevalVR.*Plug-?in",
                    mimes: s.mimeType,
                    plugins: "DevalVR 3D Plugin"
                });
                if (r && /Plug-?in(.*)/i.test(r.description || "")) {
                    p = j.getNum(RegExp.$1);
                }
                if (r) {
                    s.installed = 1;
                }
                if (p) {
                    s.version = p;
                }
                return s;
            }
        },
        axo: {
            hasRun: 0,
            installed: 0,
            version: null,
            progID: ["DevalVRXCtrl.DevalVRXCtrl", "DevalVRXCtrl.DevalVRXCtrl.1"],
            classID: "clsid:5D2CF9D0-113A-476B-986F-288B54571614",
            query: function() {
                var s = this,
                    v = m,
                    q,
                    p,
                    u,
                    r,
                    t = s.hasRun;
                s.hasRun = 1;
                if (t) {
                    return s;
                }
                for (p = 0; p < s.progID.length; p++) {
                    u = j.getAXO(s.progID[p]);
                    if (u) {
                        s.installed = 1;
                        if (!j.dbug) {
                            break;
                        }
                    }
                }
                if (u && j.DOM.isEnabled.objectTagUsingActiveX()) {
                    r = j.pd.getPROP(j.DOM.insert("object", ["classid", s.classID], ["src", ""], "", v).obj(), "pluginversion");
                    if (r && r.toString) {
                        q = "00000000" + r.toString(16);
                        q = q.substr(q.length - 8, 8);
                        q = parseInt(q.substr(0, 2) || "0", 16) + "," + parseInt(q.substr(2, 2) || "0", 16) + "," + parseInt(q.substr(4, 2) || "0", 16) + "," + parseInt(q.substr(6, 2) || "0", 16);
                        if (q) {
                            s.version = q;
                        }
                    }
                }
                return s;
            }
        }
    };
    j.addPlugin("devalvr", m);
    var e = {
        mimeType: "application/x-shockwave-flash",
        setPluginStatus: function(s, p) {
            var r = this,
                q;
            r.installed = p ? 1 : s ? 0 : -1;
            r.version = j.formatNum(p);
            q = r.installed == -1 || r.instance.version;
            q = q || r.axo.version;
            r.getVersionDone = q ? 1 : 0;
        },
        getVersion: function(t, q) {
            var r = this,
                p = null,
                s = 0;
            if ((!s || j.dbug) && r.navPlugin.query().installed) {
                s = 1;
            }
            if ((!p || j.dbug) && r.navPlugin.query().version) {
                p = r.navPlugin.version;
            }
            if ((!s || j.dbug) && r.axo.query().installed) {
                s = 1;
            }
            if ((!p || j.dbug) && r.axo.query().version) {
                p = r.axo.version;
            }
            if ((!s && !p || q || j.dbug) && r.instance.query().version) {
                s = 1;
                p = r.instance.version;
            }
            r.setPluginStatus(s, p);
        },
        navPlugin: {
            hasRun: 0,
            installed: 0,
            version: null,
            getNum: function(q) {
                if (!q) {
                    return null;
                }
                var p = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(q);
                return p ? p[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null;
            },
            query: function() {
                var s = this,
                    q = e,
                    p,
                    t,
                    r = s.hasRun || !j.hasMimeType(q.mimeType);
                s.hasRun = 1;
                if (r) {
                    return s;
                }
                t = j.pd.findNavPlugin({
                    find: "Shockwave.*Flash",
                    mimes: q.mimeType,
                    plugins: ["Shockwave Flash"]
                });
                if (t) {
                    s.installed = 1;
                    if (t.description) {
                        p = s.getNum(t.description);
                    }
                }
                if (p) {
                    p = j.getPluginFileVersion(t, p);
                }
                if (p) {
                    s.version = p;
                }
                return s;
            }
        },
        axo: {
            hasRun: 0,
            installed: 0,
            version: null,
            progID: "ShockwaveFlash.ShockwaveFlash",
            classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
            query: function() {
                var r = this,
                    q,
                    p,
                    u,
                    s = r.hasRun;
                r.hasRun = 1;
                if (s) {
                    return r;
                }
                for (p = 0; p < 10; p++) {
                    u = j.getAXO(r.progID + (p ? "." + p : ""));
                    if (u) {
                        r.installed = 1;
                        q = 0;
                        try {
                            q = j.getNum(u.GetVariable("$version") + "");
                        } catch (t) {}
                        if (q) {
                            r.version = q;
                            if (!j.dbug) {
                                break;
                            }
                        }
                    }
                }
                return r;
            }
        },
        instance: {
            hasRun: 0,
            version: null,
            HTML: null,
            isEnabled: function() {
                var q = this,
                    r = e,
                    p = 1;
                if (q.hasRun || j.DOM.isEnabled.objectTagUsingActiveX() || !j.DOM.isEnabled.objectTag() || !j.hasMimeType(r.mimeType)) {
                    p = 0;
                }
                return p;
            },
            query: function() {
                var p = this,
                    r = e,
                    q = p.isEnabled();
                p.hasRun = 1;
                if (q) {
                    p.HTML = j.DOM.insert("object", ["type", r.mimeType], ["play", "false", "menu", "false"], "", r);
                    try {
                        p.version = j.getNum(p.HTML.obj().GetVariable("$version") + "");
                    } catch (s) {}
                }
                return p;
            }
        }
    };
    j.addPlugin("flash", e);
    var k = {
        getVersion: function() {
            var r = this,
                p = null,
                q;
            if ((!q || j.dbug) && r.nav.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.nav.query().version) {
                p = r.nav.version;
            }
            if ((!q || j.dbug) && r.axo.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.axo.query().version) {
                p = r.axo.version;
            }
            r.installed = p ? 1 : q ? 0 : -1;
            r.version = j.formatNum(p);
        },
        nav: {
            hasRun: 0,
            installed: 0,
            version: null,
            mimeType: "application/x-director",
            query: function() {
                var s = this,
                    p,
                    r,
                    q = s.hasRun || !j.hasMimeType(s.mimeType);
                s.hasRun = 1;
                if (q) {
                    return s;
                }
                r = j.pd.findNavPlugin({
                    find: "Shockwave\\s*for\\s*Director",
                    mimes: s.mimeType,
                    plugins: "Shockwave for Director"
                });
                if (r && r.description) {
                    p = j.getNum(r.description + "");
                }
                if (p) {
                    p = j.getPluginFileVersion(r, p);
                }
                if (r) {
                    s.installed = 1;
                }
                if (p) {
                    s.version = p;
                }
                return s;
            }
        },
        axo: {
            hasRun: 0,
            installed: null,
            version: null,
            progID: ["SWCtl.SWCtl", "SWCtl.SWCtl.1", "SWCtl.SWCtl.7", "SWCtl.SWCtl.8", "SWCtl.SWCtl.11", "SWCtl.SWCtl.12"],
            classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
            query: function() {
                var t = this,
                    v,
                    p,
                    q,
                    w,
                    s,
                    r = !t.hasRun;
                t.hasRun = 1;
                if (r) {
                    for (p = 0; p < t.progID.length; p++) {
                        v = j.getAXO(t.progID[p]);
                        if (v) {
                            t.installed = 1;
                            w = "";
                            try {
                                w = v.ShockwaveVersion("") + "";
                            } catch (u) {}
                            if (/(\d[\d\.\,]*)(?:\s*r\s*(\d+))?/i.test(w)) {
                                s = RegExp.$2;
                                q = j.formatNum(RegExp.$1);
                                if (s) {
                                    q = q.split(j.splitNumRegx);
                                    q[3] = s;
                                    q = q.join(",");
                                }
                            }
                            if (q) {
                                t.version = q;
                                if (!j.dbug) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return t;
            }
        }
    };
    j.addPlugin("shockwave", k);
    var o = {
        setPluginStatus: function(p, r) {
            var q = this;
            if (p) {
                q.version = j.formatNum(p);
            }
            q.installed = q.version ? 1 : r ? 0 : -1;
            q.getVersionDone = q.installed === 0 ? 0 : 1;
        },
        getVersion: function(t, q) {
            var r = this,
                s,
                p = null;
            if ((!s || j.dbug) && r.nav.query().installed) {
                s = 1;
            }
            if ((!s || j.dbug) && r.axo.query().installed) {
                s = 1;
            }
            if ((!p || j.dbug) && r.axo.query().version) {
                p = r.axo.version;
            }
            if ((!s && !p || q || j.dbug) && r.FirefoxPlugin.query().version) {
                s = 1;
                p = r.FirefoxPlugin.version;
            }
            r.setPluginStatus(p, s);
        },
        mimeType: ["application/x-ms-wmp", "application/asx", "application/x-mplayer2", "video/x-ms-asf", "video/x-ms-wm", "video/x-ms-asf-plugin"],
        find: ["Microsoft.*Windows\\s*Media\\s*Player.*Firefox.*Plug-?in", "Windows\\s*Media\\s*Player\\s*Plug-?in\\s*Dynamic\\s*Link\\s*Library", "Flip4Mac.*Windows\\s*Media.*Plug-?in|Flip4Mac.*WMV.*Plug-?in"],
        avoid: "Totem|VLC|RealPlayer|Helix",
        plugins: ["Microsoft" + String.fromCharCode(174) + " Windows Media Player Firefox Plugin", "Windows Media Player Plug-in Dynamic Link Library"],
        nav: {
            hasRun: 0,
            installed: 0,
            query: function() {
                var s = this,
                    p = o,
                    r,
                    q = s.hasRun || !j.hasMimeType(p.mimeType);
                s.hasRun = 1;
                if (q) {
                    return s;
                }
                r = j.pd.findNavPlugin({
                    find: p.find.join("|"),
                    avoid: p.avoid,
                    mimes: p.mimeType,
                    plugins: p.plugins
                });
                if (r) {
                    s.installed = 1;
                }
                return s;
            }
        },
        FirefoxPlugin: {
            hasRun: 0,
            version: null,
            isDisabled: function() {
                var p = this,
                    r = o,
                    q = j.browser;
                if (p.hasRun || q.isGecko && j.compareNums(q.verGecko, j.formatNum("1.8")) < 0 || q.isOpera && j.compareNums(q.verOpera, j.formatNum("10")) < 0 || j.DOM.isEnabled.objectTagUsingActiveX() || !j.hasMimeType(r.mimeType) || !j.pd.findNavPlugin({
                        find: r.find[0],
                        avoid: r.avoid,
                        mimes: r.mimeType,
                        plugins: r.plugins[0]
                    })) {
                    return 1;
                }
                return 0;
            },
            query: function() {
                var q = this,
                    r = o,
                    p,
                    s = q.isDisabled();
                q.hasRun = 1;
                if (s) {
                    return q;
                }
                p = j.pd.getPROP(j.DOM.insert("object", ["type", j.hasMimeType(r.mimeType).type, "data", ""], ["src", ""], "", r).obj(), "versionInfo");
                if (p) {
                    q.version = j.getNum(p);
                }
                return q;
            }
        },
        axo: {
            hasRun: 0,
            installed: null,
            version: null,
            progID: ["WMPlayer.OCX", "WMPlayer.OCX.7"],
            classID: "clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
            query: function() {
                var s = this,
                    t,
                    p,
                    q,
                    r = !s.hasRun;
                s.hasRun = 1;
                if (r) {
                    for (p = 0; p < s.progID.length; p++) {
                        t = j.getAXO(s.progID[p]);
                        if (t) {
                            s.installed = 1;
                            q = j.pd.getPROP(t, "versionInfo", 0);
                            if (q) {
                                q = j.getNum(q);
                            }
                            if (q) {
                                s.version = q;
                                if (!j.dbug) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return s;
            }
        }
    };
    j.addPlugin("windowsmediaplayer", o);
    var h = {
        getVersion: function() {
            var r = this,
                p = null,
                q = 0;
            if ((!q || j.dbug) && r.nav.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.nav.query().version) {
                p = r.nav.version;
            }
            if ((!q || j.dbug) && r.axo.query().installed) {
                q = 1;
            }
            if ((!p || j.dbug) && r.axo.query().version) {
                p = r.axo.version;
            }
            r.version = j.formatNum(p);
            r.installed = p ? 1 : q ? 0 : -1;
        },
        nav: {
            hasRun: 0,
            installed: 0,
            version: null,
            mimeType: ["application/x-silverlight", "application/x-silverlight-2"],
            query: function() {
                var t = this,
                    p,
                    q,
                    s,
                    r = t.hasRun || !j.hasMimeType(t.mimeType);
                t.hasRun = 1;
                if (r) {
                    return t;
                }
                s = j.pd.findNavPlugin({
                    find: "Silverlight.*Plug-?in",
                    mimes: t.mimeType,
                    plugins: "Silverlight Plug-In"
                });
                if (s) {
                    t.installed = 1;
                }
                if (s && s.description) {
                    q = j.formatNum(j.getNum(s.description + ""));
                }
                if (q) {
                    p = q.split(j.splitNumRegx);
                    if (parseInt(p[0], 10) < 2 && parseInt(p[2], 10) >= 30226) {
                        p[0] = "2";
                    }
                    q = p.join(",");
                }
                if (q) {
                    t.version = q;
                }
                return t;
            }
        },
        axo: {
            hasRun: 0,
            installed: 0,
            version: null,
            progID: "AgControl.AgControl",
            maxdigit: [20, 10, 10, 100, 100, 10],
            mindigit: [0, 0, 0, 0, 0, 0],
            IsVersionSupported: function(s, q) {
                var p = this;
                try {
                    return p.testVersion ? j.compareNums(j.formatNum(p.testVersion.join(",")), j.formatNum(q.join(","))) >= 0 : s.IsVersionSupported(p.format(q));
                } catch (r) {}
                return 0;
            },
            format: function(q) {
                var p = this;
                return q[0] + "." + q[1] + "." + q[2] + p.make2digits(q[3]) + p.make2digits(q[4]) + "." + q[5];
            },
            make2digits: function(p) {
                return (p < 10 ? "0" : "") + p + "";
            },
            query: function() {
                var r = this,
                    q,
                    v,
                    s = r.hasRun;
                r.hasRun = 1;
                if (s) {
                    return r;
                }
                v = j.getAXO(r.progID);
                if (v) {
                    r.installed = 1;
                }
                if (v && r.IsVersionSupported(v, r.mindigit)) {
                    var p = [].concat(r.mindigit),
                        u,
                        t = 0;
                    for (q = 0; q < r.maxdigit.length; q++) {
                        u = 0;
                        while (r.maxdigit[q] - r.mindigit[q] > 1 && u < 20) {
                            u++;
                            t++;
                            p[q] = Math.round((r.maxdigit[q] + r.mindigit[q]) / 2);
                            if (r.IsVersionSupported(v, p)) {
                                r.mindigit[q] = p[q];
                            } else {
                                r.maxdigit[q] = p[q];
                            }
                        }
                        p[q] = r.mindigit[q];
                    }
                    r.version = r.format(p);
                }
                return r;
            }
        }
    };
    j.addPlugin("silverlight", h);
    var f = {
        compareNums: function(s, r) {
            var A = s.split(j.splitNumRegx),
                y = r.split(j.splitNumRegx),
                w,
                q,
                p,
                v,
                u,
                z;
            for (w = 0; w < Math.min(A.length, y.length); w++) {
                z = /([\d]+)([a-z]?)/.test(A[w]);
                q = parseInt(RegExp.$1, 10);
                v = w == 2 && RegExp.$2.length > 0 ? RegExp.$2.charCodeAt(0) : -1;
                z = /([\d]+)([a-z]?)/.test(y[w]);
                p = parseInt(RegExp.$1, 10);
                u = w == 2 && RegExp.$2.length > 0 ? RegExp.$2.charCodeAt(0) : -1;
                if (q != p) {
                    return q > p ? 1 : -1;
                }
                if (w == 2 && v != u) {
                    return v > u ? 1 : -1;
                }
            }
            return 0;
        },
        setPluginStatus: function(r, p, s) {
            var q = this;
            q.installed = p ? 1 : s ? s > 0 ? 0.7 : -0.1 : r ? 0 : -1;
            if (p) {
                q.version = j.formatNum(p);
            }
            q.getVersionDone = q.installed == 0.7 || q.installed == -0.1 ? 0 : 1;
            j.codebase.emptyGarbage();
        },
        getVersion: function(s) {
            var t = this,
                r,
                p = null,
                q;
            if ((!r || j.dbug) && t.nav.query().installed) {
                r = 1;
            }
            if ((!p || j.dbug) && t.nav.query().version) {
                p = t.nav.version;
            }
            if ((!r || j.dbug) && t.axo.query().installed) {
                r = 1;
            }
            if ((!p || j.dbug) && t.axo.query().version) {
                p = t.axo.version;
            }
            if (!p || j.dbug) {
                q = t.codebase.isMin(s);
                if (q) {
                    t.setPluginStatus(0, 0, q);
                    return;
                }
            }
            if (!p || j.dbug) {
                q = t.codebase.search();
                if (q) {
                    r = 1;
                    p = q;
                }
            }
            t.setPluginStatus(r, p, 0);
        },
        nav: {
            hasRun: 0,
            installed: 0,
            version: null,
            mimeType: ["application/x-vlc-plugin", "application/x-google-vlc-plugin", "application/mpeg4-muxcodetable", "application/x-matroska", "application/xspf+xml", "video/divx", "video/webm", "video/x-mpeg", "video/x-msvideo", "video/ogg", "audio/x-flac", "audio/amr", "audio/amr"],
            find: "VLC.*Plug-?in",
            find2: "VLC|VideoLAN",
            avoid: "Totem|Helix",
            plugins: ["VLC Web Plugin", "VLC Multimedia Plug-in", "VLC Multimedia Plugin", "VLC multimedia plugin"],
            query: function() {
                var s = this,
                    p,
                    r,
                    q = s.hasRun || !j.hasMimeType(s.mimeType);
                s.hasRun = 1;
                if (q) {
                    return s;
                }
                r = j.pd.findNavPlugin({
                    find: s.find,
                    avoid: s.avoid,
                    mimes: s.mimeType,
                    plugins: s.plugins
                });
                if (r) {
                    s.installed = 1;
                    if (r.description) {
                        p = j.getNum(r.description + "", "[\\d][\\d\\.]*[a-z]*");
                    }
                    if (p) {
                        s.version = p;
                    }
                }
                return s;
            }
        },
        axo: {
            hasRun: 0,
            installed: 0,
            version: null,
            progID: "VideoLAN.VLCPlugin",
            query: function() {
                var q = this,
                    s,
                    p,
                    r = q.hasRun;
                q.hasRun = 1;
                if (r) {
                    return q;
                }
                s = j.getAXO(q.progID);
                if (s) {
                    q.installed = 1;
                    p = j.getNum(j.pd.getPROP(s, "VersionInfo"), "[\\d][\\d\\.]*[a-z]*");
                    if (p) {
                        q.version = p;
                    }
                }
                return q;
            }
        },
        codebase: {
            classID: "clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",
            isMin: function(p) {
                this.$$ = f;
                return j.codebase.isMin(this, p);
            },
            search: function() {
                this.$$ = f;
                return j.codebase.search(this);
            },
            DIGITMAX: [
                [11, 11, 16]
            ],
            DIGITMIN: [0, 0, 0, 0],
            Upper: ["999"],
            Lower: ["0"],
            convert: [1]
        }
    };
    j.addPlugin("vlc", f);
    var c = {
        setPluginStatus: function() {
            var t = this,
                q = t.nav.detected,
                p = t.nav.version,
                v = p,
                r = q > 0;
            var u = t.axo.detected,
                s = t.axo.version,
                x = t.doc.detected,
                w = t.doc.version;
            v = v || s || w;
            r = r || u > 0 || x > 0;
            v = v || null;
            t.version = j.formatNum(v);
            r = v ? 1 : r ? 0 : -1;
            if (r == -1) {
                r = u == -0.5 || x == -0.5 ? -0.15 : j.browser.isIE && (!j.browser.ActiveXEnabled || j.browser.ActiveXFilteringEnabled) ? -1.5 : -1;
            }
            t.installed = r;
        },
        getVersion: function() {
            var p = this,
                q = 0;
            if ((!q || j.dbug) && p.nav.query().version) {
                q = 1;
            }
            if ((!q || j.dbug) && p.axo.query().version) {
                q = 1;
            }
            if ((!q || j.dbug) && p.doc.query().version) {
                q = 1;
            }
            p.setPluginStatus();
        },
        nav: {
            detected: 0,
            version: null,
            mimeType: ["application/pdf", "application/vnd.adobe.pdfxml"],
            find: "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in",
            plugins: ["Adobe Acrobat", "Adobe Acrobat and Reader Plug-in", "Adobe Reader Plugin"],
            query: function() {
                var r = this,
                    q,
                    p = null;
                if (r.detected || !j.hasMimeType(r.mimeType)) {
                    return r;
                }
                q = j.pd.findNavPlugin({
                    find: r.find,
                    mimes: r.mimeType,
                    plugins: r.plugins
                });
                r.detected = q ? 1 : -1;
                if (q) {
                    p = j.getNum(q.description) || j.getNum(q.name);
                    p = j.getPluginFileVersion(q, p);
                    if (!p) {
                        p = r.attempt3();
                    }
                    if (p) {
                        r.version = p;
                    }
                }
                return r;
            },
            attempt3: function() {
                var p = null;
                if (j.OS == 1) {
                    if (j.hasMimeType("application/vnd.adobe.pdfxml")) {
                        p = "9";
                    } else {
                        if (j.hasMimeType("application/vnd.adobe.x-mars")) {
                            p = "8";
                        } else {
                            if (j.hasMimeType("application/vnd.adobe.xfdf")) {
                                p = "6";
                            }
                        }
                    }
                }
                return p;
            }
        },
        activexQuery: function(w) {
            var u = "",
                q = null,
                t,
                p,
                s,
                r;
            try {
                if (w) {
                    u = w.GetVersions();
                }
            } catch (v) {}
            if (u && j.isString(u)) {
                t = /\=\s*[\d\.]+/g;
                r = u.match(t);
                if (r) {
                    for (p = 0; p < r.length; p++) {
                        s = j.formatNum(j.getNum(r[p]));
                        if (s && (!q || j.compareNums(s, q) > 0)) {
                            q = s;
                        }
                    }
                }
            }
            return q;
        },
        axo: {
            detected: 0,
            version: null,
            progID: ["AcroPDF.PDF", "AcroPDF.PDF.1", "PDF.PdfCtrl", "PDF.PdfCtrl.5", "PDF.PdfCtrl.1"],
            progID_dummy: "AcroDUMMY.DUMMY",
            query: function() {
                var s = this,
                    q = c,
                    t,
                    r = null,
                    p,
                    u;
                if (s.detected) {
                    return s;
                }
                s.detected = -1;
                t = j.getAXO(s.progID_dummy);
                if (!t) {
                    u = j.errObj;
                }
                for (p = 0; p < s.progID.length; p++) {
                    t = j.getAXO(s.progID[p]);
                    if (t) {
                        s.detected = 1;
                        r = q.activexQuery(t);
                        if (!j.dbug && r) {
                            break;
                        }
                    } else {
                        if (u && j.errObj && u !== j.errObj && u.message !== j.errObj.message) {
                            s.detected = -0.5;
                        }
                    }
                }
                if (r) {
                    s.version = r;
                }
                return s;
            }
        },
        doc: {
            detected: 0,
            version: null,
            classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
            classID_dummy: "clsid:CA8A9780-280D-11CF-A24D-BA9876543210",
            DummySpanTagHTML: 0,
            HTML: 0,
            DummyObjTagHTML1: 0,
            DummyObjTagHTML2: 0,
            isDisabled: function() {
                var q = this,
                    p = 0;
                if (q.HTML) {
                    p = 1;
                } else {
                    if (j.dbug) {} else {
                        if (!j.DOM.isEnabled.objectTagUsingActiveX()) {
                            p = 1;
                        }
                    }
                }
                return p;
            },
            query: function() {
                var u = this,
                    p = c,
                    q = null,
                    r = j.DOM.altHTML,
                    s = 1,
                    t = 1,
                    v;
                if (u.isDisabled()) {
                    return u;
                }
                if (!u.DummySpanTagHTML) {
                    u.DummySpanTagHTML = j.DOM.insert("", [], [], r, p, t);
                }
                if (!u.HTML) {
                    u.HTML = j.DOM.insert("object", ["classid", u.classID], [], r, p, t);
                }
                if (!u.DummyObjTagHTML2) {
                    u.DummyObjTagHTML2 = j.DOM.insert("object", ["classid", u.classID_dummy], [], r, p, t);
                }
                v = j.DOM.getTagStatus(u.HTML, u.DummySpanTagHTML, u.DummyObjTagHTML1, u.DummyObjTagHTML2, 0, 0, s);
                q = p.activexQuery(u.HTML.obj());
                u.detected = v > 0 || q ? 1 : v == -0.1 || v == -0.5 ? -0.5 : -1;
                u.version = q ? q : null;
                return u;
            }
        }
    };
    j.addPlugin("adobereader", c);
    var l = {
        OTF: null,
        detectIE3P: 0,
        setPluginStatus: function() {
            var p = this,
                q = p.OTF,
                u = p.doc.result,
                t = p.mime.result,
                s = u > 0 || t > 0;
            var r = p.axo.result;
            s = s || r > 0;
            p.version = null;
            if (q == 3) {
                p.installed = -0.5;
            } else {
                s = s ? 0 : -1;
                if (s == -1) {
                    s = r == -0.5 || u == -0.5 ? -0.15 : j.browser.isIE && (!j.browser.ActiveXEnabled || j.browser.ActiveXFilteringEnabled || !p.detectIE3P) ? -1.5 : -1;
                }
                p.installed = s;
            }
            if (p.verify && p.verify.isEnabled()) {
                p.getVersionDone = 0;
            } else {
                if (p.getVersionDone != 1) {
                    p.getVersionDone = p.installed == -0.5 || p.installed == -1 && p.doc.isDisabled() < 2 ? 0 : 1;
                }
            }
        },
        getVersion: function(s, r, t) {
            var p = this,
                q = false,
                v = p.doc,
                u = p.verify;
            if (j.isDefined(t)) {
                p.detectIE3P = t ? 1 : 0;
            }
            if (p.getVersionDone === null) {
                p.OTF = 0;
                if (u) {
                    u.init();
                }
            }
            j.file.save(p, ".pdf", r);
            if (p.getVersionDone === 0) {
                if (u && u.isEnabled() && j.isNum(p.installed) && p.installed >= 0) {
                    return;
                }
                if (v.insertHTMLQuery() > 0) {
                    q = true;
                }
                p.setPluginStatus();
                return;
            }
            if ((!q || j.dbug) && p.mime.query() > 0) {
                q = true;
            }
            if ((!q || j.dbug) && p.axo.query() > 0) {
                q = true;
            }
            if ((!q || j.dbug) && v.insertHTMLQuery() > 0) {
                q = true;
            }
            p.setPluginStatus();
        },
        mime: {
            mimeType: "application/pdf",
            result: 0,
            query: function() {
                var p = this;
                if (!p.result) {
                    p.result = j.hasMimeType(p.mimeType) ? 1 : -1;
                }
                return p.result;
            }
        },
        axo: {
            result: 0,
            progID: ["AcroPDF.PDF", "AcroPDF.PDF.1", "PDF.PdfCtrl", "PDF.PdfCtrl.5", "PDF.PdfCtrl.1"],
            progID_dummy: "AcroDUMMY.DUMMY",
            prodID3rd: ["NitroPDF.IE.ActiveDoc", "PDFXCviewIEPlugin.CoPDFXCviewIEPlugin", "PDFXCviewIEPlugin.CoPDFXCviewIEPlugin.1", "FoxitReader.FoxitReaderCtl", "FoxitReader.FoxitReaderCtl.1", "FOXITREADEROCX.FoxitReaderOCXCtrl", "FOXITREADEROCX.FoxitReaderOCXCtrl.1"],
            query: function() {
                var r = this,
                    q = l,
                    p,
                    s;
                if (!r.result) {
                    r.result = -1;
                    if (!j.getAXO(r.progID_dummy)) {
                        s = j.errObj;
                    }
                    for (p = 0; p < r.progID.length; p++) {
                        if (j.getAXO(r.progID[p])) {
                            r.result = 1;
                            if (!j.dbug) {
                                break;
                            }
                        } else {
                            if (s && j.errObj && s !== j.errObj && s.message !== j.errObj.message) {
                                r.result = -0.5;
                            }
                        }
                    }
                    if (r.result < -0.5 && q.detectIE3P || j.dbug) {
                        for (p = 0; p < r.prodID3rd.length; p++) {
                            if (j.getAXO(r.prodID3rd[p])) {
                                r.result = 1;
                                if (!j.dbug) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return r.result;
            }
        },
        doc: {
            result: 0,
            classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
            classID_dummy: "clsid:CA8A9780-280D-11CF-A24D-BA9876543210",
            mimeType: "application/pdf",
            mimeType_dummy: "application/dummymimepdf",
            DummySpanTagHTML: 0,
            HTML: 0,
            DummyObjTagHTML1: 0,
            isDisabled: function() {
                var t = this,
                    p = l,
                    s = 0,
                    q = j.browser,
                    r;
                if (p.OTF >= 2 || !j.DOM.isEnabled.objectTag()) {
                    s = 2;
                } else {
                    if (j.dbug || j.hasMimeType(t.mimeType)) {} else {
                        if (q.isGecko && j.compareNums(q.verGecko, j.formatNum("10")) <= 0 && j.OS <= 4 || q.isOpera && j.compareNums(q.verOpera, j.formatNum("11")) <= 0 && j.OS <= 4 || q.isChrome && j.compareNums(q.verChrome, j.formatNum("10")) < 0 && j.OS <= 4) {
                            s = 2;
                        }
                    }
                }
                if (s < 2) {
                    r = j.file.getValid(p);
                    if (!r || !r.full) {
                        s = 1;
                    }
                }
                return s;
            },
            queryObject: function(s, r) {
                var u = this,
                    q = l,
                    p = 0,
                    t = 1;
                p = j.DOM.getTagStatus(u.HTML, u.DummySpanTagHTML, u.DummyObjTagHTML1, 0, s, r, t);
                u.result = p;
                return p;
            },
            insertHTMLQuery: function() {
                var t = this,
                    p = l,
                    r,
                    s = 1,
                    q = j.DOM.altHTML;
                if (t.isDisabled()) {
                    return t.result;
                }
                if (p.OTF < 2) {
                    p.OTF = 2;
                }
                r = j.file.getValid(p).full;
                if (!t.DummySpanTagHTML) {
                    t.DummySpanTagHTML = j.DOM.insert("", [], [], q, p, s);
                }
                if (!t.HTML) {
                    t.HTML = j.DOM.insert("object", (j.browser.isIE && !p.detectIE3P ? ["classid", t.classID] : ["type", t.mimeType]).concat(["data", r]), ["src", r], q, p, s);
                }
                if (!t.DummyObjTagHTML1) {
                    t.DummyObjTagHTML1 = j.DOM.insert("object", j.browser.isIE && !p.detectIE3P ? ["classid", t.classID_dummy] : ["type", t.mimeType_dummy], [], q, p, s);
                }
                t.queryObject();
                if (j.browser.isIE && t.result === 0) {
                    t.HTML.span.innerHTML = t.HTML.outerHTML;
                    t.DummyObjTagHTML1.span.innerHTML = t.DummyObjTagHTML1.outerHTML;
                    t.queryObject();
                }
                if ((t.result > 0 || t.result < -0.1) && !j.dbug) {
                    return t.result;
                }
                p.NOTF.init();
                return t.result;
            }
        },
        NOTF: {
            winLoaded: 0,
            count: 0,
            countMax: 25,
            intervalLength: 250,
            init: function() {
                var r = this,
                    p = l,
                    q = p.doc;
                if (p.OTF < 3 && q.HTML) {
                    p.OTF = 3;
                    if (!j.win.loaded) {
                        j.win.loadPrvtHndlrs.push([r.onWinLoadQuery, r]);
                    }
                    j.ev.setTimeout(r.onIntervalQuery, r.intervalLength);
                }
            },
            onIntervalQuery: function() {
                var p = l.doc,
                    q = l.NOTF;
                q.count++;
                if (l.OTF == 3) {
                    p.queryObject(q.count, q.winLoaded);
                    if (p.result > 0 || p.result < -0.1 || j.win.loaded && q.count > q.countMax) {
                        q.queryCompleted();
                    }
                }
                if (l.OTF == 3) {
                    j.ev.setTimeout(q.onIntervalQuery, q.intervalLength);
                }
            },
            onWinLoadQuery: function(p, q) {
                p.ev.setTimeout(q.onWinLoadQuery2, Math.floor(q.intervalLength / 2));
            },
            onWinLoadQuery2: function() {
                var p = l.doc,
                    q = l.NOTF;
                q.winLoaded = 1;
                if (l.OTF == 3) {
                    p.queryObject(q.count, q.winLoaded);
                    q.queryCompleted();
                }
            },
            queryCompleted: function() {
                var q = this,
                    p = l;
                if (p.OTF == 4) {
                    return;
                }
                p.OTF = 4;
                p.setPluginStatus();
                j.ev.callArray(p.DoneHndlrs);
            }
        }
    };
    j.addPlugin("pdfreader", l);
    var n = {
        mimeType: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"],
        classID: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",
        setPluginStatus: function(r, p) {
            var s = this,
                q;
            if (p) {
                s.version = j.formatNum(j.getNum(p));
            }
            s.installed = s.version ? 1 : r ? 0 : -1;
            q = s.installed == -1 || s.instance.version;
            q = q || s.axo.version;
            s.getVersionDone = q ? 1 : 0;
        },
        navObj: {
            hasRun: 0,
            installed: null,
            version: null,
            find: "RealPlayer.*Plug-?in",
            avoid: "Totem|QuickTime|Helix|VLC|Download",
            plugins: ["RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit) ", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (64-bit) ", "RealPlayer Plugin"],
            query: function() {
                var q = this,
                    s = n,
                    r,
                    p = !q.hasRun && j.hasMimeType(s.mimeType);
                q.hasRun = 1;
                if (p) {
                    r = j.pd.findNavPlugin({
                        find: q.find,
                        avoid: q.avoid,
                        mimes: s.mimeType,
                        plugins: q.plugins
                    });
                    q.installed = r ? 1 : 0;
                    r = j.getPluginFileVersion(r);
                    if (r && j.compareNums(j.formatNum(r), j.formatNum("15")) >= 0) {
                        q.version = r;
                    }
                }
                return q;
            }
        },
        JS: {
            hasRun: 0,
            version: null,
            regStr: "RealPlayer.*Version.*Plug-?in",
            mimetype: "application/vnd.rn-realplayer-javascript",
            q1: [
                [11, 0, 0],
                [999],
                [663],
                [663],
                [663],
                [660],
                [468],
                [468],
                [468],
                [468],
                [468],
                [468],
                [431],
                [431],
                [431],
                [372],
                [180],
                [180],
                [172],
                [172],
                [167],
                [114],
                [0]
            ],
            q3: [
                [6, 0],
                [12, 99],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 69],
                [12, 46],
                [12, 46],
                [12, 46],
                [11, 3006],
                [11, 2806],
                [11, 2806],
                [11, 2804],
                [11, 2804],
                [11, 2799],
                [11, 2749],
                [11, 2700]
            ],
            compare: function(t, s) {
                var r,
                    q = t.length,
                    v = s.length,
                    p,
                    u;
                for (r = 0; r < Math.max(q, v); r++) {
                    p = r < q ? t[r] : 0;
                    u = r < v ? s[r] : 0;
                    if (p > u) {
                        return 1;
                    }
                    if (p < u) {
                        return -1;
                    }
                }
                return 0;
            },
            convertNum: function(t, q, w) {
                var v = this,
                    u,
                    s,
                    p,
                    r = null;
                if (!t || !(u = j.formatNum(t))) {
                    return r;
                }
                u = u.split(j.splitNumRegx);
                for (p = 0; p < u.length; p++) {
                    u[p] = parseInt(u[p], 10);
                }
                if (v.compare(u.slice(0, Math.min(q[0].length, u.length)), q[0]) !== 0) {
                    return r;
                }
                s = u.length > q[0].length ? u.slice(q[0].length) : [];
                if (v.compare(s, q[1]) > 0 || v.compare(s, q[q.length - 1]) < 0) {
                    return r;
                }
                for (p = q.length - 1; p >= 1; p--) {
                    if (p == 1) {
                        break;
                    }
                    if (v.compare(q[p], s) === 0 && v.compare(q[p], q[p - 1]) === 0) {
                        break;
                    }
                    if (v.compare(s, q[p]) >= 0 && v.compare(s, q[p - 1]) < 0) {
                        break;
                    }
                }
                return w[0].join(".") + "." + w[p].join(".");
            },
            isEnabled: function() {
                var p = this;
                return !p.hasRun && j.OS == 1 && j.hasMimeType(p.mimetype) ? 1 : 0;
            },
            query: function() {
                var u = this,
                    t,
                    r,
                    s,
                    p = u.isEnabled();
                u.hasRun = 1;
                if (p) {
                    r = j.pd.findNavPlugin({
                        find: u.regStr,
                        mimes: u.mimetype
                    });
                    if (r) {
                        t = j.formatNum(j.getNum(r.description));
                    }
                    if (t) {
                        var q = t.split(j.splitNumRegx);
                        s = 1;
                        if (u.compare(q, [6, 0, 12, 200]) < 0) {
                            s = -1;
                        } else {
                            if (u.compare(q, [6, 0, 12, 1739]) <= 0 && u.compare(q, [6, 0, 12, 857]) >= 0) {
                                s = -1;
                            }
                        }
                        if (s < 0) {
                            r = u.convertNum(t, u.q3, u.q1);
                            u.version = r ? r : t;
                        }
                    }
                }
                return u;
            }
        },
        instance: {
            hasRun: 0,
            version: null,
            HTML: null,
            isEnabled: function() {
                var q = this,
                    r = n,
                    p = 1;
                if (!j.DOM.isEnabled.objectTag()) {
                    p = 0;
                } else {
                    if (j.dbug) {} else {
                        if (q.hasRun || j.DOM.isEnabled.objectTagUsingActiveX() || !j.hasMimeType(r.mimeType) || j.browser.isGecko && j.compareNums(j.browser.verGecko, j.formatNum("1,8")) < 0 || j.browser.isOpera && j.compareNums(j.browser.verOpera, j.formatNum("10")) < 0) {
                            p = 0;
                        }
                    }
                }
                return p;
            },
            query: function() {
                var p = this,
                    t = n,
                    s,
                    q = p.isEnabled();
                p.hasRun = 1;
                if (q) {
                    p.HTML = j.DOM.insert("object", ["type", t.mimeType[0]], ["src", "", "autostart", "false", "imagestatus", "false", "controls", "stopbutton"], "", t);
                    s = p.HTML.obj();
                    try {
                        p.version = j.getNum(s.GetVersionInfo());
                    } catch (r) {}
                    j.DOM.setStyle(s, ["display", "none"]);
                }
                return p;
            }
        },
        axo: {
            hasRun: 0,
            installed: null,
            version: null,
            progID: ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
            query: function() {
                var r = this,
                    t,
                    p,
                    q;
                if (!r.hasRun) {
                    r.hasRun = 1;
                    for (p = 0; p < r.progID.length; p++) {
                        t = j.getAXO(r.progID[p]);
                        if (t) {
                            r.installed = 1;
                            q = 0;
                            try {
                                q = t.GetVersionInfo() + "";
                            } catch (s) {}
                            if (q) {
                                r.version = q;
                                if (!j.dbug) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return r;
            }
        },
        getVersion: function(s, q) {
            var t = this,
                p = null,
                r = 0;
            if ((!r || j.dbug) && t.axo.query().installed) {
                r = 1;
            }
            if ((!p || j.dbug) && t.axo.query().version) {
                p = t.axo.version;
            }
            if ((!r || j.dbug) && t.navObj.query().installed) {
                r = 1;
            }
            if ((!p || j.dbug) && t.navObj.query().version) {
                p = t.navObj.version;
            }
            if ((!p || j.dbug) && t.JS.query().version) {
                r = 1;
                p = t.JS.version;
            }
            if ((!r && !p || q || j.dbug) && t.instance.query().version) {
                r = 1;
                p = t.instance.version;
            }
            t.setPluginStatus(r, p);
        }
    };
    j.addPlugin("realplayer", n);
    var g = {
        setPluginStatus: function(r, q, s) {
            var p = this;
            p.version = j.formatNum(q);
            p.installed = q ? 1 : r ? 0 : s ? -3 : -1;
        },
        getVersion: function(t, r) {
            var q = this,
                s = null,
                p = null;
            q.getVersionDone = 0;
            if (r && j.isString(r) && /[^\s]+/.test(r)) {
                r = r.replace(/\s/g, "");
            } else {
                q.setPluginStatus(0, 0, 1);
                return;
            }
            if (!q.obj) {
                q.obj = document.createElement("div");
                try {
                    q.obj.style.behavior = "url(#default#clientcaps)";
                } catch (u) {}
            }
            try {
                p = q.obj.getComponentVersion(r, "componentid").replace(/,/g, ".");
            } catch (u) {}
            try {
                if (!p) {
                    s = q.obj.isComponentInstalled(r, "componentid") ? 1 : 0;
                }
            } catch (u) {}
            q.setPluginStatus(s, p);
        }
    };
    j.addPlugin("iecomponent", g);
    var d = {
        storage: {},
        codebase: {
            isMin: function(p) {
                this.$$ = d;
                return j.codebase.isMin(this, p);
            },
            search: function() {
                this.$$ = d;
                return j.codebase.search(this);
            },
            classID: "",
            DIGITMAX: [
                [100, 100, 100, 0]
            ],
            DIGITMIN: [0, 0, 0, 0],
            Upper: ["99999"],
            Lower: ["0"],
            convert: [1]
        },
        clone: function(u, r) {
            var v = this,
                q,
                p,
                s = 0,
                t = 20;
            if (j.isNum(u) || j.isString(u) || u === null || j.isFunc(u) || u === j || u === j.Plugins || u === v) {
                return u;
            } else {
                if (u.window || u.firstChild || u.appendChild) {
                    return u;
                } else {
                    if (j.isArray(u)) {
                        p = [];
                    } else {
                        if (u) {
                            p = {};
                        }
                    }
                }
            }
            for (q in u) {
                if (j.hasOwn(u, q)) {
                    s++;
                    p[q] = v.clone(u[q], q);
                }
            }
            return p;
        },
        setPluginStatus: function(s, p, q) {
            var r = this;
            r.getVersionDone = 0;
            r.version = j.formatNum(p);
            r.installed = p ? 1 : s ? s > 0 ? 0.7 : -0.1 : q ? -3 : -1;
            j.codebase.emptyGarbage();
        },
        getVersion: function(t, u, y) {
            var z = this,
                q = null,
                v = null,
                w,
                s,
                r,
                p = "";
            if (j.codebase.isDisabled()) {
                z.setPluginStatus(0, 0);
                return;
            }
            if (u && j.isString(u) && /[^\s]+/.test(u)) {
                u = u.replace(/\s/g, "");
                p = u.replace(/[\:\-\/]/g, "$");
            } else {
                z.setPluginStatus(0, 0, 1);
                return;
            }
            if (j.isArray(y)) {
                if (!y.length) {
                    y.push(0);
                }
                for (w = 0; w < y.length; w++) {
                    if (!j.isDefined(y[w])) {
                        y[w] = 0;
                    }
                    if (!j.isNum(y[w]) || y[w] < 0 || y[w] > 99999999) {
                        z.setPluginStatus(0, 0, 1);
                        return;
                    }
                }
                if (p && z.storage[p]) {
                    s = z.storage[p].codebase;
                    r = 0;
                    for (w = 0; w < Math.max(y.length, s.DIGITMAX[0].length); w++) {
                        if ((w < y.length ? y[w] : 0) > (w < s.DIGITMAX[0].length ? s.DIGITMAX[0][w] : 0)) {
                            r = 1;
                            break;
                        }
                    }
                    if (r && s.version) {
                        r = s.version.split(j.splitNumRegx);
                        for (w = 0; w < Math.max(r.length, s.DIGITMAX[0].length); w++) {
                            if ((w < r.length ? r[w] : 0) === (w < s.DIGITMAX[0].length ? s.DIGITMAX[0][w] : 0)) {
                                z.storage[p] = null;
                                break;
                            }
                        }
                    }
                }
            } else {
                y = [0];
            }
            if (p && !z.storage[p]) {
                z.storage[p] = {
                    codebase: z.clone(z.codebase)
                };
                z.storage[p].codebase.classID = u;
                if (j.isArray(y) && y.length) {
                    z.storage[p].codebase.DIGITMAX = [
                        [].concat(y)
                    ];
                }
            }
            if (t) {
                q = z.storage[p].codebase.isMin(t);
                v = z.storage[p].codebase.version;
            } else {
                q = 0;
                v = z.storage[p].codebase.search();
            }
            z.setPluginStatus(q, v);
        }
    };
    j.addPlugin("activex", d);
    var b = {
        OTF: null,
        setPluginStatus: function() {
            var q = this,
                r = q.doc.result,
                p = q.OTF;
            q.version = null;
            if (p == 3) {
                q.installed = -0.5;
            } else {
                q.installed = r > 0 ? 0 : -1;
            }
            if (q.verify && q.verify.isEnabled()) {
                q.getVersionDone = 0;
            } else {
                if (q.getVersionDone != 1) {
                    q.getVersionDone = q.installed == -0.5 || q.installed == -1 && q.doc.isDisabled() < 2 ? 0 : 1;
                }
            }
        },
        getVersion: function(r, q) {
            var s = this,
                p = false,
                u = s.verify,
                t = s.doc;
            if (s.getVersionDone === null) {
                s.OTF = 0;
                if (u) {
                    u.init();
                }
            }
            j.file.save(s, ".pdf", q);
            if (s.getVersionDone === 0) {
                if (u && u.isEnabled() && j.isNum(s.installed) && s.installed >= 0) {
                    return;
                }
            }
            if ((!p || j.dbug) && t.insertHTMLQuery() > 0) {
                p = true;
            }
            s.setPluginStatus();
        },
        doc: {
            result: 0,
            mimeType: "application/pdf",
            mimeType_dummy: "application/dummymimepdf",
            DummySpanTagHTML: 0,
            HTML: 0,
            DummyObjTagHTML1: 0,
            isDisabled: function() {
                var t = this,
                    s = b,
                    r = 0,
                    p = j.browser,
                    q;
                if (s.OTF >= 2 || !j.DOM.isEnabled.objectTag() || j.DOM.isEnabled.objectTagUsingActiveX()) {
                    r = 2;
                } else {
                    if (j.dbug) {} else {
                        if (!p.isGecko || j.compareNums(p.verGecko, j.formatNum("10")) < 0 || j.compareNums(p.verGecko, j.formatNum("19")) < 0 && j.hasMimeType(t.mimeType)) {
                            r = 2;
                        }
                    }
                }
                if (r < 2) {
                    q = j.file.getValid(s);
                    if (!q || !q.full) {
                        r = 1;
                    }
                }
                return r;
            },
            tabIndex: null,
            method: "",
            queryObject: function(s, p) {
                var v = this,
                    u = v.HTML ? v.HTML.obj() : 0,
                    w,
                    r,
                    q = j.dbug && !j.win.loaded ? 0 : 1;
                w = j.DOM.getTagStatus(v.HTML, v.DummySpanTagHTML, v.DummyObjTagHTML1, 0, s, p);
                if ((!v.result || j.dbug) && w < -0.1) {
                    if (q) {
                        v.result = -1;
                    }
                    v.method += "1,";
                }
                if ((!v.result || j.dbug) && w > 0 && !j.hasMimeType(v.mimeType)) {
                    if (q) {
                        v.result = 1;
                    }
                    v.method += "2,";
                }
                try {
                    r = u ? u.tabIndex : null;
                } catch (t) {}
                if (!j.isNum(v.tabIndex) && j.isNum(r)) {
                    v.tabIndex = r;
                }
                if ((!v.result || j.dbug) && w > 0 && j.isNum(r) && j.isNum(v.tabIndex) && v.tabIndex !== r) {
                    if (q) {
                        v.result = 1;
                    }
                    v.method += "4,";
                }
                return v.result;
            },
            insertHTMLQuery: function() {
                var t = this,
                    r = b,
                    q,
                    s = 1,
                    p = j.DOM.altHTML;
                if (t.isDisabled()) {
                    return t.result;
                }
                if (r.OTF < 2) {
                    r.OTF = 2;
                }
                q = j.file.getValid(r).full;
                if (!t.DummySpanTagHTML) {
                    t.DummySpanTagHTML = j.DOM.insert("", [], [], p, r, s);
                }
                if (!t.HTML) {
                    t.HTML = j.DOM.insert("object", ["type", t.mimeType, "data", q], ["src", q], p, r, s);
                }
                if (!t.DummyObjTagHTML1) {
                    t.DummyObjTagHTML1 = j.DOM.insert("object", ["type", t.mimeType_dummy], [], p, r, s);
                }
                t.queryObject();
                if (t.result && !j.dbug) {
                    return t.result;
                }
                r.NOTF.init();
                return t.result;
            }
        },
        NOTF: {
            winLoaded: 0,
            count: 0,
            countMax: 25,
            intervalLength: 250,
            init: function() {
                var r = this,
                    p = b,
                    q = p.doc;
                if (p.OTF < 3 && q.HTML) {
                    p.OTF = 3;
                    if (!j.win.loaded) {
                        j.win.loadPrvtHndlrs.push([r.onWinLoadQuery, r]);
                    }
                    j.ev.setTimeout(r.onIntervalQuery, r.intervalLength);
                }
            },
            onIntervalQuery: function() {
                var p = b.doc,
                    q = b.NOTF;
                q.count++;
                if (b.OTF == 3) {
                    p.queryObject(q.count, q.winLoaded);
                    if (p.result || j.win.loaded && q.count > q.countMax) {
                        q.queryCompleted();
                    }
                }
                if (b.OTF == 3) {
                    j.ev.setTimeout(q.onIntervalQuery, q.intervalLength);
                }
            },
            onWinLoadQuery: function(p, q) {
                p.ev.setTimeout(q.onWinLoadQuery2, Math.floor(q.intervalLength / 2));
            },
            onWinLoadQuery2: function() {
                var p = b.doc,
                    q = b.NOTF;
                q.winLoaded = 1;
                if (b.OTF == 3) {
                    p.queryObject(q.count, q.winLoaded);
                    q.queryCompleted();
                }
            },
            queryCompleted: function() {
                var q = this,
                    p = b;
                if (p.OTF == 4) {
                    return;
                }
                p.OTF = 4;
                p.setPluginStatus();
                j.ev.callArray(p.DoneHndlrs);
            }
        }
    };
    j.addPlugin("pdfjs", b);
})();