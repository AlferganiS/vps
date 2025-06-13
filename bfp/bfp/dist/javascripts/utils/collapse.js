/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 335);
    /******/
})
/************************************************************************/
/******/
({

    /***/
    10:
        /***/
        (function(module, exports, __webpack_require__) {

            var dP = __webpack_require__(11);
            var createDesc = __webpack_require__(17);
            module.exports = __webpack_require__(6) ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };


            /***/
        }),

    /***/
    11:
        /***/
        (function(module, exports, __webpack_require__) {

            var anObject = __webpack_require__(12);
            var IE8_DOM_DEFINE = __webpack_require__(14);
            var toPrimitive = __webpack_require__(16);
            var dP = Object.defineProperty;

            exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) { /* empty */ }
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };


            /***/
        }),

    /***/
    12:
        /***/
        (function(module, exports, __webpack_require__) {

            var isObject = __webpack_require__(13);
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };


            /***/
        }),

    /***/
    13:
        /***/
        (function(module, exports) {

            module.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };


            /***/
        }),

    /***/
    14:
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function() {
                return Object.defineProperty(__webpack_require__(15)('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });


            /***/
        }),

    /***/
    15:
        /***/
        (function(module, exports, __webpack_require__) {

            var isObject = __webpack_require__(13);
            var document = __webpack_require__(4).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {};
            };


            /***/
        }),

    /***/
    16:
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(13);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };


            /***/
        }),

    /***/
    17:
        /***/
        (function(module, exports) {

            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };


            /***/
        }),

    /***/
    170:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";

            var fails = __webpack_require__(7);

            module.exports = function(method, arg) {
                return !!method && fails(function() {
                    // eslint-disable-next-line no-useless-call
                    arg ? method.call(null, function() { /* empty */ }, 1) : method.call(null);
                });
            };


            /***/
        }),

    /***/
    173:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";

            var $export = __webpack_require__(8);
            var $forEach = __webpack_require__(174)(0);
            var STRICT = __webpack_require__(170)([].forEach, true);

            $export($export.P + $export.F * !STRICT, 'Array', {
                // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
                forEach: function forEach(callbackfn /* , thisArg */ ) {
                    return $forEach(this, callbackfn, arguments[1]);
                }
            });


            /***/
        }),

    /***/
    174:
        /***/
        (function(module, exports, __webpack_require__) {

            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex
            var ctx = __webpack_require__(23);
            var IObject = __webpack_require__(34);
            var toObject = __webpack_require__(58);
            var toLength = __webpack_require__(38);
            var asc = __webpack_require__(175);
            module.exports = function(TYPE, $create) {
                var IS_MAP = TYPE == 1;
                var IS_FILTER = TYPE == 2;
                var IS_SOME = TYPE == 3;
                var IS_EVERY = TYPE == 4;
                var IS_FIND_INDEX = TYPE == 6;
                var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                var create = $create || asc;
                return function($this, callbackfn, that) {
                    var O = toObject($this);
                    var self = IObject(O);
                    var f = ctx(callbackfn, that, 3);
                    var length = toLength(self.length);
                    var index = 0;
                    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                    var val, res;
                    for (; length > index; index++)
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res; // map
                                else if (res) switch (TYPE) {
                                    case 3:
                                        return true; // some
                                    case 5:
                                        return val; // find
                                    case 6:
                                        return index; // findIndex
                                    case 2:
                                        result.push(val); // filter
                                } else if (IS_EVERY) return false; // every
                            }
                        }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                };
            };


            /***/
        }),

    /***/
    175:
        /***/
        (function(module, exports, __webpack_require__) {

            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
            var speciesConstructor = __webpack_require__(176);

            module.exports = function(original, length) {
                return new(speciesConstructor(original))(length);
            };


            /***/
        }),

    /***/
    176:
        /***/
        (function(module, exports, __webpack_require__) {

            var isObject = __webpack_require__(13);
            var isArray = __webpack_require__(45);
            var SPECIES = __webpack_require__(27)('species');

            module.exports = function(original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    // cross-realm fallback
                    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined;
                    }
                }
                return C === undefined ? Array : C;
            };


            /***/
        }),

    /***/
    18:
        /***/
        (function(module, exports, __webpack_require__) {

            var global = __webpack_require__(4);
            var hide = __webpack_require__(10);
            var has = __webpack_require__(5);
            var SRC = __webpack_require__(19)('src');
            var $toString = __webpack_require__(20);
            var TO_STRING = 'toString';
            var TPL = ('' + $toString).split(TO_STRING);

            __webpack_require__(9).inspectSource = function(it) {
                return $toString.call(it);
            };

            (module.exports = function(O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction) has(val, 'name') || hide(val, 'name', key);
                if (O[key] === val) return;
                if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                if (O === global) {
                    O[key] = val;
                } else if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else if (O[key]) {
                    O[key] = val;
                } else {
                    hide(O, key, val);
                }
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return typeof this == 'function' && this[SRC] || $toString.call(this);
            });


            /***/
        }),

    /***/
    188:
        /***/
        (function(module, exports, __webpack_require__) {

            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__(27)('unscopables');
            var ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
            module.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };


            /***/
        }),

    /***/
    19:
        /***/
        (function(module, exports) {

            var id = 0;
            var px = Math.random();
            module.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };


            /***/
        }),

    /***/
    20:
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);


            /***/
        }),

    /***/
    21:
        /***/
        (function(module, exports, __webpack_require__) {

            var core = __webpack_require__(9);
            var global = __webpack_require__(4);
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});

            (module.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
                version: core.version,
                mode: __webpack_require__(22) ? 'pure' : 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });


            /***/
        }),

    /***/
    22:
        /***/
        (function(module, exports) {

            module.exports = false;


            /***/
        }),

    /***/
    23:
        /***/
        (function(module, exports, __webpack_require__) {

            // optional / simple context binding
            var aFunction = __webpack_require__(24);
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function( /* ...args */ ) {
                    return fn.apply(that, arguments);
                };
            };


            /***/
        }),

    /***/
    24:
        /***/
        (function(module, exports) {

            module.exports = function(it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };


            /***/
        }),

    /***/
    259:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";

            // https://github.com/tc39/Array.prototype.includes
            var $export = __webpack_require__(8);
            var $includes = __webpack_require__(37)(true);

            $export($export.P, 'Array', {
                includes: function includes(el /* , fromIndex = 0 */ ) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                }
            });

            __webpack_require__(188)('includes');


            /***/
        }),

    /***/
    27:
        /***/
        (function(module, exports, __webpack_require__) {

            var store = __webpack_require__(21)('wks');
            var uid = __webpack_require__(19);
            var Symbol = __webpack_require__(4).Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = module.exports = function(name) {
                return store[name] || (store[name] =
                    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;


            /***/
        }),

    /***/
    33:
        /***/
        (function(module, exports, __webpack_require__) {

            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(34);
            var defined = __webpack_require__(36);
            module.exports = function(it) {
                return IObject(defined(it));
            };


            /***/
        }),

    /***/
    335:
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(259);

            __webpack_require__(173);

            /*
              Consider using these polyfills to broaden browser support:
                — https://www.npmjs.com/package/classlist-polyfill
                — https://www.npmjs.com/package/nodelist-foreach-polyfill
            */
            var container = document.querySelector('.nav__tabs');
            var primary = container.querySelector('.nav__primary');
            var primaryItems = container.querySelectorAll('.nav__primary > li:not(.-more)');
            container.classList.add('--jsfied'); // insert "more" button and duplicate the list

            primary.insertAdjacentHTML('beforeEnd', "\n  <li class=\"-more nav-item\">\n    <button type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-primary\">\n      More <span>&darr;</span>\n    </button>\n    <ul class=\"nav__secondary nav bg-primary\">\n      ".concat(primary.innerHTML, "\n    </ul>\n  </li>\n"));
            var secondary = container.querySelector('.nav__secondary');
            $('.nav__secondary li').addClass('nav-item');
            $('.nav__secondary li a').addClass('nav-link');
            var secondaryItems = secondary.querySelectorAll('li');
            var allItems = container.querySelectorAll('li');
            var moreLi = primary.querySelector('.-more');
            var moreBtn = moreLi.querySelector('button');
            var amIUnique = document.querySelector('.navbar-header');
            moreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                container.classList.toggle('--show-secondary');
                moreBtn.setAttribute('aria-expanded', container.classList.contains('--show-secondary'));
            }); // adapt tabs

            var doAdapt = function doAdapt() {
                // reveal all items for the calculation
                allItems.forEach(function(item) {
                    item.classList.remove('--hidden');
                }); // hide items that won't fit in the Primary

                var stopWidth = amIUnique.offsetWidth + moreBtn.offsetWidth;
                var hiddenItems = [];
                var navbarWidth = document.querySelector('nav.navbar').offsetWidth;
                var hideEverythingElse = false;
                primaryItems.forEach(function(item, i) {
                    if (!hideEverythingElse && navbarWidth >= stopWidth + item.offsetWidth + 10) {
                        stopWidth += item.offsetWidth;
                    } else {
                        item.classList.add('--hidden');
                        hiddenItems.push(i);
                        hideEverythingElse = true;
                    }
                }); // toggle the visibility of More button and items in Secondary

                if (!hiddenItems.length) {
                    moreLi.classList.add('--hidden');
                    container.classList.remove('--show-secondary');
                    moreBtn.setAttribute('aria-expanded', false);
                } else {
                    secondaryItems.forEach(function(item, i) {
                        if (!hiddenItems.includes(i)) {
                            item.classList.add('--hidden');
                        }
                    });
                }
            };

            doAdapt(); // adapt immediately on load

            window.addEventListener('resize', doAdapt); // adapt on window resize
            // hide Secondary on the outside click

            document.addEventListener('click', function(e) {
                var el = e.target;

                while (el) {
                    if (el === secondary || el === moreBtn) {
                        return;
                    }

                    el = el.parentNode;
                }

                container.classList.remove('--show-secondary');
                moreBtn.setAttribute('aria-expanded', false);
            });

            /***/
        }),

    /***/
    34:
        /***/
        (function(module, exports, __webpack_require__) {

            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(35);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };


            /***/
        }),

    /***/
    35:
        /***/
        (function(module, exports) {

            var toString = {}.toString;

            module.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };


            /***/
        }),

    /***/
    36:
        /***/
        (function(module, exports) {

            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };


            /***/
        }),

    /***/
    37:
        /***/
        (function(module, exports, __webpack_require__) {

            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(33);
            var toLength = __webpack_require__(38);
            var toAbsoluteIndex = __webpack_require__(40);
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0;
                                }
                    return !IS_INCLUDES && -1;
                };
            };


            /***/
        }),

    /***/
    38:
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.15 ToLength
            var toInteger = __webpack_require__(39);
            var min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };


            /***/
        }),

    /***/
    39:
        /***/
        (function(module, exports) {

            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };


            /***/
        }),

    /***/
    4:
        /***/
        (function(module, exports) {

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
                window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                :
                Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


            /***/
        }),

    /***/
    40:
        /***/
        (function(module, exports, __webpack_require__) {

            var toInteger = __webpack_require__(39);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };


            /***/
        }),

    /***/
    45:
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(35);
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };


            /***/
        }),

    /***/
    5:
        /***/
        (function(module, exports) {

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };


            /***/
        }),

    /***/
    58:
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(36);
            module.exports = function(it) {
                return Object(defined(it));
            };


            /***/
        }),

    /***/
    6:
        /***/
        (function(module, exports, __webpack_require__) {

            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(7)(function() {
                return Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });


            /***/
        }),

    /***/
    7:
        /***/
        (function(module, exports) {

            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };


            /***/
        }),

    /***/
    8:
        /***/
        (function(module, exports, __webpack_require__) {

            var global = __webpack_require__(4);
            var core = __webpack_require__(9);
            var hide = __webpack_require__(10);
            var redefine = __webpack_require__(18);
            var ctx = __webpack_require__(23);
            var PROTOTYPE = 'prototype';

            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = (own ? target : source)[key];
                    // bind timers to global for call from export context
                    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // extend global
                    if (target) redefine(target, key, out, type & $export.U);
                    // export
                    if (exports[key] != out) hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;


            /***/
        }),

    /***/
    9:
        /***/
        (function(module, exports) {

            var core = module.exports = {
                version: '2.6.5'
            };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


            /***/
        })

    /******/
});