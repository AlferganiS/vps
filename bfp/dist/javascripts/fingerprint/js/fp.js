function wait_edge() {
  var next,
    last = performance.now();
  while ((next = performance.now()) == last) {}
  return next;
}

function count_edge() {
  var last = performance.now(),
    count = 0;
  while (performance.now() == last) count++;
  return count;
}

function calibrate() {
  var counter = 0,
    next;
  for (var i = 0; i < 1000; i++) {
    // Correct the loop initialization and condition
    next = wait_edge();
    counter += count_edge();
  }
  var finalEdge = wait_edge(); // Fix the next overwriting issue
  return (finalEdge - next) / (counter / 10.0);
}

async function measure(fnc) {
  var start = wait_edge();
  await fnc();
  var count = count_edge();
  return performance.now() - start - count * calibrate();
}

function measureTime(func) {
  var total = 0,
    result;

  // Loop 10 times and measure the function
  for (var i = 0; i < 10; i++) {
    result = measure(func);
    // console.log('Measurement', (i+1), '=', result);
    total += result; // Accumulate the result
  }

  var average = total / 10;
  // console.log('Average time elapsed =', average);
  return average;
}

var temp = false;
var WPA = "";

window.addEventListener("beforeinstallprompt", (e) => {
  WPA = e;
  temp = true;
});

// Run the average measure calculation
// measureTime();

/******/

(function (modules) {
  // webpackBootstrap
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
    var module = (installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
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
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, "__esModule", {
      value: true,
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
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter =
      module && module.__esModule
        ? /******/
          function getDefault() {
            return module["default"];
          }
        : /******/
          function getModuleExports() {
            return module;
          };
    /******/
    __webpack_require__.d(getter, "a", getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
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
  return __webpack_require__((__webpack_require__.s = 348));
  /******/
})(
  /************************************************************************/
  /******/
  [
    ,
    ,
    ,
    /* 0 */
    /* 1 */
    /* 2 */
    /* 3 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      // ECMAScript 6 symbols shim
      var global = __webpack_require__(4);
      var has = __webpack_require__(5);
      var DESCRIPTORS = __webpack_require__(6);
      var $export = __webpack_require__(8);
      var redefine = __webpack_require__(18);
      var META = __webpack_require__(25).KEY;
      var $fails = __webpack_require__(7);
      var shared = __webpack_require__(21);
      var setToStringTag = __webpack_require__(26);
      var uid = __webpack_require__(19);
      var wks = __webpack_require__(27);
      var wksExt = __webpack_require__(28);
      var wksDefine = __webpack_require__(29);
      var enumKeys = __webpack_require__(30);
      var isArray = __webpack_require__(45);
      var anObject = __webpack_require__(12);
      var isObject = __webpack_require__(13);
      var toIObject = __webpack_require__(33);
      var toPrimitive = __webpack_require__(16);
      var createDesc = __webpack_require__(17);
      var _create = __webpack_require__(46);
      var gOPNExt = __webpack_require__(49);
      var $GOPD = __webpack_require__(51);
      var $DP = __webpack_require__(11);
      var $keys = __webpack_require__(31);
      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global.Symbol;
      var $JSON = global.JSON;
      var _stringify = $JSON && $JSON.stringify;
      var PROTOTYPE = "prototype";
      var HIDDEN = wks("_hidden");
      var TO_PRIMITIVE = wks("toPrimitive");
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared("symbol-registry");
      var AllSymbols = shared("symbols");
      var OPSymbols = shared("op-symbols");
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == "function";
      var QObject = global.QObject;
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var setter =
        !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc =
        DESCRIPTORS &&
        $fails(function () {
          return (
            _create(
              dP({}, "a", {
                get: function () {
                  return dP(this, "a", {
                    value: 7,
                  }).a;
                },
              })
            ).a != 7
          );
        })
          ? function (it, key, D) {
              var protoDesc = gOPD(ObjectProto, key);
              if (protoDesc) delete ObjectProto[key];
              dP(it, key, D);
              if (protoDesc && it !== ObjectProto)
                dP(ObjectProto, key, protoDesc);
            }
          : dP;

      var wrap = function (tag) {
        var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
        sym._k = tag;
        return sym;
      };

      var isSymbol =
        USE_NATIVE && typeof $Symbol.iterator == "symbol"
          ? function (it) {
              return typeof it == "symbol";
            }
          : function (it) {
              return it instanceof $Symbol;
            };

      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
              enumerable: createDesc(0, false),
            });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys((P = toIObject(P)));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === undefined
          ? _create(it)
          : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, (key = toPrimitive(key, true)));
        if (
          this === ObjectProto &&
          has(AllSymbols, key) &&
          !has(OPSymbols, key)
        )
          return false;
        return E ||
          !has(this, key) ||
          !has(AllSymbols, key) ||
          (has(this, HIDDEN) && this[HIDDEN][key])
          ? E
          : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
        it,
        key
      ) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
          return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
          D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (
            !has(AllSymbols, (key = names[i++])) &&
            key != HIDDEN &&
            key != META
          )
            result.push(key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (
            has(AllSymbols, (key = names[i++])) &&
            (IS_OP ? has(ObjectProto, key) : true)
          )
            result.push(AllSymbols[key]);
        }
        return result;
      };

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol)
            throw TypeError("Symbol is not a constructor!");
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
          var $set = function (value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter)
            setSymbolDesc(ObjectProto, tag, {
              configurable: true,
              set: $set,
            });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString() {
          return this._k;
        });

        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
        __webpack_require__(44).f = $propertyIsEnumerable;
        __webpack_require__(43).f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !__webpack_require__(22)) {
          redefine(
            ObjectProto,
            "propertyIsEnumerable",
            $propertyIsEnumerable,
            true
          );
        }

        wksExt.f = function (name) {
          return wrap(wks(name));
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol,
      });

      for (
        var es6Symbols =
            // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          j = 0;
        es6Symbols.length > j;

      )
        wks(es6Symbols[j++]);

      for (
        var wellKnownSymbols = $keys(wks.store), k = 0;
        wellKnownSymbols.length > k;

      )
        wksDefine(wellKnownSymbols[k++]);

      $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        for: function (key) {
          return has(SymbolRegistry, (key += ""))
            ? SymbolRegistry[key]
            : (SymbolRegistry[key] = $Symbol(key));
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
          for (var key in SymbolRegistry)
            if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function () {
          setter = true;
        },
        useSimple: function () {
          setter = false;
        },
      });

      $export($export.S + $export.F * !USE_NATIVE, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols,
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON &&
        $export(
          $export.S +
            $export.F *
              (!USE_NATIVE ||
                $fails(function () {
                  var S = $Symbol();
                  // MS Edge converts symbol values to JSON as {}
                  // WebKit converts symbol values to JSON as null
                  // V8 throws on boxed symbols
                  return (
                    _stringify([S]) != "[null]" ||
                    _stringify({
                      a: S,
                    }) != "{}" ||
                    _stringify(Object(S)) != "{}"
                  );
                })),
          "JSON",
          {
            stringify: function stringify(it) {
              var args = [it];
              var i = 1;
              var replacer, $replacer;
              while (arguments.length > i) args.push(arguments[i++]);
              $replacer = replacer = args[1];
              if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                return; // IE8 returns string on undefined
              if (!isArray(replacer))
                replacer = function (key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value)) return value;
                };
              args[1] = replacer;
              return _stringify.apply($JSON, args);
            },
          }
        );

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
        __webpack_require__(10)(
          $Symbol[PROTOTYPE],
          TO_PRIMITIVE,
          $Symbol[PROTOTYPE].valueOf
        );
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, "Symbol");
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, "Math", true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, "JSON", true);

      /***/
    },
    /* 4 */
    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = (module.exports =
        typeof window != "undefined" && window.Math == Math
          ? window
          : typeof self != "undefined" && self.Math == Math
          ? self
          : // eslint-disable-next-line no-new-func
            Function("return this")());
      if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 5 */
    /***/
    function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };

      /***/
    },
    /* 6 */
    /***/
    function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(7)(function () {
        return (
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });

      /***/
    },
    /* 7 */
    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    },
    /* 8 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var core = __webpack_require__(9);
      var hide = __webpack_require__(10);
      var redefine = __webpack_require__(18);
      var ctx = __webpack_require__(23);
      var PROTOTYPE = "prototype";

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL
          ? global
          : IS_STATIC
          ? global[name] || (global[name] = {})
          : (global[name] || {})[PROTOTYPE];
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
          exp =
            IS_BIND && own
              ? ctx(out, global)
              : IS_PROTO && typeof out == "function"
              ? ctx(Function.call, out)
              : out;
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
    },
    /* 9 */
    /***/
    function (module, exports) {
      var core = (module.exports = {
        version: "2.6.5",
      });
      if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 10 */
    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(11);
      var createDesc = __webpack_require__(17);
      module.exports = __webpack_require__(6)
        ? function (object, key, value) {
            return dP.f(object, key, createDesc(1, value));
          }
        : function (object, key, value) {
            object[key] = value;
            return object;
          };

      /***/
    },
    /* 11 */
    /***/
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(12);
      var IE8_DOM_DEFINE = __webpack_require__(14);
      var toPrimitive = __webpack_require__(16);
      var dP = Object.defineProperty;

      exports.f = __webpack_require__(6)
        ? Object.defineProperty
        : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e) {
                /* empty */
              }
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
          };

      /***/
    },
    /* 12 */
    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(13);
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
      };

      /***/
    },
    /* 13 */
    /***/
    function (module, exports) {
      module.exports = function (it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };

      /***/
    },
    /* 14 */
    /***/
    function (module, exports, __webpack_require__) {
      module.exports =
        !__webpack_require__(6) &&
        !__webpack_require__(7)(function () {
          return (
            Object.defineProperty(__webpack_require__(15)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });

      /***/
    },
    /* 15 */
    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(13);
      var document = __webpack_require__(4).document;
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };

      /***/
    },
    /* 16 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__(13);
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (
          S &&
          typeof (fn = it.toString) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        if (
          typeof (fn = it.valueOf) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        if (
          !S &&
          typeof (fn = it.toString) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        throw TypeError("Can't convert object to primitive value");
      };

      /***/
    },
    /* 17 */
    /***/
    function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value,
        };
      };

      /***/
    },
    /* 18 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var hide = __webpack_require__(10);
      var has = __webpack_require__(5);
      var SRC = __webpack_require__(19)("src");
      var $toString = __webpack_require__(20);
      var TO_STRING = "toString";
      var TPL = ("" + $toString).split(TO_STRING);

      __webpack_require__(9).inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val == "function";
        if (isFunction) has(val, "name") || hide(val, "name", key);
        if (O[key] === val) return;
        if (isFunction)
          has(val, SRC) ||
            hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
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
        return (typeof this == "function" && this[SRC]) || $toString.call(this);
      });

      /***/
    },
    /* 19 */
    /***/
    function (module, exports) {
      var id = 0;
      var px = Math.random();
      module.exports = function (key) {
        return "Symbol(".concat(
          key === undefined ? "" : key,
          ")_",
          (++id + px).toString(36)
        );
      };

      /***/
    },
    /* 20 */
    /***/
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(21)(
        "native-function-to-string",
        Function.toString
      );

      /***/
    },
    /* 21 */
    /***/
    function (module, exports, __webpack_require__) {
      var core = __webpack_require__(9);
      var global = __webpack_require__(4);
      var SHARED = "__core-js_shared__";
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })("versions", []).push({
        version: core.version,
        mode: __webpack_require__(22) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });

      /***/
    },
    /* 22 */
    /***/
    function (module, exports) {
      module.exports = false;

      /***/
    },
    /* 23 */
    /***/
    function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(24);
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };

      /***/
    },
    /* 24 */
    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != "function")
          throw TypeError(it + " is not a function!");
        return it;
      };

      /***/
    },
    /* 25 */
    /***/
    function (module, exports, __webpack_require__) {
      var META = __webpack_require__(19)("meta");
      var isObject = __webpack_require__(13);
      var has = __webpack_require__(5);
      var setDesc = __webpack_require__(11).f;
      var id = 0;
      var isExtensible =
        Object.isExtensible ||
        function () {
          return true;
        };
      var FREEZE = !__webpack_require__(7)(function () {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function (it) {
        setDesc(it, META, {
          value: {
            i: "O" + ++id, // object ID
            w: {}, // weak collections IDs
          },
        });
      };
      var fastKey = function (it, create) {
        // return primitive with prefix
        if (!isObject(it))
          return typeof it == "symbol"
            ? it
            : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return "F";
          // not necessary to add metadata
          if (!create) return "E";
          // add missing metadata
          setMeta(it);
          // return object ID
        }
        return it[META].i;
      };
      var getWeak = function (it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true;
          // not necessary to add metadata
          if (!create) return false;
          // add missing metadata
          setMeta(it);
          // return hash weak collections IDs
        }
        return it[META].w;
      };
      // add metadata on freeze-family methods calling
      var onFreeze = function (it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
          setMeta(it);
        return it;
      };
      var meta = (module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze,
      });

      /***/
    },
    /* 26 */
    /***/
    function (module, exports, __webpack_require__) {
      var def = __webpack_require__(11).f;
      var has = __webpack_require__(5);
      var TAG = __webpack_require__(27)("toStringTag");

      module.exports = function (it, tag, stat) {
        if (it && !has((it = stat ? it : it.prototype), TAG))
          def(it, TAG, {
            configurable: true,
            value: tag,
          });
      };

      /***/
    },
    /* 27 */
    /***/
    function (module, exports, __webpack_require__) {
      var store = __webpack_require__(21)("wks");
      var uid = __webpack_require__(19);
      var Symbol = __webpack_require__(4).Symbol;
      var USE_SYMBOL = typeof Symbol == "function";

      var $exports = (module.exports = function (name) {
        return (
          store[name] ||
          (store[name] =
            (USE_SYMBOL && Symbol[name]) ||
            (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
        );
      });

      $exports.store = store;

      /***/
    },
    /* 28 */
    /***/
    function (module, exports, __webpack_require__) {
      exports.f = __webpack_require__(27);

      /***/
    },
    /* 29 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var core = __webpack_require__(9);
      var LIBRARY = __webpack_require__(22);
      var wksExt = __webpack_require__(28);
      var defineProperty = __webpack_require__(11).f;
      module.exports = function (name) {
        var $Symbol =
          core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != "_" && !(name in $Symbol))
          defineProperty($Symbol, name, {
            value: wksExt.f(name),
          });
      };

      /***/
    },
    /* 30 */
    /***/
    function (module, exports, __webpack_require__) {
      // all enumerable object keys, includes symbols
      var getKeys = __webpack_require__(31);
      var gOPS = __webpack_require__(43);
      var pIE = __webpack_require__(44);
      module.exports = function (it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;
          while (symbols.length > i)
            if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
        }
        return result;
      };

      /***/
    },
    /* 31 */
    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__(32);
      var enumBugKeys = __webpack_require__(42);

      module.exports =
        Object.keys ||
        function keys(O) {
          return $keys(O, enumBugKeys);
        };

      /***/
    },
    /* 32 */
    /***/
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(5);
      var toIObject = __webpack_require__(33);
      var arrayIndexOf = __webpack_require__(37)(false);
      var IE_PROTO = __webpack_require__(41)("IE_PROTO");

      module.exports = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i)
          if (has(O, (key = names[i++]))) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        return result;
      };

      /***/
    },
    /* 33 */
    /***/
    function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__(34);
      var defined = __webpack_require__(36);
      module.exports = function (it) {
        return IObject(defined(it));
      };

      /***/
    },
    /* 34 */
    /***/
    function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__(35);
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (it) {
            return cof(it) == "String" ? it.split("") : Object(it);
          };

      /***/
    },
    /* 35 */
    /***/
    function (module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };

      /***/
    },
    /* 36 */
    /***/
    function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    },
    /* 37 */
    /***/
    function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__(33);
      var toLength = __webpack_require__(38);
      var toAbsoluteIndex = __webpack_require__(40);
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
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
            }
          else
            for (; length > index; index++)
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
          return !IS_INCLUDES && -1;
        };
      };

      /***/
    },
    /* 38 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__(39);
      var min = Math.min;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };

      /***/
    },
    /* 39 */
    /***/
    function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function (it) {
        return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
      };

      /***/
    },
    /* 40 */
    /***/
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(39);
      var max = Math.max;
      var min = Math.min;
      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };

      /***/
    },
    /* 41 */
    /***/
    function (module, exports, __webpack_require__) {
      var shared = __webpack_require__(21)("keys");
      var uid = __webpack_require__(19);
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };

      /***/
    },
    /* 42 */
    /***/
    function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );

      /***/
    },
    /* 43 */
    /***/
    function (module, exports) {
      exports.f = Object.getOwnPropertySymbols;

      /***/
    },
    /* 44 */
    /***/
    function (module, exports) {
      exports.f = {}.propertyIsEnumerable;

      /***/
    },
    /* 45 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__(35);
      module.exports =
        Array.isArray ||
        function isArray(arg) {
          return cof(arg) == "Array";
        };

      /***/
    },
    /* 46 */
    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__(12);
      var dPs = __webpack_require__(47);
      var enumBugKeys = __webpack_require__(42);
      var IE_PROTO = __webpack_require__(41)("IE_PROTO");
      var Empty = function () {
        /* empty */
      };
      var PROTOTYPE = "prototype";

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__(15)("iframe");
        var i = enumBugKeys.length;
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe.style.display = "none";
        __webpack_require__(48).appendChild(iframe);
        iframe.src = "javascript:"; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(
          lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
        );
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };

      module.exports =
        Object.create ||
        function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };

      /***/
    },
    /* 47 */
    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(11);
      var anObject = __webpack_require__(12);
      var getKeys = __webpack_require__(31);

      module.exports = __webpack_require__(6)
        ? Object.defineProperties
        : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
            return O;
          };

      /***/
    },
    /* 48 */
    /***/
    function (module, exports, __webpack_require__) {
      var document = __webpack_require__(4).document;
      module.exports = document && document.documentElement;

      /***/
    },
    /* 49 */
    /***/
    function (module, exports, __webpack_require__) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = __webpack_require__(33);
      var gOPN = __webpack_require__(50).f;
      var toString = {}.toString;

      var windowNames =
        typeof window == "object" && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];

      var getWindowNames = function (it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == "[object Window]"
          ? getWindowNames(it)
          : gOPN(toIObject(it));
      };

      /***/
    },
    /* 50 */
    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__(32);
      var hiddenKeys = __webpack_require__(42).concat("length", "prototype");

      exports.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };

      /***/
    },
    /* 51 */
    /***/
    function (module, exports, __webpack_require__) {
      var pIE = __webpack_require__(44);
      var createDesc = __webpack_require__(17);
      var toIObject = __webpack_require__(33);
      var toPrimitive = __webpack_require__(16);
      var has = __webpack_require__(5);
      var IE8_DOM_DEFINE = __webpack_require__(14);
      var gOPD = Object.getOwnPropertyDescriptor;

      exports.f = __webpack_require__(6)
        ? gOPD
        : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return gOPD(O, P);
              } catch (e) {
                /* empty */
              }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
          };

      /***/
    },
    ,
    ,
    ,
    ,
    /* 52 */
    /* 53 */
    /* 54 */
    /* 55 */
    /* 56 */
    /***/
    function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(8);
      var core = __webpack_require__(9);
      var fails = __webpack_require__(7);
      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY];
        var exp = {};
        exp[KEY] = exec(fn);
        $export(
          $export.S +
            $export.F *
              fails(function () {
                fn(1);
              }),
          "Object",
          exp
        );
      };

      /***/
    },
    ,
    /* 57 */
    /* 58 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(36);
      module.exports = function (it) {
        return Object(defined(it));
      };

      /***/
    },
    /* 59 */
    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__(5);
      var toObject = __webpack_require__(58);
      var IE_PROTO = __webpack_require__(41)("IE_PROTO");
      var ObjectProto = Object.prototype;

      module.exports =
        Object.getPrototypeOf ||
        function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (
            typeof O.constructor == "function" &&
            O instanceof O.constructor
          ) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectProto : null;
        };

      /***/
    },
    /* 60 */
    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__(58);
      var $keys = __webpack_require__(31);

      __webpack_require__(56)("keys", function () {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 61 */
    /* 62 */
    /* 63 */
    /* 64 */
    /* 65 */
    /* 66 */
    /* 67 */
    /* 68 */
    /* 69 */
    /* 70 */
    /* 71 */
    /***/
    function (module, exports) {
      // 7.2.9 SameValue(x, y)
      module.exports =
        Object.is ||
        function is(x, y) {
          // eslint-disable-next-line no-self-compare
          return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };

      /***/
    },
    ,
    ,
    /* 72 */
    /* 73 */
    /* 74 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      // 19.1.3.6 Object.prototype.toString()
      var classof = __webpack_require__(75);
      var test = {};
      test[__webpack_require__(27)("toStringTag")] = "z";
      if (test + "" != "[object z]") {
        __webpack_require__(18)(
          Object.prototype,
          "toString",
          function toString() {
            return "[object " + classof(this) + "]";
          },
          true
        );
      }

      /***/
    },
    /* 75 */
    /***/
    function (module, exports, __webpack_require__) {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = __webpack_require__(35);
      var TAG = __webpack_require__(27)("toStringTag");
      // ES3 wrong here
      var ARG =
        cof(
          (function () {
            return arguments;
          })()
        ) == "Arguments";

      // fallback for IE11 Script Access Denied error
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) {
          /* empty */
        }
      };

      module.exports = function (it) {
        var O, T, B;
        return it === undefined
          ? "Undefined"
          : it === null
          ? "Null"
          : // @@toStringTag case
          typeof (T = tryGet((O = Object(it)), TAG)) == "string"
          ? T
          : // builtinTag case
          ARG
          ? cof(O)
          : // ES3 arguments fallback
          (B = cof(O)) == "Object" && typeof O.callee == "function"
          ? "Arguments"
          : B;
      };

      /***/
    },
    ,
    ,
    /* 76 */
    /* 77 */
    /* 78 */
    /***/
    function (module, exports) {
      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      module.exports = function (fn, args, that) {
        var un = that === undefined;
        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un
              ? fn(args[0], args[1], args[2])
              : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un
              ? fn(args[0], args[1], args[2], args[3])
              : fn.call(that, args[0], args[1], args[2], args[3]);
        }
        return fn.apply(that, args);
      };

      /***/
    },
    /* 79 */
    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(11).f;
      var FProto = Function.prototype;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = "name";

      // 19.2.4.2 name
      NAME in FProto ||
        (__webpack_require__(6) &&
          dP(FProto, NAME, {
            configurable: true,
            get: function () {
              try {
                return ("" + this).match(nameRE)[1];
              } catch (e) {
                return "";
              }
            },
          }));

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 80 */
    /* 81 */
    /* 82 */
    /* 83 */
    /* 84 */
    /* 85 */
    /* 86 */
    /* 87 */
    /* 88 */
    /* 89 */
    /* 90 */
    /* 91 */
    /* 92 */
    /* 93 */
    /* 94 */
    /* 95 */
    /* 96 */
    /* 97 */
    /* 98 */
    /* 99 */
    /* 100 */
    /* 101 */
    /* 102 */
    /* 103 */
    /* 104 */
    /* 105 */
    /* 106 */
    /* 107 */
    /* 108 */
    /* 109 */
    /* 110 */
    /* 111 */
    /* 112 */
    /* 113 */
    /* 114 */
    /* 115 */
    /* 116 */
    /* 117 */
    /* 118 */
    /* 119 */
    /* 120 */
    /* 121 */
    /* 122 */
    /* 123 */
    /* 124 */
    /* 125 */
    /* 126 */
    /* 127 */
    /* 128 */
    /***/
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(39);
      var defined = __webpack_require__(36);
      // true  -> String#at
      // false -> String#codePointAt
      module.exports = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 ||
            a > 0xdbff ||
            i + 1 === l ||
            (b = s.charCodeAt(i + 1)) < 0xdc00 ||
            b > 0xdfff
            ? TO_STRING
              ? s.charAt(i)
              : a
            : TO_STRING
            ? s.slice(i, i + 2)
            : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
        };
      };

      /***/
    },
    /* 129 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__(22);
      var $export = __webpack_require__(8);
      var redefine = __webpack_require__(18);
      var hide = __webpack_require__(10);
      var Iterators = __webpack_require__(130);
      var $iterCreate = __webpack_require__(131);
      var setToStringTag = __webpack_require__(26);
      var getPrototypeOf = __webpack_require__(59);
      var ITERATOR = __webpack_require__(27)("iterator");
      var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";

      var returnThis = function () {
        return this;
      };

      module.exports = function (
        Base,
        NAME,
        Constructor,
        next,
        DEFAULT,
        IS_SET,
        FORCED
      ) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native =
          proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT
          ? !DEF_VALUES
            ? $default
            : getMethod("entries")
          : undefined;
        var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
          if (
            IteratorPrototype !== Object.prototype &&
            IteratorPrototype.next
          ) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
              hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries,
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            }
          else
            $export(
              $export.P + $export.F * (BUGGY || VALUES_BUG),
              NAME,
              methods
            );
        }
        return methods;
      };

      /***/
    },
    /* 130 */
    /***/
    function (module, exports) {
      module.exports = {};

      /***/
    },
    /* 131 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var create = __webpack_require__(46);
      var descriptor = __webpack_require__(17);
      var setToStringTag = __webpack_require__(26);
      var IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__(10)(
        IteratorPrototype,
        __webpack_require__(27)("iterator"),
        function () {
          return this;
        }
      );

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next),
        });
        setToStringTag(Constructor, NAME + " Iterator");
      };

      /***/
    },
    ,
    /* 132 */
    /* 133 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

      var $export = __webpack_require__(8);
      var toLength = __webpack_require__(38);
      var context = __webpack_require__(134);
      var ENDS_WITH = "endsWith";
      var $endsWith = ""[ENDS_WITH];

      $export(
        $export.P + $export.F * __webpack_require__(136)(ENDS_WITH),
        "String",
        {
          endsWith: function endsWith(
            searchString /* , endPosition = @length */
          ) {
            var that = context(this, searchString, ENDS_WITH);
            var endPosition = arguments.length > 1 ? arguments[1] : undefined;
            var len = toLength(that.length);
            var end =
              endPosition === undefined
                ? len
                : Math.min(toLength(endPosition), len);
            var search = String(searchString);
            return $endsWith
              ? $endsWith.call(that, search, end)
              : that.slice(end - search.length, end) === search;
          },
        }
      );

      /***/
    },
    /* 134 */
    /***/
    function (module, exports, __webpack_require__) {
      // helper for String#{startsWith, endsWith, includes}
      var isRegExp = __webpack_require__(135);
      var defined = __webpack_require__(36);

      module.exports = function (that, searchString, NAME) {
        if (isRegExp(searchString))
          throw TypeError("String#" + NAME + " doesn't accept regex!");
        return String(defined(that));
      };

      /***/
    },
    /* 135 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.2.8 IsRegExp(argument)
      var isObject = __webpack_require__(13);
      var cof = __webpack_require__(35);
      var MATCH = __webpack_require__(27)("match");
      module.exports = function (it) {
        var isRegExp;
        return (
          isObject(it) &&
          ((isRegExp = it[MATCH]) !== undefined
            ? !!isRegExp
            : cof(it) == "RegExp")
        );
      };

      /***/
    },
    /* 136 */
    /***/
    function (module, exports, __webpack_require__) {
      var MATCH = __webpack_require__(27)("match");
      module.exports = function (KEY) {
        var re = /./;
        try {
          "/./"[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !"/./"[KEY](re);
          } catch (f) {
            /* empty */
          }
        }
        return true;
      };

      /***/
    },
    /* 137 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      // 21.1.3.7 String.prototype.includes(searchString, position = 0)

      var $export = __webpack_require__(8);
      var context = __webpack_require__(134);
      var INCLUDES = "includes";

      $export(
        $export.P + $export.F * __webpack_require__(136)(INCLUDES),
        "String",
        {
          includes: function includes(searchString /* , position = 0 */) {
            return !!~context(this, searchString, INCLUDES).indexOf(
              searchString,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
        }
      );

      /***/
    },
    ,
    /* 138 */
    /* 139 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      // 21.1.3.18 String.prototype.startsWith(searchString [, position ])

      var $export = __webpack_require__(8);
      var toLength = __webpack_require__(38);
      var context = __webpack_require__(134);
      var STARTS_WITH = "startsWith";
      var $startsWith = ""[STARTS_WITH];

      $export(
        $export.P + $export.F * __webpack_require__(136)(STARTS_WITH),
        "String",
        {
          startsWith: function startsWith(searchString /* , position = 0 */) {
            var that = context(this, searchString, STARTS_WITH);
            var index = toLength(
              Math.min(
                arguments.length > 1 ? arguments[1] : undefined,
                that.length
              )
            );
            var search = String(searchString);
            return $startsWith
              ? $startsWith.call(that, search, index)
              : that.slice(index, index + search.length) === search;
          },
        }
      );

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 140 */
    /* 141 */
    /* 142 */
    /* 143 */
    /* 144 */
    /* 145 */
    /* 146 */
    /* 147 */
    /* 148 */
    /* 149 */
    /* 150 */
    /* 151 */
    /* 152 */
    /* 153 */
    /* 154 */
    /* 155 */
    /* 156 */
    /* 157 */
    /* 158 */
    /***/
    function (module, exports, __webpack_require__) {
      var DateProto = Date.prototype;
      var INVALID_DATE = "Invalid Date";
      var TO_STRING = "toString";
      var $toString = DateProto[TO_STRING];
      var getTime = DateProto.getTime;
      if (new Date(NaN) + "" != INVALID_DATE) {
        __webpack_require__(18)(DateProto, TO_STRING, function toString() {
          var value = getTime.call(this);
          // eslint-disable-next-line no-self-compare
          return value === value ? $toString.call(this) : INVALID_DATE;
        });
      }

      /***/
    },
    ,
    ,
    /* 159 */
    /* 160 */
    /* 161 */
    /***/
    function (module, exports, __webpack_require__) {
      // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
      var $export = __webpack_require__(8);

      $export($export.S, "Array", {
        isArray: __webpack_require__(45),
      });

      /***/
    },
    ,
    /* 162 */
    /* 163 */
    /***/
    function (module, exports, __webpack_require__) {
      // call something on iterator step with safe closing on error
      var anObject = __webpack_require__(12);
      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator["return"];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };

      /***/
    },
    /* 164 */
    /***/
    function (module, exports, __webpack_require__) {
      // check on default Array iterator
      var Iterators = __webpack_require__(130);
      var ITERATOR = __webpack_require__(27)("iterator");
      var ArrayProto = Array.prototype;

      module.exports = function (it) {
        return (
          it !== undefined &&
          (Iterators.Array === it || ArrayProto[ITERATOR] === it)
        );
      };

      /***/
    },
    ,
    /* 165 */
    /* 166 */
    /***/
    function (module, exports, __webpack_require__) {
      var classof = __webpack_require__(75);
      var ITERATOR = __webpack_require__(27)("iterator");
      var Iterators = __webpack_require__(130);
      module.exports = __webpack_require__(9).getIteratorMethod = function (
        it
      ) {
        if (it != undefined)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };

      /***/
    },
    /* 167 */
    /***/
    function (module, exports, __webpack_require__) {
      var ITERATOR = __webpack_require__(27)("iterator");
      var SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR]();
        riter["return"] = function () {
          SAFE_CLOSING = true;
        };
        // eslint-disable-next-line no-throw-literal
        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {
        /* empty */
      }

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter.next = function () {
            return {
              done: (safe = true),
            };
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {
          /* empty */
        }
        return safe;
      };

      /***/
    },
    ,
    ,
    /* 168 */
    /* 169 */
    /* 170 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(7);

      module.exports = function (method, arg) {
        return (
          !!method &&
          fails(function () {
            // eslint-disable-next-line no-useless-call
            arg
              ? method.call(
                  null,
                  function () {
                    /* empty */
                  },
                  1
                )
              : method.call(null);
          })
        );
      };

      /***/
    },
    ,
    /* 171 */
    /* 172 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var $export = __webpack_require__(8);
      var aFunction = __webpack_require__(24);
      var toObject = __webpack_require__(58);
      var fails = __webpack_require__(7);
      var $sort = [].sort;
      var test = [1, 2, 3];

      $export(
        $export.P +
          $export.F *
            (fails(function () {
              // IE8-
              test.sort(undefined);
            }) ||
              !fails(function () {
                // V8 bug
                test.sort(null);
                // Old WebKit
              }) ||
              !__webpack_require__(170)($sort)),
        "Array",
        {
          // 22.1.3.25 Array.prototype.sort(comparefn)
          sort: function sort(comparefn) {
            return comparefn === undefined
              ? $sort.call(toObject(this))
              : $sort.call(toObject(this), aFunction(comparefn));
          },
        }
      );

      /***/
    },
    /* 173 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var $export = __webpack_require__(8);
      var $forEach = __webpack_require__(174)(0);
      var STRICT = __webpack_require__(170)([].forEach, true);

      $export($export.P + $export.F * !STRICT, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach(callbackfn /* , thisArg */) {
          return $forEach(this, callbackfn, arguments[1]);
        },
      });

      /***/
    },
    /* 174 */
    /***/
    function (module, exports, __webpack_require__) {
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
      module.exports = function (TYPE, $create) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        var create = $create || asc;
        return function ($this, callbackfn, that) {
          var O = toObject($this);
          var self = IObject(O);
          var f = ctx(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var result = IS_MAP
            ? create($this, length)
            : IS_FILTER
            ? create($this, 0)
            : undefined;
          var val, res;
          for (; length > index; index++)
            if (NO_HOLES || index in self) {
              val = self[index];
              res = f(val, index, O);
              if (TYPE) {
                if (IS_MAP) result[index] = res; // map
                else if (res)
                  switch (TYPE) {
                    case 3:
                      return true; // some
                    case 5:
                      return val; // find
                    case 6:
                      return index; // findIndex
                    case 2:
                      result.push(val); // filter
                  }
                else if (IS_EVERY) return false; // every
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
      };

      /***/
    },
    /* 175 */
    /***/
    function (module, exports, __webpack_require__) {
      // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
      var speciesConstructor = __webpack_require__(176);

      module.exports = function (original, length) {
        return new (speciesConstructor(original))(length);
      };

      /***/
    },
    /* 176 */
    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(13);
      var isArray = __webpack_require__(45);
      var SPECIES = __webpack_require__(27)("species");

      module.exports = function (original) {
        var C;
        if (isArray(original)) {
          C = original.constructor;
          // cross-realm fallback
          if (typeof C == "function" && (C === Array || isArray(C.prototype)))
            C = undefined;
          if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }
        return C === undefined ? Array : C;
      };

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 177 */
    /* 178 */
    /* 179 */
    /* 180 */
    /* 181 */
    /* 182 */
    /* 183 */
    /* 184 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var $export = __webpack_require__(8);
      var $indexOf = __webpack_require__(37)(false);
      var $native = [].indexOf;
      var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

      $export(
        $export.P +
          $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)),
        "Array",
        {
          // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
          indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
            return NEGATIVE_ZERO
              ? // convert -0 to +0
                $native.apply(this, arguments) || 0
              : $indexOf(this, searchElement, arguments[1]);
          },
        }
      );

      /***/
    },
    ,
    ,
    /* 185 */
    /* 186 */
    /* 187 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

      var toObject = __webpack_require__(58);
      var toAbsoluteIndex = __webpack_require__(40);
      var toLength = __webpack_require__(38);

      module.exports =
        [].copyWithin ||
        function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
          var O = toObject(this);
          var len = toLength(O.length);
          var to = toAbsoluteIndex(target, len);
          var from = toAbsoluteIndex(start, len);
          var end = arguments.length > 2 ? arguments[2] : undefined;
          var count = Math.min(
            (end === undefined ? len : toAbsoluteIndex(end, len)) - from,
            len - to
          );
          var inc = 1;
          if (from < to && to < from + count) {
            inc = -1;
            from += count - 1;
            to += count - 1;
          }
          while (count-- > 0) {
            if (from in O) O[to] = O[from];
            else delete O[to];
            to += inc;
            from += inc;
          }
          return O;
        };

      /***/
    },
    /* 188 */
    /***/
    function (module, exports, __webpack_require__) {
      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__(27)("unscopables");
      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == undefined)
        __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };

      /***/
    },
    ,
    /* 189 */
    /* 190 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

      var toObject = __webpack_require__(58);
      var toAbsoluteIndex = __webpack_require__(40);
      var toLength = __webpack_require__(38);
      module.exports = function fill(value /* , start = 0, end = @length */) {
        var O = toObject(this);
        var length = toLength(O.length);
        var aLen = arguments.length;
        var index = toAbsoluteIndex(
          aLen > 1 ? arguments[1] : undefined,
          length
        );
        var end = aLen > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
      };

      /***/
    },
    ,
    ,
    ,
    /* 191 */
    /* 192 */
    /* 193 */
    /* 194 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(4);
      var dP = __webpack_require__(11);
      var DESCRIPTORS = __webpack_require__(6);
      var SPECIES = __webpack_require__(27)("species");

      module.exports = function (KEY) {
        var C = global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES])
          dP.f(C, SPECIES, {
            configurable: true,
            get: function () {
              return this;
            },
          });
      };

      /***/
    },
    /* 195 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var addToUnscopables = __webpack_require__(188);
      var step = __webpack_require__(196);
      var Iterators = __webpack_require__(130);
      var toIObject = __webpack_require__(33);

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__(129)(
        Array,
        "Array",
        function (iterated, kind) {
          this._t = toIObject(iterated); // target
          this._i = 0; // next index
          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        },
        function () {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }
          if (kind == "keys") return step(0, index);
          if (kind == "values") return step(0, O[index]);
          return step(0, [index, O[index]]);
        },
        "values"
      );

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");

      /***/
    },
    /* 196 */
    /***/
    function (module, exports) {
      module.exports = function (done, value) {
        return {
          value: value,
          done: !!done,
        };
      };

      /***/
    },
    ,
    /* 197 */
    /* 198 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      // 21.2.5.3 get RegExp.prototype.flags
      var anObject = __webpack_require__(12);
      module.exports = function () {
        var that = anObject(this);
        var result = "";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.unicode) result += "u";
        if (that.sticky) result += "y";
        return result;
      };

      /***/
    },
    /* 199 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var regexpExec = __webpack_require__(200);
      __webpack_require__(8)(
        {
          target: "RegExp",
          proto: true,
          forced: regexpExec !== /./.exec,
        },
        {
          exec: regexpExec,
        }
      );

      /***/
    },
    /* 200 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var regexpFlags = __webpack_require__(198);

      var nativeExec = RegExp.prototype.exec;
      // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.
      var nativeReplace = String.prototype.replace;

      var patchedExec = nativeExec;

      var LAST_INDEX = "lastIndex";

      var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/,
          re2 = /b*/g;
        nativeExec.call(re1, "a");
        nativeExec.call(re2, "a");
        return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
      })();

      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;

      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;

          if (NPCG_INCLUDED) {
            reCopy = new RegExp(
              "^" + re.source + "$(?!\\s)",
              regexpFlags.call(re)
            );
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

          match = nativeExec.call(re, str);

          if (UPDATES_LAST_INDEX_WRONG && match) {
            re[LAST_INDEX] = re.global
              ? match.index + match[0].length
              : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            // eslint-disable-next-line no-loop-func
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      module.exports = patchedExec;

      /***/
    },
    /* 201 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(202);
      var anObject = __webpack_require__(12);
      var $flags = __webpack_require__(198);
      var DESCRIPTORS = __webpack_require__(6);
      var TO_STRING = "toString";
      var $toString = /./[TO_STRING];

      var define = function (fn) {
        __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
      };

      // 21.2.5.14 RegExp.prototype.toString()
      if (
        __webpack_require__(7)(function () {
          return (
            $toString.call({
              source: "a",
              flags: "b",
            }) != "/a/b"
          );
        })
      ) {
        define(function toString() {
          var R = anObject(this);
          return "/".concat(
            R.source,
            "/",
            "flags" in R
              ? R.flags
              : !DESCRIPTORS && R instanceof RegExp
              ? $flags.call(R)
              : undefined
          );
        });
        // FF44- RegExp#toString has a wrong name
      } else if ($toString.name != TO_STRING) {
        define(function toString() {
          return $toString.call(this);
        });
      }

      /***/
    },
    /* 202 */
    /***/
    function (module, exports, __webpack_require__) {
      // 21.2.5.3 get RegExp.prototype.flags()
      if (__webpack_require__(6) && /./g.flags != "g")
        __webpack_require__(11).f(RegExp.prototype, "flags", {
          configurable: true,
          get: __webpack_require__(198),
        });

      /***/
    },
    /* 203 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(12);
      var toLength = __webpack_require__(38);
      var advanceStringIndex = __webpack_require__(204);
      var regExpExec = __webpack_require__(205);

      // @@match logic
      __webpack_require__(206)(
        "match",
        1,
        function (defined, MATCH, $match, maybeCallNative) {
          return [
            // `String.prototype.match` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.match
            function match(regexp) {
              var O = defined(this);
              var fn = regexp == undefined ? undefined : regexp[MATCH];
              return fn !== undefined
                ? fn.call(regexp, O)
                : new RegExp(regexp)[MATCH](String(O));
            },
            // `RegExp.prototype[@@match]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
            function (regexp) {
              var res = maybeCallNative($match, regexp, this);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              if (!rx.global) return regExpExec(rx, S);
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
              var A = [];
              var n = 0;
              var result;
              while ((result = regExpExec(rx, S)) !== null) {
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(
                    S,
                    toLength(rx.lastIndex),
                    fullUnicode
                  );
                n++;
              }
              return n === 0 ? null : A;
            },
          ];
        }
      );

      /***/
    },
    /* 204 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var at = __webpack_require__(128)(true);

      // `AdvanceStringIndex` abstract operation
      // https://tc39.github.io/ecma262/#sec-advancestringindex
      module.exports = function (S, index, unicode) {
        return index + (unicode ? at(S, index).length : 1);
      };

      /***/
    },
    /* 205 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var classof = __webpack_require__(75);
      var builtinExec = RegExp.prototype.exec;

      // `RegExpExec` abstract operation
      // https://tc39.github.io/ecma262/#sec-regexpexec
      module.exports = function (R, S) {
        var exec = R.exec;
        if (typeof exec === "function") {
          var result = exec.call(R, S);
          if (typeof result !== "object") {
            throw new TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          }
          return result;
        }
        if (classof(R) !== "RegExp") {
          throw new TypeError("RegExp#exec called on incompatible receiver");
        }
        return builtinExec.call(R, S);
      };

      /***/
    },
    /* 206 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(199);
      var redefine = __webpack_require__(18);
      var hide = __webpack_require__(10);
      var fails = __webpack_require__(7);
      var defined = __webpack_require__(36);
      var wks = __webpack_require__(27);
      var regexpExec = __webpack_require__(200);

      var SPECIES = wks("species");

      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;
        re.exec = function () {
          var result = [];
          result.groups = {
            a: "7",
          };
          return result;
        };
        return "".replace(re, "$<a>") !== "7";
      });

      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
        // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function () {
          return originalExec.apply(this, arguments);
        };
        var result = "ab".split(re);
        return result.length === 2 && result[0] === "a" && result[1] === "b";
      })();

      module.exports = function (KEY, length, exec) {
        var SYMBOL = wks(KEY);

        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};
          O[SYMBOL] = function () {
            return 7;
          };
          return ""[KEY](O) != 7;
        });

        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL
          ? !fails(function () {
              // Symbol-named RegExp methods call .exec
              var execCalled = false;
              var re = /a/;
              re.exec = function () {
                execCalled = true;
                return null;
              };
              if (KEY === "split") {
                // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.
                re.constructor = {};
                re.constructor[SPECIES] = function () {
                  return re;
                };
              }
              re[SYMBOL]("");
              return !execCalled;
            })
          : undefined;

        if (
          !DELEGATES_TO_SYMBOL ||
          !DELEGATES_TO_EXEC ||
          (KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
          (KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
        ) {
          var nativeRegExpMethod = /./[SYMBOL];
          var fns = exec(
            defined,
            SYMBOL,
            ""[KEY],
            function maybeCallNative(
              nativeMethod,
              regexp,
              str,
              arg2,
              forceStringMethod
            ) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  // The native String method already delegates to @@method (this
                  // polyfilled function), leasing to infinite recursion.
                  // We avoid it by directly calling the native @@method method.
                  return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2),
                  };
                }
                return {
                  done: true,
                  value: nativeMethod.call(str, regexp, arg2),
                };
              }
              return {
                done: false,
              };
            }
          );
          var strfn = fns[0];
          var rxfn = fns[1];

          redefine(String.prototype, KEY, strfn);
          hide(
            RegExp.prototype,
            SYMBOL,
            length == 2
              ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                function (string, arg) {
                  return rxfn.call(string, this, arg);
                }
              : // 21.2.5.6 RegExp.prototype[@@match](string)
                // 21.2.5.9 RegExp.prototype[@@search](string)
                function (string) {
                  return rxfn.call(string, this);
                }
          );
        }
      };

      /***/
    },
    /* 207 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(12);
      var toObject = __webpack_require__(58);
      var toLength = __webpack_require__(38);
      var toInteger = __webpack_require__(39);
      var advanceStringIndex = __webpack_require__(204);
      var regExpExec = __webpack_require__(205);
      var max = Math.max;
      var min = Math.min;
      var floor = Math.floor;
      var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

      var maybeToString = function (it) {
        return it === undefined ? it : String(it);
      };

      // @@replace logic
      __webpack_require__(206)(
        "replace",
        2,
        function (defined, REPLACE, $replace, maybeCallNative) {
          return [
            // `String.prototype.replace` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.replace
            function replace(searchValue, replaceValue) {
              var O = defined(this);
              var fn =
                searchValue == undefined ? undefined : searchValue[REPLACE];
              return fn !== undefined
                ? fn.call(searchValue, O, replaceValue)
                : $replace.call(String(O), searchValue, replaceValue);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
            function (regexp, replaceValue) {
              var res = maybeCallNative($replace, regexp, this, replaceValue);
              if (res.done) return res.value;

              var rx = anObject(regexp);
              var S = String(this);
              var functionalReplace = typeof replaceValue === "function";
              if (!functionalReplace) replaceValue = String(replaceValue);
              var global = rx.global;
              if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }
              var results = [];
              while (true) {
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(
                    S,
                    toLength(rx.lastIndex),
                    fullUnicode
                  );
              }
              var accumulatedResult = "";
              var nextSourcePosition = 0;
              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for (var j = 1; j < result.length; j++)
                  captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                  var replacerArgs = [matched].concat(captures, position, S);
                  if (namedCaptures !== undefined)
                    replacerArgs.push(namedCaptures);
                  var replacement = String(
                    replaceValue.apply(undefined, replacerArgs)
                  );
                } else {
                  replacement = getSubstitution(
                    matched,
                    S,
                    position,
                    captures,
                    namedCaptures,
                    replaceValue
                  );
                }
                if (position >= nextSourcePosition) {
                  accumulatedResult +=
                    S.slice(nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }
              return accumulatedResult + S.slice(nextSourcePosition);
            },
          ];

          // https://tc39.github.io/ecma262/#sec-getsubstitution
          function getSubstitution(
            matched,
            str,
            position,
            captures,
            namedCaptures,
            replacement
          ) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
            if (namedCaptures !== undefined) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }
            return $replace.call(replacement, symbols, function (match, ch) {
              var capture;
              switch (ch.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return matched;
                case "`":
                  return str.slice(0, position);
                case "'":
                  return str.slice(tailPos);
                case "<":
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;
                default: // \d\d?
                  var n = +ch;
                  if (n === 0) return match;
                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m)
                      return captures[f - 1] === undefined
                        ? ch.charAt(1)
                        : captures[f - 1] + ch.charAt(1);
                    return match;
                  }
                  capture = captures[n - 1];
              }
              return capture === undefined ? "" : capture;
            });
          }
        }
      );

      /***/
    },
    /* 208 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(12);
      var sameValue = __webpack_require__(71);
      var regExpExec = __webpack_require__(205);

      // @@search logic
      __webpack_require__(206)(
        "search",
        1,
        function (defined, SEARCH, $search, maybeCallNative) {
          return [
            // `String.prototype.search` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.search
            function search(regexp) {
              var O = defined(this);
              var fn = regexp == undefined ? undefined : regexp[SEARCH];
              return fn !== undefined
                ? fn.call(regexp, O)
                : new RegExp(regexp)[SEARCH](String(O));
            },
            // `RegExp.prototype[@@search]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
            function (regexp) {
              var res = maybeCallNative($search, regexp, this);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              var previousLastIndex = rx.lastIndex;
              if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
              var result = regExpExec(rx, S);
              if (!sameValue(rx.lastIndex, previousLastIndex))
                rx.lastIndex = previousLastIndex;
              return result === null ? -1 : result.index;
            },
          ];
        }
      );

      /***/
    },
    /* 209 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var isRegExp = __webpack_require__(135);
      var anObject = __webpack_require__(12);
      var speciesConstructor = __webpack_require__(210);
      var advanceStringIndex = __webpack_require__(204);
      var toLength = __webpack_require__(38);
      var callRegExpExec = __webpack_require__(205);
      var regexpExec = __webpack_require__(200);
      var fails = __webpack_require__(7);
      var $min = Math.min;
      var $push = [].push;
      var $SPLIT = "split";
      var LENGTH = "length";
      var LAST_INDEX = "lastIndex";
      var MAX_UINT32 = 0xffffffff;

      // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
      var SUPPORTS_Y = !fails(function () {
        RegExp(MAX_UINT32, "y");
      });

      // @@split logic
      __webpack_require__(206)(
        "split",
        2,
        function (defined, SPLIT, $split, maybeCallNative) {
          var internalSplit;
          if (
            "abbc"[$SPLIT](/(b)*/)[1] == "c" ||
            "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
            "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
            "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
            "."[$SPLIT](/()()/)[LENGTH] > 1 ||
            ""[$SPLIT](/.?/)[LENGTH]
          ) {
            // based on es5-shim implementation, need to rework it
            internalSplit = function (separator, limit) {
              var string = String(this);
              if (separator === undefined && limit === 0) return [];
              // If `separator` is not a regex, use native split
              if (!isRegExp(separator))
                return $split.call(string, separator, limit);
              var output = [];
              var flags =
                (separator.ignoreCase ? "i" : "") +
                (separator.multiline ? "m" : "") +
                (separator.unicode ? "u" : "") +
                (separator.sticky ? "y" : "");
              var lastLastIndex = 0;
              var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
              // Make `global` and avoid `lastIndex` issues by working with a copy
              var separatorCopy = new RegExp(separator.source, flags + "g");
              var match, lastIndex, lastLength;
              while ((match = regexpExec.call(separatorCopy, string))) {
                lastIndex = separatorCopy[LAST_INDEX];
                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match[LENGTH] > 1 && match.index < string[LENGTH])
                    $push.apply(output, match.slice(1));
                  lastLength = match[0][LENGTH];
                  lastLastIndex = lastIndex;
                  if (output[LENGTH] >= splitLimit) break;
                }
                if (separatorCopy[LAST_INDEX] === match.index)
                  separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
              }
              if (lastLastIndex === string[LENGTH]) {
                if (lastLength || !separatorCopy.test("")) output.push("");
              } else output.push(string.slice(lastLastIndex));
              return output[LENGTH] > splitLimit
                ? output.slice(0, splitLimit)
                : output;
            };
            // Chakra, V8
          } else if ("0"[$SPLIT](undefined, 0)[LENGTH]) {
            internalSplit = function (separator, limit) {
              return separator === undefined && limit === 0
                ? []
                : $split.call(this, separator, limit);
            };
          } else {
            internalSplit = $split;
          }

          return [
            // `String.prototype.split` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.split
            function split(separator, limit) {
              var O = defined(this);
              var splitter =
                separator == undefined ? undefined : separator[SPLIT];
              return splitter !== undefined
                ? splitter.call(separator, O, limit)
                : internalSplit.call(String(O), separator, limit);
            },
            // `RegExp.prototype[@@split]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
            //
            // NOTE: This cannot be properly polyfilled in engines that don't support
            // the 'y' flag.
            function (regexp, limit) {
              var res = maybeCallNative(
                internalSplit,
                regexp,
                this,
                limit,
                internalSplit !== $split
              );
              if (res.done) return res.value;

              var rx = anObject(regexp);
              var S = String(this);
              var C = speciesConstructor(rx, RegExp);

              var unicodeMatching = rx.unicode;
              var flags =
                (rx.ignoreCase ? "i" : "") +
                (rx.multiline ? "m" : "") +
                (rx.unicode ? "u" : "") +
                (SUPPORTS_Y ? "y" : "g");

              // ^(? + rx + ) is needed, in combination with some S slicing, to
              // simulate the 'y' flag.
              var splitter = new C(
                SUPPORTS_Y ? rx : "^(?:" + rx.source + ")",
                flags
              );
              var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
              if (lim === 0) return [];
              if (S.length === 0)
                return callRegExpExec(splitter, S) === null ? [S] : [];
              var p = 0;
              var q = 0;
              var A = [];
              while (q < S.length) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (
                  z === null ||
                  (e = $min(
                    toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)),
                    S.length
                  )) === p
                ) {
                  q = advanceStringIndex(S, q, unicodeMatching);
                } else {
                  A.push(S.slice(p, q));
                  if (A.length === lim) return A;
                  for (var i = 1; i <= z.length - 1; i++) {
                    A.push(z[i]);
                    if (A.length === lim) return A;
                  }
                  q = p = e;
                }
              }
              A.push(S.slice(p));
              return A;
            },
          ];
        }
      );

      /***/
    },
    /* 210 */
    /***/
    function (module, exports, __webpack_require__) {
      // 7.3.20 SpeciesConstructor(O, defaultConstructor)
      var anObject = __webpack_require__(12);
      var aFunction = __webpack_require__(24);
      var SPECIES = __webpack_require__(27)("species");
      module.exports = function (O, D) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined
          ? D
          : aFunction(S);
      };

      /***/
    },
    /* 211 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__(22);
      var global = __webpack_require__(4);
      var ctx = __webpack_require__(23);
      var classof = __webpack_require__(75);
      var $export = __webpack_require__(8);
      var isObject = __webpack_require__(13);
      var aFunction = __webpack_require__(24);
      var anInstance = __webpack_require__(212);
      var forOf = __webpack_require__(213);
      var speciesConstructor = __webpack_require__(210);
      var task = __webpack_require__(214).set;
      var microtask = __webpack_require__(215)();
      var newPromiseCapabilityModule = __webpack_require__(216);
      var perform = __webpack_require__(217);
      var userAgent = __webpack_require__(218);
      var promiseResolve = __webpack_require__(219);
      var PROMISE = "Promise";
      var TypeError = global.TypeError;
      var process = global.process;
      var versions = process && process.versions;
      var v8 = (versions && versions.v8) || "";
      var $Promise = global[PROMISE];
      var isNode = classof(process) == "process";
      var empty = function () {
        /* empty */
      };
      var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
      var newPromiseCapability = (newGenericPromiseCapability =
        newPromiseCapabilityModule.f);

      var USE_NATIVE = !!(function () {
        try {
          // correct subclassing with @@species support
          var promise = $Promise.resolve(1);
          var FakePromise = ((promise.constructor = {})[
            __webpack_require__(27)("species")
          ] = function (exec) {
            exec(empty, empty);
          });
          // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
          return (
            (isNode || typeof PromiseRejectionEvent == "function") &&
            promise.then(empty) instanceof FakePromise &&
            // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // we can't detect it synchronously, so just check versions
            v8.indexOf("6.6") !== 0 &&
            userAgent.indexOf("Chrome/66") === -1
          );
        } catch (e) {
          /* empty */
        }
      })();

      // helpers
      var isThenable = function (it) {
        var then;
        return isObject(it) && typeof (then = it.then) == "function"
          ? then
          : false;
      };
      var notify = function (promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        var chain = promise._c;
        microtask(function () {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;
          var run = function (reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) onHandleUnhandled(promise);
                  promise._h = 1;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain.enter();
                  result = handler(value); // may throw
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError("Promise-chain cycle"));
                } else if ((then = isThenable(result))) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              if (domain && !exited) domain.exit();
              reject(e);
            }
          };
          while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };
      var onUnhandled = function (promise) {
        task.call(global, function () {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console;
          if (unhandled) {
            result = perform(function () {
              if (isNode) {
                process.emit("unhandledRejection", value, promise);
              } else if ((handler = global.onunhandledrejection)) {
                handler({
                  promise: promise,
                  reason: value,
                });
              } else if ((console = global.console) && console.error) {
                console.error("Unhandled promise rejection", value);
              }
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          }
          promise._a = undefined;
          if (unhandled && result.e) throw result.v;
        });
      };
      var isUnhandled = function (promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };
      var onHandleUnhandled = function (promise) {
        task.call(global, function () {
          var handler;
          if (isNode) {
            process.emit("rejectionHandled", promise);
          } else if ((handler = global.onrejectionhandled)) {
            handler({
              promise: promise,
              reason: promise._v,
            });
          }
        });
      };
      var $reject = function (value) {
        var promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };
      var $resolve = function (value) {
        var promise = this;
        var then;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        try {
          if (promise === value)
            throw TypeError("Promise can't be resolved itself");
          if ((then = isThenable(value))) {
            microtask(function () {
              var wrapper = {
                _w: promise,
                _d: false,
              }; // wrap
              try {
                then.call(
                  value,
                  ctx($resolve, wrapper, 1),
                  ctx($reject, wrapper, 1)
                );
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call(
            {
              _w: promise,
              _d: false,
            },
            e
          ); // wrap
        }
      };

      // constructor polyfill
      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        $Promise = function Promise(executor) {
          anInstance(this, $Promise, PROMISE, "_h");
          aFunction(executor);
          Internal.call(this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        // eslint-disable-next-line no-unused-vars
        Internal = function Promise(executor) {
          this._c = []; // <- awaiting reactions
          this._a = undefined; // <- checked in isUnhandled reactions
          this._s = 0; // <- state
          this._d = false; // <- done
          this._v = undefined; // <- value
          this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
          this._n = false; // <- notify
        };
        Internal.prototype = __webpack_require__(220)($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(
              speciesConstructor(this, $Promise)
            );
            reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
            reaction.fail = typeof onRejected == "function" && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          catch: function (onRejected) {
            return this.then(undefined, onRejected);
          },
        });
        OwnPromiseCapability = function () {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
          return C === $Promise || C === Wrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Promise: $Promise,
      });
      __webpack_require__(26)($Promise, PROMISE);
      __webpack_require__(194)(PROMISE);
      Wrapper = __webpack_require__(9)[PROMISE];

      // statics
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        },
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(
            LIBRARY && this === Wrapper ? $Promise : this,
            x
          );
        },
      });
      $export(
        $export.S +
          $export.F *
            !(
              USE_NATIVE &&
              __webpack_require__(167)(function (iter) {
                $Promise.all(iter)["catch"](empty);
              })
            ),
        PROMISE,
        {
          // 25.4.4.1 Promise.all(iterable)
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function () {
              var values = [];
              var index = 0;
              var remaining = 1;
              forOf(iterable, false, function (promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.e) reject(result.v);
            return capability.promise;
          },
          // 25.4.4.4 Promise.race(iterable)
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function () {
              forOf(iterable, false, function (promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (result.e) reject(result.v);
            return capability.promise;
          },
        }
      );

      /***/
    },
    /* 212 */
    /***/
    function (module, exports) {
      module.exports = function (it, Constructor, name, forbiddenField) {
        if (
          !(it instanceof Constructor) ||
          (forbiddenField !== undefined && forbiddenField in it)
        ) {
          throw TypeError(name + ": incorrect invocation!");
        }
        return it;
      };

      /***/
    },
    /* 213 */
    /***/
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(23);
      var call = __webpack_require__(163);
      var isArrayIter = __webpack_require__(164);
      var anObject = __webpack_require__(12);
      var toLength = __webpack_require__(38);
      var getIterFn = __webpack_require__(166);
      var BREAK = {};
      var RETURN = {};
      var exports = (module.exports = function (
        iterable,
        entries,
        fn,
        that,
        ITERATOR
      ) {
        var iterFn = ITERATOR
          ? function () {
              return iterable;
            }
          : getIterFn(iterable);
        var f = ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != "function")
          throw TypeError(iterable + " is not iterable!");
        // fast case for arrays with default iterator
        if (isArrayIter(iterFn))
          for (length = toLength(iterable.length); length > index; index++) {
            result = entries
              ? f(anObject((step = iterable[index]))[0], step[1])
              : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          }
        else
          for (
            iterator = iterFn.call(iterable);
            !(step = iterator.next()).done;

          ) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
      });
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;

      /***/
    },
    /* 214 */
    /***/
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(23);
      var invoke = __webpack_require__(78);
      var html = __webpack_require__(48);
      var cel = __webpack_require__(15);
      var global = __webpack_require__(4);
      var process = global.process;
      var setTask = global.setImmediate;
      var clearTask = global.clearImmediate;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var defer, channel, port;
      var run = function () {
        var id = +this;
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listener = function (event) {
        run.call(event.data);
      };
      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [];
          var i = 1;
          while (arguments.length > i) args.push(arguments[i++]);
          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn == "function" ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (__webpack_require__(35)(process) == "process") {
          defer = function (id) {
            process.nextTick(ctx(run, id, 1));
          };
          // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(ctx(run, id, 1));
          };
          // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (
          global.addEventListener &&
          typeof postMessage == "function" &&
          !global.importScripts
        ) {
          defer = function (id) {
            global.postMessage(id + "", "*");
          };
          global.addEventListener("message", listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in cel("script")) {
          defer = function (id) {
            html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function (id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask,
      };

      /***/
    },
    /* 215 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var macrotask = __webpack_require__(214).set;
      var Observer = global.MutationObserver || global.WebKitMutationObserver;
      var process = global.process;
      var Promise = global.Promise;
      var isNode = __webpack_require__(35)(process) == "process";

      module.exports = function () {
        var head, last, notify;

        var flush = function () {
          var parent, fn;
          if (isNode && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (e) {
              if (head) notify();
              else last = undefined;
              throw e;
            }
          }
          last = undefined;
          if (parent) parent.enter();
        };

        // Node.js
        if (isNode) {
          notify = function () {
            process.nextTick(flush);
          };
          // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
        } else if (
          Observer &&
          !(global.navigator && global.navigator.standalone)
        ) {
          var toggle = true;
          var node = document.createTextNode("");
          new Observer(flush).observe(node, {
            characterData: true,
          }); // eslint-disable-line no-new
          notify = function () {
            node.data = toggle = !toggle;
          };
          // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          var promise = Promise.resolve(undefined);
          notify = function () {
            promise.then(flush);
          };
          // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout
        } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }

        return function (fn) {
          var task = {
            fn: fn,
            next: undefined,
          };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      };

      /***/
    },
    /* 216 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      // 25.4.1.5 NewPromiseCapability(C)
      var aFunction = __webpack_require__(24);

      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined)
            throw TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }

      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };

      /***/
    },
    /* 217 */
    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return {
            e: false,
            v: exec(),
          };
        } catch (e) {
          return {
            e: true,
            v: e,
          };
        }
      };

      /***/
    },
    /* 218 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var navigator = global.navigator;

      module.exports = (navigator && navigator.userAgent) || "";

      /***/
    },
    /* 219 */
    /***/
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(12);
      var isObject = __webpack_require__(13);
      var newPromiseCapability = __webpack_require__(216);

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };

      /***/
    },
    /* 220 */
    /***/
    function (module, exports, __webpack_require__) {
      var redefine = __webpack_require__(18);
      module.exports = function (target, src, safe) {
        for (var key in src) redefine(target, key, src[key], safe);
        return target;
      };

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 221 */
    /* 222 */
    /* 223 */
    /* 224 */
    /* 225 */
    /* 226 */
    /* 227 */
    /* 228 */
    /* 229 */
    /* 230 */
    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(4);
      var hide = __webpack_require__(10);
      var uid = __webpack_require__(19);
      var TYPED = uid("typed_array");
      var VIEW = uid("view");
      var ABV = !!(global.ArrayBuffer && global.DataView);
      var CONSTR = ABV;
      var i = 0;
      var l = 9;
      var Typed;

      var TypedArrayConstructors =
        "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
          ","
        );

      while (i < l) {
        if ((Typed = global[TypedArrayConstructors[i++]])) {
          hide(Typed.prototype, TYPED, true);
          hide(Typed.prototype, VIEW, true);
        } else CONSTR = false;
      }

      module.exports = {
        ABV: ABV,
        CONSTR: CONSTR,
        TYPED: TYPED,
        VIEW: VIEW,
      };

      /***/
    },
    /* 231 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(4);
      var DESCRIPTORS = __webpack_require__(6);
      var LIBRARY = __webpack_require__(22);
      var $typed = __webpack_require__(230);
      var hide = __webpack_require__(10);
      var redefineAll = __webpack_require__(220);
      var fails = __webpack_require__(7);
      var anInstance = __webpack_require__(212);
      var toInteger = __webpack_require__(39);
      var toLength = __webpack_require__(38);
      var toIndex = __webpack_require__(232);
      var gOPN = __webpack_require__(50).f;
      var dP = __webpack_require__(11).f;
      var arrayFill = __webpack_require__(190);
      var setToStringTag = __webpack_require__(26);
      var ARRAY_BUFFER = "ArrayBuffer";
      var DATA_VIEW = "DataView";
      var PROTOTYPE = "prototype";
      var WRONG_LENGTH = "Wrong length!";
      var WRONG_INDEX = "Wrong index!";
      var $ArrayBuffer = global[ARRAY_BUFFER];
      var $DataView = global[DATA_VIEW];
      var Math = global.Math;
      var RangeError = global.RangeError;
      // eslint-disable-next-line no-shadow-restricted-names
      var Infinity = global.Infinity;
      var BaseBuffer = $ArrayBuffer;
      var abs = Math.abs;
      var pow = Math.pow;
      var floor = Math.floor;
      var log = Math.log;
      var LN2 = Math.LN2;
      var BUFFER = "buffer";
      var BYTE_LENGTH = "byteLength";
      var BYTE_OFFSET = "byteOffset";
      var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
      var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
      var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;

      // IEEE754 conversions based on https://github.com/feross/ieee754
      function packIEEE754(value, mLen, nBytes) {
        var buffer = new Array(nBytes);
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var i = 0;
        var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
        var e, m, c;
        value = abs(value);
        // eslint-disable-next-line no-self-compare
        if (value != value || value === Infinity) {
          // eslint-disable-next-line no-self-compare
          m = value != value ? 1 : 0;
          e = eMax;
        } else {
          e = floor(log(value) / LN2);
          if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
        e = (e << mLen) | m;
        eLen += mLen;
        for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
        buffer[--i] |= s * 128;
        return buffer;
      }

      function unpackIEEE754(buffer, mLen, nBytes) {
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = eLen - 7;
        var i = nBytes - 1;
        var s = buffer[i--];
        var e = s & 127;
        var m;
        s >>= 7;
        for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
        m = e & ((1 << -nBits) - 1);
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : s ? -Infinity : Infinity;
        } else {
          m = m + pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * pow(2, e - mLen);
      }

      function unpackI32(bytes) {
        return (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0];
      }

      function packI8(it) {
        return [it & 0xff];
      }

      function packI16(it) {
        return [it & 0xff, (it >> 8) & 0xff];
      }

      function packI32(it) {
        return [
          it & 0xff,
          (it >> 8) & 0xff,
          (it >> 16) & 0xff,
          (it >> 24) & 0xff,
        ];
      }

      function packF64(it) {
        return packIEEE754(it, 52, 8);
      }

      function packF32(it) {
        return packIEEE754(it, 23, 4);
      }

      function addGetter(C, key, internal) {
        dP(C[PROTOTYPE], key, {
          get: function () {
            return this[internal];
          },
        });
      }

      function get(view, bytes, index, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
        var store = view[$BUFFER]._b;
        var start = intIndex + view[$OFFSET];
        var pack = store.slice(start, start + bytes);
        return isLittleEndian ? pack : pack.reverse();
      }

      function set(view, bytes, index, conversion, value, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
        var store = view[$BUFFER]._b;
        var start = intIndex + view[$OFFSET];
        var pack = conversion(+value);
        for (var i = 0; i < bytes; i++)
          store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }

      if (!$typed.ABV) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          var byteLength = toIndex(length);
          this._b = arrayFill.call(new Array(byteLength), 0);
          this[$LENGTH] = byteLength;
        };

        $DataView = function DataView(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          var bufferLength = buffer[$LENGTH];
          var offset = toInteger(byteOffset);
          if (offset < 0 || offset > bufferLength)
            throw RangeError("Wrong offset!");
          byteLength =
            byteLength === undefined
              ? bufferLength - offset
              : toLength(byteLength);
          if (offset + byteLength > bufferLength)
            throw RangeError(WRONG_LENGTH);
          this[$BUFFER] = buffer;
          this[$OFFSET] = offset;
          this[$LENGTH] = byteLength;
        };

        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
          addGetter($DataView, BUFFER, "_b");
          addGetter($DataView, BYTE_LENGTH, "_l");
          addGetter($DataView, BYTE_OFFSET, "_o");
        }

        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return (get(this, 1, byteOffset)[0] << 24) >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (((bytes[1] << 8) | bytes[0]) << 16) >> 16;
          },
          getUint16: function getUint16(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8) | bytes[0];
          },
          getInt32: function getInt32(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
          },
          getUint32: function getUint32(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setUint16: function setUint16(
            byteOffset,
            value /* , littleEndian */
          ) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setUint32: function setUint32(
            byteOffset,
            value /* , littleEndian */
          ) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setFloat32: function setFloat32(
            byteOffset,
            value /* , littleEndian */
          ) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
          },
          setFloat64: function setFloat64(
            byteOffset,
            value /* , littleEndian */
          ) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
          },
        });
      } else {
        if (
          !fails(function () {
            $ArrayBuffer(1);
          }) ||
          !fails(function () {
            new $ArrayBuffer(-1); // eslint-disable-line no-new
          }) ||
          fails(function () {
            new $ArrayBuffer(); // eslint-disable-line no-new
            new $ArrayBuffer(1.5); // eslint-disable-line no-new
            new $ArrayBuffer(NaN); // eslint-disable-line no-new
            return $ArrayBuffer.name != ARRAY_BUFFER;
          })
        ) {
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
          };
          var ArrayBufferProto = ($ArrayBuffer[PROTOTYPE] =
            BaseBuffer[PROTOTYPE]);
          for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ) {
            if (!((key = keys[j++]) in $ArrayBuffer))
              hide($ArrayBuffer, key, BaseBuffer[key]);
          }
          if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
        }
        // iOS Safari 7.x bug
        var view = new $DataView(new $ArrayBuffer(2));
        var $setInt8 = $DataView[PROTOTYPE].setInt8;
        view.setInt8(0, 2147483648);
        view.setInt8(1, 2147483649);
        if (view.getInt8(0) || !view.getInt8(1))
          redefineAll(
            $DataView[PROTOTYPE],
            {
              setInt8: function setInt8(byteOffset, value) {
                $setInt8.call(this, byteOffset, (value << 24) >> 24);
              },
              setUint8: function setUint8(byteOffset, value) {
                $setInt8.call(this, byteOffset, (value << 24) >> 24);
              },
            },
            true
          );
      }
      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);
      hide($DataView[PROTOTYPE], $typed.VIEW, true);
      exports[ARRAY_BUFFER] = $ArrayBuffer;
      exports[DATA_VIEW] = $DataView;

      /***/
    },
    /* 232 */
    /***/
    function (module, exports, __webpack_require__) {
      // https://tc39.github.io/ecma262/#sec-toindex
      var toInteger = __webpack_require__(39);
      var toLength = __webpack_require__(38);
      module.exports = function (it) {
        if (it === undefined) return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length) throw RangeError("Wrong length!");
        return length;
      };

      /***/
    },
    ,
    ,
    /* 233 */
    /* 234 */
    /* 235 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      if (__webpack_require__(6)) {
        var LIBRARY = __webpack_require__(22);
        var global = __webpack_require__(4);
        var fails = __webpack_require__(7);
        var $export = __webpack_require__(8);
        var $typed = __webpack_require__(230);
        var $buffer = __webpack_require__(231);
        var ctx = __webpack_require__(23);
        var anInstance = __webpack_require__(212);
        var propertyDesc = __webpack_require__(17);
        var hide = __webpack_require__(10);
        var redefineAll = __webpack_require__(220);
        var toInteger = __webpack_require__(39);
        var toLength = __webpack_require__(38);
        var toIndex = __webpack_require__(232);
        var toAbsoluteIndex = __webpack_require__(40);
        var toPrimitive = __webpack_require__(16);
        var has = __webpack_require__(5);
        var classof = __webpack_require__(75);
        var isObject = __webpack_require__(13);
        var toObject = __webpack_require__(58);
        var isArrayIter = __webpack_require__(164);
        var create = __webpack_require__(46);
        var getPrototypeOf = __webpack_require__(59);
        var gOPN = __webpack_require__(50).f;
        var getIterFn = __webpack_require__(166);
        var uid = __webpack_require__(19);
        var wks = __webpack_require__(27);
        var createArrayMethod = __webpack_require__(174);
        var createArrayIncludes = __webpack_require__(37);
        var speciesConstructor = __webpack_require__(210);
        var ArrayIterators = __webpack_require__(195);
        var Iterators = __webpack_require__(130);
        var $iterDetect = __webpack_require__(167);
        var setSpecies = __webpack_require__(194);
        var arrayFill = __webpack_require__(190);
        var arrayCopyWithin = __webpack_require__(187);
        var $DP = __webpack_require__(11);
        var $GOPD = __webpack_require__(51);
        var dP = $DP.f;
        var gOPD = $GOPD.f;
        var RangeError = global.RangeError;
        var TypeError = global.TypeError;
        var Uint8Array = global.Uint8Array;
        var ARRAY_BUFFER = "ArrayBuffer";
        var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
        var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
        var PROTOTYPE = "prototype";
        var ArrayProto = Array[PROTOTYPE];
        var $ArrayBuffer = $buffer.ArrayBuffer;
        var $DataView = $buffer.DataView;
        var arrayForEach = createArrayMethod(0);
        var arrayFilter = createArrayMethod(2);
        var arraySome = createArrayMethod(3);
        var arrayEvery = createArrayMethod(4);
        var arrayFind = createArrayMethod(5);
        var arrayFindIndex = createArrayMethod(6);
        var arrayIncludes = createArrayIncludes(true);
        var arrayIndexOf = createArrayIncludes(false);
        var arrayValues = ArrayIterators.values;
        var arrayKeys = ArrayIterators.keys;
        var arrayEntries = ArrayIterators.entries;
        var arrayLastIndexOf = ArrayProto.lastIndexOf;
        var arrayReduce = ArrayProto.reduce;
        var arrayReduceRight = ArrayProto.reduceRight;
        var arrayJoin = ArrayProto.join;
        var arraySort = ArrayProto.sort;
        var arraySlice = ArrayProto.slice;
        var arrayToString = ArrayProto.toString;
        var arrayToLocaleString = ArrayProto.toLocaleString;
        var ITERATOR = wks("iterator");
        var TAG = wks("toStringTag");
        var TYPED_CONSTRUCTOR = uid("typed_constructor");
        var DEF_CONSTRUCTOR = uid("def_constructor");
        var ALL_CONSTRUCTORS = $typed.CONSTR;
        var TYPED_ARRAY = $typed.TYPED;
        var VIEW = $typed.VIEW;
        var WRONG_LENGTH = "Wrong length!";

        var $map = createArrayMethod(1, function (O, length) {
          return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
        });

        var LITTLE_ENDIAN = fails(function () {
          // eslint-disable-next-line no-undef
          return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
        });

        var FORCED_SET =
          !!Uint8Array &&
          !!Uint8Array[PROTOTYPE].set &&
          fails(function () {
            new Uint8Array(1).set({});
          });

        var toOffset = function (it, BYTES) {
          var offset = toInteger(it);
          if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
          return offset;
        };

        var validate = function (it) {
          if (isObject(it) && TYPED_ARRAY in it) return it;
          throw TypeError(it + " is not a typed array!");
        };

        var allocate = function (C, length) {
          if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
            throw TypeError("It is not a typed array constructor!");
          }
          return new C(length);
        };

        var speciesFromList = function (O, list) {
          return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        };

        var fromList = function (C, list) {
          var index = 0;
          var length = list.length;
          var result = allocate(C, length);
          while (length > index) result[index] = list[index++];
          return result;
        };

        var addGetter = function (it, key, internal) {
          dP(it, key, {
            get: function () {
              return this._d[internal];
            },
          });
        };

        var $from = function from(source /* , mapfn, thisArg */) {
          var O = toObject(source);
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var iterFn = getIterFn(O);
          var i, length, values, result, step, iterator;
          if (iterFn != undefined && !isArrayIter(iterFn)) {
            for (
              iterator = iterFn.call(O), values = [], i = 0;
              !(step = iterator.next()).done;
              i++
            ) {
              values.push(step.value);
            }
            O = values;
          }
          if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
          for (
            i = 0, length = toLength(O.length), result = allocate(this, length);
            length > i;
            i++
          ) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };

        var $of = function of(/* ...items */) {
          var index = 0;
          var length = arguments.length;
          var result = allocate(this, length);
          while (length > index) result[index] = arguments[index++];
          return result;
        };

        // iOS Safari 6.x fails here
        var TO_LOCALE_BUG =
          !!Uint8Array &&
          fails(function () {
            arrayToLocaleString.call(new Uint8Array(1));
          });

        var $toLocaleString = function toLocaleString() {
          return arrayToLocaleString.apply(
            TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this),
            arguments
          );
        };

        var proto = {
          copyWithin: function copyWithin(target, start /* , end */) {
            return arrayCopyWithin.call(
              validate(this),
              target,
              start,
              arguments.length > 2 ? arguments[2] : undefined
            );
          },
          every: function every(callbackfn /* , thisArg */) {
            return arrayEvery(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          fill: function fill(value /* , start, end */) {
            // eslint-disable-line no-unused-vars
            return arrayFill.apply(validate(this), arguments);
          },
          filter: function filter(callbackfn /* , thisArg */) {
            return speciesFromList(
              this,
              arrayFilter(
                validate(this),
                callbackfn,
                arguments.length > 1 ? arguments[1] : undefined
              )
            );
          },
          find: function find(predicate /* , thisArg */) {
            return arrayFind(
              validate(this),
              predicate,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          findIndex: function findIndex(predicate /* , thisArg */) {
            return arrayFindIndex(
              validate(this),
              predicate,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          forEach: function forEach(callbackfn /* , thisArg */) {
            arrayForEach(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          indexOf: function indexOf(searchElement /* , fromIndex */) {
            return arrayIndexOf(
              validate(this),
              searchElement,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          includes: function includes(searchElement /* , fromIndex */) {
            return arrayIncludes(
              validate(this),
              searchElement,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          join: function join(separator) {
            // eslint-disable-line no-unused-vars
            return arrayJoin.apply(validate(this), arguments);
          },
          lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
            // eslint-disable-line no-unused-vars
            return arrayLastIndexOf.apply(validate(this), arguments);
          },
          map: function map(mapfn /* , thisArg */) {
            return $map(
              validate(this),
              mapfn,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          reduce: function reduce(callbackfn /* , initialValue */) {
            // eslint-disable-line no-unused-vars
            return arrayReduce.apply(validate(this), arguments);
          },
          reduceRight: function reduceRight(callbackfn /* , initialValue */) {
            // eslint-disable-line no-unused-vars
            return arrayReduceRight.apply(validate(this), arguments);
          },
          reverse: function reverse() {
            var that = this;
            var length = validate(that).length;
            var middle = Math.floor(length / 2);
            var index = 0;
            var value;
            while (index < middle) {
              value = that[index];
              that[index++] = that[--length];
              that[length] = value;
            }
            return that;
          },
          some: function some(callbackfn /* , thisArg */) {
            return arraySome(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : undefined
            );
          },
          sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
          },
          subarray: function subarray(begin, end) {
            var O = validate(this);
            var length = O.length;
            var $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
              O.buffer,
              O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
              toLength(
                (end === undefined ? length : toAbsoluteIndex(end, length)) -
                  $begin
              )
            );
          },
        };

        var $slice = function slice(start, end) {
          return speciesFromList(
            this,
            arraySlice.call(validate(this), start, end)
          );
        };

        var $set = function set(arrayLike /* , offset */) {
          validate(this);
          var offset = toOffset(arguments[1], 1);
          var length = this.length;
          var src = toObject(arrayLike);
          var len = toLength(src.length);
          var index = 0;
          if (len + offset > length) throw RangeError(WRONG_LENGTH);
          while (index < len) this[offset + index] = src[index++];
        };

        var $iterators = {
          entries: function entries() {
            return arrayEntries.call(validate(this));
          },
          keys: function keys() {
            return arrayKeys.call(validate(this));
          },
          values: function values() {
            return arrayValues.call(validate(this));
          },
        };

        var isTAIndex = function (target, key) {
          return (
            isObject(target) &&
            target[TYPED_ARRAY] &&
            typeof key != "symbol" &&
            key in target &&
            String(+key) == String(key)
          );
        };
        var $getDesc = function getOwnPropertyDescriptor(target, key) {
          return isTAIndex(target, (key = toPrimitive(key, true)))
            ? propertyDesc(2, target[key])
            : gOPD(target, key);
        };
        var $setDesc = function defineProperty(target, key, desc) {
          if (
            isTAIndex(target, (key = toPrimitive(key, true))) &&
            isObject(desc) &&
            has(desc, "value") &&
            !has(desc, "get") &&
            !has(desc, "set") &&
            // TODO: add validation descriptor w/o calling accessors
            !desc.configurable &&
            (!has(desc, "writable") || desc.writable) &&
            (!has(desc, "enumerable") || desc.enumerable)
          ) {
            target[key] = desc.value;
            return target;
          }
          return dP(target, key, desc);
        };

        if (!ALL_CONSTRUCTORS) {
          $GOPD.f = $getDesc;
          $DP.f = $setDesc;
        }

        $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
          getOwnPropertyDescriptor: $getDesc,
          defineProperty: $setDesc,
        });

        if (
          fails(function () {
            arrayToString.call({});
          })
        ) {
          arrayToString = arrayToLocaleString = function toString() {
            return arrayJoin.call(this);
          };
        }

        var $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators);
        hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
        redefineAll($TypedArrayPrototype$, {
          slice: $slice,
          set: $set,
          constructor: function () {
            /* noop */
          },
          toString: arrayToString,
          toLocaleString: $toLocaleString,
        });
        addGetter($TypedArrayPrototype$, "buffer", "b");
        addGetter($TypedArrayPrototype$, "byteOffset", "o");
        addGetter($TypedArrayPrototype$, "byteLength", "l");
        addGetter($TypedArrayPrototype$, "length", "e");
        dP($TypedArrayPrototype$, TAG, {
          get: function () {
            return this[TYPED_ARRAY];
          },
        });

        // eslint-disable-next-line max-statements
        module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
          CLAMPED = !!CLAMPED;
          var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
          var GETTER = "get" + KEY;
          var SETTER = "set" + KEY;
          var TypedArray = global[NAME];
          var Base = TypedArray || {};
          var TAC = TypedArray && getPrototypeOf(TypedArray);
          var FORCED = !TypedArray || !$typed.ABV;
          var O = {};
          var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
          var getter = function (that, index) {
            var data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
          };
          var setter = function (that, index, value) {
            var data = that._d;
            if (CLAMPED)
              value =
                (value = Math.round(value)) < 0
                  ? 0
                  : value > 0xff
                  ? 0xff
                  : value & 0xff;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
          };
          var addElement = function (that, index) {
            dP(that, index, {
              get: function () {
                return getter(this, index);
              },
              set: function (value) {
                return setter(this, index, value);
              },
              enumerable: true,
            });
          };
          if (FORCED) {
            TypedArray = wrapper(function (that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME, "_d");
              var index = 0;
              var offset = 0;
              var buffer, byteLength, length, klass;
              if (!isObject(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new $ArrayBuffer(byteLength);
              } else if (
                data instanceof $ArrayBuffer ||
                (klass = classof(data)) == ARRAY_BUFFER ||
                klass == SHARED_BUFFER
              ) {
                buffer = data;
                offset = toOffset($offset, BYTES);
                var $len = data.byteLength;
                if ($length === undefined) {
                  if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                  byteLength = $len - offset;
                  if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + offset > $len)
                    throw RangeError(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (TYPED_ARRAY in data) {
                return fromList(TypedArray, data);
              } else {
                return $from.call(TypedArray, data);
              }
              hide(that, "_d", {
                b: buffer,
                o: offset,
                l: byteLength,
                e: length,
                v: new $DataView(buffer),
              });
              while (index < length) addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create(
              $TypedArrayPrototype$
            );
            hide(TypedArrayPrototype, "constructor", TypedArray);
          } else if (
            !fails(function () {
              TypedArray(1);
            }) ||
            !fails(function () {
              new TypedArray(-1); // eslint-disable-line no-new
            }) ||
            !$iterDetect(function (iter) {
              new TypedArray(); // eslint-disable-line no-new
              new TypedArray(null); // eslint-disable-line no-new
              new TypedArray(1.5); // eslint-disable-line no-new
              new TypedArray(iter); // eslint-disable-line no-new
            }, true)
          ) {
            TypedArray = wrapper(function (that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME);
              var klass;
              // `ws` module bug, temporarily remove validation length for Uint8Array
              // https://github.com/websockets/ws/pull/645
              if (!isObject(data)) return new Base(toIndex(data));
              if (
                data instanceof $ArrayBuffer ||
                (klass = classof(data)) == ARRAY_BUFFER ||
                klass == SHARED_BUFFER
              ) {
                return $length !== undefined
                  ? new Base(data, toOffset($offset, BYTES), $length)
                  : $offset !== undefined
                  ? new Base(data, toOffset($offset, BYTES))
                  : new Base(data);
              }
              if (TYPED_ARRAY in data) return fromList(TypedArray, data);
              return $from.call(TypedArray, data);
            });
            arrayForEach(
              TAC !== Function.prototype
                ? gOPN(Base).concat(gOPN(TAC))
                : gOPN(Base),
              function (key) {
                if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
              }
            );
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
          }
          var $nativeIterator = TypedArrayPrototype[ITERATOR];
          var CORRECT_ITER_NAME =
            !!$nativeIterator &&
            ($nativeIterator.name == "values" ||
              $nativeIterator.name == undefined);
          var $iterator = $iterators.values;
          hide(TypedArray, TYPED_CONSTRUCTOR, true);
          hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
          hide(TypedArrayPrototype, VIEW, true);
          hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

          if (
            CLAMPED
              ? new TypedArray(1)[TAG] != NAME
              : !(TAG in TypedArrayPrototype)
          ) {
            dP(TypedArrayPrototype, TAG, {
              get: function () {
                return NAME;
              },
            });
          }

          O[NAME] = TypedArray;

          $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

          $export($export.S, NAME, {
            BYTES_PER_ELEMENT: BYTES,
          });

          $export(
            $export.S +
              $export.F *
                fails(function () {
                  Base.of.call(TypedArray, 1);
                }),
            NAME,
            {
              from: $from,
              of: $of,
            }
          );

          if (!(BYTES_PER_ELEMENT in TypedArrayPrototype))
            hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

          $export($export.P, NAME, proto);

          setSpecies(NAME);

          $export($export.P + $export.F * FORCED_SET, NAME, {
            set: $set,
          });

          $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

          if (!LIBRARY && TypedArrayPrototype.toString != arrayToString)
            TypedArrayPrototype.toString = arrayToString;

          $export(
            $export.P +
              $export.F *
                fails(function () {
                  new TypedArray(1).slice();
                }),
            NAME,
            {
              slice: $slice,
            }
          );

          $export(
            $export.P +
              $export.F *
                (fails(function () {
                  return (
                    [1, 2].toLocaleString() !=
                    new TypedArray([1, 2]).toLocaleString()
                  );
                }) ||
                  !fails(function () {
                    TypedArrayPrototype.toLocaleString.call([1, 2]);
                  })),
            NAME,
            {
              toLocaleString: $toLocaleString,
            }
          );

          Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
          if (!LIBRARY && !CORRECT_ITER_NAME)
            hide(TypedArrayPrototype, ITERATOR, $iterator);
        };
      } else
        module.exports = function () {
          /* empty */
        };

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    /* 236 */
    /* 237 */
    /* 238 */
    /* 239 */
    /* 240 */
    /* 241 */
    /* 242 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(235)("Float32", 4, function (init) {
        return function Float32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 243 */
    /* 244 */
    /* 245 */
    /* 246 */
    /* 247 */
    /* 248 */
    /* 249 */
    /* 250 */
    /* 251 */
    /* 252 */
    /* 253 */
    /* 254 */
    /* 255 */
    /* 256 */
    /* 257 */
    /* 258 */
    /* 259 */
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      // https://github.com/tc39/Array.prototype.includes
      var $export = __webpack_require__(8);
      var $includes = __webpack_require__(37)(true);

      $export($export.P, "Array", {
        includes: function includes(el /* , fromIndex = 0 */) {
          return $includes(
            this,
            el,
            arguments.length > 1 ? arguments[1] : undefined
          );
        },
      });

      __webpack_require__(188)("includes");

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 260 */
    /* 261 */
    /* 262 */
    /* 263 */
    /* 264 */
    /* 265 */
    /* 266 */
    /* 267 */
    /* 268 */
    /* 269 */
    /* 270 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(29)("asyncIterator");

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 271 */
    /* 272 */
    /* 273 */
    /* 274 */
    /* 275 */
    /* 276 */
    /* 277 */
    /* 278 */
    /* 279 */
    /* 280 */
    /* 281 */
    /* 282 */
    /* 283 */
    /* 284 */
    /* 285 */
    /* 286 */
    /* 287 */
    /* 288 */
    /* 289 */
    /* 290 */
    /* 291 */
    /* 292 */
    /* 293 */
    /* 294 */
    /* 295 */
    /* 296 */
    /* 297 */
    /* 298 */
    /* 299 */
    /* 300 */
    /* 301 */
    /* 302 */
    /* 303 */
    /* 304 */
    /* 305 */
    /* 306 */
    /* 307 */
    /* 308 */
    /* 309 */
    /* 310 */
    /* 311 */
    /* 312 */
    /* 313 */
    /* 314 */
    /* 315 */
    /* 316 */
    /* 317 */
    /* 318 */
    /* 319 */
    /* 320 */
    /* 321 */
    /* 322 */
    /* 323 */
    /* 324 */
    /* 325 */
    /* 326 */
    /* 327 */
    /***/
    function (module, exports, __webpack_require__) {
      var $iterators = __webpack_require__(195);
      var getKeys = __webpack_require__(31);
      var redefine = __webpack_require__(18);
      var global = __webpack_require__(4);
      var hide = __webpack_require__(10);
      var Iterators = __webpack_require__(130);
      var wks = __webpack_require__(27);
      var ITERATOR = wks("iterator");
      var TO_STRING_TAG = wks("toStringTag");
      var ArrayValues = Iterators.Array;

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false,
      };

      for (
        var collections = getKeys(DOMIterables), i = 0;
        i < collections.length;
        i++
      ) {
        var NAME = collections[i];
        var explicit = DOMIterables[NAME];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        var key;
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit)
            for (key in $iterators)
              if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
      }

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 328 */
    /* 329 */
    /* 330 */
    /* 331 */
    /* 332 */
    /* 333 */
    /* 334 */
    /* 335 */
    /* 336 */
    /* 337 */
    /* 338 */
    /* 339 */
    /* 340 */
    /* 341 */
    /***/
    function (module, exports) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      !(function (global) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        var inModule = typeof module === "object";
        var runtime = global.regeneratorRuntime;
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return;
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator =
            outerFn && outerFn.prototype instanceof Generator
              ? outerFn
              : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        runtime.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg),
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err,
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype =
          getProto && getProto(getProto(values([])));
        if (
          NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
        ) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype));
        GeneratorFunction.prototype = Gp.constructor =
          GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] =
          GeneratorFunction.displayName = "GeneratorFunction";

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction ||
                // For the native GeneratorFunction constructor, the best we can
                // do is to check its .name property.
                (ctor.displayName || ctor.name) === "GeneratorFunction"
            : false;
        };

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        runtime.awrap = function (arg) {
          return {
            __await: arg,
          };
        };

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (
                value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")
              ) {
                return Promise.resolve(value.__await).then(
                  function (value) {
                    invoke("next", value, resolve, reject);
                  },
                  function (err) {
                    invoke("throw", err, resolve, reject);
                  }
                );
              }

              return Promise.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                resolve(result);
              }, reject);
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return (previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    // Avoid propagating failures to Promises returned by later
                    // invocations of the iterator.
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };
        runtime.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList)
          );

          return runtime.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
                return result.done ? result.value : iter.next();
              });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done,
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              );
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[toStringTagSymbol] = "Generator";

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0],
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [
            {
              tryLoc: "root",
            },
          ];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return (next.next = next);
            }
          }

          // Return an iterator with no values.
          return {
            next: doneResult,
          };
        }
        runtime.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true,
          };
        }

        Context.prototype = {
          constructor: Context,

          reset: function (skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = "next";
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (
                  name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))
                ) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop: function () {
            this.done = true;

            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException: function (exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },

          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (
                entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc
              ) {
                var finallyEntry = entry;
                break;
              }
            }

            if (
              finallyEntry &&
              (type === "break" || type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc
            ) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete: function (record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch: function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
          },

          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          },
        };
      })(
        // In sloppy mode, unbound `this` refers to the global object, fallback to
        // Function constructor if we're in global strict mode. That is sadly a form
        // of indirect eval which violates Content Security Policy.
        (function () {
          return this;
        })() || Function("return this")()
      );

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    /* 342 */
    /* 343 */
    /* 344 */
    /* 345 */
    /* 346 */
    /* 347 */
    /* 348 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(349);
      __webpack_require__(350);
      __webpack_require__(351);
      __webpack_require__(352);
      __webpack_require__(353);
      __webpack_require__(354);
      __webpack_require__(355);
      __webpack_require__(356);
      __webpack_require__(357);
      __webpack_require__(358);
      __webpack_require__(359);
      __webpack_require__(360);
      __webpack_require__(361);
      __webpack_require__(362);
      __webpack_require__(363);
      __webpack_require__(364);
      __webpack_require__(365);
      __webpack_require__(366);
      __webpack_require__(367);
      __webpack_require__(368);
      __webpack_require__(369);
      __webpack_require__(370);
      __webpack_require__(371);
      __webpack_require__(372);
      __webpack_require__(373);
      __webpack_require__(374);
      __webpack_require__(375);
      __webpack_require__(376);
      __webpack_require__(377);
      __webpack_require__(378);
      __webpack_require__(379);
      __webpack_require__(380);
      __webpack_require__(381);
      __webpack_require__(382);
      __webpack_require__(383);
      __webpack_require__(384);
      __webpack_require__(385);
      __webpack_require__(386);
      __webpack_require__(387);
      __webpack_require__(388);
      __webpack_require__(389);
      __webpack_require__(390);
      __webpack_require__(391);
      __webpack_require__(392);
      __webpack_require__(393);
      __webpack_require__(394);
      __webpack_require__(395);
      __webpack_require__(396);
      __webpack_require__(397);

      // __webpack_require__(398);
      // __webpack_require__(399);
      // __webpack_require__(400);
      // __webpack_require__(401);
      // __webpack_require__(402);
      // __webpack_require__(403);
      // __webpack_require__(404);
      // __webpack_require__(405);
      // __webpack_require__(406);

      module.exports = __webpack_require__(374);

      /***/
    },
    /* 349 */
    /***/

    // (function(module, exports) {

    //     (function() {
    //         api.register('Navigation-Latency', async function() {
    //             // throw new Error('Test Error');
    //             const navigationLatency = {};
    //             const [entry] = performance.getEntriesByType("navigation");

    //             pageLoadTime = entry.domComplete;
    //             networkLatency = entry.connectEnd - entry.connectStart;

    //             navigationLatency['page load time'] = Math.round(pageLoadTime / 50) * 50;
    //             navigationLatency['network latency'] = Math.round(networkLatency / 50) * 50;

    //             console.log(navigationLatency);

    //             return navigationLatency;
    //         });
    //     })();

    //     /***/
    // }),
    /* 350 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(60);

      __webpack_require__(133);

      __webpack_require__(139);

      __webpack_require__(242);

      __webpack_require__(201);

      __webpack_require__(158);

      __webpack_require__(211);

      __webpack_require__(74);

      __webpack_require__(173);

      __webpack_require__(203);

      __webpack_require__(259);

      __webpack_require__(137);

      __webpack_require__(341);

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      (function () {
        api.register(
          ["audioFormats", "audioContext", "analyserNode", "audioData"],
          _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.t0 = getAudioFormats();
                      _context.t1 = getAudioContext();
                      _context.t2 = getAnalyserNode();

                      if (
                        !(
                          navigator.userAgent.includes("Chrome") ||
                          navigator.userAgent.match(
                            /OS 11.+Version\/11.+Safari/
                          )
                        )
                      ) {
                        _context.next = 7;
                        break;
                      }

                      _context.t3 = window.amiunique_not_supported;
                      _context.next = 10;
                      break;

                    case 7:
                      _context.next = 9;
                      return getAudioData();

                    case 9:
                      _context.t3 = _context.sent;

                    case 10:
                      _context.t4 = _context.t3;
                      // console.log('this is audioContect: ',

                      // {
                      //     audioFormats: _context.t0,
                      //     audioContext: _context.t1,
                      //     analyserNode: _context.t2,
                      //     audioData: _context.t4
                      // }
                      // )

                      // console.log(
                      //     {
                      //         'audioFormats':getAudioFormats(),
                      //         'audioContext': getAudioContext(),
                      //         'analyserNode': getAnalyserNode(),
                      //         'audioData': getAudioData()
                      //     }
                      // );
                      return _context.abrupt("return", {
                        audioFormats: _context.t0,
                        audioContext: _context.t1,
                        analyserNode: _context.t2,
                        audioData: _context.t4,
                      });

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )
        );
      })();

      function getAudioFormats() {
        var audioFormats = {};

        try {
          var formatNames = [
            "audio/3gpp",
            "audio/3gpp2",
            "audio/AMR-NB",
            "audio/AMR-WB",
            "audio/GSM",
            "audio/aac",
            "audio/basic",
            "audio/flac",
            "audio/midi",
            "audio/mpeg",
            'audio/mp4; codecs="mp4a.40.2"',
            'audio/mp4; codecs="ac-3"',
            'audio/mp4; codecs="ec-3"',
            'audio/ogg; codecs="flac"',
            'audio/ogg; codecs="vorbis"',
            'audio/ogg; codecs="opus"',
            'audio/wav; codecs="1"',
            'audio/webm; codecs="vorbis"',
            'audio/webm; codecs="opus"',
            "audio/x-aiff",
            "audio/x-mpegurl",
          ];
          var element = document.createElement("audio");
          formatNames.forEach(function (format) {
            audioFormats[format] =
              !!element.canPlayType && element.canPlayType(format);
          });
        } catch (e) {
          //console.log('getAudioFormats');
          return window.amiunique_not_supported;
        }

        return audioFormats;
      }

      getAudioContext = function getAudioContext() {
        var audioContext = {};

        try {
          ac = new window.AudioContext();
          audioContext["channelCount"] = ac.destination.channelCount;
          audioContext["channelCountMode"] = ac.destination.channelCountMode;
          audioContext["channelInterpretation"] =
            ac.destination.channelInterpretation;
          audioContext["maxChannelCount"] = ac.destination.maxChannelCount;
          audioContext["numberOfInputs"] = ac.destination.numberOfInputs;
          audioContext["numberOfOutputs"] = ac.destination.numberOfOutputs;
          audioContext["sampleRate"] = ac.sampleRate;
          audioContext["state"] = ac.state;
        } catch (e) {
          return window.amiunique_not_supported;
        }

        return audioContext;
      };

      getAnalyserNode = function getAnalyserNode() {
        var analyserNode = {};

        try {
          ac = new window.AudioContext();
          an = ac.createAnalyser();
          analyserNode["channelCount"] = an.channelCount;
          analyserNode["channelCountMode"] = an.channelCountMode;
          analyserNode["channelInterpretation"] = an.channelInterpretation;
          analyserNode["fftSize"] = an.fftSize;
          analyserNode["frequencyBinCount"] = an.frequencyBinCount;
          analyserNode["maxDecibels"] = an.maxDecibels;
          analyserNode["minDecibels"] = an.minDecibels;
          analyserNode["numberOfInputs"] = an.numberOfInputs;
          analyserNode["numberOfOutputs"] = an.numberOfOutputs;
          analyserNode["smoothingTimeConstant"] = an.smoothingTimeConstant;
        } catch (e) {
          console.log("getAnalyserNode");
          return window.amiunique_not_supported;
        }

        return analyserNode;
      };

      getAudioData = (function () {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return run_cc_fp();

                    case 3:
                      _context2.t0 = _context2.sent;
                      _context2.next = 6;
                      return run_hybrid_fp();

                    case 6:
                      _context2.t1 = _context2.sent;
                      return _context2.abrupt("return", {
                        cc: _context2.t0,
                        hybrid: _context2.t1,
                      });

                    case 10:
                      _context2.prev = 10;
                      _context2.t2 = _context2["catch"](0);
                      console.log("getAudioData");
                      return _context2.abrupt(
                        "return",
                        window.amiunique_not_supported
                      );

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[0, 10]]
            );
          })
        );

        return function getAudioData() {
          return _ref2.apply(this, arguments);
        };
      })(); // Performs fingerprint as found in https://client.a.pxi.pub/PXmssU3ZQ0/main.min.js
      // Sum of buffer values

      run_pxi_fp = function run_pxi_fp() {
        return new Promise(function (resolve, reject) {
          try {
            if (
              ((context = new (window.OfflineAudioContext ||
                window.webkitOfflineAudioContext)(1, 44100, 44100)),
              !context)
            ) {
              resolve(0);
            } // Create oscillator

            pxi_oscillator = context.createOscillator();
            pxi_oscillator.type = "triangle";
            pxi_oscillator.frequency.value = 1e4; // Create and configure compressor

            pxi_compressor = context.createDynamicsCompressor();
            pxi_compressor.threshold && (pxi_compressor.threshold.value = -50);
            pxi_compressor.knee && (pxi_compressor.knee.value = 40);
            pxi_compressor.ratio && (pxi_compressor.ratio.value = 12);
            pxi_compressor.reduction && (pxi_compressor.reduction.value = -20);
            pxi_compressor.attack && (pxi_compressor.attack.value = 0);
            pxi_compressor.release && (pxi_compressor.release.value = 0.25); // Connect nodes

            pxi_oscillator.connect(pxi_compressor);
            pxi_compressor.connect(context.destination); // Start audio processing

            pxi_oscillator.start(0);
            context.startRendering();

            context.oncomplete = function (evnt) {
              pxi_output = 0;
              var sha1 = CryptoJS.algo.SHA1.create();

              for (var i = 0; i < evnt.renderedBuffer.length; i++) {
                sha1.update(
                  evnt.renderedBuffer.getChannelData(0)[i].toString()
                );
              }

              hash = sha1.finalize();
              console.log("hash.toString(CryptoJS.enc.Hex);");
              console.log(hash.toString(CryptoJS.enc.Hex));

              for (var i = 4500; 5e3 > i; i++) {
                pxi_output += Math.abs(
                  evnt.renderedBuffer.getChannelData(0)[i]
                );
              }

              pxi_compressor.disconnect();
              resolve(pxi_output);
            };
          } catch (u) {
            resolve(0);
          }
        });
      }; // End PXI fingerprint
      // Performs fingerprint as found in https://www.cdn-net.com/cc.js

      run_cc_fp = function run_cc_fp() {
        return new Promise(function (resolve, reject) {
          cc_output = [];
          var audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();
          var oscillator = audioCtx.createOscillator();
          var analyser = audioCtx.createAnalyser();
          var gain = audioCtx.createGain();
          var scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);
          gain.gain.value = 0; // Disable volume

          oscillator.type = "triangle"; // Set oscillator to output triangle wave

          oscillator.connect(analyser); // Connect oscillator output to analyser input

          analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input

          scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input

          gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination

          scriptProcessor.onaudioprocess = function (bins) {
            bins = new Float32Array(analyser.frequencyBinCount);
            analyser.getFloatFrequencyData(bins);

            for (var _i = 0; _i < bins.length; _i = _i + 1) {
              cc_output.push(bins[_i]);
            }

            analyser.disconnect();
            scriptProcessor.disconnect();
            gain.disconnect();
            resolve(cc_output.slice(0, 100));
          };

          oscillator.start(0);
        });
      }; // Performs a hybrid of cc/pxi methods found above

      run_hybrid_fp = function run_hybrid_fp() {
        return new Promise(function (resolve, reject) {
          hybrid_output = [];
          var audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();
          var oscillator = audioCtx.createOscillator();
          var analyser = audioCtx.createAnalyser();
          var gain = audioCtx.createGain();
          var scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1); // Create and configure compressor

          compressor = audioCtx.createDynamicsCompressor();
          compressor.threshold && (compressor.threshold.value = -50);
          compressor.knee && (compressor.knee.value = 40);
          compressor.ratio && (compressor.ratio.value = 12);
          compressor.reduction && (compressor.reduction.value = -20);
          compressor.attack && (compressor.attack.value = 0);
          compressor.release && (compressor.release.value = 0.25);
          gain.gain.value = 0; // Disable volume

          oscillator.type = "triangle"; // Set oscillator to output triangle wave

          oscillator.connect(compressor); // Connect oscillator output to dynamic compressor

          compressor.connect(analyser); // Connect compressor to analyser

          analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input

          scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input

          gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination

          scriptProcessor.onaudioprocess = function (bins) {
            bins = new Float32Array(analyser.frequencyBinCount);
            analyser.getFloatFrequencyData(bins);

            for (var _i2 = 0; _i2 < bins.length; _i2 = _i2 + 1) {
              hybrid_output.push(bins[_i2]);
            }

            analyser.disconnect();
            scriptProcessor.disconnect();
            gain.disconnect();
            resolve(hybrid_output.slice(0, 100));
          };

          oscillator.start(0);
        });
      };

      window.amiunique_display["audioFormats"] = function (cell, audioFormats) {
        // cell, values, separator, number
        displayMap(cell, audioFormats, "\n", 10);
      };

      window.amiunique_display["audioContext"] = function (cell, audioContext) {
        // cell, values, separator, number
        displayMap(cell, audioContext, "\n", 10);
      };

      window.amiunique_display["analyserNode"] = function (cell, analyserNode) {
        // cell, values, separator, number
        displayMap(cell, analyserNode, "\n", 10);
      };

      window.amiunique_display["audioData"] = function (cell, audioData) {
        if (audioData === window.amiunique_not_supported) {
          cell.innerText = window.amiunique_not_supported;
          return;
        }

        if (
          audioData === window.amiunique_no_js ||
          audioData === window.amiunique_nojs
        ) {
          cell.innerText = audioData;
          return;
        }

        if (audioData === "No value") {
          cell.innerText = "No value";
          return;
        }

        if (
          typeof audioData === "string" &&
          audioData.startsWith("{") &&
          audioData.endsWith("}")
        ) {
          audioData = JSON.parse(audioData);
        }

        var numberFp = "";

        if (cell.attributes.hasOwnProperty("numberfp")) {
          numberFp = cell.getAttribute("numberfp");
        }

        var div = createElementWithAttributes(
          "div",
          ["id", "style"],
          ["audioChartContainer-" + numberFp, "height: 200px; width: 100%"]
        );

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.appendChild(div);

        function formatDataPoints(audioData) {
          data = [];
          var keys = Object.keys(audioData);

          for (i in keys) {
            var key = keys[i];
            points = [];

            for (j in audioData[key]) {
              points.push({
                y: audioData[key][j],
              });
            }

            data.push({
              type: "line",
              dataPoints: points,
            });
          }

          return data;
        }

        var dataPoints = formatDataPoints(audioData);
        var chart = new CanvasJS.Chart("audioChartContainer-" + numberFp, {
          width: 300,
          height: 200,
          animationEnabled: false,
          theme: "light2",
          axisY: {
            includeZero: false,
          },
          data: dataPoints,
        });
        chart.render();
      };

      /***/
    },
    /* 351 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(341);

      __webpack_require__(211);

      __webpack_require__(74);

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      (function () {
        api.register("battery", function () {
          return new Promise(
            (function () {
              var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(resolve, reject) {
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            battery = {};
                            _context.next = 4;
                            return navigator.getBattery();

                          case 4:
                            b = _context.sent;
                            try {
                              battery["charging"] = b.charging;
                              battery["chargingTime"] = b.chargingTime;
                              battery["dischargingTime"] = b.charging;
                              battery["level"] = b.level;
                              resolve(battery);
                            } catch (e) {
                              resolve({ name: e.name, message: e.message });
                            }
                            _context.next = 15;
                            break;

                          case 12:
                            _context.prev = 12;
                            _context.t0 = _context["catch"](0);
                            resolve(window.amiunique_not_supported);

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 12]]
                  );
                })
              );

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            })()
          );
        });
      })();

      window.amiunique_display["battery"] = function (cell, batteryObject) {
        displayMap(cell, batteryObject, "\n", 4);
      };

      /***/
    },
    /* 352 */
    /***/
    function (module, exports) {
      (function () {
        api.register("buildID", function () {
          try {
            var res = window.navigator.buildID;
          } catch (e) {
            res = { name: e.name, message: e.message };
            return res;
          }

          if (res === undefined || typeof res === "undefined") {
            res = "undefined";
          }

          return res;
        });
      })();

      /***/
    },
    /* 353 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(209);

      (function () {
        api.register("canvas", function () {
          var canvasData;

          var time_taken = Date.now() - window.global_start_time;
          // var xhr = new XMLHttpRequest();
          var url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          // xhr.send(window.global_current_url + " canvas_begin @ " + time_taken);
          //console.log("Canvas begin time: " + time_taken);
          try {
            var canvas = document.createElement("canvas");
            canvas.height = 60;
            canvas.width = 400;
            var canvasContext = canvas.getContext("2d");
            canvas.style.display = "inline";
            canvasContext.textBaseline = "alphabetic";
            canvasContext.fillStyle = "#f60";
            canvasContext.fillRect(125, 1, 62, 20);
            canvasContext.fillStyle = "#069";
            canvasContext.font = "11pt no-real-font-123";
            canvasContext.fillText(
              "Cwm fjordbank glyphs vext quiz, \uD83D\uDE03",
              2,
              15
            );
            canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
            canvasContext.font = "18pt Arial";
            canvasContext.fillText(
              "Cwm fjordbank glyphs vext quiz, \uD83D\uDE03",
              4,
              45
            );
            canvasData = canvas.toDataURL();
          } catch (e) {
            canvasData = {
              name: e.name,
              message: e.message,
              status: "Not supported",
            };
          }

          time_taken = Date.now() - window.global_start_time;
          // xhr = new XMLHttpRequest();
          url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          // xhr.send(window.global_current_url + " canvas_end @ " + time_taken);
          //console.log("Canvas end time: " + time_taken);
          //canvasData = "abc";

          // xhr = new XMLHttpRequest();
          url = "/bfp/debug.php";
          var raw_hash = CryptoJS.SHA256(canvasData);
          var hash = raw_hash.toString(CryptoJS.enc.Hex);
          // xhr.open('POST', url, true);
          // xhr.send(window.global_current_url + " cfp2: " + hash);
          window.canvas_hash = hash;
          // console.log('this is canvas: ', window.canvas_hash)

          return canvasData;
        });
      })();

      window.amiunique_display["canvas"] = function (cell, canvasData) {
        // Split with § is necessary due to compatibility with first version of AmIUnique (need to stay because of displaying old data through extension)
        if (cell.firstChild) {
          if (cell.firstChild.tagName === "DIV") {
            if (cell.firstChild.firstChild) {
              if (cell.firstChild.firstChild.tagName === "IMG") {
                return;
              }
            }
          } else if (cell.firstChild.tagName === "IMG") {
            return;
          }
        }
        /*  if (cell.firstChild.tagName === 'DIV' && cell.firstChild.firstChild.tagName === 'IMG' || cell.firstChild.tagName === 'IMG' ) {
                  return;
                }*/

        canvasData = canvasData.split("§")[0];

        if (canvasData === window.amiunique_not_supported) {
          cell.innerText = canvasData;
          return;
        }

        if (canvasData === window.amiunique_no_value) {
          cell.innerText = canvasData;
          return;
        }

        if (
          canvasData === window.amiunique_no_js ||
          canvasData === window.amiunique_nojs
        ) {
          cell.innerText = canvasData;
          return;
        }

        var img = new Image();
        img.src = canvasData;

        img.onload = function () {
          img.drawImage;
        };

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.appendChild(img);
      };

      /***/
    },
    /* 354 */
    /***/

    /* 355 */
    /***/
    function (module, exports) {
      (function () {
        api.register("cookies", function () {
          return window.navigator.cookieEnabled ? "yes" : "no";
        });
      })();

      /***/
    },
    /* 356 */
    /***/
    function (module, exports) {
      (function () {
        var doNotTrack = "";

        try {
          if (
            window.navigator.doNotTrack != null &&
            window.navigator.doNotTrack != "unspecified"
          ) {
            if (
              window.navigator.doNotTrack == "1" ||
              window.navigator.doNotTrack == "yes"
            ) {
              doNotTrack = "yes";
            } else {
              doNotTrack = "no";
            }
          } else {
            doNotTrack = "NC";
          }
        } catch (e) {
          doNotTrack = { name: e.name, message: e.message };
        }

        api.register("doNotTrack", function () {
          return doNotTrack;
        });
      })();

      /***/
    },
    /* 357 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(270);

      __webpack_require__(3);

      __webpack_require__(172);

      __webpack_require__(79);

      __webpack_require__(184);

      __webpack_require__(208);

      __webpack_require__(201);

      __webpack_require__(158);

      __webpack_require__(74);

      __webpack_require__(209);

      __webpack_require__(207);

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      (function () {
        api.register(
          [
            "font-flash",
            "resolution-flash",
            "language-flash",
            "platform-flash",
          ],
          function () {
            var time_taken = Date.now() - window.global_start_time;
            //console.log("Flash stuff begin time: " + time_taken);
            // var xhr = new XMLHttpRequest();
            var url = "/bfp/debug.php";
            // xhr.open('POST', url, true);
            // xhr.send(window.global_current_url + " flash_begin @ " + time_taken);
            var swfobject = (function () {
              var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l,
                Q,
                E,
                B,
                J = false,
                a = false,
                n,
                G,
                m = true,
                M = (function () {
                  var aa =
                      _typeof(j.getElementById) != D &&
                      _typeof(j.getElementsByTagName) != D &&
                      _typeof(j.createElement) != D,
                    ah = t.userAgent.toLowerCase(),
                    Y = t.platform.toLowerCase(),
                    ae = Y ? /win/.test(Y) : /win/.test(ah),
                    ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                    af = /webkit/.test(ah)
                      ? parseFloat(
                          ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")
                        )
                      : false,
                    X = !+"\v1",
                    ag = [0, 0, 0],
                    ab = null;

                  if (_typeof(t.plugins) != D && _typeof(t.plugins[S]) == r) {
                    ab = t.plugins[S].description;

                    if (
                      ab &&
                      !(
                        _typeof(t.mimeTypes) != D &&
                        t.mimeTypes[q] &&
                        !t.mimeTypes[q].enabledPlugin
                      )
                    ) {
                      T = true;
                      X = false;
                      ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                      ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                      ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                      ag[2] = /[a-zA-Z]/.test(ab)
                        ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10)
                        : 0;
                    }
                  } else {
                    if (_typeof(O.ActiveXObject) != D) {
                      try {
                        var ad = new ActiveXObject(W);

                        if (ad) {
                          ab = ad.GetVariable("$version");

                          if (ab) {
                            X = true;
                            ab = ab.split(" ")[1].split(",");
                            ag = [
                              parseInt(ab[0], 10),
                              parseInt(ab[1], 10),
                              parseInt(ab[2], 10),
                            ];
                          }
                        }
                      } catch (Z) {}
                    }
                  }

                  return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac,
                  };
                })(),
                k = (function () {
                  if (!M.w3) {
                    return;
                  }

                  if (
                    (_typeof(j.readyState) != D &&
                      j.readyState == "complete") ||
                    (_typeof(j.readyState) == D &&
                      (j.getElementsByTagName("body")[0] || j.body))
                  ) {
                    f();
                  }

                  if (!J) {
                    if (_typeof(j.addEventListener) != D) {
                      j.addEventListener("DOMContentLoaded", f, false);
                    }

                    if (M.ie && M.win) {
                      j.attachEvent(x, function () {
                        if (j.readyState == "complete") {
                          j.detachEvent(x, arguments.callee);
                          f();
                        }
                      });

                      if (O == top) {
                        (function () {
                          if (J) {
                            return;
                          }

                          try {
                            j.documentElement.doScroll("left");
                          } catch (X) {
                            setTimeout(arguments.callee, 0);
                            return;
                          }

                          f();
                        })();
                      }
                    }

                    if (M.wk) {
                      (function () {
                        if (J) {
                          return;
                        }

                        if (!/loaded|complete/.test(j.readyState)) {
                          setTimeout(arguments.callee, 0);
                          return;
                        }

                        f();
                      })();
                    }

                    s(f);
                  }
                })();

              function f() {
                if (J) {
                  return;
                }

                try {
                  var Z = j
                    .getElementsByTagName("body")[0]
                    .appendChild(C("span"));
                  Z.parentNode.removeChild(Z);
                } catch (aa) {
                  return;
                }

                J = true;
                var X = U.length;

                for (var Y = 0; Y < X; Y++) {
                  U[Y]();
                }
              }

              function K(X) {
                if (J) {
                  X();
                } else {
                  U[U.length] = X;
                }
              }

              function s(Y) {
                if (_typeof(O.addEventListener) != D) {
                  O.addEventListener("load", Y, false);
                } else {
                  if (_typeof(j.addEventListener) != D) {
                    j.addEventListener("load", Y, false);
                  } else {
                    if (_typeof(O.attachEvent) != D) {
                      i(O, "onload", Y);
                    } else {
                      if (typeof O.onload == "function") {
                        var X = O.onload;

                        O.onload = function () {
                          X();
                          Y();
                        };
                      } else {
                        O.onload = Y;
                      }
                    }
                  }
                }
              }

              function h() {
                if (T) {
                  V();
                } else {
                  H();
                }
              }

              function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                var Z = X.appendChild(aa);

                if (Z) {
                  var Y = 0;

                  (function () {
                    if (_typeof(Z.GetVariable) != D) {
                      var ab = Z.GetVariable("$version");
                      // console.log('this is ab -->  ' + ab);

                      if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [
                          parseInt(ab[0], 10),
                          parseInt(ab[1], 10),
                          parseInt(ab[2], 10),
                        ];
                      }
                    } else {
                      if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return;
                      }
                    }

                    X.removeChild(aa);
                    Z = null;
                    H();
                  })();
                } else {
                  H();
                }
              }

              function H() {
                var ag = o.length;

                if (ag > 0) {
                  for (var af = 0; af < ag; af++) {
                    var Y = o[af].id;
                    var ab = o[af].callbackFn;
                    var aa = {
                      success: false,
                      id: Y,
                    };

                    if (M.pv[0] > 0) {
                      var ae = c(Y);

                      if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                          w(Y, true);

                          if (ab) {
                            aa.success = true;
                            aa.ref = z(Y);

                            ab(aa);
                          }
                        } else {
                          if (o[af].expressInstall && A()) {
                            var ai = {};
                            ai.data = o[af].expressInstall;
                            ai.width = ae.getAttribute("width") || "0";
                            ai.height = ae.getAttribute("height") || "0";

                            if (ae.getAttribute("class")) {
                              ai.styleclass = ae.getAttribute("class");
                            }

                            if (ae.getAttribute("align")) {
                              ai.align = ae.getAttribute("align");
                            }

                            var ah = {};
                            var X = ae.getElementsByTagName("param");
                            var ac = X.length;

                            for (var ad = 0; ad < ac; ad++) {
                              if (
                                X[ad].getAttribute("name").toLowerCase() !=
                                "movie"
                              ) {
                                ah[X[ad].getAttribute("name")] =
                                  X[ad].getAttribute("value");
                              }
                            }

                            P(ai, ah, Y, ab);
                          } else {
                            p(ae);

                            if (ab) {
                              ab(aa);
                            }
                          }
                        }
                      }
                    } else {
                      w(Y, true);

                      if (ab) {
                        var Z = z(Y);

                        if (Z && _typeof(Z.SetVariable) != D) {
                          aa.success = true;
                          aa.ref = Z;
                        }

                        ab(aa);
                      }
                    }
                  }
                }
              }

              function z(aa) {
                var X = null;
                var Y = c(aa);

                if (Y && Y.nodeName == "OBJECT") {
                  if (_typeof(Y.SetVariable) != D) {
                    X = Y;
                  } else {
                    var Z = Y.getElementsByTagName(r)[0];

                    if (Z) {
                      X = Z;
                    }
                  }
                }

                return X;
              }

              function A() {
                return (
                  !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
                );
              }

              function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                  success: false,
                  id: X,
                };
                var ae = c(X);

                if (ae) {
                  if (ae.nodeName == "OBJECT") {
                    l = g(ae);
                    Q = null;
                  } else {
                    l = ae;
                    Q = X;
                  }

                  aa.id = R;

                  if (
                    _typeof(aa.width) == D ||
                    (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)
                  ) {
                    aa.width = "310";
                  }

                  if (
                    _typeof(aa.height) == D ||
                    (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)
                  ) {
                    aa.height = "137";
                  }

                  j.title =
                    j.title.slice(0, 47) + " - Flash Player Installation";
                  var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                    ac =
                      "MMredirectURL=" +
                      O.location.toString().replace(/&/g, "%26") +
                      "&MMplayerType=" +
                      ad +
                      "&MMdoctitle=" +
                      j.title;

                  if (_typeof(ab.flashvars) != D) {
                    ab.flashvars += "&" + ac;
                  } else {
                    ab.flashvars = ac;
                  }

                  if (M.ie && M.win && ae.readyState != 4) {
                    var Y = C("div");
                    X += "SWFObjectNew";
                    Y.setAttribute("id", X);
                    ae.parentNode.insertBefore(Y, ae);
                    ae.style.display = "none";

                    (function () {
                      if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae);
                      } else {
                        setTimeout(arguments.callee, 10);
                      }
                    })();
                  }

                  u(aa, ab, X);
                }
              }

              function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                  var X = C("div");
                  Y.parentNode.insertBefore(X, Y);
                  X.parentNode.replaceChild(g(Y), X);
                  Y.style.display = "none";

                  (function () {
                    if (Y.readyState == 4) {
                      Y.parentNode.removeChild(Y);
                    } else {
                      setTimeout(arguments.callee, 10);
                    }
                  })();
                } else {
                  Y.parentNode.replaceChild(g(Y), Y);
                }
              }

              function g(ab) {
                var aa = C("div");

                if (M.win && M.ie) {
                  aa.innerHTML = ab.innerHTML;
                } else {
                  var Y = ab.getElementsByTagName(r)[0];

                  if (Y) {
                    var ad = Y.childNodes;

                    if (ad) {
                      var X = ad.length;

                      for (var Z = 0; Z < X; Z++) {
                        if (
                          !(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") &&
                          !(ad[Z].nodeType == 8)
                        ) {
                          aa.appendChild(ad[Z].cloneNode(true));
                        }
                      }
                    }
                  }
                }

                return aa;
              }

              function u(ai, ag, Y) {
                var X,
                  aa = c(Y);

                if (M.wk && M.wk < 312) {
                  return X;
                }

                if (aa) {
                  if (_typeof(ai.id) == D) {
                    ai.id = Y;
                  }

                  if (M.ie && M.win) {
                    var ah = "";

                    for (var ae in ai) {
                      if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                          ag.movie = ai[ae];
                        } else {
                          if (ae.toLowerCase() == "styleclass") {
                            ah += ' class="' + ai[ae] + '"';
                          } else {
                            if (ae.toLowerCase() != "classid") {
                              ah += " " + ae + '="' + ai[ae] + '"';
                            }
                          }
                        }
                      }
                    }

                    var af = "";

                    for (var ad in ag) {
                      if (ag[ad] != Object.prototype[ad]) {
                        af +=
                          '<param name="' + ad + '" value="' + ag[ad] + '" />';
                      }
                    }

                    aa.outerHTML =
                      '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
                      ah +
                      ">" +
                      af +
                      "</object>";
                    N[N.length] = ai.id;
                    X = c(ai.id);
                  } else {
                    var Z = C(r);
                    Z.setAttribute("type", q);

                    for (var ac in ai) {
                      if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                          Z.setAttribute("class", ai[ac]);
                        } else {
                          if (ac.toLowerCase() != "classid") {
                            Z.setAttribute(ac, ai[ac]);
                          }
                        }
                      }
                    }

                    for (var ab in ag) {
                      if (
                        ag[ab] != Object.prototype[ab] &&
                        ab.toLowerCase() != "movie"
                      ) {
                        e(Z, ab, ag[ab]);
                      }
                    }

                    aa.parentNode.replaceChild(Z, aa);
                    X = Z;
                  }
                }

                return X;
              }

              function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa);
              }

              function y(Y) {
                var X = c(Y);

                if (X && X.nodeName == "OBJECT") {
                  if (M.ie && M.win) {
                    X.style.display = "none";

                    (function () {
                      if (X.readyState == 4) {
                        b(Y);
                      } else {
                        setTimeout(arguments.callee, 10);
                      }
                    })();
                  } else {
                    X.parentNode.removeChild(X);
                  }
                }
              }

              function b(Z) {
                var Y = c(Z);

                if (Y) {
                  for (var X in Y) {
                    if (typeof Y[X] == "function") {
                      Y[X] = null;
                    }
                  }

                  Y.parentNode.removeChild(Y);
                }
              }

              function c(Z) {
                var X = null;

                try {
                  X = j.getElementById(Z);
                } catch (Y) {}

                return X;
              }

              function C(X) {
                return j.createElement(X);
              }

              function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y];
              }

              function F(Z) {
                var Y = M.pv,
                  X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] ||
                  (Y[0] == X[0] && Y[1] > X[1]) ||
                  (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])
                  ? true
                  : false;
              }

              function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                  return;
                }

                var aa = j.getElementsByTagName("head")[0];

                if (!aa) {
                  return;
                }

                var X = ad && typeof ad == "string" ? ad : "screen";

                if (ab) {
                  n = null;
                  G = null;
                }

                if (!n || G != X) {
                  var Z = C("style");
                  Z.setAttribute("type", "text/css");
                  Z.setAttribute("media", X);
                  n = aa.appendChild(Z);

                  if (
                    M.ie &&
                    M.win &&
                    _typeof(j.styleSheets) != D &&
                    j.styleSheets.length > 0
                  ) {
                    n = j.styleSheets[j.styleSheets.length - 1];
                  }

                  G = X;
                }

                if (M.ie && M.win) {
                  if (n && _typeof(n.addRule) == r) {
                    n.addRule(ac, Y);
                  }
                } else {
                  if (n && _typeof(j.createTextNode) != D) {
                    n.appendChild(j.createTextNode(ac + " {" + Y + "}"));
                  }
                }
              }

              function w(Z, X) {
                if (!m) {
                  return;
                }

                var Y = X ? "visible" : "hidden";

                if (J && c(Z)) {
                  c(Z).style.visibility = Y;
                } else {
                  v("#" + Z, "visibility:" + Y);
                }
              }

              function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X &&
                  (typeof encodeURIComponent === "undefined"
                    ? "undefined"
                    : _typeof(encodeURIComponent)) != D
                  ? encodeURIComponent(Y)
                  : Y;
              }

              var d = (function () {
                if (M.ie && M.win) {
                  window.attachEvent("onunload", function () {
                    var ac = I.length;

                    for (var ab = 0; ab < ac; ab++) {
                      I[ab][0].detachEvent(I[ab][1], I[ab][2]);
                    }

                    var Z = N.length;

                    for (var aa = 0; aa < Z; aa++) {
                      y(N[aa]);
                    }

                    for (var Y in M) {
                      M[Y] = null;
                    }

                    M = null;

                    for (var X in swfobject) {
                      swfobject[X] = null;
                    }

                    swfobject = null;
                  });
                }
              })();

              return {
                registerObject: function registerObject(ab, X, aa, Z) {
                  if (M.w3 && ab && X) {
                    var Y = {};
                    Y.id = ab;
                    Y.swfVersion = X;
                    Y.expressInstall = aa;
                    Y.callbackFn = Z;
                    o[o.length] = Y;
                    w(ab, false);
                  } else {
                    if (Z) {
                      Z({
                        success: false,
                        id: ab,
                      });
                    }
                  }
                },
                getObjectById: function getObjectById(X) {
                  if (M.w3) {
                    return z(X);
                  }
                },
                embedSWF: function embedSWF(
                  ab,
                  ah,
                  ae,
                  ag,
                  Y,
                  aa,
                  Z,
                  ad,
                  af,
                  ac
                ) {
                  var X = {
                    success: false,
                    id: ah,
                  };

                  if (
                    M.w3 &&
                    !(M.wk && M.wk < 312) &&
                    ab &&
                    ah &&
                    ae &&
                    ag &&
                    Y
                  ) {
                    w(ah, false);
                    K(function () {
                      ae += "";
                      ag += "";
                      var aj = {};

                      if (af && _typeof(af) === r) {
                        for (var al in af) {
                          aj[al] = af[al];
                        }
                      }

                      aj.data = ab;
                      aj.width = ae;
                      aj.height = ag;
                      var am = {};

                      if (ad && _typeof(ad) === r) {
                        for (var ak in ad) {
                          am[ak] = ad[ak];
                        }
                      }

                      if (Z && _typeof(Z) === r) {
                        for (var ai in Z) {
                          if (_typeof(am.flashvars) != D) {
                            am.flashvars += "&" + ai + "=" + Z[ai];
                          } else {
                            am.flashvars = ai + "=" + Z[ai];
                          }
                        }
                      }

                      if (F(Y)) {
                        var an = u(aj, am, ah);

                        if (aj.id == ah) {
                          w(ah, true);
                        }

                        X.success = true;
                        X.ref = an;
                      } else {
                        if (aa && A()) {
                          aj.data = aa;
                          P(aj, am, ah, ac);
                          return;
                        } else {
                          w(ah, true);
                        }
                      }

                      if (ac) {
                        ac(X);
                      }
                    });
                  } else {
                    if (ac) {
                      ac(X);
                    }
                  }
                },
                switchOffAutoHideShow: function switchOffAutoHideShow() {
                  m = false;
                },
                ua: M,
                getFlashPlayerVersion: function getFlashPlayerVersion() {
                  return {
                    major: M.pv[0],
                    minor: M.pv[1],
                    release: M.pv[2],
                  };
                },
                hasFlashPlayerVersion: F,
                createSWF: function createSWF(Z, Y, X) {
                  if (M.w3) {
                    return u(Z, Y, X);
                  } else {
                    return undefined;
                  }
                },
                showExpressInstall: function showExpressInstall(Z, aa, X, Y) {
                  if (M.w3 && A()) {
                    P(Z, aa, X, Y);
                  }
                },
                removeSWF: function removeSWF(X) {
                  if (M.w3) {
                    y(X);
                  }
                },
                createCSS: function createCSS(aa, Z, Y, X) {
                  if (M.w3) {
                    v(aa, Z, Y, X);
                  }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function getQueryParamValue(aa) {
                  var Z = j.location.search || j.location.hash;

                  if (Z) {
                    if (/\?/.test(Z)) {
                      Z = Z.split("?")[1];
                    }

                    if (aa == null) {
                      return L(Z);
                    }

                    var Y = Z.split("&");

                    for (var X = 0; X < Y.length; X++) {
                      if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring(Y[X].indexOf("=") + 1));
                      }
                    }
                  }

                  return "";
                },
                expressInstallCallback: function expressInstallCallback() {
                  if (a) {
                    var X = c(R);

                    if (X && l) {
                      X.parentNode.replaceChild(l, X);

                      if (Q) {
                        w(Q, true);

                        if (M.ie && M.win) {
                          l.style.display = "block";
                        }
                      }

                      if (E) {
                        E(B);
                      }
                    }

                    a = false;
                  }
                },
              };
            })();

            swfobject.embedSWF(
              "/flash/OSData.swf",
              "OSData",
              "0",
              "0",
              "9.0.0"
            );
            var fontsFlash, resolutionFlash, languageFlash, platformFlash;
            var plugins = "";

            if (PluginDetect.browser.isIE) {
              var nbPlugins = 1;
              var pluginsList = [
                "QuickTime",
                "Java",
                "DevalVR",
                "Flash",
                "Shockwave",
                "WindowsMediaPlayer",
                "Silverlight",
                "VLC",
                "AdobeReader",
                "PDFReader",
                "RealPlayer",
                "PDFjs",
              ];
              PluginDetect.getVersion(".");

              for (i = 0; i < pluginsList.length; i++) {
                var ver = PluginDetect.getVersion(pluginsList[i]);

                if (ver != null) {
                  plugins +=
                    "Plugin " +
                    nbPlugins +
                    ": " +
                    pluginsList[i] +
                    " " +
                    ver +
                    "; ";
                  nbPlugins++;
                }
              }
            } else {
              var np = window.navigator.plugins;
              var plist = new Array();

              for (var i = 0; i < np.length; i++) {
                plist[i] = np[i].name + "; ";
                plist[i] += np[i].description + "; ";
                plist[i] += np[i].filename;
                plist[i] += ". ";
              }

              plist.sort();

              for (i = 0; i < np.length; i++) {
                plugins += "Plugin " + i + ": " + plist[i];
              }
            }

            if (
              plugins.indexOf("flash") > -1 ||
              plugins.indexOf("Flash") > -1
            ) {
              var fl = document.getElementById("OSData");

              if (fl == null) {
                fontsFlash =
                  resolutionFlash =
                  languageFlash =
                  platformFlash =
                    "Flash detected but blocked by an extension";
              } else if (
                typeof fl.getOS != "undefined" ||
                typeof flashAvailable == "boolean"
              ) {
                fontsFlash = fl
                  .getFonts()
                  .join()
                  .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");
                resolutionFlash = fl.getResolution().join("x");
                languageFlash = fl.getLanguage();
                platformFlash = fl.getOS();
              } else {
                fontsFlash =
                  resolutionFlash =
                  languageFlash =
                  platformFlash =
                    "Flash detected but not activated (click-to-play)";
              }
            } else {
              fontsFlash =
                resolutionFlash =
                languageFlash =
                platformFlash =
                  "Flash not detected";
            }

            time_taken = Date.now() - window.global_start_time;
            //console.log("Flash stuff end time: " + time_taken);
            // xhr = new XMLHttpRequest();
            url = "/bfp/debug.php";
            // xhr.open('POST', url, true);
            // xhr.send(window.global_current_url + " flash_end @ " + time_taken);
            return {
              "font-flash": fontsFlash,
              "resolution-flash": resolutionFlash,
              "language-flash": languageFlash,
              "platform-flash": platformFlash,
            };
          }
        );
      })();

      /***/
    },
    /* 358 */
    /***/
    function (module, exports) {
      (function () {
        api.register("font-js", function () {
          // var xhr = new XMLHttpRequest();
          var url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          var time_taken = Date.now() - window.global_start_time;
          //console.log("Font begin fingerprinting: " + time_taken);
          // xhr.send(window.global_current_url + " font_begin @ " + time_taken);
          // If you insert a new font, please sort the list
          var fonts = [
            ".Aqua Kana",
            ".Helvetica LT MM",
            ".Times LT MM",
            "18thCentury",
            "8514oem",
            "AR BERKLEY",
            "AR JULIAN",
            "AR PL UKai CN",
            "AR PL UMing CN",
            "AR PL UMing HK",
            "AR PL UMing TW",
            "AR PL UMing TW MBE",
            "Aakar",
            "Abadi MT Condensed Extra Bold",
            "Abadi MT Condensed Light",
            "Abyssinica SIL",
            "AcmeFont",
            "Adobe Arabic",
            "Agency FB",
            "Aharoni",
            "Aharoni Bold",
            "Al Bayan",
            "Al Bayan Bold",
            "Al Bayan Plain",
            "Al Nile",
            "Al Tarikh",
            "Aldhabi",
            "Alfredo",
            "Algerian",
            "Alien Encounters",
            "Almonte Snow",
            "American Typewriter",
            "American Typewriter Bold",
            "American Typewriter Condensed",
            "American Typewriter Light",
            "Amethyst",
            "Andale Mono",
            "Andale Mono Version",
            "Andalus",
            "Angsana New",
            "AngsanaUPC",
            "Ani",
            "AnjaliOldLipi",
            "Aparajita",
            "Apple Braille",
            "Apple Braille Outline 6 Dot",
            "Apple Braille Outline 8 Dot",
            "Apple Braille Pinpoint 6 Dot",
            "Apple Braille Pinpoint 8 Dot",
            "Apple Chancery",
            "Apple Color Emoji",
            "Apple LiGothic Medium",
            "Apple LiSung Light",
            "Apple SD Gothic Neo",
            "Apple SD Gothic Neo Regular",
            "Apple SD GothicNeo ExtraBold",
            "Apple Symbols",
            "AppleGothic",
            "AppleGothic Regular",
            "AppleMyungjo",
            "AppleMyungjo Regular",
            "AquaKana",
            "Arabic Transparent",
            "Arabic Typesetting",
            "Arial",
            "Arial Baltic",
            "Arial Black",
            "Arial Bold",
            "Arial Bold Italic",
            "Arial CE",
            "Arial CYR",
            "Arial Greek",
            "Arial Hebrew",
            "Arial Hebrew Bold",
            "Arial Italic",
            "Arial Narrow",
            "Arial Narrow Bold",
            "Arial Narrow Bold Italic",
            "Arial Narrow Italic",
            "Arial Rounded Bold",
            "Arial Rounded MT Bold",
            "Arial TUR",
            "Arial Unicode MS",
            "ArialHB",
            "Arimo",
            "Asimov",
            "Autumn",
            "Avenir",
            "Avenir Black",
            "Avenir Book",
            "Avenir Next",
            "Avenir Next Bold",
            "Avenir Next Condensed",
            "Avenir Next Condensed Bold",
            "Avenir Next Demi Bold",
            "Avenir Next Heavy",
            "Avenir Next Regular",
            "Avenir Roman",
            "Ayuthaya",
            "BN Jinx",
            "BN Machine",
            "BOUTON International Symbols",
            "Baby Kruffy",
            "Baghdad",
            "Bahnschrift",
            "Balthazar",
            "Bangla MN",
            "Bangla MN Bold",
            "Bangla Sangam MN",
            "Bangla Sangam MN Bold",
            "Baskerville",
            "Baskerville Bold",
            "Baskerville Bold Italic",
            "Baskerville Old Face",
            "Baskerville SemiBold",
            "Baskerville SemiBold Italic",
            "Bastion",
            "Batang",
            "BatangChe",
            "Bauhaus 93",
            "Beirut",
            "Bell MT",
            "Bell MT Bold",
            "Bell MT Italic",
            "Bellerose",
            "Berlin Sans FB",
            "Berlin Sans FB Demi",
            "Bernard MT Condensed",
            "BiauKai",
            "Big Caslon",
            "Big Caslon Medium",
            "Birch Std",
            "Bitstream Charter",
            "Bitstream Vera Sans",
            "Blackadder ITC",
            "Blackoak Std",
            "Bobcat",
            "Bodoni 72",
            "Bodoni MT",
            "Bodoni MT Black",
            "Bodoni MT Poster Compressed",
            "Bodoni Ornaments",
            "BolsterBold",
            "Book Antiqua",
            "Book Antiqua Bold",
            "Bookman Old Style",
            "Bookman Old Style Bold",
            "Bookshelf Symbol 7",
            "Borealis",
            "Bradley Hand",
            "Bradley Hand ITC",
            "Braggadocio",
            "Brandish",
            "Britannic Bold",
            "Broadway",
            "Browallia New",
            "BrowalliaUPC",
            "Brush Script",
            "Brush Script MT",
            "Brush Script MT Italic",
            "Brush Script Std",
            "Brussels",
            "Calibri",
            "Calibri Bold",
            "Calibri Light",
            "Californian FB",
            "Calisto MT",
            "Calisto MT Bold",
            "Calligraphic",
            "Calvin",
            "Cambria",
            "Cambria Bold",
            "Cambria Math",
            "Candara",
            "Candara Bold",
            "Candles",
            "Carrois Gothic SC",
            "Castellar",
            "Centaur",
            "Century",
            "Century Gothic",
            "Century Gothic Bold",
            "Century Schoolbook",
            "Century Schoolbook Bold",
            "Century Schoolbook L",
            "Chalkboard",
            "Chalkboard Bold",
            "Chalkboard SE",
            "Chalkboard SE Bold",
            "ChalkboardBold",
            "Chalkduster",
            "Chandas",
            "Chaparral Pro",
            "Chaparral Pro Light",
            "Charlemagne Std",
            "Charter",
            "Chilanka",
            "Chiller",
            "Chinyen",
            "Clarendon",
            "Cochin",
            "Cochin Bold",
            "Colbert",
            "Colonna MT",
            "Comic Sans MS",
            "Comic Sans MS Bold",
            "Commons",
            "Consolas",
            "Consolas Bold",
            "Constantia",
            "Constantia Bold",
            "Coolsville",
            "Cooper Black",
            "Cooper Std Black",
            "Copperplate",
            "Copperplate Bold",
            "Copperplate Gothic Bold",
            "Copperplate Light",
            "Corbel",
            "Corbel Bold",
            "Cordia New",
            "CordiaUPC",
            "Corporate",
            "Corsiva",
            "Corsiva Hebrew",
            "Corsiva Hebrew Bold",
            "Courier",
            "Courier 10 Pitch",
            "Courier Bold",
            "Courier New",
            "Courier New Baltic",
            "Courier New Bold",
            "Courier New CE",
            "Courier New Italic",
            "Courier Oblique",
            "Cracked Johnnie",
            "Creepygirl",
            "Curlz MT",
            "Cursor",
            "Cutive Mono",
            "DFKai-SB",
            "DIN Alternate",
            "DIN Condensed",
            "Damascus",
            "Damascus Bold",
            "Dancing Script",
            "DaunPenh",
            "David",
            "Dayton",
            "DecoType Naskh",
            "Deja Vu",
            "DejaVu LGC Sans",
            "DejaVu Sans",
            "DejaVu Sans Mono",
            "DejaVu Serif",
            "Deneane",
            "Desdemona",
            "Detente",
            "Devanagari MT",
            "Devanagari MT Bold",
            "Devanagari Sangam MN",
            "Didot",
            "Didot Bold",
            "Digifit",
            "DilleniaUPC",
            "Dingbats",
            "Distant Galaxy",
            "Diwan Kufi",
            "Diwan Kufi Regular",
            "Diwan Thuluth",
            "Diwan Thuluth Regular",
            "DokChampa",
            "Dominican",
            "Dotum",
            "DotumChe",
            "Droid Sans",
            "Droid Sans Fallback",
            "Droid Sans Mono",
            "Dyuthi",
            "Ebrima",
            "Edwardian Script ITC",
            "Elephant",
            "Emmett",
            "Engravers MT",
            "Engravers MT Bold",
            "Enliven",
            "Eras Bold ITC",
            "Estrangelo Edessa",
            "Ethnocentric",
            "EucrosiaUPC",
            "Euphemia",
            "Euphemia UCAS",
            "Euphemia UCAS Bold",
            "Eurostile",
            "Eurostile Bold",
            "Expressway Rg",
            "FangSong",
            "Farah",
            "Farisi",
            "Felix Titling",
            "Fingerpop",
            "Fixedsys",
            "Flubber",
            "Footlight MT Light",
            "Forte",
            "FrankRuehl",
            "Frankfurter Venetian TT",
            "Franklin Gothic Book",
            "Franklin Gothic Book Italic",
            "Franklin Gothic Medium",
            "Franklin Gothic Medium Cond",
            "Franklin Gothic Medium Italic",
            "FreeMono",
            "FreeSans",
            "FreeSerif",
            "FreesiaUPC",
            "Freestyle Script",
            "French Script MT",
            "Futura",
            "Futura Condensed ExtraBold",
            "Futura Medium",
            "GB18030 Bitmap",
            "Gabriola",
            "Gadugi",
            "Garamond",
            "Garamond Bold",
            "Gargi",
            "Garuda",
            "Gautami",
            "Gazzarelli",
            "Geeza Pro",
            "Geeza Pro Bold",
            "Geneva",
            "GenevaCY",
            "Gentium",
            "Gentium Basic",
            "Gentium Book Basic",
            "GentiumAlt",
            "Georgia",
            "Georgia Bold",
            "Geotype TT",
            "Giddyup Std",
            "Gigi",
            "Gill",
            "Gill Sans",
            "Gill Sans Bold",
            "Gill Sans MT",
            "Gill Sans MT Bold",
            "Gill Sans MT Condensed",
            "Gill Sans MT Ext Condensed Bold",
            "Gill Sans MT Italic",
            "Gill Sans Ultra Bold",
            "Gill Sans Ultra Bold Condensed",
            "Gisha",
            "Glockenspiel",
            "Gloucester MT Extra Condensed",
            "Good Times",
            "Goudy",
            "Goudy Old Style",
            "Goudy Old Style Bold",
            "Goudy Stout",
            "Greek Diner Inline TT",
            "Gubbi",
            "Gujarati MT",
            "Gujarati MT Bold",
            "Gujarati Sangam MN",
            "Gujarati Sangam MN Bold",
            "Gulim",
            "GulimChe",
            "GungSeo Regular",
            "Gungseouche",
            "Gungsuh",
            "GungsuhChe",
            "Gurmukhi",
            "Gurmukhi MN",
            "Gurmukhi MN Bold",
            "Gurmukhi MT",
            "Gurmukhi Sangam MN",
            "Gurmukhi Sangam MN Bold",
            "Haettenschweiler",
            "Hand Me Down S (BRK)",
            "Hansen",
            "Harlow Solid Italic",
            "Harrington",
            "Harvest",
            "HarvestItal",
            "Haxton Logos TT",
            "HeadLineA Regular",
            "HeadlineA",
            "Heavy Heap",
            "Hei",
            "Hei Regular",
            "Heiti SC",
            "Heiti SC Light",
            "Heiti SC Medium",
            "Heiti TC",
            "Heiti TC Light",
            "Heiti TC Medium",
            "Helvetica",
            "Helvetica Bold",
            "Helvetica CY Bold",
            "Helvetica CY Plain",
            "Helvetica LT Std",
            "Helvetica Light",
            "Helvetica Neue",
            "Helvetica Neue Bold",
            "Helvetica Neue Medium",
            "Helvetica Oblique",
            "HelveticaCY",
            "HelveticaNeueLT Com 107 XBlkCn",
            "Herculanum",
            "High Tower Text",
            "Highboot",
            "Hiragino Kaku Gothic Pro W3",
            "Hiragino Kaku Gothic Pro W6",
            "Hiragino Kaku Gothic ProN W3",
            "Hiragino Kaku Gothic ProN W6",
            "Hiragino Kaku Gothic Std W8",
            "Hiragino Kaku Gothic StdN W8",
            "Hiragino Maru Gothic Pro W4",
            "Hiragino Maru Gothic ProN W4",
            "Hiragino Mincho Pro W3",
            "Hiragino Mincho Pro W6",
            "Hiragino Mincho ProN W3",
            "Hiragino Mincho ProN W6",
            "Hiragino Sans GB W3",
            "Hiragino Sans GB W6",
            "Hiragino Sans W0",
            "Hiragino Sans W1",
            "Hiragino Sans W2",
            "Hiragino Sans W3",
            "Hiragino Sans W4",
            "Hiragino Sans W5",
            "Hiragino Sans W6",
            "Hiragino Sans W7",
            "Hiragino Sans W8",
            "Hiragino Sans W9",
            "Hobo Std",
            "Hoefler Text",
            "Hoefler Text Black",
            "Hoefler Text Ornaments",
            "Hollywood Hills",
            "Hombre",
            "Huxley Titling",
            "ITC Stone Serif",
            "ITF Devanagari",
            "ITF Devanagari Marathi",
            "ITF Devanagari Medium",
            "Impact",
            "Imprint MT Shadow",
            "InaiMathi",
            "Induction",
            "Informal Roman",
            "Ink Free",
            "IrisUPC",
            "Iskoola Pota",
            "Italianate",
            "Jamrul",
            "JasmineUPC",
            "Javanese Text",
            "Jokerman",
            "Juice ITC",
            "KacstArt",
            "KacstBook",
            "KacstDecorative",
            "KacstDigital",
            "KacstFarsi",
            "KacstLetter",
            "KacstNaskh",
            "KacstOffice",
            "KacstOne",
            "KacstPen",
            "KacstPoster",
            "KacstQurn",
            "KacstScreen",
            "KacstTitle",
            "KacstTitleL",
            "Kai",
            "Kai Regular",
            "KaiTi",
            "Kailasa",
            "Kailasa Regular",
            "Kaiti SC",
            "Kaiti SC Black",
            "Kalapi",
            "Kalimati",
            "Kalinga",
            "Kannada MN",
            "Kannada MN Bold",
            "Kannada Sangam MN",
            "Kannada Sangam MN Bold",
            "Kartika",
            "Karumbi",
            "Kedage",
            "Kefa",
            "Kefa Bold",
            "Keraleeyam",
            "Keyboard",
            "Khmer MN",
            "Khmer MN Bold",
            "Khmer OS",
            "Khmer OS System",
            "Khmer Sangam MN",
            "Khmer UI",
            "Kinnari",
            "Kino MT",
            "KodchiangUPC",
            "Kohinoor Bangla",
            "Kohinoor Devanagari",
            "Kohinoor Telugu",
            "Kokila",
            "Kokonor",
            "Kokonor Regular",
            "Kozuka Gothic Pr6N B",
            "Kristen ITC",
            "Krungthep",
            "KufiStandardGK",
            "KufiStandardGK Regular",
            "Kunstler Script",
            "Laksaman",
            "Lao MN",
            "Lao Sangam MN",
            "Lao UI",
            "LastResort",
            "Latha",
            "Leelawadee",
            "Letter Gothic Std",
            "LetterOMatic!",
            "Levenim MT",
            "LiHei Pro",
            "LiSong Pro",
            "Liberation Mono",
            "Liberation Sans",
            "Liberation Sans Narrow",
            "Liberation Serif",
            "Likhan",
            "LilyUPC",
            "Limousine",
            "Lithos Pro Regular",
            "LittleLordFontleroy",
            "Lohit Assamese",
            "Lohit Bengali",
            "Lohit Devanagari",
            "Lohit Gujarati",
            "Lohit Gurmukhi",
            "Lohit Hindi",
            "Lohit Kannada",
            "Lohit Malayalam",
            "Lohit Odia",
            "Lohit Punjabi",
            "Lohit Tamil",
            "Lohit Tamil Classical",
            "Lohit Telugu",
            "Loma",
            "Lucida Blackletter",
            "Lucida Bright",
            "Lucida Bright Demibold",
            "Lucida Bright Demibold Italic",
            "Lucida Bright Italic",
            "Lucida Calligraphy",
            "Lucida Calligraphy Italic",
            "Lucida Console",
            "Lucida Fax",
            "Lucida Fax Demibold",
            "Lucida Fax Regular",
            "Lucida Grande",
            "Lucida Grande Bold",
            "Lucida Handwriting",
            "Lucida Handwriting Italic",
            "Lucida Sans",
            "Lucida Sans Demibold Italic",
            "Lucida Sans Typewriter",
            "Lucida Sans Typewriter Bold",
            "Lucida Sans Unicode",
            "Luminari",
            "Luxi Mono",
            "MS Gothic",
            "MS Mincho",
            "MS Outlook",
            "MS PGothic",
            "MS PMincho",
            "MS Reference Sans Serif",
            "MS Reference Specialty",
            "MS Sans Serif",
            "MS Serif",
            "MS UI Gothic",
            "MT Extra",
            "MV Boli",
            "Mael",
            "Magneto",
            "Maiandra GD",
            "Malayalam MN",
            "Malayalam MN Bold",
            "Malayalam Sangam MN",
            "Malayalam Sangam MN Bold",
            "Malgun Gothic",
            "Mallige",
            "Mangal",
            "Manorly",
            "Marion",
            "Marion Bold",
            "Marker Felt",
            "Marker Felt Thin",
            "Marlett",
            "Martina",
            "Matura MT Script Capitals",
            "Meera",
            "Meiryo",
            "Meiryo Bold",
            "Meiryo UI",
            "MelodBold",
            "Menlo",
            "Menlo Bold",
            "Mesquite Std",
            "Microsoft",
            "Microsoft Himalaya",
            "Microsoft JhengHei",
            "Microsoft JhengHei UI",
            "Microsoft New Tai Lue",
            "Microsoft PhagsPa",
            "Microsoft Sans Serif",
            "Microsoft Tai Le",
            "Microsoft Tai Le Bold",
            "Microsoft Uighur",
            "Microsoft YaHei",
            "Microsoft YaHei UI",
            "Microsoft Yi Baiti",
            "Minerva",
            "MingLiU",
            "MingLiU-ExtB",
            "MingLiU_HKSCS",
            "Minion Pro",
            "Miriam",
            "Mishafi",
            "Mishafi Gold",
            "Mistral",
            "Modern",
            "Modern No. 20",
            "Monaco",
            "Mongolian Baiti",
            "Monospace",
            "Monotype Corsiva",
            "Monotype Sorts",
            "MoolBoran",
            "Moonbeam",
            "MotoyaLMaru",
            "Mshtakan",
            "Mshtakan Bold",
            "Mukti Narrow",
            "Muna",
            "Myanmar MN",
            "Myanmar MN Bold",
            "Myanmar Sangam MN",
            "Myanmar Text",
            "Mycalc",
            "Myriad Arabic",
            "Myriad Hebrew",
            "Myriad Pro",
            "NISC18030",
            "NSimSun",
            "Nadeem",
            "Nadeem Regular",
            "Nakula",
            "Nanum Barun Gothic",
            "Nanum Gothic",
            "Nanum Myeongjo",
            "NanumBarunGothic",
            "NanumGothic",
            "NanumGothic Bold",
            "NanumGothicCoding",
            "NanumMyeongjo",
            "NanumMyeongjo Bold",
            "Narkisim",
            "Nasalization",
            "Navilu",
            "Neon Lights",
            "New Peninim MT",
            "New Peninim MT Bold",
            "News Gothic MT",
            "News Gothic MT Bold",
            "Niagara Engraved",
            "Niagara Solid",
            "Nimbus Mono L",
            "Nimbus Roman No9 L",
            "Nimbus Sans L",
            "Nimbus Sans L Condensed",
            "Nina",
            "Nirmala UI",
            "Nirmala.ttf",
            "Norasi",
            "Noteworthy",
            "Noteworthy Bold",
            "Noto Color Emoji",
            "Noto Emoji",
            "Noto Mono",
            "Noto Naskh Arabic",
            "Noto Nastaliq Urdu",
            "Noto Sans",
            "Noto Sans Armenian",
            "Noto Sans Bengali",
            "Noto Sans CJK",
            "Noto Sans Canadian Aboriginal",
            "Noto Sans Cherokee",
            "Noto Sans Devanagari",
            "Noto Sans Ethiopic",
            "Noto Sans Georgian",
            "Noto Sans Gujarati",
            "Noto Sans Gurmukhi",
            "Noto Sans Hebrew",
            "Noto Sans JP",
            "Noto Sans KR",
            "Noto Sans Kannada",
            "Noto Sans Khmer",
            "Noto Sans Lao",
            "Noto Sans Malayalam",
            "Noto Sans Myanmar",
            "Noto Sans Oriya",
            "Noto Sans SC",
            "Noto Sans Sinhala",
            "Noto Sans Symbols",
            "Noto Sans TC",
            "Noto Sans Tamil",
            "Noto Sans Telugu",
            "Noto Sans Thai",
            "Noto Sans Yi",
            "Noto Serif",
            "Notram",
            "November",
            "Nueva Std",
            "Nueva Std Cond",
            "Nyala",
            "OCR A Extended",
            "OCR A Std",
            "Old English Text MT",
            "OldeEnglish",
            "Onyx",
            "OpenSymbol",
            "OpineHeavy",
            "Optima",
            "Optima Bold",
            "Optima Regular",
            "Orator Std",
            "Oriya MN",
            "Oriya MN Bold",
            "Oriya Sangam MN",
            "Oriya Sangam MN Bold",
            "Osaka",
            "Osaka-Mono",
            "OsakaMono",
            "PCMyungjo Regular",
            "PCmyoungjo",
            "PMingLiU",
            "PMingLiU-ExtB",
            "PR Celtic Narrow",
            "PT Mono",
            "PT Sans",
            "PT Sans Bold",
            "PT Sans Caption Bold",
            "PT Sans Narrow Bold",
            "PT Serif",
            "Padauk",
            "Padauk Book",
            "Padmaa",
            "Pagul",
            "Palace Script MT",
            "Palatino",
            "Palatino Bold",
            "Palatino Linotype",
            "Palatino Linotype Bold",
            "Papyrus",
            "Papyrus Condensed",
            "Parchment",
            "Parry Hotter",
            "PenultimateLight",
            "Perpetua",
            "Perpetua Bold",
            "Perpetua Titling MT",
            "Perpetua Titling MT Bold",
            "Phetsarath OT",
            "Phosphate",
            "Phosphate Inline",
            "Phosphate Solid",
            "PhrasticMedium",
            "PilGi Regular",
            "Pilgiche",
            "PingFang HK",
            "PingFang SC",
            "PingFang TC",
            "Pirate",
            "Plantagenet Cherokee",
            "Playbill",
            "Poor Richard",
            "Poplar Std",
            "Pothana2000",
            "Prestige Elite Std",
            "Pristina",
            "Purisa",
            "QuiverItal",
            "Raanana",
            "Raanana Bold",
            "Raavi",
            "Rachana",
            "Rage Italic",
            "RaghuMalayalam",
            "Ravie",
            "Rekha",
            "Roboto",
            "Rockwell",
            "Rockwell Bold",
            "Rockwell Condensed",
            "Rockwell Extra Bold",
            "Rockwell Italic",
            "Rod",
            "Roland",
            "Rondalo",
            "Rosewood Std Regular",
            "RowdyHeavy",
            "Russel Write TT",
            "SF Movie Poster",
            "STFangsong",
            "STHeiti",
            "STIXGeneral",
            "STIXGeneral-Bold",
            "STIXGeneral-Regular",
            "STIXIntegralsD",
            "STIXIntegralsD-Bold",
            "STIXIntegralsSm",
            "STIXIntegralsSm-Bold",
            "STIXIntegralsUp",
            "STIXIntegralsUp-Bold",
            "STIXIntegralsUp-Regular",
            "STIXIntegralsUpD",
            "STIXIntegralsUpD-Bold",
            "STIXIntegralsUpD-Regular",
            "STIXIntegralsUpSm",
            "STIXIntegralsUpSm-Bold",
            "STIXNonUnicode",
            "STIXNonUnicode-Bold",
            "STIXSizeFiveSym",
            "STIXSizeFiveSym-Regular",
            "STIXSizeFourSym",
            "STIXSizeFourSym-Bold",
            "STIXSizeOneSym",
            "STIXSizeOneSym-Bold",
            "STIXSizeThreeSym",
            "STIXSizeThreeSym-Bold",
            "STIXSizeTwoSym",
            "STIXSizeTwoSym-Bold",
            "STIXVariants",
            "STIXVariants-Bold",
            "STKaiti",
            "STSong",
            "STXihei",
            "SWGamekeys MT",
            "Saab",
            "Sahadeva",
            "Sakkal Majalla",
            "Salina",
            "Samanata",
            "Samyak Devanagari",
            "Samyak Gujarati",
            "Samyak Malayalam",
            "Samyak Tamil",
            "Sana",
            "Sana Regular",
            "Sans",
            "Sarai",
            "Sathu",
            "Savoye LET Plain:1.0",
            "Sawasdee",
            "Script",
            "Script MT Bold",
            "Segoe MDL2 Assets",
            "Segoe Print",
            "Segoe Pseudo",
            "Segoe Script",
            "Segoe UI",
            "Segoe UI Emoji",
            "Segoe UI Historic",
            "Segoe UI Semilight",
            "Segoe UI Symbol",
            "Serif",
            "Shonar Bangla",
            "Showcard Gothic",
            "Shree Devanagari 714",
            "Shruti",
            "SignPainter-HouseScript",
            "Silom",
            "SimHei",
            "SimSun",
            "SimSun-ExtB",
            "Simplified Arabic",
            "Simplified Arabic Fixed",
            "Sinhala MN",
            "Sinhala MN Bold",
            "Sinhala Sangam MN",
            "Sinhala Sangam MN Bold",
            "Sitka",
            "Skia",
            "Skia Regular",
            "Skinny",
            "Small Fonts",
            "Snap ITC",
            "Snell Roundhand",
            "Snowdrift",
            "Songti SC",
            "Songti SC Black",
            "Songti TC",
            "Source Code Pro",
            "Splash",
            "Standard Symbols L",
            "Stencil",
            "Stencil Std",
            "Stephen",
            "Sukhumvit Set",
            "Suruma",
            "Sylfaen",
            "Symbol",
            "Symbole",
            "System",
            "System Font",
            "TAMu_Kadambri",
            "TAMu_Kalyani",
            "TAMu_Maduram",
            "TSCu_Comic",
            "TSCu_Paranar",
            "TSCu_Times",
            "Tahoma",
            "Tahoma Negreta",
            "TakaoExGothic",
            "TakaoExMincho",
            "TakaoGothic",
            "TakaoMincho",
            "TakaoPGothic",
            "TakaoPMincho",
            "Tamil MN",
            "Tamil MN Bold",
            "Tamil Sangam MN",
            "Tamil Sangam MN Bold",
            "Tarzan",
            "Tekton Pro",
            "Tekton Pro Cond",
            "Tekton Pro Ext",
            "Telugu MN",
            "Telugu MN Bold",
            "Telugu Sangam MN",
            "Telugu Sangam MN Bold",
            "Tempus Sans ITC",
            "Terminal",
            "Terminator Two",
            "Thonburi",
            "Thonburi Bold",
            "Tibetan Machine Uni",
            "Times",
            "Times Bold",
            "Times New Roman",
            "Times New Roman Baltic",
            "Times New Roman Bold",
            "Times New Roman Italic",
            "Times Roman",
            "Tlwg Mono",
            "Tlwg Typewriter",
            "Tlwg Typist",
            "Tlwg Typo",
            "TlwgMono",
            "TlwgTypewriter",
            "Toledo",
            "Traditional Arabic",
            "Trajan Pro",
            "Trattatello",
            "Trebuchet MS",
            "Trebuchet MS Bold",
            "Tunga",
            "Tw Cen MT",
            "Tw Cen MT Bold",
            "Tw Cen MT Italic",
            "URW Bookman L",
            "URW Chancery L",
            "URW Gothic L",
            "URW Palladio L",
            "Ubuntu",
            "Ubuntu Condensed",
            "Ubuntu Mono",
            "Ukai",
            "Ume Gothic",
            "Ume Mincho",
            "Ume P Gothic",
            "Ume P Mincho",
            "Ume UI Gothic",
            "Uming",
            "Umpush",
            "UnBatang",
            "UnDinaru",
            "UnDotum",
            "UnGraphic",
            "UnGungseo",
            "UnPilgi",
            "Untitled1",
            "Urdu Typesetting",
            "Uroob",
            "Utkal",
            "Utopia",
            "Utsaah",
            "Valken",
            "Vani",
            "Vemana2000",
            "Verdana",
            "Verdana Bold",
            "Vijaya",
            "Viner Hand ITC",
            "Vivaldi",
            "Vivian",
            "Vladimir Script",
            "Vrinda",
            "Waree",
            "Waseem",
            "Waverly",
            "Webdings",
            "WenQuanYi Bitmap Song",
            "WenQuanYi Micro Hei",
            "WenQuanYi Micro Hei Mono",
            "WenQuanYi Zen Hei",
            "Whimsy TT",
            "Wide Latin",
            "Wingdings",
            "Wingdings 2",
            "Wingdings 3",
            "Woodcut",
            "X-Files",
            "Year supply of fairy cakes",
            "Yu Gothic",
            "Yu Mincho",
            "Yuppy SC",
            "Yuppy SC Regular",
            "Yuppy TC",
            "Yuppy TC Regular",
            "Zapf Dingbats",
            "Zapfino",
            "Zawgyi-One",
            "gargi",
            "lklug",
            "mry_KacstQurn",
            "ori1Uni",
          ]; //  		var fonts = ["Times", "Times New Roman", "tata", "toto"];

          var baseFonts = ["serif", "sans-serif", "monospace"];
          var testSize = "72px";
          var testChar = "A";
          // var h = document.getElementById('font');
          const h = document.body;
          // create a SPAN in the document to get the width of the text we use to test

          var s = document.createElement("span");
          s.style.fontSize = testSize;
          s.innerText = testChar;
          var defaultFonts = {};

          for (var indexBaseFonts in baseFonts) {
            baseFont = baseFonts[indexBaseFonts];
            s.style.fontFamily = baseFont;

            if (h) {
              h.appendChild(s);
              defaultFonts[baseFont] = {};
              defaultFonts[baseFont]["offsetWidth"] = s.offsetWidth;
              defaultFonts[baseFont]["offsetHeight"] = s.offsetHeight;
              h.removeChild(s);
            }
          }

          var before = new Date();
          fontsDetected = {};

          for (var indexFont in fonts) {
            font = fonts[indexFont];
            detected = false;
            fontStyle = '"' + font + '"';

            for (var indexBaseFonts in baseFonts) {
              baseFont = baseFonts[indexBaseFonts];
              s.style.fontFamily = fontStyle + "," + baseFont; // name of the font along with the base font for fallback.

              if (h) {
                h.appendChild(s);
                var match =
                  s.offsetWidth != defaultFonts[baseFont]["offsetWidth"] ||
                  s.offsetHeight != defaultFonts[baseFont]["offsetHeight"];
                h.removeChild(s);
                detected = detected || match;
              }
            }

            fontsDetected[font] = detected;
            // console.log(fontsDetected[font]);
          }

          var timeTaken = new Date() - before;
          time_taken = Date.now() - window.global_start_time;
          //console.log("Font end fingerprinting: " + time_taken);
          // xhr = new XMLHttpRequest();
          url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          // xhr.send(window.global_current_url + " font_end @ " + time_taken);
          var flist_str = JSON.stringify(fontsDetected);
          var raw_hash = CryptoJS.SHA256(flist_str);
          var font_hash = raw_hash.toString(CryptoJS.enc.Hex);
          window.font_hash = font_hash;
          return fontsDetected;
        });
      })();

      window.amiunique_display["font-js"] = function (cell, fonts) {
        // cell, values, separator, number
        displayMap(cell, fonts, ", ", 10);
      };

      /***/
    },
    /* 359 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(173);

      __webpack_require__(211);

      __webpack_require__(74);

      (function () {
        api.register("keyboard", function () {
          return new Promise(function (resolve, reject) {
            try {
              navigator.keyboard.getLayoutMap().then(function (keyboard) {
                var keyboard_result = {};
                keyboard.forEach(function (key, v) {
                  keyboard_result[v] = key;
                });
                resolve(keyboard_result);
              });
            } catch (e) {
              resolve({
                name: e.name,
                message: e.message,
                status: window.amiunique_not_supported,
              });
            }
          });
        });
      })();

      window.amiunique_display["keyboard"] = function (cell, keyboardObject) {
        if (keyboardObject === window.amiunique_nojs) {
          cell.innerText = window.amiunique_no_js;
          return;
        }

        if (keyboardObject === window.amiunique_not_supported) {
          cell.innerText = window.amiunique_not_supported;
          return;
        }

        known_keyboards = {};
        known_keyboards["Azerty"] = {
          KeyQ: "a",
          KeyW: "z",
          KeyE: "e",
          KeyR: "r",
          KeyT: "t",
          KeyY: "y",
        };
        known_keyboards["Qwerty"] = {
          KeyQ: "q",
          KeyW: "w",
          KeyE: "e",
          KeyR: "r",
          KeyT: "t",
          KeyY: "y",
        };
        known_keyboards["Dvorak"] = {
          KeyQ: "'",
          KeyW: ",",
          KeyE: ".",
          KeyR: "p",
          KeyT: "y",
          KeyY: "f",
        };
        known_keyboards["Bepo"] = {
          KeyQ: "b",
          KeyW: "é",
          KeyE: "p",
          KeyR: "o",
          KeyT: "è",
          KeyY: "!",
        };
        known_keyboards["Qwertz"] = {
          KeyQ: "q",
          KeyW: "w",
          KeyE: "e",
          KeyR: "r",
          KeyT: "t",
          KeyY: "z",
        };
        known_keyboards["Colemak"] = {
          KeyQ: "q",
          KeyW: "w",
          KeyE: "f",
          KeyR: "p",
          KeyT: "g",
          KeyY: "j",
        };

        for (keyboard_name in known_keyboards) {
          keyboard = known_keyboards[keyboard_name];
          registered_keyboard = true;

          for (key in keyboard) {
            if (
              !keyboardObject.hasOwnProperty(key) ||
              keyboardObject[key] != keyboard[key]
            ) {
              registered_keyboard = false;
            }
          }

          if (registered_keyboard) {
            cell.innerText = keyboard_name;
            return;
          }
        }

        cell.innerText = "Other";
      };

      /***/
    },
    /* 360 */
    /***/
    function (module, exports) {
      (function () {
        api.register("languages-js", function () {
          try {
            var lang =
              window.navigator.languages || window.navigator.userLanguage;
          } catch (e) {
            return { name: e.name, message: e.message };
          }

          if (typeof lang === "string") {
            return lang;
          } else {
            return lang.join();
          }
        });
      })();

      /***/
    },
    /* 361 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(270);

      __webpack_require__(3);

      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(60);

      __webpack_require__(161);

      __webpack_require__(173);

      __webpack_require__(133);

      __webpack_require__(139);

      __webpack_require__(341);

      __webpack_require__(211);

      __webpack_require__(74);

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      (function () {
        api.register("mediaDevices", function () {
          return new Promise(
            (function () {
              var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(resolve, reject) {
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            // console.log(window.navigator.mediaDevices.enumerateDevices());
                            return window.navigator.mediaDevices.enumerateDevices();

                          case 3:
                            connection = _context.sent;
                            resolve(connection);
                            _context.next = 10;
                            break;

                          case 7:
                            _context.prev = 7;
                            _context.t0 = _context["catch"](0);
                            resolve(window.amiunique_not_supported);

                          case 10:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 7]]
                  );
                })
              );

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            })()
          );
        });
      })();

      window.amiunique_display["mediaDevices"] = function (cell, mediaDevices) {
        if (mediaDevices === window.amiunique_not_supported) {
          cell.innerText = window.amiunique_not_supported;
          return;
        }

        if (
          mediaDevices === window.amiunique_no_js ||
          mediaDevices === window.amiunique_nojs
        ) {
          cell.innerText = mediaDevices;
          return;
        }

        if (mediaDevices === "No value") {
          cell.innerText = "No value";
          return;
        }

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.inerText = "";

        if (
          typeof mediaDevices === "string" &&
          mediaDevices.startsWith("[{") &&
          mediaDevices.endsWith("}]")
        ) {
          mediaDevices = JSON.parse(mediaDevices);
        }

        var res = "";

        for (i in mediaDevices) {
          var value = mediaDevices[i];

          if (value.label !== undefined && value.label !== "") {
            res +=
              value.kind + " (" + value.label + ") : " + value.deviceId + "\n";
          } else {
            res += value.kind + " : " + value.deviceId + "\n";
          }
        } // remove last \n

        // console.log(res);

        cell.innerText = res;
      };

      window.amiunique_display_diff["mediaDevices"] = function (
        diff,
        diffString
      ) {
        if (
          diff[0].hasOwnProperty("added") ||
          diff[0].hasOwnProperty("removed")
        ) {
          diff.forEach(function (part) {
            var color = part.added ? "green" : part.removed ? "red" : "black";

            if (color === "green") {
              diffString += '<span style="color: '.concat(
                color,
                '; text-decoration: underline">'
              );
            } else if (color === "red") {
              diffString += '<span style="color: '.concat(
                color,
                '; text-decoration: line-through">'
              );
            } else {
              diffString += '<span style="color: '.concat(color, '">');
            }

            if (
              _typeof(part.value) === "object" &&
              !Array.isArray(part.value)
            ) {
              diffString += "".concat(JSON.stringify(part.value), "</span>");
            } else if (
              Array.isArray(part.value) &&
              _typeof(part.value[0]) === "object"
            ) {
              diffString += "".concat(JSON.stringify(part.value), "</span>");
            } else {
              diffString += "".concat(part.value, "</span>");
            }
          });
          // console.log(diffString);

          return diffString;
        }

        if (Array.isArray(diff)) {
          diff.forEach(function (part) {
            if (_typeof(part) === "object") {
              var keys = Object.keys(part);

              for (var _i = 0; _i < keys.length; _i++) {
                var key = keys[_i];
                diffString += "<span>".concat(key, ": </span>");
                var value = part[key];

                if (Array.isArray(value)) {
                  value.forEach(function (partValue) {
                    var color = partValue.added
                      ? "green"
                      : partValue.removed
                      ? "red"
                      : "black";

                    if (color === "green") {
                      diffString += '<span style="color: '.concat(
                        color,
                        '; text-decoration: underline">'
                      );
                    } else if (color === "red") {
                      diffString += '<span style="color: '.concat(
                        color,
                        '; text-decoration: line-through">'
                      );
                    } else {
                      diffString += '<span style="color: '.concat(color, '">');
                    }

                    if (
                      _typeof(partValue.value) === "object" &&
                      !Array.isArray(partValue.value)
                    ) {
                      diffString += "".concat(
                        JSON.stringify(partValue.value),
                        "</span>"
                      );
                    } else if (
                      Array.isArray(partValue.value) &&
                      _typeof(partValue.value[0]) === "object"
                    ) {
                      diffString += "".concat(
                        JSON.stringify(partValue.value),
                        "</span>"
                      );
                    } else {
                      diffString += "".concat(partValue.value, "</span>");
                    }
                  });
                }
              }
            }
          });
        }
        // console.log(diffString);

        return diffString;
      };

      (function () {
        api.register("public-ip", function () {
          var ips = [];

          // Function to get local IP addresses using WebRTC
          function getLocalIPs(callback) {
            const rtcPeerConnection = new RTCPeerConnection({
              iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
            });

            rtcPeerConnection.createDataChannel("");
            rtcPeerConnection
              .createOffer()
              .then((offer) => {
                // console.log('Offer created:', offer);
                return rtcPeerConnection.setLocalDescription(offer);
              })
              .then(() => {
                // console.log('Local description set.');
              })
              .catch((error) => {
                // console.error('Error creating offer or setting local description:', error);
                return { name: e.name, message: e.message };
              });

            rtcPeerConnection.onicecandidate = (event) => {
              if (event && event.candidate && event.candidate.candidate) {
                const candidate = event.candidate.candidate;
                // console.log('ICE candidate:', candidate);
                const ipMatch = candidate.match(
                  /(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)/
                );
                if (ipMatch) {
                  const ip = ipMatch[1];
                  if (!ips.includes(ip)) {
                    ips.push(ip);
                    // console.log('IP found:', ip);
                  }
                }
              }
            };

            rtcPeerConnection.onicegatheringstatechange = () => {
              // console.log('ICE gathering state changed:', rtcPeerConnection.iceGatheringState);
              if (rtcPeerConnection.iceGatheringState === "complete") {
                // console.log('ICE gathering complete. IPs:', ips);
                callback(ips);
              }
            };
          }

          // Function to list media devices

          // Function to collect fingerprint data and send it to the server
          const fingerprintData = {};

          getLocalIPs((ips) => {
            fingerprintData.localIPs = ips;
            // console.log('Local IPs collected:', ips);
          });

          // Execute the fingerprinting process
          // publicIps = {};
          // publicIps.public_ip = ips;
          // console.log('this is public ip');
          // console.log(publicIps);

          return ips;
        });
      })();

      /***/
    },
    /* 362 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(209);

      (function () {
        api.register(
          [
            "navigator_properties",
            "product",
            "productSub",
            "vendor",
            "vendorSub",
            "hardwareConcurrency",
            "javaEnabled",
            "deviceMemory",
          ],
          function () {
            try {
              navigator_properties = [];

              for (var property in navigator) {
                navigator_properties.push(property);
              }

              return {
                navigator_properties: navigator_properties,
                product: navigator.product,
                productSub: navigator.productSub,
                vendor: navigator.vendor,
                vendorSub: navigator.vendorSub,
                hardwareConcurrency: navigator.hardwareConcurrency,
                javaEnabled: navigator.javaEnabled(),
                deviceMemory: navigator.deviceMemory,
              };
            } catch (e) {
              return { name: e.name, message: e.message };
            }
          }
        );
      })();

      window.amiunique_display["navigator_properties"] = function (
        cell,
        navigator_properties
      ) {
        if (
          navigator_properties === window.amiunique_no_js ||
          navigator_properties === window.amiunique_nojs
        ) {
          cell.innerText = navigator_properties;
          return;
        }

        if (navigator_properties === "No value") {
          cell.innerText = "No value";
          return;
        }

        if (typeof navigator_properties === "string") {
          navigator_properties = navigator_properties.split(",");
        }

        cell.innerText =
          navigator_properties.length + " properties in navigator object";
      };

      /***/
    },
    /* 363 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(133);

      __webpack_require__(139);

      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(341);

      __webpack_require__(211);

      __webpack_require__(74);

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      (function () {
        api.register("permissions", function () {
          return new Promise(
            (function () {
              var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(resolve, reject) {
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            permissions_to_query = [
                              "accelerometer",
                              "accessibility",
                              "ambient-light-sensor",
                              "camera",
                              "clipboard-read",
                              "clipboard-write",
                              "geolocation",
                              "background-sync",
                              "magnetometer",
                              "microphone",
                              "midi",
                              "notifications",
                              "payment-handler",
                              "persistent-storage",
                              "push",
                            ];
                            permissions = {};
                            _context.t0 =
                              regeneratorRuntime.keys(permissions_to_query);

                          case 3:
                            if ((_context.t1 = _context.t0()).done) {
                              _context.next = 18;
                              break;
                            }

                            i = _context.t1.value;
                            _context.prev = 5;
                            permission_to_query = permissions_to_query[i];
                            _context.next = 9;
                            return navigator.permissions.query({
                              name: permission_to_query,
                            });

                          case 9:
                            result = _context.sent;
                            permissions[permission_to_query] = result.state;
                            _context.next = 16;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t2 = _context["catch"](5);
                            permissions[permission_to_query] =
                              _context.t2.message;

                          case 16:
                            _context.next = 3;
                            break;

                          case 18:
                            resolve(permissions);

                          case 19:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[5, 13]]
                  );
                })
              );

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            })()
          );
        });
      })();

      window.amiunique_display["permissions"] = function (cell, permissions) {
        if (permissions === window.amiunique_not_supported) {
          cell.innerText = window.amiunique_not_supported;
          return;
        }

        if (
          permissions === window.amiunique_no_js ||
          permissions === window.amiunique_nojs
        ) {
          cell.innerText = permissions;
          return;
        }

        if (permissions === "No value") {
          cell.innerText = "No value";
          return;
        }

        if (
          typeof permissions === "string" &&
          permissions.startsWith("{") &&
          permissions.endsWith("}")
        ) {
          permissions = JSON.parse(permissions);
        }

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.innerText = "";

        for (var permission in permissions) {
          value = permissions[permission];

          if (value === "prompt" || value === "granted" || value === "denied") {
            cell.innerText += permission + " : " + value + "\n";
          }
        }

        cell.innerText = cell.innerText.substring(0, cell.innerText.length - 1);
      };

      /***/
    },
    /* 364 */
    /***/
    function (module, exports) {
      (function () {
        api.register("platform", function () {
          try {
            return window.navigator.platform;
          } catch (e) {
            return { name: e.name, message: e.message };
          }
        });
      })();

      /***/
    },
    /* 365 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(74);

      __webpack_require__(60);

      __webpack_require__(79);

      (function () {
        api.register("plugins", function () {
          var time_taken = Date.now() - window.global_start_time;
          // var xhr = new XMLHttpRequest();
          var url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          // xhr.send(window.global_current_url + " plugins_begin @ " + time_taken);
          //console.log("Plugins begin time: " + time_taken);
          var res = {};
          var np = window.navigator.plugins;
          var plist = [];

          if (np.length === 0) {
            return {
              plugins: "none",
            };
          }

          for (var i = 0; i < np.length; i++) {
            var name = np[i].name;
            res["plugin-" + name] = np[i].name;
            plist[i] = name + "; ";
            plist[i] += np[i].description + "; ";
            plist[i] += np[i].filename;
            plist[i] += ". ";
          }

          var plugins = "";

          for (var j = 0; j < np.length; j++) {
            plugins += "Plugin " + j + ": " + plist[j];
          }

          res["plugins"] = plugins;
          // xhr = new XMLHttpRequest();
          url = "/bfp/debug.php";
          // xhr.open('POST', url, true);
          time_taken = Date.now() - window.global_start_time;
          // xhr.send(window.global_current_url + " plugins_end @ " + time_taken);
          //console.log("Plugins end time: " + time_taken);
          return res;
        });
      })();

      window.amiunique_display["plugins"] = function (cell, plugins) {
        // For the plugins list, we create a html table with the list of plugin
        cell.innerText = plugins["plugins"];

        if (
          Object.keys(plugins).length > 1 &&
          document.getElementById("detail-table")
        ) {
          var pluginTable = createPluginTable();
          document.getElementById("detail-table").appendChild(pluginTable);
          var keys = Object.keys(plugins);

          for (var j = keys.length - 2; j >= 0; j--) {
            var attribute = keys[j];
            var name = plugins[attribute];
            var rank = "Plugin " + j;
            var newTr = document.createElement("tr");
            var cellA = createElementWithAttributes(
              "td",
              ["class"],
              ["text-center"]
            );
            cellA.innerText = rank;
            newTr.appendChild(cellA);
            var cellB = createElementWithAttributes(
              "td",
              ["id", "class"],
              [keys[j] + "-stats", "text-center"]
            );
            newTr.appendChild(cellB);
            var cellC = createElementWithAttributes(
              "td",
              ["id", "class"],
              [keys[j] + "-name", "text-left"]
            );
            cellC.innerText = name;
            newTr.appendChild(cellC);
            insertAfter(newTr, document.getElementById("plugin-detail"));
          }
        }
      };

      function createPluginTable() {
        var table = createElementWithAttributes(
          "table",
          ["class"],
          ["table table-bordered table-stripped table-hover"]
        );
        var tableHeader = document.createElement("thead");
        var trHeadLine = document.createElement("tr");
        var trHeadLine2 = createElementWithAttributes(
          "tr",
          ["id"],
          ["plugin-detail"]
        );
        var tdHeadline = createElementWithAttributes(
          "th",
          ["colspan", "style"],
          [3, "font-weight:bold"]
        );
        tdHeadline.innerText = "Plugins detail";
        trHeadLine.appendChild(tdHeadline);
        tableHeader.appendChild(trHeadLine);
        var header0 = createElementWithAttributes(
          "th",
          ["class"],
          ["text-center"]
        );
        header0.innerText = "Number of plugin";
        trHeadLine2.appendChild(header0);
        var header = createElementWithAttributes(
          "th",
          ["class", "id"],
          ["text-center", "pluginsRatio"]
        );
        header.innerText = "Similarity ratio ";
        trHeadLine2.appendChild(header);
        var header3 = createElementWithAttributes(
          "th",
          ["class"],
          ["text-left"]
        );
        header3.innerText = "Name of plugin";
        trHeadLine2.appendChild(header3);
        tableHeader.appendChild(trHeadLine2);
        table.appendChild(trHeadLine);
        table.appendChild(trHeadLine2);
        return table;
      }

      /***/
    },
    /* 366 */
    /***/
    function (module, exports) {
      (function () {
        api.register(
          [
            "screen_width",
            "screen_height",
            "screen_depth",
            "screen_availTop",
            "screen_availLeft",
            "screen_availHeight",
            "screen_availWidth",
            "screen_left",
            "screen_top",
          ],
          function () {
            return {
              screen_width: window.screen.width,
              screen_height: window.screen.height,
              screen_depth: window.screen.colorDepth,
              screen_availTop: window.screen.availTop,
              screen_availLeft: window.screen.availLeft,
              screen_availHeight: window.screen.availHeight,
              screen_availWidth: window.screen.availWidth,
              screen_left: window.screen.left,
              screen_top: window.screen.top,
            };
          }
        );
      })();

      /***/
    },
    /* 367 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(341);

      __webpack_require__(211);

      __webpack_require__(74);

      var checkAccelerometerPresence = (function () {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var accelerometer;
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      accelerometer = null;
                      _context2.prev = 1;
                      accelerometer = new Accelerometer({
                        referenceFrame: "device",
                      });
                      accelerometer.addEventListener("error", function (event) {
                        return false;
                      });
                      accelerometer.start();
                      _context2.next = 7;
                      return sleep(200);

                    case 7:
                      return _context2.abrupt(
                        "return",
                        accelerometer.activated && accelerometer.x !== null
                      );

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](1);
                      return _context2.abrupt("return", false);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[1, 10]]
            );
          })
        );

        return function checkAccelerometerPresence() {
          return _ref2.apply(this, arguments);
        };
      })();

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }

            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      (function () {
        api.register(
          ["accelerometer", "gyroscope", "proximity_sensor"],
          function () {
            return new Promise(
              (function () {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.next = 2;
                            return checkAccelerometerPresence();

                          case 2:
                            accelerometer = _context.sent;
                            gyroscope = false;
                            proximity_sensor = false;

                            if (typeof Gyroscope === " function ") {
                              gyroscope = true;
                            }

                            if (" ProximitySensor " in window) {
                              proximity_sensor = true;
                            }

                            result = {
                              accelerometer: accelerometer,
                              gyroscope: gyroscope,
                              proximity_sensor: proximity_sensor, //        'maxTouchPoints': navigator.maxTouchPoints,
                            };
                            resolve(result);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })
                );

                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              })()
            );
          }
        );
      })();

      function sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      }

      /***/
    },
    /* 368 */
    /***/
    function (module, exports) {
      (function () {
        testLocalStorage = function testLocalStorage() {
          try {
            localStorage.fp = "test";
          } catch (ex) {}

          try {
            if (localStorage.fp == "test") {
              return "yes";
            }

            return window.amiunique_not_supported;
          } catch (ex) {
            return {
              name: ex.name,
              message: ex.message,
              status: window.amiunique_not_supported,
            };
          }
        };

        testSessionStorage = function testSessionStorage() {
          try {
            sessionStorage.fp = "test";
          } catch (ex) {}

          try {
            if (sessionStorage.fp == "test") {
              return "yes";
            }

            return window.amiunique_not_supported;
          } catch (ex) {
            return {
              name: ex.name,
              message: ex.message,
              status: window.amiunique_not_supported,
            };
          }
        };

        testIndexedDB = function testIndexedDB() {
          try {
            indexedDBStorage = window.indexedDB;

            if (
              indexedDBStorage !== "" &&
              indexedDBStorage !== null &&
              indexedDBStorage !== undefined
            ) {
              return "yes";
            }
          } catch (e) {
            return {
              name: e.name,
              message: e.message,
              status: window.amiunique_not_supported,
            };
          }
        };

        api.register(
          ["storage_local", "storage_session", "storage_indexedDB"],
          function () {
            return {
              storage_local: testLocalStorage(),
              storage_session: testSessionStorage(),
              storage_indexedDB: testIndexedDB(),
            };
          }
        );
      })();

      /***/
    },
    /* 369 */
    /***/
    function (module, exports) {
      (function () {
        var storage_usage = window.amiunique_not_supported;
        var storage_quota = window.amiunique_not_supported;

        if ("storage" in navigator && "estimate" in navigator.storage) {
          navigator.storage.estimate().then(function (_ref) {
            var usage = _ref.usage,
              quota = _ref.quota;
            storage_usage = usage;
            storage_quota = quota;
          });
        }

        api.register(["storage_usage", "storage_quota"], function () {
          return {
            storage_usage: storage_usage,
            storage_quota: storage_quota,
          };
        });
      })();

      /***/
    },
    /* 370 */
    /***/
    function (module, exports) {
      (function () {
        api.register("timezone", function () {
          return new Date().getTimezoneOffset();
        });
      })();

      /***/
    },
    /* 371 */
    /***/
    function (module, exports) {
      (function () {
        api.register("userAgent-js", function () {
          return window.navigator.userAgent;
        });
      })();

      /***/
    },
    /* 372 */
    /***/
    function (module, exports, __webpack_require__) {
      // console.log("calling the function ")

      __webpack_require__(173);

      (function () {
        api.register("videoFormats", function () {
          try {
            var formatNames = [
              'video/mp4; codecs="flac"',
              'video/mp4; codecs="H.264, mp3"',
              'video/mp4; codecs="H.264, aac"',
              'video/mpeg; codec="H.264"',
              'video/ogg; codecs="theora"',
              'video/ogg; codecs="opus"',
              'video/webm; codecs="vp9, opus"',
              'video/webm; codecs="vp8, vorbis"',
            ];
            var videoFormats = {};
            var element = document.createElement("video");
            formatNames.forEach(function (format) {
              videoFormats[format] =
                !!element.canPlayType && element.canPlayType(format);
            });
          } catch (e) {
            return { name: e.name, message: e.message };
          }

          return videoFormats;
        });
      })();

      window.amiunique_display["videoFormats"] = function (cell, videoFormats) {
        // cell, values, separator, number
        displayMap(cell, videoFormats, "\n", 10);
      };

      /***/
    },
    /* 373 */
    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(270);

      __webpack_require__(3);

      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(74);

      __webpack_require__(60);

      __webpack_require__(133);

      __webpack_require__(139);

      __webpack_require__(209);

      __webpack_require__(184);

      __webpack_require__(242);
      __webpack_require__(173);

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      (function () {
        api.register(
          ["webGLVendor", "webGLRenderer", "webGLData", "webGLParameters"],
          function () {
            // WebGL fingerprinting
            // Code from https://github.com/Valve/fingerprintjs2
            // Reworked by Antonin
            var webGLVendor;
            var webGLRenderer;
            var webGLData;
            var webGLParameters;

            var fa2s = function fa2s(fa) {
              gl.clearColor(0.0, 0.0, 0.0, 1.0);
              gl.enable(gl.DEPTH_TEST);
              gl.depthFunc(gl.LEQUAL);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              return "[" + fa[0] + ", " + fa[1] + "]";
            };
            var time_taken = Date.now() - window.global_start_time;
            //console.log("Web GL fingerprinting begin time: " + time_taken);
            // var xhr = new XMLHttpRequest();
            var url = "/bfp/debug.php";
            // xhr.open('POST', url, true);
            // xhr.send(window.global_current_url + " webgl_begin @ " + time_taken);

            var getGeneralParameters = function getGeneralParameters(
              webGLParameters,
              gl
            ) {
              var fa2sParameters = [
                "ALIASED_LINE_WIDTH_RANGE",
                "ALIASED_POINT_SIZE_RANGE",
                "MAX_VIEWPORT_DIMS",
              ];
              var generalParameterNames = [
                "ALPHA_BITS",
                "BLUE_BITS",
                "DEPTH_BITS",
                "GREEN_BITS",
                "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
                "MAX_CUBE_MAP_TEXTURE_SIZE",
                "MAX_FRAGMENT_UNIFORM_VECTORS",
                "MAX_RENDERBUFFER_SIZE",
                "MAX_RENDERBUFFER_SIZE",
                "MAX_TEXTURE_IMAGE_UNITS",
                "MAX_TEXTURE_SIZE",
                "MAX_VARYING_VECTORS",
                "MAX_VERTEX_ATTRIBS",
                "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
                "MAX_VERTEX_UNIFORM_VECTORS",
                "RED_BITS",
                "RENDERER",
                "SHADING_LANGUAGE_VERSION",
                "STENCIL_BITS",
                "VENDOR",
                "VERSION",
              ];
              generalParameters = {};

              try {
                generalParameters["MAX_ANISOTROPY"] = maxAnisotropy(gl);
                generalParameters["ANTIALIAS"] = gl.getContextAttributes()
                  .antialias
                  ? "yes"
                  : "no";
                fa2sParameters.forEach(function (fa2sParameter) {
                  generalParameters[fa2sParameter] = fa2s(
                    gl.getParameter(gl[fa2sParameter])
                  );
                });
                generalParameterNames.forEach(function (generalParameterName) {
                  generalParameters[generalParameterName] = gl.getParameter(
                    gl[generalParameterName]
                  );
                });
                return generalParameters;
              } catch (e) {
                return {
                  name: e.name,
                  message: e.message,
                  status: window.amiunique_not_supported,
                };
              }
            };

            var getShaderPrecisionParameters =
              function getShaderPrecisionParameters(webGLParameters, gl) {
                var shadersTypes = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
                var numberTypes = [
                  "HIGH_FLOAT",
                  "MEDIUM_FLOAT",
                  "LOW_FLOAT",
                  "HIGH_INT",
                  "MEDIUM_INT",
                  "LOW_INT",
                ];
                var parameters = ["precision", "rangeMin", "rangeMax"];
                shadersPrecisionParameters = {};

                try {
                  shadersTypes.forEach(function (shaderType) {
                    numberTypes.forEach(function (numberType) {
                      parameters.forEach(function (parameter) {
                        var fullName =
                          shaderType + " " + numberType + " " + parameter;
                        shadersPrecisionParameters[fullName] =
                          gl.getShaderPrecisionFormat(
                            gl[shaderType],
                            gl[numberType]
                          )[parameter];
                      });
                    });
                  });
                  return shadersPrecisionParameters;
                } catch (e) {
                  return {
                    name: e.name,
                    message: e.message,
                    status: window.amiunique_not_supported,
                  };
                }
              };

            var generateWebGLData = function generateWebGLData(gl) {
              try {
                var vShaderTemplate =
                  "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
                var fShaderTemplate =
                  "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
                var vertexPosBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
                var vertices = new Float32Array([
                  -0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0,
                ]);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
                vertexPosBuffer.itemSize = 3;
                vertexPosBuffer.numItems = 3;
                var program = gl.createProgram();
                var vshader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vshader, vShaderTemplate);
                gl.compileShader(vshader);
                var fshader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fshader, fShaderTemplate);
                gl.compileShader(fshader);
                gl.attachShader(program, vshader);
                gl.attachShader(program, fshader);
                gl.linkProgram(program);
                gl.useProgram(program);
                program.vertexPosAttrib = gl.getAttribLocation(
                  program,
                  "attrVertex"
                );
                program.offsetUniform = gl.getUniformLocation(
                  program,
                  "uniformOffset"
                );
                gl.enableVertexAttribArray(program.vertexPosArray);
                gl.vertexAttribPointer(
                  program.vertexPosAttrib,
                  vertexPosBuffer.itemSize,
                  gl.FLOAT,
                  !1,
                  0,
                  0
                );
                gl.uniform2f(program.offsetUniform, 1, 1);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);

                if (gl.canvas != null) {
                  return gl.canvas.toDataURL();
                }
              } catch (e) {
                return {
                  name: e.name,
                  message: e.message,
                  status: "Not supported",
                };
              }
            };

            var maxAnisotropy = function maxAnisotropy(gl) {
              var anisotropy;
              var ext =
                gl.getExtension("EXT_texture_filter_anisotropic") ||
                gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
              return ext
                ? ((anisotropy = gl.getParameter(
                    ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                  )),
                  0 === anisotropy && (anisotropy = 2),
                  anisotropy)
                : null;
            };

            try {
              var canvas = document.createElement("canvas");
              var gl =
                canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");

              if (
                gl
                  .getSupportedExtensions()
                  .indexOf("WEBGL_debug_renderer_info") >= 0
              ) {
                try {
                  webGLVendor = gl.getParameter(
                    gl.getExtension("WEBGL_debug_renderer_info")
                      .UNMASKED_VENDOR_WEBGL
                  );
                } catch (e) {
                  webGLVendor = {
                    name: e.name,
                    message: e.message,
                    status: window.amiunique_not_supported,
                  };
                }

                try {
                  webGLRenderer = gl.getParameter(
                    gl.getExtension("WEBGL_debug_renderer_info")
                      .UNMASKED_RENDERER_WEBGL
                  );
                } catch (e) {
                  webGLRenderer = {
                    name: e.name,
                    message: e.message,
                    status: window.amiunique_not_supported,
                  };
                }

                webGLData = generateWebGLData(gl);
                webGLParameters = {};
                webGLParameters["extensions"] = gl.getSupportedExtensions();
                webGLParameters["general"] = getGeneralParameters(
                  webGLParameters,
                  gl
                );
                webGLParameters["shaderPrecision"] =
                  getShaderPrecisionParameters(webGLParameters, gl);
              } else {
                webGLVendor = window.amiunique_not_supported;
                webGLRenderer = window.amiunique_not_supported;
                webGLParameters = window.amiunique_not_supported;
                webGLData = window.amiunique_not_supported;
              }
            } catch (e) {
              webGLVendor = window.amiunique_not_supported;
              webGLRenderer = window.amiunique_not_supported;
              webGLParameters = window.amiunique_not_supported;
              webGLData = window.amiunique_not_supported;
            }

            time_taken = Date.now() - window.global_start_time;
            // xhr = new XMLHttpRequest();
            url = "/bfp/debug.php";
            // xhr.open('POST', url, true);
            // xhr.send(window.global_current_url + " webgl_end @ " + time_taken);

            // xhr = new XMLHttpRequest();
            url = "/bfp/debug.php";
            var raw_hash = CryptoJS.SHA256(webGLData);
            var hash = raw_hash.toString(CryptoJS.enc.Hex);
            // xhr.open('POST', url, true);
            // xhr.send(window.global_current_url + " wfp: " + hash);
            window.webgl_hash = hash;
            //webGLData = "abc";
            //console.log("Web gl data: " + webGLData);
            //console.log('webglfp: ' + hash)
            //console.log("Web GL fingerprinting probable end time: " + time_taken);
            webGLPrint = {
              webGLVendor: webGLVendor,
              webGLRenderer: webGLRenderer,
              webGLData: webGLData,
              webGLParameters: webGLParameters,
            };
            // console.log(webGLPrint);
            return webGLPrint;
          }
        );
      })();

      window.amiunique_display["webGLData"] = function (cell, canvasData) {
        // Split with § is necessary due to compatibility with first version of AmIUnique (need to stay because of displaying old data through extension)
        if (cell.firstChild) {
          if (cell.firstChild.tagName === "DIV") {
            if (cell.firstChild.firstChild) {
              if (cell.firstChild.firstChild.tagName === "IMG") {
                return;
              }
            }
          } else if (cell.firstChild.tagName === "IMG") {
            return;
          }
        }
        /*  if (cell.firstChild.tagName === 'DIV' && cell.firstChild.firstChild.tagName === 'IMG' || cell.firstChild.tagName === 'IMG' ) {
                  return;
                }*/

        canvasData = canvasData.split("§")[0];

        if (
          canvasData === window.amiunique_not_supported ||
          canvasData === window.amiunique_no_value
        ) {
          cell.innerText = canvasData;
          return;
        }

        if (
          canvasData === window.amiunique_no_js ||
          canvasData === window.amiunique_nojs
        ) {
          cell.innerText = canvasData;
          return;
        }

        var img = new Image();
        img.src = canvasData;

        img.onload = function () {
          img.drawImage;
        };

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.appendChild(img);
      };

      window.amiunique_display["webGLParameters"] = function (
        cell,
        webGLParameters
      ) {
        if (
          webGLParameters === window.amiunique_nojs ||
          webGLParameters === window.amiunique_no_js
        ) {
          cell.innerText = window.amiunique_no_js;
          return;
        }

        if (
          typeof webGLParameters === "string" &&
          webGLParameters.startsWith("{") &&
          webGLParameters.endsWith("}")
        ) {
          webGLParameters = JSON.parse(webGLParameters);
        }

        if (_typeof(webGLParameters) !== "object") {
          cell.innerText = webGLParameters;
          return;
        }

        var extensions;

        if ("extensions" in webGLParameters) {
          if (typeof webGLParameters.extensions === "string") {
            extensions =
              webGLParameters.extensions.split(",").length +
              " different extensions";
          } else {
            extensions =
              webGLParameters.extensions.length + " different extensions";
          }
        } else {
          extensions = "";
        }

        var general =
          "general" in webGLParameters
            ? Object.keys(webGLParameters.general).length +
              " different general parameters analyzed"
            : "";
        var shaderPrecision =
          "shaderPrecision" in webGLParameters
            ? Object.keys(webGLParameters.shaderPrecision).length +
              " different shaders precisions analyzed"
            : "";
        var text = "";

        if (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }

        cell.innerText = "";

        if (extensions !== "") {
          text += extensions + "\n";
        }

        if (general !== "") {
          text += general + "\n";
        }

        if (shaderPrecision !== "") {
          text += shaderPrecision;
        }

        cell.innerText = text;
      };

      /***/
    },
    /* 374 */
    /***/
    function (module, exports) {
      (function () {
        api.register(
          [
            "key",
            "locationbar",
            "menubar",
            "personalbar",
            "statusbar",
            "toolbar",
            "result_state",
          ],
          function () {
            return {
              key: window.key,
              locationbar:
                window.locationbar !== undefined
                  ? window.locationbar.visible
                  : undefined,
              menubar:
                window.menubar !== undefined
                  ? window.menubar.visible
                  : undefined,
              personalbar:
                window.personalbar !== undefined
                  ? window.personalbar.visible
                  : undefined,
              statusbar:
                window.statusbar !== undefined
                  ? window.statusbar.visible
                  : undefined,
              toolbar:
                window.toolbar !== undefined
                  ? window.toolbar.visible
                  : undefined,
              result_state:
                window.result != undefined ? window.result.state : undefined,
            };
          }
        );
      })();

      window.amiunique_display["locationbar"] = function (cell, locationbar) {
        formatBarVisibility(cell, locationbar);
      };

      window.amiunique_display["menubar"] = function (cell, menubar) {
        formatBarVisibility(cell, menubar);
      };

      window.amiunique_display["personalbar"] = function (cell, personalbar) {
        formatBarVisibility(cell, locationbar);
      };

      window.amiunique_display["statusbar"] = function (cell, statusbar) {
        formatBarVisibility(cell, locationbar);
      };

      window.amiunique_display["toolbar"] = function (cell, toolbar) {
        formatBarVisibility(cell, locationbar);
      };

      function formatBarVisibility(cell, value) {
        cell.innerText = value
          ? window.amiunique_visible
          : window.amiunique_invisible;
      }

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Emoji", function () {
          function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
          }

          const emojis = {
            "😀": "1F600",
            "😃": "1F603",
            "😄": "1F604",
            "😁": "1F601",
            "😆": "1F606",
            "😅": "1F605",
            "🤣": "1F923",
            "😂": "1F602",
            "🙂": "1F642",
            "🙃": "1F643",
            U0001fae0: "1FAE0",
            "😉": "1F609",
            "😊": "1F60A",
            "😇": "1F607",
            "🥰": "1F970",
            "😍": "1F60D",
            "🤩": "1F929",
            "😘": "1F618",
            "😗": "1F617",
            "☺️": "263A FE0F",
            "☺": "263A",
            "😚": "1F61A",
            "😙": "1F619",
            "🥲": "1F972",
            "😋": "1F60B",
            "😛": "1F61B",
            "😜": "1F61C",
            "🤪": "1F92A",
            "😝": "1F61D",
            "🤑": "1F911",
            "🤗": "1F917",
            "🤭": "1F92D",
            U0001fae2: "1FAE2",
            U0001fae3: "1FAE3",
            "🤫": "1F92B",
            "🤔": "1F914",
            U0001fae1: "1FAE1",
            "🤐": "1F910",
            "🤨": "1F928",
            "😐": "1F610",
            "😑": "1F611",
            "😶": "1F636",
            U0001fae5: "1FAE5",
            "😶\u200d🌫️": "1F636 200D 1F32B FE0F",
            "😶\u200d🌫": "1F636 200D 1F32B",
            "😏": "1F60F",
            "😒": "1F612",
            "🙄": "1F644",
            "😬": "1F62C",
            "😮\u200d💨": "1F62E 200D 1F4A8",
            "🤥": "1F925",
            U0001fae8: "1FAE8",
            "🙂\u200d↔️": "1F642 200D 2194 FE0F",
            "🙂\u200d↔": "1F642 200D 2194",
            "🙂\u200d↕️": "1F642 200D 2195 FE0F",
            "🙂\u200d↕": "1F642 200D 2195",
            "😌": "1F60C",
            "😔": "1F614",
            "😪": "1F62A",
            "🤤": "1F924",
            "😴": "1F634",
            "😷": "1F637",
            "🤒": "1F912",
            "🤕": "1F915",
            "🤢": "1F922",
            "🤮": "1F92E",
            "🤧": "1F927",
            "🥵": "1F975",
            "🥶": "1F976",
            "🥴": "1F974",
            "😵": "1F635",
            "😵\u200d💫": "1F635 200D 1F4AB",
            "🤯": "1F92F",
            "🤠": "1F920",
            "🥳": "1F973",
            "🥸": "1F978",
            "😎": "1F60E",
            "🤓": "1F913",
            "🧐": "1F9D0",
            "😕": "1F615",
            U0001fae4: "1FAE4",
            "😟": "1F61F",
            "🙁": "1F641",
            "☹️": "2639 FE0F",
            "☹": "2639",
            "😮": "1F62E",
            "😯": "1F62F",
            "😲": "1F632",
            "😳": "1F633",
            "🥺": "1F97A",
            U0001f979: "1F979",
            "😦": "1F626",
            "😧": "1F627",
            "😨": "1F628",
            "😰": "1F630",
            "😥": "1F625",
            "😢": "1F622",
            "😭": "1F62D",
            "😱": "1F631",
            "😖": "1F616",
            "😣": "1F623",
            "😞": "1F61E",
            "😓": "1F613",
            "😩": "1F629",
            "😫": "1F62B",
            "🥱": "1F971",
            "😤": "1F624",
            "😡": "1F621",
            "😠": "1F620",
            "🤬": "1F92C",
            "😈": "1F608",
            "👿": "1F47F",
            "💀": "1F480",
            "☠️": "2620 FE0F",
            "☠": "2620",
            "💩": "1F4A9",
            "🤡": "1F921",
            "👹": "1F479",
            "👺": "1F47A",
            "👻": "1F47B",
            "👽": "1F47D",
            "👾": "1F47E",
            "🤖": "1F916",
            "😺": "1F63A",
            "😸": "1F638",
            "😹": "1F639",
            "😻": "1F63B",
            "😼": "1F63C",
            "😽": "1F63D",
            "🙀": "1F640",
            "😿": "1F63F",
            "😾": "1F63E",
            "🙈": "1F648",
            "🙉": "1F649",
            "🙊": "1F64A",
            "💌": "1F48C",
            "💘": "1F498",
            "💝": "1F49D",
            "💖": "1F496",
            "💗": "1F497",
            "💓": "1F493",
            "💞": "1F49E",
            "💕": "1F495",
            "💟": "1F49F",
            "❣️": "2763 FE0F",
            "❣": "2763",
            "💔": "1F494",
            "❤️\u200d🔥": "2764 FE0F 200D 1F525",
            "❤\u200d🔥": "2764 200D 1F525",
            "❤️\u200d🩹": "2764 FE0F 200D 1FA79",
            "❤\u200d🩹": "2764 200D 1FA79",
            "❤️": "2764 FE0F",
            "❤": "2764",
            U0001fa77: "1FA77",
            "🧡": "1F9E1",
            "💛": "1F49B",
            "💚": "1F49A",
            "💙": "1F499",
            U0001fa75: "1FA75",
            "💜": "1F49C",
            "🤎": "1F90E",
            "🖤": "1F5A4",
            U0001fa76: "1FA76",
            "🤍": "1F90D",
            "💋": "1F48B",
            "💯": "1F4AF",
            "💢": "1F4A2",
            "💥": "1F4A5",
            "💫": "1F4AB",
            "💦": "1F4A6",
            "💨": "1F4A8",
            "🕳️": "1F573 FE0F",
            "🕳": "1F573",
            "💬": "1F4AC",
            "👁️\u200d🗨️": "1F441 FE0F 200D 1F5E8 FE0F",
            "👁\u200d🗨️": "1F441 200D 1F5E8 FE0F",
            "👁️\u200d🗨": "1F441 FE0F 200D 1F5E8",
            "👁\u200d🗨": "1F441 200D 1F5E8",
            "🗨️": "1F5E8 FE0F",
            "🗨": "1F5E8",
            "🗯️": "1F5EF FE0F",
            "🗯": "1F5EF",
            "💭": "1F4AD",
            "💤": "1F4A4",
            "👋": "1F44B",
            "👋🏻": "1F44B 1F3FB",
            "👋🏼": "1F44B 1F3FC",
            "👋🏽": "1F44B 1F3FD",
            "👋🏾": "1F44B 1F3FE",
            "👋🏿": "1F44B 1F3FF",
            "🤚": "1F91A",
            "🤚🏻": "1F91A 1F3FB",
            "🤚🏼": "1F91A 1F3FC",
            "🤚🏽": "1F91A 1F3FD",
            "🤚🏾": "1F91A 1F3FE",
            "🤚🏿": "1F91A 1F3FF",
            "🖐️": "1F590 FE0F",
            "🖐": "1F590",
            "🖐🏻": "1F590 1F3FB",
            "🖐🏼": "1F590 1F3FC",
            "🖐🏽": "1F590 1F3FD",
            "🖐🏾": "1F590 1F3FE",
            "🖐🏿": "1F590 1F3FF",
            "✋": "270B",
            "✋🏻": "270B 1F3FB",
            "✋🏼": "270B 1F3FC",
            "✋🏽": "270B 1F3FD",
            "✋🏾": "270B 1F3FE",
            "✋🏿": "270B 1F3FF",
            "🖖": "1F596",
            "🖖🏻": "1F596 1F3FB",
            "🖖🏼": "1F596 1F3FC",
            "🖖🏽": "1F596 1F3FD",
            "🖖🏾": "1F596 1F3FE",
            "🖖🏿": "1F596 1F3FF",
            U0001faf1: "1FAF1",
            "U0001faf1🏻": "1FAF1 1F3FB",
            "U0001faf1🏼": "1FAF1 1F3FC",
            "U0001faf1🏽": "1FAF1 1F3FD",
            "U0001faf1🏾": "1FAF1 1F3FE",
            "U0001faf1🏿": "1FAF1 1F3FF",
            U0001faf2: "1FAF2",
            "U0001faf2🏻": "1FAF2 1F3FB",
            "U0001faf2🏼": "1FAF2 1F3FC",
            "U0001faf2🏽": "1FAF2 1F3FD",
            "U0001faf2🏾": "1FAF2 1F3FE",
            "U0001faf2🏿": "1FAF2 1F3FF",
            U0001faf3: "1FAF3",
            "U0001faf3🏻": "1FAF3 1F3FB",
            "U0001faf3🏼": "1FAF3 1F3FC",
            "U0001faf3🏽": "1FAF3 1F3FD",
            "U0001faf3🏾": "1FAF3 1F3FE",
            "U0001faf3🏿": "1FAF3 1F3FF",
            U0001faf4: "1FAF4",
            "U0001faf4🏻": "1FAF4 1F3FB",
            "U0001faf4🏼": "1FAF4 1F3FC",
            "U0001faf4🏽": "1FAF4 1F3FD",
            "U0001faf4🏾": "1FAF4 1F3FE",
            "U0001faf4🏿": "1FAF4 1F3FF",
            U0001faf7: "1FAF7",
            "U0001faf7🏻": "1FAF7 1F3FB",
            "U0001faf7🏼": "1FAF7 1F3FC",
            "U0001faf7🏽": "1FAF7 1F3FD",
            "U0001faf7🏾": "1FAF7 1F3FE",
            "U0001faf7🏿": "1FAF7 1F3FF",
            U0001faf8: "1FAF8",
            "U0001faf8🏻": "1FAF8 1F3FB",
            "U0001faf8🏼": "1FAF8 1F3FC",
            "U0001faf8🏽": "1FAF8 1F3FD",
            "U0001faf8🏾": "1FAF8 1F3FE",
            "U0001faf8🏿": "1FAF8 1F3FF",
            "👌": "1F44C",
            "👌🏻": "1F44C 1F3FB",
            "👌🏼": "1F44C 1F3FC",
            "👌🏽": "1F44C 1F3FD",
            "👌🏾": "1F44C 1F3FE",
            "👌🏿": "1F44C 1F3FF",
            "🤌": "1F90C",
            "🤌🏻": "1F90C 1F3FB",
            "🤌🏼": "1F90C 1F3FC",
            "🤌🏽": "1F90C 1F3FD",
            "🤌🏾": "1F90C 1F3FE",
            "🤌🏿": "1F90C 1F3FF",
            "🤏": "1F90F",
            "🤏🏻": "1F90F 1F3FB",
            "🤏🏼": "1F90F 1F3FC",
            "🤏🏽": "1F90F 1F3FD",
            "🤏🏾": "1F90F 1F3FE",
            "🤏🏿": "1F90F 1F3FF",
            "✌️": "270C FE0F",
            "✌": "270C",
            "✌🏻": "270C 1F3FB",
            "✌🏼": "270C 1F3FC",
            "✌🏽": "270C 1F3FD",
            "✌🏾": "270C 1F3FE",
            "✌🏿": "270C 1F3FF",
            "🤞": "1F91E",
            "🤞🏻": "1F91E 1F3FB",
            "🤞🏼": "1F91E 1F3FC",
            "🤞🏽": "1F91E 1F3FD",
            "🤞🏾": "1F91E 1F3FE",
            "🤞🏿": "1F91E 1F3FF",
            U0001faf0: "1FAF0",
            "U0001faf0🏻": "1FAF0 1F3FB",
            "U0001faf0🏼": "1FAF0 1F3FC",
            "U0001faf0🏽": "1FAF0 1F3FD",
            "U0001faf0🏾": "1FAF0 1F3FE",
            "U0001faf0🏿": "1FAF0 1F3FF",
            "🤟": "1F91F",
            "🤟🏻": "1F91F 1F3FB",
            "🤟🏼": "1F91F 1F3FC",
            "🤟🏽": "1F91F 1F3FD",
            "🤟🏾": "1F91F 1F3FE",
            "🤟🏿": "1F91F 1F3FF",
            "🤘": "1F918",
            "🤘🏻": "1F918 1F3FB",
            "🤘🏼": "1F918 1F3FC",
            "🤘🏽": "1F918 1F3FD",
            "🤘🏾": "1F918 1F3FE",
            "🤘🏿": "1F918 1F3FF",
            "🤙": "1F919",
            "🤙🏻": "1F919 1F3FB",
            "🤙🏼": "1F919 1F3FC",
            "🤙🏽": "1F919 1F3FD",
            "🤙🏾": "1F919 1F3FE",
            "🤙🏿": "1F919 1F3FF",
            "👈": "1F448",
            "👈🏻": "1F448 1F3FB",
            "👈🏼": "1F448 1F3FC",
            "👈🏽": "1F448 1F3FD",
            "👈🏾": "1F448 1F3FE",
            "👈🏿": "1F448 1F3FF",
            "👉": "1F449",
            "👉🏻": "1F449 1F3FB",
            "👉🏼": "1F449 1F3FC",
            "👉🏽": "1F449 1F3FD",
            "👉🏾": "1F449 1F3FE",
            "👉🏿": "1F449 1F3FF",
            "👆": "1F446",
            "👆🏻": "1F446 1F3FB",
            "👆🏼": "1F446 1F3FC",
            "👆🏽": "1F446 1F3FD",
            "👆🏾": "1F446 1F3FE",
            "👆🏿": "1F446 1F3FF",
            "🖕": "1F595",
            "🖕🏻": "1F595 1F3FB",
            "🖕🏼": "1F595 1F3FC",
            "🖕🏽": "1F595 1F3FD",
            "🖕🏾": "1F595 1F3FE",
            "🖕🏿": "1F595 1F3FF",
            "👇": "1F447",
            "👇🏻": "1F447 1F3FB",
            "👇🏼": "1F447 1F3FC",
            "👇🏽": "1F447 1F3FD",
            "👇🏾": "1F447 1F3FE",
            "👇🏿": "1F447 1F3FF",
            "☝️": "261D FE0F",
            "☝": "261D",
            "☝🏻": "261D 1F3FB",
            "☝🏼": "261D 1F3FC",
            "☝🏽": "261D 1F3FD",
            "☝🏾": "261D 1F3FE",
            "☝🏿": "261D 1F3FF",
            U0001faf5: "1FAF5",
            "U0001faf5🏻": "1FAF5 1F3FB",
            "U0001faf5🏼": "1FAF5 1F3FC",
            "U0001faf5🏽": "1FAF5 1F3FD",
            "U0001faf5🏾": "1FAF5 1F3FE",
            "U0001faf5🏿": "1FAF5 1F3FF",
            "👍": "1F44D",
            "👍🏻": "1F44D 1F3FB",
            "👍🏼": "1F44D 1F3FC",
            "👍🏽": "1F44D 1F3FD",
            "👍🏾": "1F44D 1F3FE",
            "👍🏿": "1F44D 1F3FF",
            "👎": "1F44E",
            "👎🏻": "1F44E 1F3FB",
            "👎🏼": "1F44E 1F3FC",
            "👎🏽": "1F44E 1F3FD",
            "👎🏾": "1F44E 1F3FE",
            "👎🏿": "1F44E 1F3FF",
            "✊": "270A",
            "✊🏻": "270A 1F3FB",
            "✊🏼": "270A 1F3FC",
            "✊🏽": "270A 1F3FD",
            "✊🏾": "270A 1F3FE",
            "✊🏿": "270A 1F3FF",
            "👊": "1F44A",
            "👊🏻": "1F44A 1F3FB",
            "👊🏼": "1F44A 1F3FC",
            "👊🏽": "1F44A 1F3FD",
            "👊🏾": "1F44A 1F3FE",
            "👊🏿": "1F44A 1F3FF",
            "🤛": "1F91B",
            "🤛🏻": "1F91B 1F3FB",
            "🤛🏼": "1F91B 1F3FC",
            "🤛🏽": "1F91B 1F3FD",
            "🤛🏾": "1F91B 1F3FE",
            "🤛🏿": "1F91B 1F3FF",
            "🤜": "1F91C",
            "🤜🏻": "1F91C 1F3FB",
            "🤜🏼": "1F91C 1F3FC",
            "🤜🏽": "1F91C 1F3FD",
            "🤜🏾": "1F91C 1F3FE",
            "🤜🏿": "1F91C 1F3FF",
            "👏": "1F44F",
            "👏🏻": "1F44F 1F3FB",
            "👏🏼": "1F44F 1F3FC",
            "👏🏽": "1F44F 1F3FD",
            "👏🏾": "1F44F 1F3FE",
            "👏🏿": "1F44F 1F3FF",
            "🙌": "1F64C",
            "🙌🏻": "1F64C 1F3FB",
            "🙌🏼": "1F64C 1F3FC",
            "🙌🏽": "1F64C 1F3FD",
            "🙌🏾": "1F64C 1F3FE",
            "🙌🏿": "1F64C 1F3FF",
            U0001faf6: "1FAF6",
            "U0001faf6🏻": "1FAF6 1F3FB",
            "U0001faf6🏼": "1FAF6 1F3FC",
            "U0001faf6🏽": "1FAF6 1F3FD",
            "U0001faf6🏾": "1FAF6 1F3FE",
            "U0001faf6🏿": "1FAF6 1F3FF",
            "👐": "1F450",
            "👐🏻": "1F450 1F3FB",
            "👐🏼": "1F450 1F3FC",
            "👐🏽": "1F450 1F3FD",
            "👐🏾": "1F450 1F3FE",
            "👐🏿": "1F450 1F3FF",
            "🤲": "1F932",
            "🤲🏻": "1F932 1F3FB",
            "🤲🏼": "1F932 1F3FC",
            "🤲🏽": "1F932 1F3FD",
            "🤲🏾": "1F932 1F3FE",
            "🤲🏿": "1F932 1F3FF",
            "🤝": "1F91D",
            "🤝🏻": "1F91D 1F3FB",
            "🤝🏼": "1F91D 1F3FC",
            "🤝🏽": "1F91D 1F3FD",
            "🤝🏾": "1F91D 1F3FE",
            "🤝🏿": "1F91D 1F3FF",
            "U0001faf1🏻\u200dU0001faf2🏼": "1FAF1 1F3FB 200D 1FAF2 1F3FC",
            "U0001faf1🏻\u200dU0001faf2🏽": "1FAF1 1F3FB 200D 1FAF2 1F3FD",
            "U0001faf1🏻\u200dU0001faf2🏾": "1FAF1 1F3FB 200D 1FAF2 1F3FE",
            "U0001faf1🏻\u200dU0001faf2🏿": "1FAF1 1F3FB 200D 1FAF2 1F3FF",
            "U0001faf1🏼\u200dU0001faf2🏻": "1FAF1 1F3FC 200D 1FAF2 1F3FB",
            "U0001faf1🏼\u200dU0001faf2🏽": "1FAF1 1F3FC 200D 1FAF2 1F3FD",
            "U0001faf1🏼\u200dU0001faf2🏾": "1FAF1 1F3FC 200D 1FAF2 1F3FE",
            "U0001faf1🏼\u200dU0001faf2🏿": "1FAF1 1F3FC 200D 1FAF2 1F3FF",
            "U0001faf1🏽\u200dU0001faf2🏻": "1FAF1 1F3FD 200D 1FAF2 1F3FB",
            "U0001faf1🏽\u200dU0001faf2🏼": "1FAF1 1F3FD 200D 1FAF2 1F3FC",
            "U0001faf1🏽\u200dU0001faf2🏾": "1FAF1 1F3FD 200D 1FAF2 1F3FE",
            "U0001faf1🏽\u200dU0001faf2🏿": "1FAF1 1F3FD 200D 1FAF2 1F3FF",
            "U0001faf1🏾\u200dU0001faf2🏻": "1FAF1 1F3FE 200D 1FAF2 1F3FB",
            "U0001faf1🏾\u200dU0001faf2🏼": "1FAF1 1F3FE 200D 1FAF2 1F3FC",
            "U0001faf1🏾\u200dU0001faf2🏽": "1FAF1 1F3FE 200D 1FAF2 1F3FD",
            "U0001faf1🏾\u200dU0001faf2🏿": "1FAF1 1F3FE 200D 1FAF2 1F3FF",
            "U0001faf1🏿\u200dU0001faf2🏻": "1FAF1 1F3FF 200D 1FAF2 1F3FB",
            "U0001faf1🏿\u200dU0001faf2🏼": "1FAF1 1F3FF 200D 1FAF2 1F3FC",
            "U0001faf1🏿\u200dU0001faf2🏽": "1FAF1 1F3FF 200D 1FAF2 1F3FD",
            "U0001faf1🏿\u200dU0001faf2🏾": "1FAF1 1F3FF 200D 1FAF2 1F3FE",
            "🙏": "1F64F",
            "🙏🏻": "1F64F 1F3FB",
            "🙏🏼": "1F64F 1F3FC",
            "🙏🏽": "1F64F 1F3FD",
            "🙏🏾": "1F64F 1F3FE",
            "🙏🏿": "1F64F 1F3FF",
            "✍️": "270D FE0F",
            "✍": "270D",
            "✍🏻": "270D 1F3FB",
            "✍🏼": "270D 1F3FC",
            "✍🏽": "270D 1F3FD",
            "✍🏾": "270D 1F3FE",
            "✍🏿": "270D 1F3FF",
            "💅": "1F485",
            "💅🏻": "1F485 1F3FB",
            "💅🏼": "1F485 1F3FC",
            "💅🏽": "1F485 1F3FD",
            "💅🏾": "1F485 1F3FE",
            "💅🏿": "1F485 1F3FF",
            "🤳": "1F933",
            "🤳🏻": "1F933 1F3FB",
            "🤳🏼": "1F933 1F3FC",
            "🤳🏽": "1F933 1F3FD",
            "🤳🏾": "1F933 1F3FE",
            "🤳🏿": "1F933 1F3FF",
            "💪": "1F4AA",
            "💪🏻": "1F4AA 1F3FB",
            "💪🏼": "1F4AA 1F3FC",
            "💪🏽": "1F4AA 1F3FD",
            "💪🏾": "1F4AA 1F3FE",
            "💪🏿": "1F4AA 1F3FF",
            "🦾": "1F9BE",
            "🦿": "1F9BF",
            "🦵": "1F9B5",
            "🦵🏻": "1F9B5 1F3FB",
            "🦵🏼": "1F9B5 1F3FC",
            "🦵🏽": "1F9B5 1F3FD",
            "🦵🏾": "1F9B5 1F3FE",
            "🦵🏿": "1F9B5 1F3FF",
            "🦶": "1F9B6",
            "🦶🏻": "1F9B6 1F3FB",
            "🦶🏼": "1F9B6 1F3FC",
            "🦶🏽": "1F9B6 1F3FD",
            "🦶🏾": "1F9B6 1F3FE",
            "🦶🏿": "1F9B6 1F3FF",
            "👂": "1F442",
            "👂🏻": "1F442 1F3FB",
            "👂🏼": "1F442 1F3FC",
            "👂🏽": "1F442 1F3FD",
            "👂🏾": "1F442 1F3FE",
            "👂🏿": "1F442 1F3FF",
            "🦻": "1F9BB",
            "🦻🏻": "1F9BB 1F3FB",
            "🦻🏼": "1F9BB 1F3FC",
            "🦻🏽": "1F9BB 1F3FD",
            "🦻🏾": "1F9BB 1F3FE",
            "🦻🏿": "1F9BB 1F3FF",
            "👃": "1F443",
            "👃🏻": "1F443 1F3FB",
            "👃🏼": "1F443 1F3FC",
            "👃🏽": "1F443 1F3FD",
            "👃🏾": "1F443 1F3FE",
            "👃🏿": "1F443 1F3FF",
            "🧠": "1F9E0",
            "🫀": "1FAC0",
            "🫁": "1FAC1",
            "🦷": "1F9B7",
            "🦴": "1F9B4",
            "👀": "1F440",
            "👁️": "1F441 FE0F",
            "👁": "1F441",
            "👅": "1F445",
            "👄": "1F444",
            U0001fae6: "1FAE6",
            "👶": "1F476",
            "👶🏻": "1F476 1F3FB",
            "👶🏼": "1F476 1F3FC",
            "👶🏽": "1F476 1F3FD",
            "👶🏾": "1F476 1F3FE",
            "👶🏿": "1F476 1F3FF",
            "🧒": "1F9D2",
            "🧒🏻": "1F9D2 1F3FB",
            "🧒🏼": "1F9D2 1F3FC",
            "🧒🏽": "1F9D2 1F3FD",
            "🧒🏾": "1F9D2 1F3FE",
            "🧒🏿": "1F9D2 1F3FF",
            "👦": "1F466",
            "👦🏻": "1F466 1F3FB",
            "👦🏼": "1F466 1F3FC",
            "👦🏽": "1F466 1F3FD",
            "👦🏾": "1F466 1F3FE",
            "👦🏿": "1F466 1F3FF",
            "👧": "1F467",
            "👧🏻": "1F467 1F3FB",
            "👧🏼": "1F467 1F3FC",
            "👧🏽": "1F467 1F3FD",
            "👧🏾": "1F467 1F3FE",
            "👧🏿": "1F467 1F3FF",
            "🧑": "1F9D1",
            "🧑🏻": "1F9D1 1F3FB",
            "🧑🏼": "1F9D1 1F3FC",
            "🧑🏽": "1F9D1 1F3FD",
            "🧑🏾": "1F9D1 1F3FE",
            "🧑🏿": "1F9D1 1F3FF",
            "👱": "1F471",
            "👱🏻": "1F471 1F3FB",
            "👱🏼": "1F471 1F3FC",
            "👱🏽": "1F471 1F3FD",
            "👱🏾": "1F471 1F3FE",
            "👱🏿": "1F471 1F3FF",
            "👨": "1F468",
            "👨🏻": "1F468 1F3FB",
            "👨🏼": "1F468 1F3FC",
            "👨🏽": "1F468 1F3FD",
            "👨🏾": "1F468 1F3FE",
            "👨🏿": "1F468 1F3FF",
            "🧔": "1F9D4",
            "🧔🏻": "1F9D4 1F3FB",
            "🧔🏼": "1F9D4 1F3FC",
            "🧔🏽": "1F9D4 1F3FD",
            "🧔🏾": "1F9D4 1F3FE",
            "🧔🏿": "1F9D4 1F3FF",
            "🧔\u200d♂️": "1F9D4 200D 2642 FE0F",
            "🧔\u200d♂": "1F9D4 200D 2642",
            "🧔🏻\u200d♂️": "1F9D4 1F3FB 200D 2642 FE0F",
            "🧔🏻\u200d♂": "1F9D4 1F3FB 200D 2642",
            "🧔🏼\u200d♂️": "1F9D4 1F3FC 200D 2642 FE0F",
            "🧔🏼\u200d♂": "1F9D4 1F3FC 200D 2642",
            "🧔🏽\u200d♂️": "1F9D4 1F3FD 200D 2642 FE0F",
            "🧔🏽\u200d♂": "1F9D4 1F3FD 200D 2642",
            "🧔🏾\u200d♂️": "1F9D4 1F3FE 200D 2642 FE0F",
            "🧔🏾\u200d♂": "1F9D4 1F3FE 200D 2642",
            "🧔🏿\u200d♂️": "1F9D4 1F3FF 200D 2642 FE0F",
            "🧔🏿\u200d♂": "1F9D4 1F3FF 200D 2642",
            "🧔\u200d♀️": "1F9D4 200D 2640 FE0F",
            "🧔\u200d♀": "1F9D4 200D 2640",
            "🧔🏻\u200d♀️": "1F9D4 1F3FB 200D 2640 FE0F",
            "🧔🏻\u200d♀": "1F9D4 1F3FB 200D 2640",
            "🧔🏼\u200d♀️": "1F9D4 1F3FC 200D 2640 FE0F",
            "🧔🏼\u200d♀": "1F9D4 1F3FC 200D 2640",
            "🧔🏽\u200d♀️": "1F9D4 1F3FD 200D 2640 FE0F",
            "🧔🏽\u200d♀": "1F9D4 1F3FD 200D 2640",
            "🧔🏾\u200d♀️": "1F9D4 1F3FE 200D 2640 FE0F",
            "🧔🏾\u200d♀": "1F9D4 1F3FE 200D 2640",
            "🧔🏿\u200d♀️": "1F9D4 1F3FF 200D 2640 FE0F",
            "🧔🏿\u200d♀": "1F9D4 1F3FF 200D 2640",
            "👨\u200d🦰": "1F468 200D 1F9B0",
            "👨🏻\u200d🦰": "1F468 1F3FB 200D 1F9B0",
            "👨🏼\u200d🦰": "1F468 1F3FC 200D 1F9B0",
            "👨🏽\u200d🦰": "1F468 1F3FD 200D 1F9B0",
            "👨🏾\u200d🦰": "1F468 1F3FE 200D 1F9B0",
            "👨🏿\u200d🦰": "1F468 1F3FF 200D 1F9B0",
            "👨\u200d🦱": "1F468 200D 1F9B1",
            "👨🏻\u200d🦱": "1F468 1F3FB 200D 1F9B1",
            "👨🏼\u200d🦱": "1F468 1F3FC 200D 1F9B1",
            "👨🏽\u200d🦱": "1F468 1F3FD 200D 1F9B1",
            "👨🏾\u200d🦱": "1F468 1F3FE 200D 1F9B1",
            "👨🏿\u200d🦱": "1F468 1F3FF 200D 1F9B1",
            "👨\u200d🦳": "1F468 200D 1F9B3",
            "👨🏻\u200d🦳": "1F468 1F3FB 200D 1F9B3",
            "👨🏼\u200d🦳": "1F468 1F3FC 200D 1F9B3",
            "👨🏽\u200d🦳": "1F468 1F3FD 200D 1F9B3",
            "👨🏾\u200d🦳": "1F468 1F3FE 200D 1F9B3",
            "👨🏿\u200d🦳": "1F468 1F3FF 200D 1F9B3",
            "👨\u200d🦲": "1F468 200D 1F9B2",
            "👨🏻\u200d🦲": "1F468 1F3FB 200D 1F9B2",
            "👨🏼\u200d🦲": "1F468 1F3FC 200D 1F9B2",
            "👨🏽\u200d🦲": "1F468 1F3FD 200D 1F9B2",
            "👨🏾\u200d🦲": "1F468 1F3FE 200D 1F9B2",
            "👨🏿\u200d🦲": "1F468 1F3FF 200D 1F9B2",
            "👩": "1F469",
            "👩🏻": "1F469 1F3FB",
            "👩🏼": "1F469 1F3FC",
            "👩🏽": "1F469 1F3FD",
            "👩🏾": "1F469 1F3FE",
            "👩🏿": "1F469 1F3FF",
            "👩\u200d🦰": "1F469 200D 1F9B0",
            "👩🏻\u200d🦰": "1F469 1F3FB 200D 1F9B0",
            "👩🏼\u200d🦰": "1F469 1F3FC 200D 1F9B0",
            "👩🏽\u200d🦰": "1F469 1F3FD 200D 1F9B0",
            "👩🏾\u200d🦰": "1F469 1F3FE 200D 1F9B0",
            "👩🏿\u200d🦰": "1F469 1F3FF 200D 1F9B0",
            "🧑\u200d🦰": "1F9D1 200D 1F9B0",
            "🧑🏻\u200d🦰": "1F9D1 1F3FB 200D 1F9B0",
            "🧑🏼\u200d🦰": "1F9D1 1F3FC 200D 1F9B0",
            "🧑🏽\u200d🦰": "1F9D1 1F3FD 200D 1F9B0",
            "🧑🏾\u200d🦰": "1F9D1 1F3FE 200D 1F9B0",
            "🧑🏿\u200d🦰": "1F9D1 1F3FF 200D 1F9B0",
            "👩\u200d🦱": "1F469 200D 1F9B1",
            "👩🏻\u200d🦱": "1F469 1F3FB 200D 1F9B1",
            "👩🏼\u200d🦱": "1F469 1F3FC 200D 1F9B1",
            "👩🏽\u200d🦱": "1F469 1F3FD 200D 1F9B1",
            "👩🏾\u200d🦱": "1F469 1F3FE 200D 1F9B1",
            "👩🏿\u200d🦱": "1F469 1F3FF 200D 1F9B1",
            "🧑\u200d🦱": "1F9D1 200D 1F9B1",
            "🧑🏻\u200d🦱": "1F9D1 1F3FB 200D 1F9B1",
            "🧑🏼\u200d🦱": "1F9D1 1F3FC 200D 1F9B1",
            "🧑🏽\u200d🦱": "1F9D1 1F3FD 200D 1F9B1",
            "🧑🏾\u200d🦱": "1F9D1 1F3FE 200D 1F9B1",
            "🧑🏿\u200d🦱": "1F9D1 1F3FF 200D 1F9B1",
            "👩\u200d🦳": "1F469 200D 1F9B3",
            "👩🏻\u200d🦳": "1F469 1F3FB 200D 1F9B3",
            "👩🏼\u200d🦳": "1F469 1F3FC 200D 1F9B3",
            "👩🏽\u200d🦳": "1F469 1F3FD 200D 1F9B3",
            "👩🏾\u200d🦳": "1F469 1F3FE 200D 1F9B3",
            "👩🏿\u200d🦳": "1F469 1F3FF 200D 1F9B3",
            "🧑\u200d🦳": "1F9D1 200D 1F9B3",
            "🧑🏻\u200d🦳": "1F9D1 1F3FB 200D 1F9B3",
            "🧑🏼\u200d🦳": "1F9D1 1F3FC 200D 1F9B3",
            "🧑🏽\u200d🦳": "1F9D1 1F3FD 200D 1F9B3",
            "🧑🏾\u200d🦳": "1F9D1 1F3FE 200D 1F9B3",
            "🧑🏿\u200d🦳": "1F9D1 1F3FF 200D 1F9B3",
            "👩\u200d🦲": "1F469 200D 1F9B2",
            "👩🏻\u200d🦲": "1F469 1F3FB 200D 1F9B2",
            "👩🏼\u200d🦲": "1F469 1F3FC 200D 1F9B2",
            "👩🏽\u200d🦲": "1F469 1F3FD 200D 1F9B2",
            "👩🏾\u200d🦲": "1F469 1F3FE 200D 1F9B2",
            "👩🏿\u200d🦲": "1F469 1F3FF 200D 1F9B2",
            "🧑\u200d🦲": "1F9D1 200D 1F9B2",
            "🧑🏻\u200d🦲": "1F9D1 1F3FB 200D 1F9B2",
            "🧑🏼\u200d🦲": "1F9D1 1F3FC 200D 1F9B2",
            "🧑🏽\u200d🦲": "1F9D1 1F3FD 200D 1F9B2",
            "🧑🏾\u200d🦲": "1F9D1 1F3FE 200D 1F9B2",
            "🧑🏿\u200d🦲": "1F9D1 1F3FF 200D 1F9B2",
            "👱\u200d♀️": "1F471 200D 2640 FE0F",
            "👱\u200d♀": "1F471 200D 2640",
            "👱🏻\u200d♀️": "1F471 1F3FB 200D 2640 FE0F",
            "👱🏻\u200d♀": "1F471 1F3FB 200D 2640",
            "👱🏼\u200d♀️": "1F471 1F3FC 200D 2640 FE0F",
            "👱🏼\u200d♀": "1F471 1F3FC 200D 2640",
            "👱🏽\u200d♀️": "1F471 1F3FD 200D 2640 FE0F",
            "👱🏽\u200d♀": "1F471 1F3FD 200D 2640",
            "👱🏾\u200d♀️": "1F471 1F3FE 200D 2640 FE0F",
            "👱🏾\u200d♀": "1F471 1F3FE 200D 2640",
            "👱🏿\u200d♀️": "1F471 1F3FF 200D 2640 FE0F",
            "👱🏿\u200d♀": "1F471 1F3FF 200D 2640",
            "👱\u200d♂️": "1F471 200D 2642 FE0F",
            "👱\u200d♂": "1F471 200D 2642",
            "👱🏻\u200d♂️": "1F471 1F3FB 200D 2642 FE0F",
            "👱🏻\u200d♂": "1F471 1F3FB 200D 2642",
            "👱🏼\u200d♂️": "1F471 1F3FC 200D 2642 FE0F",
            "👱🏼\u200d♂": "1F471 1F3FC 200D 2642",
            "👱🏽\u200d♂️": "1F471 1F3FD 200D 2642 FE0F",
            "👱🏽\u200d♂": "1F471 1F3FD 200D 2642",
            "👱🏾\u200d♂️": "1F471 1F3FE 200D 2642 FE0F",
            "👱🏾\u200d♂": "1F471 1F3FE 200D 2642",
            "👱🏿\u200d♂️": "1F471 1F3FF 200D 2642 FE0F",
            "👱🏿\u200d♂": "1F471 1F3FF 200D 2642",
            "🧓": "1F9D3",
            "🧓🏻": "1F9D3 1F3FB",
            "🧓🏼": "1F9D3 1F3FC",
            "🧓🏽": "1F9D3 1F3FD",
            "🧓🏾": "1F9D3 1F3FE",
            "🧓🏿": "1F9D3 1F3FF",
            "👴": "1F474",
            "👴🏻": "1F474 1F3FB",
            "👴🏼": "1F474 1F3FC",
            "👴🏽": "1F474 1F3FD",
            "👴🏾": "1F474 1F3FE",
            "👴🏿": "1F474 1F3FF",
            "👵": "1F475",
            "👵🏻": "1F475 1F3FB",
            "👵🏼": "1F475 1F3FC",
            "👵🏽": "1F475 1F3FD",
            "👵🏾": "1F475 1F3FE",
            "👵🏿": "1F475 1F3FF",
            "🙍": "1F64D",
            "🙍🏻": "1F64D 1F3FB",
            "🙍🏼": "1F64D 1F3FC",
            "🙍🏽": "1F64D 1F3FD",
            "🙍🏾": "1F64D 1F3FE",
            "🙍🏿": "1F64D 1F3FF",
            "🙍\u200d♂️": "1F64D 200D 2642 FE0F",
            "🙍\u200d♂": "1F64D 200D 2642",
            "🙍🏻\u200d♂️": "1F64D 1F3FB 200D 2642 FE0F",
            "🙍🏻\u200d♂": "1F64D 1F3FB 200D 2642",
            "🙍🏼\u200d♂️": "1F64D 1F3FC 200D 2642 FE0F",
            "🙍🏼\u200d♂": "1F64D 1F3FC 200D 2642",
            "🙍🏽\u200d♂️": "1F64D 1F3FD 200D 2642 FE0F",
            "🙍🏽\u200d♂": "1F64D 1F3FD 200D 2642",
            "🙍🏾\u200d♂️": "1F64D 1F3FE 200D 2642 FE0F",
            "🙍🏾\u200d♂": "1F64D 1F3FE 200D 2642",
            "🙍🏿\u200d♂️": "1F64D 1F3FF 200D 2642 FE0F",
            "🙍🏿\u200d♂": "1F64D 1F3FF 200D 2642",
            "🙍\u200d♀️": "1F64D 200D 2640 FE0F",
            "🙍\u200d♀": "1F64D 200D 2640",
            "🙍🏻\u200d♀️": "1F64D 1F3FB 200D 2640 FE0F",
            "🙍🏻\u200d♀": "1F64D 1F3FB 200D 2640",
            "🙍🏼\u200d♀️": "1F64D 1F3FC 200D 2640 FE0F",
            "🙍🏼\u200d♀": "1F64D 1F3FC 200D 2640",
            "🙍🏽\u200d♀️": "1F64D 1F3FD 200D 2640 FE0F",
            "🙍🏽\u200d♀": "1F64D 1F3FD 200D 2640",
            "🙍🏾\u200d♀️": "1F64D 1F3FE 200D 2640 FE0F",
            "🙍🏾\u200d♀": "1F64D 1F3FE 200D 2640",
            "🙍🏿\u200d♀️": "1F64D 1F3FF 200D 2640 FE0F",
            "🙍🏿\u200d♀": "1F64D 1F3FF 200D 2640",
            "🙎": "1F64E",
            "🙎🏻": "1F64E 1F3FB",
            "🙎🏼": "1F64E 1F3FC",
            "🙎🏽": "1F64E 1F3FD",
            "🙎🏾": "1F64E 1F3FE",
            "🙎🏿": "1F64E 1F3FF",
            "🙎\u200d♂️": "1F64E 200D 2642 FE0F",
            "🙎\u200d♂": "1F64E 200D 2642",
            "🙎🏻\u200d♂️": "1F64E 1F3FB 200D 2642 FE0F",
            "🙎🏻\u200d♂": "1F64E 1F3FB 200D 2642",
            "🙎🏼\u200d♂️": "1F64E 1F3FC 200D 2642 FE0F",
            "🙎🏼\u200d♂": "1F64E 1F3FC 200D 2642",
            "🙎🏽\u200d♂️": "1F64E 1F3FD 200D 2642 FE0F",
            "🙎🏽\u200d♂": "1F64E 1F3FD 200D 2642",
            "🙎🏾\u200d♂️": "1F64E 1F3FE 200D 2642 FE0F",
            "🙎🏾\u200d♂": "1F64E 1F3FE 200D 2642",
            "🙎🏿\u200d♂️": "1F64E 1F3FF 200D 2642 FE0F",
            "🙎🏿\u200d♂": "1F64E 1F3FF 200D 2642",
            "🙎\u200d♀️": "1F64E 200D 2640 FE0F",
            "🙎\u200d♀": "1F64E 200D 2640",
            "🙎🏻\u200d♀️": "1F64E 1F3FB 200D 2640 FE0F",
            "🙎🏻\u200d♀": "1F64E 1F3FB 200D 2640",
            "🙎🏼\u200d♀️": "1F64E 1F3FC 200D 2640 FE0F",
            "🙎🏼\u200d♀": "1F64E 1F3FC 200D 2640",
            "🙎🏽\u200d♀️": "1F64E 1F3FD 200D 2640 FE0F",
            "🙎🏽\u200d♀": "1F64E 1F3FD 200D 2640",
            "🙎🏾\u200d♀️": "1F64E 1F3FE 200D 2640 FE0F",
            "🙎🏾\u200d♀": "1F64E 1F3FE 200D 2640",
            "🙎🏿\u200d♀️": "1F64E 1F3FF 200D 2640 FE0F",
            "🙎🏿\u200d♀": "1F64E 1F3FF 200D 2640",
            "🙅": "1F645",
            "🙅🏻": "1F645 1F3FB",
            "🙅🏼": "1F645 1F3FC",
            "🙅🏽": "1F645 1F3FD",
            "🙅🏾": "1F645 1F3FE",
            "🙅🏿": "1F645 1F3FF",
            "🙅\u200d♂️": "1F645 200D 2642 FE0F",
            "🙅\u200d♂": "1F645 200D 2642",
            "🙅🏻\u200d♂️": "1F645 1F3FB 200D 2642 FE0F",
            "🙅🏻\u200d♂": "1F645 1F3FB 200D 2642",
            "🙅🏼\u200d♂️": "1F645 1F3FC 200D 2642 FE0F",
            "🙅🏼\u200d♂": "1F645 1F3FC 200D 2642",
            "🙅🏽\u200d♂️": "1F645 1F3FD 200D 2642 FE0F",
            "🙅🏽\u200d♂": "1F645 1F3FD 200D 2642",
            "🙅🏾\u200d♂️": "1F645 1F3FE 200D 2642 FE0F",
            "🙅🏾\u200d♂": "1F645 1F3FE 200D 2642",
            "🙅🏿\u200d♂️": "1F645 1F3FF 200D 2642 FE0F",
            "🙅🏿\u200d♂": "1F645 1F3FF 200D 2642",
            "🙅\u200d♀️": "1F645 200D 2640 FE0F",
            "🙅\u200d♀": "1F645 200D 2640",
            "🙅🏻\u200d♀️": "1F645 1F3FB 200D 2640 FE0F",
            "🙅🏻\u200d♀": "1F645 1F3FB 200D 2640",
            "🙅🏼\u200d♀️": "1F645 1F3FC 200D 2640 FE0F",
            "🙅🏼\u200d♀": "1F645 1F3FC 200D 2640",
            "🙅🏽\u200d♀️": "1F645 1F3FD 200D 2640 FE0F",
            "🙅🏽\u200d♀": "1F645 1F3FD 200D 2640",
            "🙅🏾\u200d♀️": "1F645 1F3FE 200D 2640 FE0F",
            "🙅🏾\u200d♀": "1F645 1F3FE 200D 2640",
            "🙅🏿\u200d♀️": "1F645 1F3FF 200D 2640 FE0F",
            "🙅🏿\u200d♀": "1F645 1F3FF 200D 2640",
            "🙆": "1F646",
            "🙆🏻": "1F646 1F3FB",
            "🙆🏼": "1F646 1F3FC",
            "🙆🏽": "1F646 1F3FD",
            "🙆🏾": "1F646 1F3FE",
            "🙆🏿": "1F646 1F3FF",
            "🙆\u200d♂️": "1F646 200D 2642 FE0F",
            "🙆\u200d♂": "1F646 200D 2642",
            "🙆🏻\u200d♂️": "1F646 1F3FB 200D 2642 FE0F",
            "🙆🏻\u200d♂": "1F646 1F3FB 200D 2642",
            "🙆🏼\u200d♂️": "1F646 1F3FC 200D 2642 FE0F",
            "🙆🏼\u200d♂": "1F646 1F3FC 200D 2642",
            "🙆🏽\u200d♂️": "1F646 1F3FD 200D 2642 FE0F",
            "🙆🏽\u200d♂": "1F646 1F3FD 200D 2642",
            "🙆🏾\u200d♂️": "1F646 1F3FE 200D 2642 FE0F",
            "🙆🏾\u200d♂": "1F646 1F3FE 200D 2642",
            "🙆🏿\u200d♂️": "1F646 1F3FF 200D 2642 FE0F",
            "🙆🏿\u200d♂": "1F646 1F3FF 200D 2642",
            "🙆\u200d♀️": "1F646 200D 2640 FE0F",
            "🙆\u200d♀": "1F646 200D 2640",
            "🙆🏻\u200d♀️": "1F646 1F3FB 200D 2640 FE0F",
            "🙆🏻\u200d♀": "1F646 1F3FB 200D 2640",
            "🙆🏼\u200d♀️": "1F646 1F3FC 200D 2640 FE0F",
            "🙆🏼\u200d♀": "1F646 1F3FC 200D 2640",
            "🙆🏽\u200d♀️": "1F646 1F3FD 200D 2640 FE0F",
            "🙆🏽\u200d♀": "1F646 1F3FD 200D 2640",
            "🙆🏾\u200d♀️": "1F646 1F3FE 200D 2640 FE0F",
            "🙆🏾\u200d♀": "1F646 1F3FE 200D 2640",
            "🙆🏿\u200d♀️": "1F646 1F3FF 200D 2640 FE0F",
            "🙆🏿\u200d♀": "1F646 1F3FF 200D 2640",
            "💁": "1F481",
            "💁🏻": "1F481 1F3FB",
            "💁🏼": "1F481 1F3FC",
            "💁🏽": "1F481 1F3FD",
            "💁🏾": "1F481 1F3FE",
            "💁🏿": "1F481 1F3FF",
            "💁\u200d♂️": "1F481 200D 2642 FE0F",
            "💁\u200d♂": "1F481 200D 2642",
            "💁🏻\u200d♂️": "1F481 1F3FB 200D 2642 FE0F",
            "💁🏻\u200d♂": "1F481 1F3FB 200D 2642",
            "💁🏼\u200d♂️": "1F481 1F3FC 200D 2642 FE0F",
            "💁🏼\u200d♂": "1F481 1F3FC 200D 2642",
            "💁🏽\u200d♂️": "1F481 1F3FD 200D 2642 FE0F",
            "💁🏽\u200d♂": "1F481 1F3FD 200D 2642",
            "💁🏾\u200d♂️": "1F481 1F3FE 200D 2642 FE0F",
            "💁🏾\u200d♂": "1F481 1F3FE 200D 2642",
            "💁🏿\u200d♂️": "1F481 1F3FF 200D 2642 FE0F",
            "💁🏿\u200d♂": "1F481 1F3FF 200D 2642",
            "💁\u200d♀️": "1F481 200D 2640 FE0F",
            "💁\u200d♀": "1F481 200D 2640",
            "💁🏻\u200d♀️": "1F481 1F3FB 200D 2640 FE0F",
            "💁🏻\u200d♀": "1F481 1F3FB 200D 2640",
            "💁🏼\u200d♀️": "1F481 1F3FC 200D 2640 FE0F",
            "💁🏼\u200d♀": "1F481 1F3FC 200D 2640",
            "💁🏽\u200d♀️": "1F481 1F3FD 200D 2640 FE0F",
            "💁🏽\u200d♀": "1F481 1F3FD 200D 2640",
            "💁🏾\u200d♀️": "1F481 1F3FE 200D 2640 FE0F",
            "💁🏾\u200d♀": "1F481 1F3FE 200D 2640",
            "💁🏿\u200d♀️": "1F481 1F3FF 200D 2640 FE0F",
            "💁🏿\u200d♀": "1F481 1F3FF 200D 2640",
            "🙋": "1F64B",
            "🙋🏻": "1F64B 1F3FB",
            "🙋🏼": "1F64B 1F3FC",
            "🙋🏽": "1F64B 1F3FD",
            "🙋🏾": "1F64B 1F3FE",
            "🙋🏿": "1F64B 1F3FF",
            "🙋\u200d♂️": "1F64B 200D 2642 FE0F",
            "🙋\u200d♂": "1F64B 200D 2642",
            "🙋🏻\u200d♂️": "1F64B 1F3FB 200D 2642 FE0F",
            "🙋🏻\u200d♂": "1F64B 1F3FB 200D 2642",
            "🙋🏼\u200d♂️": "1F64B 1F3FC 200D 2642 FE0F",
            "🙋🏼\u200d♂": "1F64B 1F3FC 200D 2642",
            "🙋🏽\u200d♂️": "1F64B 1F3FD 200D 2642 FE0F",
            "🙋🏽\u200d♂": "1F64B 1F3FD 200D 2642",
            "🙋🏾\u200d♂️": "1F64B 1F3FE 200D 2642 FE0F",
            "🙋🏾\u200d♂": "1F64B 1F3FE 200D 2642",
            "🙋🏿\u200d♂️": "1F64B 1F3FF 200D 2642 FE0F",
            "🙋🏿\u200d♂": "1F64B 1F3FF 200D 2642",
            "🙋\u200d♀️": "1F64B 200D 2640 FE0F",
            "🙋\u200d♀": "1F64B 200D 2640",
            "🙋🏻\u200d♀️": "1F64B 1F3FB 200D 2640 FE0F",
            "🙋🏻\u200d♀": "1F64B 1F3FB 200D 2640",
            "🙋🏼\u200d♀️": "1F64B 1F3FC 200D 2640 FE0F",
            "🙋🏼\u200d♀": "1F64B 1F3FC 200D 2640",
            "🙋🏽\u200d♀️": "1F64B 1F3FD 200D 2640 FE0F",
            "🙋🏽\u200d♀": "1F64B 1F3FD 200D 2640",
            "🙋🏾\u200d♀️": "1F64B 1F3FE 200D 2640 FE0F",
            "🙋🏾\u200d♀": "1F64B 1F3FE 200D 2640",
            "🙋🏿\u200d♀️": "1F64B 1F3FF 200D 2640 FE0F",
            "🙋🏿\u200d♀": "1F64B 1F3FF 200D 2640",
            "🧏": "1F9CF",
            "🧏🏻": "1F9CF 1F3FB",
            "🧏🏼": "1F9CF 1F3FC",
            "🧏🏽": "1F9CF 1F3FD",
            "🧏🏾": "1F9CF 1F3FE",
            "🧏🏿": "1F9CF 1F3FF",
            "🧏\u200d♂️": "1F9CF 200D 2642 FE0F",
            "🧏\u200d♂": "1F9CF 200D 2642",
            "🧏🏻\u200d♂️": "1F9CF 1F3FB 200D 2642 FE0F",
            "🧏🏻\u200d♂": "1F9CF 1F3FB 200D 2642",
            "🧏🏼\u200d♂️": "1F9CF 1F3FC 200D 2642 FE0F",
            "🧏🏼\u200d♂": "1F9CF 1F3FC 200D 2642",
            "🧏🏽\u200d♂️": "1F9CF 1F3FD 200D 2642 FE0F",
            "🧏🏽\u200d♂": "1F9CF 1F3FD 200D 2642",
            "🧏🏾\u200d♂️": "1F9CF 1F3FE 200D 2642 FE0F",
            "🧏🏾\u200d♂": "1F9CF 1F3FE 200D 2642",
            "🧏🏿\u200d♂️": "1F9CF 1F3FF 200D 2642 FE0F",
            "🧏🏿\u200d♂": "1F9CF 1F3FF 200D 2642",
            "🧏\u200d♀️": "1F9CF 200D 2640 FE0F",
            "🧏\u200d♀": "1F9CF 200D 2640",
            "🧏🏻\u200d♀️": "1F9CF 1F3FB 200D 2640 FE0F",
            "🧏🏻\u200d♀": "1F9CF 1F3FB 200D 2640",
            "🧏🏼\u200d♀️": "1F9CF 1F3FC 200D 2640 FE0F",
            "🧏🏼\u200d♀": "1F9CF 1F3FC 200D 2640",
            "🧏🏽\u200d♀️": "1F9CF 1F3FD 200D 2640 FE0F",
            "🧏🏽\u200d♀": "1F9CF 1F3FD 200D 2640",
            "🧏🏾\u200d♀️": "1F9CF 1F3FE 200D 2640 FE0F",
            "🧏🏾\u200d♀": "1F9CF 1F3FE 200D 2640",
            "🧏🏿\u200d♀️": "1F9CF 1F3FF 200D 2640 FE0F",
            "🧏🏿\u200d♀": "1F9CF 1F3FF 200D 2640",
            "🙇": "1F647",
            "🙇🏻": "1F647 1F3FB",
            "🙇🏼": "1F647 1F3FC",
            "🙇🏽": "1F647 1F3FD",
            "🙇🏾": "1F647 1F3FE",
            "🙇🏿": "1F647 1F3FF",
            "🙇\u200d♂️": "1F647 200D 2642 FE0F",
            "🙇\u200d♂": "1F647 200D 2642",
            "🙇🏻\u200d♂️": "1F647 1F3FB 200D 2642 FE0F",
            "🙇🏻\u200d♂": "1F647 1F3FB 200D 2642",
            "🙇🏼\u200d♂️": "1F647 1F3FC 200D 2642 FE0F",
            "🙇🏼\u200d♂": "1F647 1F3FC 200D 2642",
            "🙇🏽\u200d♂️": "1F647 1F3FD 200D 2642 FE0F",
            "🙇🏽\u200d♂": "1F647 1F3FD 200D 2642",
            "🙇🏾\u200d♂️": "1F647 1F3FE 200D 2642 FE0F",
            "🙇🏾\u200d♂": "1F647 1F3FE 200D 2642",
            "🙇🏿\u200d♂️": "1F647 1F3FF 200D 2642 FE0F",
            "🙇🏿\u200d♂": "1F647 1F3FF 200D 2642",
            "🙇\u200d♀️": "1F647 200D 2640 FE0F",
            "🙇\u200d♀": "1F647 200D 2640",
            "🙇🏻\u200d♀️": "1F647 1F3FB 200D 2640 FE0F",
            "🙇🏻\u200d♀": "1F647 1F3FB 200D 2640",
            "🙇🏼\u200d♀️": "1F647 1F3FC 200D 2640 FE0F",
            "🙇🏼\u200d♀": "1F647 1F3FC 200D 2640",
            "🙇🏽\u200d♀️": "1F647 1F3FD 200D 2640 FE0F",
            "🙇🏽\u200d♀": "1F647 1F3FD 200D 2640",
            "🙇🏾\u200d♀️": "1F647 1F3FE 200D 2640 FE0F",
            "🙇🏾\u200d♀": "1F647 1F3FE 200D 2640",
            "🙇🏿\u200d♀️": "1F647 1F3FF 200D 2640 FE0F",
            "🙇🏿\u200d♀": "1F647 1F3FF 200D 2640",
            "🤦": "1F926",
            "🤦🏻": "1F926 1F3FB",
            "🤦🏼": "1F926 1F3FC",
            "🤦🏽": "1F926 1F3FD",
            "🤦🏾": "1F926 1F3FE",
            "🤦🏿": "1F926 1F3FF",
            "🤦\u200d♂️": "1F926 200D 2642 FE0F",
            "🤦\u200d♂": "1F926 200D 2642",
            "🤦🏻\u200d♂️": "1F926 1F3FB 200D 2642 FE0F",
            "🤦🏻\u200d♂": "1F926 1F3FB 200D 2642",
            "🤦🏼\u200d♂️": "1F926 1F3FC 200D 2642 FE0F",
            "🤦🏼\u200d♂": "1F926 1F3FC 200D 2642",
            "🤦🏽\u200d♂️": "1F926 1F3FD 200D 2642 FE0F",
            "🤦🏽\u200d♂": "1F926 1F3FD 200D 2642",
            "🤦🏾\u200d♂️": "1F926 1F3FE 200D 2642 FE0F",
            "🤦🏾\u200d♂": "1F926 1F3FE 200D 2642",
            "🤦🏿\u200d♂️": "1F926 1F3FF 200D 2642 FE0F",
            "🤦🏿\u200d♂": "1F926 1F3FF 200D 2642",
            "🤦\u200d♀️": "1F926 200D 2640 FE0F",
            "🤦\u200d♀": "1F926 200D 2640",
            "🤦🏻\u200d♀️": "1F926 1F3FB 200D 2640 FE0F",
            "🤦🏻\u200d♀": "1F926 1F3FB 200D 2640",
            "🤦🏼\u200d♀️": "1F926 1F3FC 200D 2640 FE0F",
            "🤦🏼\u200d♀": "1F926 1F3FC 200D 2640",
            "🤦🏽\u200d♀️": "1F926 1F3FD 200D 2640 FE0F",
            "🤦🏽\u200d♀": "1F926 1F3FD 200D 2640",
            "🤦🏾\u200d♀️": "1F926 1F3FE 200D 2640 FE0F",
            "🤦🏾\u200d♀": "1F926 1F3FE 200D 2640",
            "🤦🏿\u200d♀️": "1F926 1F3FF 200D 2640 FE0F",
            "🤦🏿\u200d♀": "1F926 1F3FF 200D 2640",
            "🤷": "1F937",
            "🤷🏻": "1F937 1F3FB",
            "🤷🏼": "1F937 1F3FC",
            "🤷🏽": "1F937 1F3FD",
            "🤷🏾": "1F937 1F3FE",
            "🤷🏿": "1F937 1F3FF",
            "🤷\u200d♂️": "1F937 200D 2642 FE0F",
            "🤷\u200d♂": "1F937 200D 2642",
            "🤷🏻\u200d♂️": "1F937 1F3FB 200D 2642 FE0F",
            "🤷🏻\u200d♂": "1F937 1F3FB 200D 2642",
            "🤷🏼\u200d♂️": "1F937 1F3FC 200D 2642 FE0F",
            "🤷🏼\u200d♂": "1F937 1F3FC 200D 2642",
            "🤷🏽\u200d♂️": "1F937 1F3FD 200D 2642 FE0F",
            "🤷🏽\u200d♂": "1F937 1F3FD 200D 2642",
            "🤷🏾\u200d♂️": "1F937 1F3FE 200D 2642 FE0F",
            "🤷🏾\u200d♂": "1F937 1F3FE 200D 2642",
            "🤷🏿\u200d♂️": "1F937 1F3FF 200D 2642 FE0F",
            "🤷🏿\u200d♂": "1F937 1F3FF 200D 2642",
            "🤷\u200d♀️": "1F937 200D 2640 FE0F",
            "🤷\u200d♀": "1F937 200D 2640",
            "🤷🏻\u200d♀️": "1F937 1F3FB 200D 2640 FE0F",
            "🤷🏻\u200d♀": "1F937 1F3FB 200D 2640",
            "🤷🏼\u200d♀️": "1F937 1F3FC 200D 2640 FE0F",
            "🤷🏼\u200d♀": "1F937 1F3FC 200D 2640",
            "🤷🏽\u200d♀️": "1F937 1F3FD 200D 2640 FE0F",
            "🤷🏽\u200d♀": "1F937 1F3FD 200D 2640",
            "🤷🏾\u200d♀️": "1F937 1F3FE 200D 2640 FE0F",
            "🤷🏾\u200d♀": "1F937 1F3FE 200D 2640",
            "🤷🏿\u200d♀️": "1F937 1F3FF 200D 2640 FE0F",
            "🤷🏿\u200d♀": "1F937 1F3FF 200D 2640",
            "🧑\u200d⚕️": "1F9D1 200D 2695 FE0F",
            "🧑\u200d⚕": "1F9D1 200D 2695",
            "🧑🏻\u200d⚕️": "1F9D1 1F3FB 200D 2695 FE0F",
            "🧑🏻\u200d⚕": "1F9D1 1F3FB 200D 2695",
            "🧑🏼\u200d⚕️": "1F9D1 1F3FC 200D 2695 FE0F",
            "🧑🏼\u200d⚕": "1F9D1 1F3FC 200D 2695",
            "🧑🏽\u200d⚕️": "1F9D1 1F3FD 200D 2695 FE0F",
            "🧑🏽\u200d⚕": "1F9D1 1F3FD 200D 2695",
            "🧑🏾\u200d⚕️": "1F9D1 1F3FE 200D 2695 FE0F",
            "🧑🏾\u200d⚕": "1F9D1 1F3FE 200D 2695",
            "🧑🏿\u200d⚕️": "1F9D1 1F3FF 200D 2695 FE0F",
            "🧑🏿\u200d⚕": "1F9D1 1F3FF 200D 2695",
            "👨\u200d⚕️": "1F468 200D 2695 FE0F",
            "👨\u200d⚕": "1F468 200D 2695",
            "👨🏻\u200d⚕️": "1F468 1F3FB 200D 2695 FE0F",
            "👨🏻\u200d⚕": "1F468 1F3FB 200D 2695",
            "👨🏼\u200d⚕️": "1F468 1F3FC 200D 2695 FE0F",
            "👨🏼\u200d⚕": "1F468 1F3FC 200D 2695",
            "👨🏽\u200d⚕️": "1F468 1F3FD 200D 2695 FE0F",
            "👨🏽\u200d⚕": "1F468 1F3FD 200D 2695",
            "👨🏾\u200d⚕️": "1F468 1F3FE 200D 2695 FE0F",
            "👨🏾\u200d⚕": "1F468 1F3FE 200D 2695",
            "👨🏿\u200d⚕️": "1F468 1F3FF 200D 2695 FE0F",
            "👨🏿\u200d⚕": "1F468 1F3FF 200D 2695",
            "👩\u200d⚕️": "1F469 200D 2695 FE0F",
            "👩\u200d⚕": "1F469 200D 2695",
            "👩🏻\u200d⚕️": "1F469 1F3FB 200D 2695 FE0F",
            "👩🏻\u200d⚕": "1F469 1F3FB 200D 2695",
            "👩🏼\u200d⚕️": "1F469 1F3FC 200D 2695 FE0F",
            "👩🏼\u200d⚕": "1F469 1F3FC 200D 2695",
            "👩🏽\u200d⚕️": "1F469 1F3FD 200D 2695 FE0F",
            "👩🏽\u200d⚕": "1F469 1F3FD 200D 2695",
            "👩🏾\u200d⚕️": "1F469 1F3FE 200D 2695 FE0F",
            "👩🏾\u200d⚕": "1F469 1F3FE 200D 2695",
            "👩🏿\u200d⚕️": "1F469 1F3FF 200D 2695 FE0F",
            "👩🏿\u200d⚕": "1F469 1F3FF 200D 2695",
            "🧑\u200d🎓": "1F9D1 200D 1F393",
            "🧑🏻\u200d🎓": "1F9D1 1F3FB 200D 1F393",
            "🧑🏼\u200d🎓": "1F9D1 1F3FC 200D 1F393",
            "🧑🏽\u200d🎓": "1F9D1 1F3FD 200D 1F393",
            "🧑🏾\u200d🎓": "1F9D1 1F3FE 200D 1F393",
            "🧑🏿\u200d🎓": "1F9D1 1F3FF 200D 1F393",
            "👨\u200d🎓": "1F468 200D 1F393",
            "👨🏻\u200d🎓": "1F468 1F3FB 200D 1F393",
            "👨🏼\u200d🎓": "1F468 1F3FC 200D 1F393",
            "👨🏽\u200d🎓": "1F468 1F3FD 200D 1F393",
            "👨🏾\u200d🎓": "1F468 1F3FE 200D 1F393",
            "👨🏿\u200d🎓": "1F468 1F3FF 200D 1F393",
            "👩\u200d🎓": "1F469 200D 1F393",
            "👩🏻\u200d🎓": "1F469 1F3FB 200D 1F393",
            "👩🏼\u200d🎓": "1F469 1F3FC 200D 1F393",
            "👩🏽\u200d🎓": "1F469 1F3FD 200D 1F393",
            "👩🏾\u200d🎓": "1F469 1F3FE 200D 1F393",
            "👩🏿\u200d🎓": "1F469 1F3FF 200D 1F393",
            "🧑\u200d🏫": "1F9D1 200D 1F3EB",
            "🧑🏻\u200d🏫": "1F9D1 1F3FB 200D 1F3EB",
            "🧑🏼\u200d🏫": "1F9D1 1F3FC 200D 1F3EB",
            "🧑🏽\u200d🏫": "1F9D1 1F3FD 200D 1F3EB",
            "🧑🏾\u200d🏫": "1F9D1 1F3FE 200D 1F3EB",
            "🧑🏿\u200d🏫": "1F9D1 1F3FF 200D 1F3EB",
            "👨\u200d🏫": "1F468 200D 1F3EB",
            "👨🏻\u200d🏫": "1F468 1F3FB 200D 1F3EB",
            "👨🏼\u200d🏫": "1F468 1F3FC 200D 1F3EB",
            "👨🏽\u200d🏫": "1F468 1F3FD 200D 1F3EB",
            "👨🏾\u200d🏫": "1F468 1F3FE 200D 1F3EB",
            "👨🏿\u200d🏫": "1F468 1F3FF 200D 1F3EB",
            "👩\u200d🏫": "1F469 200D 1F3EB",
            "👩🏻\u200d🏫": "1F469 1F3FB 200D 1F3EB",
            "👩🏼\u200d🏫": "1F469 1F3FC 200D 1F3EB",
            "👩🏽\u200d🏫": "1F469 1F3FD 200D 1F3EB",
            "👩🏾\u200d🏫": "1F469 1F3FE 200D 1F3EB",
            "👩🏿\u200d🏫": "1F469 1F3FF 200D 1F3EB",
            "🧑\u200d⚖️": "1F9D1 200D 2696 FE0F",
            "🧑\u200d⚖": "1F9D1 200D 2696",
            "🧑🏻\u200d⚖️": "1F9D1 1F3FB 200D 2696 FE0F",
            "🧑🏻\u200d⚖": "1F9D1 1F3FB 200D 2696",
            "🧑🏼\u200d⚖️": "1F9D1 1F3FC 200D 2696 FE0F",
            "🧑🏼\u200d⚖": "1F9D1 1F3FC 200D 2696",
            "🧑🏽\u200d⚖️": "1F9D1 1F3FD 200D 2696 FE0F",
            "🧑🏽\u200d⚖": "1F9D1 1F3FD 200D 2696",
            "🧑🏾\u200d⚖️": "1F9D1 1F3FE 200D 2696 FE0F",
            "🧑🏾\u200d⚖": "1F9D1 1F3FE 200D 2696",
            "🧑🏿\u200d⚖️": "1F9D1 1F3FF 200D 2696 FE0F",
            "🧑🏿\u200d⚖": "1F9D1 1F3FF 200D 2696",
            "👨\u200d⚖️": "1F468 200D 2696 FE0F",
            "👨\u200d⚖": "1F468 200D 2696",
            "👨🏻\u200d⚖️": "1F468 1F3FB 200D 2696 FE0F",
            "👨🏻\u200d⚖": "1F468 1F3FB 200D 2696",
            "👨🏼\u200d⚖️": "1F468 1F3FC 200D 2696 FE0F",
            "👨🏼\u200d⚖": "1F468 1F3FC 200D 2696",
            "👨🏽\u200d⚖️": "1F468 1F3FD 200D 2696 FE0F",
            "👨🏽\u200d⚖": "1F468 1F3FD 200D 2696",
            "👨🏾\u200d⚖️": "1F468 1F3FE 200D 2696 FE0F",
            "👨🏾\u200d⚖": "1F468 1F3FE 200D 2696",
            "👨🏿\u200d⚖️": "1F468 1F3FF 200D 2696 FE0F",
            "👨🏿\u200d⚖": "1F468 1F3FF 200D 2696",
            "👩\u200d⚖️": "1F469 200D 2696 FE0F",
            "👩\u200d⚖": "1F469 200D 2696",
            "👩🏻\u200d⚖️": "1F469 1F3FB 200D 2696 FE0F",
            "👩🏻\u200d⚖": "1F469 1F3FB 200D 2696",
            "👩🏼\u200d⚖️": "1F469 1F3FC 200D 2696 FE0F",
            "👩🏼\u200d⚖": "1F469 1F3FC 200D 2696",
            "👩🏽\u200d⚖️": "1F469 1F3FD 200D 2696 FE0F",
            "👩🏽\u200d⚖": "1F469 1F3FD 200D 2696",
            "👩🏾\u200d⚖️": "1F469 1F3FE 200D 2696 FE0F",
            "👩🏾\u200d⚖": "1F469 1F3FE 200D 2696",
            "👩🏿\u200d⚖️": "1F469 1F3FF 200D 2696 FE0F",
            "👩🏿\u200d⚖": "1F469 1F3FF 200D 2696",
            "🧑\u200d🌾": "1F9D1 200D 1F33E",
            "🧑🏻\u200d🌾": "1F9D1 1F3FB 200D 1F33E",
            "🧑🏼\u200d🌾": "1F9D1 1F3FC 200D 1F33E",
            "🧑🏽\u200d🌾": "1F9D1 1F3FD 200D 1F33E",
            "🧑🏾\u200d🌾": "1F9D1 1F3FE 200D 1F33E",
            "🧑🏿\u200d🌾": "1F9D1 1F3FF 200D 1F33E",
            "👨\u200d🌾": "1F468 200D 1F33E",
            "👨🏻\u200d🌾": "1F468 1F3FB 200D 1F33E",
            "👨🏼\u200d🌾": "1F468 1F3FC 200D 1F33E",
            "👨🏽\u200d🌾": "1F468 1F3FD 200D 1F33E",
            "👨🏾\u200d🌾": "1F468 1F3FE 200D 1F33E",
            "👨🏿\u200d🌾": "1F468 1F3FF 200D 1F33E",
            "👩\u200d🌾": "1F469 200D 1F33E",
            "👩🏻\u200d🌾": "1F469 1F3FB 200D 1F33E",
            "👩🏼\u200d🌾": "1F469 1F3FC 200D 1F33E",
            "👩🏽\u200d🌾": "1F469 1F3FD 200D 1F33E",
            "👩🏾\u200d🌾": "1F469 1F3FE 200D 1F33E",
            "👩🏿\u200d🌾": "1F469 1F3FF 200D 1F33E",
            "🧑\u200d🍳": "1F9D1 200D 1F373",
            "🧑🏻\u200d🍳": "1F9D1 1F3FB 200D 1F373",
            "🧑🏼\u200d🍳": "1F9D1 1F3FC 200D 1F373",
            "🧑🏽\u200d🍳": "1F9D1 1F3FD 200D 1F373",
            "🧑🏾\u200d🍳": "1F9D1 1F3FE 200D 1F373",
            "🧑🏿\u200d🍳": "1F9D1 1F3FF 200D 1F373",
            "👨\u200d🍳": "1F468 200D 1F373",
            "👨🏻\u200d🍳": "1F468 1F3FB 200D 1F373",
            "👨🏼\u200d🍳": "1F468 1F3FC 200D 1F373",
            "👨🏽\u200d🍳": "1F468 1F3FD 200D 1F373",
            "👨🏾\u200d🍳": "1F468 1F3FE 200D 1F373",
            "👨🏿\u200d🍳": "1F468 1F3FF 200D 1F373",
            "👩\u200d🍳": "1F469 200D 1F373",
            "👩🏻\u200d🍳": "1F469 1F3FB 200D 1F373",
            "👩🏼\u200d🍳": "1F469 1F3FC 200D 1F373",
            "👩🏽\u200d🍳": "1F469 1F3FD 200D 1F373",
            "👩🏾\u200d🍳": "1F469 1F3FE 200D 1F373",
            "👩🏿\u200d🍳": "1F469 1F3FF 200D 1F373",
            "🧑\u200d🔧": "1F9D1 200D 1F527",
            "🧑🏻\u200d🔧": "1F9D1 1F3FB 200D 1F527",
            "🧑🏼\u200d🔧": "1F9D1 1F3FC 200D 1F527",
            "🧑🏽\u200d🔧": "1F9D1 1F3FD 200D 1F527",
            "🧑🏾\u200d🔧": "1F9D1 1F3FE 200D 1F527",
            "🧑🏿\u200d🔧": "1F9D1 1F3FF 200D 1F527",
            "👨\u200d🔧": "1F468 200D 1F527",
            "👨🏻\u200d🔧": "1F468 1F3FB 200D 1F527",
            "👨🏼\u200d🔧": "1F468 1F3FC 200D 1F527",
            "👨🏽\u200d🔧": "1F468 1F3FD 200D 1F527",
            "👨🏾\u200d🔧": "1F468 1F3FE 200D 1F527",
            "👨🏿\u200d🔧": "1F468 1F3FF 200D 1F527",
            "👩\u200d🔧": "1F469 200D 1F527",
            "👩🏻\u200d🔧": "1F469 1F3FB 200D 1F527",
            "👩🏼\u200d🔧": "1F469 1F3FC 200D 1F527",
            "👩🏽\u200d🔧": "1F469 1F3FD 200D 1F527",
            "👩🏾\u200d🔧": "1F469 1F3FE 200D 1F527",
            "👩🏿\u200d🔧": "1F469 1F3FF 200D 1F527",
            "🧑\u200d🏭": "1F9D1 200D 1F3ED",
            "🧑🏻\u200d🏭": "1F9D1 1F3FB 200D 1F3ED",
            "🧑🏼\u200d🏭": "1F9D1 1F3FC 200D 1F3ED",
            "🧑🏽\u200d🏭": "1F9D1 1F3FD 200D 1F3ED",
            "🧑🏾\u200d🏭": "1F9D1 1F3FE 200D 1F3ED",
            "🧑🏿\u200d🏭": "1F9D1 1F3FF 200D 1F3ED",
            "👨\u200d🏭": "1F468 200D 1F3ED",
            "👨🏻\u200d🏭": "1F468 1F3FB 200D 1F3ED",
            "👨🏼\u200d🏭": "1F468 1F3FC 200D 1F3ED",
            "👨🏽\u200d🏭": "1F468 1F3FD 200D 1F3ED",
            "👨🏾\u200d🏭": "1F468 1F3FE 200D 1F3ED",
            "👨🏿\u200d🏭": "1F468 1F3FF 200D 1F3ED",
            "👩\u200d🏭": "1F469 200D 1F3ED",
            "👩🏻\u200d🏭": "1F469 1F3FB 200D 1F3ED",
            "👩🏼\u200d🏭": "1F469 1F3FC 200D 1F3ED",
            "👩🏽\u200d🏭": "1F469 1F3FD 200D 1F3ED",
            "👩🏾\u200d🏭": "1F469 1F3FE 200D 1F3ED",
            "👩🏿\u200d🏭": "1F469 1F3FF 200D 1F3ED",
            "🧑\u200d💼": "1F9D1 200D 1F4BC",
            "🧑🏻\u200d💼": "1F9D1 1F3FB 200D 1F4BC",
            "🧑🏼\u200d💼": "1F9D1 1F3FC 200D 1F4BC",
            "🧑🏽\u200d💼": "1F9D1 1F3FD 200D 1F4BC",
            "🧑🏾\u200d💼": "1F9D1 1F3FE 200D 1F4BC",
            "🧑🏿\u200d💼": "1F9D1 1F3FF 200D 1F4BC",
            "👨\u200d💼": "1F468 200D 1F4BC",
            "👨🏻\u200d💼": "1F468 1F3FB 200D 1F4BC",
            "👨🏼\u200d💼": "1F468 1F3FC 200D 1F4BC",
            "👨🏽\u200d💼": "1F468 1F3FD 200D 1F4BC",
            "👨🏾\u200d💼": "1F468 1F3FE 200D 1F4BC",
            "👨🏿\u200d💼": "1F468 1F3FF 200D 1F4BC",
            "👩\u200d💼": "1F469 200D 1F4BC",
            "👩🏻\u200d💼": "1F469 1F3FB 200D 1F4BC",
            "👩🏼\u200d💼": "1F469 1F3FC 200D 1F4BC",
            "👩🏽\u200d💼": "1F469 1F3FD 200D 1F4BC",
            "👩🏾\u200d💼": "1F469 1F3FE 200D 1F4BC",
            "👩🏿\u200d💼": "1F469 1F3FF 200D 1F4BC",
            "🧑\u200d🔬": "1F9D1 200D 1F52C",
            "🧑🏻\u200d🔬": "1F9D1 1F3FB 200D 1F52C",
            "🧑🏼\u200d🔬": "1F9D1 1F3FC 200D 1F52C",
            "🧑🏽\u200d🔬": "1F9D1 1F3FD 200D 1F52C",
            "🧑🏾\u200d🔬": "1F9D1 1F3FE 200D 1F52C",
            "🧑🏿\u200d🔬": "1F9D1 1F3FF 200D 1F52C",
            "👨\u200d🔬": "1F468 200D 1F52C",
            "👨🏻\u200d🔬": "1F468 1F3FB 200D 1F52C",
            "👨🏼\u200d🔬": "1F468 1F3FC 200D 1F52C",
            "👨🏽\u200d🔬": "1F468 1F3FD 200D 1F52C",
            "👨🏾\u200d🔬": "1F468 1F3FE 200D 1F52C",
            "👨🏿\u200d🔬": "1F468 1F3FF 200D 1F52C",
            "👩\u200d🔬": "1F469 200D 1F52C",
            "👩🏻\u200d🔬": "1F469 1F3FB 200D 1F52C",
            "👩🏼\u200d🔬": "1F469 1F3FC 200D 1F52C",
            "👩🏽\u200d🔬": "1F469 1F3FD 200D 1F52C",
            "👩🏾\u200d🔬": "1F469 1F3FE 200D 1F52C",
            "👩🏿\u200d🔬": "1F469 1F3FF 200D 1F52C",
            "🧑\u200d💻": "1F9D1 200D 1F4BB",
            "🧑🏻\u200d💻": "1F9D1 1F3FB 200D 1F4BB",
            "🧑🏼\u200d💻": "1F9D1 1F3FC 200D 1F4BB",
            "🧑🏽\u200d💻": "1F9D1 1F3FD 200D 1F4BB",
            "🧑🏾\u200d💻": "1F9D1 1F3FE 200D 1F4BB",
            "🧑🏿\u200d💻": "1F9D1 1F3FF 200D 1F4BB",
            "👨\u200d💻": "1F468 200D 1F4BB",
            "👨🏻\u200d💻": "1F468 1F3FB 200D 1F4BB",
            "👨🏼\u200d💻": "1F468 1F3FC 200D 1F4BB",
            "👨🏽\u200d💻": "1F468 1F3FD 200D 1F4BB",
            "👨🏾\u200d💻": "1F468 1F3FE 200D 1F4BB",
            "👨🏿\u200d💻": "1F468 1F3FF 200D 1F4BB",
            "👩\u200d💻": "1F469 200D 1F4BB",
            "👩🏻\u200d💻": "1F469 1F3FB 200D 1F4BB",
            "👩🏼\u200d💻": "1F469 1F3FC 200D 1F4BB",
            "👩🏽\u200d💻": "1F469 1F3FD 200D 1F4BB",
            "👩🏾\u200d💻": "1F469 1F3FE 200D 1F4BB",
            "👩🏿\u200d💻": "1F469 1F3FF 200D 1F4BB",
            "🧑\u200d🎤": "1F9D1 200D 1F3A4",
            "🧑🏻\u200d🎤": "1F9D1 1F3FB 200D 1F3A4",
            "🧑🏼\u200d🎤": "1F9D1 1F3FC 200D 1F3A4",
            "🧑🏽\u200d🎤": "1F9D1 1F3FD 200D 1F3A4",
            "🧑🏾\u200d🎤": "1F9D1 1F3FE 200D 1F3A4",
            "🧑🏿\u200d🎤": "1F9D1 1F3FF 200D 1F3A4",
            "👨\u200d🎤": "1F468 200D 1F3A4",
            "👨🏻\u200d🎤": "1F468 1F3FB 200D 1F3A4",
            "👨🏼\u200d🎤": "1F468 1F3FC 200D 1F3A4",
            "👨🏽\u200d🎤": "1F468 1F3FD 200D 1F3A4",
            "👨🏾\u200d🎤": "1F468 1F3FE 200D 1F3A4",
            "👨🏿\u200d🎤": "1F468 1F3FF 200D 1F3A4",
            "👩\u200d🎤": "1F469 200D 1F3A4",
            "👩🏻\u200d🎤": "1F469 1F3FB 200D 1F3A4",
            "👩🏼\u200d🎤": "1F469 1F3FC 200D 1F3A4",
            "👩🏽\u200d🎤": "1F469 1F3FD 200D 1F3A4",
            "👩🏾\u200d🎤": "1F469 1F3FE 200D 1F3A4",
            "👩🏿\u200d🎤": "1F469 1F3FF 200D 1F3A4",
            "🧑\u200d🎨": "1F9D1 200D 1F3A8",
            "🧑🏻\u200d🎨": "1F9D1 1F3FB 200D 1F3A8",
            "🧑🏼\u200d🎨": "1F9D1 1F3FC 200D 1F3A8",
            "🧑🏽\u200d🎨": "1F9D1 1F3FD 200D 1F3A8",
            "🧑🏾\u200d🎨": "1F9D1 1F3FE 200D 1F3A8",
            "🧑🏿\u200d🎨": "1F9D1 1F3FF 200D 1F3A8",
            "👨\u200d🎨": "1F468 200D 1F3A8",
            "👨🏻\u200d🎨": "1F468 1F3FB 200D 1F3A8",
            "👨🏼\u200d🎨": "1F468 1F3FC 200D 1F3A8",
            "👨🏽\u200d🎨": "1F468 1F3FD 200D 1F3A8",
            "👨🏾\u200d🎨": "1F468 1F3FE 200D 1F3A8",
            "👨🏿\u200d🎨": "1F468 1F3FF 200D 1F3A8",
            "👩\u200d🎨": "1F469 200D 1F3A8",
            "👩🏻\u200d🎨": "1F469 1F3FB 200D 1F3A8",
            "👩🏼\u200d🎨": "1F469 1F3FC 200D 1F3A8",
            "👩🏽\u200d🎨": "1F469 1F3FD 200D 1F3A8",
            "👩🏾\u200d🎨": "1F469 1F3FE 200D 1F3A8",
            "👩🏿\u200d🎨": "1F469 1F3FF 200D 1F3A8",
            "🧑\u200d✈️": "1F9D1 200D 2708 FE0F",
            "🧑\u200d✈": "1F9D1 200D 2708",
            "🧑🏻\u200d✈️": "1F9D1 1F3FB 200D 2708 FE0F",
            "🧑🏻\u200d✈": "1F9D1 1F3FB 200D 2708",
            "🧑🏼\u200d✈️": "1F9D1 1F3FC 200D 2708 FE0F",
            "🧑🏼\u200d✈": "1F9D1 1F3FC 200D 2708",
            "🧑🏽\u200d✈️": "1F9D1 1F3FD 200D 2708 FE0F",
            "🧑🏽\u200d✈": "1F9D1 1F3FD 200D 2708",
            "🧑🏾\u200d✈️": "1F9D1 1F3FE 200D 2708 FE0F",
            "🧑🏾\u200d✈": "1F9D1 1F3FE 200D 2708",
            "🧑🏿\u200d✈️": "1F9D1 1F3FF 200D 2708 FE0F",
            "🧑🏿\u200d✈": "1F9D1 1F3FF 200D 2708",
            "👨\u200d✈️": "1F468 200D 2708 FE0F",
            "👨\u200d✈": "1F468 200D 2708",
            "👨🏻\u200d✈️": "1F468 1F3FB 200D 2708 FE0F",
            "👨🏻\u200d✈": "1F468 1F3FB 200D 2708",
            "👨🏼\u200d✈️": "1F468 1F3FC 200D 2708 FE0F",
            "👨🏼\u200d✈": "1F468 1F3FC 200D 2708",
            "👨🏽\u200d✈️": "1F468 1F3FD 200D 2708 FE0F",
            "👨🏽\u200d✈": "1F468 1F3FD 200D 2708",
            "👨🏾\u200d✈️": "1F468 1F3FE 200D 2708 FE0F",
            "👨🏾\u200d✈": "1F468 1F3FE 200D 2708",
            "👨🏿\u200d✈️": "1F468 1F3FF 200D 2708 FE0F",
            "👨🏿\u200d✈": "1F468 1F3FF 200D 2708",
            "👩\u200d✈️": "1F469 200D 2708 FE0F",
            "👩\u200d✈": "1F469 200D 2708",
            "👩🏻\u200d✈️": "1F469 1F3FB 200D 2708 FE0F",
            "👩🏻\u200d✈": "1F469 1F3FB 200D 2708",
            "👩🏼\u200d✈️": "1F469 1F3FC 200D 2708 FE0F",
            "👩🏼\u200d✈": "1F469 1F3FC 200D 2708",
            "👩🏽\u200d✈️": "1F469 1F3FD 200D 2708 FE0F",
            "👩🏽\u200d✈": "1F469 1F3FD 200D 2708",
            "👩🏾\u200d✈️": "1F469 1F3FE 200D 2708 FE0F",
            "👩🏾\u200d✈": "1F469 1F3FE 200D 2708",
            "👩🏿\u200d✈️": "1F469 1F3FF 200D 2708 FE0F",
            "👩🏿\u200d✈": "1F469 1F3FF 200D 2708",
            "🧑\u200d🚀": "1F9D1 200D 1F680",
            "🧑🏻\u200d🚀": "1F9D1 1F3FB 200D 1F680",
            "🧑🏼\u200d🚀": "1F9D1 1F3FC 200D 1F680",
            "🧑🏽\u200d🚀": "1F9D1 1F3FD 200D 1F680",
            "🧑🏾\u200d🚀": "1F9D1 1F3FE 200D 1F680",
            "🧑🏿\u200d🚀": "1F9D1 1F3FF 200D 1F680",
            "👨\u200d🚀": "1F468 200D 1F680",
            "👨🏻\u200d🚀": "1F468 1F3FB 200D 1F680",
            "👨🏼\u200d🚀": "1F468 1F3FC 200D 1F680",
            "👨🏽\u200d🚀": "1F468 1F3FD 200D 1F680",
            "👨🏾\u200d🚀": "1F468 1F3FE 200D 1F680",
            "👨🏿\u200d🚀": "1F468 1F3FF 200D 1F680",
            "👩\u200d🚀": "1F469 200D 1F680",
            "👩🏻\u200d🚀": "1F469 1F3FB 200D 1F680",
            "👩🏼\u200d🚀": "1F469 1F3FC 200D 1F680",
            "👩🏽\u200d🚀": "1F469 1F3FD 200D 1F680",
            "👩🏾\u200d🚀": "1F469 1F3FE 200D 1F680",
            "👩🏿\u200d🚀": "1F469 1F3FF 200D 1F680",
            "🧑\u200d🚒": "1F9D1 200D 1F692",
            "🧑🏻\u200d🚒": "1F9D1 1F3FB 200D 1F692",
            "🧑🏼\u200d🚒": "1F9D1 1F3FC 200D 1F692",
            "🧑🏽\u200d🚒": "1F9D1 1F3FD 200D 1F692",
            "🧑🏾\u200d🚒": "1F9D1 1F3FE 200D 1F692",
            "🧑🏿\u200d🚒": "1F9D1 1F3FF 200D 1F692",
            "👨\u200d🚒": "1F468 200D 1F692",
            "👨🏻\u200d🚒": "1F468 1F3FB 200D 1F692",
            "👨🏼\u200d🚒": "1F468 1F3FC 200D 1F692",
            "👨🏽\u200d🚒": "1F468 1F3FD 200D 1F692",
            "👨🏾\u200d🚒": "1F468 1F3FE 200D 1F692",
            "👨🏿\u200d🚒": "1F468 1F3FF 200D 1F692",
            "👩\u200d🚒": "1F469 200D 1F692",
            "👩🏻\u200d🚒": "1F469 1F3FB 200D 1F692",
            "👩🏼\u200d🚒": "1F469 1F3FC 200D 1F692",
            "👩🏽\u200d🚒": "1F469 1F3FD 200D 1F692",
            "👩🏾\u200d🚒": "1F469 1F3FE 200D 1F692",
            "👩🏿\u200d🚒": "1F469 1F3FF 200D 1F692",
            "👮": "1F46E",
            "👮🏻": "1F46E 1F3FB",
            "👮🏼": "1F46E 1F3FC",
            "👮🏽": "1F46E 1F3FD",
            "👮🏾": "1F46E 1F3FE",
            "👮🏿": "1F46E 1F3FF",
            "👮\u200d♂️": "1F46E 200D 2642 FE0F",
            "👮\u200d♂": "1F46E 200D 2642",
            "👮🏻\u200d♂️": "1F46E 1F3FB 200D 2642 FE0F",
            "👮🏻\u200d♂": "1F46E 1F3FB 200D 2642",
            "👮🏼\u200d♂️": "1F46E 1F3FC 200D 2642 FE0F",
            "👮🏼\u200d♂": "1F46E 1F3FC 200D 2642",
            "👮🏽\u200d♂️": "1F46E 1F3FD 200D 2642 FE0F",
            "👮🏽\u200d♂": "1F46E 1F3FD 200D 2642",
            "👮🏾\u200d♂️": "1F46E 1F3FE 200D 2642 FE0F",
            "👮🏾\u200d♂": "1F46E 1F3FE 200D 2642",
            "👮🏿\u200d♂️": "1F46E 1F3FF 200D 2642 FE0F",
            "👮🏿\u200d♂": "1F46E 1F3FF 200D 2642",
            "👮\u200d♀️": "1F46E 200D 2640 FE0F",
            "👮\u200d♀": "1F46E 200D 2640",
            "👮🏻\u200d♀️": "1F46E 1F3FB 200D 2640 FE0F",
            "👮🏻\u200d♀": "1F46E 1F3FB 200D 2640",
            "👮🏼\u200d♀️": "1F46E 1F3FC 200D 2640 FE0F",
            "👮🏼\u200d♀": "1F46E 1F3FC 200D 2640",
            "👮🏽\u200d♀️": "1F46E 1F3FD 200D 2640 FE0F",
            "👮🏽\u200d♀": "1F46E 1F3FD 200D 2640",
            "👮🏾\u200d♀️": "1F46E 1F3FE 200D 2640 FE0F",
            "👮🏾\u200d♀": "1F46E 1F3FE 200D 2640",
            "👮🏿\u200d♀️": "1F46E 1F3FF 200D 2640 FE0F",
            "👮🏿\u200d♀": "1F46E 1F3FF 200D 2640",
            "🕵️": "1F575 FE0F",
            "🕵": "1F575",
            "🕵🏻": "1F575 1F3FB",
            "🕵🏼": "1F575 1F3FC",
            "🕵🏽": "1F575 1F3FD",
            "🕵🏾": "1F575 1F3FE",
            "🕵🏿": "1F575 1F3FF",
            "🕵️\u200d♂️": "1F575 FE0F 200D 2642 FE0F",
            "🕵\u200d♂️": "1F575 200D 2642 FE0F",
            "🕵️\u200d♂": "1F575 FE0F 200D 2642",
            "🕵\u200d♂": "1F575 200D 2642",
            "🕵🏻\u200d♂️": "1F575 1F3FB 200D 2642 FE0F",
            "🕵🏻\u200d♂": "1F575 1F3FB 200D 2642",
            "🕵🏼\u200d♂️": "1F575 1F3FC 200D 2642 FE0F",
            "🕵🏼\u200d♂": "1F575 1F3FC 200D 2642",
            "🕵🏽\u200d♂️": "1F575 1F3FD 200D 2642 FE0F",
            "🕵🏽\u200d♂": "1F575 1F3FD 200D 2642",
            "🕵🏾\u200d♂️": "1F575 1F3FE 200D 2642 FE0F",
            "🕵🏾\u200d♂": "1F575 1F3FE 200D 2642",
            "🕵🏿\u200d♂️": "1F575 1F3FF 200D 2642 FE0F",
            "🕵🏿\u200d♂": "1F575 1F3FF 200D 2642",
            "🕵️\u200d♀️": "1F575 FE0F 200D 2640 FE0F",
            "🕵\u200d♀️": "1F575 200D 2640 FE0F",
            "🕵️\u200d♀": "1F575 FE0F 200D 2640",
            "🕵\u200d♀": "1F575 200D 2640",
            "🕵🏻\u200d♀️": "1F575 1F3FB 200D 2640 FE0F",
            "🕵🏻\u200d♀": "1F575 1F3FB 200D 2640",
            "🕵🏼\u200d♀️": "1F575 1F3FC 200D 2640 FE0F",
            "🕵🏼\u200d♀": "1F575 1F3FC 200D 2640",
            "🕵🏽\u200d♀️": "1F575 1F3FD 200D 2640 FE0F",
            "🕵🏽\u200d♀": "1F575 1F3FD 200D 2640",
            "🕵🏾\u200d♀️": "1F575 1F3FE 200D 2640 FE0F",
            "🕵🏾\u200d♀": "1F575 1F3FE 200D 2640",
            "🕵🏿\u200d♀️": "1F575 1F3FF 200D 2640 FE0F",
            "🕵🏿\u200d♀": "1F575 1F3FF 200D 2640",
            "💂": "1F482",
            "💂🏻": "1F482 1F3FB",
            "💂🏼": "1F482 1F3FC",
            "💂🏽": "1F482 1F3FD",
            "💂🏾": "1F482 1F3FE",
            "💂🏿": "1F482 1F3FF",
            "💂\u200d♂️": "1F482 200D 2642 FE0F",
            "💂\u200d♂": "1F482 200D 2642",
            "💂🏻\u200d♂️": "1F482 1F3FB 200D 2642 FE0F",
            "💂🏻\u200d♂": "1F482 1F3FB 200D 2642",
            "💂🏼\u200d♂️": "1F482 1F3FC 200D 2642 FE0F",
            "💂🏼\u200d♂": "1F482 1F3FC 200D 2642",
            "💂🏽\u200d♂️": "1F482 1F3FD 200D 2642 FE0F",
            "💂🏽\u200d♂": "1F482 1F3FD 200D 2642",
            "💂🏾\u200d♂️": "1F482 1F3FE 200D 2642 FE0F",
            "💂🏾\u200d♂": "1F482 1F3FE 200D 2642",
            "💂🏿\u200d♂️": "1F482 1F3FF 200D 2642 FE0F",
            "💂🏿\u200d♂": "1F482 1F3FF 200D 2642",
            "💂\u200d♀️": "1F482 200D 2640 FE0F",
            "💂\u200d♀": "1F482 200D 2640",
            "💂🏻\u200d♀️": "1F482 1F3FB 200D 2640 FE0F",
            "💂🏻\u200d♀": "1F482 1F3FB 200D 2640",
            "💂🏼\u200d♀️": "1F482 1F3FC 200D 2640 FE0F",
            "💂🏼\u200d♀": "1F482 1F3FC 200D 2640",
            "💂🏽\u200d♀️": "1F482 1F3FD 200D 2640 FE0F",
            "💂🏽\u200d♀": "1F482 1F3FD 200D 2640",
            "💂🏾\u200d♀️": "1F482 1F3FE 200D 2640 FE0F",
            "💂🏾\u200d♀": "1F482 1F3FE 200D 2640",
            "💂🏿\u200d♀️": "1F482 1F3FF 200D 2640 FE0F",
            "💂🏿\u200d♀": "1F482 1F3FF 200D 2640",
            "🥷": "1F977",
            "🥷🏻": "1F977 1F3FB",
            "🥷🏼": "1F977 1F3FC",
            "🥷🏽": "1F977 1F3FD",
            "🥷🏾": "1F977 1F3FE",
            "🥷🏿": "1F977 1F3FF",
            "👷": "1F477",
            "👷🏻": "1F477 1F3FB",
            "👷🏼": "1F477 1F3FC",
            "👷🏽": "1F477 1F3FD",
            "👷🏾": "1F477 1F3FE",
            "👷🏿": "1F477 1F3FF",
            "👷\u200d♂️": "1F477 200D 2642 FE0F",
            "👷\u200d♂": "1F477 200D 2642",
            "👷🏻\u200d♂️": "1F477 1F3FB 200D 2642 FE0F",
            "👷🏻\u200d♂": "1F477 1F3FB 200D 2642",
            "👷🏼\u200d♂️": "1F477 1F3FC 200D 2642 FE0F",
            "👷🏼\u200d♂": "1F477 1F3FC 200D 2642",
            "👷🏽\u200d♂️": "1F477 1F3FD 200D 2642 FE0F",
            "👷🏽\u200d♂": "1F477 1F3FD 200D 2642",
            "👷🏾\u200d♂️": "1F477 1F3FE 200D 2642 FE0F",
            "👷🏾\u200d♂": "1F477 1F3FE 200D 2642",
            "👷🏿\u200d♂️": "1F477 1F3FF 200D 2642 FE0F",
            "👷🏿\u200d♂": "1F477 1F3FF 200D 2642",
            "👷\u200d♀️": "1F477 200D 2640 FE0F",
            "👷\u200d♀": "1F477 200D 2640",
            "👷🏻\u200d♀️": "1F477 1F3FB 200D 2640 FE0F",
            "👷🏻\u200d♀": "1F477 1F3FB 200D 2640",
            "👷🏼\u200d♀️": "1F477 1F3FC 200D 2640 FE0F",
            "👷🏼\u200d♀": "1F477 1F3FC 200D 2640",
            "👷🏽\u200d♀️": "1F477 1F3FD 200D 2640 FE0F",
            "👷🏽\u200d♀": "1F477 1F3FD 200D 2640",
            "👷🏾\u200d♀️": "1F477 1F3FE 200D 2640 FE0F",
            "👷🏾\u200d♀": "1F477 1F3FE 200D 2640",
            "👷🏿\u200d♀️": "1F477 1F3FF 200D 2640 FE0F",
            "👷🏿\u200d♀": "1F477 1F3FF 200D 2640",
            U0001fac5: "1FAC5",
            "U0001fac5🏻": "1FAC5 1F3FB",
            "U0001fac5🏼": "1FAC5 1F3FC",
            "U0001fac5🏽": "1FAC5 1F3FD",
            "U0001fac5🏾": "1FAC5 1F3FE",
            "U0001fac5🏿": "1FAC5 1F3FF",
            "🤴": "1F934",
            "🤴🏻": "1F934 1F3FB",
            "🤴🏼": "1F934 1F3FC",
            "🤴🏽": "1F934 1F3FD",
            "🤴🏾": "1F934 1F3FE",
            "🤴🏿": "1F934 1F3FF",
            "👸": "1F478",
            "👸🏻": "1F478 1F3FB",
            "👸🏼": "1F478 1F3FC",
            "👸🏽": "1F478 1F3FD",
            "👸🏾": "1F478 1F3FE",
            "👸🏿": "1F478 1F3FF",
            "👳": "1F473",
            "👳🏻": "1F473 1F3FB",
            "👳🏼": "1F473 1F3FC",
            "👳🏽": "1F473 1F3FD",
            "👳🏾": "1F473 1F3FE",
            "👳🏿": "1F473 1F3FF",
            "👳\u200d♂️": "1F473 200D 2642 FE0F",
            "👳\u200d♂": "1F473 200D 2642",
            "👳🏻\u200d♂️": "1F473 1F3FB 200D 2642 FE0F",
            "👳🏻\u200d♂": "1F473 1F3FB 200D 2642",
            "👳🏼\u200d♂️": "1F473 1F3FC 200D 2642 FE0F",
            "👳🏼\u200d♂": "1F473 1F3FC 200D 2642",
            "👳🏽\u200d♂️": "1F473 1F3FD 200D 2642 FE0F",
            "👳🏽\u200d♂": "1F473 1F3FD 200D 2642",
            "👳🏾\u200d♂️": "1F473 1F3FE 200D 2642 FE0F",
            "👳🏾\u200d♂": "1F473 1F3FE 200D 2642",
            "👳🏿\u200d♂️": "1F473 1F3FF 200D 2642 FE0F",
            "👳🏿\u200d♂": "1F473 1F3FF 200D 2642",
            "👳\u200d♀️": "1F473 200D 2640 FE0F",
            "👳\u200d♀": "1F473 200D 2640",
            "👳🏻\u200d♀️": "1F473 1F3FB 200D 2640 FE0F",
            "👳🏻\u200d♀": "1F473 1F3FB 200D 2640",
            "👳🏼\u200d♀️": "1F473 1F3FC 200D 2640 FE0F",
            "👳🏼\u200d♀": "1F473 1F3FC 200D 2640",
            "👳🏽\u200d♀️": "1F473 1F3FD 200D 2640 FE0F",
            "👳🏽\u200d♀": "1F473 1F3FD 200D 2640",
            "👳🏾\u200d♀️": "1F473 1F3FE 200D 2640 FE0F",
            "👳🏾\u200d♀": "1F473 1F3FE 200D 2640",
            "👳🏿\u200d♀️": "1F473 1F3FF 200D 2640 FE0F",
            "👳🏿\u200d♀": "1F473 1F3FF 200D 2640",
            "👲": "1F472",
            "👲🏻": "1F472 1F3FB",
            "👲🏼": "1F472 1F3FC",
            "👲🏽": "1F472 1F3FD",
            "👲🏾": "1F472 1F3FE",
            "👲🏿": "1F472 1F3FF",
            "🧕": "1F9D5",
            "🧕🏻": "1F9D5 1F3FB",
            "🧕🏼": "1F9D5 1F3FC",
            "🧕🏽": "1F9D5 1F3FD",
            "🧕🏾": "1F9D5 1F3FE",
            "🧕🏿": "1F9D5 1F3FF",
            "🤵": "1F935",
            "🤵🏻": "1F935 1F3FB",
            "🤵🏼": "1F935 1F3FC",
            "🤵🏽": "1F935 1F3FD",
            "🤵🏾": "1F935 1F3FE",
            "🤵🏿": "1F935 1F3FF",
            "🤵\u200d♂️": "1F935 200D 2642 FE0F",
            "🤵\u200d♂": "1F935 200D 2642",
            "🤵🏻\u200d♂️": "1F935 1F3FB 200D 2642 FE0F",
            "🤵🏻\u200d♂": "1F935 1F3FB 200D 2642",
            "🤵🏼\u200d♂️": "1F935 1F3FC 200D 2642 FE0F",
            "🤵🏼\u200d♂": "1F935 1F3FC 200D 2642",
            "🤵🏽\u200d♂️": "1F935 1F3FD 200D 2642 FE0F",
            "🤵🏽\u200d♂": "1F935 1F3FD 200D 2642",
            "🤵🏾\u200d♂️": "1F935 1F3FE 200D 2642 FE0F",
            "🤵🏾\u200d♂": "1F935 1F3FE 200D 2642",
            "🤵🏿\u200d♂️": "1F935 1F3FF 200D 2642 FE0F",
            "🤵🏿\u200d♂": "1F935 1F3FF 200D 2642",
            "🤵\u200d♀️": "1F935 200D 2640 FE0F",
            "🤵\u200d♀": "1F935 200D 2640",
            "🤵🏻\u200d♀️": "1F935 1F3FB 200D 2640 FE0F",
            "🤵🏻\u200d♀": "1F935 1F3FB 200D 2640",
            "🤵🏼\u200d♀️": "1F935 1F3FC 200D 2640 FE0F",
            "🤵🏼\u200d♀": "1F935 1F3FC 200D 2640",
            "🤵🏽\u200d♀️": "1F935 1F3FD 200D 2640 FE0F",
            "🤵🏽\u200d♀": "1F935 1F3FD 200D 2640",
            "🤵🏾\u200d♀️": "1F935 1F3FE 200D 2640 FE0F",
            "🤵🏾\u200d♀": "1F935 1F3FE 200D 2640",
            "🤵🏿\u200d♀️": "1F935 1F3FF 200D 2640 FE0F",
            "🤵🏿\u200d♀": "1F935 1F3FF 200D 2640",
            "👰": "1F470",
            "👰🏻": "1F470 1F3FB",
            "👰🏼": "1F470 1F3FC",
            "👰🏽": "1F470 1F3FD",
            "👰🏾": "1F470 1F3FE",
            "👰🏿": "1F470 1F3FF",
            "👰\u200d♂️": "1F470 200D 2642 FE0F",
            "👰\u200d♂": "1F470 200D 2642",
            "👰🏻\u200d♂️": "1F470 1F3FB 200D 2642 FE0F",
            "👰🏻\u200d♂": "1F470 1F3FB 200D 2642",
            "👰🏼\u200d♂️": "1F470 1F3FC 200D 2642 FE0F",
            "👰🏼\u200d♂": "1F470 1F3FC 200D 2642",
            "👰🏽\u200d♂️": "1F470 1F3FD 200D 2642 FE0F",
            "👰🏽\u200d♂": "1F470 1F3FD 200D 2642",
            "👰🏾\u200d♂️": "1F470 1F3FE 200D 2642 FE0F",
            "👰🏾\u200d♂": "1F470 1F3FE 200D 2642",
            "👰🏿\u200d♂️": "1F470 1F3FF 200D 2642 FE0F",
            "👰🏿\u200d♂": "1F470 1F3FF 200D 2642",
            "👰\u200d♀️": "1F470 200D 2640 FE0F",
            "👰\u200d♀": "1F470 200D 2640",
            "👰🏻\u200d♀️": "1F470 1F3FB 200D 2640 FE0F",
            "👰🏻\u200d♀": "1F470 1F3FB 200D 2640",
            "👰🏼\u200d♀️": "1F470 1F3FC 200D 2640 FE0F",
            "👰🏼\u200d♀": "1F470 1F3FC 200D 2640",
            "👰🏽\u200d♀️": "1F470 1F3FD 200D 2640 FE0F",
            "👰🏽\u200d♀": "1F470 1F3FD 200D 2640",
            "👰🏾\u200d♀️": "1F470 1F3FE 200D 2640 FE0F",
            "👰🏾\u200d♀": "1F470 1F3FE 200D 2640",
            "👰🏿\u200d♀️": "1F470 1F3FF 200D 2640 FE0F",
            "👰🏿\u200d♀": "1F470 1F3FF 200D 2640",
            "🤰": "1F930",
            "🤰🏻": "1F930 1F3FB",
            "🤰🏼": "1F930 1F3FC",
            "🤰🏽": "1F930 1F3FD",
            "🤰🏾": "1F930 1F3FE",
            "🤰🏿": "1F930 1F3FF",
            U0001fac3: "1FAC3",
            "U0001fac3🏻": "1FAC3 1F3FB",
            "U0001fac3🏼": "1FAC3 1F3FC",
            "U0001fac3🏽": "1FAC3 1F3FD",
            "U0001fac3🏾": "1FAC3 1F3FE",
            "U0001fac3🏿": "1FAC3 1F3FF",
            U0001fac4: "1FAC4",
            "U0001fac4🏻": "1FAC4 1F3FB",
            "U0001fac4🏼": "1FAC4 1F3FC",
            "U0001fac4🏽": "1FAC4 1F3FD",
            "U0001fac4🏾": "1FAC4 1F3FE",
            "U0001fac4🏿": "1FAC4 1F3FF",
            "🤱": "1F931",
            "🤱🏻": "1F931 1F3FB",
            "🤱🏼": "1F931 1F3FC",
            "🤱🏽": "1F931 1F3FD",
            "🤱🏾": "1F931 1F3FE",
            "🤱🏿": "1F931 1F3FF",
            "👩\u200d🍼": "1F469 200D 1F37C",
            "👩🏻\u200d🍼": "1F469 1F3FB 200D 1F37C",
            "👩🏼\u200d🍼": "1F469 1F3FC 200D 1F37C",
            "👩🏽\u200d🍼": "1F469 1F3FD 200D 1F37C",
            "👩🏾\u200d🍼": "1F469 1F3FE 200D 1F37C",
            "👩🏿\u200d🍼": "1F469 1F3FF 200D 1F37C",
            "👨\u200d🍼": "1F468 200D 1F37C",
            "👨🏻\u200d🍼": "1F468 1F3FB 200D 1F37C",
            "👨🏼\u200d🍼": "1F468 1F3FC 200D 1F37C",
            "👨🏽\u200d🍼": "1F468 1F3FD 200D 1F37C",
            "👨🏾\u200d🍼": "1F468 1F3FE 200D 1F37C",
            "👨🏿\u200d🍼": "1F468 1F3FF 200D 1F37C",
            "🧑\u200d🍼": "1F9D1 200D 1F37C",
            "🧑🏻\u200d🍼": "1F9D1 1F3FB 200D 1F37C",
            "🧑🏼\u200d🍼": "1F9D1 1F3FC 200D 1F37C",
            "🧑🏽\u200d🍼": "1F9D1 1F3FD 200D 1F37C",
            "🧑🏾\u200d🍼": "1F9D1 1F3FE 200D 1F37C",
            "🧑🏿\u200d🍼": "1F9D1 1F3FF 200D 1F37C",
            "👼": "1F47C",
            "👼🏻": "1F47C 1F3FB",
            "👼🏼": "1F47C 1F3FC",
            "👼🏽": "1F47C 1F3FD",
            "👼🏾": "1F47C 1F3FE",
            "👼🏿": "1F47C 1F3FF",
            "🎅": "1F385",
            "🎅🏻": "1F385 1F3FB",
            "🎅🏼": "1F385 1F3FC",
            "🎅🏽": "1F385 1F3FD",
            "🎅🏾": "1F385 1F3FE",
            "🎅🏿": "1F385 1F3FF",
            "🤶": "1F936",
            "🤶🏻": "1F936 1F3FB",
            "🤶🏼": "1F936 1F3FC",
            "🤶🏽": "1F936 1F3FD",
            "🤶🏾": "1F936 1F3FE",
            "🤶🏿": "1F936 1F3FF",
            "🧑\u200d🎄": "1F9D1 200D 1F384",
            "🧑🏻\u200d🎄": "1F9D1 1F3FB 200D 1F384",
            "🧑🏼\u200d🎄": "1F9D1 1F3FC 200D 1F384",
            "🧑🏽\u200d🎄": "1F9D1 1F3FD 200D 1F384",
            "🧑🏾\u200d🎄": "1F9D1 1F3FE 200D 1F384",
            "🧑🏿\u200d🎄": "1F9D1 1F3FF 200D 1F384",
            "🦸": "1F9B8",
            "🦸🏻": "1F9B8 1F3FB",
            "🦸🏼": "1F9B8 1F3FC",
            "🦸🏽": "1F9B8 1F3FD",
            "🦸🏾": "1F9B8 1F3FE",
            "🦸🏿": "1F9B8 1F3FF",
            "🦸\u200d♂️": "1F9B8 200D 2642 FE0F",
            "🦸\u200d♂": "1F9B8 200D 2642",
            "🦸🏻\u200d♂️": "1F9B8 1F3FB 200D 2642 FE0F",
            "🦸🏻\u200d♂": "1F9B8 1F3FB 200D 2642",
            "🦸🏼\u200d♂️": "1F9B8 1F3FC 200D 2642 FE0F",
            "🦸🏼\u200d♂": "1F9B8 1F3FC 200D 2642",
            "🦸🏽\u200d♂️": "1F9B8 1F3FD 200D 2642 FE0F",
            "🦸🏽\u200d♂": "1F9B8 1F3FD 200D 2642",
            "🦸🏾\u200d♂️": "1F9B8 1F3FE 200D 2642 FE0F",
            "🦸🏾\u200d♂": "1F9B8 1F3FE 200D 2642",
            "🦸🏿\u200d♂️": "1F9B8 1F3FF 200D 2642 FE0F",
            "🦸🏿\u200d♂": "1F9B8 1F3FF 200D 2642",
            "🦸\u200d♀️": "1F9B8 200D 2640 FE0F",
            "🦸\u200d♀": "1F9B8 200D 2640",
            "🦸🏻\u200d♀️": "1F9B8 1F3FB 200D 2640 FE0F",
            "🦸🏻\u200d♀": "1F9B8 1F3FB 200D 2640",
            "🦸🏼\u200d♀️": "1F9B8 1F3FC 200D 2640 FE0F",
            "🦸🏼\u200d♀": "1F9B8 1F3FC 200D 2640",
            "🦸🏽\u200d♀️": "1F9B8 1F3FD 200D 2640 FE0F",
            "🦸🏽\u200d♀": "1F9B8 1F3FD 200D 2640",
            "🦸🏾\u200d♀️": "1F9B8 1F3FE 200D 2640 FE0F",
            "🦸🏾\u200d♀": "1F9B8 1F3FE 200D 2640",
            "🦸🏿\u200d♀️": "1F9B8 1F3FF 200D 2640 FE0F",
            "🦸🏿\u200d♀": "1F9B8 1F3FF 200D 2640",
            "🦹": "1F9B9",
            "🦹🏻": "1F9B9 1F3FB",
            "🦹🏼": "1F9B9 1F3FC",
            "🦹🏽": "1F9B9 1F3FD",
            "🦹🏾": "1F9B9 1F3FE",
            "🦹🏿": "1F9B9 1F3FF",
            "🦹\u200d♂️": "1F9B9 200D 2642 FE0F",
            "🦹\u200d♂": "1F9B9 200D 2642",
            "🦹🏻\u200d♂️": "1F9B9 1F3FB 200D 2642 FE0F",
            "🦹🏻\u200d♂": "1F9B9 1F3FB 200D 2642",
            "🦹🏼\u200d♂️": "1F9B9 1F3FC 200D 2642 FE0F",
            "🦹🏼\u200d♂": "1F9B9 1F3FC 200D 2642",
            "🦹🏽\u200d♂️": "1F9B9 1F3FD 200D 2642 FE0F",
            "🦹🏽\u200d♂": "1F9B9 1F3FD 200D 2642",
            "🦹🏾\u200d♂️": "1F9B9 1F3FE 200D 2642 FE0F",
            "🦹🏾\u200d♂": "1F9B9 1F3FE 200D 2642",
            "🦹🏿\u200d♂️": "1F9B9 1F3FF 200D 2642 FE0F",
            "🦹🏿\u200d♂": "1F9B9 1F3FF 200D 2642",
            "🦹\u200d♀️": "1F9B9 200D 2640 FE0F",
            "🦹\u200d♀": "1F9B9 200D 2640",
            "🦹🏻\u200d♀️": "1F9B9 1F3FB 200D 2640 FE0F",
            "🦹🏻\u200d♀": "1F9B9 1F3FB 200D 2640",
            "🦹🏼\u200d♀️": "1F9B9 1F3FC 200D 2640 FE0F",
            "🦹🏼\u200d♀": "1F9B9 1F3FC 200D 2640",
            "🦹🏽\u200d♀️": "1F9B9 1F3FD 200D 2640 FE0F",
            "🦹🏽\u200d♀": "1F9B9 1F3FD 200D 2640",
            "🦹🏾\u200d♀️": "1F9B9 1F3FE 200D 2640 FE0F",
            "🦹🏾\u200d♀": "1F9B9 1F3FE 200D 2640",
            "🦹🏿\u200d♀️": "1F9B9 1F3FF 200D 2640 FE0F",
            "🦹🏿\u200d♀": "1F9B9 1F3FF 200D 2640",
            "🧙": "1F9D9",
            "🧙🏻": "1F9D9 1F3FB",
            "🧙🏼": "1F9D9 1F3FC",
            "🧙🏽": "1F9D9 1F3FD",
            "🧙🏾": "1F9D9 1F3FE",
            "🧙🏿": "1F9D9 1F3FF",
            "🧙\u200d♂️": "1F9D9 200D 2642 FE0F",
            "🧙\u200d♂": "1F9D9 200D 2642",
            "🧙🏻\u200d♂️": "1F9D9 1F3FB 200D 2642 FE0F",
            "🧙🏻\u200d♂": "1F9D9 1F3FB 200D 2642",
            "🧙🏼\u200d♂️": "1F9D9 1F3FC 200D 2642 FE0F",
            "🧙🏼\u200d♂": "1F9D9 1F3FC 200D 2642",
            "🧙🏽\u200d♂️": "1F9D9 1F3FD 200D 2642 FE0F",
            "🧙🏽\u200d♂": "1F9D9 1F3FD 200D 2642",
            "🧙🏾\u200d♂️": "1F9D9 1F3FE 200D 2642 FE0F",
            "🧙🏾\u200d♂": "1F9D9 1F3FE 200D 2642",
            "🧙🏿\u200d♂️": "1F9D9 1F3FF 200D 2642 FE0F",
            "🧙🏿\u200d♂": "1F9D9 1F3FF 200D 2642",
            "🧙\u200d♀️": "1F9D9 200D 2640 FE0F",
            "🧙\u200d♀": "1F9D9 200D 2640",
            "🧙🏻\u200d♀️": "1F9D9 1F3FB 200D 2640 FE0F",
            "🧙🏻\u200d♀": "1F9D9 1F3FB 200D 2640",
            "🧙🏼\u200d♀️": "1F9D9 1F3FC 200D 2640 FE0F",
            "🧙🏼\u200d♀": "1F9D9 1F3FC 200D 2640",
            "🧙🏽\u200d♀️": "1F9D9 1F3FD 200D 2640 FE0F",
            "🧙🏽\u200d♀": "1F9D9 1F3FD 200D 2640",
            "🧙🏾\u200d♀️": "1F9D9 1F3FE 200D 2640 FE0F",
            "🧙🏾\u200d♀": "1F9D9 1F3FE 200D 2640",
            "🧙🏿\u200d♀️": "1F9D9 1F3FF 200D 2640 FE0F",
            "🧙🏿\u200d♀": "1F9D9 1F3FF 200D 2640",
            "🧚": "1F9DA",
            "🧚🏻": "1F9DA 1F3FB",
            "🧚🏼": "1F9DA 1F3FC",
            "🧚🏽": "1F9DA 1F3FD",
            "🧚🏾": "1F9DA 1F3FE",
            "🧚🏿": "1F9DA 1F3FF",
            "🧚\u200d♂️": "1F9DA 200D 2642 FE0F",
            "🧚\u200d♂": "1F9DA 200D 2642",
            "🧚🏻\u200d♂️": "1F9DA 1F3FB 200D 2642 FE0F",
            "🧚🏻\u200d♂": "1F9DA 1F3FB 200D 2642",
            "🧚🏼\u200d♂️": "1F9DA 1F3FC 200D 2642 FE0F",
            "🧚🏼\u200d♂": "1F9DA 1F3FC 200D 2642",
            "🧚🏽\u200d♂️": "1F9DA 1F3FD 200D 2642 FE0F",
            "🧚🏽\u200d♂": "1F9DA 1F3FD 200D 2642",
            "🧚🏾\u200d♂️": "1F9DA 1F3FE 200D 2642 FE0F",
            "🧚🏾\u200d♂": "1F9DA 1F3FE 200D 2642",
            "🧚🏿\u200d♂️": "1F9DA 1F3FF 200D 2642 FE0F",
            "🧚🏿\u200d♂": "1F9DA 1F3FF 200D 2642",
            "🧚\u200d♀️": "1F9DA 200D 2640 FE0F",
            "🧚\u200d♀": "1F9DA 200D 2640",
            "🧚🏻\u200d♀️": "1F9DA 1F3FB 200D 2640 FE0F",
            "🧚🏻\u200d♀": "1F9DA 1F3FB 200D 2640",
            "🧚🏼\u200d♀️": "1F9DA 1F3FC 200D 2640 FE0F",
            "🧚🏼\u200d♀": "1F9DA 1F3FC 200D 2640",
            "🧚🏽\u200d♀️": "1F9DA 1F3FD 200D 2640 FE0F",
            "🧚🏽\u200d♀": "1F9DA 1F3FD 200D 2640",
            "🧚🏾\u200d♀️": "1F9DA 1F3FE 200D 2640 FE0F",
            "🧚🏾\u200d♀": "1F9DA 1F3FE 200D 2640",
            "🧚🏿\u200d♀️": "1F9DA 1F3FF 200D 2640 FE0F",
            "🧚🏿\u200d♀": "1F9DA 1F3FF 200D 2640",
            "🧛": "1F9DB",
            "🧛🏻": "1F9DB 1F3FB",
            "🧛🏼": "1F9DB 1F3FC",
            "🧛🏽": "1F9DB 1F3FD",
            "🧛🏾": "1F9DB 1F3FE",
            "🧛🏿": "1F9DB 1F3FF",
            "🧛\u200d♂️": "1F9DB 200D 2642 FE0F",
            "🧛\u200d♂": "1F9DB 200D 2642",
            "🧛🏻\u200d♂️": "1F9DB 1F3FB 200D 2642 FE0F",
            "🧛🏻\u200d♂": "1F9DB 1F3FB 200D 2642",
            "🧛🏼\u200d♂️": "1F9DB 1F3FC 200D 2642 FE0F",
            "🧛🏼\u200d♂": "1F9DB 1F3FC 200D 2642",
            "🧛🏽\u200d♂️": "1F9DB 1F3FD 200D 2642 FE0F",
            "🧛🏽\u200d♂": "1F9DB 1F3FD 200D 2642",
            "🧛🏾\u200d♂️": "1F9DB 1F3FE 200D 2642 FE0F",
            "🧛🏾\u200d♂": "1F9DB 1F3FE 200D 2642",
            "🧛🏿\u200d♂️": "1F9DB 1F3FF 200D 2642 FE0F",
            "🧛🏿\u200d♂": "1F9DB 1F3FF 200D 2642",
            "🧛\u200d♀️": "1F9DB 200D 2640 FE0F",
            "🧛\u200d♀": "1F9DB 200D 2640",
            "🧛🏻\u200d♀️": "1F9DB 1F3FB 200D 2640 FE0F",
            "🧛🏻\u200d♀": "1F9DB 1F3FB 200D 2640",
            "🧛🏼\u200d♀️": "1F9DB 1F3FC 200D 2640 FE0F",
            "🧛🏼\u200d♀": "1F9DB 1F3FC 200D 2640",
            "🧛🏽\u200d♀️": "1F9DB 1F3FD 200D 2640 FE0F",
            "🧛🏽\u200d♀": "1F9DB 1F3FD 200D 2640",
            "🧛🏾\u200d♀️": "1F9DB 1F3FE 200D 2640 FE0F",
            "🧛🏾\u200d♀": "1F9DB 1F3FE 200D 2640",
            "🧛🏿\u200d♀️": "1F9DB 1F3FF 200D 2640 FE0F",
            "🧛🏿\u200d♀": "1F9DB 1F3FF 200D 2640",
            "🧜": "1F9DC",
            "🧜🏻": "1F9DC 1F3FB",
            "🧜🏼": "1F9DC 1F3FC",
            "🧜🏽": "1F9DC 1F3FD",
            "🧜🏾": "1F9DC 1F3FE",
            "🧜🏿": "1F9DC 1F3FF",
            "🧜\u200d♂️": "1F9DC 200D 2642 FE0F",
            "🧜\u200d♂": "1F9DC 200D 2642",
            "🧜🏻\u200d♂️": "1F9DC 1F3FB 200D 2642 FE0F",
            "🧜🏻\u200d♂": "1F9DC 1F3FB 200D 2642",
            "🧜🏼\u200d♂️": "1F9DC 1F3FC 200D 2642 FE0F",
            "🧜🏼\u200d♂": "1F9DC 1F3FC 200D 2642",
            "🧜🏽\u200d♂️": "1F9DC 1F3FD 200D 2642 FE0F",
            "🧜🏽\u200d♂": "1F9DC 1F3FD 200D 2642",
            "🧜🏾\u200d♂️": "1F9DC 1F3FE 200D 2642 FE0F",
            "🧜🏾\u200d♂": "1F9DC 1F3FE 200D 2642",
            "🧜🏿\u200d♂️": "1F9DC 1F3FF 200D 2642 FE0F",
            "🧜🏿\u200d♂": "1F9DC 1F3FF 200D 2642",
            "🧜\u200d♀️": "1F9DC 200D 2640 FE0F",
            "🧜\u200d♀": "1F9DC 200D 2640",
            "🧜🏻\u200d♀️": "1F9DC 1F3FB 200D 2640 FE0F",
            "🧜🏻\u200d♀": "1F9DC 1F3FB 200D 2640",
            "🧜🏼\u200d♀️": "1F9DC 1F3FC 200D 2640 FE0F",
            "🧜🏼\u200d♀": "1F9DC 1F3FC 200D 2640",
            "🧜🏽\u200d♀️": "1F9DC 1F3FD 200D 2640 FE0F",
            "🧜🏽\u200d♀": "1F9DC 1F3FD 200D 2640",
            "🧜🏾\u200d♀️": "1F9DC 1F3FE 200D 2640 FE0F",
            "🧜🏾\u200d♀": "1F9DC 1F3FE 200D 2640",
            "🧜🏿\u200d♀️": "1F9DC 1F3FF 200D 2640 FE0F",
            "🧜🏿\u200d♀": "1F9DC 1F3FF 200D 2640",
            "🧝": "1F9DD",
            "🧝🏻": "1F9DD 1F3FB",
            "🧝🏼": "1F9DD 1F3FC",
            "🧝🏽": "1F9DD 1F3FD",
            "🧝🏾": "1F9DD 1F3FE",
            "🧝🏿": "1F9DD 1F3FF",
            "🧝\u200d♂️": "1F9DD 200D 2642 FE0F",
            "🧝\u200d♂": "1F9DD 200D 2642",
            "🧝🏻\u200d♂️": "1F9DD 1F3FB 200D 2642 FE0F",
            "🧝🏻\u200d♂": "1F9DD 1F3FB 200D 2642",
            "🧝🏼\u200d♂️": "1F9DD 1F3FC 200D 2642 FE0F",
            "🧝🏼\u200d♂": "1F9DD 1F3FC 200D 2642",
            "🧝🏽\u200d♂️": "1F9DD 1F3FD 200D 2642 FE0F",
            "🧝🏽\u200d♂": "1F9DD 1F3FD 200D 2642",
            "🧝🏾\u200d♂️": "1F9DD 1F3FE 200D 2642 FE0F",
            "🧝🏾\u200d♂": "1F9DD 1F3FE 200D 2642",
            "🧝🏿\u200d♂️": "1F9DD 1F3FF 200D 2642 FE0F",
            "🧝🏿\u200d♂": "1F9DD 1F3FF 200D 2642",
            "🧝\u200d♀️": "1F9DD 200D 2640 FE0F",
            "🧝\u200d♀": "1F9DD 200D 2640",
            "🧝🏻\u200d♀️": "1F9DD 1F3FB 200D 2640 FE0F",
            "🧝🏻\u200d♀": "1F9DD 1F3FB 200D 2640",
            "🧝🏼\u200d♀️": "1F9DD 1F3FC 200D 2640 FE0F",
            "🧝🏼\u200d♀": "1F9DD 1F3FC 200D 2640",
            "🧝🏽\u200d♀️": "1F9DD 1F3FD 200D 2640 FE0F",
            "🧝🏽\u200d♀": "1F9DD 1F3FD 200D 2640",
            "🧝🏾\u200d♀️": "1F9DD 1F3FE 200D 2640 FE0F",
            "🧝🏾\u200d♀": "1F9DD 1F3FE 200D 2640",
            "🧝🏿\u200d♀️": "1F9DD 1F3FF 200D 2640 FE0F",
            "🧝🏿\u200d♀": "1F9DD 1F3FF 200D 2640",
            "🧞": "1F9DE",
            "🧞\u200d♂️": "1F9DE 200D 2642 FE0F",
            "🧞\u200d♂": "1F9DE 200D 2642",
            "🧞\u200d♀️": "1F9DE 200D 2640 FE0F",
            "🧞\u200d♀": "1F9DE 200D 2640",
            "🧟": "1F9DF",
            "🧟\u200d♂️": "1F9DF 200D 2642 FE0F",
            "🧟\u200d♂": "1F9DF 200D 2642",
            "🧟\u200d♀️": "1F9DF 200D 2640 FE0F",
            "🧟\u200d♀": "1F9DF 200D 2640",
            U0001f9cc: "1F9CC",
            "💆": "1F486",
            "💆🏻": "1F486 1F3FB",
            "💆🏼": "1F486 1F3FC",
            "💆🏽": "1F486 1F3FD",
            "💆🏾": "1F486 1F3FE",
            "💆🏿": "1F486 1F3FF",
            "💆\u200d♂️": "1F486 200D 2642 FE0F",
            "💆\u200d♂": "1F486 200D 2642",
            "💆🏻\u200d♂️": "1F486 1F3FB 200D 2642 FE0F",
            "💆🏻\u200d♂": "1F486 1F3FB 200D 2642",
            "💆🏼\u200d♂️": "1F486 1F3FC 200D 2642 FE0F",
            "💆🏼\u200d♂": "1F486 1F3FC 200D 2642",
            "💆🏽\u200d♂️": "1F486 1F3FD 200D 2642 FE0F",
            "💆🏽\u200d♂": "1F486 1F3FD 200D 2642",
            "💆🏾\u200d♂️": "1F486 1F3FE 200D 2642 FE0F",
            "💆🏾\u200d♂": "1F486 1F3FE 200D 2642",
            "💆🏿\u200d♂️": "1F486 1F3FF 200D 2642 FE0F",
            "💆🏿\u200d♂": "1F486 1F3FF 200D 2642",
            "💆\u200d♀️": "1F486 200D 2640 FE0F",
            "💆\u200d♀": "1F486 200D 2640",
            "💆🏻\u200d♀️": "1F486 1F3FB 200D 2640 FE0F",
            "💆🏻\u200d♀": "1F486 1F3FB 200D 2640",
            "💆🏼\u200d♀️": "1F486 1F3FC 200D 2640 FE0F",
            "💆🏼\u200d♀": "1F486 1F3FC 200D 2640",
            "💆🏽\u200d♀️": "1F486 1F3FD 200D 2640 FE0F",
            "💆🏽\u200d♀": "1F486 1F3FD 200D 2640",
            "💆🏾\u200d♀️": "1F486 1F3FE 200D 2640 FE0F",
            "💆🏾\u200d♀": "1F486 1F3FE 200D 2640",
            "💆🏿\u200d♀️": "1F486 1F3FF 200D 2640 FE0F",
            "💆🏿\u200d♀": "1F486 1F3FF 200D 2640",
            "💇": "1F487",
            "💇🏻": "1F487 1F3FB",
            "💇🏼": "1F487 1F3FC",
            "💇🏽": "1F487 1F3FD",
            "💇🏾": "1F487 1F3FE",
            "💇🏿": "1F487 1F3FF",
            "💇\u200d♂️": "1F487 200D 2642 FE0F",
            "💇\u200d♂": "1F487 200D 2642",
            "💇🏻\u200d♂️": "1F487 1F3FB 200D 2642 FE0F",
            "💇🏻\u200d♂": "1F487 1F3FB 200D 2642",
            "💇🏼\u200d♂️": "1F487 1F3FC 200D 2642 FE0F",
            "💇🏼\u200d♂": "1F487 1F3FC 200D 2642",
            "💇🏽\u200d♂️": "1F487 1F3FD 200D 2642 FE0F",
            "💇🏽\u200d♂": "1F487 1F3FD 200D 2642",
            "💇🏾\u200d♂️": "1F487 1F3FE 200D 2642 FE0F",
            "💇🏾\u200d♂": "1F487 1F3FE 200D 2642",
            "💇🏿\u200d♂️": "1F487 1F3FF 200D 2642 FE0F",
            "💇🏿\u200d♂": "1F487 1F3FF 200D 2642",
            "💇\u200d♀️": "1F487 200D 2640 FE0F",
            "💇\u200d♀": "1F487 200D 2640",
            "💇🏻\u200d♀️": "1F487 1F3FB 200D 2640 FE0F",
            "💇🏻\u200d♀": "1F487 1F3FB 200D 2640",
            "💇🏼\u200d♀️": "1F487 1F3FC 200D 2640 FE0F",
            "💇🏼\u200d♀": "1F487 1F3FC 200D 2640",
            "💇🏽\u200d♀️": "1F487 1F3FD 200D 2640 FE0F",
            "💇🏽\u200d♀": "1F487 1F3FD 200D 2640",
            "💇🏾\u200d♀️": "1F487 1F3FE 200D 2640 FE0F",
            "💇🏾\u200d♀": "1F487 1F3FE 200D 2640",
            "💇🏿\u200d♀️": "1F487 1F3FF 200D 2640 FE0F",
            "💇🏿\u200d♀": "1F487 1F3FF 200D 2640",
            "🚶": "1F6B6",
            "🚶🏻": "1F6B6 1F3FB",
            "🚶🏼": "1F6B6 1F3FC",
            "🚶🏽": "1F6B6 1F3FD",
            "🚶🏾": "1F6B6 1F3FE",
            "🚶🏿": "1F6B6 1F3FF",
            "🚶\u200d♂️": "1F6B6 200D 2642 FE0F",
            "🚶\u200d♂": "1F6B6 200D 2642",
            "🚶🏻\u200d♂️": "1F6B6 1F3FB 200D 2642 FE0F",
            "🚶🏻\u200d♂": "1F6B6 1F3FB 200D 2642",
            "🚶🏼\u200d♂️": "1F6B6 1F3FC 200D 2642 FE0F",
            "🚶🏼\u200d♂": "1F6B6 1F3FC 200D 2642",
            "🚶🏽\u200d♂️": "1F6B6 1F3FD 200D 2642 FE0F",
            "🚶🏽\u200d♂": "1F6B6 1F3FD 200D 2642",
            "🚶🏾\u200d♂️": "1F6B6 1F3FE 200D 2642 FE0F",
            "🚶🏾\u200d♂": "1F6B6 1F3FE 200D 2642",
            "🚶🏿\u200d♂️": "1F6B6 1F3FF 200D 2642 FE0F",
            "🚶🏿\u200d♂": "1F6B6 1F3FF 200D 2642",
            "🚶\u200d♀️": "1F6B6 200D 2640 FE0F",
            "🚶\u200d♀": "1F6B6 200D 2640",
            "🚶🏻\u200d♀️": "1F6B6 1F3FB 200D 2640 FE0F",
            "🚶🏻\u200d♀": "1F6B6 1F3FB 200D 2640",
            "🚶🏼\u200d♀️": "1F6B6 1F3FC 200D 2640 FE0F",
            "🚶🏼\u200d♀": "1F6B6 1F3FC 200D 2640",
            "🚶🏽\u200d♀️": "1F6B6 1F3FD 200D 2640 FE0F",
            "🚶🏽\u200d♀": "1F6B6 1F3FD 200D 2640",
            "🚶🏾\u200d♀️": "1F6B6 1F3FE 200D 2640 FE0F",
            "🚶🏾\u200d♀": "1F6B6 1F3FE 200D 2640",
            "🚶🏿\u200d♀️": "1F6B6 1F3FF 200D 2640 FE0F",
            "🚶🏿\u200d♀": "1F6B6 1F3FF 200D 2640",
            "🚶\u200d➡️": "1F6B6 200D 27A1 FE0F",
            "🚶\u200d➡": "1F6B6 200D 27A1",
            "🚶🏻\u200d➡️": "1F6B6 1F3FB 200D 27A1 FE0F",
            "🚶🏻\u200d➡": "1F6B6 1F3FB 200D 27A1",
            "🚶🏼\u200d➡️": "1F6B6 1F3FC 200D 27A1 FE0F",
            "🚶🏼\u200d➡": "1F6B6 1F3FC 200D 27A1",
            "🚶🏽\u200d➡️": "1F6B6 1F3FD 200D 27A1 FE0F",
            "🚶🏽\u200d➡": "1F6B6 1F3FD 200D 27A1",
            "🚶🏾\u200d➡️": "1F6B6 1F3FE 200D 27A1 FE0F",
            "🚶🏾\u200d➡": "1F6B6 1F3FE 200D 27A1",
            "🚶🏿\u200d➡️": "1F6B6 1F3FF 200D 27A1 FE0F",
            "🚶🏿\u200d➡": "1F6B6 1F3FF 200D 27A1",
            "🚶\u200d♀️\u200d➡️": "1F6B6 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶\u200d♀\u200d➡️": "1F6B6 200D 2640 200D 27A1 FE0F",
            "🚶\u200d♀️\u200d➡": "1F6B6 200D 2640 FE0F 200D 27A1",
            "🚶\u200d♀\u200d➡": "1F6B6 200D 2640 200D 27A1",
            "🚶🏻\u200d♀️\u200d➡️": "1F6B6 1F3FB 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶🏻\u200d♀\u200d➡️": "1F6B6 1F3FB 200D 2640 200D 27A1 FE0F",
            "🚶🏻\u200d♀️\u200d➡": "1F6B6 1F3FB 200D 2640 FE0F 200D 27A1",
            "🚶🏻\u200d♀\u200d➡": "1F6B6 1F3FB 200D 2640 200D 27A1",
            "🚶🏼\u200d♀️\u200d➡️": "1F6B6 1F3FC 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶🏼\u200d♀\u200d➡️": "1F6B6 1F3FC 200D 2640 200D 27A1 FE0F",
            "🚶🏼\u200d♀️\u200d➡": "1F6B6 1F3FC 200D 2640 FE0F 200D 27A1",
            "🚶🏼\u200d♀\u200d➡": "1F6B6 1F3FC 200D 2640 200D 27A1",
            "🚶🏽\u200d♀️\u200d➡️": "1F6B6 1F3FD 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶🏽\u200d♀\u200d➡️": "1F6B6 1F3FD 200D 2640 200D 27A1 FE0F",
            "🚶🏽\u200d♀️\u200d➡": "1F6B6 1F3FD 200D 2640 FE0F 200D 27A1",
            "🚶🏽\u200d♀\u200d➡": "1F6B6 1F3FD 200D 2640 200D 27A1",
            "🚶🏾\u200d♀️\u200d➡️": "1F6B6 1F3FE 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶🏾\u200d♀\u200d➡️": "1F6B6 1F3FE 200D 2640 200D 27A1 FE0F",
            "🚶🏾\u200d♀️\u200d➡": "1F6B6 1F3FE 200D 2640 FE0F 200D 27A1",
            "🚶🏾\u200d♀\u200d➡": "1F6B6 1F3FE 200D 2640 200D 27A1",
            "🚶🏿\u200d♀️\u200d➡️": "1F6B6 1F3FF 200D 2640 FE0F 200D 27A1 FE0F",
            "🚶🏿\u200d♀\u200d➡️": "1F6B6 1F3FF 200D 2640 200D 27A1 FE0F",
            "🚶🏿\u200d♀️\u200d➡": "1F6B6 1F3FF 200D 2640 FE0F 200D 27A1",
            "🚶🏿\u200d♀\u200d➡": "1F6B6 1F3FF 200D 2640 200D 27A1",
            "🚶\u200d♂️\u200d➡️": "1F6B6 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶\u200d♂\u200d➡️": "1F6B6 200D 2642 200D 27A1 FE0F",
            "🚶\u200d♂️\u200d➡": "1F6B6 200D 2642 FE0F 200D 27A1",
            "🚶\u200d♂\u200d➡": "1F6B6 200D 2642 200D 27A1",
            "🚶🏻\u200d♂️\u200d➡️": "1F6B6 1F3FB 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶🏻\u200d♂\u200d➡️": "1F6B6 1F3FB 200D 2642 200D 27A1 FE0F",
            "🚶🏻\u200d♂️\u200d➡": "1F6B6 1F3FB 200D 2642 FE0F 200D 27A1",
            "🚶🏻\u200d♂\u200d➡": "1F6B6 1F3FB 200D 2642 200D 27A1",
            "🚶🏼\u200d♂️\u200d➡️": "1F6B6 1F3FC 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶🏼\u200d♂\u200d➡️": "1F6B6 1F3FC 200D 2642 200D 27A1 FE0F",
            "🚶🏼\u200d♂️\u200d➡": "1F6B6 1F3FC 200D 2642 FE0F 200D 27A1",
            "🚶🏼\u200d♂\u200d➡": "1F6B6 1F3FC 200D 2642 200D 27A1",
            "🚶🏽\u200d♂️\u200d➡️": "1F6B6 1F3FD 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶🏽\u200d♂\u200d➡️": "1F6B6 1F3FD 200D 2642 200D 27A1 FE0F",
            "🚶🏽\u200d♂️\u200d➡": "1F6B6 1F3FD 200D 2642 FE0F 200D 27A1",
            "🚶🏽\u200d♂\u200d➡": "1F6B6 1F3FD 200D 2642 200D 27A1",
            "🚶🏾\u200d♂️\u200d➡️": "1F6B6 1F3FE 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶🏾\u200d♂\u200d➡️": "1F6B6 1F3FE 200D 2642 200D 27A1 FE0F",
            "🚶🏾\u200d♂️\u200d➡": "1F6B6 1F3FE 200D 2642 FE0F 200D 27A1",
            "🚶🏾\u200d♂\u200d➡": "1F6B6 1F3FE 200D 2642 200D 27A1",
            "🚶🏿\u200d♂️\u200d➡️": "1F6B6 1F3FF 200D 2642 FE0F 200D 27A1 FE0F",
            "🚶🏿\u200d♂\u200d➡️": "1F6B6 1F3FF 200D 2642 200D 27A1 FE0F",
            "🚶🏿\u200d♂️\u200d➡": "1F6B6 1F3FF 200D 2642 FE0F 200D 27A1",
            "🚶🏿\u200d♂\u200d➡": "1F6B6 1F3FF 200D 2642 200D 27A1",
            "🧍": "1F9CD",
            "🧍🏻": "1F9CD 1F3FB",
            "🧍🏼": "1F9CD 1F3FC",
            "🧍🏽": "1F9CD 1F3FD",
            "🧍🏾": "1F9CD 1F3FE",
            "🧍🏿": "1F9CD 1F3FF",
            "🧍\u200d♂️": "1F9CD 200D 2642 FE0F",
            "🧍\u200d♂": "1F9CD 200D 2642",
            "🧍🏻\u200d♂️": "1F9CD 1F3FB 200D 2642 FE0F",
            "🧍🏻\u200d♂": "1F9CD 1F3FB 200D 2642",
            "🧍🏼\u200d♂️": "1F9CD 1F3FC 200D 2642 FE0F",
            "🧍🏼\u200d♂": "1F9CD 1F3FC 200D 2642",
            "🧍🏽\u200d♂️": "1F9CD 1F3FD 200D 2642 FE0F",
            "🧍🏽\u200d♂": "1F9CD 1F3FD 200D 2642",
            "🧍🏾\u200d♂️": "1F9CD 1F3FE 200D 2642 FE0F",
            "🧍🏾\u200d♂": "1F9CD 1F3FE 200D 2642",
            "🧍🏿\u200d♂️": "1F9CD 1F3FF 200D 2642 FE0F",
            "🧍🏿\u200d♂": "1F9CD 1F3FF 200D 2642",
            "🧍\u200d♀️": "1F9CD 200D 2640 FE0F",
            "🧍\u200d♀": "1F9CD 200D 2640",
            "🧍🏻\u200d♀️": "1F9CD 1F3FB 200D 2640 FE0F",
            "🧍🏻\u200d♀": "1F9CD 1F3FB 200D 2640",
            "🧍🏼\u200d♀️": "1F9CD 1F3FC 200D 2640 FE0F",
            "🧍🏼\u200d♀": "1F9CD 1F3FC 200D 2640",
            "🧍🏽\u200d♀️": "1F9CD 1F3FD 200D 2640 FE0F",
            "🧍🏽\u200d♀": "1F9CD 1F3FD 200D 2640",
            "🧍🏾\u200d♀️": "1F9CD 1F3FE 200D 2640 FE0F",
            "🧍🏾\u200d♀": "1F9CD 1F3FE 200D 2640",
            "🧍🏿\u200d♀️": "1F9CD 1F3FF 200D 2640 FE0F",
            "🧍🏿\u200d♀": "1F9CD 1F3FF 200D 2640",
            "🧎": "1F9CE",
            "🧎🏻": "1F9CE 1F3FB",
            "🧎🏼": "1F9CE 1F3FC",
            "🧎🏽": "1F9CE 1F3FD",
            "🧎🏾": "1F9CE 1F3FE",
            "🧎🏿": "1F9CE 1F3FF",
            "🧎\u200d♂️": "1F9CE 200D 2642 FE0F",
            "🧎\u200d♂": "1F9CE 200D 2642",
            "🧎🏻\u200d♂️": "1F9CE 1F3FB 200D 2642 FE0F",
            "🧎🏻\u200d♂": "1F9CE 1F3FB 200D 2642",
            "🧎🏼\u200d♂️": "1F9CE 1F3FC 200D 2642 FE0F",
            "🧎🏼\u200d♂": "1F9CE 1F3FC 200D 2642",
            "🧎🏽\u200d♂️": "1F9CE 1F3FD 200D 2642 FE0F",
            "🧎🏽\u200d♂": "1F9CE 1F3FD 200D 2642",
            "🧎🏾\u200d♂️": "1F9CE 1F3FE 200D 2642 FE0F",
            "🧎🏾\u200d♂": "1F9CE 1F3FE 200D 2642",
            "🧎🏿\u200d♂️": "1F9CE 1F3FF 200D 2642 FE0F",
            "🧎🏿\u200d♂": "1F9CE 1F3FF 200D 2642",
            "🧎\u200d♀️": "1F9CE 200D 2640 FE0F",
            "🧎\u200d♀": "1F9CE 200D 2640",
            "🧎🏻\u200d♀️": "1F9CE 1F3FB 200D 2640 FE0F",
            "🧎🏻\u200d♀": "1F9CE 1F3FB 200D 2640",
            "🧎🏼\u200d♀️": "1F9CE 1F3FC 200D 2640 FE0F",
            "🧎🏼\u200d♀": "1F9CE 1F3FC 200D 2640",
            "🧎🏽\u200d♀️": "1F9CE 1F3FD 200D 2640 FE0F",
            "🧎🏽\u200d♀": "1F9CE 1F3FD 200D 2640",
            "🧎🏾\u200d♀️": "1F9CE 1F3FE 200D 2640 FE0F",
            "🧎🏾\u200d♀": "1F9CE 1F3FE 200D 2640",
            "🧎🏿\u200d♀️": "1F9CE 1F3FF 200D 2640 FE0F",
            "🧎🏿\u200d♀": "1F9CE 1F3FF 200D 2640",
            "🧎\u200d➡️": "1F9CE 200D 27A1 FE0F",
            "🧎\u200d➡": "1F9CE 200D 27A1",
            "🧎🏻\u200d➡️": "1F9CE 1F3FB 200D 27A1 FE0F",
            "🧎🏻\u200d➡": "1F9CE 1F3FB 200D 27A1",
            "🧎🏼\u200d➡️": "1F9CE 1F3FC 200D 27A1 FE0F",
            "🧎🏼\u200d➡": "1F9CE 1F3FC 200D 27A1",
            "🧎🏽\u200d➡️": "1F9CE 1F3FD 200D 27A1 FE0F",
            "🧎🏽\u200d➡": "1F9CE 1F3FD 200D 27A1",
            "🧎🏾\u200d➡️": "1F9CE 1F3FE 200D 27A1 FE0F",
            "🧎🏾\u200d➡": "1F9CE 1F3FE 200D 27A1",
            "🧎🏿\u200d➡️": "1F9CE 1F3FF 200D 27A1 FE0F",
            "🧎🏿\u200d➡": "1F9CE 1F3FF 200D 27A1",
            "🧎\u200d♀️\u200d➡️": "1F9CE 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎\u200d♀\u200d➡️": "1F9CE 200D 2640 200D 27A1 FE0F",
            "🧎\u200d♀️\u200d➡": "1F9CE 200D 2640 FE0F 200D 27A1",
            "🧎\u200d♀\u200d➡": "1F9CE 200D 2640 200D 27A1",
            "🧎🏻\u200d♀️\u200d➡️": "1F9CE 1F3FB 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎🏻\u200d♀\u200d➡️": "1F9CE 1F3FB 200D 2640 200D 27A1 FE0F",
            "🧎🏻\u200d♀️\u200d➡": "1F9CE 1F3FB 200D 2640 FE0F 200D 27A1",
            "🧎🏻\u200d♀\u200d➡": "1F9CE 1F3FB 200D 2640 200D 27A1",
            "🧎🏼\u200d♀️\u200d➡️": "1F9CE 1F3FC 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎🏼\u200d♀\u200d➡️": "1F9CE 1F3FC 200D 2640 200D 27A1 FE0F",
            "🧎🏼\u200d♀️\u200d➡": "1F9CE 1F3FC 200D 2640 FE0F 200D 27A1",
            "🧎🏼\u200d♀\u200d➡": "1F9CE 1F3FC 200D 2640 200D 27A1",
            "🧎🏽\u200d♀️\u200d➡️": "1F9CE 1F3FD 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎🏽\u200d♀\u200d➡️": "1F9CE 1F3FD 200D 2640 200D 27A1 FE0F",
            "🧎🏽\u200d♀️\u200d➡": "1F9CE 1F3FD 200D 2640 FE0F 200D 27A1",
            "🧎🏽\u200d♀\u200d➡": "1F9CE 1F3FD 200D 2640 200D 27A1",
            "🧎🏾\u200d♀️\u200d➡️": "1F9CE 1F3FE 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎🏾\u200d♀\u200d➡️": "1F9CE 1F3FE 200D 2640 200D 27A1 FE0F",
            "🧎🏾\u200d♀️\u200d➡": "1F9CE 1F3FE 200D 2640 FE0F 200D 27A1",
            "🧎🏾\u200d♀\u200d➡": "1F9CE 1F3FE 200D 2640 200D 27A1",
            "🧎🏿\u200d♀️\u200d➡️": "1F9CE 1F3FF 200D 2640 FE0F 200D 27A1 FE0F",
            "🧎🏿\u200d♀\u200d➡️": "1F9CE 1F3FF 200D 2640 200D 27A1 FE0F",
            "🧎🏿\u200d♀️\u200d➡": "1F9CE 1F3FF 200D 2640 FE0F 200D 27A1",
            "🧎🏿\u200d♀\u200d➡": "1F9CE 1F3FF 200D 2640 200D 27A1",
            "🧎\u200d♂️\u200d➡️": "1F9CE 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎\u200d♂\u200d➡️": "1F9CE 200D 2642 200D 27A1 FE0F",
            "🧎\u200d♂️\u200d➡": "1F9CE 200D 2642 FE0F 200D 27A1",
            "🧎\u200d♂\u200d➡": "1F9CE 200D 2642 200D 27A1",
            "🧎🏻\u200d♂️\u200d➡️": "1F9CE 1F3FB 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎🏻\u200d♂\u200d➡️": "1F9CE 1F3FB 200D 2642 200D 27A1 FE0F",
            "🧎🏻\u200d♂️\u200d➡": "1F9CE 1F3FB 200D 2642 FE0F 200D 27A1",
            "🧎🏻\u200d♂\u200d➡": "1F9CE 1F3FB 200D 2642 200D 27A1",
            "🧎🏼\u200d♂️\u200d➡️": "1F9CE 1F3FC 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎🏼\u200d♂\u200d➡️": "1F9CE 1F3FC 200D 2642 200D 27A1 FE0F",
            "🧎🏼\u200d♂️\u200d➡": "1F9CE 1F3FC 200D 2642 FE0F 200D 27A1",
            "🧎🏼\u200d♂\u200d➡": "1F9CE 1F3FC 200D 2642 200D 27A1",
            "🧎🏽\u200d♂️\u200d➡️": "1F9CE 1F3FD 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎🏽\u200d♂\u200d➡️": "1F9CE 1F3FD 200D 2642 200D 27A1 FE0F",
            "🧎🏽\u200d♂️\u200d➡": "1F9CE 1F3FD 200D 2642 FE0F 200D 27A1",
            "🧎🏽\u200d♂\u200d➡": "1F9CE 1F3FD 200D 2642 200D 27A1",
            "🧎🏾\u200d♂️\u200d➡️": "1F9CE 1F3FE 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎🏾\u200d♂\u200d➡️": "1F9CE 1F3FE 200D 2642 200D 27A1 FE0F",
            "🧎🏾\u200d♂️\u200d➡": "1F9CE 1F3FE 200D 2642 FE0F 200D 27A1",
            "🧎🏾\u200d♂\u200d➡": "1F9CE 1F3FE 200D 2642 200D 27A1",
            "🧎🏿\u200d♂️\u200d➡️": "1F9CE 1F3FF 200D 2642 FE0F 200D 27A1 FE0F",
            "🧎🏿\u200d♂\u200d➡️": "1F9CE 1F3FF 200D 2642 200D 27A1 FE0F",
            "🧎🏿\u200d♂️\u200d➡": "1F9CE 1F3FF 200D 2642 FE0F 200D 27A1",
            "🧎🏿\u200d♂\u200d➡": "1F9CE 1F3FF 200D 2642 200D 27A1",
            "🧑\u200d🦯": "1F9D1 200D 1F9AF",
            "🧑🏻\u200d🦯": "1F9D1 1F3FB 200D 1F9AF",
            "🧑🏼\u200d🦯": "1F9D1 1F3FC 200D 1F9AF",
            "🧑🏽\u200d🦯": "1F9D1 1F3FD 200D 1F9AF",
            "🧑🏾\u200d🦯": "1F9D1 1F3FE 200D 1F9AF",
            "🧑🏿\u200d🦯": "1F9D1 1F3FF 200D 1F9AF",
            "🧑\u200d🦯\u200d➡️": "1F9D1 200D 1F9AF 200D 27A1 FE0F",
            "🧑\u200d🦯\u200d➡": "1F9D1 200D 1F9AF 200D 27A1",
            "🧑🏻\u200d🦯\u200d➡️": "1F9D1 1F3FB 200D 1F9AF 200D 27A1 FE0F",
            "🧑🏻\u200d🦯\u200d➡": "1F9D1 1F3FB 200D 1F9AF 200D 27A1",
            "🧑🏼\u200d🦯\u200d➡️": "1F9D1 1F3FC 200D 1F9AF 200D 27A1 FE0F",
            "🧑🏼\u200d🦯\u200d➡": "1F9D1 1F3FC 200D 1F9AF 200D 27A1",
            "🧑🏽\u200d🦯\u200d➡️": "1F9D1 1F3FD 200D 1F9AF 200D 27A1 FE0F",
            "🧑🏽\u200d🦯\u200d➡": "1F9D1 1F3FD 200D 1F9AF 200D 27A1",
            "🧑🏾\u200d🦯\u200d➡️": "1F9D1 1F3FE 200D 1F9AF 200D 27A1 FE0F",
            "🧑🏾\u200d🦯\u200d➡": "1F9D1 1F3FE 200D 1F9AF 200D 27A1",
            "🧑🏿\u200d🦯\u200d➡️": "1F9D1 1F3FF 200D 1F9AF 200D 27A1 FE0F",
            "🧑🏿\u200d🦯\u200d➡": "1F9D1 1F3FF 200D 1F9AF 200D 27A1",
            "👨\u200d🦯": "1F468 200D 1F9AF",
            "👨🏻\u200d🦯": "1F468 1F3FB 200D 1F9AF",
            "👨🏼\u200d🦯": "1F468 1F3FC 200D 1F9AF",
            "👨🏽\u200d🦯": "1F468 1F3FD 200D 1F9AF",
            "👨🏾\u200d🦯": "1F468 1F3FE 200D 1F9AF",
            "👨🏿\u200d🦯": "1F468 1F3FF 200D 1F9AF",
            "👨\u200d🦯\u200d➡️": "1F468 200D 1F9AF 200D 27A1 FE0F",
            "👨\u200d🦯\u200d➡": "1F468 200D 1F9AF 200D 27A1",
            "👨🏻\u200d🦯\u200d➡️": "1F468 1F3FB 200D 1F9AF 200D 27A1 FE0F",
            "👨🏻\u200d🦯\u200d➡": "1F468 1F3FB 200D 1F9AF 200D 27A1",
            "👨🏼\u200d🦯\u200d➡️": "1F468 1F3FC 200D 1F9AF 200D 27A1 FE0F",
            "👨🏼\u200d🦯\u200d➡": "1F468 1F3FC 200D 1F9AF 200D 27A1",
            "👨🏽\u200d🦯\u200d➡️": "1F468 1F3FD 200D 1F9AF 200D 27A1 FE0F",
            "👨🏽\u200d🦯\u200d➡": "1F468 1F3FD 200D 1F9AF 200D 27A1",
            "👨🏾\u200d🦯\u200d➡️": "1F468 1F3FE 200D 1F9AF 200D 27A1 FE0F",
            "👨🏾\u200d🦯\u200d➡": "1F468 1F3FE 200D 1F9AF 200D 27A1",
            "👨🏿\u200d🦯\u200d➡️": "1F468 1F3FF 200D 1F9AF 200D 27A1 FE0F",
            "👨🏿\u200d🦯\u200d➡": "1F468 1F3FF 200D 1F9AF 200D 27A1",
            "👩\u200d🦯": "1F469 200D 1F9AF",
            "👩🏻\u200d🦯": "1F469 1F3FB 200D 1F9AF",
            "👩🏼\u200d🦯": "1F469 1F3FC 200D 1F9AF",
            "👩🏽\u200d🦯": "1F469 1F3FD 200D 1F9AF",
            "👩🏾\u200d🦯": "1F469 1F3FE 200D 1F9AF",
            "👩🏿\u200d🦯": "1F469 1F3FF 200D 1F9AF",
            "👩\u200d🦯\u200d➡️": "1F469 200D 1F9AF 200D 27A1 FE0F",
            "👩\u200d🦯\u200d➡": "1F469 200D 1F9AF 200D 27A1",
            "👩🏻\u200d🦯\u200d➡️": "1F469 1F3FB 200D 1F9AF 200D 27A1 FE0F",
            "👩🏻\u200d🦯\u200d➡": "1F469 1F3FB 200D 1F9AF 200D 27A1",
            "👩🏼\u200d🦯\u200d➡️": "1F469 1F3FC 200D 1F9AF 200D 27A1 FE0F",
            "👩🏼\u200d🦯\u200d➡": "1F469 1F3FC 200D 1F9AF 200D 27A1",
            "👩🏽\u200d🦯\u200d➡️": "1F469 1F3FD 200D 1F9AF 200D 27A1 FE0F",
            "👩🏽\u200d🦯\u200d➡": "1F469 1F3FD 200D 1F9AF 200D 27A1",
            "👩🏾\u200d🦯\u200d➡️": "1F469 1F3FE 200D 1F9AF 200D 27A1 FE0F",
            "👩🏾\u200d🦯\u200d➡": "1F469 1F3FE 200D 1F9AF 200D 27A1",
            "👩🏿\u200d🦯\u200d➡️": "1F469 1F3FF 200D 1F9AF 200D 27A1 FE0F",
            "👩🏿\u200d🦯\u200d➡": "1F469 1F3FF 200D 1F9AF 200D 27A1",
            "🧑\u200d🦼": "1F9D1 200D 1F9BC",
            "🧑🏻\u200d🦼": "1F9D1 1F3FB 200D 1F9BC",
            "🧑🏼\u200d🦼": "1F9D1 1F3FC 200D 1F9BC",
            "🧑🏽\u200d🦼": "1F9D1 1F3FD 200D 1F9BC",
            "🧑🏾\u200d🦼": "1F9D1 1F3FE 200D 1F9BC",
            "🧑🏿\u200d🦼": "1F9D1 1F3FF 200D 1F9BC",
            "🧑\u200d🦼\u200d➡️": "1F9D1 200D 1F9BC 200D 27A1 FE0F",
            "🧑\u200d🦼\u200d➡": "1F9D1 200D 1F9BC 200D 27A1",
            "🧑🏻\u200d🦼\u200d➡️": "1F9D1 1F3FB 200D 1F9BC 200D 27A1 FE0F",
            "🧑🏻\u200d🦼\u200d➡": "1F9D1 1F3FB 200D 1F9BC 200D 27A1",
            "🧑🏼\u200d🦼\u200d➡️": "1F9D1 1F3FC 200D 1F9BC 200D 27A1 FE0F",
            "🧑🏼\u200d🦼\u200d➡": "1F9D1 1F3FC 200D 1F9BC 200D 27A1",
            "🧑🏽\u200d🦼\u200d➡️": "1F9D1 1F3FD 200D 1F9BC 200D 27A1 FE0F",
            "🧑🏽\u200d🦼\u200d➡": "1F9D1 1F3FD 200D 1F9BC 200D 27A1",
            "🧑🏾\u200d🦼\u200d➡️": "1F9D1 1F3FE 200D 1F9BC 200D 27A1 FE0F",
            "🧑🏾\u200d🦼\u200d➡": "1F9D1 1F3FE 200D 1F9BC 200D 27A1",
            "🧑🏿\u200d🦼\u200d➡️": "1F9D1 1F3FF 200D 1F9BC 200D 27A1 FE0F",
            "🧑🏿\u200d🦼\u200d➡": "1F9D1 1F3FF 200D 1F9BC 200D 27A1",
            "👨\u200d🦼": "1F468 200D 1F9BC",
            "👨🏻\u200d🦼": "1F468 1F3FB 200D 1F9BC",
            "👨🏼\u200d🦼": "1F468 1F3FC 200D 1F9BC",
            "👨🏽\u200d🦼": "1F468 1F3FD 200D 1F9BC",
            "👨🏾\u200d🦼": "1F468 1F3FE 200D 1F9BC",
            "👨🏿\u200d🦼": "1F468 1F3FF 200D 1F9BC",
            "👨\u200d🦼\u200d➡️": "1F468 200D 1F9BC 200D 27A1 FE0F",
            "👨\u200d🦼\u200d➡": "1F468 200D 1F9BC 200D 27A1",
            "👨🏻\u200d🦼\u200d➡️": "1F468 1F3FB 200D 1F9BC 200D 27A1 FE0F",
            "👨🏻\u200d🦼\u200d➡": "1F468 1F3FB 200D 1F9BC 200D 27A1",
            "👨🏼\u200d🦼\u200d➡️": "1F468 1F3FC 200D 1F9BC 200D 27A1 FE0F",
            "👨🏼\u200d🦼\u200d➡": "1F468 1F3FC 200D 1F9BC 200D 27A1",
            "👨🏽\u200d🦼\u200d➡️": "1F468 1F3FD 200D 1F9BC 200D 27A1 FE0F",

            "👨🏽\u200d🦼\u200d➡": "1F468 1F3FD 200D 1F9BC 200D 27A1",
            "👨🏾\u200d🦼\u200d➡️": "1F468 1F3FE 200D 1F9BC 200D 27A1 FE0F",
            "👨🏾\u200d🦼\u200d➡": "1F468 1F3FE 200D 1F9BC 200D 27A1",
            "👨🏿\u200d🦼\u200d➡️": "1F468 1F3FF 200D 1F9BC 200D 27A1 FE0F",
            "👨🏿\u200d🦼\u200d➡": "1F468 1F3FF 200D 1F9BC 200D 27A1",
            "👩\u200d🦼": "1F469 200D 1F9BC",
            "👩🏻\u200d🦼": "1F469 1F3FB 200D 1F9BC",
            "👩🏼\u200d🦼": "1F469 1F3FC 200D 1F9BC",
            "👩🏽\u200d🦼": "1F469 1F3FD 200D 1F9BC",
            "👩🏾\u200d🦼": "1F469 1F3FE 200D 1F9BC",
            "👩🏿\u200d🦼": "1F469 1F3FF 200D 1F9BC",
            "👩\u200d🦼\u200d➡️": "1F469 200D 1F9BC 200D 27A1 FE0F",
            "👩\u200d🦼\u200d➡": "1F469 200D 1F9BC 200D 27A1",
            "👩🏻\u200d🦼\u200d➡️": "1F469 1F3FB 200D 1F9BC 200D 27A1 FE0F",
            "👩🏻\u200d🦼\u200d➡": "1F469 1F3FB 200D 1F9BC 200D 27A1",
            "👩🏼\u200d🦼\u200d➡️": "1F469 1F3FC 200D 1F9BC 200D 27A1 FE0F",
            "👩🏼\u200d🦼\u200d➡": "1F469 1F3FC 200D 1F9BC 200D 27A1",
            "👩🏽\u200d🦼\u200d➡️": "1F469 1F3FD 200D 1F9BC 200D 27A1 FE0F",
            "👩🏽\u200d🦼\u200d➡": "1F469 1F3FD 200D 1F9BC 200D 27A1",
            "👩🏾\u200d🦼\u200d➡️": "1F469 1F3FE 200D 1F9BC 200D 27A1 FE0F",
            "👩🏾\u200d🦼\u200d➡": "1F469 1F3FE 200D 1F9BC 200D 27A1",
            "👩🏿\u200d🦼\u200d➡️": "1F469 1F3FF 200D 1F9BC 200D 27A1 FE0F",
            "👩🏿\u200d🦼\u200d➡": "1F469 1F3FF 200D 1F9BC 200D 27A1",
            "🧑\u200d🦽": "1F9D1 200D 1F9BD",
            "🧑🏻\u200d🦽": "1F9D1 1F3FB 200D 1F9BD",
            "🧑🏼\u200d🦽": "1F9D1 1F3FC 200D 1F9BD",
            "🧑🏽\u200d🦽": "1F9D1 1F3FD 200D 1F9BD",
            "🧑🏾\u200d🦽": "1F9D1 1F3FE 200D 1F9BD",
            "🧑🏿\u200d🦽": "1F9D1 1F3FF 200D 1F9BD",
            "🧑\u200d🦽\u200d➡️": "1F9D1 200D 1F9BD 200D 27A1 FE0F",
            "🧑\u200d🦽\u200d➡": "1F9D1 200D 1F9BD 200D 27A1",
            "🧑🏻\u200d🦽\u200d➡️": "1F9D1 1F3FB 200D 1F9BD 200D 27A1 FE0F",
            "🧑🏻\u200d🦽\u200d➡": "1F9D1 1F3FB 200D 1F9BD 200D 27A1",
            "🧑🏼\u200d🦽\u200d➡️": "1F9D1 1F3FC 200D 1F9BD 200D 27A1 FE0F",
            "🧑🏼\u200d🦽\u200d➡": "1F9D1 1F3FC 200D 1F9BD 200D 27A1",
            "🧑🏽\u200d🦽\u200d➡️": "1F9D1 1F3FD 200D 1F9BD 200D 27A1 FE0F",
            "🧑🏽\u200d🦽\u200d➡": "1F9D1 1F3FD 200D 1F9BD 200D 27A1",
            "🧑🏾\u200d🦽\u200d➡️": "1F9D1 1F3FE 200D 1F9BD 200D 27A1 FE0F",
            "🧑🏾\u200d🦽\u200d➡": "1F9D1 1F3FE 200D 1F9BD 200D 27A1",
            "🧑🏿\u200d🦽\u200d➡️": "1F9D1 1F3FF 200D 1F9BD 200D 27A1 FE0F",
            "🧑🏿\u200d🦽\u200d➡": "1F9D1 1F3FF 200D 1F9BD 200D 27A1",
            "👨\u200d🦽": "1F468 200D 1F9BD",
            "👨🏻\u200d🦽": "1F468 1F3FB 200D 1F9BD",
            "👨🏼\u200d🦽": "1F468 1F3FC 200D 1F9BD",
            "👨🏽\u200d🦽": "1F468 1F3FD 200D 1F9BD",
            "👨🏾\u200d🦽": "1F468 1F3FE 200D 1F9BD",
            "👨🏿\u200d🦽": "1F468 1F3FF 200D 1F9BD",
            "👨\u200d🦽\u200d➡️": "1F468 200D 1F9BD 200D 27A1 FE0F",
            "👨\u200d🦽\u200d➡": "1F468 200D 1F9BD 200D 27A1",
            "👨🏻\u200d🦽\u200d➡️": "1F468 1F3FB 200D 1F9BD 200D 27A1 FE0F",
            "👨🏻\u200d🦽\u200d➡": "1F468 1F3FB 200D 1F9BD 200D 27A1",
            "👨🏼\u200d🦽\u200d➡️": "1F468 1F3FC 200D 1F9BD 200D 27A1 FE0F",
            "👨🏼\u200d🦽\u200d➡": "1F468 1F3FC 200D 1F9BD 200D 27A1",
            "👨🏽\u200d🦽\u200d➡️": "1F468 1F3FD 200D 1F9BD 200D 27A1 FE0F",
            "👨🏽\u200d🦽\u200d➡": "1F468 1F3FD 200D 1F9BD 200D 27A1",
            "👨🏾\u200d🦽\u200d➡️": "1F468 1F3FE 200D 1F9BD 200D 27A1 FE0F",
            "👨🏾\u200d🦽\u200d➡": "1F468 1F3FE 200D 1F9BD 200D 27A1",
            "👨🏿\u200d🦽\u200d➡️": "1F468 1F3FF 200D 1F9BD 200D 27A1 FE0F",
            "👨🏿\u200d🦽\u200d➡": "1F468 1F3FF 200D 1F9BD 200D 27A1",
            "👩\u200d🦽": "1F469 200D 1F9BD",
            "👩🏻\u200d🦽": "1F469 1F3FB 200D 1F9BD",
            "👩🏼\u200d🦽": "1F469 1F3FC 200D 1F9BD",
            "👩🏽\u200d🦽": "1F469 1F3FD 200D 1F9BD",
            "👩🏾\u200d🦽": "1F469 1F3FE 200D 1F9BD",
            "👩🏿\u200d🦽": "1F469 1F3FF 200D 1F9BD",
            "👩\u200d🦽\u200d➡️": "1F469 200D 1F9BD 200D 27A1 FE0F",
            "👩\u200d🦽\u200d➡": "1F469 200D 1F9BD 200D 27A1",
            "👩🏻\u200d🦽\u200d➡️": "1F469 1F3FB 200D 1F9BD 200D 27A1 FE0F",
            "👩🏻\u200d🦽\u200d➡": "1F469 1F3FB 200D 1F9BD 200D 27A1",
            "👩🏼\u200d🦽\u200d➡️": "1F469 1F3FC 200D 1F9BD 200D 27A1 FE0F",
            "👩🏼\u200d🦽\u200d➡": "1F469 1F3FC 200D 1F9BD 200D 27A1",
            "👩🏽\u200d🦽\u200d➡️": "1F469 1F3FD 200D 1F9BD 200D 27A1 FE0F",
            "👩🏽\u200d🦽\u200d➡": "1F469 1F3FD 200D 1F9BD 200D 27A1",
            "👩🏾\u200d🦽\u200d➡️": "1F469 1F3FE 200D 1F9BD 200D 27A1 FE0F",
            "👩🏾\u200d🦽\u200d➡": "1F469 1F3FE 200D 1F9BD 200D 27A1",
            "👩🏿\u200d🦽\u200d➡️": "1F469 1F3FF 200D 1F9BD 200D 27A1 FE0F",
            "👩🏿\u200d🦽\u200d➡": "1F469 1F3FF 200D 1F9BD 200D 27A1",
            "🏃": "1F3C3",
            "🏃🏻": "1F3C3 1F3FB",
            "🏃🏼": "1F3C3 1F3FC",
            "🏃🏽": "1F3C3 1F3FD",
            "🏃🏾": "1F3C3 1F3FE",
            "🏃🏿": "1F3C3 1F3FF",
            "🏃\u200d♂️": "1F3C3 200D 2642 FE0F",
            "🏃\u200d♂": "1F3C3 200D 2642",
            "🏃🏻\u200d♂️": "1F3C3 1F3FB 200D 2642 FE0F",
            "🏃🏻\u200d♂": "1F3C3 1F3FB 200D 2642",
            "🏃🏼\u200d♂️": "1F3C3 1F3FC 200D 2642 FE0F",
            "🏃🏼\u200d♂": "1F3C3 1F3FC 200D 2642",
            "🏃🏽\u200d♂️": "1F3C3 1F3FD 200D 2642 FE0F",
            "🏃🏽\u200d♂": "1F3C3 1F3FD 200D 2642",
            "🏃🏾\u200d♂️": "1F3C3 1F3FE 200D 2642 FE0F",
            "🏃🏾\u200d♂": "1F3C3 1F3FE 200D 2642",
            "🏃🏿\u200d♂️": "1F3C3 1F3FF 200D 2642 FE0F",
            "🏃🏿\u200d♂": "1F3C3 1F3FF 200D 2642",
            "🏃\u200d♀️": "1F3C3 200D 2640 FE0F",
            "🏃\u200d♀": "1F3C3 200D 2640",
            "🏃🏻\u200d♀️": "1F3C3 1F3FB 200D 2640 FE0F",
            "🏃🏻\u200d♀": "1F3C3 1F3FB 200D 2640",
            "🏃🏼\u200d♀️": "1F3C3 1F3FC 200D 2640 FE0F",
            "🏃🏼\u200d♀": "1F3C3 1F3FC 200D 2640",
            "🏃🏽\u200d♀️": "1F3C3 1F3FD 200D 2640 FE0F",
            "🏃🏽\u200d♀": "1F3C3 1F3FD 200D 2640",
            "🏃🏾\u200d♀️": "1F3C3 1F3FE 200D 2640 FE0F",
            "🏃🏾\u200d♀": "1F3C3 1F3FE 200D 2640",
            "🏃🏿\u200d♀️": "1F3C3 1F3FF 200D 2640 FE0F",
            "🏃🏿\u200d♀": "1F3C3 1F3FF 200D 2640",
            "🏃\u200d➡️": "1F3C3 200D 27A1 FE0F",
            "🏃\u200d➡": "1F3C3 200D 27A1",
            "🏃🏻\u200d➡️": "1F3C3 1F3FB 200D 27A1 FE0F",
            "🏃🏻\u200d➡": "1F3C3 1F3FB 200D 27A1",
            "🏃🏼\u200d➡️": "1F3C3 1F3FC 200D 27A1 FE0F",
            "🏃🏼\u200d➡": "1F3C3 1F3FC 200D 27A1",
            "🏃🏽\u200d➡️": "1F3C3 1F3FD 200D 27A1 FE0F",
            "🏃🏽\u200d➡": "1F3C3 1F3FD 200D 27A1",
            "🏃🏾\u200d➡️": "1F3C3 1F3FE 200D 27A1 FE0F",
            "🏃🏾\u200d➡": "1F3C3 1F3FE 200D 27A1",
            "🏃🏿\u200d➡️": "1F3C3 1F3FF 200D 27A1 FE0F",
            "🏃🏿\u200d➡": "1F3C3 1F3FF 200D 27A1",
            "🏃\u200d♀️\u200d➡️": "1F3C3 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃\u200d♀\u200d➡️": "1F3C3 200D 2640 200D 27A1 FE0F",
            "🏃\u200d♀️\u200d➡": "1F3C3 200D 2640 FE0F 200D 27A1",
            "🏃\u200d♀\u200d➡": "1F3C3 200D 2640 200D 27A1",
            "🏃🏻\u200d♀️\u200d➡️": "1F3C3 1F3FB 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃🏻\u200d♀\u200d➡️": "1F3C3 1F3FB 200D 2640 200D 27A1 FE0F",
            "🏃🏻\u200d♀️\u200d➡": "1F3C3 1F3FB 200D 2640 FE0F 200D 27A1",
            "🏃🏻\u200d♀\u200d➡": "1F3C3 1F3FB 200D 2640 200D 27A1",
            "🏃🏼\u200d♀️\u200d➡️": "1F3C3 1F3FC 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃🏼\u200d♀\u200d➡️": "1F3C3 1F3FC 200D 2640 200D 27A1 FE0F",
            "🏃🏼\u200d♀️\u200d➡": "1F3C3 1F3FC 200D 2640 FE0F 200D 27A1",
            "🏃🏼\u200d♀\u200d➡": "1F3C3 1F3FC 200D 2640 200D 27A1",
            "🏃🏽\u200d♀️\u200d➡️": "1F3C3 1F3FD 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃🏽\u200d♀\u200d➡️": "1F3C3 1F3FD 200D 2640 200D 27A1 FE0F",
            "🏃🏽\u200d♀️\u200d➡": "1F3C3 1F3FD 200D 2640 FE0F 200D 27A1",
            "🏃🏽\u200d♀\u200d➡": "1F3C3 1F3FD 200D 2640 200D 27A1",
            "🏃🏾\u200d♀️\u200d➡️": "1F3C3 1F3FE 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃🏾\u200d♀\u200d➡️": "1F3C3 1F3FE 200D 2640 200D 27A1 FE0F",
            "🏃🏾\u200d♀️\u200d➡": "1F3C3 1F3FE 200D 2640 FE0F 200D 27A1",
            "🏃🏾\u200d♀\u200d➡": "1F3C3 1F3FE 200D 2640 200D 27A1",
            "🏃🏿\u200d♀️\u200d➡️": "1F3C3 1F3FF 200D 2640 FE0F 200D 27A1 FE0F",
            "🏃🏿\u200d♀\u200d➡️": "1F3C3 1F3FF 200D 2640 200D 27A1 FE0F",
            "🏃🏿\u200d♀️\u200d➡": "1F3C3 1F3FF 200D 2640 FE0F 200D 27A1",
            "🏃🏿\u200d♀\u200d➡": "1F3C3 1F3FF 200D 2640 200D 27A1",
            "🏃\u200d♂️\u200d➡️": "1F3C3 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃\u200d♂\u200d➡️": "1F3C3 200D 2642 200D 27A1 FE0F",
            "🏃\u200d♂️\u200d➡": "1F3C3 200D 2642 FE0F 200D 27A1",
            "🏃\u200d♂\u200d➡": "1F3C3 200D 2642 200D 27A1",
            "🏃🏻\u200d♂️\u200d➡️": "1F3C3 1F3FB 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃🏻\u200d♂\u200d➡️": "1F3C3 1F3FB 200D 2642 200D 27A1 FE0F",
            "🏃🏻\u200d♂️\u200d➡": "1F3C3 1F3FB 200D 2642 FE0F 200D 27A1",
            "🏃🏻\u200d♂\u200d➡": "1F3C3 1F3FB 200D 2642 200D 27A1",
            "🏃🏼\u200d♂️\u200d➡️": "1F3C3 1F3FC 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃🏼\u200d♂\u200d➡️": "1F3C3 1F3FC 200D 2642 200D 27A1 FE0F",
            "🏃🏼\u200d♂️\u200d➡": "1F3C3 1F3FC 200D 2642 FE0F 200D 27A1",
            "🏃🏼\u200d♂\u200d➡": "1F3C3 1F3FC 200D 2642 200D 27A1",
            "🏃🏽\u200d♂️\u200d➡️": "1F3C3 1F3FD 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃🏽\u200d♂\u200d➡️": "1F3C3 1F3FD 200D 2642 200D 27A1 FE0F",
            "🏃🏽\u200d♂️\u200d➡": "1F3C3 1F3FD 200D 2642 FE0F 200D 27A1",
            "🏃🏽\u200d♂\u200d➡": "1F3C3 1F3FD 200D 2642 200D 27A1",
            "🏃🏾\u200d♂️\u200d➡️": "1F3C3 1F3FE 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃🏾\u200d♂\u200d➡️": "1F3C3 1F3FE 200D 2642 200D 27A1 FE0F",
            "🏃🏾\u200d♂️\u200d➡": "1F3C3 1F3FE 200D 2642 FE0F 200D 27A1",
            "🏃🏾\u200d♂\u200d➡": "1F3C3 1F3FE 200D 2642 200D 27A1",
            "🏃🏿\u200d♂️\u200d➡️": "1F3C3 1F3FF 200D 2642 FE0F 200D 27A1 FE0F",
            "🏃🏿\u200d♂\u200d➡️": "1F3C3 1F3FF 200D 2642 200D 27A1 FE0F",
            "🏃🏿\u200d♂️\u200d➡": "1F3C3 1F3FF 200D 2642 FE0F 200D 27A1",
            "🏃🏿\u200d♂\u200d➡": "1F3C3 1F3FF 200D 2642 200D 27A1",
            "💃": "1F483",
            "💃🏻": "1F483 1F3FB",
            "💃🏼": "1F483 1F3FC",
            "💃🏽": "1F483 1F3FD",
            "💃🏾": "1F483 1F3FE",
            "💃🏿": "1F483 1F3FF",
            "🕺": "1F57A",
            "🕺🏻": "1F57A 1F3FB",
            "🕺🏼": "1F57A 1F3FC",
            "🕺🏽": "1F57A 1F3FD",
            "🕺🏾": "1F57A 1F3FE",
            "🕺🏿": "1F57A 1F3FF",
            "🕴️": "1F574 FE0F",
            "🕴": "1F574",
            "🕴🏻": "1F574 1F3FB",
            "🕴🏼": "1F574 1F3FC",
            "🕴🏽": "1F574 1F3FD",
            "🕴🏾": "1F574 1F3FE",
            "🕴🏿": "1F574 1F3FF",
            "👯": "1F46F",
            "👯\u200d♂️": "1F46F 200D 2642 FE0F",
            "👯\u200d♂": "1F46F 200D 2642",
            "👯\u200d♀️": "1F46F 200D 2640 FE0F",
            "👯\u200d♀": "1F46F 200D 2640",
            "🧖": "1F9D6",
            "🧖🏻": "1F9D6 1F3FB",
            "🧖🏼": "1F9D6 1F3FC",
            "🧖🏽": "1F9D6 1F3FD",
            "🧖🏾": "1F9D6 1F3FE",
            "🧖🏿": "1F9D6 1F3FF",
            "🧖\u200d♂️": "1F9D6 200D 2642 FE0F",
            "🧖\u200d♂": "1F9D6 200D 2642",
            "🧖🏻\u200d♂️": "1F9D6 1F3FB 200D 2642 FE0F",
            "🧖🏻\u200d♂": "1F9D6 1F3FB 200D 2642",
            "🧖🏼\u200d♂️": "1F9D6 1F3FC 200D 2642 FE0F",
            "🧖🏼\u200d♂": "1F9D6 1F3FC 200D 2642",
            "🧖🏽\u200d♂️": "1F9D6 1F3FD 200D 2642 FE0F",
            "🧖🏽\u200d♂": "1F9D6 1F3FD 200D 2642",
            "🧖🏾\u200d♂️": "1F9D6 1F3FE 200D 2642 FE0F",
            "🧖🏾\u200d♂": "1F9D6 1F3FE 200D 2642",
            "🧖🏿\u200d♂️": "1F9D6 1F3FF 200D 2642 FE0F",
            "🧖🏿\u200d♂": "1F9D6 1F3FF 200D 2642",
            "🧖\u200d♀️": "1F9D6 200D 2640 FE0F",
            "🧖\u200d♀": "1F9D6 200D 2640",
            "🧖🏻\u200d♀️": "1F9D6 1F3FB 200D 2640 FE0F",
            "🧖🏻\u200d♀": "1F9D6 1F3FB 200D 2640",
            "🧖🏼\u200d♀️": "1F9D6 1F3FC 200D 2640 FE0F",
            "🧖🏼\u200d♀": "1F9D6 1F3FC 200D 2640",
            "🧖🏽\u200d♀️": "1F9D6 1F3FD 200D 2640 FE0F",
            "🧖🏽\u200d♀": "1F9D6 1F3FD 200D 2640",
            "🧖🏾\u200d♀️": "1F9D6 1F3FE 200D 2640 FE0F",
            "🧖🏾\u200d♀": "1F9D6 1F3FE 200D 2640",
            "🧖🏿\u200d♀️": "1F9D6 1F3FF 200D 2640 FE0F",
            "🧖🏿\u200d♀": "1F9D6 1F3FF 200D 2640",
            "🧗": "1F9D7",
            "🧗🏻": "1F9D7 1F3FB",
            "🧗🏼": "1F9D7 1F3FC",
            "🧗🏽": "1F9D7 1F3FD",
            "🧗🏾": "1F9D7 1F3FE",
            "🧗🏿": "1F9D7 1F3FF",
            "🧗\u200d♂️": "1F9D7 200D 2642 FE0F",
            "🧗\u200d♂": "1F9D7 200D 2642",
            "🧗🏻\u200d♂️": "1F9D7 1F3FB 200D 2642 FE0F",
            "🧗🏻\u200d♂": "1F9D7 1F3FB 200D 2642",
            "🧗🏼\u200d♂️": "1F9D7 1F3FC 200D 2642 FE0F",
            "🧗🏼\u200d♂": "1F9D7 1F3FC 200D 2642",
            "🧗🏽\u200d♂️": "1F9D7 1F3FD 200D 2642 FE0F",
            "🧗🏽\u200d♂": "1F9D7 1F3FD 200D 2642",
            "🧗🏾\u200d♂️": "1F9D7 1F3FE 200D 2642 FE0F",
            "🧗🏾\u200d♂": "1F9D7 1F3FE 200D 2642",
            "🧗🏿\u200d♂️": "1F9D7 1F3FF 200D 2642 FE0F",
            "🧗🏿\u200d♂": "1F9D7 1F3FF 200D 2642",
            "🧗\u200d♀️": "1F9D7 200D 2640 FE0F",
            "🧗\u200d♀": "1F9D7 200D 2640",
            "🧗🏻\u200d♀️": "1F9D7 1F3FB 200D 2640 FE0F",
            "🧗🏻\u200d♀": "1F9D7 1F3FB 200D 2640",
            "🧗🏼\u200d♀️": "1F9D7 1F3FC 200D 2640 FE0F",
            "🧗🏼\u200d♀": "1F9D7 1F3FC 200D 2640",
            "🧗🏽\u200d♀️": "1F9D7 1F3FD 200D 2640 FE0F",
            "🧗🏽\u200d♀": "1F9D7 1F3FD 200D 2640",
            "🧗🏾\u200d♀️": "1F9D7 1F3FE 200D 2640 FE0F",
            "🧗🏾\u200d♀": "1F9D7 1F3FE 200D 2640",
            "🧗🏿\u200d♀️": "1F9D7 1F3FF 200D 2640 FE0F",
            "🧗🏿\u200d♀": "1F9D7 1F3FF 200D 2640",
            "🤺": "1F93A",
            "🏇": "1F3C7",
            "🏇🏻": "1F3C7 1F3FB",
            "🏇🏼": "1F3C7 1F3FC",
            "🏇🏽": "1F3C7 1F3FD",
            "🏇🏾": "1F3C7 1F3FE",
            "🏇🏿": "1F3C7 1F3FF",
            "⛷️": "26F7 FE0F",
            "⛷": "26F7",
            "🏂": "1F3C2",
            "🏂🏻": "1F3C2 1F3FB",
            "🏂🏼": "1F3C2 1F3FC",
            "🏂🏽": "1F3C2 1F3FD",
            "🏂🏾": "1F3C2 1F3FE",
            "🏂🏿": "1F3C2 1F3FF",
            "🏌️": "1F3CC FE0F",
            "🏌": "1F3CC",
            "🏌🏻": "1F3CC 1F3FB",
            "🏌🏼": "1F3CC 1F3FC",
            "🏌🏽": "1F3CC 1F3FD",
            "🏌🏾": "1F3CC 1F3FE",
            "🏌🏿": "1F3CC 1F3FF",
            "🏌️\u200d♂️": "1F3CC FE0F 200D 2642 FE0F",
            "🏌\u200d♂️": "1F3CC 200D 2642 FE0F",
            "🏌️\u200d♂": "1F3CC FE0F 200D 2642",
            "🏌\u200d♂": "1F3CC 200D 2642",
            "🏌🏻\u200d♂️": "1F3CC 1F3FB 200D 2642 FE0F",
            "🏌🏻\u200d♂": "1F3CC 1F3FB 200D 2642",
            "🏌🏼\u200d♂️": "1F3CC 1F3FC 200D 2642 FE0F",
            "🏌🏼\u200d♂": "1F3CC 1F3FC 200D 2642",
            "🏌🏽\u200d♂️": "1F3CC 1F3FD 200D 2642 FE0F",
            "🏌🏽\u200d♂": "1F3CC 1F3FD 200D 2642",
            "🏌🏾\u200d♂️": "1F3CC 1F3FE 200D 2642 FE0F",
            "🏌🏾\u200d♂": "1F3CC 1F3FE 200D 2642",
            "🏌🏿\u200d♂️": "1F3CC 1F3FF 200D 2642 FE0F",
            "🏌🏿\u200d♂": "1F3CC 1F3FF 200D 2642",
            "🏌️\u200d♀️": "1F3CC FE0F 200D 2640 FE0F",
            "🏌\u200d♀️": "1F3CC 200D 2640 FE0F",
            "🏌️\u200d♀": "1F3CC FE0F 200D 2640",
            "🏌\u200d♀": "1F3CC 200D 2640",
            "🏌🏻\u200d♀️": "1F3CC 1F3FB 200D 2640 FE0F",
            "🏌🏻\u200d♀": "1F3CC 1F3FB 200D 2640",
            "🏌🏼\u200d♀️": "1F3CC 1F3FC 200D 2640 FE0F",
            "🏌🏼\u200d♀": "1F3CC 1F3FC 200D 2640",
            "🏌🏽\u200d♀️": "1F3CC 1F3FD 200D 2640 FE0F",
            "🏌🏽\u200d♀": "1F3CC 1F3FD 200D 2640",
            "🏌🏾\u200d♀️": "1F3CC 1F3FE 200D 2640 FE0F",
            "🏌🏾\u200d♀": "1F3CC 1F3FE 200D 2640",
            "🏌🏿\u200d♀️": "1F3CC 1F3FF 200D 2640 FE0F",
            "🏌🏿\u200d♀": "1F3CC 1F3FF 200D 2640",
            "🏄": "1F3C4",
            "🏄🏻": "1F3C4 1F3FB",
            "🏄🏼": "1F3C4 1F3FC",
            "🏄🏽": "1F3C4 1F3FD",
            "🏄🏾": "1F3C4 1F3FE",
            "🏄🏿": "1F3C4 1F3FF",
            "🏄\u200d♂️": "1F3C4 200D 2642 FE0F",
            "🏄\u200d♂": "1F3C4 200D 2642",
            "🏄🏻\u200d♂️": "1F3C4 1F3FB 200D 2642 FE0F",
            "🏄🏻\u200d♂": "1F3C4 1F3FB 200D 2642",
            "🏄🏼\u200d♂️": "1F3C4 1F3FC 200D 2642 FE0F",
            "🏄🏼\u200d♂": "1F3C4 1F3FC 200D 2642",
            "🏄🏽\u200d♂️": "1F3C4 1F3FD 200D 2642 FE0F",
            "🏄🏽\u200d♂": "1F3C4 1F3FD 200D 2642",
            "🏄🏾\u200d♂️": "1F3C4 1F3FE 200D 2642 FE0F",
            "🏄🏾\u200d♂": "1F3C4 1F3FE 200D 2642",
            "🏄🏿\u200d♂️": "1F3C4 1F3FF 200D 2642 FE0F",
            "🏄🏿\u200d♂": "1F3C4 1F3FF 200D 2642",
            "🏄\u200d♀️": "1F3C4 200D 2640 FE0F",
            "🏄\u200d♀": "1F3C4 200D 2640",
            "🏄🏻\u200d♀️": "1F3C4 1F3FB 200D 2640 FE0F",
            "🏄🏻\u200d♀": "1F3C4 1F3FB 200D 2640",
            "🏄🏼\u200d♀️": "1F3C4 1F3FC 200D 2640 FE0F",
            "🏄🏼\u200d♀": "1F3C4 1F3FC 200D 2640",
            "🏄🏽\u200d♀️": "1F3C4 1F3FD 200D 2640 FE0F",
            "🏄🏽\u200d♀": "1F3C4 1F3FD 200D 2640",
            "🏄🏾\u200d♀️": "1F3C4 1F3FE 200D 2640 FE0F",
            "🏄🏾\u200d♀": "1F3C4 1F3FE 200D 2640",
            "🏄🏿\u200d♀️": "1F3C4 1F3FF 200D 2640 FE0F",
            "🏄🏿\u200d♀": "1F3C4 1F3FF 200D 2640",
            "🚣": "1F6A3",
            "🚣🏻": "1F6A3 1F3FB",
            "🚣🏼": "1F6A3 1F3FC",
            "🚣🏽": "1F6A3 1F3FD",
            "🚣🏾": "1F6A3 1F3FE",
            "🚣🏿": "1F6A3 1F3FF",
            "🚣\u200d♂️": "1F6A3 200D 2642 FE0F",
            "🚣\u200d♂": "1F6A3 200D 2642",
            "🚣🏻\u200d♂️": "1F6A3 1F3FB 200D 2642 FE0F",
            "🚣🏻\u200d♂": "1F6A3 1F3FB 200D 2642",
            "🚣🏼\u200d♂️": "1F6A3 1F3FC 200D 2642 FE0F",
            "🚣🏼\u200d♂": "1F6A3 1F3FC 200D 2642",
            "🚣🏽\u200d♂️": "1F6A3 1F3FD 200D 2642 FE0F",
            "🚣🏽\u200d♂": "1F6A3 1F3FD 200D 2642",
            "🚣🏾\u200d♂️": "1F6A3 1F3FE 200D 2642 FE0F",
            "🚣🏾\u200d♂": "1F6A3 1F3FE 200D 2642",
            "🚣🏿\u200d♂️": "1F6A3 1F3FF 200D 2642 FE0F",
            "🚣🏿\u200d♂": "1F6A3 1F3FF 200D 2642",
            "🚣\u200d♀️": "1F6A3 200D 2640 FE0F",
            "🚣\u200d♀": "1F6A3 200D 2640",
            "🚣🏻\u200d♀️": "1F6A3 1F3FB 200D 2640 FE0F",
            "🚣🏻\u200d♀": "1F6A3 1F3FB 200D 2640",
            "🚣🏼\u200d♀️": "1F6A3 1F3FC 200D 2640 FE0F",
            "🚣🏼\u200d♀": "1F6A3 1F3FC 200D 2640",
            "🚣🏽\u200d♀️": "1F6A3 1F3FD 200D 2640 FE0F",
            "🚣🏽\u200d♀": "1F6A3 1F3FD 200D 2640",
            "🚣🏾\u200d♀️": "1F6A3 1F3FE 200D 2640 FE0F",
            "🚣🏾\u200d♀": "1F6A3 1F3FE 200D 2640",
            "🚣🏿\u200d♀️": "1F6A3 1F3FF 200D 2640 FE0F",
            "🚣🏿\u200d♀": "1F6A3 1F3FF 200D 2640",
            "🏊": "1F3CA",
            "🏊🏻": "1F3CA 1F3FB",
            "🏊🏼": "1F3CA 1F3FC",
            "🏊🏽": "1F3CA 1F3FD",
            "🏊🏾": "1F3CA 1F3FE",
            "🏊🏿": "1F3CA 1F3FF",
            "🏊\u200d♂️": "1F3CA 200D 2642 FE0F",
            "🏊\u200d♂": "1F3CA 200D 2642",
            "🏊🏻\u200d♂️": "1F3CA 1F3FB 200D 2642 FE0F",
            "🏊🏻\u200d♂": "1F3CA 1F3FB 200D 2642",
            "🏊🏼\u200d♂️": "1F3CA 1F3FC 200D 2642 FE0F",
            "🏊🏼\u200d♂": "1F3CA 1F3FC 200D 2642",
            "🏊🏽\u200d♂️": "1F3CA 1F3FD 200D 2642 FE0F",
            "🏊🏽\u200d♂": "1F3CA 1F3FD 200D 2642",
            "🏊🏾\u200d♂️": "1F3CA 1F3FE 200D 2642 FE0F",
            "🏊🏾\u200d♂": "1F3CA 1F3FE 200D 2642",
            "🏊🏿\u200d♂️": "1F3CA 1F3FF 200D 2642 FE0F",
            "🏊🏿\u200d♂": "1F3CA 1F3FF 200D 2642",
            "🏊\u200d♀️": "1F3CA 200D 2640 FE0F",
            "🏊\u200d♀": "1F3CA 200D 2640",
            "🏊🏻\u200d♀️": "1F3CA 1F3FB 200D 2640 FE0F",
            "🏊🏻\u200d♀": "1F3CA 1F3FB 200D 2640",
            "🏊🏼\u200d♀️": "1F3CA 1F3FC 200D 2640 FE0F",
            "🏊🏼\u200d♀": "1F3CA 1F3FC 200D 2640",
            "🏊🏽\u200d♀️": "1F3CA 1F3FD 200D 2640 FE0F",
            "🏊🏽\u200d♀": "1F3CA 1F3FD 200D 2640",
            "🏊🏾\u200d♀️": "1F3CA 1F3FE 200D 2640 FE0F",
            "🏊🏾\u200d♀": "1F3CA 1F3FE 200D 2640",
            "🏊🏿\u200d♀️": "1F3CA 1F3FF 200D 2640 FE0F",
            "🏊🏿\u200d♀": "1F3CA 1F3FF 200D 2640",
            "⛹️": "26F9 FE0F",
            "⛹": "26F9",
            "⛹🏻": "26F9 1F3FB",
            "⛹🏼": "26F9 1F3FC",
            "⛹🏽": "26F9 1F3FD",
            "⛹🏾": "26F9 1F3FE",
            "⛹🏿": "26F9 1F3FF",
            "⛹️\u200d♂️": "26F9 FE0F 200D 2642 FE0F",
            "⛹\u200d♂️": "26F9 200D 2642 FE0F",
            "⛹️\u200d♂": "26F9 FE0F 200D 2642",
            "⛹\u200d♂": "26F9 200D 2642",
            "⛹🏻\u200d♂️": "26F9 1F3FB 200D 2642 FE0F",
            "⛹🏻\u200d♂": "26F9 1F3FB 200D 2642",
            "⛹🏼\u200d♂️": "26F9 1F3FC 200D 2642 FE0F",
            "⛹🏼\u200d♂": "26F9 1F3FC 200D 2642",
            "⛹🏽\u200d♂️": "26F9 1F3FD 200D 2642 FE0F",
            "⛹🏽\u200d♂": "26F9 1F3FD 200D 2642",
            "⛹🏾\u200d♂️": "26F9 1F3FE 200D 2642 FE0F",
            "⛹🏾\u200d♂": "26F9 1F3FE 200D 2642",
            "⛹🏿\u200d♂️": "26F9 1F3FF 200D 2642 FE0F",
            "⛹🏿\u200d♂": "26F9 1F3FF 200D 2642",
            "⛹️\u200d♀️": "26F9 FE0F 200D 2640 FE0F",
            "⛹\u200d♀️": "26F9 200D 2640 FE0F",
            "⛹️\u200d♀": "26F9 FE0F 200D 2640",
            "⛹\u200d♀": "26F9 200D 2640",
            "⛹🏻\u200d♀️": "26F9 1F3FB 200D 2640 FE0F",
            "⛹🏻\u200d♀": "26F9 1F3FB 200D 2640",
            "⛹🏼\u200d♀️": "26F9 1F3FC 200D 2640 FE0F",
            "⛹🏼\u200d♀": "26F9 1F3FC 200D 2640",
            "⛹🏽\u200d♀️": "26F9 1F3FD 200D 2640 FE0F",
            "⛹🏽\u200d♀": "26F9 1F3FD 200D 2640",
            "⛹🏾\u200d♀️": "26F9 1F3FE 200D 2640 FE0F",
            "⛹🏾\u200d♀": "26F9 1F3FE 200D 2640",
            "⛹🏿\u200d♀️": "26F9 1F3FF 200D 2640 FE0F",
            "⛹🏿\u200d♀": "26F9 1F3FF 200D 2640",
            "🏋️": "1F3CB FE0F",
            "🏋": "1F3CB",
            "🏋🏻": "1F3CB 1F3FB",
            "🏋🏼": "1F3CB 1F3FC",
            "🏋🏽": "1F3CB 1F3FD",
            "🏋🏾": "1F3CB 1F3FE",
            "🏋🏿": "1F3CB 1F3FF",
            "🏋️\u200d♂️": "1F3CB FE0F 200D 2642 FE0F",
            "🏋\u200d♂️": "1F3CB 200D 2642 FE0F",
            "🏋️\u200d♂": "1F3CB FE0F 200D 2642",
            "🏋\u200d♂": "1F3CB 200D 2642",
            "🏋🏻\u200d♂️": "1F3CB 1F3FB 200D 2642 FE0F",
            "🏋🏻\u200d♂": "1F3CB 1F3FB 200D 2642",
            "🏋🏼\u200d♂️": "1F3CB 1F3FC 200D 2642 FE0F",
            "🏋🏼\u200d♂": "1F3CB 1F3FC 200D 2642",
            "🏋🏽\u200d♂️": "1F3CB 1F3FD 200D 2642 FE0F",
            "🏋🏽\u200d♂": "1F3CB 1F3FD 200D 2642",
            "🏋🏾\u200d♂️": "1F3CB 1F3FE 200D 2642 FE0F",
            "🏋🏾\u200d♂": "1F3CB 1F3FE 200D 2642",
            "🏋🏿\u200d♂️": "1F3CB 1F3FF 200D 2642 FE0F",
            "🏋🏿\u200d♂": "1F3CB 1F3FF 200D 2642",
            "🏋️\u200d♀️": "1F3CB FE0F 200D 2640 FE0F",
            "🏋\u200d♀️": "1F3CB 200D 2640 FE0F",
            "🏋️\u200d♀": "1F3CB FE0F 200D 2640",
            "🏋\u200d♀": "1F3CB 200D 2640",
            "🏋🏻\u200d♀️": "1F3CB 1F3FB 200D 2640 FE0F",
            "🏋🏻\u200d♀": "1F3CB 1F3FB 200D 2640",
            "🏋🏼\u200d♀️": "1F3CB 1F3FC 200D 2640 FE0F",
            "🏋🏼\u200d♀": "1F3CB 1F3FC 200D 2640",
            "🏋🏽\u200d♀️": "1F3CB 1F3FD 200D 2640 FE0F",
            "🏋🏽\u200d♀": "1F3CB 1F3FD 200D 2640",
            "🏋🏾\u200d♀️": "1F3CB 1F3FE 200D 2640 FE0F",
            "🏋🏾\u200d♀": "1F3CB 1F3FE 200D 2640",
            "🏋🏿\u200d♀️": "1F3CB 1F3FF 200D 2640 FE0F",
            "🏋🏿\u200d♀": "1F3CB 1F3FF 200D 2640",
            "🚴": "1F6B4",
            "🚴🏻": "1F6B4 1F3FB",
            "🚴🏼": "1F6B4 1F3FC",
            "🚴🏽": "1F6B4 1F3FD",
            "🚴🏾": "1F6B4 1F3FE",
            "🚴🏿": "1F6B4 1F3FF",
            "🚴\u200d♂️": "1F6B4 200D 2642 FE0F",
            "🚴\u200d♂": "1F6B4 200D 2642",
            "🚴🏻\u200d♂️": "1F6B4 1F3FB 200D 2642 FE0F",
            "🚴🏻\u200d♂": "1F6B4 1F3FB 200D 2642",
            "🚴🏼\u200d♂️": "1F6B4 1F3FC 200D 2642 FE0F",
            "🚴🏼\u200d♂": "1F6B4 1F3FC 200D 2642",
            "🚴🏽\u200d♂️": "1F6B4 1F3FD 200D 2642 FE0F",
            "🚴🏽\u200d♂": "1F6B4 1F3FD 200D 2642",
            "🚴🏾\u200d♂️": "1F6B4 1F3FE 200D 2642 FE0F",
            "🚴🏾\u200d♂": "1F6B4 1F3FE 200D 2642",
            "🚴🏿\u200d♂️": "1F6B4 1F3FF 200D 2642 FE0F",
            "🚴🏿\u200d♂": "1F6B4 1F3FF 200D 2642",
            "🚴\u200d♀️": "1F6B4 200D 2640 FE0F",
            "🚴\u200d♀": "1F6B4 200D 2640",
            "🚴🏻\u200d♀️": "1F6B4 1F3FB 200D 2640 FE0F",
            "🚴🏻\u200d♀": "1F6B4 1F3FB 200D 2640",
            "🚴🏼\u200d♀️": "1F6B4 1F3FC 200D 2640 FE0F",
            "🚴🏼\u200d♀": "1F6B4 1F3FC 200D 2640",
            "🚴🏽\u200d♀️": "1F6B4 1F3FD 200D 2640 FE0F",
            "🚴🏽\u200d♀": "1F6B4 1F3FD 200D 2640",
            "🚴🏾\u200d♀️": "1F6B4 1F3FE 200D 2640 FE0F",
            "🚴🏾\u200d♀": "1F6B4 1F3FE 200D 2640",
            "🚴🏿\u200d♀️": "1F6B4 1F3FF 200D 2640 FE0F",
            "🚴🏿\u200d♀": "1F6B4 1F3FF 200D 2640",
            "🚵": "1F6B5",
            "🚵🏻": "1F6B5 1F3FB",
            "🚵🏼": "1F6B5 1F3FC",
            "🚵🏽": "1F6B5 1F3FD",
            "🚵🏾": "1F6B5 1F3FE",
            "🚵🏿": "1F6B5 1F3FF",
            "🚵\u200d♂️": "1F6B5 200D 2642 FE0F",
            "🚵\u200d♂": "1F6B5 200D 2642",
            "🚵🏻\u200d♂️": "1F6B5 1F3FB 200D 2642 FE0F",
            "🚵🏻\u200d♂": "1F6B5 1F3FB 200D 2642",
            "🚵🏼\u200d♂️": "1F6B5 1F3FC 200D 2642 FE0F",
            "🚵🏼\u200d♂": "1F6B5 1F3FC 200D 2642",
            "🚵🏽\u200d♂️": "1F6B5 1F3FD 200D 2642 FE0F",
            "🚵🏽\u200d♂": "1F6B5 1F3FD 200D 2642",
            "🚵🏾\u200d♂️": "1F6B5 1F3FE 200D 2642 FE0F",
            "🚵🏾\u200d♂": "1F6B5 1F3FE 200D 2642",
            "🚵🏿\u200d♂️": "1F6B5 1F3FF 200D 2642 FE0F",
            "🚵🏿\u200d♂": "1F6B5 1F3FF 200D 2642",
            "🚵\u200d♀️": "1F6B5 200D 2640 FE0F",
            "🚵\u200d♀": "1F6B5 200D 2640",
            "🚵🏻\u200d♀️": "1F6B5 1F3FB 200D 2640 FE0F",
            "🚵🏻\u200d♀": "1F6B5 1F3FB 200D 2640",
            "🚵🏼\u200d♀️": "1F6B5 1F3FC 200D 2640 FE0F",
            "🚵🏼\u200d♀": "1F6B5 1F3FC 200D 2640",
            "🚵🏽\u200d♀️": "1F6B5 1F3FD 200D 2640 FE0F",
            "🚵🏽\u200d♀": "1F6B5 1F3FD 200D 2640",
            "🚵🏾\u200d♀️": "1F6B5 1F3FE 200D 2640 FE0F",
            "🚵🏾\u200d♀": "1F6B5 1F3FE 200D 2640",
            "🚵🏿\u200d♀️": "1F6B5 1F3FF 200D 2640 FE0F",
            "🚵🏿\u200d♀": "1F6B5 1F3FF 200D 2640",
            "🤸": "1F938",
            "🤸🏻": "1F938 1F3FB",
            "🤸🏼": "1F938 1F3FC",
            "🤸🏽": "1F938 1F3FD",
            "🤸🏾": "1F938 1F3FE",
            "🤸🏿": "1F938 1F3FF",
            "🤸\u200d♂️": "1F938 200D 2642 FE0F",
            "🤸\u200d♂": "1F938 200D 2642",
            "🤸🏻\u200d♂️": "1F938 1F3FB 200D 2642 FE0F",
            "🤸🏻\u200d♂": "1F938 1F3FB 200D 2642",
            "🤸🏼\u200d♂️": "1F938 1F3FC 200D 2642 FE0F",
            "🤸🏼\u200d♂": "1F938 1F3FC 200D 2642",
            "🤸🏽\u200d♂️": "1F938 1F3FD 200D 2642 FE0F",
            "🤸🏽\u200d♂": "1F938 1F3FD 200D 2642",
            "🤸🏾\u200d♂️": "1F938 1F3FE 200D 2642 FE0F",
            "🤸🏾\u200d♂": "1F938 1F3FE 200D 2642",
            "🤸🏿\u200d♂️": "1F938 1F3FF 200D 2642 FE0F",
            "🤸🏿\u200d♂": "1F938 1F3FF 200D 2642",
            "🤸\u200d♀️": "1F938 200D 2640 FE0F",
            "🤸\u200d♀": "1F938 200D 2640",
            "🤸🏻\u200d♀️": "1F938 1F3FB 200D 2640 FE0F",
            "🤸🏻\u200d♀": "1F938 1F3FB 200D 2640",
            "🤸🏼\u200d♀️": "1F938 1F3FC 200D 2640 FE0F",
            "🤸🏼\u200d♀": "1F938 1F3FC 200D 2640",
            "🤸🏽\u200d♀️": "1F938 1F3FD 200D 2640 FE0F",
            "🤸🏽\u200d♀": "1F938 1F3FD 200D 2640",
            "🤸🏾\u200d♀️": "1F938 1F3FE 200D 2640 FE0F",
            "🤸🏾\u200d♀": "1F938 1F3FE 200D 2640",
            "🤸🏿\u200d♀️": "1F938 1F3FF 200D 2640 FE0F",
            "🤸🏿\u200d♀": "1F938 1F3FF 200D 2640",
            "🤼": "1F93C",
            "🤼\u200d♂️": "1F93C 200D 2642 FE0F",
            "🤼\u200d♂": "1F93C 200D 2642",
            "🤼\u200d♀️": "1F93C 200D 2640 FE0F",
            "🤼\u200d♀": "1F93C 200D 2640",
            "🤽": "1F93D",
            "🤽🏻": "1F93D 1F3FB",
            "🤽🏼": "1F93D 1F3FC",
            "🤽🏽": "1F93D 1F3FD",
            "🤽🏾": "1F93D 1F3FE",
            "🤽🏿": "1F93D 1F3FF",
            "🤽\u200d♂️": "1F93D 200D 2642 FE0F",
            "🤽\u200d♂": "1F93D 200D 2642",
            "🤽🏻\u200d♂️": "1F93D 1F3FB 200D 2642 FE0F",
            "🤽🏻\u200d♂": "1F93D 1F3FB 200D 2642",
            "🤽🏼\u200d♂️": "1F93D 1F3FC 200D 2642 FE0F",
            "🤽🏼\u200d♂": "1F93D 1F3FC 200D 2642",
            "🤽🏽\u200d♂️": "1F93D 1F3FD 200D 2642 FE0F",
            "🤽🏽\u200d♂": "1F93D 1F3FD 200D 2642",
            "🤽🏾\u200d♂️": "1F93D 1F3FE 200D 2642 FE0F",
            "🤽🏾\u200d♂": "1F93D 1F3FE 200D 2642",
            "🤽🏿\u200d♂️": "1F93D 1F3FF 200D 2642 FE0F",
            "🤽🏿\u200d♂": "1F93D 1F3FF 200D 2642",
            "🤽\u200d♀️": "1F93D 200D 2640 FE0F",
            "🤽\u200d♀": "1F93D 200D 2640",
            "🤽🏻\u200d♀️": "1F93D 1F3FB 200D 2640 FE0F",
            "🤽🏻\u200d♀": "1F93D 1F3FB 200D 2640",
            "🤽🏼\u200d♀️": "1F93D 1F3FC 200D 2640 FE0F",
            "🤽🏼\u200d♀": "1F93D 1F3FC 200D 2640",
            "🤽🏽\u200d♀️": "1F93D 1F3FD 200D 2640 FE0F",
            "🤽🏽\u200d♀": "1F93D 1F3FD 200D 2640",
            "🤽🏾\u200d♀️": "1F93D 1F3FE 200D 2640 FE0F",
            "🤽🏾\u200d♀": "1F93D 1F3FE 200D 2640",
            "🤽🏿\u200d♀️": "1F93D 1F3FF 200D 2640 FE0F",
            "🤽🏿\u200d♀": "1F93D 1F3FF 200D 2640",
            "🤾": "1F93E",
            "🤾🏻": "1F93E 1F3FB",
            "🤾🏼": "1F93E 1F3FC",
            "🤾🏽": "1F93E 1F3FD",
            "🤾🏾": "1F93E 1F3FE",
            "🤾🏿": "1F93E 1F3FF",
            "🤾\u200d♂️": "1F93E 200D 2642 FE0F",
            "🤾\u200d♂": "1F93E 200D 2642",
            "🤾🏻\u200d♂️": "1F93E 1F3FB 200D 2642 FE0F",
            "🤾🏻\u200d♂": "1F93E 1F3FB 200D 2642",
            "🤾🏼\u200d♂️": "1F93E 1F3FC 200D 2642 FE0F",
            "🤾🏼\u200d♂": "1F93E 1F3FC 200D 2642",
            "🤾🏽\u200d♂️": "1F93E 1F3FD 200D 2642 FE0F",
            "🤾🏽\u200d♂": "1F93E 1F3FD 200D 2642",
            "🤾🏾\u200d♂️": "1F93E 1F3FE 200D 2642 FE0F",
            "🤾🏾\u200d♂": "1F93E 1F3FE 200D 2642",
            "🤾🏿\u200d♂️": "1F93E 1F3FF 200D 2642 FE0F",
            "🤾🏿\u200d♂": "1F93E 1F3FF 200D 2642",
            "🤾\u200d♀️": "1F93E 200D 2640 FE0F",
            "🤾\u200d♀": "1F93E 200D 2640",
            "🤾🏻\u200d♀️": "1F93E 1F3FB 200D 2640 FE0F",
            "🤾🏻\u200d♀": "1F93E 1F3FB 200D 2640",
            "🤾🏼\u200d♀️": "1F93E 1F3FC 200D 2640 FE0F",
            "🤾🏼\u200d♀": "1F93E 1F3FC 200D 2640",
            "🤾🏽\u200d♀️": "1F93E 1F3FD 200D 2640 FE0F",
            "🤾🏽\u200d♀": "1F93E 1F3FD 200D 2640",
            "🤾🏾\u200d♀️": "1F93E 1F3FE 200D 2640 FE0F",
            "🤾🏾\u200d♀": "1F93E 1F3FE 200D 2640",
            "🤾🏿\u200d♀️": "1F93E 1F3FF 200D 2640 FE0F",
            "🤾🏿\u200d♀": "1F93E 1F3FF 200D 2640",
            "🤹": "1F939",
            "🤹🏻": "1F939 1F3FB",
            "🤹🏼": "1F939 1F3FC",
            "🤹🏽": "1F939 1F3FD",
            "🤹🏾": "1F939 1F3FE",
            "🤹🏿": "1F939 1F3FF",
            "🤹\u200d♂️": "1F939 200D 2642 FE0F",
            "🤹\u200d♂": "1F939 200D 2642",
            "🤹🏻\u200d♂️": "1F939 1F3FB 200D 2642 FE0F",
            "🤹🏻\u200d♂": "1F939 1F3FB 200D 2642",
            "🤹🏼\u200d♂️": "1F939 1F3FC 200D 2642 FE0F",
            "🤹🏼\u200d♂": "1F939 1F3FC 200D 2642",
            "🤹🏽\u200d♂️": "1F939 1F3FD 200D 2642 FE0F",
            "🤹🏽\u200d♂": "1F939 1F3FD 200D 2642",
            "🤹🏾\u200d♂️": "1F939 1F3FE 200D 2642 FE0F",
            "🤹🏾\u200d♂": "1F939 1F3FE 200D 2642",
            "🤹🏿\u200d♂️": "1F939 1F3FF 200D 2642 FE0F",
            "🤹🏿\u200d♂": "1F939 1F3FF 200D 2642",
            "🤹\u200d♀️": "1F939 200D 2640 FE0F",
            "🤹\u200d♀": "1F939 200D 2640",
            "🤹🏻\u200d♀️": "1F939 1F3FB 200D 2640 FE0F",
            "🤹🏻\u200d♀": "1F939 1F3FB 200D 2640",
            "🤹🏼\u200d♀️": "1F939 1F3FC 200D 2640 FE0F",
            "🤹🏼\u200d♀": "1F939 1F3FC 200D 2640",
            "🤹🏽\u200d♀️": "1F939 1F3FD 200D 2640 FE0F",
            "🤹🏽\u200d♀": "1F939 1F3FD 200D 2640",
            "🤹🏾\u200d♀️": "1F939 1F3FE 200D 2640 FE0F",
            "🤹🏾\u200d♀": "1F939 1F3FE 200D 2640",
            "🤹🏿\u200d♀️": "1F939 1F3FF 200D 2640 FE0F",
            "🤹🏿\u200d♀": "1F939 1F3FF 200D 2640",
            "🧘": "1F9D8",
            "🧘🏻": "1F9D8 1F3FB",
            "🧘🏼": "1F9D8 1F3FC",
            "🧘🏽": "1F9D8 1F3FD",
            "🧘🏾": "1F9D8 1F3FE",
            "🧘🏿": "1F9D8 1F3FF",
            "🧘\u200d♂️": "1F9D8 200D 2642 FE0F",
            "🧘\u200d♂": "1F9D8 200D 2642",
            "🧘🏻\u200d♂️": "1F9D8 1F3FB 200D 2642 FE0F",
            "🧘🏻\u200d♂": "1F9D8 1F3FB 200D 2642",
            "🧘🏼\u200d♂️": "1F9D8 1F3FC 200D 2642 FE0F",
            "🧘🏼\u200d♂": "1F9D8 1F3FC 200D 2642",
            "🧘🏽\u200d♂️": "1F9D8 1F3FD 200D 2642 FE0F",
            "🧘🏽\u200d♂": "1F9D8 1F3FD 200D 2642",
            "🧘🏾\u200d♂️": "1F9D8 1F3FE 200D 2642 FE0F",
            "🧘🏾\u200d♂": "1F9D8 1F3FE 200D 2642",
            "🧘🏿\u200d♂️": "1F9D8 1F3FF 200D 2642 FE0F",
            "🧘🏿\u200d♂": "1F9D8 1F3FF 200D 2642",
            "🧘\u200d♀️": "1F9D8 200D 2640 FE0F",
            "🧘\u200d♀": "1F9D8 200D 2640",
            "🧘🏻\u200d♀️": "1F9D8 1F3FB 200D 2640 FE0F",
            "🧘🏻\u200d♀": "1F9D8 1F3FB 200D 2640",
            "🧘🏼\u200d♀️": "1F9D8 1F3FC 200D 2640 FE0F",
            "🧘🏼\u200d♀": "1F9D8 1F3FC 200D 2640",
            "🧘🏽\u200d♀️": "1F9D8 1F3FD 200D 2640 FE0F",
            "🧘🏽\u200d♀": "1F9D8 1F3FD 200D 2640",
            "🧘🏾\u200d♀️": "1F9D8 1F3FE 200D 2640 FE0F",
            "🧘🏾\u200d♀": "1F9D8 1F3FE 200D 2640",
            "🧘🏿\u200d♀️": "1F9D8 1F3FF 200D 2640 FE0F",
            "🧘🏿\u200d♀": "1F9D8 1F3FF 200D 2640",
            "🛀": "1F6C0",
            "🛀🏻": "1F6C0 1F3FB",
            "🛀🏼": "1F6C0 1F3FC",
            "🛀🏽": "1F6C0 1F3FD",
            "🛀🏾": "1F6C0 1F3FE",
            "🛀🏿": "1F6C0 1F3FF",
            "🛌": "1F6CC",
            "🛌🏻": "1F6CC 1F3FB",
            "🛌🏼": "1F6CC 1F3FC",
            "🛌🏽": "1F6CC 1F3FD",
            "🛌🏾": "1F6CC 1F3FE",
            "🛌🏿": "1F6CC 1F3FF",
            "🧑\u200d🤝\u200d🧑": "1F9D1 200D 1F91D 200D 1F9D1",
            "🧑🏻\u200d🤝\u200d🧑🏻": "1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FB",
            "🧑🏻\u200d🤝\u200d🧑🏼": "1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FC",
            "🧑🏻\u200d🤝\u200d🧑🏽": "1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FD",
            "🧑🏻\u200d🤝\u200d🧑🏾": "1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FE",
            "🧑🏻\u200d🤝\u200d🧑🏿": "1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FF",
            "🧑🏼\u200d🤝\u200d🧑🏻": "1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FB",
            "🧑🏼\u200d🤝\u200d🧑🏼": "1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FC",
            "🧑🏼\u200d🤝\u200d🧑🏽": "1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FD",
            "🧑🏼\u200d🤝\u200d🧑🏾": "1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FE",
            "🧑🏼\u200d🤝\u200d🧑🏿": "1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FF",
            "🧑🏽\u200d🤝\u200d🧑🏻": "1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FB",
            "🧑🏽\u200d🤝\u200d🧑🏼": "1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FC",
            "🧑🏽\u200d🤝\u200d🧑🏽": "1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FD",
            "🧑🏽\u200d🤝\u200d🧑🏾": "1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FE",
            "🧑🏽\u200d🤝\u200d🧑🏿": "1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FF",
            "🧑🏾\u200d🤝\u200d🧑🏻": "1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FB",
            "🧑🏾\u200d🤝\u200d🧑🏼": "1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FC",
            "🧑🏾\u200d🤝\u200d🧑🏽": "1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FD",
            "🧑🏾\u200d🤝\u200d🧑🏾": "1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FE",
            "🧑🏾\u200d🤝\u200d🧑🏿": "1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FF",
            "🧑🏿\u200d🤝\u200d🧑🏻": "1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FB",
            "🧑🏿\u200d🤝\u200d🧑🏼": "1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FC",
            "🧑🏿\u200d🤝\u200d🧑🏽": "1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FD",
            "🧑🏿\u200d🤝\u200d🧑🏾": "1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FE",
            "🧑🏿\u200d🤝\u200d🧑🏿": "1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FF",
            "👭": "1F46D",
            "👭🏻": "1F46D 1F3FB",
            "👩🏻\u200d🤝\u200d👩🏼": "1F469 1F3FB 200D 1F91D 200D 1F469 1F3FC",
            "👩🏻\u200d🤝\u200d👩🏽": "1F469 1F3FB 200D 1F91D 200D 1F469 1F3FD",
            "👩🏻\u200d🤝\u200d👩🏾": "1F469 1F3FB 200D 1F91D 200D 1F469 1F3FE",
            "👩🏻\u200d🤝\u200d👩🏿": "1F469 1F3FB 200D 1F91D 200D 1F469 1F3FF",
            "👩🏼\u200d🤝\u200d👩🏻": "1F469 1F3FC 200D 1F91D 200D 1F469 1F3FB",
            "👭🏼": "1F46D 1F3FC",
            "👩🏼\u200d🤝\u200d👩🏽": "1F469 1F3FC 200D 1F91D 200D 1F469 1F3FD",
            "👩🏼\u200d🤝\u200d👩🏾": "1F469 1F3FC 200D 1F91D 200D 1F469 1F3FE",
            "👩🏼\u200d🤝\u200d👩🏿": "1F469 1F3FC 200D 1F91D 200D 1F469 1F3FF",
            "👩🏽\u200d🤝\u200d👩🏻": "1F469 1F3FD 200D 1F91D 200D 1F469 1F3FB",
            "👩🏽\u200d🤝\u200d👩🏼": "1F469 1F3FD 200D 1F91D 200D 1F469 1F3FC",
            "👭🏽": "1F46D 1F3FD",
            "👩🏽\u200d🤝\u200d👩🏾": "1F469 1F3FD 200D 1F91D 200D 1F469 1F3FE",
            "👩🏽\u200d🤝\u200d👩🏿": "1F469 1F3FD 200D 1F91D 200D 1F469 1F3FF",
            "👩🏾\u200d🤝\u200d👩🏻": "1F469 1F3FE 200D 1F91D 200D 1F469 1F3FB",
            "👩🏾\u200d🤝\u200d👩🏼": "1F469 1F3FE 200D 1F91D 200D 1F469 1F3FC",
            "👩🏾\u200d🤝\u200d👩🏽": "1F469 1F3FE 200D 1F91D 200D 1F469 1F3FD",
            "👭🏾": "1F46D 1F3FE",
            "👩🏾\u200d🤝\u200d👩🏿": "1F469 1F3FE 200D 1F91D 200D 1F469 1F3FF",
            "👩🏿\u200d🤝\u200d👩🏻": "1F469 1F3FF 200D 1F91D 200D 1F469 1F3FB",
            "👩🏿\u200d🤝\u200d👩🏼": "1F469 1F3FF 200D 1F91D 200D 1F469 1F3FC",
            "👩🏿\u200d🤝\u200d👩🏽": "1F469 1F3FF 200D 1F91D 200D 1F469 1F3FD",
            "👩🏿\u200d🤝\u200d👩🏾": "1F469 1F3FF 200D 1F91D 200D 1F469 1F3FE",
            "👭🏿": "1F46D 1F3FF",
            "👫": "1F46B",
            "👫🏻": "1F46B 1F3FB",
            "👩🏻\u200d🤝\u200d👨🏼": "1F469 1F3FB 200D 1F91D 200D 1F468 1F3FC",
            "👩🏻\u200d🤝\u200d👨🏽": "1F469 1F3FB 200D 1F91D 200D 1F468 1F3FD",
            "👩🏻\u200d🤝\u200d👨🏾": "1F469 1F3FB 200D 1F91D 200D 1F468 1F3FE",
            "👩🏻\u200d🤝\u200d👨🏿": "1F469 1F3FB 200D 1F91D 200D 1F468 1F3FF",
            "👩🏼\u200d🤝\u200d👨🏻": "1F469 1F3FC 200D 1F91D 200D 1F468 1F3FB",
            "👫🏼": "1F46B 1F3FC",
            "👩🏼\u200d🤝\u200d👨🏽": "1F469 1F3FC 200D 1F91D 200D 1F468 1F3FD",
            "👩🏼\u200d🤝\u200d👨🏾": "1F469 1F3FC 200D 1F91D 200D 1F468 1F3FE",
            "👩🏼\u200d🤝\u200d👨🏿": "1F469 1F3FC 200D 1F91D 200D 1F468 1F3FF",
            "👩🏽\u200d🤝\u200d👨🏻": "1F469 1F3FD 200D 1F91D 200D 1F468 1F3FB",
            "👩🏽\u200d🤝\u200d👨🏼": "1F469 1F3FD 200D 1F91D 200D 1F468 1F3FC",
            "👫🏽": "1F46B 1F3FD",
            "👩🏽\u200d🤝\u200d👨🏾": "1F469 1F3FD 200D 1F91D 200D 1F468 1F3FE",
            "👩🏽\u200d🤝\u200d👨🏿": "1F469 1F3FD 200D 1F91D 200D 1F468 1F3FF",
            "👩🏾\u200d🤝\u200d👨🏻": "1F469 1F3FE 200D 1F91D 200D 1F468 1F3FB",
            "👩🏾\u200d🤝\u200d👨🏼": "1F469 1F3FE 200D 1F91D 200D 1F468 1F3FC",
            "👩🏾\u200d🤝\u200d👨🏽": "1F469 1F3FE 200D 1F91D 200D 1F468 1F3FD",
            "👫🏾": "1F46B 1F3FE",
            "👩🏾\u200d🤝\u200d👨🏿": "1F469 1F3FE 200D 1F91D 200D 1F468 1F3FF",
            "👩🏿\u200d🤝\u200d👨🏻": "1F469 1F3FF 200D 1F91D 200D 1F468 1F3FB",
            "👩🏿\u200d🤝\u200d👨🏼": "1F469 1F3FF 200D 1F91D 200D 1F468 1F3FC",
            "👩🏿\u200d🤝\u200d👨🏽": "1F469 1F3FF 200D 1F91D 200D 1F468 1F3FD",
            "👩🏿\u200d🤝\u200d👨🏾": "1F469 1F3FF 200D 1F91D 200D 1F468 1F3FE",
            "👫🏿": "1F46B 1F3FF",
            "👬": "1F46C",
            "👬🏻": "1F46C 1F3FB",
            "👨🏻\u200d🤝\u200d👨🏼": "1F468 1F3FB 200D 1F91D 200D 1F468 1F3FC",
            "👨🏻\u200d🤝\u200d👨🏽": "1F468 1F3FB 200D 1F91D 200D 1F468 1F3FD",
            "👨🏻\u200d🤝\u200d👨🏾": "1F468 1F3FB 200D 1F91D 200D 1F468 1F3FE",
            "👨🏻\u200d🤝\u200d👨🏿": "1F468 1F3FB 200D 1F91D 200D 1F468 1F3FF",
            "👨🏼\u200d🤝\u200d👨🏻": "1F468 1F3FC 200D 1F91D 200D 1F468 1F3FB",
            "👬🏼": "1F46C 1F3FC",
            "👨🏼\u200d🤝\u200d👨🏽": "1F468 1F3FC 200D 1F91D 200D 1F468 1F3FD",
            "👨🏼\u200d🤝\u200d👨🏾": "1F468 1F3FC 200D 1F91D 200D 1F468 1F3FE",
            "👨🏼\u200d🤝\u200d👨🏿": "1F468 1F3FC 200D 1F91D 200D 1F468 1F3FF",
            "👨🏽\u200d🤝\u200d👨🏻": "1F468 1F3FD 200D 1F91D 200D 1F468 1F3FB",
            "👨🏽\u200d🤝\u200d👨🏼": "1F468 1F3FD 200D 1F91D 200D 1F468 1F3FC",
            "👬🏽": "1F46C 1F3FD",
            "👨🏽\u200d🤝\u200d👨🏾": "1F468 1F3FD 200D 1F91D 200D 1F468 1F3FE",
            "👨🏽\u200d🤝\u200d👨🏿": "1F468 1F3FD 200D 1F91D 200D 1F468 1F3FF",
            "👨🏾\u200d🤝\u200d👨🏻": "1F468 1F3FE 200D 1F91D 200D 1F468 1F3FB",
            "👨🏾\u200d🤝\u200d👨🏼": "1F468 1F3FE 200D 1F91D 200D 1F468 1F3FC",
            "👨🏾\u200d🤝\u200d👨🏽": "1F468 1F3FE 200D 1F91D 200D 1F468 1F3FD",
            "👬🏾": "1F46C 1F3FE",
            "👨🏾\u200d🤝\u200d👨🏿": "1F468 1F3FE 200D 1F91D 200D 1F468 1F3FF",
            "👨🏿\u200d🤝\u200d👨🏻": "1F468 1F3FF 200D 1F91D 200D 1F468 1F3FB",
            "👨🏿\u200d🤝\u200d👨🏼": "1F468 1F3FF 200D 1F91D 200D 1F468 1F3FC",
            "👨🏿\u200d🤝\u200d👨🏽": "1F468 1F3FF 200D 1F91D 200D 1F468 1F3FD",
            "👨🏿\u200d🤝\u200d👨🏾": "1F468 1F3FF 200D 1F91D 200D 1F468 1F3FE",
            "👬🏿": "1F46C 1F3FF",
            "💏": "1F48F",
            "💏🏻": "1F48F 1F3FB",
            "💏🏼": "1F48F 1F3FC",
            "💏🏽": "1F48F 1F3FD",
            "💏🏾": "1F48F 1F3FE",
            "💏🏿": "1F48F 1F3FF",
            "🧑🏻\u200d❤️\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏻\u200d❤\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FB 200D 2764 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏻\u200d❤️\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏻\u200d❤\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FB 200D 2764 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏻\u200d❤️\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏻\u200d❤\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FB 200D 2764 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏻\u200d❤️\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏻\u200d❤\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FB 200D 2764 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏼\u200d❤️\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏼\u200d❤\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FC 200D 2764 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏼\u200d❤️\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏼\u200d❤\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FC 200D 2764 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏼\u200d❤️\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏼\u200d❤\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FC 200D 2764 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏼\u200d❤️\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏼\u200d❤\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FC 200D 2764 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏽\u200d❤️\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏽\u200d❤\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FD 200D 2764 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏽\u200d❤️\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏽\u200d❤\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FD 200D 2764 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏽\u200d❤️\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏽\u200d❤\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FD 200D 2764 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏽\u200d❤️\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏽\u200d❤\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FD 200D 2764 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏾\u200d❤️\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏾\u200d❤\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FE 200D 2764 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏾\u200d❤️\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏾\u200d❤\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FE 200D 2764 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏾\u200d❤️\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏾\u200d❤\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FE 200D 2764 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏾\u200d❤️\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏾\u200d❤\u200d💋\u200d🧑🏿":
              "1F9D1 1F3FE 200D 2764 200D 1F48B 200D 1F9D1 1F3FF",
            "🧑🏿\u200d❤️\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏿\u200d❤\u200d💋\u200d🧑🏻":
              "1F9D1 1F3FF 200D 2764 200D 1F48B 200D 1F9D1 1F3FB",
            "🧑🏿\u200d❤️\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏿\u200d❤\u200d💋\u200d🧑🏼":
              "1F9D1 1F3FF 200D 2764 200D 1F48B 200D 1F9D1 1F3FC",
            "🧑🏿\u200d❤️\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏿\u200d❤\u200d💋\u200d🧑🏽":
              "1F9D1 1F3FF 200D 2764 200D 1F48B 200D 1F9D1 1F3FD",
            "🧑🏿\u200d❤️\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F9D1 1F3FE",
            "🧑🏿\u200d❤\u200d💋\u200d🧑🏾":
              "1F9D1 1F3FF 200D 2764 200D 1F48B 200D 1F9D1 1F3FE",
            "👩\u200d❤️\u200d💋\u200d👨":
              "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468",
            "👩\u200d❤\u200d💋\u200d👨":
              "1F469 200D 2764 200D 1F48B 200D 1F468",
            "👩🏻\u200d❤️\u200d💋\u200d👨🏻":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👩🏻\u200d❤\u200d💋\u200d👨🏻":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👩🏻\u200d❤️\u200d💋\u200d👨🏼":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👩🏻\u200d❤\u200d💋\u200d👨🏼":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👩🏻\u200d❤️\u200d💋\u200d👨🏽":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👩🏻\u200d❤\u200d💋\u200d👨🏽":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👩🏻\u200d❤️\u200d💋\u200d👨🏾":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👩🏻\u200d❤\u200d💋\u200d👨🏾":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👩🏻\u200d❤️\u200d💋\u200d👨🏿":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👩🏻\u200d❤\u200d💋\u200d👨🏿":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👩🏼\u200d❤️\u200d💋\u200d👨🏻":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👩🏼\u200d❤\u200d💋\u200d👨🏻":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👩🏼\u200d❤️\u200d💋\u200d👨🏼":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👩🏼\u200d❤\u200d💋\u200d👨🏼":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👩🏼\u200d❤️\u200d💋\u200d👨🏽":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👩🏼\u200d❤\u200d💋\u200d👨🏽":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👩🏼\u200d❤️\u200d💋\u200d👨🏾":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👩🏼\u200d❤\u200d💋\u200d👨🏾":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👩🏼\u200d❤️\u200d💋\u200d👨🏿":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👩🏼\u200d❤\u200d💋\u200d👨🏿":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👩🏽\u200d❤️\u200d💋\u200d👨🏻":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👩🏽\u200d❤\u200d💋\u200d👨🏻":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👩🏽\u200d❤️\u200d💋\u200d👨🏼":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👩🏽\u200d❤\u200d💋\u200d👨🏼":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👩🏽\u200d❤️\u200d💋\u200d👨🏽":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👩🏽\u200d❤\u200d💋\u200d👨🏽":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👩🏽\u200d❤️\u200d💋\u200d👨🏾":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👩🏽\u200d❤\u200d💋\u200d👨🏾":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👩🏽\u200d❤️\u200d💋\u200d👨🏿":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👩🏽\u200d❤\u200d💋\u200d👨🏿":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👩🏾\u200d❤️\u200d💋\u200d👨🏻":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👩🏾\u200d❤\u200d💋\u200d👨🏻":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👩🏾\u200d❤️\u200d💋\u200d👨🏼":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👩🏾\u200d❤\u200d💋\u200d👨🏼":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👩🏾\u200d❤️\u200d💋\u200d👨🏽":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👩🏾\u200d❤\u200d💋\u200d👨🏽":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👩🏾\u200d❤️\u200d💋\u200d👨🏾":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👩🏾\u200d❤\u200d💋\u200d👨🏾":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👩🏾\u200d❤️\u200d💋\u200d👨🏿":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👩🏾\u200d❤\u200d💋\u200d👨🏿":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👩🏿\u200d❤️\u200d💋\u200d👨🏻":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👩🏿\u200d❤\u200d💋\u200d👨🏻":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👩🏿\u200d❤️\u200d💋\u200d👨🏼":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👩🏿\u200d❤\u200d💋\u200d👨🏼":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👩🏿\u200d❤️\u200d💋\u200d👨🏽":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👩🏿\u200d❤\u200d💋\u200d👨🏽":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👩🏿\u200d❤️\u200d💋\u200d👨🏾":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👩🏿\u200d❤\u200d💋\u200d👨🏾":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👩🏿\u200d❤️\u200d💋\u200d👨🏿":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👩🏿\u200d❤\u200d💋\u200d👨🏿":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👨\u200d❤️\u200d💋\u200d👨":
              "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468",
            "👨\u200d❤\u200d💋\u200d👨":
              "1F468 200D 2764 200D 1F48B 200D 1F468",
            "👨🏻\u200d❤️\u200d💋\u200d👨🏻":
              "1F468 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👨🏻\u200d❤\u200d💋\u200d👨🏻":
              "1F468 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👨🏻\u200d❤️\u200d💋\u200d👨🏼":
              "1F468 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👨🏻\u200d❤\u200d💋\u200d👨🏼":
              "1F468 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👨🏻\u200d❤️\u200d💋\u200d👨🏽":
              "1F468 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👨🏻\u200d❤\u200d💋\u200d👨🏽":
              "1F468 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👨🏻\u200d❤️\u200d💋\u200d👨🏾":
              "1F468 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👨🏻\u200d❤\u200d💋\u200d👨🏾":
              "1F468 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👨🏻\u200d❤️\u200d💋\u200d👨🏿":
              "1F468 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👨🏻\u200d❤\u200d💋\u200d👨🏿":
              "1F468 1F3FB 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👨🏼\u200d❤️\u200d💋\u200d👨🏻":
              "1F468 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👨🏼\u200d❤\u200d💋\u200d👨🏻":
              "1F468 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👨🏼\u200d❤️\u200d💋\u200d👨🏼":
              "1F468 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👨🏼\u200d❤\u200d💋\u200d👨🏼":
              "1F468 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👨🏼\u200d❤️\u200d💋\u200d👨🏽":
              "1F468 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👨🏼\u200d❤\u200d💋\u200d👨🏽":
              "1F468 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👨🏼\u200d❤️\u200d💋\u200d👨🏾":
              "1F468 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👨🏼\u200d❤\u200d💋\u200d👨🏾":
              "1F468 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👨🏼\u200d❤️\u200d💋\u200d👨🏿":
              "1F468 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👨🏼\u200d❤\u200d💋\u200d👨🏿":
              "1F468 1F3FC 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👨🏽\u200d❤️\u200d💋\u200d👨🏻":
              "1F468 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👨🏽\u200d❤\u200d💋\u200d👨🏻":
              "1F468 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👨🏽\u200d❤️\u200d💋\u200d👨🏼":
              "1F468 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👨🏽\u200d❤\u200d💋\u200d👨🏼":
              "1F468 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👨🏽\u200d❤️\u200d💋\u200d👨🏽":
              "1F468 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👨🏽\u200d❤\u200d💋\u200d👨🏽":
              "1F468 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👨🏽\u200d❤️\u200d💋\u200d👨🏾":
              "1F468 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👨🏽\u200d❤\u200d💋\u200d👨🏾":
              "1F468 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👨🏽\u200d❤️\u200d💋\u200d👨🏿":
              "1F468 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👨🏽\u200d❤\u200d💋\u200d👨🏿":
              "1F468 1F3FD 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👨🏾\u200d❤️\u200d💋\u200d👨🏻":
              "1F468 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👨🏾\u200d❤\u200d💋\u200d👨🏻":
              "1F468 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👨🏾\u200d❤️\u200d💋\u200d👨🏼":
              "1F468 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👨🏾\u200d❤\u200d💋\u200d👨🏼":
              "1F468 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👨🏾\u200d❤️\u200d💋\u200d👨🏽":
              "1F468 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👨🏾\u200d❤\u200d💋\u200d👨🏽":
              "1F468 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👨🏾\u200d❤️\u200d💋\u200d👨🏾":
              "1F468 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👨🏾\u200d❤\u200d💋\u200d👨🏾":
              "1F468 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👨🏾\u200d❤️\u200d💋\u200d👨🏿":
              "1F468 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👨🏾\u200d❤\u200d💋\u200d👨🏿":
              "1F468 1F3FE 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👨🏿\u200d❤️\u200d💋\u200d👨🏻":
              "1F468 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FB",
            "👨🏿\u200d❤\u200d💋\u200d👨🏻":
              "1F468 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FB",
            "👨🏿\u200d❤️\u200d💋\u200d👨🏼":
              "1F468 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FC",
            "👨🏿\u200d❤\u200d💋\u200d👨🏼":
              "1F468 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FC",
            "👨🏿\u200d❤️\u200d💋\u200d👨🏽":
              "1F468 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FD",
            "👨🏿\u200d❤\u200d💋\u200d👨🏽":
              "1F468 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FD",
            "👨🏿\u200d❤️\u200d💋\u200d👨🏾":
              "1F468 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FE",
            "👨🏿\u200d❤\u200d💋\u200d👨🏾":
              "1F468 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FE",
            "👨🏿\u200d❤️\u200d💋\u200d👨🏿":
              "1F468 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F468 1F3FF",
            "👨🏿\u200d❤\u200d💋\u200d👨🏿":
              "1F468 1F3FF 200D 2764 200D 1F48B 200D 1F468 1F3FF",
            "👩\u200d❤️\u200d💋\u200d👩":
              "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469",
            "👩\u200d❤\u200d💋\u200d👩":
              "1F469 200D 2764 200D 1F48B 200D 1F469",
            "👩🏻\u200d❤️\u200d💋\u200d👩🏻":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FB",
            "👩🏻\u200d❤\u200d💋\u200d👩🏻":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F469 1F3FB",
            "👩🏻\u200d❤️\u200d💋\u200d👩🏼":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FC",
            "👩🏻\u200d❤\u200d💋\u200d👩🏼":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F469 1F3FC",
            "👩🏻\u200d❤️\u200d💋\u200d👩🏽":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FD",
            "👩🏻\u200d❤\u200d💋\u200d👩🏽":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F469 1F3FD",
            "👩🏻\u200d❤️\u200d💋\u200d👩🏾":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FE",
            "👩🏻\u200d❤\u200d💋\u200d👩🏾":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F469 1F3FE",
            "👩🏻\u200d❤️\u200d💋\u200d👩🏿":
              "1F469 1F3FB 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FF",
            "👩🏻\u200d❤\u200d💋\u200d👩🏿":
              "1F469 1F3FB 200D 2764 200D 1F48B 200D 1F469 1F3FF",
            "👩🏼\u200d❤️\u200d💋\u200d👩🏻":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FB",
            "👩🏼\u200d❤\u200d💋\u200d👩🏻":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F469 1F3FB",
            "👩🏼\u200d❤️\u200d💋\u200d👩🏼":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FC",
            "👩🏼\u200d❤\u200d💋\u200d👩🏼":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F469 1F3FC",
            "👩🏼\u200d❤️\u200d💋\u200d👩🏽":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FD",
            "👩🏼\u200d❤\u200d💋\u200d👩🏽":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F469 1F3FD",
            "👩🏼\u200d❤️\u200d💋\u200d👩🏾":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FE",
            "👩🏼\u200d❤\u200d💋\u200d👩🏾":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F469 1F3FE",
            "👩🏼\u200d❤️\u200d💋\u200d👩🏿":
              "1F469 1F3FC 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FF",
            "👩🏼\u200d❤\u200d💋\u200d👩🏿":
              "1F469 1F3FC 200D 2764 200D 1F48B 200D 1F469 1F3FF",
            "👩🏽\u200d❤️\u200d💋\u200d👩🏻":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FB",
            "👩🏽\u200d❤\u200d💋\u200d👩🏻":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F469 1F3FB",
            "👩🏽\u200d❤️\u200d💋\u200d👩🏼":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FC",
            "👩🏽\u200d❤\u200d💋\u200d👩🏼":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F469 1F3FC",
            "👩🏽\u200d❤️\u200d💋\u200d👩🏽":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FD",
            "👩🏽\u200d❤\u200d💋\u200d👩🏽":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F469 1F3FD",
            "👩🏽\u200d❤️\u200d💋\u200d👩🏾":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FE",
            "👩🏽\u200d❤\u200d💋\u200d👩🏾":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F469 1F3FE",
            "👩🏽\u200d❤️\u200d💋\u200d👩🏿":
              "1F469 1F3FD 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FF",
            "👩🏽\u200d❤\u200d💋\u200d👩🏿":
              "1F469 1F3FD 200D 2764 200D 1F48B 200D 1F469 1F3FF",
            "👩🏾\u200d❤️\u200d💋\u200d👩🏻":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FB",
            "👩🏾\u200d❤\u200d💋\u200d👩🏻":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F469 1F3FB",
            "👩🏾\u200d❤️\u200d💋\u200d👩🏼":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FC",
            "👩🏾\u200d❤\u200d💋\u200d👩🏼":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F469 1F3FC",
            "👩🏾\u200d❤️\u200d💋\u200d👩🏽":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FD",
            "👩🏾\u200d❤\u200d💋\u200d👩🏽":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F469 1F3FD",
            "👩🏾\u200d❤️\u200d💋\u200d👩🏾":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FE",
            "👩🏾\u200d❤\u200d💋\u200d👩🏾":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F469 1F3FE",
            "👩🏾\u200d❤️\u200d💋\u200d👩🏿":
              "1F469 1F3FE 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FF",
            "👩🏾\u200d❤\u200d💋\u200d👩🏿":
              "1F469 1F3FE 200D 2764 200D 1F48B 200D 1F469 1F3FF",
            "👩🏿\u200d❤️\u200d💋\u200d👩🏻":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FB",
            "👩🏿\u200d❤\u200d💋\u200d👩🏻":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F469 1F3FB",
            "👩🏿\u200d❤️\u200d💋\u200d👩🏼":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FC",
            "👩🏿\u200d❤\u200d💋\u200d👩🏼":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F469 1F3FC",
            "👩🏿\u200d❤️\u200d💋\u200d👩🏽":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FD",
            "👩🏿\u200d❤\u200d💋\u200d👩🏽":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F469 1F3FD",
            "👩🏿\u200d❤️\u200d💋\u200d👩🏾":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FE",
            "👩🏿\u200d❤\u200d💋\u200d👩🏾":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F469 1F3FE",
            "👩🏿\u200d❤️\u200d💋\u200d👩🏿":
              "1F469 1F3FF 200D 2764 FE0F 200D 1F48B 200D 1F469 1F3FF",
            "👩🏿\u200d❤\u200d💋\u200d👩🏿":
              "1F469 1F3FF 200D 2764 200D 1F48B 200D 1F469 1F3FF",
            "💑": "1F491",
            "💑🏻": "1F491 1F3FB",
            "💑🏼": "1F491 1F3FC",
            "💑🏽": "1F491 1F3FD",
            "💑🏾": "1F491 1F3FE",
            "💑🏿": "1F491 1F3FF",
            "🧑🏻\u200d❤️\u200d🧑🏼": "1F9D1 1F3FB 200D 2764 FE0F 200D 1F9D1 1F3FC",
            "🧑🏻\u200d❤\u200d🧑🏼": "1F9D1 1F3FB 200D 2764 200D 1F9D1 1F3FC",
            "🧑🏻\u200d❤️\u200d🧑🏽": "1F9D1 1F3FB 200D 2764 FE0F 200D 1F9D1 1F3FD",
            "🧑🏻\u200d❤\u200d🧑🏽": "1F9D1 1F3FB 200D 2764 200D 1F9D1 1F3FD",
            "🧑🏻\u200d❤️\u200d🧑🏾": "1F9D1 1F3FB 200D 2764 FE0F 200D 1F9D1 1F3FE",
            "🧑🏻\u200d❤\u200d🧑🏾": "1F9D1 1F3FB 200D 2764 200D 1F9D1 1F3FE",
            "🧑🏻\u200d❤️\u200d🧑🏿": "1F9D1 1F3FB 200D 2764 FE0F 200D 1F9D1 1F3FF",
            "🧑🏻\u200d❤\u200d🧑🏿": "1F9D1 1F3FB 200D 2764 200D 1F9D1 1F3FF",
            "🧑🏼\u200d❤️\u200d🧑🏻": "1F9D1 1F3FC 200D 2764 FE0F 200D 1F9D1 1F3FB",
            "🧑🏼\u200d❤\u200d🧑🏻": "1F9D1 1F3FC 200D 2764 200D 1F9D1 1F3FB",
            "🧑🏼\u200d❤️\u200d🧑🏽": "1F9D1 1F3FC 200D 2764 FE0F 200D 1F9D1 1F3FD",
            "🧑🏼\u200d❤\u200d🧑🏽": "1F9D1 1F3FC 200D 2764 200D 1F9D1 1F3FD",
            "🧑🏼\u200d❤️\u200d🧑🏾": "1F9D1 1F3FC 200D 2764 FE0F 200D 1F9D1 1F3FE",
            "🧑🏼\u200d❤\u200d🧑🏾": "1F9D1 1F3FC 200D 2764 200D 1F9D1 1F3FE",
            "🧑🏼\u200d❤️\u200d🧑🏿": "1F9D1 1F3FC 200D 2764 FE0F 200D 1F9D1 1F3FF",
            "🧑🏼\u200d❤\u200d🧑🏿": "1F9D1 1F3FC 200D 2764 200D 1F9D1 1F3FF",
            "🧑🏽\u200d❤️\u200d🧑🏻": "1F9D1 1F3FD 200D 2764 FE0F 200D 1F9D1 1F3FB",
            "🧑🏽\u200d❤\u200d🧑🏻": "1F9D1 1F3FD 200D 2764 200D 1F9D1 1F3FB",
            "🧑🏽\u200d❤️\u200d🧑🏼": "1F9D1 1F3FD 200D 2764 FE0F 200D 1F9D1 1F3FC",
            "🧑🏽\u200d❤\u200d🧑🏼": "1F9D1 1F3FD 200D 2764 200D 1F9D1 1F3FC",
            "🧑🏽\u200d❤️\u200d🧑🏾": "1F9D1 1F3FD 200D 2764 FE0F 200D 1F9D1 1F3FE",
            "🧑🏽\u200d❤\u200d🧑🏾": "1F9D1 1F3FD 200D 2764 200D 1F9D1 1F3FE",
            "🧑🏽\u200d❤️\u200d🧑🏿": "1F9D1 1F3FD 200D 2764 FE0F 200D 1F9D1 1F3FF",
            "🧑🏽\u200d❤\u200d🧑🏿": "1F9D1 1F3FD 200D 2764 200D 1F9D1 1F3FF",
            "🧑🏾\u200d❤️\u200d🧑🏻": "1F9D1 1F3FE 200D 2764 FE0F 200D 1F9D1 1F3FB",
            "🧑🏾\u200d❤\u200d🧑🏻": "1F9D1 1F3FE 200D 2764 200D 1F9D1 1F3FB",
            "🧑🏾\u200d❤️\u200d🧑🏼": "1F9D1 1F3FE 200D 2764 FE0F 200D 1F9D1 1F3FC",
            "🧑🏾\u200d❤\u200d🧑🏼": "1F9D1 1F3FE 200D 2764 200D 1F9D1 1F3FC",
            "🧑🏾\u200d❤️\u200d🧑🏽": "1F9D1 1F3FE 200D 2764 FE0F 200D 1F9D1 1F3FD",
            "🧑🏾\u200d❤\u200d🧑🏽": "1F9D1 1F3FE 200D 2764 200D 1F9D1 1F3FD",
            "🧑🏾\u200d❤️\u200d🧑🏿": "1F9D1 1F3FE 200D 2764 FE0F 200D 1F9D1 1F3FF",
            "🧑🏾\u200d❤\u200d🧑🏿": "1F9D1 1F3FE 200D 2764 200D 1F9D1 1F3FF",
            "🧑🏿\u200d❤️\u200d🧑🏻": "1F9D1 1F3FF 200D 2764 FE0F 200D 1F9D1 1F3FB",
            "🧑🏿\u200d❤\u200d🧑🏻": "1F9D1 1F3FF 200D 2764 200D 1F9D1 1F3FB",
            "🧑🏿\u200d❤️\u200d🧑🏼": "1F9D1 1F3FF 200D 2764 FE0F 200D 1F9D1 1F3FC",
            "🧑🏿\u200d❤\u200d🧑🏼": "1F9D1 1F3FF 200D 2764 200D 1F9D1 1F3FC",
            "🧑🏿\u200d❤️\u200d🧑🏽": "1F9D1 1F3FF 200D 2764 FE0F 200D 1F9D1 1F3FD",
            "🧑🏿\u200d❤\u200d🧑🏽": "1F9D1 1F3FF 200D 2764 200D 1F9D1 1F3FD",
            "🧑🏿\u200d❤️\u200d🧑🏾": "1F9D1 1F3FF 200D 2764 FE0F 200D 1F9D1 1F3FE",
            "🧑🏿\u200d❤\u200d🧑🏾": "1F9D1 1F3FF 200D 2764 200D 1F9D1 1F3FE",
            "👩\u200d❤️\u200d👨": "1F469 200D 2764 FE0F 200D 1F468",
            "👩\u200d❤\u200d👨": "1F469 200D 2764 200D 1F468",
            "👩🏻\u200d❤️\u200d👨🏻": "1F469 1F3FB 200D 2764 FE0F 200D 1F468 1F3FB",
            "👩🏻\u200d❤\u200d👨🏻": "1F469 1F3FB 200D 2764 200D 1F468 1F3FB",
            "👩🏻\u200d❤️\u200d👨🏼": "1F469 1F3FB 200D 2764 FE0F 200D 1F468 1F3FC",
            "👩🏻\u200d❤\u200d👨🏼": "1F469 1F3FB 200D 2764 200D 1F468 1F3FC",
            "👩🏻\u200d❤️\u200d👨🏽": "1F469 1F3FB 200D 2764 FE0F 200D 1F468 1F3FD",
            "👩🏻\u200d❤\u200d👨🏽": "1F469 1F3FB 200D 2764 200D 1F468 1F3FD",
            "👩🏻\u200d❤️\u200d👨🏾": "1F469 1F3FB 200D 2764 FE0F 200D 1F468 1F3FE",
            "👩🏻\u200d❤\u200d👨🏾": "1F469 1F3FB 200D 2764 200D 1F468 1F3FE",
            "👩🏻\u200d❤️\u200d👨🏿": "1F469 1F3FB 200D 2764 FE0F 200D 1F468 1F3FF",
            "👩🏻\u200d❤\u200d👨🏿": "1F469 1F3FB 200D 2764 200D 1F468 1F3FF",
            "👩🏼\u200d❤️\u200d👨🏻": "1F469 1F3FC 200D 2764 FE0F 200D 1F468 1F3FB",
            "👩🏼\u200d❤\u200d👨🏻": "1F469 1F3FC 200D 2764 200D 1F468 1F3FB",
            "👩🏼\u200d❤️\u200d👨🏼": "1F469 1F3FC 200D 2764 FE0F 200D 1F468 1F3FC",
            "👩🏼\u200d❤\u200d👨🏼": "1F469 1F3FC 200D 2764 200D 1F468 1F3FC",
            "👩🏼\u200d❤️\u200d👨🏽": "1F469 1F3FC 200D 2764 FE0F 200D 1F468 1F3FD",
            "👩🏼\u200d❤\u200d👨🏽": "1F469 1F3FC 200D 2764 200D 1F468 1F3FD",
            "👩🏼\u200d❤️\u200d👨🏾": "1F469 1F3FC 200D 2764 FE0F 200D 1F468 1F3FE",
            "👩🏼\u200d❤\u200d👨🏾": "1F469 1F3FC 200D 2764 200D 1F468 1F3FE",
            "👩🏼\u200d❤️\u200d👨🏿": "1F469 1F3FC 200D 2764 FE0F 200D 1F468 1F3FF",
            "👩🏼\u200d❤\u200d👨🏿": "1F469 1F3FC 200D 2764 200D 1F468 1F3FF",
            "👩🏽\u200d❤️\u200d👨🏻": "1F469 1F3FD 200D 2764 FE0F 200D 1F468 1F3FB",
            "👩🏽\u200d❤\u200d👨🏻": "1F469 1F3FD 200D 2764 200D 1F468 1F3FB",
            "👩🏽\u200d❤️\u200d👨🏼": "1F469 1F3FD 200D 2764 FE0F 200D 1F468 1F3FC",
            "👩🏽\u200d❤\u200d👨🏼": "1F469 1F3FD 200D 2764 200D 1F468 1F3FC",
            "👩🏽\u200d❤️\u200d👨🏽": "1F469 1F3FD 200D 2764 FE0F 200D 1F468 1F3FD",
            "👩🏽\u200d❤\u200d👨🏽": "1F469 1F3FD 200D 2764 200D 1F468 1F3FD",
            "👩🏽\u200d❤️\u200d👨🏾": "1F469 1F3FD 200D 2764 FE0F 200D 1F468 1F3FE",
            "👩🏽\u200d❤\u200d👨🏾": "1F469 1F3FD 200D 2764 200D 1F468 1F3FE",
            "👩🏽\u200d❤️\u200d👨🏿": "1F469 1F3FD 200D 2764 FE0F 200D 1F468 1F3FF",
            "👩🏽\u200d❤\u200d👨🏿": "1F469 1F3FD 200D 2764 200D 1F468 1F3FF",
            "👩🏾\u200d❤️\u200d👨🏻": "1F469 1F3FE 200D 2764 FE0F 200D 1F468 1F3FB",
            "👩🏾\u200d❤\u200d👨🏻": "1F469 1F3FE 200D 2764 200D 1F468 1F3FB",
            "👩🏾\u200d❤️\u200d👨🏼": "1F469 1F3FE 200D 2764 FE0F 200D 1F468 1F3FC",
            "👩🏾\u200d❤\u200d👨🏼": "1F469 1F3FE 200D 2764 200D 1F468 1F3FC",
            "👩🏾\u200d❤️\u200d👨🏽": "1F469 1F3FE 200D 2764 FE0F 200D 1F468 1F3FD",
            "👩🏾\u200d❤\u200d👨🏽": "1F469 1F3FE 200D 2764 200D 1F468 1F3FD",
            "👩🏾\u200d❤️\u200d👨🏾": "1F469 1F3FE 200D 2764 FE0F 200D 1F468 1F3FE",
            "👩🏾\u200d❤\u200d👨🏾": "1F469 1F3FE 200D 2764 200D 1F468 1F3FE",
            "👩🏾\u200d❤️\u200d👨🏿": "1F469 1F3FE 200D 2764 FE0F 200D 1F468 1F3FF",
            "👩🏾\u200d❤\u200d👨🏿": "1F469 1F3FE 200D 2764 200D 1F468 1F3FF",
            "👩🏿\u200d❤️\u200d👨🏻": "1F469 1F3FF 200D 2764 FE0F 200D 1F468 1F3FB",
            "👩🏿\u200d❤\u200d👨🏻": "1F469 1F3FF 200D 2764 200D 1F468 1F3FB",
            "👩🏿\u200d❤️\u200d👨🏼": "1F469 1F3FF 200D 2764 FE0F 200D 1F468 1F3FC",
            "👩🏿\u200d❤\u200d👨🏼": "1F469 1F3FF 200D 2764 200D 1F468 1F3FC",
            "👩🏿\u200d❤️\u200d👨🏽": "1F469 1F3FF 200D 2764 FE0F 200D 1F468 1F3FD",
            "👩🏿\u200d❤\u200d👨🏽": "1F469 1F3FF 200D 2764 200D 1F468 1F3FD",
            "👩🏿\u200d❤️\u200d👨🏾": "1F469 1F3FF 200D 2764 FE0F 200D 1F468 1F3FE",
            "👩🏿\u200d❤\u200d👨🏾": "1F469 1F3FF 200D 2764 200D 1F468 1F3FE",
            "👩🏿\u200d❤️\u200d👨🏿": "1F469 1F3FF 200D 2764 FE0F 200D 1F468 1F3FF",
            "👩🏿\u200d❤\u200d👨🏿": "1F469 1F3FF 200D 2764 200D 1F468 1F3FF",
            "👨\u200d❤️\u200d👨": "1F468 200D 2764 FE0F 200D 1F468",
            "👨\u200d❤\u200d👨": "1F468 200D 2764 200D 1F468",
            "👨🏻\u200d❤️\u200d👨🏻": "1F468 1F3FB 200D 2764 FE0F 200D 1F468 1F3FB",
            "👨🏻\u200d❤\u200d👨🏻": "1F468 1F3FB 200D 2764 200D 1F468 1F3FB",
            "👨🏻\u200d❤️\u200d👨🏼": "1F468 1F3FB 200D 2764 FE0F 200D 1F468 1F3FC",
            "👨🏻\u200d❤\u200d👨🏼": "1F468 1F3FB 200D 2764 200D 1F468 1F3FC",
            "👨🏻\u200d❤️\u200d👨🏽": "1F468 1F3FB 200D 2764 FE0F 200D 1F468 1F3FD",
            "👨🏻\u200d❤\u200d👨🏽": "1F468 1F3FB 200D 2764 200D 1F468 1F3FD",
            "👨🏻\u200d❤️\u200d👨🏾": "1F468 1F3FB 200D 2764 FE0F 200D 1F468 1F3FE",
            "👨🏻\u200d❤\u200d👨🏾": "1F468 1F3FB 200D 2764 200D 1F468 1F3FE",
            "👨🏻\u200d❤️\u200d👨🏿": "1F468 1F3FB 200D 2764 FE0F 200D 1F468 1F3FF",
            "👨🏻\u200d❤\u200d👨🏿": "1F468 1F3FB 200D 2764 200D 1F468 1F3FF",
            "👨🏼\u200d❤️\u200d👨🏻": "1F468 1F3FC 200D 2764 FE0F 200D 1F468 1F3FB",
            "👨🏼\u200d❤\u200d👨🏻": "1F468 1F3FC 200D 2764 200D 1F468 1F3FB",
            "👨🏼\u200d❤️\u200d👨🏼": "1F468 1F3FC 200D 2764 FE0F 200D 1F468 1F3FC",
            "👨🏼\u200d❤\u200d👨🏼": "1F468 1F3FC 200D 2764 200D 1F468 1F3FC",
            "👨🏼\u200d❤️\u200d👨🏽": "1F468 1F3FC 200D 2764 FE0F 200D 1F468 1F3FD",
            "👨🏼\u200d❤\u200d👨🏽": "1F468 1F3FC 200D 2764 200D 1F468 1F3FD",
            "👨🏼\u200d❤️\u200d👨🏾": "1F468 1F3FC 200D 2764 FE0F 200D 1F468 1F3FE",
            "👨🏼\u200d❤\u200d👨🏾": "1F468 1F3FC 200D 2764 200D 1F468 1F3FE",
            "👨🏼\u200d❤️\u200d👨🏿": "1F468 1F3FC 200D 2764 FE0F 200D 1F468 1F3FF",
            "👨🏼\u200d❤\u200d👨🏿": "1F468 1F3FC 200D 2764 200D 1F468 1F3FF",
            "👨🏽\u200d❤️\u200d👨🏻": "1F468 1F3FD 200D 2764 FE0F 200D 1F468 1F3FB",
            "👨🏽\u200d❤\u200d👨🏻": "1F468 1F3FD 200D 2764 200D 1F468 1F3FB",
            "👨🏽\u200d❤️\u200d👨🏼": "1F468 1F3FD 200D 2764 FE0F 200D 1F468 1F3FC",
            "👨🏽\u200d❤\u200d👨🏼": "1F468 1F3FD 200D 2764 200D 1F468 1F3FC",
            "👨🏽\u200d❤️\u200d👨🏽": "1F468 1F3FD 200D 2764 FE0F 200D 1F468 1F3FD",
            "👨🏽\u200d❤\u200d👨🏽": "1F468 1F3FD 200D 2764 200D 1F468 1F3FD",
            "👨🏽\u200d❤️\u200d👨🏾": "1F468 1F3FD 200D 2764 FE0F 200D 1F468 1F3FE",
            "👨🏽\u200d❤\u200d👨🏾": "1F468 1F3FD 200D 2764 200D 1F468 1F3FE",
            "👨🏽\u200d❤️\u200d👨🏿": "1F468 1F3FD 200D 2764 FE0F 200D 1F468 1F3FF",
            "👨🏽\u200d❤\u200d👨🏿": "1F468 1F3FD 200D 2764 200D 1F468 1F3FF",
            "👨🏾\u200d❤️\u200d👨🏻": "1F468 1F3FE 200D 2764 FE0F 200D 1F468 1F3FB",
            "👨🏾\u200d❤\u200d👨🏻": "1F468 1F3FE 200D 2764 200D 1F468 1F3FB",
            "👨🏾\u200d❤️\u200d👨🏼": "1F468 1F3FE 200D 2764 FE0F 200D 1F468 1F3FC",
            "👨🏾\u200d❤\u200d👨🏼": "1F468 1F3FE 200D 2764 200D 1F468 1F3FC",
            "👨🏾\u200d❤️\u200d👨🏽": "1F468 1F3FE 200D 2764 FE0F 200D 1F468 1F3FD",
            "👨🏾\u200d❤\u200d👨🏽": "1F468 1F3FE 200D 2764 200D 1F468 1F3FD",
            "👨🏾\u200d❤️\u200d👨🏾": "1F468 1F3FE 200D 2764 FE0F 200D 1F468 1F3FE",
            "👨🏾\u200d❤\u200d👨🏾": "1F468 1F3FE 200D 2764 200D 1F468 1F3FE",
            "👨🏾\u200d❤️\u200d👨🏿": "1F468 1F3FE 200D 2764 FE0F 200D 1F468 1F3FF",
            "👨🏾\u200d❤\u200d👨🏿": "1F468 1F3FE 200D 2764 200D 1F468 1F3FF",
            "👨🏿\u200d❤️\u200d👨🏻": "1F468 1F3FF 200D 2764 FE0F 200D 1F468 1F3FB",
            "👨🏿\u200d❤\u200d👨🏻": "1F468 1F3FF 200D 2764 200D 1F468 1F3FB",
            "👨🏿\u200d❤️\u200d👨🏼": "1F468 1F3FF 200D 2764 FE0F 200D 1F468 1F3FC",
            "👨🏿\u200d❤\u200d👨🏼": "1F468 1F3FF 200D 2764 200D 1F468 1F3FC",
            "👨🏿\u200d❤️\u200d👨🏽": "1F468 1F3FF 200D 2764 FE0F 200D 1F468 1F3FD",
            "👨🏿\u200d❤\u200d👨🏽": "1F468 1F3FF 200D 2764 200D 1F468 1F3FD",
            "👨🏿\u200d❤️\u200d👨🏾": "1F468 1F3FF 200D 2764 FE0F 200D 1F468 1F3FE",
            "👨🏿\u200d❤\u200d👨🏾": "1F468 1F3FF 200D 2764 200D 1F468 1F3FE",
            "👨🏿\u200d❤️\u200d👨🏿": "1F468 1F3FF 200D 2764 FE0F 200D 1F468 1F3FF",
            "👨🏿\u200d❤\u200d👨🏿": "1F468 1F3FF 200D 2764 200D 1F468 1F3FF",
            "👩\u200d❤️\u200d👩": "1F469 200D 2764 FE0F 200D 1F469",
            "👩\u200d❤\u200d👩": "1F469 200D 2764 200D 1F469",
            "👩🏻\u200d❤️\u200d👩🏻": "1F469 1F3FB 200D 2764 FE0F 200D 1F469 1F3FB",
            "👩🏻\u200d❤\u200d👩🏻": "1F469 1F3FB 200D 2764 200D 1F469 1F3FB",
            "👩🏻\u200d❤️\u200d👩🏼": "1F469 1F3FB 200D 2764 FE0F 200D 1F469 1F3FC",
            "👩🏻\u200d❤\u200d👩🏼": "1F469 1F3FB 200D 2764 200D 1F469 1F3FC",
            "👩🏻\u200d❤️\u200d👩🏽": "1F469 1F3FB 200D 2764 FE0F 200D 1F469 1F3FD",
            "👩🏻\u200d❤\u200d👩🏽": "1F469 1F3FB 200D 2764 200D 1F469 1F3FD",
            "👩🏻\u200d❤️\u200d👩🏾": "1F469 1F3FB 200D 2764 FE0F 200D 1F469 1F3FE",
            "👩🏻\u200d❤\u200d👩🏾": "1F469 1F3FB 200D 2764 200D 1F469 1F3FE",
            "👩🏻\u200d❤️\u200d👩🏿": "1F469 1F3FB 200D 2764 FE0F 200D 1F469 1F3FF",
            "👩🏻\u200d❤\u200d👩🏿": "1F469 1F3FB 200D 2764 200D 1F469 1F3FF",
            "👩🏼\u200d❤️\u200d👩🏻": "1F469 1F3FC 200D 2764 FE0F 200D 1F469 1F3FB",
            "👩🏼\u200d❤\u200d👩🏻": "1F469 1F3FC 200D 2764 200D 1F469 1F3FB",
            "👩🏼\u200d❤️\u200d👩🏼": "1F469 1F3FC 200D 2764 FE0F 200D 1F469 1F3FC",
            "👩🏼\u200d❤\u200d👩🏼": "1F469 1F3FC 200D 2764 200D 1F469 1F3FC",
            "👩🏼\u200d❤️\u200d👩🏽": "1F469 1F3FC 200D 2764 FE0F 200D 1F469 1F3FD",
            "👩🏼\u200d❤\u200d👩🏽": "1F469 1F3FC 200D 2764 200D 1F469 1F3FD",
            "👩🏼\u200d❤️\u200d👩🏾": "1F469 1F3FC 200D 2764 FE0F 200D 1F469 1F3FE",
            "👩🏼\u200d❤\u200d👩🏾": "1F469 1F3FC 200D 2764 200D 1F469 1F3FE",
            "👩🏼\u200d❤️\u200d👩🏿": "1F469 1F3FC 200D 2764 FE0F 200D 1F469 1F3FF",
            "👩🏼\u200d❤\u200d👩🏿": "1F469 1F3FC 200D 2764 200D 1F469 1F3FF",
            "👩🏽\u200d❤️\u200d👩🏻": "1F469 1F3FD 200D 2764 FE0F 200D 1F469 1F3FB",
            "👩🏽\u200d❤\u200d👩🏻": "1F469 1F3FD 200D 2764 200D 1F469 1F3FB",
            "👩🏽\u200d❤️\u200d👩🏼": "1F469 1F3FD 200D 2764 FE0F 200D 1F469 1F3FC",
            "👩🏽\u200d❤\u200d👩🏼": "1F469 1F3FD 200D 2764 200D 1F469 1F3FC",
            "👩🏽\u200d❤️\u200d👩🏽": "1F469 1F3FD 200D 2764 FE0F 200D 1F469 1F3FD",
            "👩🏽\u200d❤\u200d👩🏽": "1F469 1F3FD 200D 2764 200D 1F469 1F3FD",
            "👩🏽\u200d❤️\u200d👩🏾": "1F469 1F3FD 200D 2764 FE0F 200D 1F469 1F3FE",
            "👩🏽\u200d❤\u200d👩🏾": "1F469 1F3FD 200D 2764 200D 1F469 1F3FE",
            "👩🏽\u200d❤️\u200d👩🏿": "1F469 1F3FD 200D 2764 FE0F 200D 1F469 1F3FF",
            "👩🏽\u200d❤\u200d👩🏿": "1F469 1F3FD 200D 2764 200D 1F469 1F3FF",
            "👩🏾\u200d❤️\u200d👩🏻": "1F469 1F3FE 200D 2764 FE0F 200D 1F469 1F3FB",
            "👩🏾\u200d❤\u200d👩🏻": "1F469 1F3FE 200D 2764 200D 1F469 1F3FB",
            "👩🏾\u200d❤️\u200d👩🏼": "1F469 1F3FE 200D 2764 FE0F 200D 1F469 1F3FC",
            "👩🏾\u200d❤\u200d👩🏼": "1F469 1F3FE 200D 2764 200D 1F469 1F3FC",
            "👩🏾\u200d❤️\u200d👩🏽": "1F469 1F3FE 200D 2764 FE0F 200D 1F469 1F3FD",
            "👩🏾\u200d❤\u200d👩🏽": "1F469 1F3FE 200D 2764 200D 1F469 1F3FD",
            "👩🏾\u200d❤️\u200d👩🏾": "1F469 1F3FE 200D 2764 FE0F 200D 1F469 1F3FE",
            "👩🏾\u200d❤\u200d👩🏾": "1F469 1F3FE 200D 2764 200D 1F469 1F3FE",
            "👩🏾\u200d❤️\u200d👩🏿": "1F469 1F3FE 200D 2764 FE0F 200D 1F469 1F3FF",
            "👩🏾\u200d❤\u200d👩🏿": "1F469 1F3FE 200D 2764 200D 1F469 1F3FF",
            "👩🏿\u200d❤️\u200d👩🏻": "1F469 1F3FF 200D 2764 FE0F 200D 1F469 1F3FB",
            "👩🏿\u200d❤\u200d👩🏻": "1F469 1F3FF 200D 2764 200D 1F469 1F3FB",
            "👩🏿\u200d❤️\u200d👩🏼": "1F469 1F3FF 200D 2764 FE0F 200D 1F469 1F3FC",
            "👩🏿\u200d❤\u200d👩🏼": "1F469 1F3FF 200D 2764 200D 1F469 1F3FC",
            "👩🏿\u200d❤️\u200d👩🏽": "1F469 1F3FF 200D 2764 FE0F 200D 1F469 1F3FD",
            "👩🏿\u200d❤\u200d👩🏽": "1F469 1F3FF 200D 2764 200D 1F469 1F3FD",
            "👩🏿\u200d❤️\u200d👩🏾": "1F469 1F3FF 200D 2764 FE0F 200D 1F469 1F3FE",
            "👩🏿\u200d❤\u200d👩🏾": "1F469 1F3FF 200D 2764 200D 1F469 1F3FE",
            "👩🏿\u200d❤️\u200d👩🏿": "1F469 1F3FF 200D 2764 FE0F 200D 1F469 1F3FF",
            "👩🏿\u200d❤\u200d👩🏿": "1F469 1F3FF 200D 2764 200D 1F469 1F3FF",
            "👨\u200d👩\u200d👦": "1F468 200D 1F469 200D 1F466",
            "👨\u200d👩\u200d👧": "1F468 200D 1F469 200D 1F467",
            "👨\u200d👩\u200d👧\u200d👦":
              "1F468 200D 1F469 200D 1F467 200D 1F466",
            "👨\u200d👩\u200d👦\u200d👦":
              "1F468 200D 1F469 200D 1F466 200D 1F466",
            "👨\u200d👩\u200d👧\u200d👧":
              "1F468 200D 1F469 200D 1F467 200D 1F467",
            "👨\u200d👨\u200d👦": "1F468 200D 1F468 200D 1F466",
            "👨\u200d👨\u200d👧": "1F468 200D 1F468 200D 1F467",
            "👨\u200d👨\u200d👧\u200d👦":
              "1F468 200D 1F468 200D 1F467 200D 1F466",
            "👨\u200d👨\u200d👦\u200d👦":
              "1F468 200D 1F468 200D 1F466 200D 1F466",
            "👨\u200d👨\u200d👧\u200d👧":
              "1F468 200D 1F468 200D 1F467 200D 1F467",
            "👩\u200d👩\u200d👦": "1F469 200D 1F469 200D 1F466",
            "👩\u200d👩\u200d👧": "1F469 200D 1F469 200D 1F467",
            "👩\u200d👩\u200d👧\u200d👦":
              "1F469 200D 1F469 200D 1F467 200D 1F466",
            "👩\u200d👩\u200d👦\u200d👦":
              "1F469 200D 1F469 200D 1F466 200D 1F466",
            "👩\u200d👩\u200d👧\u200d👧":
              "1F469 200D 1F469 200D 1F467 200D 1F467",
            "👨\u200d👦": "1F468 200D 1F466",
            "👨\u200d👦\u200d👦": "1F468 200D 1F466 200D 1F466",
            "👨\u200d👧": "1F468 200D 1F467",
            "👨\u200d👧\u200d👦": "1F468 200D 1F467 200D 1F466",
            "👨\u200d👧\u200d👧": "1F468 200D 1F467 200D 1F467",
            "👩\u200d👦": "1F469 200D 1F466",
            "👩\u200d👦\u200d👦": "1F469 200D 1F466 200D 1F466",
            "👩\u200d👧": "1F469 200D 1F467",
            "👩\u200d👧\u200d👦": "1F469 200D 1F467 200D 1F466",
            "👩\u200d👧\u200d👧": "1F469 200D 1F467 200D 1F467",
            "🗣️": "1F5E3 FE0F",
            "🗣": "1F5E3",
            "👤": "1F464",
            "👥": "1F465",
            "🫂": "1FAC2",
            "👪": "1F46A",
            "🧑\u200d🧑\u200d🧒": "1F9D1 200D 1F9D1 200D 1F9D2",
            "🧑\u200d🧑\u200d🧒\u200d🧒":
              "1F9D1 200D 1F9D1 200D 1F9D2 200D 1F9D2",
            "🧑\u200d🧒": "1F9D1 200D 1F9D2",
            "🧑\u200d🧒\u200d🧒": "1F9D1 200D 1F9D2 200D 1F9D2",
            "👣": "1F463",
            "🏻": "1F3FB",
            "🏼": "1F3FC",
            "🏽": "1F3FD",
            "🏾": "1F3FE",
            "🏿": "1F3FF",
            "🦰": "1F9B0",
            "🦱": "1F9B1",
            "🦳": "1F9B3",
            "🦲": "1F9B2",
            "🐵": "1F435",
            "🐒": "1F412",
            "🦍": "1F98D",
            "🦧": "1F9A7",
            "🐶": "1F436",
            "🐕": "1F415",
            "🦮": "1F9AE",
            "🐕\u200d🦺": "1F415 200D 1F9BA",
            "🐩": "1F429",
            "🐺": "1F43A",
            "🦊": "1F98A",
            "🦝": "1F99D",
            "🐱": "1F431",
            "🐈": "1F408",
            "🐈\u200d⬛": "1F408 200D 2B1B",
            "🦁": "1F981",
            "🐯": "1F42F",
            "🐅": "1F405",
            "🐆": "1F406",
            "🐴": "1F434",
            U0001face: "1FACE",
            U0001facf: "1FACF",
            "🐎": "1F40E",
            "🦄": "1F984",
            "🦓": "1F993",
            "🦌": "1F98C",
            "🦬": "1F9AC",
            "🐮": "1F42E",
            "🐂": "1F402",
            "🐃": "1F403",
            "🐄": "1F404",
            "🐷": "1F437",
            "🐖": "1F416",
            "🐗": "1F417",
            "🐽": "1F43D",
            "🐏": "1F40F",
            "🐑": "1F411",
            "🐐": "1F410",
            "🐪": "1F42A",
            "🐫": "1F42B",
            "🦙": "1F999",
            "🦒": "1F992",
            "🐘": "1F418",
            "🦣": "1F9A3",
            "🦏": "1F98F",
            "🦛": "1F99B",
            "🐭": "1F42D",
            "🐁": "1F401",
            "🐀": "1F400",
            "🐹": "1F439",
            "🐰": "1F430",
            "🐇": "1F407",
            "🐿️": "1F43F FE0F",
            "🐿": "1F43F",
            "🦫": "1F9AB",
            "🦔": "1F994",
            "🦇": "1F987",
            "🐻": "1F43B",
            "🐻\u200d❄️": "1F43B 200D 2744 FE0F",
            "🐻\u200d❄": "1F43B 200D 2744",
            "🐨": "1F428",
            "🐼": "1F43C",
            "🦥": "1F9A5",
            "🦦": "1F9A6",
            "🦨": "1F9A8",
            "🦘": "1F998",
            "🦡": "1F9A1",
            "🐾": "1F43E",
            "🦃": "1F983",
            "🐔": "1F414",
            "🐓": "1F413",
            "🐣": "1F423",
            "🐤": "1F424",
            "🐥": "1F425",
            "🐦": "1F426",
            "🐧": "1F427",
            "🕊️": "1F54A FE0F",
            "🕊": "1F54A",
            "🦅": "1F985",
            "🦆": "1F986",
            "🦢": "1F9A2",
            "🦉": "1F989",
            "🦤": "1F9A4",
            "🪶": "1FAB6",
            "🦩": "1F9A9",
            "🦚": "1F99A",
            "🦜": "1F99C",
            U0001fabd: "1FABD",
            "🐦\u200d⬛": "1F426 200D 2B1B",
            U0001fabf: "1FABF",
            "🐦\u200d🔥": "1F426 200D 1F525",
            "🐸": "1F438",
            "🐊": "1F40A",
            "🐢": "1F422",
            "🦎": "1F98E",
            "🐍": "1F40D",
            "🐲": "1F432",
            "🐉": "1F409",
            "🦕": "1F995",
            "🦖": "1F996",
            "🐳": "1F433",
            "🐋": "1F40B",
            "🐬": "1F42C",
            "🦭": "1F9AD",
            "🐟": "1F41F",
            "🐠": "1F420",
            "🐡": "1F421",
            "🦈": "1F988",
            "🐙": "1F419",
            "🐚": "1F41A",
            U0001fab8: "1FAB8",
            U0001fabc: "1FABC",
            "🐌": "1F40C",
            "🦋": "1F98B",
            "🐛": "1F41B",
            "🐜": "1F41C",
            "🐝": "1F41D",
            "🪲": "1FAB2",
            "🐞": "1F41E",
            "🦗": "1F997",
            "🪳": "1FAB3",
            "🕷️": "1F577 FE0F",
            "🕷": "1F577",
            "🕸️": "1F578 FE0F",
            "🕸": "1F578",
            "🦂": "1F982",
            "🦟": "1F99F",
            "🪰": "1FAB0",
            "🪱": "1FAB1",
            "🦠": "1F9A0",
            "💐": "1F490",
            "🌸": "1F338",
            "💮": "1F4AE",
            U0001fab7: "1FAB7",
            "🏵️": "1F3F5 FE0F",
            "🏵": "1F3F5",
            "🌹": "1F339",
            "🥀": "1F940",
            "🌺": "1F33A",
            "🌻": "1F33B",
            "🌼": "1F33C",
            "🌷": "1F337",
            U0001fabb: "1FABB",
            "🌱": "1F331",
            "🪴": "1FAB4",
            "🌲": "1F332",
            "🌳": "1F333",
            "🌴": "1F334",
            "🌵": "1F335",
            "🌾": "1F33E",
            "🌿": "1F33F",
            "☘️": "2618 FE0F",
            "☘": "2618",
            "🍀": "1F340",
            "🍁": "1F341",
            "🍂": "1F342",
            "🍃": "1F343",
            U0001fab9: "1FAB9",
            U0001faba: "1FABA",
            "🍄": "1F344",
            "🍇": "1F347",
            "🍈": "1F348",
            "🍉": "1F349",
            "🍊": "1F34A",
            "🍋": "1F34B",
            "🍋\u200d🟩": "1F34B 200D 1F7E9",
            "🍌": "1F34C",
            "🍍": "1F34D",
            "🥭": "1F96D",
            "🍎": "1F34E",
            "🍏": "1F34F",
            "🍐": "1F350",
            "🍑": "1F351",
            "🍒": "1F352",
            "🍓": "1F353",
            "🫐": "1FAD0",
            "🥝": "1F95D",
            "🍅": "1F345",
            "🫒": "1FAD2",
            "🥥": "1F965",
            "🥑": "1F951",
            "🍆": "1F346",
            "🥔": "1F954",
            "🥕": "1F955",
            "🌽": "1F33D",
            "🌶️": "1F336 FE0F",
            "🌶": "1F336",
            "🫑": "1FAD1",
            "🥒": "1F952",
            "🥬": "1F96C",
            "🥦": "1F966",
            "🧄": "1F9C4",
            "🧅": "1F9C5",
            "🥜": "1F95C",
            U0001fad8: "1FAD8",
            "🌰": "1F330",
            U0001fada: "1FADA",
            U0001fadb: "1FADB",
            "🍄\u200d🟫": "1F344 200D 1F7EB",
            "🍞": "1F35E",
            "🥐": "1F950",
            "🥖": "1F956",
            "🫓": "1FAD3",
            "🥨": "1F968",
            "🥯": "1F96F",
            "🥞": "1F95E",
            "🧇": "1F9C7",
            "🧀": "1F9C0",
            "🍖": "1F356",
            "🍗": "1F357",
            "🥩": "1F969",
            "🥓": "1F953",
            "🍔": "1F354",
            "🍟": "1F35F",
            "🍕": "1F355",
            "🌭": "1F32D",
            "🥪": "1F96A",
            "🌮": "1F32E",
            "🌯": "1F32F",
            "🫔": "1FAD4",
            "🥙": "1F959",
            "🧆": "1F9C6",
            "🥚": "1F95A",
            "🍳": "1F373",
            "🥘": "1F958",
            "🍲": "1F372",
            "🫕": "1FAD5",
            "🥣": "1F963",
            "🥗": "1F957",
            "🍿": "1F37F",
            "🧈": "1F9C8",
            "🧂": "1F9C2",
            "🥫": "1F96B",
            "🍱": "1F371",
            "🍘": "1F358",
            "🍙": "1F359",
            "🍚": "1F35A",
            "🍛": "1F35B",
            "🍜": "1F35C",
            "🍝": "1F35D",
            "🍠": "1F360",
            "🍢": "1F362",
            "🍣": "1F363",
            "🍤": "1F364",
            "🍥": "1F365",
            "🥮": "1F96E",
            "🍡": "1F361",
            "🥟": "1F95F",
            "🥠": "1F960",
            "🥡": "1F961",
            "🦀": "1F980",
            "🦞": "1F99E",
            "🦐": "1F990",
            "🦑": "1F991",
            "🦪": "1F9AA",
            "🍦": "1F366",
            "🍧": "1F367",
            "🍨": "1F368",
            "🍩": "1F369",
            "🍪": "1F36A",
            "🎂": "1F382",
            "🍰": "1F370",
            "🧁": "1F9C1",
            "🥧": "1F967",
            "🍫": "1F36B",
            "🍬": "1F36C",
            "🍭": "1F36D",
            "🍮": "1F36E",
            "🍯": "1F36F",
            "🍼": "1F37C",
            "🥛": "1F95B",
            "☕": "2615",
            "🫖": "1FAD6",
            "🍵": "1F375",
            "🍶": "1F376",
            "🍾": "1F37E",
            "🍷": "1F377",
            "🍸": "1F378",
            "🍹": "1F379",
            "🍺": "1F37A",
            "🍻": "1F37B",
            "🥂": "1F942",
            "🥃": "1F943",
            U0001fad7: "1FAD7",
            "🥤": "1F964",
            "🧋": "1F9CB",
            "🧃": "1F9C3",
            "🧉": "1F9C9",
            "🧊": "1F9CA",
            "🥢": "1F962",
            "🍽️": "1F37D FE0F",
            "🍽": "1F37D",
            "🍴": "1F374",
            "🥄": "1F944",
            "🔪": "1F52A",
            U0001fad9: "1FAD9",
            "🏺": "1F3FA",
            "🌍": "1F30D",
            "🌎": "1F30E",
            "🌏": "1F30F",
            "🌐": "1F310",
            "🗺️": "1F5FA FE0F",
            "🗺": "1F5FA",
            "🗾": "1F5FE",
            "🧭": "1F9ED",
            "🏔️": "1F3D4 FE0F",
            "🏔": "1F3D4",
            "⛰️": "26F0 FE0F",
            "⛰": "26F0",
            "🌋": "1F30B",
            "🗻": "1F5FB",
            "🏕️": "1F3D5 FE0F",
            "🏕": "1F3D5",
            "🏖️": "1F3D6 FE0F",
            "🏖": "1F3D6",
            "🏜️": "1F3DC FE0F",
            "🏜": "1F3DC",
            "🏝️": "1F3DD FE0F",
            "🏝": "1F3DD",
            "🏞️": "1F3DE FE0F",
            "🏞": "1F3DE",
            "🏟️": "1F3DF FE0F",
            "🏟": "1F3DF",
            "🏛️": "1F3DB FE0F",
            "🏛": "1F3DB",
            "🏗️": "1F3D7 FE0F",
            "🏗": "1F3D7",
            "🧱": "1F9F1",
            "🪨": "1FAA8",
            "🪵": "1FAB5",
            "🛖": "1F6D6",
            "🏘️": "1F3D8 FE0F",
            "🏘": "1F3D8",
            "🏚️": "1F3DA FE0F",
            "🏚": "1F3DA",
            "🏠": "1F3E0",
            "🏡": "1F3E1",
            "🏢": "1F3E2",
            "🏣": "1F3E3",
            "🏤": "1F3E4",
            "🏥": "1F3E5",
            "🏦": "1F3E6",
            "🏨": "1F3E8",
            "🏩": "1F3E9",
            "🏪": "1F3EA",
            "🏫": "1F3EB",
            "🏬": "1F3EC",
            "🏭": "1F3ED",
            "🏯": "1F3EF",
            "🏰": "1F3F0",
            "💒": "1F492",
            "🗼": "1F5FC",
            "🗽": "1F5FD",
            "⛪": "26EA",
            "🕌": "1F54C",
            "🛕": "1F6D5",
            "🕍": "1F54D",
            "⛩️": "26E9 FE0F",
            "⛩": "26E9",
            "🕋": "1F54B",
            "⛲": "26F2",
            "⛺": "26FA",
            "🌁": "1F301",
            "🌃": "1F303",
            "🏙️": "1F3D9 FE0F",
            "🏙": "1F3D9",
            "🌄": "1F304",
            "🌅": "1F305",
            "🌆": "1F306",
            "🌇": "1F307",
            "🌉": "1F309",
            "♨️": "2668 FE0F",
            "♨": "2668",
            "🎠": "1F3A0",
            U0001f6dd: "1F6DD",
            "🎡": "1F3A1",
            "🎢": "1F3A2",
            "💈": "1F488",
            "🎪": "1F3AA",
            "🚂": "1F682",
            "🚃": "1F683",
            "🚄": "1F684",
            "🚅": "1F685",
            "🚆": "1F686",
            "🚇": "1F687",
            "🚈": "1F688",
            "🚉": "1F689",
            "🚊": "1F68A",
            "🚝": "1F69D",
            "🚞": "1F69E",
            "🚋": "1F68B",
            "🚌": "1F68C",
            "🚍": "1F68D",
            "🚎": "1F68E",
            "🚐": "1F690",
            "🚑": "1F691",
            "🚒": "1F692",
            "🚓": "1F693",
            "🚔": "1F694",
            "🚕": "1F695",
            "🚖": "1F696",
            "🚗": "1F697",
            "🚘": "1F698",
            "🚙": "1F699",
            "🛻": "1F6FB",
            "🚚": "1F69A",
            "🚛": "1F69B",
            "🚜": "1F69C",
            "🏎️": "1F3CE FE0F",
            "🏎": "1F3CE",
            "🏍️": "1F3CD FE0F",
            "🏍": "1F3CD",
            "🛵": "1F6F5",
            "🦽": "1F9BD",
            "🦼": "1F9BC",
            "🛺": "1F6FA",
            "🚲": "1F6B2",
            "🛴": "1F6F4",
            "🛹": "1F6F9",
            "🛼": "1F6FC",
            "🚏": "1F68F",
            "🛣️": "1F6E3 FE0F",
            "🛣": "1F6E3",
            "🛤️": "1F6E4 FE0F",
            "🛤": "1F6E4",
            "🛢️": "1F6E2 FE0F",
            "🛢": "1F6E2",
            "⛽": "26FD",
            U0001f6de: "1F6DE",
            "🚨": "1F6A8",
            "🚥": "1F6A5",
            "🚦": "1F6A6",
            "🛑": "1F6D1",
            "🚧": "1F6A7",
            "⚓": "2693",
            U0001f6df: "1F6DF",
            "⛵": "26F5",
            "🛶": "1F6F6",
            "🚤": "1F6A4",
            "🛳️": "1F6F3 FE0F",
            "🛳": "1F6F3",
            "⛴️": "26F4 FE0F",
            "⛴": "26F4",
            "🛥️": "1F6E5 FE0F",
            "🛥": "1F6E5",
            "🚢": "1F6A2",
            "✈️": "2708 FE0F",
            "✈": "2708",
            "🛩️": "1F6E9 FE0F",
            "🛩": "1F6E9",
            "🛫": "1F6EB",
            "🛬": "1F6EC",
            "🪂": "1FA82",
            "💺": "1F4BA",
            "🚁": "1F681",
            "🚟": "1F69F",
            "🚠": "1F6A0",
            "🚡": "1F6A1",
            "🛰️": "1F6F0 FE0F",
            "🛰": "1F6F0",
            "🚀": "1F680",
            "🛸": "1F6F8",
            "🛎️": "1F6CE FE0F",
            "🛎": "1F6CE",
            "🧳": "1F9F3",
            "⌛": "231B",
            "⏳": "23F3",
            "⌚": "231A",
            "⏰": "23F0",
            "⏱️": "23F1 FE0F",
            "⏱": "23F1",
            "⏲️": "23F2 FE0F",
            "⏲": "23F2",
            "🕰️": "1F570 FE0F",
            "🕰": "1F570",
            "🕛": "1F55B",
            "🕧": "1F567",
            "🕐": "1F550",
            "🕜": "1F55C",
            "🕑": "1F551",
            "🕝": "1F55D",
            "🕒": "1F552",
            "🕞": "1F55E",
            "🕓": "1F553",
            "🕟": "1F55F",
            "🕔": "1F554",
            "🕠": "1F560",
            "🕕": "1F555",
            "🕡": "1F561",
            "🕖": "1F556",
            "🕢": "1F562",
            "🕗": "1F557",
            "🕣": "1F563",
            "🕘": "1F558",
            "🕤": "1F564",
            "🕙": "1F559",
            "🕥": "1F565",
            "🕚": "1F55A",
            "🕦": "1F566",
            "🌑": "1F311",
            "🌒": "1F312",
            "🌓": "1F313",
            "🌔": "1F314",
            "🌕": "1F315",
            "🌖": "1F316",
            "🌗": "1F317",
            "🌘": "1F318",
            "🌙": "1F319",
            "🌚": "1F31A",
            "🌛": "1F31B",
            "🌜": "1F31C",
            "🌡️": "1F321 FE0F",
            "🌡": "1F321",
            "☀️": "2600 FE0F",
            "☀": "2600",
            "🌝": "1F31D",
            "🌞": "1F31E",
            "🪐": "1FA90",
            "⭐": "2B50",
            "🌟": "1F31F",
            "🌠": "1F320",
            "🌌": "1F30C",
            "☁️": "2601 FE0F",
            "☁": "2601",
            "⛅": "26C5",
            "⛈️": "26C8 FE0F",
            "⛈": "26C8",
            "🌤️": "1F324 FE0F",
            "🌤": "1F324",
            "🌥️": "1F325 FE0F",
            "🌥": "1F325",
            "🌦️": "1F326 FE0F",
            "🌦": "1F326",
            "🌧️": "1F327 FE0F",
            "🌧": "1F327",
            "🌨️": "1F328 FE0F",
            "🌨": "1F328",
            "🌩️": "1F329 FE0F",
            "🌩": "1F329",
            "🌪️": "1F32A FE0F",
            "🌪": "1F32A",
            "🌫️": "1F32B FE0F",
            "🌫": "1F32B",
            "🌬️": "1F32C FE0F",
            "🌬": "1F32C",
            "🌀": "1F300",
            "🌈": "1F308",
            "🌂": "1F302",
            "☂️": "2602 FE0F",
            "☂": "2602",
            "☔": "2614",
            "⛱️": "26F1 FE0F",
            "⛱": "26F1",
            "⚡": "26A1",
            "❄️": "2744 FE0F",
            "❄": "2744",
            "☃️": "2603 FE0F",
            "☃": "2603",
            "⛄": "26C4",
            "☄️": "2604 FE0F",
            "☄": "2604",
            "🔥": "1F525",
            "💧": "1F4A7",
            "🌊": "1F30A",
            "🎃": "1F383",
            "🎄": "1F384",
            "🎆": "1F386",
            "🎇": "1F387",
            "🧨": "1F9E8",
            "✨": "2728",
            "🎈": "1F388",
            "🎉": "1F389",
            "🎊": "1F38A",
            "🎋": "1F38B",
            "🎍": "1F38D",
            "🎎": "1F38E",
            "🎏": "1F38F",
            "🎐": "1F390",
            "🎑": "1F391",
            "🧧": "1F9E7",
            "🎀": "1F380",
            "🎁": "1F381",
            "🎗️": "1F397 FE0F",
            "🎗": "1F397",
            "🎟️": "1F39F FE0F",
            "🎟": "1F39F",
            "🎫": "1F3AB",
            "🎖️": "1F396 FE0F",
            "🎖": "1F396",
            "🏆": "1F3C6",
            "🏅": "1F3C5",
            "🥇": "1F947",
            "🥈": "1F948",
            "🥉": "1F949",
            "⚽": "26BD",
            "⚾": "26BE",
            "🥎": "1F94E",
            "🏀": "1F3C0",
            "🏐": "1F3D0",
            "🏈": "1F3C8",
            "🏉": "1F3C9",
            "🎾": "1F3BE",
            "🥏": "1F94F",
            "🎳": "1F3B3",
            "🏏": "1F3CF",
            "🏑": "1F3D1",
            "🏒": "1F3D2",
            "🥍": "1F94D",
            "🏓": "1F3D3",
            "🏸": "1F3F8",
            "🥊": "1F94A",
            "🥋": "1F94B",
            "🥅": "1F945",
            "⛳": "26F3",
            "⛸️": "26F8 FE0F",
            "⛸": "26F8",
            "🎣": "1F3A3",
            "🤿": "1F93F",
            "🎽": "1F3BD",
            "🎿": "1F3BF",
            "🛷": "1F6F7",
            "🥌": "1F94C",
            "🎯": "1F3AF",
            "🪀": "1FA80",
            "🪁": "1FA81",
            "🔫": "1F52B",
            "🎱": "1F3B1",
            "🔮": "1F52E",
            "🪄": "1FA84",
            "🎮": "1F3AE",
            "🕹️": "1F579 FE0F",
            "🕹": "1F579",
            "🎰": "1F3B0",
            "🎲": "1F3B2",
            "🧩": "1F9E9",
            "🧸": "1F9F8",
            "🪅": "1FA85",
            U0001faa9: "1FAA9",
            "🪆": "1FA86",
            "♠️": "2660 FE0F",
            "♠": "2660",
            "♥️": "2665 FE0F",
            "♥": "2665",
            "♦️": "2666 FE0F",
            "♦": "2666",
            "♣️": "2663 FE0F",
            "♣": "2663",
            "♟️": "265F FE0F",
            "♟": "265F",
            "🃏": "1F0CF",
            "🀄": "1F004",
            "🎴": "1F3B4",
            "🎭": "1F3AD",
            "🖼️": "1F5BC FE0F",
            "🖼": "1F5BC",
            "🎨": "1F3A8",
            "🧵": "1F9F5",
            "🪡": "1FAA1",
            "🧶": "1F9F6",
            "🪢": "1FAA2",
            "👓": "1F453",
            "🕶️": "1F576 FE0F",
            "🕶": "1F576",
            "🥽": "1F97D",
            "🥼": "1F97C",
            "🦺": "1F9BA",
            "👔": "1F454",
            "👕": "1F455",
            "👖": "1F456",
            "🧣": "1F9E3",
            "🧤": "1F9E4",
            "🧥": "1F9E5",
            "🧦": "1F9E6",
            "👗": "1F457",
            "👘": "1F458",
            "🥻": "1F97B",
            "🩱": "1FA71",
            "🩲": "1FA72",
            "🩳": "1FA73",
            "👙": "1F459",
            "👚": "1F45A",
            U0001faad: "1FAAD",
            "👛": "1F45B",
            "👜": "1F45C",
            "👝": "1F45D",
            "🛍️": "1F6CD FE0F",
            "🛍": "1F6CD",
            "🎒": "1F392",
            "🩴": "1FA74",
            "👞": "1F45E",
            "👟": "1F45F",
            "🥾": "1F97E",
            "🥿": "1F97F",
            "👠": "1F460",
            "👡": "1F461",
            "🩰": "1FA70",
            "👢": "1F462",
            U0001faae: "1FAAE",
            "👑": "1F451",
            "👒": "1F452",
            "🎩": "1F3A9",
            "🎓": "1F393",
            "🧢": "1F9E2",
            "🪖": "1FA96",
            "⛑️": "26D1 FE0F",
            "⛑": "26D1",
            "📿": "1F4FF",
            "💄": "1F484",
            "💍": "1F48D",
            "💎": "1F48E",
            "🔇": "1F507",
            "🔈": "1F508",
            "🔉": "1F509",
            "🔊": "1F50A",
            "📢": "1F4E2",
            "📣": "1F4E3",
            "📯": "1F4EF",
            "🔔": "1F514",
            "🔕": "1F515",
            "🎼": "1F3BC",
            "🎵": "1F3B5",
            "🎶": "1F3B6",
            "🎙️": "1F399 FE0F",
            "🎙": "1F399",
            "🎚️": "1F39A FE0F",
            "🎚": "1F39A",
            "🎛️": "1F39B FE0F",
            "🎛": "1F39B",
            "🎤": "1F3A4",
            "🎧": "1F3A7",
            "📻": "1F4FB",
            "🎷": "1F3B7",
            "🪗": "1FA97",
            "🎸": "1F3B8",
            "🎹": "1F3B9",
            "🎺": "1F3BA",
            "🎻": "1F3BB",
            "🪕": "1FA95",
            "🥁": "1F941",
            "🪘": "1FA98",
            U0001fa87: "1FA87",
            U0001fa88: "1FA88",
            "📱": "1F4F1",
            "📲": "1F4F2",
            "☎️": "260E FE0F",
            "☎": "260E",
            "📞": "1F4DE",
            "📟": "1F4DF",
            "📠": "1F4E0",
            "🔋": "1F50B",
            U0001faab: "1FAAB",
            "🔌": "1F50C",
            "💻": "1F4BB",
            "🖥️": "1F5A5 FE0F",
            "🖥": "1F5A5",
            "🖨️": "1F5A8 FE0F",
            "🖨": "1F5A8",
            "⌨️": "2328 FE0F",
            "⌨": "2328",
            "🖱️": "1F5B1 FE0F",
            "🖱": "1F5B1",
            "🖲️": "1F5B2 FE0F",
            "🖲": "1F5B2",
            "💽": "1F4BD",
            "💾": "1F4BE",
            "💿": "1F4BF",
            "📀": "1F4C0",
            "🧮": "1F9EE",
            "🎥": "1F3A5",
            "🎞️": "1F39E FE0F",
            "🎞": "1F39E",
            "📽️": "1F4FD FE0F",
            "📽": "1F4FD",
            "🎬": "1F3AC",
            "📺": "1F4FA",
            "📷": "1F4F7",
            "📸": "1F4F8",
            "📹": "1F4F9",
            "📼": "1F4FC",
            "🔍": "1F50D",
            "🔎": "1F50E",
            "🕯️": "1F56F FE0F",
            "🕯": "1F56F",
            "💡": "1F4A1",
            "🔦": "1F526",
            "🏮": "1F3EE",
            "🪔": "1FA94",
            "📔": "1F4D4",
            "📕": "1F4D5",
            "📖": "1F4D6",
            "📗": "1F4D7",
            "📘": "1F4D8",
            "📙": "1F4D9",
            "📚": "1F4DA",
            "📓": "1F4D3",
            "📒": "1F4D2",
            "📃": "1F4C3",
            "📜": "1F4DC",
            "📄": "1F4C4",
            "📰": "1F4F0",
            "🗞️": "1F5DE FE0F",
            "🗞": "1F5DE",
            "📑": "1F4D1",
            "🔖": "1F516",
            "🏷️": "1F3F7 FE0F",
            "🏷": "1F3F7",
            "💰": "1F4B0",
            "🪙": "1FA99",
            "💴": "1F4B4",
            "💵": "1F4B5",
            "💶": "1F4B6",
            "💷": "1F4B7",
            "💸": "1F4B8",
            "💳": "1F4B3",
            "🧾": "1F9FE",
            "💹": "1F4B9",
            "✉️": "2709 FE0F",
            "✉": "2709",
            "📧": "1F4E7",
            "📨": "1F4E8",
            "📩": "1F4E9",
            "📤": "1F4E4",
            "📥": "1F4E5",
            "📦": "1F4E6",
            "📫": "1F4EB",
            "📪": "1F4EA",
            "📬": "1F4EC",
            "📭": "1F4ED",
            "📮": "1F4EE",
            "🗳️": "1F5F3 FE0F",
            "🗳": "1F5F3",
            "✏️": "270F FE0F",
            "✏": "270F",
            "✒️": "2712 FE0F",
            "✒": "2712",
            "🖋️": "1F58B FE0F",
            "🖋": "1F58B",
            "🖊️": "1F58A FE0F",
            "🖊": "1F58A",
            "🖌️": "1F58C FE0F",
            "🖌": "1F58C",
            "🖍️": "1F58D FE0F",
            "🖍": "1F58D",
            "📝": "1F4DD",
            "💼": "1F4BC",
            "📁": "1F4C1",
            "📂": "1F4C2",
            "🗂️": "1F5C2 FE0F",
            "🗂": "1F5C2",
            "📅": "1F4C5",
            "📆": "1F4C6",
            "🗒️": "1F5D2 FE0F",
            "🗒": "1F5D2",
            "🗓️": "1F5D3 FE0F",
            "🗓": "1F5D3",
            "📇": "1F4C7",
            "📈": "1F4C8",
            "📉": "1F4C9",
            "📊": "1F4CA",
            "📋": "1F4CB",
            "📌": "1F4CC",
            "📍": "1F4CD",
            "📎": "1F4CE",
            "🖇️": "1F587 FE0F",
            "🖇": "1F587",
            "📏": "1F4CF",
            "📐": "1F4D0",
            "✂️": "2702 FE0F",
            "✂": "2702",
            "🗃️": "1F5C3 FE0F",
            "🗃": "1F5C3",
            "🗄️": "1F5C4 FE0F",
            "🗄": "1F5C4",
            "🗑️": "1F5D1 FE0F",
            "🗑": "1F5D1",
            "🔒": "1F512",
            "🔓": "1F513",
            "🔏": "1F50F",
            "🔐": "1F510",
            "🔑": "1F511",
            "🗝️": "1F5DD FE0F",
            "🗝": "1F5DD",
            "🔨": "1F528",
            "🪓": "1FA93",
            "⛏️": "26CF FE0F",
            "⛏": "26CF",
            "⚒️": "2692 FE0F",
            "⚒": "2692",
            "🛠️": "1F6E0 FE0F",
            "🛠": "1F6E0",
            "🗡️": "1F5E1 FE0F",
            "🗡": "1F5E1",
            "⚔️": "2694 FE0F",
            "⚔": "2694",
            "💣": "1F4A3",
            "🪃": "1FA83",
            "🏹": "1F3F9",
            "🛡️": "1F6E1 FE0F",
            "🛡": "1F6E1",
            "🪚": "1FA9A",
            "🔧": "1F527",
            "🪛": "1FA9B",
            "🔩": "1F529",
            "⚙️": "2699 FE0F",
            "⚙": "2699",
            "🗜️": "1F5DC FE0F",
            "🗜": "1F5DC",
            "⚖️": "2696 FE0F",
            "⚖": "2696",
            "🦯": "1F9AF",
            "🔗": "1F517",
            "⛓️\u200d💥": "26D3 FE0F 200D 1F4A5",
            "⛓\u200d💥": "26D3 200D 1F4A5",
            "⛓️": "26D3 FE0F",
            "⛓": "26D3",
            "🪝": "1FA9D",
            "🧰": "1F9F0",
            "🧲": "1F9F2",
            "🪜": "1FA9C",
            "⚗️": "2697 FE0F",
            "⚗": "2697",
            "🧪": "1F9EA",
            "🧫": "1F9EB",
            "🧬": "1F9EC",
            "🔬": "1F52C",
            "🔭": "1F52D",
            "📡": "1F4E1",
            "💉": "1F489",
            "🩸": "1FA78",
            "💊": "1F48A",
            "🩹": "1FA79",
            U0001fa7c: "1FA7C",
            "🩺": "1FA7A",
            U0001fa7b: "1FA7B",
            "🚪": "1F6AA",
            "🛗": "1F6D7",
            "🪞": "1FA9E",
            "🪟": "1FA9F",
            "🛏️": "1F6CF FE0F",
            "🛏": "1F6CF",
            "🛋️": "1F6CB FE0F",
            "🛋": "1F6CB",
            "🪑": "1FA91",
            "🚽": "1F6BD",
            "🪠": "1FAA0",
            "🚿": "1F6BF",
            "🛁": "1F6C1",
            "🪤": "1FAA4",
            "🪒": "1FA92",
            "🧴": "1F9F4",
            "🧷": "1F9F7",
            "🧹": "1F9F9",
            "🧺": "1F9FA",
            "🧻": "1F9FB",
            "🪣": "1FAA3",
            "🧼": "1F9FC",
            U0001fae7: "1FAE7",
            "🪥": "1FAA5",
            "🧽": "1F9FD",
            "🧯": "1F9EF",
            "🛒": "1F6D2",
            "🚬": "1F6AC",
            "⚰️": "26B0 FE0F",
            "⚰": "26B0",
            "🪦": "1FAA6",
            "⚱️": "26B1 FE0F",
            "⚱": "26B1",
            "🧿": "1F9FF",
            U0001faac: "1FAAC",
            "🗿": "1F5FF",
            "🪧": "1FAA7",
            U0001faaa: "1FAAA",
            "🏧": "1F3E7",
            "🚮": "1F6AE",
            "🚰": "1F6B0",
            "♿": "267F",
            "🚹": "1F6B9",
            "🚺": "1F6BA",
            "🚻": "1F6BB",
            "🚼": "1F6BC",
            "🚾": "1F6BE",
            "🛂": "1F6C2",
            "🛃": "1F6C3",
            "🛄": "1F6C4",
            "🛅": "1F6C5",
            "⚠️": "26A0 FE0F",
            "⚠": "26A0",
            "🚸": "1F6B8",
            "⛔": "26D4",
            "🚫": "1F6AB",
            "🚳": "1F6B3",
            "🚭": "1F6AD",
            "🚯": "1F6AF",
            "🚱": "1F6B1",
            "🚷": "1F6B7",
            "📵": "1F4F5",
            "🔞": "1F51E",
            "☢️": "2622 FE0F",
            "☢": "2622",
            "☣️": "2623 FE0F",
            "☣": "2623",
            "⬆️": "2B06 FE0F",
            "⬆": "2B06",
            "↗️": "2197 FE0F",
            "↗": "2197",
            "➡️": "27A1 FE0F",
            "➡": "27A1",
            "↘️": "2198 FE0F",
            "↘": "2198",
            "⬇️": "2B07 FE0F",
            "⬇": "2B07",
            "↙️": "2199 FE0F",
            "↙": "2199",
            "⬅️": "2B05 FE0F",
            "⬅": "2B05",
            "↖️": "2196 FE0F",
            "↖": "2196",
            "↕️": "2195 FE0F",
            "↕": "2195",
            "↔️": "2194 FE0F",
            "↔": "2194",
            "↩️": "21A9 FE0F",
            "↩": "21A9",
            "↪️": "21AA FE0F",
            "↪": "21AA",
            "⤴️": "2934 FE0F",
            "⤴": "2934",
            "⤵️": "2935 FE0F",
            "⤵": "2935",
            "🔃": "1F503",
            "🔄": "1F504",
            "🔙": "1F519",
            "🔚": "1F51A",
            "🔛": "1F51B",
            "🔜": "1F51C",
            "🔝": "1F51D",
            "🛐": "1F6D0",
            "⚛️": "269B FE0F",
            "⚛": "269B",
            "🕉️": "1F549 FE0F",
            "🕉": "1F549",
            "✡️": "2721 FE0F",
            "✡": "2721",
            "☸️": "2638 FE0F",
            "☸": "2638",
            "☯️": "262F FE0F",
            "☯": "262F",
            "✝️": "271D FE0F",
            "✝": "271D",
            "☦️": "2626 FE0F",
            "☦": "2626",
            "☪️": "262A FE0F",
            "☪": "262A",
            "☮️": "262E FE0F",
            "☮": "262E",
            "🕎": "1F54E",
            "🔯": "1F52F",
            U0001faaf: "1FAAF",
            "♈": "2648",
            "♉": "2649",
            "♊": "264A",
            "♋": "264B",
            "♌": "264C",
            "♍": "264D",
            "♎": "264E",
            "♏": "264F",
            "♐": "2650",
            "♑": "2651",
            "♒": "2652",
            "♓": "2653",
            "⛎": "26CE",
            "🔀": "1F500",
            "🔁": "1F501",
            "🔂": "1F502",
            "▶️": "25B6 FE0F",
            "▶": "25B6",
            "⏩": "23E9",
            "⏭️": "23ED FE0F",
            "⏭": "23ED",
            "⏯️": "23EF FE0F",
            "⏯": "23EF",
            "◀️": "25C0 FE0F",
            "◀": "25C0",
            "⏪": "23EA",
            "⏮️": "23EE FE0F",
            "⏮": "23EE",
            "🔼": "1F53C",
            "⏫": "23EB",
            "🔽": "1F53D",
            "⏬": "23EC",
            "⏸️": "23F8 FE0F",
            "⏸": "23F8",
            "⏹️": "23F9 FE0F",
            "⏹": "23F9",
            "⏺️": "23FA FE0F",
            "⏺": "23FA",
            "⏏️": "23CF FE0F",
            "⏏": "23CF",
            "🎦": "1F3A6",
            "🔅": "1F505",
            "🔆": "1F506",
            "📶": "1F4F6",
            U0001f6dc: "1F6DC",
            "📳": "1F4F3",
            "📴": "1F4F4",
            "♀️": "2640 FE0F",
            "♀": "2640",
            "♂️": "2642 FE0F",
            "♂": "2642",
            "⚧️": "26A7 FE0F",
            "⚧": "26A7",
            "✖️": "2716 FE0F",
            "✖": "2716",
            "➕": "2795",
            "➖": "2796",
            "➗": "2797",
            U0001f7f0: "1F7F0",
            "♾️": "267E FE0F",
            "♾": "267E",
            "‼️": "203C FE0F",
            "‼": "203C",
            "⁉️": "2049 FE0F",
            "⁉": "2049",
            "❓": "2753",
            "❔": "2754",
            "❕": "2755",
            "❗": "2757",
            "〰️": "3030 FE0F",
            "〰": "3030",
            "💱": "1F4B1",
            "💲": "1F4B2",
            "⚕️": "2695 FE0F",
            "⚕": "2695",
            "♻️": "267B FE0F",
            "♻": "267B",
            "⚜️": "269C FE0F",
            "⚜": "269C",
            "🔱": "1F531",
            "📛": "1F4DB",
            "🔰": "1F530",
            "⭕": "2B55",
            "✅": "2705",
            "☑️": "2611 FE0F",
            "☑": "2611",
            "✔️": "2714 FE0F",
            "✔": "2714",
            "❌": "274C",
            "❎": "274E",
            "➰": "27B0",
            "➿": "27BF",
            "〽️": "303D FE0F",
            "〽": "303D",
            "✳️": "2733 FE0F",
            "✳": "2733",
            "✴️": "2734 FE0F",
            "✴": "2734",
            "❇️": "2747 FE0F",
            "❇": "2747",
            "©️": "00A9 FE0F",
            "©": "00A9",
            "®️": "00AE FE0F",
            "®": "00AE",
            "™️": "2122 FE0F",
            "™": "2122",
            "*️⃣": "002A FE0F 20E3",
            "*⃣": "002A 20E3",
            "0️⃣": "0030 FE0F 20E3",
            "0⃣": "0030 20E3",
            "1️⃣": "0031 FE0F 20E3",
            "1⃣": "0031 20E3",
            "2️⃣": "0032 FE0F 20E3",
            "2⃣": "0032 20E3",
            "3️⃣": "0033 FE0F 20E3",
            "3⃣": "0033 20E3",
            "4️⃣": "0034 FE0F 20E3",
            "4⃣": "0034 20E3",
            "5️⃣": "0035 FE0F 20E3",
            "5⃣": "0035 20E3",
            "6️⃣": "0036 FE0F 20E3",
            "6⃣": "0036 20E3",
            "7️⃣": "0037 FE0F 20E3",
            "7⃣": "0037 20E3",
            "8️⃣": "0038 FE0F 20E3",
            "8⃣": "0038 20E3",
            "9️⃣": "0039 FE0F 20E3",
            "9⃣": "0039 20E3",
            "🔟": "1F51F",
            "🔠": "1F520",
            "🔡": "1F521",
            "🔢": "1F522",
            "🔣": "1F523",
            "🔤": "1F524",
            "🅰️": "1F170 FE0F",
            "🅰": "1F170",
            "🆎": "1F18E",
            "🅱️": "1F171 FE0F",
            "🅱": "1F171",
            "🆑": "1F191",
            "🆒": "1F192",
            "🆓": "1F193",
            ℹ️: "2139 FE0F",
            ℹ: "2139",
            "🆔": "1F194",
            "Ⓜ️": "24C2 FE0F",
            "Ⓜ": "24C2",
            "🆕": "1F195",
            "🆖": "1F196",
            "🅾️": "1F17E FE0F",
            "🅾": "1F17E",
            "🆗": "1F197",
            "🅿️": "1F17F FE0F",
            "🅿": "1F17F",
            "🆘": "1F198",
            "🆙": "1F199",
            "🆚": "1F19A",
            "🈁": "1F201",
            "🈂️": "1F202 FE0F",
            "🈂": "1F202",
            "🈷️": "1F237 FE0F",
            "🈷": "1F237",
            "🈶": "1F236",
            "🈯": "1F22F",
            "🉐": "1F250",
            "🈹": "1F239",
            "🈚": "1F21A",
            "🈲": "1F232",
            "🉑": "1F251",
            "🈸": "1F238",
            "🈴": "1F234",
            "🈳": "1F233",
            "㊗️": "3297 FE0F",
            "㊗": "3297",
            "㊙️": "3299 FE0F",
            "㊙": "3299",
            "🈺": "1F23A",
            "🈵": "1F235",
            "🔴": "1F534",
            "🟠": "1F7E0",
            "🟡": "1F7E1",
            "🟢": "1F7E2",
            "🔵": "1F535",
            "🟣": "1F7E3",
            "🟤": "1F7E4",
            "⚫": "26AB",
            "⚪": "26AA",
            "🟥": "1F7E5",
            "🟧": "1F7E7",
            "🟨": "1F7E8",
            "🟩": "1F7E9",
            "🟦": "1F7E6",
            "🟪": "1F7EA",
            "🟫": "1F7EB",
            "⬛": "2B1B",
            "⬜": "2B1C",
            "◼️": "25FC FE0F",
            "◼": "25FC",
            "◻️": "25FB FE0F",
            "◻": "25FB",
            "◾": "25FE",
            "◽": "25FD",
            "▪️": "25AA FE0F",
            "▪": "25AA",
            "▫️": "25AB FE0F",
            "▫": "25AB",
            "🔶": "1F536",
            "🔷": "1F537",
            "🔸": "1F538",
            "🔹": "1F539",
            "🔺": "1F53A",
            "🔻": "1F53B",
            "💠": "1F4A0",
            "🔘": "1F518",
            "🔳": "1F533",
            "🔲": "1F532",
            "🏁": "1F3C1",
            "🚩": "1F6A9",
            "🎌": "1F38C",
            "🏴": "1F3F4",
            "🏳️": "1F3F3 FE0F",
            "🏳": "1F3F3",
            "🏳️\u200d🌈": "1F3F3 FE0F 200D 1F308",
            "🏳\u200d🌈": "1F3F3 200D 1F308",
            "🏳️\u200d⚧️": "1F3F3 FE0F 200D 26A7 FE0F",
            "🏳\u200d⚧️": "1F3F3 200D 26A7 FE0F",
            "🏳️\u200d⚧": "1F3F3 FE0F 200D 26A7",
            "🏳\u200d⚧": "1F3F3 200D 26A7",
            "🏴\u200d☠️": "1F3F4 200D 2620 FE0F",
            "🏴\u200d☠": "1F3F4 200D 2620",
            "🇦🇨": "1F1E6 1F1E8",
            "🇦🇩": "1F1E6 1F1E9",
            "🇦🇪": "1F1E6 1F1EA",
            "🇦🇫": "1F1E6 1F1EB",
            "🇦🇬": "1F1E6 1F1EC",
            "🇦🇮": "1F1E6 1F1EE",
            "🇦🇱": "1F1E6 1F1F1",
            "🇦🇲": "1F1E6 1F1F2",
            "🇦🇴": "1F1E6 1F1F4",
            "🇦🇶": "1F1E6 1F1F6",
            "🇦🇷": "1F1E6 1F1F7",
            "🇦🇸": "1F1E6 1F1F8",
            "🇦🇹": "1F1E6 1F1F9",
            "🇦🇺": "1F1E6 1F1FA",
            "🇦🇼": "1F1E6 1F1FC",
            "🇦🇽": "1F1E6 1F1FD",
            "🇦🇿": "1F1E6 1F1FF",
            "🇧🇦": "1F1E7 1F1E6",
            "🇧🇧": "1F1E7 1F1E7",
            "🇧🇩": "1F1E7 1F1E9",
            "🇧🇪": "1F1E7 1F1EA",
            "🇧🇫": "1F1E7 1F1EB",
            "🇧🇬": "1F1E7 1F1EC",
            "🇧🇭": "1F1E7 1F1ED",
            "🇧🇮": "1F1E7 1F1EE",
            "🇧🇯": "1F1E7 1F1EF",
            "🇧🇱": "1F1E7 1F1F1",
            "🇧🇲": "1F1E7 1F1F2",
            "🇧🇳": "1F1E7 1F1F3",
            "🇧🇴": "1F1E7 1F1F4",
            "🇧🇶": "1F1E7 1F1F6",
            "🇧🇷": "1F1E7 1F1F7",
            "🇧🇸": "1F1E7 1F1F8",
            "🇧🇹": "1F1E7 1F1F9",
            "🇧🇻": "1F1E7 1F1FB",
            "🇧🇼": "1F1E7 1F1FC",
            "🇧🇾": "1F1E7 1F1FE",
            "🇧🇿": "1F1E7 1F1FF",
            "🇨🇦": "1F1E8 1F1E6",
            "🇨🇨": "1F1E8 1F1E8",
            "🇨🇩": "1F1E8 1F1E9",
            "🇨🇫": "1F1E8 1F1EB",
            "🇨🇬": "1F1E8 1F1EC",
            "🇨🇭": "1F1E8 1F1ED",
            "🇨🇮": "1F1E8 1F1EE",
            "🇨🇰": "1F1E8 1F1F0",
            "🇨🇱": "1F1E8 1F1F1",
            "🇨🇲": "1F1E8 1F1F2",
            "🇨🇳": "1F1E8 1F1F3",
            "🇨🇴": "1F1E8 1F1F4",
            "🇨🇵": "1F1E8 1F1F5",
            "🇨🇷": "1F1E8 1F1F7",
            "🇨🇺": "1F1E8 1F1FA",
            "🇨🇻": "1F1E8 1F1FB",
            "🇨🇼": "1F1E8 1F1FC",
            "🇨🇽": "1F1E8 1F1FD",
            "🇨🇾": "1F1E8 1F1FE",
            "🇨🇿": "1F1E8 1F1FF",
            "🇩🇪": "1F1E9 1F1EA",
            "🇩🇬": "1F1E9 1F1EC",
            "🇩🇯": "1F1E9 1F1EF",
            "🇩🇰": "1F1E9 1F1F0",
            "🇩🇲": "1F1E9 1F1F2",
            "🇩🇴": "1F1E9 1F1F4",
            "🇩🇿": "1F1E9 1F1FF",
            "🇪🇦": "1F1EA 1F1E6",
            "🇪🇨": "1F1EA 1F1E8",
            "🇪🇪": "1F1EA 1F1EA",
            "🇪🇬": "1F1EA 1F1EC",
            "🇪🇭": "1F1EA 1F1ED",
            "🇪🇷": "1F1EA 1F1F7",
            "🇪🇸": "1F1EA 1F1F8",
            "🇪🇹": "1F1EA 1F1F9",
            "🇪🇺": "1F1EA 1F1FA",
            "🇫🇮": "1F1EB 1F1EE",
            "🇫🇯": "1F1EB 1F1EF",
            "🇫🇰": "1F1EB 1F1F0",
            "🇫🇲": "1F1EB 1F1F2",
            "🇫🇴": "1F1EB 1F1F4",
            "🇫🇷": "1F1EB 1F1F7",
            "🇬🇦": "1F1EC 1F1E6",
            "🇬🇧": "1F1EC 1F1E7",
            "🇬🇩": "1F1EC 1F1E9",
            "🇬🇪": "1F1EC 1F1EA",
            "🇬🇫": "1F1EC 1F1EB",
            "🇬🇬": "1F1EC 1F1EC",
            "🇬🇭": "1F1EC 1F1ED",
            "🇬🇮": "1F1EC 1F1EE",
            "🇬🇱": "1F1EC 1F1F1",
            "🇬🇲": "1F1EC 1F1F2",
            "🇬🇳": "1F1EC 1F1F3",
            "🇬🇵": "1F1EC 1F1F5",
            "🇬🇶": "1F1EC 1F1F6",
            "🇬🇷": "1F1EC 1F1F7",
            "🇬🇸": "1F1EC 1F1F8",
            "🇬🇹": "1F1EC 1F1F9",
            "🇬🇺": "1F1EC 1F1FA",
            "🇬🇼": "1F1EC 1F1FC",
            "🇬🇾": "1F1EC 1F1FE",
            "🇭🇰": "1F1ED 1F1F0",
            "🇭🇲": "1F1ED 1F1F2",
            "🇭🇳": "1F1ED 1F1F3",
            "🇭🇷": "1F1ED 1F1F7",
            "🇭🇹": "1F1ED 1F1F9",
            "🇭🇺": "1F1ED 1F1FA",
            "🇮🇨": "1F1EE 1F1E8",
            "🇮🇩": "1F1EE 1F1E9",
            "🇮🇪": "1F1EE 1F1EA",
            "🇮🇱": "1F1EE 1F1F1",
            "🇮🇲": "1F1EE 1F1F2",
            "🇮🇳": "1F1EE 1F1F3",
            "🇮🇴": "1F1EE 1F1F4",
            "🇮🇶": "1F1EE 1F1F6",
            "🇮🇷": "1F1EE 1F1F7",
            "🇮🇸": "1F1EE 1F1F8",
            "🇮🇹": "1F1EE 1F1F9",
            "🇯🇪": "1F1EF 1F1EA",
            "🇯🇲": "1F1EF 1F1F2",
            "🇯🇴": "1F1EF 1F1F4",
            "🇯🇵": "1F1EF 1F1F5",
            "🇰🇪": "1F1F0 1F1EA",
            "🇰🇬": "1F1F0 1F1EC",
            "🇰🇭": "1F1F0 1F1ED",
            "🇰🇮": "1F1F0 1F1EE",
            "🇰🇲": "1F1F0 1F1F2",
            "🇰🇳": "1F1F0 1F1F3",
            "🇰🇵": "1F1F0 1F1F5",
            "🇰🇷": "1F1F0 1F1F7",
            "🇰🇼": "1F1F0 1F1FC",
            "🇰🇾": "1F1F0 1F1FE",
            "🇰🇿": "1F1F0 1F1FF",
            "🇱🇦": "1F1F1 1F1E6",
            "🇱🇧": "1F1F1 1F1E7",
            "🇱🇨": "1F1F1 1F1E8",
            "🇱🇮": "1F1F1 1F1EE",
            "🇱🇰": "1F1F1 1F1F0",
            "🇱🇷": "1F1F1 1F1F7",
            "🇱🇸": "1F1F1 1F1F8",
            "🇱🇹": "1F1F1 1F1F9",
            "🇱🇺": "1F1F1 1F1FA",
            "🇱🇻": "1F1F1 1F1FB",
            "🇱🇾": "1F1F1 1F1FE",
            "🇲🇦": "1F1F2 1F1E6",
            "🇲🇨": "1F1F2 1F1E8",
            "🇲🇩": "1F1F2 1F1E9",
            "🇲🇪": "1F1F2 1F1EA",
            "🇲🇫": "1F1F2 1F1EB",
            "🇲🇬": "1F1F2 1F1EC",
            "🇲🇭": "1F1F2 1F1ED",
            "🇲🇰": "1F1F2 1F1F0",
            "🇲🇱": "1F1F2 1F1F1",
            "🇲🇲": "1F1F2 1F1F2",
            "🇲🇳": "1F1F2 1F1F3",
            "🇲🇴": "1F1F2 1F1F4",
            "🇲🇵": "1F1F2 1F1F5",
            "🇲🇶": "1F1F2 1F1F6",
            "🇲🇷": "1F1F2 1F1F7",
            "🇲🇸": "1F1F2 1F1F8",
            "🇲🇹": "1F1F2 1F1F9",
            "🇲🇺": "1F1F2 1F1FA",
            "🇲🇻": "1F1F2 1F1FB",
            "🇲🇼": "1F1F2 1F1FC",
            "🇲🇽": "1F1F2 1F1FD",
            "🇲🇾": "1F1F2 1F1FE",
            "🇲🇿": "1F1F2 1F1FF",
            "🇳🇦": "1F1F3 1F1E6",
            "🇳🇨": "1F1F3 1F1E8",
            "🇳🇪": "1F1F3 1F1EA",
            "🇳🇫": "1F1F3 1F1EB",
            "🇳🇬": "1F1F3 1F1EC",
            "🇳🇮": "1F1F3 1F1EE",
            "🇳🇱": "1F1F3 1F1F1",
            "🇳🇴": "1F1F3 1F1F4",
            "🇳🇵": "1F1F3 1F1F5",
            "🇳🇷": "1F1F3 1F1F7",
            "🇳🇺": "1F1F3 1F1FA",
            "🇳🇿": "1F1F3 1F1FF",
            "🇴🇲": "1F1F4 1F1F2",
            "🇵🇦": "1F1F5 1F1E6",
            "🇵🇪": "1F1F5 1F1EA",
            "🇵🇫": "1F1F5 1F1EB",
            "🇵🇬": "1F1F5 1F1EC",
            "🇵🇭": "1F1F5 1F1ED",
            "🇵🇰": "1F1F5 1F1F0",
            "🇵🇱": "1F1F5 1F1F1",
            "🇵🇲": "1F1F5 1F1F2",
            "🇵🇳": "1F1F5 1F1F3",
            "🇵🇷": "1F1F5 1F1F7",
            "🇵🇸": "1F1F5 1F1F8",
            "🇵🇹": "1F1F5 1F1F9",
            "🇵🇼": "1F1F5 1F1FC",
            "🇵🇾": "1F1F5 1F1FE",
            "🇶🇦": "1F1F6 1F1E6",
            "🇷🇪": "1F1F7 1F1EA",
            "🇷🇴": "1F1F7 1F1F4",
            "🇷🇸": "1F1F7 1F1F8",
            "🇷🇺": "1F1F7 1F1FA",
            "🇷🇼": "1F1F7 1F1FC",
            "🇸🇦": "1F1F8 1F1E6",
            "🇸🇧": "1F1F8 1F1E7",
            "🇸🇨": "1F1F8 1F1E8",
            "🇸🇩": "1F1F8 1F1E9",
            "🇸🇪": "1F1F8 1F1EA",
            "🇸🇬": "1F1F8 1F1EC",
            "🇸🇭": "1F1F8 1F1ED",
            "🇸🇮": "1F1F8 1F1EE",
            "🇸🇯": "1F1F8 1F1EF",
            "🇸🇰": "1F1F8 1F1F0",
            "🇸🇱": "1F1F8 1F1F1",
            "🇸🇲": "1F1F8 1F1F2",
            "🇸🇳": "1F1F8 1F1F3",
            "🇸🇴": "1F1F8 1F1F4",
            "🇸🇷": "1F1F8 1F1F7",
            "🇸🇸": "1F1F8 1F1F8",
            "🇸🇹": "1F1F8 1F1F9",
            "🇸🇻": "1F1F8 1F1FB",
            "🇸🇽": "1F1F8 1F1FD",
            "🇸🇾": "1F1F8 1F1FE",
            "🇸🇿": "1F1F8 1F1FF",
            "🇹🇦": "1F1F9 1F1E6",
            "🇹🇨": "1F1F9 1F1E8",
            "🇹🇩": "1F1F9 1F1E9",
            "🇹🇫": "1F1F9 1F1EB",
            "🇹🇬": "1F1F9 1F1EC",
            "🇹🇭": "1F1F9 1F1ED",
            "🇹🇯": "1F1F9 1F1EF",
            "🇹🇰": "1F1F9 1F1F0",
            "🇹🇱": "1F1F9 1F1F1",
            "🇹🇲": "1F1F9 1F1F2",
            "🇹🇳": "1F1F9 1F1F3",
            "🇹🇴": "1F1F9 1F1F4",
            "🇹🇷": "1F1F9 1F1F7",
            "🇹🇹": "1F1F9 1F1F9",
            "🇹🇻": "1F1F9 1F1FB",
            "🇹🇼": "1F1F9 1F1FC",
            "🇹🇿": "1F1F9 1F1FF",
            "🇺🇦": "1F1FA 1F1E6",
            "🇺🇬": "1F1FA 1F1EC",
            "🇺🇲": "1F1FA 1F1F2",
            "🇺🇳": "1F1FA 1F1F3",
            "🇺🇸": "1F1FA 1F1F8",
            "🇺🇾": "1F1FA 1F1FE",
            "🇺🇿": "1F1FA 1F1FF",
            "🇻🇦": "1F1FB 1F1E6",
            "🇻🇨": "1F1FB 1F1E8",
            "🇻🇪": "1F1FB 1F1EA",
            "🇻🇬": "1F1FB 1F1EC",
            "🇻🇮": "1F1FB 1F1EE",
            "🇻🇳": "1F1FB 1F1F3",
            "🇻🇺": "1F1FB 1F1FA",
            "🇼🇫": "1F1FC 1F1EB",
            "🇼🇸": "1F1FC 1F1F8",
            "🇽🇰": "1F1FD 1F1F0",
            "🇾🇪": "1F1FE 1F1EA",
            "🇾🇹": "1F1FE 1F1F9",
            "🇿🇦": "1F1FF 1F1E6",
            "🇿🇲": "1F1FF 1F1F2",
            "🇿🇼": "1F1FF 1F1FC",
            "🏴U000e0067U000e0062U000e0065U000e006eU000e0067U000e007f":
              "1F3F4 E0067 E0062 E0065 E006E E0067 E007F",
            "🏴U000e0067U000e0062U000e0073U000e0063U000e0074U000e007f":
              "1F3F4 E0067 E0062 E0073 E0063 E0074 E007F",
            "🏴U000e0067U000e0062U000e0077U000e006cU000e0073U000e007f":
              "1F3F4 E0067 E0062 E0077 E006C E0073 E007F",
          };
          var count = 0;
          // Function to hash a string (simple hash function for demonstration)
          function hashString(str) {
            let hash = 0,
              i,
              chr;
            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
              chr = str.charCodeAt(i);
              hash = (hash << 5) - hash + chr;
              hash |= 0; // Convert to 32bit integer
            }
            return hash;
          }

          // Function to collect dimensions of emojis
          async function collectEmojiDimensions(emojis) {
            return new Promise((resolve) => {
              const results = [];

              // Create an off-screen span to render emojis
              const span = document.createElement("span");
              span.style.fontSize = "300px";
              span.style.position = "absolute";
              span.style.left = "-9999px"; // Off-screen

              document.body.appendChild(span);

              // Loop over each emoji in the dictionary
              for (const [key, value] of Object.entries(emojis)) {
                // if (count % 10 === 0) {
                //     await sleep(100);
                // }
                // Set the emoji as text content
                span.textContent = key;

                // Get its rendered dimensions
                const rects = span.getClientRects();
                if (rects.length > 0) {
                  const rect = rects[0];
                  const dimensions = {
                    key: key, // Store the emoji name for debugging
                    width: rect.width,
                    height: rect.height,
                    top: rect.top,
                    left: rect.left,
                    bottom: rect.bottom,
                    right: rect.right,
                    x: rect.x,
                    y: rect.y,
                  };
                  results.push(dimensions);
                }
                count++;
                // if (count > 1000){
                //     console.log('more than 1000')
                // }
              }

              // Remove the span from the DOM
              document.body.removeChild(span);
              resolve(results);
            });
          }

          // Hashing function (using SHA256 for consistency)
          function hashString(str) {
            return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
          }

          // Collect dimensions
          const emojiDimensions = collectEmojiDimensions(emojis);

          // Convert dimensions to a string for hashing
          const dimensionsString = JSON.stringify(emojiDimensions);

          // Hash the dimensions string
          const emojiFingerprint = hashString(dimensionsString);

          // const raw_hash_emoji = CryptoJS.SHA256(String(emojiFingerprint))
          // raw_hash_emoji.toString(CryptoJS.enc.Hex)

          // Output the fingerprint
          // console.log('Emoji Fingerprint:', emojiFingerprint);
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("ad", async function () {
          // throw new Error('Test Error');
          var result;

          if (document.getElementById("HCsYkfOgIhjX")) {
            if (
              (navigator.brave && (await navigator.brave.isBrave())) ||
              false
            ) {
              result = "yes";
              window.ab = true;
            } else {
              result = "no";
              window.ab = false;
            }
          } else {
            result = "yes";
            window.ab = true;
          }

          if (!("ab" in window)) {
            window.ab = true;
          }

          if (window.ab == true) {
            result = "yes";
          } else {
            result = "no";
          }

          // console.log('this is result -->', result);

          return result;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("JPEG / DataUri", function () {
          // Create a canvas element
          const canvas = document.createElement("canvas");
          canvas.width = 100;
          canvas.height = 100;
          const ctx = canvas.getContext("2d");

          // Draw a red rectangle on the canvas
          ctx.fillStyle = "rgb(255,0,0)";
          ctx.fillRect(0, 0, 100, 100);

          // Convert the canvas content to a DataURL with JPEG compression
          const dataURL = canvas.toDataURL("image/jpeg", 0.5);

          // Generate a SHA-256 hash of the DataURL
          const hash = CryptoJS.SHA256(dataURL).toString(CryptoJS.enc.Hex);

          return hash;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("connection-js", function () {
          try {
            // console.log('conn try')
            connection = {};
            c = navigator.connection;
            connection["downlink"] = c.downlink;
            connection["downlinkMax"] = c.downlinkMax;
            connection["effectiveType"] = c.effectiveType;
            connection["rtt"] = c.rtt;
            connection["saveData"] = c.saveData;
            connection["type"] = c.type;
          } catch (e) {
            return {
              name: e.name,
              message: e.message,
              status: window.amiunique_not_supported,
            };
          }
          // console.dir(connection)

          return connection;
        });
      })();

      window.amiunique_display["connection-js"] = function (cell, connection) {
        displayMap(cell, connection, "\n", 6);
      };

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("MathML", async function () {
          function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

          var clientRectsProperties = [
            "x",
            "y",
            "width",
            "height",
            "top",
            "right",
            "bottom",
            "left",
          ];

          function generateHash(tableNumber, clientRects) {
            var hash = "";

            for (var prop in clientRects) {
              if (clientRectsProperties.indexOf(prop) > -1) {
                // document.getElementById("testResultTable" + tableNumber + capitalizeFirstLetter(prop)).innerHTML = clientRects[prop];
                hash += prop + clientRects[prop]; // properties order
              }
            }
            hash = CryptoJS.SHA256(hash)
              .toString(CryptoJS.enc.Hex)
              .slice(0, 32);
            // hash = forge_sha256(hash).slice(0, 32);
            // document.getElementById("testResultTable" + tableNumber + "Hash").innerHTML = hash;
            return hash;
          }

          async function createIframe() {
            // Create an iframe element
            var iframe = document.createElement("iframe");

            // Set attributes
            iframe.id = "getClientRectsIframe";
            iframe.src = "/bfp/dist/javascripts/fingerprint/js/MathMLtest.html";
            iframe.allowTransparency = "yes";
            iframe.sandbox = "allow-same-origin";
            // iframe.onload = echoClientRects; // Set the onload event
            iframe.scrolling = "no";
            iframe.style.width = "1000px";
            iframe.style.height = "600px";
            iframe.style.visibility = "hidden";

            // Append the iframe to the body
            document.body.appendChild(iframe);

            iframe.onload = echoClientRects; // Call echoClientRects on load
          }

          async function echoClientRects() {
            var hash = "";
            // Access iframe to ensure deterministic values (e.g. bottom readout)
            var getClientRectsIframe = document.getElementById(
              "getClientRectsIframe"
            );
            var iFrameDocument =
              getClientRectsIframe.contentDocument ||
              getClientRectsIframe.contentWindow.document;
            for (var i = 1; i < 13; i++) {
              // console.log(iFrameDocument.getElementById('clientRectsTest' + i))

              clientRectsTest = iFrameDocument
                .getElementById("clientRectsTest" + i)
                .getClientRects()[0];
              hash += generateHash(i, clientRectsTest);
            }
            // console.log('MathML hash: ', hash)
            document.body.removeChild(
              document.getElementById("getClientRectsIframe")
            );
            return hash;
          }

          // function jaxToMeasure() {
          //     mathElement.innerHTML = latex;
          // }

          var ret = await createIframe();
          ret = CryptoJS.SHA256(ret).toString(CryptoJS.enc.Hex);
          // // console.log('MathML hash: ', ret)

          // const latex = '\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]';

          // // Create a div element dynamically
          // const mathElement = document.createElement('div');
          // mathElement.id = 'math'; // Set the id of the div
          // mathElement.style.visibility = 'hidden';

          // document.body.appendChild(mathElement); // Append the div to the body

          // // Set the innerHTML to the LaTeX formula
          // jaxTime = measureTime(
          //     jaxToMeasure
          // )

          // // Log the rendering time
          // // console.log(`Rendered in ${jaxTime} milliseconds`);
          // document.body.removeChild(mathElement); // Remove the div to the body

          return ret;

          // await echoClientRects();
        });
      })();

      window.amiunique_display["connection-js"] = function (cell, connection) {
        displayMap(cell, connection, "\n", 6);
      };

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Device Clock Speed", function () {
          function runBenchmark() {
            const iterations = 1e6;
            let startTime,
              endTime,
              totalTime = 0;

            function cpuIntensiveTask() {
              let sum = 0;
              for (let i = 0; i < iterations; i++) {
                sum += Math.sqrt(i);
              }
              return sum;
            }

            // Warm-up run
            cpuIntensiveTask();

            // Actual benchmark run
            // startTime = performance.now();
            totalTime = measureTime(cpuIntensiveTask);
            // endTime = performance.now();

            // totalTime = endTime - startTime;
            return totalTime;
          }

          const result = runBenchmark();

          // console.log('the result is ', Math.round(result * 1000) / 1000);

          return Math.round(result * 1000) / 1000;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Modernizr", function () {
          // console.log(Modernizr);

          return;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("test html5", async function () {
          const c = await new Promise((resolve, reject) => {
            loadWhichBrowser(async function () {
              Browsers = new WhichBrowser({
                useFeatures: true,
                detectCamouflage: true,
              });

              await new Test(async function (r) {
                var m = new Metadata(tests);
                // Split the string into key-value pairs
                const keyValuePairs = r.results.split(",");

                // Create an empty object to store the result
                var resultObject = {};

                // Iterate over each key-value pair
                keyValuePairs.forEach((pair) => {
                  const [key, value] = pair.split("=");
                  // Replace 1 with "yes" and 0 with "no"
                  resultObject[key] = value === "1" ? "yes" : "no";
                });

                var calculatedValue = new Calculate(r, m.data);
                // console.log("this is string:", calculatedValue.points);

                const pairs = calculatedValue.points.split(",");

                // Create an empty object to store the result
                const points = {};

                // Iterate over each pair
                pairs.forEach((pair) => {
                  // Split the pair by '=' to separate the key and value
                  const [key, value] = pair.split("=");

                  // Split the value by '/' to separate score and maximum
                  const [score, maximum] = value.split("/").map(Number);

                  // Add the key-value pair to the result object
                  points[key] = { score, maximum };
                });

                calculatedValue.parameters.test.results = resultObject;
                calculatedValue.points = points;
                // console.log("this is calc:", calculatedValue);

                // submitResults(r, calculatedValue);
                // console.log('this is C:', calculatedValue);
                resolve(calculatedValue); // Resolve the Promise with `c`
              }, reject); // Pass `reject` to handle errors in Test
            });
          });

          // console.log("t", c);

          return c; // Return `c` after it’s resolved from the Promise

          function showError(e) {
            if (typeof console != "undefined") console.log(e);

            // alert('Test has failed: ' + e.message);

            // var contents = document.getElementById('contents');
            // contents.style.visibility = 'visible';

            // var loading = document.getElementById('loading');
            // loading.style.display = 'none';
          }
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Star_Echo_Bug", async function () {
          var result = "";

          async function createLocalResourceTests() {
            // Create the result div
            const resultDiv = document.createElement("div");
            resultDiv.id = "result";
            resultDiv.textContent = "Nothing detected.";
            // document.body.appendChild(resultDiv);

            // Array of test resources
            const resources = [
              { id: "test-router", src: "http://192.168.178.1/favicon.ico" },
              {
                id: "test-fritz-example",
                src: "http://192.168.178.1/css/default/images/kopfbalken_links.png",
              },
              {
                id: "test-xampp-example",
                src: "/dashboard/images/favicon.png",
              },
              {
                id: "test-sabnzbd-port-8080",
                src: "http://127.0.0.1:8080/sabnzbd/staticcfg/ico/favicon.ico",
              },
              {
                id: "test-sabnzbd-port-8082",
                src: "http://127.0.0.1:8082/sabnzbd/staticcfg/ico/favicon.ico",
              },
              {
                id: "test-nzbget",
                src: "http://127.0.0.1:6789/img/favicon.ico",
              },
            ];

            // Create and append img elements
            resources.forEach((resource) => {
              const img = document.createElement("img");
              img.id = resource.id;
              img.src = resource.src;
              img.style.display = "none"; // Initially hidden
              img.onerror = function () {
                this.style.display = "none"; // Hide on error
              };
              document.body.appendChild(img);
            });
          }

          // Usage
          await createLocalResourceTests();

          if (document.getElementById("test-router").width) {
            // result += "Your router is available via 192.168.178.1<br>";
            result = "Yes";
          }
          if (document.getElementById("test-fritz-example").width) {
            // result += "Your router is : FRITZ!Box<br>";
            result = "Yes";
          }
          if (document.getElementById("test-xampp-example").width) {
            // result += "Your are running XAMPP with default configuration<br>";
            result = "Yes";
          }
          if (document.getElementById("test-sabnzbd-port-8080").width) {
            // result += "SABnzbd is running on port 8080.<br>";
            result = "Yes";
          }
          if (document.getElementById("test-sabnzbd-port-8082").width) {
            // result += "SABnzbd is running on port 8082.<br>";
            result = "Yes";
          }
          if (document.getElementById("test-nzbget").width) {
            // result += "NZBGet is running on port 6789.<br>"; // width 16, 48, ..
            result = "Yes";
          }
          if (result === "") {
            result = "No";
          }
          // document.getElementById("result").innerHTML = result;
          // // Code to execute after elements are created
          // console.log('Elements created. Now executing further logic. --> ', result);
          // // Additional logic can go here

          return result;
        });
      })();

      /***/
    },
    async function (module, exports) {
      (async function () {
        api.register("CanIuse", async function () {
          var ret = "";

          // async function sonloadetRet(set) {
          //     ret = set

          //  }

          frame = document.createElement("iframe");

          const prom = new Promise((res, _) => {
            frame.onload = async function () {
              ret = {
                Score: frame.contentWindow.externalMainScore,
                // Tests: frame.contentWindow.externalSpecs,
              };
              // return ret
              // console.log(ret);

              res(ret);
            };
          });

          frame.src = "/css3test/index.html";
          frame.style.visibility = "hidden";
          await document.body.appendChild(frame);
          // ret = {
          //     'Score': frame.contentWindow.externalMainScore ?? "no value",
          //     'Tests': frame.contentWindow.externalSpecs ?? null
          // }
          //  frame.onload = async function () {
          //     console.log("onload here")
          //     console.log("frame.contentWindow.externalMainScore", frame.contentWindow.externalMainScore)
          //     console.log("frame.contentWindow.externalSpecs", frame.contentWindow.externalSpecs)
          //     ret = {
          //         'Score': frame.contentWindow.externalMainScore,
          //         'Tests': frame.contentWindow.externalSpecs
          //     }
          //     // return ret
          //      console.log(ret);
          //  };

          // console.log({ ret });
          // ret = {
          //     'Score': frame.contentWindow.externalMainScore,
          //     'Tests': frame.contentWindow.externalSpecs
          // };
          // return ret

          var result = await prom;
          await document.body.removeChild(frame);

          return result;

          // console.log(ret)
          // return ret;
        });
      })();

      /***/
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(270);

      __webpack_require__(3);

      __webpack_require__(327);

      __webpack_require__(195);

      __webpack_require__(74);

      __webpack_require__(60);

      __webpack_require__(133);

      __webpack_require__(139);

      __webpack_require__(209);

      __webpack_require__(184);

      __webpack_require__(242);
      __webpack_require__(173);

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      (async function () {
        api.register("Request Animation Frame", async function () {
          var path = "./bfp/dist/javascripts/fingerprint/js/texture/";

          const [response1, response2] = await Promise.all([
            fetch(path + "shader.vs.glsl"),
            fetch(path + "shader.fs.glsl"),
          ]);

          // Check if both responses are ok
          if (!response1.ok || !response2.ok) {
            throw new Error("Error fetching files");
          }

          // Convert responses to text or other formats as needed (e.g., JSON)
          const vsText = await response1.text(); // Use .json() for JSON files
          const fsText = await response2.text();

          // Initializes WebGL context, compiles shaders, creates buffers, sets up texture, and starts the rendering loop
          async function runTexture(
            vertexShaderText,
            fragmentShaderText,
            vertices,
            indices,
            texCoords,
            texture,
            canvas
          ) {
            // return "return here "
            canvas.id = "texture";
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);
            var gl = await getGL(canvas.id);
            // console.log(gl)
            gl.clearColor(0.0, 0.0, 0.0, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.CULL_FACE);
            gl.frontFace(gl.CCW);
            gl.cullFace(gl.BACK);

            // Create shaders
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(vertexShader, vertexShaderText);
            gl.shaderSource(fragmentShader, fragmentShaderText);
            gl.compileShader(vertexShader);
            gl.compileShader(fragmentShader);

            if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
              // console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
              return {
                "ERROR compiling vertex shader!":
                  gl.getShaderInfoLog(vertexShader),
              };
            }

            if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
              // console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
              return {
                "ERROR compiling fragment shader!":
                  gl.getShaderInfoLog(fragmentShader),
              };
            }

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
              // console.error('ERROR linking program!', gl.getProgramInfoLog(program));
              return {
                "ERROR validating program!": gl.getProgramInfoLog(program),
              };
            }
            gl.validateProgram(program);
            if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
              // console.error('ERROR validating program!', gl.getProgramInfoLog(program));
              return {
                "ERROR validating program!": gl.getProgramInfoLog(program),
              };
            }

            // Create buffer
            const posBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array(vertices),
              gl.STATIC_DRAW
            );

            const texCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array(texCoords),
              gl.STATIC_DRAW
            );

            const indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(
              gl.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(indices),
              gl.STATIC_DRAW
            );

            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            const positionAttribLocation = gl.getAttribLocation(
              program,
              "vertPosition"
            );
            gl.vertexAttribPointer(
              positionAttribLocation,
              3,
              gl.FLOAT,
              gl.FALSE,
              3 * Float32Array.BYTES_PER_ELEMENT,
              0
            );
            gl.enableVertexAttribArray(positionAttribLocation);

            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            const texCoordAttribLocation = gl.getAttribLocation(
              program,
              "vertTexCoord"
            );
            gl.vertexAttribPointer(
              texCoordAttribLocation,
              2,
              gl.FLOAT,
              gl.FALSE,
              2 * Float32Array.BYTES_PER_ELEMENT,
              0
            );
            gl.enableVertexAttribArray(texCoordAttribLocation);

            // Create texture
            const tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texParameteri(
              gl.TEXTURE_2D,
              gl.TEXTURE_WRAP_S,
              gl.CLAMP_TO_EDGE
            );
            gl.texParameteri(
              gl.TEXTURE_2D,
              gl.TEXTURE_WRAP_T,
              gl.CLAMP_TO_EDGE
            );
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              texture
            );
            gl.bindTexture(gl.TEXTURE_2D, null);

            // Use program
            gl.useProgram(program);
            const matWorldUniformLocation = gl.getUniformLocation(
              program,
              "mWorld"
            );
            const matViewUniformLocation = gl.getUniformLocation(
              program,
              "mView"
            );
            const matProjUniformLocation = gl.getUniformLocation(
              program,
              "mProj"
            );

            const worldMatrix = new Float32Array(16);
            const viewMatrix = new Float32Array(16);
            const projMatrix = new Float32Array(16);
            mat4.identity(worldMatrix);
            mat4.lookAt(viewMatrix, [0, 0, -7], [0, 0, 0], [0, 1, 0]);
            mat4.perspective(
              projMatrix,
              glMatrix.toRadian(45),
              canvas.width / canvas.height,
              0.1,
              1000.0
            );

            gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
            gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
            gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);

            const xRotationMatrix = new Float32Array(16);
            const yRotationMatrix = new Float32Array(16);

            // Main render loop
            const identityMatrix = new Float32Array(16);
            mat4.identity(identityMatrix);
            let angle = 0;
            let count = 45;
            //     let textureFp = ''
            //     async function loop() {
            //         console.log({angle, count})
            //         const frame =  requestAnimationFrame(loop)
            //         angle = (count++) / 20;
            //         mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
            //         mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
            //         mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
            //         gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

            //         gl.clearColor(0.0, 0.0, 0.0, 1.0);
            //         gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

            //         gl.bindTexture(gl.TEXTURE_2D, tex);
            //         gl.activeTexture(gl.TEXTURE0);
            //         gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
            //         if (count == 50) {
            //             cancelAnimationFrame(frame);
            //              textureFp = await getData(gl, canvas.id);
            //             // console.log("textureFp: " + textureFp);
            //             document.body.removeChild(canvas)
            //             onComplete();
            //             console.log('before return,count ', count)
            //             console.log('before return,textureFp ', textureFp)
            //             return textureFp
            //         }
            //     }
            //    await loop()
            //    console.log('before final return,textureFp ', textureFp)

            //     return textureFp;

            let textureFp = "";
            async function loop() {
              return new Promise((resolve) => {
                let count = 0;
                let angle = 0;

                function render() {
                  // console.log({ angle, count });

                  angle = count / 20;
                  mat4.rotate(
                    yRotationMatrix,
                    identityMatrix,
                    angle,
                    [0, 1, 0]
                  );
                  mat4.rotate(
                    xRotationMatrix,
                    identityMatrix,
                    angle / 4,
                    [1, 0, 0]
                  );
                  mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
                  gl.uniformMatrix4fv(
                    matWorldUniformLocation,
                    gl.FALSE,
                    worldMatrix
                  );

                  gl.clearColor(0.0, 0.0, 0.0, 1.0);
                  gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

                  gl.bindTexture(gl.TEXTURE_2D, tex);
                  gl.activeTexture(gl.TEXTURE0);
                  gl.drawElements(
                    gl.TRIANGLES,
                    indices.length,
                    gl.UNSIGNED_SHORT,
                    0
                  );

                  if (count === 50) {
                    cancelAnimationFrame(frame);
                    getData(gl, canvas.id).then((data) => {
                      textureFp = data;
                      document.body.removeChild(canvas);

                      resolve(textureFp);
                    });
                    return;
                  }

                  count++;
                  frame = requestAnimationFrame(render);
                }

                let frame = requestAnimationFrame(render);
              });
            }

            const result = await loop();
            return result;
          }

          // Starts the texture test by loading shaders and initializing the WebGL rendering

          async function getData(gl, glid) {
            var h = null;
            var WebGL = true;
            var pixels = new Uint8Array(256 * 256 * 4);
            await gl.readPixels(
              0,
              0,
              256,
              256,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              pixels
            );

            var h = await logNonBlackPixels(pixels, 256, 256, glid);
            // console.dir(h)
            var h256 = CryptoJS.SHA256(h.join());
            var fin = h256.toString(CryptoJS.enc.Hex);
            // console.log(`nonblack ${glid} = ${fin}`)
            // console.log('pix: ', pixels)
            var ven, ren;
            var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (debugInfo) {
              ven = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
              ren = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            } else {
              console.log("debugInfo is not accessable");
              ven = "No debug Info";
              ren = "No debug Info";
            }
            // var hash = pixels.hashCode();
            // var hash = fin;
            // console.log("gl: " + hash);

            // toReturn = {'WebGL': WebGL,'VenL': ven,'Ren': ren,'Hash': hash,'Pixels': pixels}

            // console.log('pixels: ', pixels)
            // console.dir(toReturn);

            // if (sumRGB(pixels) > 1.0) {
            //     // console.log('in if')
            // return hashRGB(pixels);
            // }
            return fin;
          }

          function sumRGB(array) {
            var sum = 0;
            for (var i = 0; i < array.length; i += 4) {
              sum += array[i + 0];
              sum += array[i + 1];
              sum += array[i + 2];
            }
            return sum;
          }

          Uint8Array.prototype.hashCode = function () {
            var hash = 0,
              i,
              chr,
              len;
            if (this.length === 0) return hash;
            for (i = 0, len = this.length; i < len; i++) {
              chr = this[i];
              hash = (hash << 5) - hash + chr;
              hash |= 0; // Convert to 32bit integer
            }
            return hash;
          };

          async function loadImage(imageSource) {
            return await new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve(img);
              img.onerror = (err) => reject(err);
              img.src = imageSource;

              return img;
            });
          }

          async function logNonBlackPixels(pixels, width, height, gl) {
            // Calculate the total number of pixels
            const totalPixels = width * height;
            let loggs = [];
            // var diff = {}
            const rlist = [];
            const glist = [];
            const blist = [];
            const alist = [];

            // Iterate through the array
            for (let i = 0; i < totalPixels * 4; i += 4) {
              // Extract RGBA values for the current pixel
              const r = pixels[i];
              const g = pixels[i + 1];
              const b = pixels[i + 2];
              const a = pixels[i + 3];

              // Check if the pixel is non-black
              if (r !== 0 || g !== 0 || b !== 0 || a !== 255) {
                // diff [
                rlist.push(r);
                glist.push(g);
                blist.push(b);
                alist.push(a);
                // ]

                // Calculate pixel position in the 2D canvas
                const x = (i / 4) % width;
                const y = Math.floor(i / 4 / width);

                // Log the non-black pixel and its position
                // diff[`${x}, ${y}`] = r, g, b, a
                loggs.push(
                  `Non-black pixel at position (${x}, ${y}):   RGBA: [${r}, ${g}, ${b}, ${a}]`
                );
                // console.log(`Non-black pixel at position (${x}, ${y}):`);
                // console.log(`  RGBA: [${r}, ${g}, ${b}, ${a}]`);
              }
            }
            // console.log(loggs, gl)
            const diff = {
              r: rlist,
              g: glist,
              b: blist,
              a: alist,
            };
            // console.log(diff)
            return rlist.concat(glist, blist, alist);
          }

          function hashRGB(array) {
            var hash = 0,
              i,
              chr,
              len,
              j;
            if (array.length === 0) return hash;
            for (i = 0, len = array.length; i < len; i += 4) {
              for (j = 0; j < 3; ++j) {
                chr = array[i] | 0;
                hash ^= ((hash << 5) - hash + chr + 0x9e3779b9) | 0;
                hash |= 0; // Convert to 32bit integer
              }
            }
            return hash;
          }

          getGL = async function (cId) {
            for (var i = 0; i < 4; ++i) {
              var canvas = document.getElementById(cId);
              var gl = canvas.getContext(
                ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"][i],
                {
                  antialias: false,
                  preserveDrawingBuffer: true,
                  willReadFrequently: false,
                  depth: true,
                }
              );
              if (gl) break;
            }

            if (!gl) {
              alert("Your browser does not support WebGL");
            }
            return gl;
          };

          getGLAA = async function (canvas) {
            var gl = null;
            for (var i = 0; i < 4; ++i) {
              var gl = canvas.getContext(
                ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"][i],
                {
                  antialias: true,
                  preserveDrawingBuffer: true,
                  willReadFrequently: false,
                  depth: true,
                }
              );
              if (gl) break;
            }

            if (!gl) {
              alert("Your browser does not support WebGL");
            }
            return gl;
          };

          async function getCamera() {
            var canvas = document.createElement("canvas");
            canvas.id = "camera";
            canvas.width = 256; // width in pixels
            canvas.height = 256; // height in pixels
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);

            var gl = await getGL(canvas.id);

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.CULL_FACE);
            gl.frontFace(gl.CCW);
            gl.cullFace(gl.BACK);

            // Create shaders
            var vertexShader = gl.createShader(gl.VERTEX_SHADER);
            var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

            gl.shaderSource(vertexShader, vertexShaderText);
            gl.shaderSource(fragmentShader, fragmentShaderText);

            gl.compileShader(vertexShader);
            if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
              // console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
              return {
                "ERROR compiling vertex shader!":
                  gl.getShaderInfoLog(vertexShader),
              };
            }

            gl.compileShader(fragmentShader);
            if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
              // console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
              return {
                "ERROR compiling fragment shader!":
                  gl.getShaderInfoLog(fragmentShader),
              };
            }

            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
              // console.error('ERROR linking program!', gl.getProgramInfoLog(program));
              return {
                "ERROR linking program!": gl.getProgramInfoLog(program),
              };
            }
            gl.validateProgram(program);
            if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
              // console.error('ERROR validating program!', gl.getProgramInfoLog(program));
              return {
                "ERROR validating program!": gl.getProgramInfoLog(program),
              };
            }

            // Create buffer
            var boxVertices = [
              // X, Y, Z           R, G, B
              // Top
              -1.0, 1.0, -1.0, 0.1, 0.1, 0.1, -1.0, 1.0, 1.0, 0.8, 0.5, 0.3,
              1.0, 1.0, 1.0, 0.2, 0.4, 0.7, 1.0, 1.0, -1.0, 0.1, 0.9, 0.6,

              // Left
              -1.0, 1.0, 1.0, 0.75, 0.25, 0.5, -1.0, -1.0, 1.0, 0.1, 0.25, 0.85,
              -1.0, -1.0, -1.0, 0.9, 0.12, 0.53, -1.0, 1.0, -1.0, 0.3, 0.4, 0.7,

              // Right
              1.0, 1.0, 1.0, 0.25, 0.25, 0.2, 1.0, -1.0, 1.0, 0.52, 0.24, 0.75,
              1.0, -1.0, -1.0, 0.1, 0.26, 0.75, 1.0, 1.0, -1.0, 0.9, 0.95, 0.75,

              // Front
              1.0, 1.0, 1.0, 0.4, 0.0, 0.7, 1.0, -1.0, 1.0, 0.98, 0.0, 0.54,
              -1.0, -1.0, 1.0, 1.0, 5.3, 0.34, -1.0, 1.0, 1.0, 0.2, 0.5, 0.9,

              // Back
              1.0, 1.0, -1.0, 0.34, 0.3, 0.34, 1.0, -1.0, -1.0, 0.78, 0.76,
              0.56, -1.0, -1.0, -1.0, 0.3, 1.0, 0.67, -1.0, 1.0, -1.0, 0.1, 1.0,
              0.2,

              // Bottom
              -1.0, -1.0, -1.0, 0.5, 0.8, 0.8, -1.0, -1.0, 1.0, 0.3, 0.7, 0.1,
              1.0, -1.0, 1.0, 0.6, 0.6, 0.5, 1.0, -1.0, -1.0, 0.8, 0.4, 0.2,
            ];

            var boxIndices = [
              // Top
              0, 1, 2, 0, 2, 3,

              // Left
              5, 4, 6, 6, 4, 7,

              // Right
              8, 9, 10, 8, 10, 11,

              // Front
              13, 12, 14, 15, 14, 12,

              // Back
              16, 17, 18, 16, 18, 19,

              // Bottom
              21, 20, 22, 22, 20, 23,
            ];

            var boxVertexBufferObject = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array(boxVertices),
              gl.STATIC_DRAW
            );

            var boxIndexBufferObject = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
            gl.bufferData(
              gl.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(boxIndices),
              gl.STATIC_DRAW
            );

            var positionAttribLocation = gl.getAttribLocation(
              program,
              "vertPosition"
            );
            var colorAttribLocation = gl.getAttribLocation(
              program,
              "vertColor"
            );
            gl.vertexAttribPointer(
              positionAttribLocation, // Attribute location
              3, // Number of elements per attribute
              gl.FLOAT, // Type of elements
              gl.FALSE,
              6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
              0 // Offset from the beginning of a single vertex to this attribute
            );
            gl.vertexAttribPointer(
              colorAttribLocation, // Attribute location
              3, // Number of elements per attribute
              gl.FLOAT, // Type of elements
              gl.FALSE,
              6 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
              3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
            );

            gl.enableVertexAttribArray(positionAttribLocation);
            gl.enableVertexAttribArray(colorAttribLocation);

            // Tell OpenGL state machine which program should be active.
            gl.useProgram(program);

            var matWorldUniformLocation = gl.getUniformLocation(
              program,
              "mWorld"
            );
            var matViewUniformLocation = gl.getUniformLocation(
              program,
              "mView"
            );
            var matProjUniformLocation = gl.getUniformLocation(
              program,
              "mProj"
            );

            var worldMatrix = new Float32Array(16);
            var viewMatrix = new Float32Array(16);
            var projMatrix = new Float32Array(16);
            mat4.identity(worldMatrix);
            mat4.lookAt(viewMatrix, [-1, -4, -10], [0, 0, 0], [0, 1, 0]);
            mat4.perspective(
              projMatrix,
              glMatrix.toRadian(45),
              canvas.width / canvas.height,
              0.1,
              1000.0
            );

            gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
            gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
            gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);

            var xRotationMatrix = new Float32Array(16);
            var yRotationMatrix = new Float32Array(16);

            // Main render loop
            var angle = 0;
            var count = 0;
            var ven, ren;
            var identityMatrix = new Float32Array(16);
            mat4.identity(identityMatrix);

            var count = 19;
            var angle = 0;
            var loop = function () {
              var frame = requestAnimationFrame(loop);
              angle = count++ / 20;
              mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
              mat4.rotate(
                xRotationMatrix,
                identityMatrix,
                angle / 4,
                [1, 0, 0]
              );
              mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
              gl.uniformMatrix4fv(
                matWorldUniformLocation,
                gl.FALSE,
                worldMatrix
              );

              //    gl.clearColor(1.0, 1.0, 1.0, 1.0);

              gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

              gl.drawElements(
                gl.TRIANGLES,
                boxIndices.length,
                gl.UNSIGNED_SHORT,
                0
              );
              if (count == 20) {
                const cameraFp = getData(gl, canvas.id);
                // console.log('Camera ',cameraFp,);
                // console.log('camera:  ', canvas.toDataURL())
                // let pixels1 = new Uint8Array(256 * 256 * 4);
                // gl.readPixels(0, 0, 256, 256, gl.RGBA, gl.UNSIGNED_BYTE, pixels1);

                cancelAnimationFrame(frame);
                document.body.removeChild(canvas);

                // console.log('cameraFp: ', cameraFp)

                return cameraFp;
              }
            };
            requestAnimationFrame(loop);
          }

          async function getLines(type) {
            const canvas = document.createElement("canvas");
            canvas.id = "line";
            canvas.width = 256; // width in pixels
            canvas.height = 256; // height in pixels
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);

            // var gl = getGL(canvas.id);
            if (type === "normal") {
              var gl = await getGL(canvas.id);
            } else {
              var gl = await getGLAA(canvas);
            }

            function getPoints() {
              var res = [];
              for (var x = 0; x < 256; x++) {
                var y =
                  256 -
                  100 * Math.cos((2.0 * Math.PI * x) / 100.0) +
                  30 * Math.cos((4.0 * Math.PI * x) / 100.0) +
                  6 * Math.cos((6.0 * Math.PI * x) / 100.0);
                res.push(x / 150 - 0.8, y / 200 - 1.4, 0);
              }
              return res;
            }

            /*======= Defining and storing the geometry ======*/
            var vertices = getPoints();
            vertices.push.apply(
              vertices,
              [
                -0.7, -0.1, 0, -0.3, 0.6, 0, -0.3, -0.3, 0, 0.2, 0.6, 0, 0.3,
                -0.3, 0, 0.7, 0.6, 0,
              ]
            );

            // Create an empty buffer object
            var vertex_buffer = gl.createBuffer();

            // Bind appropriate array buffer to it
            gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

            // Pass the vertex data to the buffer
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array(vertices),
              gl.STATIC_DRAW
            );

            // Unbind the buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, null);

            /*=================== Shaders ====================*/

            // Vertex shader source code
            var vertCode =
              "attribute vec3 coordinates;" +
              "void main(void) {" +
              "    gl_Position = vec4(coordinates, 1.0);" +
              "}";

            // Create a vertex shader object
            var vertShader = gl.createShader(gl.VERTEX_SHADER);

            // Attach vertex shader source code
            gl.shaderSource(vertShader, vertCode);

            // Compile the vertex shader
            gl.compileShader(vertShader);

            // Fragment shader source code
            var fragCode =
              "void main(void) {" +
              "    gl_FragColor = vec4(1, 1, 1, 1.0);" +
              "}";

            // Create fragment shader object
            var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

            // Attach fragment shader source code
            gl.shaderSource(fragShader, fragCode);

            // Compile the fragment shader
            gl.compileShader(fragShader);

            // Create a shader program object to store the combined shader program
            var shaderProgram = gl.createProgram();

            // Attach a vertex shader
            gl.attachShader(shaderProgram, vertShader);

            // Attach a fragment shader
            gl.attachShader(shaderProgram, fragShader);

            // Link both the programs
            gl.linkProgram(shaderProgram);

            // Use the combined shader program object
            gl.useProgram(shaderProgram);

            /*======= Associating shaders to buffer objects ======*/

            // Bind vertex buffer object
            gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

            // Get the attribute location
            var coord = gl.getAttribLocation(shaderProgram, "coordinates");

            // Point an attribute to the currently bound VBO
            gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

            // Enable the attribute
            gl.enableVertexAttribArray(coord);

            /*============ Drawing the geometry =============*/

            // Clear the canvas
            gl.clearColor(0, 0, 0, 1.0);

            // Enable the depth test
            gl.enable(gl.DEPTH_TEST);

            // Clear the color and depth buffer
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Set the viewport
            gl.viewport(0, 0, canvas.width, canvas.height);

            // Draw the geometry
            //  gl.drawArrays(gl.LINE_STRIP, 0, 256);

            gl.drawArrays(gl, gl.LINE_STRIP, 0, 256);

            // console.log('line0: ',getData(gl));

            //  gl.drawArrays(gl.LINES, 256, 6);
            gl.drawArrays(gl, gl.LINES, 256, 6);

            var lineFp = getData(gl, canvas.id);
            // console.log('line: ',lineFp);
            // let pixels2 = new Uint8Array(256 * 256 * 4);
            // gl.readPixels(0, 0, 256, 256, gl.RGBA, gl.UNSIGNED_BYTE, pixels2);

            // var rawline_hash = CryptoJS.SHA256(pixels2.join());
            // var linehash = rawline_hash.toString(CryptoJS.enc.Hex);

            // console.log('newline:  ', linehash)
            // console.log('LineFp:  ', lineFp)
            document.body.removeChild(canvas);

            return lineFp;

            // console.dir(gl)

            // console.log('line: ',getData(getGL(canvas.id)));
          }

          async function getTexture(
            vertices,
            indices,
            texCoords,
            texture,
            canvas
          ) {
            var x = "";
            const path = "./bfp/dist/javascripts/fingerprint/js/texture/";
            var resultVs = await fetch(path + "shader.vs.glsl");
            var resutlVsText = await resultVs.text();
            var resultFs = await fetch(path + "shader.fs.glsl");
            var rsultFsText = await resultFs.text();
            // console.log({ rsultFsText })
            // do something with "text"
            x = await runTexture(
              resutlVsText,
              rsultFsText,
              vertices,
              indices,
              texCoords,
              texture,
              canvas
            );
            return x;
          }

          async function getSimpleLight(
            vertices,
            indices,
            texCoords,
            normals,
            texture
          ) {
            // Initialize the properties
            var canvas = document.createElement("canvas");
            canvas.id = "light";
            canvas.width = 256; // width in pixels
            canvas.height = 256; // height in pixels
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);

            var simpp = await runSimpleLight(vsText, fsText, canvas);

            // console.log('test', simpp)
            return simpp;

            // fetch(path + 'shader.vs.glsl')
            // .then((res) => res.text())
            // .then((text) => {
            //     // do something with "text"
            //     var vsText = text; // Use the shader source code

            //     fetch(path + 'shader.fs.glsl')
            //     .then((res) => res.text())
            //     .then(async (text) => {
            //         // do something with "text"
            //         var fsText = text; // Use the shader source code
            //         var simpp = await runSimpleLight(vsText, fsText, canvas)
            //         var simppp = await getMoreLight(vertices, indices, texCoords, normals, texture, vsText, fsText)

            //         // console.log('test', simpp, simppp)

            //         return  [simpp, simppp]

            //     })
            // })

            // Define the RunSimpleLight function
            async function runSimpleLight(
              vertexShaderText,
              fragmentShaderText
            ) {
              const gl = await getGL(canvas.id);
              const WebGL = true;

              gl.clearColor(0.0, 0.0, 0.0, 0.0);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              gl.enable(gl.DEPTH_TEST);
              gl.enable(gl.CULL_FACE);
              gl.frontFace(gl.CCW);
              gl.cullFace(gl.BACK);

              // Create shaders
              const vertexShader = gl.createShader(gl.VERTEX_SHADER);
              const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

              gl.shaderSource(vertexShader, vertexShaderText);
              gl.shaderSource(fragmentShader, fragmentShaderText);

              gl.compileShader(vertexShader);
              if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                // console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
                // throw new Error('Vertex shader compilation failed');
                return {
                  "ERROR compiling vertex shader!":
                    gl.getShaderInfoLog(vertexShader),
                };
              }

              gl.compileShader(fragmentShader);
              if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                // console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
                // throw new Error('Fragment shader compilation failed');
                return {
                  "ERROR compiling fragment shader!":
                    gl.getShaderInfoLog(fragmentShader),
                };
              }

              const program = gl.createProgram();
              gl.attachShader(program, vertexShader);
              gl.attachShader(program, fragmentShader);
              gl.linkProgram(program);
              if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                // console.error('ERROR linking program!', gl.getProgramInfoLog(program));
                // throw new Error('Program linking failed');
                return {
                  "ERROR linking program!": gl.getProgramInfoLog(program),
                };
              }
              gl.validateProgram(program);
              if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
                // console.error('ERROR validating program!', gl.getProgramInfoLog(program));
                // throw new Error('Program validation failed');
                return {
                  "ERROR validating program!": gl.getProgramInfoLog(program),
                };
              }

              // Set up buffers
              const susanPosVertexBufferObject = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, susanPosVertexBufferObject);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertices),
                gl.STATIC_DRAW
              );

              const susanTexCoordVertexBufferObject = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, susanTexCoordVertexBufferObject);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(texCoords),
                gl.STATIC_DRAW
              );

              const susanIndexBufferObject = gl.createBuffer();
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, susanIndexBufferObject);
              gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(indices),
                gl.STATIC_DRAW
              );

              const susanNormalBufferObject = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, susanNormalBufferObject);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(normals),
                gl.STATIC_DRAW
              );

              gl.bindBuffer(gl.ARRAY_BUFFER, susanPosVertexBufferObject);
              const positionAttribLocation = gl.getAttribLocation(
                program,
                "vertPosition"
              );
              gl.vertexAttribPointer(
                positionAttribLocation,
                3,
                gl.FLOAT,
                false,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(positionAttribLocation);

              gl.bindBuffer(gl.ARRAY_BUFFER, susanTexCoordVertexBufferObject);
              const texCoordAttribLocation = gl.getAttribLocation(
                program,
                "vertTexCoord"
              );
              gl.vertexAttribPointer(
                texCoordAttribLocation,
                2,
                gl.FLOAT,
                false,
                2 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(texCoordAttribLocation);

              gl.bindBuffer(gl.ARRAY_BUFFER, susanNormalBufferObject);
              const normalAttribLocation = gl.getAttribLocation(
                program,
                "vertNormal"
              );
              gl.vertexAttribPointer(
                normalAttribLocation,
                3,
                gl.FLOAT,
                true,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(normalAttribLocation);

              // Create texture
              const tex = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, tex);
              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_S,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_T,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                texture
              );
              gl.bindTexture(gl.TEXTURE_2D, null);

              gl.useProgram(program);

              const matWorldUniformLocation = gl.getUniformLocation(
                program,
                "mWorld"
              );
              const matViewUniformLocation = gl.getUniformLocation(
                program,
                "mView"
              );
              const matProjUniformLocation = gl.getUniformLocation(
                program,
                "mProj"
              );

              const worldMatrix = new Float32Array(16);
              const viewMatrix = new Float32Array(16);
              const projMatrix = new Float32Array(16);
              mat4.identity(worldMatrix);
              mat4.lookAt(viewMatrix, [0, 0, -7], [0, 0, 0], [0, 1, 0]);
              mat4.perspective(
                projMatrix,
                glMatrix.toRadian(45),
                canvas.width / canvas.height,
                0.1,
                1000.0
              );

              gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);
              gl.uniformMatrix4fv(matViewUniformLocation, false, viewMatrix);
              gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);

              const xRotationMatrix = new Float32Array(16);
              const yRotationMatrix = new Float32Array(16);

              // Lighting
              const ambientUniformLocation = gl.getUniformLocation(
                program,
                "ambientLightIntensity"
              );
              const sunlightDirUniformLocation = gl.getUniformLocation(
                program,
                "sun.direction"
              );
              const sunlightIntUniformLocation = gl.getUniformLocation(
                program,
                "sun.color"
              );

              gl.uniform3f(ambientUniformLocation, 0.3, 0.3, 0.3);
              gl.uniform3f(sunlightDirUniformLocation, 3.0, 4.0, -2.0);
              gl.uniform3f(sunlightIntUniformLocation, 2, 2, 2);

              return new Promise((resolve) => {
                let angle = 0;
                let count = 49;
                const identityMatrix = new Float32Array(16);
                mat4.identity(identityMatrix);
                gl.enable(gl.DEPTH_TEST);

                function loop() {
                  const frame = requestAnimationFrame(loop);
                  angle = count++ / 20;
                  mat4.rotate(
                    yRotationMatrix,
                    identityMatrix,
                    angle,
                    [0, 1, 0]
                  );
                  mat4.rotate(
                    xRotationMatrix,
                    identityMatrix,
                    angle / 4,
                    [1, 0, 0]
                  );
                  mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
                  gl.uniformMatrix4fv(
                    matWorldUniformLocation,
                    false,
                    worldMatrix
                  );

                  gl.clearColor(0.0, 0.0, 0.0, 1.0);
                  gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

                  gl.bindTexture(gl.TEXTURE_2D, tex);
                  gl.activeTexture(gl.TEXTURE0);
                  gl.drawElements(
                    gl.TRIANGLES,
                    indices.length,
                    gl.UNSIGNED_SHORT,
                    0
                  );

                  if (count === 50) {
                    cancelAnimationFrame(frame);
                    const lightFp = getData(gl, canvas.id);
                    document.body.removeChild(canvas);
                    resolve(lightFp);
                  }
                }

                requestAnimationFrame(loop);
              });
            }

            // async function  interpretData(gl, data, numa,numb){

            //     await gl.drawArrays(data, numa, numb)
            //     var lineFp = getData(gl);
            //     console.log('line: ',lineFp);
            //     console.log('line:  ', canvas.toDataURL())

            //     // console.log(gl)

            //     return lineFp
            // }

            // function createBlackPixelsArray(width, height) {
            //     // Create a Uint8Array to hold the pixel data
            //     const pixelArray = new Uint8Array(width * height * 4);

            //     // Fill the array with black pixel values
            //     for (let i = 0; i < pixelArray.length; i += 4) {
            //         pixelArray[i] = 0;     // Red
            //         pixelArray[i + 1] = 0; // Green
            //         pixelArray[i + 2] = 0; // Blue
            //         pixelArray[i + 3] = 255; // Alpha
            //     }

            //     return pixelArray;
            // }

            // const blackPixels = createBlackPixelsArray(256, 256);
            // console.log('black pix  ', blackPixels.hashCode());
          }

          async function getMoreLight(
            vertices,
            indices,
            texCoords,
            normals,
            texture,
            vstext,
            fstext
          ) {
            var canvas = document.createElement("canvas");
            canvas.id = "morelight";
            canvas.width = 256; // width in pixels
            canvas.height = 256; // height in pixels
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);

            return await runMoreLight(vstext, fstext, 0, canvas);

            // Inner function to handle the main rendering and shader setup
            async function runMoreLight(
              vertexShaderText,
              fragmentShaderText,
              ID,
              canvas
            ) {
              let gl;
              if (ID === 1) {
                gl = awa.getGLAA(canvas);
              } else {
                gl = await getGL(canvas.id);
              }

              gl.clearColor(0.0, 0.0, 0.0, 0.0);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              gl.enable(gl.DEPTH_TEST);
              gl.enable(gl.CULL_FACE);
              gl.frontFace(gl.CCW);
              gl.cullFace(gl.BACK);

              // Create shaders
              let vertexShader = gl.createShader(gl.VERTEX_SHADER);
              let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

              gl.shaderSource(vertexShader, vertexShaderText);
              gl.shaderSource(fragmentShader, fragmentShaderText);

              gl.compileShader(vertexShader);
              if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                // console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
                return {
                  "ERROR compiling vertex shader!":
                    gl.getShaderInfoLog(vertexShader),
                };
              }

              gl.compileShader(fragmentShader);
              if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                console.error(
                  "ERROR compiling fragment shader!",
                  gl.getShaderInfoLog(fragmentShader)
                );
                return {
                  "ERROR compiling fragment shader!":
                    gl.getShaderInfoLog(fragmentShader),
                };
              }

              let program = gl.createProgram();
              gl.attachShader(program, vertexShader);
              gl.attachShader(program, fragmentShader);
              gl.linkProgram(program);
              if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                // console.error('ERROR linking program!', gl.getProgramInfoLog(program));
                return {
                  "ERROR linking program!": gl.getProgramInfoLog(program),
                };
              }
              gl.validateProgram(program);
              if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
                // console.error('ERROR validating program!', gl.getProgramInfoLog(program));
                return {
                  "ERROR validating program!": gl.getProgramInfoLog(program),
                };
              }

              // Create buffers and load data
              const buffers = {
                position: gl.createBuffer(),
                texCoord: gl.createBuffer(),
                normal: gl.createBuffer(),
                index: gl.createBuffer(),
              };

              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(vertices),
                gl.STATIC_DRAW
              );

              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texCoord);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(texCoords),
                gl.STATIC_DRAW
              );

              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.index);
              gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(indices),
                gl.STATIC_DRAW
              );

              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(normals),
                gl.STATIC_DRAW
              );

              // Set up attributes
              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
              const positionAttribLocation = gl.getAttribLocation(
                program,
                "vertPosition"
              );
              gl.vertexAttribPointer(
                positionAttribLocation,
                3,
                gl.FLOAT,
                false,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(positionAttribLocation);

              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texCoord);
              const texCoordAttribLocation = gl.getAttribLocation(
                program,
                "vertTexCoord"
              );
              gl.vertexAttribPointer(
                texCoordAttribLocation,
                2,
                gl.FLOAT,
                false,
                2 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(texCoordAttribLocation);

              gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
              const normalAttribLocation = gl.getAttribLocation(
                program,
                "vertNormal"
              );
              gl.vertexAttribPointer(
                normalAttribLocation,
                3,
                gl.FLOAT,
                true,
                3 * Float32Array.BYTES_PER_ELEMENT,
                0
              );
              gl.enableVertexAttribArray(normalAttribLocation);

              // Set up matrices
              const matWorldUniformLocation = gl.getUniformLocation(
                program,
                "mWorld"
              );
              const matViewUniformLocation = gl.getUniformLocation(
                program,
                "mView"
              );
              const matProjUniformLocation = gl.getUniformLocation(
                program,
                "mProj"
              );

              const worldMatrix = new Float32Array(16);
              const viewMatrix = new Float32Array(16);
              const projMatrix = new Float32Array(16);
              mat4.identity(worldMatrix);
              mat4.lookAt(viewMatrix, [0, 0, -7], [0, 0, 0], [0, 1, 0]);
              mat4.perspective(
                projMatrix,
                glMatrix.toRadian(45),
                canvas.width / canvas.height,
                0.1,
                1000.0
              );

              gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);
              gl.uniformMatrix4fv(matViewUniformLocation, false, viewMatrix);
              gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);

              const identityMatrix = new Float32Array(16);
              mat4.identity(identityMatrix);

              // Lighting setup
              const ambientUniformLocation = gl.getUniformLocation(
                program,
                "ambientLightIntensity"
              );
              const sunlightDirUniformLocation = gl.getUniformLocation(
                program,
                "sun.direction"
              );
              const sunlightDiffuse = gl.getUniformLocation(
                program,
                "sun.diffuse"
              );
              const sunlightSpecular = gl.getUniformLocation(
                program,
                "sun.specular"
              );

              gl.uniform3f(ambientUniformLocation, 0.3, 0.3, 0.3);
              gl.uniform3f(sunlightDirUniformLocation, 0.8, -0.8, -0.8);
              gl.uniform3f(sunlightDiffuse, 0.75, 0.75, 1.0);
              gl.uniform3f(sunlightSpecular, 0.8, 0.8, 0.8);

              const xRotationMatrix = new Float32Array(16);
              const yRotationMatrix = new Float32Array(16);

              return new Promise((resolve) => {
                let angle = 0;
                let count = ID === 2 ? 98 : 49;
                const end = ID === 2 ? 100 : 51;

                function loop() {
                  angle = count++ / 20;
                  mat4.rotate(
                    yRotationMatrix,
                    identityMatrix,
                    angle,
                    [0, 1, 0]
                  );
                  mat4.rotate(
                    xRotationMatrix,
                    identityMatrix,
                    angle / 4,
                    [1, 0, 0]
                  );
                  mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
                  gl.uniformMatrix4fv(
                    matWorldUniformLocation,
                    false,
                    worldMatrix
                  );

                  gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
                  gl.drawElements(
                    gl.TRIANGLES,
                    indices.length,
                    gl.UNSIGNED_SHORT,
                    0
                  );

                  if (count === end) {
                    const lightFp = getData(gl, canvas.id);
                    document.body.removeChild(canvas);
                    resolve(lightFp);
                  } else {
                    requestAnimationFrame(loop);
                  }
                }

                requestAnimationFrame(loop);
              });
            }
          }

          async function getTwoTexturesMoreLight(
            vertices,
            indices,
            texCoords,
            normals,
            texture1,
            texture2
          ) {
            var canvas = document.createElement("canvas");
            canvas.id = "twotecutrelight";
            canvas.width = 256; // width in pixels
            canvas.height = 256; // height in pixels
            canvas.style.visibility = "hidden";

            document.body.appendChild(canvas);

            var path = "./bfp/dist/javascripts/fingerprint/js/texture/";
            var vsTextDoc = await fetch(path + "shader.vs.glsl");
            var vsText = await vsTextDoc.text();

            var fsTextDoc = await fetch(path + "shader.fs.glsl");
            var fsText = await fsTextDoc.text();

            return await runTwoTexturesMoreLight(vsText, fsText, canvas);

            async function runTwoTexturesMoreLight(
              vertexShaderText,
              fragmentShaderText,
              canvas
            ) {
              let gl = await getGL(canvas.id);

              gl.clearColor(0.0, 0.0, 0.0, 0.0);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              gl.enable(gl.DEPTH_TEST);
              gl.enable(gl.CULL_FACE);
              gl.frontFace(gl.CCW);
              gl.cullFace(gl.BACK);

              // Create shaders
              let vertexShader = gl.createShader(gl.VERTEX_SHADER);
              let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

              gl.shaderSource(vertexShader, vertexShaderText);
              gl.shaderSource(fragmentShader, fragmentShaderText);

              gl.compileShader(vertexShader);
              if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                // console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
                return {
                  "ERROR compiling vertex shader!":
                    gl.getShaderInfoLog(vertexShader),
                };
              }

              gl.compileShader(fragmentShader);
              if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                // console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
                return {
                  "ERROR compiling fragment shader!":
                    gl.getShaderInfoLog(fragmentShader),
                };
              }

              let program = gl.createProgram();
              gl.attachShader(program, vertexShader);
              gl.attachShader(program, fragmentShader);
              gl.linkProgram(program);
              if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                // console.error('ERROR linking program!', gl.getProgramInfoLog(program));
                return {
                  "ERROR linking program!": gl.getProgramInfoLog(program),
                };
              }
              gl.validateProgram(program);
              if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
                // console.error('ERROR validating program!', gl.getProgramInfoLog(program));
                return {
                  "ERROR validating program!": gl.getProgramInfoLog(program),
                };
              }

              // Set up buffers, textures, and uniforms (same as your original code)
              let textures = [];
              let tex = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, tex);
              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_S,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_T,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                texture1
              );
              textures.push(tex);

              let tex1 = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, tex1);
              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_S,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_T,
                gl.CLAMP_TO_EDGE
              );
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                texture2
              );
              textures.push(tex1);

              gl.useProgram(program);

              // Set up matrices, lighting, and other uniforms (same as your original code)
              let matWorldUniformLocation = gl.getUniformLocation(
                program,
                "mWorld"
              );
              let worldMatrix = new Float32Array(16);
              let identityMatrix = new Float32Array(16);
              mat4.identity(worldMatrix);
              mat4.identity(identityMatrix);

              let angle = 0;
              let count = 45;
              let end = 55;

              return new Promise((resolve) => {
                function loop() {
                  angle = count++ / 20;
                  let yRotationMatrix = new Float32Array(16);
                  let xRotationMatrix = new Float32Array(16);
                  mat4.rotate(
                    yRotationMatrix,
                    identityMatrix,
                    angle,
                    [0, 1, 0]
                  );
                  mat4.rotate(
                    xRotationMatrix,
                    identityMatrix,
                    angle / 4,
                    [1, 0, 0]
                  );
                  mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
                  gl.uniformMatrix4fv(
                    matWorldUniformLocation,
                    gl.FALSE,
                    worldMatrix
                  );

                  gl.clearColor(0.0, 0.0, 0.0, 1.0);
                  gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

                  gl.activeTexture(gl.TEXTURE0);
                  gl.bindTexture(gl.TEXTURE_2D, textures[0]);
                  gl.activeTexture(gl.TEXTURE1);
                  gl.bindTexture(gl.TEXTURE_2D, textures[1]);

                  gl.drawElements(
                    gl.TRIANGLES,
                    indices.length,
                    gl.UNSIGNED_SHORT,
                    0
                  );

                  if (count === end) {
                    let twoTextureFp = getData(gl, canvas.id);
                    document.body.removeChild(canvas);
                    resolve(twoTextureFp);
                  } else {
                    requestAnimationFrame(loop);
                  }
                }
                requestAnimationFrame(loop);
              });
            }
          }

          // function drawCubeWood(wood) {
          //     const vertexShaderText = `
          //         precision mediump float;

          //         attribute vec3 vertPosition;
          //         attribute vec2 vertTexCoord;
          //         varying vec2 fragTexCoord;
          //         uniform mat4 mWorld;
          //         uniform mat4 mView;
          //         uniform mat4 mProj;

          //         void main() {
          //             fragTexCoord = vertTexCoord;
          //             gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
          //         }
          //     `;

          //     const fragmentShaderText = `
          //         precision mediump float;

          //         varying vec2 fragTexCoord;
          //         uniform sampler2D sampler;

          //         void main() {
          //             gl_FragColor = texture2D(sampler, fragTexCoord);
          //         }
          //     `;

          //     let gl;
          //     var canvas = document.createElement('canvas');
          //     canvas.id = 'cube_wood'
          //     canvas.width = 256;  // width in pixels
          //     canvas.height = 256; // height in pixels
          //     document.body.appendChild(canvas);
          //     gl = canvas.getContext('webgl', { antialias: false }) || canvas.getContext('experimental-webgl', { antialias: false });

          //     if (!gl) {
          //         alert('Your browser does not support WebGL');
          //         return;
          //     }

          //     gl.clearColor(0.75, 0.85, 0.8, 1.0);
          //     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          //     gl.enable(gl.DEPTH_TEST);
          //     gl.enable(gl.CULL_FACE);
          //     gl.frontFace(gl.CCW);
          //     gl.cullFace(gl.BACK);

          //     // Create shaders
          //     const vertexShader = gl.createShader(gl.VERTEX_SHADER);
          //     const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

          //     gl.shaderSource(vertexShader, vertexShaderText);
          //     gl.shaderSource(fragmentShader, fragmentShaderText);

          //     gl.compileShader(vertexShader);
          //     if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
          //         console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
          //         return;
          //     }

          //     gl.compileShader(fragmentShader);
          //     if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
          //         console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
          //         return;
          //     }

          //     const program = gl.createProgram();
          //     gl.attachShader(program, vertexShader);
          //     gl.attachShader(program, fragmentShader);
          //     gl.linkProgram(program);
          //     if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          //         console.error('ERROR linking program!', gl.getProgramInfoLog(program));
          //         return;
          //     }
          //     gl.validateProgram(program);
          //     if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
          //         console.error('ERROR validating program!', gl.getProgramInfoLog(program));
          //         return;
          //     }

          //     // Create buffer
          //     const boxVertices = new Float32Array([
          //         // X, Y, Z           U, V
          //         // Top
          //         -1.0, 1.0, -1.0,   0, 0,
          //         -1.0, 1.0, 1.0,    0, 1,
          //         1.0, 1.0, 1.0,     1, 1,
          //         1.0, 1.0, -1.0,    1, 0,

          //         // Left
          //         -1.0, 1.0, 1.0,    0, 0,
          //         -1.0, -1.0, 1.0,   1, 0,
          //         -1.0, -1.0, -1.0,  1, 1,
          //         -1.0, 1.0, -1.0,   0, 1,

          //         // Right
          //         1.0, 1.0, 1.0,    1, 1,
          //         1.0, -1.0, 1.0,   0, 1,
          //         1.0, -1.0, -1.0,  0, 0,
          //         1.0, 1.0, -1.0,   1, 0,

          //         // Front
          //         1.0, 1.0, 1.0,    1, 1,
          //         1.0, -1.0, 1.0,    1, 0,
          //         -1.0, -1.0, 1.0,    0, 0,
          //         -1.0, 1.0, 1.0,    0, 1,

          //         // Back
          //         1.0, 1.0, -1.0,    0, 0,
          //         1.0, -1.0, -1.0,    0, 1,
          //         -1.0, -1.0, -1.0,    1, 1,
          //         -1.0, 1.0, -1.0,    1, 0,

          //         // Bottom
          //         -1.0, -1.0, -1.0,   1, 1,
          //         -1.0, -1.0, 1.0,    1, 0,
          //         1.0, -1.0, 1.0,     0, 0,
          //         1.0, -1.0, -1.0,    0, 1,
          //     ]);

          //     const boxIndices = new Uint16Array([
          //         // Top
          //         0, 1, 2,
          //         0, 2, 3,

          //         // Left
          //         5, 4, 6,
          //         6, 4, 7,

          //         // Right
          //         8, 9, 10,
          //         8, 10, 11,

          //         // Front
          //         13, 12, 14,
          //         15, 14, 12,

          //         // Back
          //         16, 17, 18,
          //         16, 18, 19,

          //         // Bottom
          //         21, 20, 22,
          //         22, 20, 23
          //     ]);

          //     const boxVertexBufferObject = gl.createBuffer();
          //     gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
          //     gl.bufferData(gl.ARRAY_BUFFER, boxVertices, gl.STATIC_DRAW);

          //     const boxIndexBufferObject = gl.createBuffer();
          //     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
          //     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, boxIndices, gl.STATIC_DRAW);

          //     const positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
          //     const texCoordAttribLocation = gl.getAttribLocation(program, 'vertTexCoord');
          //     gl.vertexAttribPointer(
          //         positionAttribLocation,
          //         3,
          //         gl.FLOAT,
          //         gl.FALSE,
          //         5 * Float32Array.BYTES_PER_ELEMENT,
          //         0
          //     );
          //     gl.vertexAttribPointer(
          //         texCoordAttribLocation,
          //         2,
          //         gl.FLOAT,
          //         gl.FALSE,
          //         5 * Float32Array.BYTES_PER_ELEMENT,
          //         3 * Float32Array.BYTES_PER_ELEMENT
          //     );

          //     gl.enableVertexAttribArray(positionAttribLocation);
          //     gl.enableVertexAttribArray(texCoordAttribLocation);

          //     // Create texture
          //     const boxTexture = gl.createTexture();
          //     gl.bindTexture(gl.TEXTURE_2D, boxTexture);
          //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          //     gl.texImage2D(
          //         gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
          //         gl.UNSIGNED_BYTE,
          //         wood
          //     );
          //     gl.bindTexture(gl.TEXTURE_2D, null);

          //     // Use program
          //     gl.useProgram(program);

          //     const matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
          //     const matViewUniformLocation = gl.getUniformLocation(program, 'mView');
          //     const matProjUniformLocation = gl.getUniformLocation(program, 'mProj');

          //     const worldMatrix = new Float32Array(16);
          //     const viewMatrix = new Float32Array(16);
          //     const projMatrix = new Float32Array(16);
          //     mat4.identity(worldMatrix);
          //     mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0], [0, 1, 0]);
          //     mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

          //     gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
          //     gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
          //     gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);

          //     const xRotationMatrix = new Float32Array(16);
          //     const yRotationMatrix = new Float32Array(16);

          //     // Main render loop
          //     const identityMatrix = new Float32Array(16);
          //     mat4.identity(identityMatrix);
          //     let count = 0;
          //     let angle = 0;

          //     const loop = function() {
          //         angle = 0;
          //         count++;
          //         mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
          //         mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
          //         mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
          //         gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

          //         gl.clearColor(1.0, 1.0, 1.0, 1.0);
          //         gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

          //         gl.bindTexture(gl.TEXTURE_2D, boxTexture);
          //         gl.activeTexture(gl.TEXTURE0);

          //         gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

          //         if (count == 20) {
          //             cubeFp = getData(gl, canvas.id);
          //             console.log('cubeFp: ', cubeFp)
          //             return cubeFp
          //         }

          //         requestAnimationFrame(loop);
          //     };
          //     requestAnimationFrame(loop);
          // }

          var path = "./bfp/dist/javascripts/fingerprint/js/texture/Susan.json";
          var vertexShaderText = [
            "precision mediump float;",
            "",
            "attribute vec3 vertPosition;",
            "attribute vec3 vertColor;",
            "varying vec3 fragColor;",
            "uniform mat4 mWorld;",
            "uniform mat4 mView;",
            "uniform mat4 mProj;",
            "",
            "void main()",
            "{",
            "  fragColor = vertColor;",
            "  gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);",
            "}",
          ].join("\n");

          var fragmentShaderText = [
            "precision mediump float;",
            "",
            "varying vec3 fragColor;",
            "void main()",
            "{",
            "  gl_FragColor = vec4(fragColor, 1.0);",
            "}",
          ].join("\n");

          var res = await fetch(path);
          var model = await res.text();
          // do something with "text"
          try {
            var susanModel = JSON.parse(model);
            var meshe = susanModel["meshes"][0];
            // The parsed JSON object
            var vertices = meshe.vertices; // Define your vertices here
            var indices = [].concat.apply([], meshe.faces); // Define your indices here
            var texCoords = meshe.texturecoords[0]; // Define your texture coordinates here
            var texture = await loadImage(
              "./bfp/dist/javascripts/fingerprint/js/texture/color.png"
            );
            var texture1 = await loadImage(
              "./bfp/dist/javascripts/fingerprint/js/texture/color2.png"
            );
            // var wood =  await loadImage('./bfp/dist/javascripts/fingerprint/js/texture/wood.png')
            var normals = meshe.normals;
            var canvas = document.createElement("canvas");

            var texFp = await getTexture(
              vertices,
              indices,
              texCoords,
              texture,
              canvas
            );
            // if (texFp !== undefined) {
            //     console.log("getTexture result: ", textureFp);
            // } else {
            //     // await new Promise(r => setTimeout(r, 2000));
            //     console.error("Failed to obtain texture hash.");
            // }
            var camFp = await getCamera();
            var linesFp = await getLines("notnormal");
            var simpLightFp = await getSimpleLight(
              vertices,
              indices,
              texCoords,
              normals,
              texture
            );
            var moreLightFp = await getMoreLight(
              vertices,
              indices,
              texCoords,
              normals,
              texture,
              vsText,
              fsText
            );

            // console.log('please', simpLightFp)
            var twoTexMoreLightFp = await getTwoTexturesMoreLight(
              vertices,
              indices,
              texCoords,
              normals,
              texture,
              texture1
            );
            // drawCubeWood(wood)

            // console.log('this is simplight and morelight: ', simpLightFp, moreLightFp)

            var ret = {
              "Texture Hash": texFp,
              "Camera Hash": camFp,
              "Lines Hash": linesFp,
              "Simple Light Hash": simpLightFp,
              "More Light Hash": moreLightFp,
              "Two Textures More Light Hash": twoTexMoreLightFp,
            };
            // console.log(ret)
          } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
          }

          // console.log('out ', ret);

          return ret;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Push Notification", async function () {
          let fingerprintData = {};

          // Check Notification permission state
          fingerprintData.permissionState = Notification.permission;

          // Test notification creation and feature support
          try {
            const notification = new Notification("Test Notification", {
              body: "This is a test",
              requireInteraction: true, // Check if this property is supported
              silent: true, // Some browsers might ignore this
            });

            // Check supported features
            fingerprintData.supportedOptions = {
              requireInteraction: notification.requireInteraction === true,
              silent: notification.silent === true,
            };

            // Clean up
            notification.close();
          } catch (e) {
            // Capture errors (different browsers may throw different error messages)
            fingerprintData.errorMessage = e.message;
          }

          // Test the timing of showing notifications
          // const start = performance.now();
          // const permissionState = await navigator.permissions.query({ name: "notifications" });
          // const end = performance.now();
          async function execNot() {
            await navigator.permissions.query({ name: "notifications" });
          }
          fingerprintData.permissionTiming = await measure(execNot);

          // Log or send the fingerprint data
          // console.log(fingerprintData);
          return fingerprintData;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Fullscreen", async function () {
          let fingerprintData = {};

          // Detect if Fullscreen API is supported
          fingerprintData.fullscreenSupported = !!document.fullscreenEnabled;

          if (!fingerprintData.fullscreenSupported) {
            fingerprintData.support = "no";
          }

          fingerprintData.support = "yes";

          async function execFullscreen() {
            await document.exitFullscreen();
          }

          try {
            const element = document.createElement("div");
            element.style.width = "100px";
            element.style.height = "100px";
            element.style.backgroundColor = "red";
            element.style.visibility = "hidden";
            document.body.appendChild(element);

            // Request fullscreen
            await element.requestFullscreen();

            // Measure fullscreen dimensions
            fingerprintData.fullscreenWidth = window.screen.width;
            fingerprintData.fullscreenHeight = window.screen.height;

            // Detect aspect ratio
            fingerprintData.aspectRatio =
              window.screen.width / window.screen.height;

            // Measure exit timing
            // const start = performance.now();
            // await document.exitFullscreen();
            // const end = performance.now();
            fingerprintData.exitFullscreenTime = await measure(execFullscreen);

            // Clean up
            document.body.removeChild(element);
          } catch (e) {
            // Capture any errors
            fingerprintData.errorMessage = e.message;
          }

          // Log or send the fingerprint data
          // console.log(fingerprintData)
          return fingerprintData;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Add to Home Screen", async function () {
          let fingerprintData = {
            isInstallable: false,
            platform: navigator.platform,
            installPromptTiming: null,
            appInstalled: false,
            errors: null,
          };

          fingerprintData.isInstallable = temp;

          // console.log('before test')
          // var button = document.getElementById('playButton')
          // button.addEventListener('click', async (e) => {

          //     if  (fingerprintData.isInstallable){
          //         console.log('inside')

          //         const start = performance.now();
          //         await WPA.prompt(); // Show the prompt

          //         WPA.userChoice.then((choiceResult) => {
          //             const end = performance.now();
          //             fingerprintData.installPromptTiming = end - start;
          //             fingerprintData.userChoice = choiceResult.outcome; // Accepted or dismissed
          //         }).catch((error) => {
          //             fingerprintData.errors = error.message;
          //         });

          //     }

          // })

          // Check if the 'beforeinstallprompt' event is supported
          // if (fingerprintData.isInstallable) {
          //     console.log('inside')
          //     // fingerprintData.isInstallable = true;

          //     // Measure timing for install prompt
          //     const start = performance.now();
          //     await WPA.prompt(); // Show the prompt

          //     WPA.userChoice.then((choiceResult) => {
          //         const end = performance.now();
          //         fingerprintData.installPromptTiming = end - start;
          //         fingerprintData.userChoice = choiceResult.outcome; // Accepted or dismissed
          //     }).catch((error) => {
          //         fingerprintData.errors = error.message;
          //     });
          // };

          // Detect if app is installed
          window.appinstalled = function () {
            fingerprintData.appInstalled = true;
          };

          // Log or send the fingerprint data
          // console.log(fingerprintData);
          return fingerprintData;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("App Banner", async function () {
          let fingerprintData = {
            isIOS: false,
            bannerRendered: false,
            hasAppInstalled: null,
            interactionTiming: null,
            errors: null,
          };

          try {
            // Detect iOS Safari (limited heuristic, based on User Agent or other checks)
            fingerprintData.isIOS =
              /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            // Measure if the Smart App Banner appears
            const start = performance.now();
            const metaTag = document.querySelector(
              'meta[name="apple-itunes-app"]'
            );
            if (metaTag) {
              fingerprintData.bannerRendered = true;

              // Simulate user interaction with the banner (timing example)
              const simulateClick = () => {
                const end = performance.now();
                fingerprintData.interactionTiming = end - start;
              };

              // Attach fake interaction (e.g., simulated click)
              setTimeout(simulateClick, 1000); // Simulate after 1s delay
            } else {
              fingerprintData.bannerRendered = false;
            }
          } catch (e) {
            fingerprintData.errors = e.message;
          }

          // console.log(fingerprintData);
          return fingerprintData;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Safari IOS bugs", async function () {
          const results = {};

          const pseudoContent = window.getComputedStyle(
            document.body,
            "::after"
          ).content;

          results.remMediaQueryBug = pseudoContent.includes("rem bug detected");

          document.body.style.setProperty("--after-content", "none"); // Clear the content
          const style = document.createElement("style");
          style.textContent = `body::after { content: var(--after-content, none) !important; }`;
          document.head.appendChild(style);

          const el = document.createElement("div");
          el.className = "test-fractional-pixel";
          document.body.appendChild(el);
          const width = el.offsetWidth;
          document.body.removeChild(el);
          results.fractionalPixelRoundingBug = width !== 200.5; // True if rounding occurs

          const el1 = document.createElement("div");
          el1.className = "test-fixed";
          document.body.appendChild(el1);
          window.scrollTo(0, 100);
          const rect = el1.getBoundingClientRect();
          const isCorrect = rect.top === 0;
          document.body.removeChild(el1);
          results.fixedPositioningBug = !isCorrect; // True if fixed positioning fails

          // Test hover behavior
          const el2 = document.createElement("div");
          el2.className = "test-hover";
          el2.style.height = "50px";
          el2.style.width = "50px";
          el2.style.backgroundColor = "blue";
          document.body.appendChild(el2);
          const initialColor = window.getComputedStyle(el2).backgroundColor;
          el2.dispatchEvent(new Event("mouseover"));
          const hoverColor = window.getComputedStyle(el2).backgroundColor;
          document.body.removeChild(el2);
          results.hoverBehaviorBug = initialColor === hoverColor; // True if hover does not work

          const el3 = document.createElement("div");
          el3.className = "test-scroll";
          el3.textContent = "Scroll content".repeat(10);
          document.body.appendChild(el3);
          el3.scrollTop = 100;
          const scrolled = el3.scrollTop === 100;
          document.body.removeChild(el3);
          results.overflowScrollingBug = !scrolled; // True if scrolling fails

          // console.log("Safari Bug Detection Results:", results);
          return results;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Safari IOS Orientaion", async function () {
          let initialWidth = screen.width;
          let initialHeight = screen.height;
          let id;
          const result = {
            initialWidth,
            initialHeight,
            orientation: 0,
            behavior: "",
          };

          function detectScreenBehavior() {
            const width = screen.width;
            const height = screen.height;
            const orientation = window.orientation;
            result.width = width;
            result.height = height;
            result.orientation = orientation;

            if (width !== initialWidth && height !== initialHeight) {
              result.behavior = "Chrome/Android: screen dimensions swapped";
            } else if (width === initialWidth && height === initialHeight) {
              result.behavior = "Safari/iOS: screen dimensions unchanged";
            } else {
              result.behavior = "Unknown behavior";
            }
          }

          // id = setInterval(detectScreenBehavior, 500);

          // for (var i = 0; i > 5; i++ ){

          //     // Continuously monitor changes
          //    await setTimeout(500)

          // };

          // clearInterval(id)
          detectScreenBehavior();

          return result;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Safari API Support", async function () {
          const apiTests = {
            "Web Bluetooth": () => navigator.bluetooth !== undefined,
            "Web MIDI API": () => navigator.requestMIDIAccess !== undefined,
            "Magnetometer API": () => window.Magnetometer !== undefined,
            "Web NFC API": () => navigator.nfc !== undefined,
            "Device Memory API": () => navigator.deviceMemory !== undefined,
            "Network Information API": () => navigator.connection !== undefined,
            "Battery Status API": () => navigator.getBattery !== undefined,
            "Web Bluetooth Scanning": () =>
              navigator.bluetooth?.requestLEScan !== undefined,
            "Ambient Light Sensor": () =>
              window.AmbientLightSensor !== undefined,
            "HDCP Policy Check": () =>
              navigator?.mediaCapabilities?.decodingInfo !== undefined,
            "Proximity Sensor": () => window.ProximitySensor !== undefined,
            WebHID: () => navigator.hid !== undefined,
            "Serial API": () => navigator.serial !== undefined,
            "Web USB": () => navigator.usb !== undefined,
            "Geolocation Sensor": () =>
              navigator.permissions?.query({ name: "geolocation" }) !==
              undefined,
            "User Idle Detection": () => navigator.idleDetector !== undefined,
          };

          const results = {};
          for (const [api, test] of Object.entries(apiTests)) {
            results[api] = test() ? "Supported" : "Not Supported";
          }

          return results;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("CSS Font-face", async function () {
          const fontsToCheck = [
            "Abyssinica SIL",
            "AnjaliOldLipi",
            "DejaVu Sans",
            "DejaVu Sans Condensed",
            "DejaVu Sans Mono",
            "DejaVu Serif",
            "DejaVu Serif Condensed",
            "Droid Sans Fallback",
            "DroidSansFallback",
            "Gentium Basic",
            "Gentium Book Basic",
            "Khmer OS",
            "Khmer OS System",
            "Liberation Sans",
            "Liberation Mono",
            "Liberation Sans Narrow",
            "Likhan",
            "Mitra Mono",
            "Noto Color Emoji",
            "Noto Sans CJK JP",
            "Noto Sans CJK KR",
            "Noto Sans CJK SC",
            "Noto Sans CJK TC",
            "Noto Sans Mono CJK JP",
            "Noto Sans Mono CJK KR",
            "Noto Sans Mono CJK SC",
            "Noto Sans Mono CJK TC",
            "Noto Serif CJK JP",
            "Noto Serif CJK KR",
            "Noto Serif CJK SC",
            "Noto Serif CJK TC",
            "OpenSymbol",
            "Saab",
            "Tibetan Machine Uni",
            "Ubuntu",
            "Ubuntu Light",
            "Ubuntu Bold",
            "Ubuntu Mono",
            "Alfredo's Dance",
            "Alison Regular",
            "All Caps",
            "Allegro",
            "Alligator Puree",
            "Almonte Snow",
            "Alpha CLOWN",
            "Amazone BT",
            "Ambages",
            "AmerType Md BT",
            "American Typewriter",
            "American Typewriter Condensed",
            "American Typewriter Condensed Light",
            "American Typewriter Light",
            "Amerika",
            "Amerika Alternates",
            "Amerika Sans",
            "Amethyst Zucchini",
            "Analgesics",
            "Angelica",
            "Angioma AOE",
            "Angleterre Book - DGL",
            "Angostura",
            "Angstrom",
            "Ann Regular",
            "AntFarm GoneCamping",
            "Antique Olive",
            "Apple Braille",
            "Apple LiGothic",
            "Apple LiGothic Medium",
            "Apple LiSung",
            "Apple LiSung Light",
            "Apple Symbols",
            "Aquaduct Italic",
            "Aquaduct Plain",
            "Aquaduct Reverse Italic",
            "Aquaduct Warp",
            "Aramis Italic",
            "Architext Regular",
            "Arctic",
            "Argos MF",
            "Arial Bold",
            "Arial Bold Italic",
            "Arial Hebrew Bold",
            "Arial Italic",
            "Arial Narrow Bold",
            "Arial Narrow Bold Italic",
            "Arial Narrow Italic",
            "Arno Pro Bold",
            "Arno Pro Bold Caption",
            "Arno Pro Bold Display",
            "Arno Pro Bold Italic",
            "Arno Pro Bold Italic Caption",
            "Arno Pro Bold Italic Display",
            "Arno Pro Bold Italic SmText",
            "Arno Pro Bold Italic Subhead",
            "Arno Pro Bold SmText",
            "Arno Pro Bold Subhead",
            "Arno Pro Italic",
            "Arno Pro Italic Caption",
            "Arno Pro Italic Display",
            "Arno Pro Italic SmText",
            "Arno Pro Italic Subhead",
            "Arno Pro Light Italic Display",
            "Arno Pro Smbd Italic",
            "Arno Pro Smbd Italic Caption",
            "Arno Pro Smbd Italic Display",
            "Arno Pro Smbd Italic SmText",
            "Arno Pro Smbd Italic Subhead",
            "Arrobatherapy",
            "Arrus BT",
            "Asenine",
            "Asenine Super Thin",
            "Asenine Thin",
            "Asenine Wide",
            "Atlas",
            "Aurora Cn BT",
            "AvantGarde Bk BT",
            "AvantGarde Md BT",
            "AvenirBlk_PFL",
            "AvenirLt_PFL",
            "AvenirMd_PFL",
            "Baghdad",
            "Bank Gothic",
            "Baskerville",
            "Baskerville Semibold",
            "Bazooka",
            "Bell Gothic Std Bold",
            "Benguiat Bk BT",
            "BernhardFashion BT",
            "BernhardMod BT",
            "BiauKai",
            "Bickham Script Pro Bold",
            "Big Caslon",
            "BinnerD",
            "Bitstream Charter",
            "Bitstream Vera Sans",
            "Bitstream Vera Serif",
            "Blackletter686 BT",
            "Blackmoor LET",
            "BlairMdITC TT",
            "BlairMdITC TT-Medium",
            "Blockbuster",
            "Bodoni MT Poster Compressed",
            "Buxton Sketch",
            "Century Schoolbook L",
            "Courier 10 Pitch",
            "Dingbats",
            "Droid Sans Arabic",
            "FreeMono",
            "FreeSans",
            "FreeSerif",
            "Garuda",
            "HelveticaNeueVN-Black",
            "HelveticaNeueVN-BlackItalic",
            "HelveticaNeueVN-Bold",
            "HelveticaNeueVN-BoldCond",
            "HelveticaNeueVN-BoldCondObl",
            "HelveticaNeueVN-BoldItalic",
            "HelveticaNeueVN-Condensed",
            "HelveticaNeueVN-CondensedObl",
            "HelveticaNeueVN-ExtBlackCond",
            "HelveticaNeueVN-ExtBlackCondOb",
            "HelveticaNeueVN-Heavy",
            "HelveticaNeueVN-HeavyCond",
            "HelveticaNeueVN-HeavyCondObl",
            "HelveticaNeueVN-HeavyItalic",
            "HelveticaNeueVN-Italic",
            "HelveticaNeueVN-Light",
            "HelveticaNeueVN-LightItalic",
            "HelveticaNeueVN-Medium",
            "HelveticaNeueVN-MediumCond",
            "HelveticaNeueVN-MediumCondObl",
            "HelveticaNeueVN-MediumItalic",
            "HelveticaNeueVN-Roman",
            "HelveticaNeueVN-Thin",
            "HelveticaNeueVN-ThinItalic",
            "HelveticaNeueVN-UltraLight",
            "HelveticaNeueVN-UltraLightItal",
            "Javanese Text",
            "KacstArt",
            "KacstBook",
            "KacstDecorative",
            "KacstDigital",
            "KacstFarsi",
            "KacstLetter",
            "KacstNaskh",
            "KacstOffice",
            "KacstOne",
            "KacstPen",
            "KacstPoster",
            "KacstQurn",
            "KacstScreen",
            "KacstTitle",
            "KacstTitleL",
            "Kinnari",
            "Leelawadee UI",
            "Leelawadee UI Semilight",
            "Liberation Serif",
            "Lohit Bengali",
            "Lohit Gujarati",
            "Lohit Hindi",
            "Lohit Punjabi",
            "Lohit Tamil",
            "Loma",
            "Lucida Grande Bold",
            "Mallige",
            "Meera",
            "Microsoft JhengHei Light",
            "Microsoft JhengHei UI Light",
            "Microsoft YaHei Light",
            "Microsoft YaHei UI Light",
            "Monospace",
            "Myanmar Text",
            "Myriad Pro Cond It",
            "Myriad Pro It",
            "Myriad Pro Light Cond",
            "Myriad Pro Semibold",
            "Myriad Pro Semibold It",
            "Myriad Web Pro Condensed",
            "Nadeem",
            "NanumMyeongjo",
            "New Peninim MT",
            "New Peninim MT Bold",
            "New Peninim MT Bold Inclined",
            "New Peninim MT Inclined",
            "News Gothic MT",
            "News GothicMT",
            "NewsGoth BT",
            "Nimbus Mono L",
            "Nimbus Roman No 9 L",
            "Nimbus Roman No9 L",
            "Nimbus Sans L",
            "Nina",
            "Nirmala UI Semilight",
            "Nonfiction",
            "Norasi",
            "Nueva Std Bold Cond",
            "Nueva Std Bold Cond Italic",
            "Nueva Std Cond Italic",
            "Odessa LET",
            "Old Century",
            "One Stroke Script LET",
            "Onyx BT",
            "Optima",
            "Optima ExtraBlack",
            "Osaka",
            "OzHandicraft BT",
            "PCMyungjo",
            "PTBarnum BT",
            "Papyrus Condensed",
            "ParkAvenue BT",
            "Party LET",
            "Pegasus",
            "Perpetua Bold",
            "Perpetua Bold Italic",
            "Perpetua Italic",
            "Phetsarath OT",
            "Pickwick",
            "PilGi",
            "PortagoITC TT",
            "Poster",
            "PosterBodoni BT",
            "Pothana2000",
            "Prestige Elite Std Bold",
            "Princetown LET",
            "Purisa",
            "Pythagoras",
            "Quixley LET",
            "Raanana",
            "Rachana",
            "Rage Italic LET",
            "Rekha",
            "Ribbon131 Bd BT",
            "Rosewood Std",
            "Ruach LET",
            "STFangsong",
            "STKaiti",
            "SWGamekeys MT",
            "SWMacro",
            "Sanpya",
            "Sans",
            "Santa Fe LET",
            "Sathu",
            "Savoye LET",
            "Sawasdee",
            "Sceptre",
            "SchoolHouse Cursive B",
            "SchoolHouse Printed A",
            "Segoe Condensed",
            "Segoe Marker",
            "Segoe UI Black",
            "Serif",
            "Serifa BT",
            "Serifa Th BT",
            "ShelleyVolante BT",
            "Sherwood",
            "Signboard",
            "Silom",
            "Sitka Banner",
            "Sitka Display",
            "Sitka Heading",
            "Sitka Small",
            "Sitka Subheading",
            "Sitka Text",
            "SketchFlow Print",
            "Skia",
            "Smudger LET",
            "Snell Roundhand",
            "Snell Roundhand Black",
            "Snell Roundhand Bold",
            "Socket",
            "Souvenir Lt BT",
            "Space Age",
            "Staccato222 BT",
            "Standard Symbols L",
            "Steamer",
            "Stone Sans ITC TT",
            "Stone Sans ITC TT-Bold",
            "Stone Sans ITC TT-Semi",
            "Stone Sans ITC TT-SemiIta",
            "Stone Sans OS ITC TT-Bold",
            "Stone Sans OS ITC TT-Semi",
            "Stone Sans OS ITCTT-SemiIta",
            "Stone Sans Sem ITC TT",
            "Storybook",
            "Subway",
            "Swiss911 XCm BT",
            "Synchro LET",
            "Tahoma Bold",
            "TakaoPGothic",
            "TeX",
            "Technical",
            "Tekton Pro Bold",
            "Tekton Pro BoldCond",
            "Tekton Pro BoldExt",
            "Tekton Pro BoldObl",
            "Teletype",
            "Thonburi Bold",
            "TimeA1",
            "Times CE",
            "Times CY",
            "Times New Roman Bold",
            "Times New Roman Bold Italic",
            "Times New Roman Italic",
            "TimesTen",
            "Tiranti Solid LET",
            "Tlwg Typist",
            "Tlwg Typo",
            "TlwgMono",
            "TlwgTypewriter",
            "Trajan Pro Bold",
            "Trebuchet MS Bold",
            "Trebuchet MS Bold Italic",
            "Trebuchet MS Italic",
            "Trebuchet_PFL",
            "Tristan",
            "Tubular",
            "Tw Cen MT Bold",
            "Tw Cen MT Bold Italic",
            "Tw Cen MT Italic",
            "Type Embellishments One LET",
            "TypoUpright BT",
            "URW Antiqua T",
            "URW Bookman L",
            "URW Chancery L",
            "URW Gothic L",
            "URW Grotesk T",
            "URW Palladio L",
            "Ubuntu Condensed",
            "Ume Gothic",
            "Ume Gothic C4",
            "Ume Gothic C5",
            "Ume Gothic O5",
            "Ume Gothic S4",
            "Ume Gothic S5",
            "Ume Mincho",
            "Ume Mincho S3",
            "Ume P Gothic",
            "Ume P Gothic C4",
            "Ume P Gothic C5",
            "Ume P Gothic O5",
            "Ume P Gothic S4",
            "Ume P Gothic S5",
            "Ume P Mincho",
            "Ume P Mincho S3",
            "Ume UI Gothic",
            "Ume UI Gothic O5",
            "Umpush",
            "UnBatang",
            "UnDinaru",
            "UnDotum",
            "UnGraphic",
            "UnGungseo",
            "UnPilgi",
            "Unicorn",
            "Univers",
            "Univers Condensed",
            "University Roman LET",
            "Untitled1",
            "Urdu Typesetting",
            "Utopia",
            "VNI Cambodia",
            "VNI Greece",
            "VNI Laos",
            "VNI Russia",
            "VNI-Allegie",
            "VNI-Aptima",
            "VNI-Ariston",
            "VNI-Auchon",
            "VNI-Avo",
            "VNI-Awchon",
            "VNI-Aztek",
            "VNI-Bandit",
            "VNI-Baybuom",
            "VNI-Bodon",
            "VNI-Bodon-Poster",
            "VNI-Book",
            "VNI-Briquet",
            "VNI-Broad",
            "VNI-Brush",
            "VNI-Butlong",
            "VNI-Centur",
            "VNI-Commerce",
            "VNI-Cooper",
            "VNI-Coronet",
            "VNI-Couri",
            "VNI-DOS Sample Font",
            "VNI-Disney",
            "VNI-Diudang",
            "VNI-Dom",
            "VNI-Duff",
            "VNI-Dur",
            "VNI-Fato",
            "VNI-Franko",
            "VNI-Free",
            "VNI-Garam",
            "VNI-Goudy",
            "VNI-HLThuphap",
            "VNI-Helve",
            "VNI-Helve-Condense",
            "VNI-Hobo",
            "VNI-Internet Mail",
            "VNI-Jamai",
            "VNI-Juni",
            "VNI-Korin",
            "VNI-Kun",
            "VNI-Linus",
            "VNI-Lithos",
            "VNI-Maria",
            "VNI-Matisse",
            "VNI-Meli",
            "VNI-Murray",
            "VNI-Netbut",
            "VNI-Nhatban",
            "VNI-OngDoHL",
            "VNI-Palatin",
            "VNI-Park",
            "VNI-Present",
            "VNI-Revue",
            "VNI-Script",
            "VNI-Souvir",
            "VNI-Swiss-Condense",
            "VNI-Tekon",
            "VNI-Thanhcao",
            "VNI-Thufap1",
            "VNI-Thufap2",
            "VNI-Thufap3",
            "VNI-Thufapfan",
            "VNI-Times",
            "VNI-Top",
            "VNI-Truck",
            "VNI-Tubes",
            "VNI-Univer",
            "VNI-Vari",
            "VNI-Viettay",
            "VNI-Vivi",
            "VNI-WIN Sample Font",
            "VNI-Whimsy",
            "VNI-Yahoo",
            "VNI-Zap",
            "VTC Tribal Regular",
            "Vagabond",
            "Vemana2000",
            "Verdana Bold",
            "Verdana Bold Italic",
            "Verdana Italic",
            "Verona",
            "Vinhan",
            "Waree",
            "Warnock Pro",
            "Warnock Pro Caption",
            "Warnock Pro Display",
            "Warnock Pro Light",
            "Warnock Pro Light Caption",
            "Warnock Pro Light Display",
            "Warnock Pro Light Subhead",
            "Warnock Pro SmBd",
            "Warnock Pro SmBd Caption",
            "Warnock Pro SmBd Display",
            "Warnock Pro SmBd Subhead",
            "Warnock Pro Subhead",
            "WenQuanYi Micro Hei",
            "WenQuanYi Micro Hei Mono",
            "Westminster",
            "Xerox Malfunction BRK",
            "Yu Gothic Light",
            "Yu Mincho Demibold",
            "Yu Mincho Light",
            "Zapf Dingbats",
            "ZapfEllipt BT",
            "ZapfHumnst BT",
            "ZapfHumnst Dm BT",
            "Zapfino",
            "Zurich BlkEx BT",
            "Zurich Ex BT",
            "academy engraved let",
            "akaDora",
            "algerian",
            "amaze",
            "balthazar",
            "bankgothic lt bt",
            "bart",
            "bimini",
            "gargi",
            "mry_KacstQurn",
            "new york",
            "olddreadfulno7 bt",
            "orange let",
            "palatino",
            "palatino linotype",
            "playbill",
            "pump demi bold let",
            "puppylike",
            "roland",
            "scripts",
            "scruff let",
            "short hand",
            "signs normal",
            "simplex",
            "simpson",
            "stylus bt",
            "superfrench",
            "surfer",
            "swis721 blkoul bt",
            "swis721 bt",
            "symap",
            "symbol",
            "technic",
            "terk",
            "trendy",
            "txt",
            "victorian let",
            "vineta bt",
            "vivian",
            "webdings",
            "western",
            "westwood let",
            "wide latin",
            "wingdings",
          ];

          async function checkFont(fontName) {
            try {
              const font = new FontFace(fontName, `local("${fontName}")`);
              await font.load();
              return true; // Font is installed
            } catch (error) {
              return false; // Font is not installed
            }
          }

          // Function to detect installed fonts
          async function detectInstalledFonts() {
            const fontDetectionResults = {};

            for (const font of fontsToCheck) {
              const isInstalled = await checkFont(font);
              fontDetectionResults[font] = isInstalled;
            }

            return fontDetectionResults;
          }

          // Run the detection and log the results
          result = await detectInstalledFonts();
          // console.log("Font Detection Results:", result);

          return result;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("Compression", async function () {
          async function getCompressionFingerprint() {
            const fingerprint = {};

            const testData = new TextEncoder().encode(
              "This is a test string for compression fingerprinting."
            );

            const formats = ["gzip", "deflate", "deflate-raw"]; // 'deflate-raw' is less commonly supported

            for (const format of formats) {
              try {
                const startTime = performance.now();

                const compressionStream = new CompressionStream(format);

                const chunks = [];
                const writableStream = new WritableStream({
                  write(chunk) {
                    chunks.push(chunk);
                  },
                });

                const readableStream = new ReadableStream({
                  start(controller) {
                    controller.enqueue(testData);
                    controller.close();
                  },
                });

                await readableStream
                  .pipeThrough(compressionStream)
                  .pipeTo(writableStream);

                const endTime = performance.now();
                const compressionTime = endTime - startTime;

                const compressedSize = chunks.reduce(
                  (total, chunk) => total + chunk.byteLength,
                  0
                );

                fingerprint[format] = {
                  supported: true,
                  compressionTime: compressionTime.toFixed(2) + " ms",
                  compressedSize: compressedSize + " bytes",
                };
              } catch (error) {
                // If an error occurs, the format is likely not supported
                fingerprint[format] = {
                  supported: false,
                  error: error.message,
                };
              }
            }

            return fingerprint;
          }

          // Run the fingerprinting function and log the results
          result = await getCompressionFingerprint();
          // console.log("Compression Fingerprint:", result);

          return result;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("CSS calc", async function () {
          var ret = 0;
          var frame;

          const prom = new Promise((resolve, reject) => {
            // Create the iframe
            frame = document.createElement("iframe");

            // Create a Promise to wait for the iframe's onload event
            frame.onload = function () {
              // console.log('test: ', frame.contentWindow.test)
              // Access the iframe's global variables
              ret = {
                Result: frame.contentWindow.res,
                "Invalid runs": frame.contentWindow.invalid_runs,
                "Zero runs": frame.contentWindow.zero_runs,
              };
              // console.log('Inside iframe onload --> ', ret);
              resolve(ret); // Resolve the Promise with the result
            };

            // Handle iframe loading errors
            frame.onerror = function (error) {
              console.error("Iframe failed to load:", error);
              reject(new Error("Iframe failed to load"));
            };

            // Set the iframe's source and make it hidden
            frame.src = "/browser/static/calc.html";
            frame.style.visibility = "hidden";

            // Append the iframe to the document body
            document.body.appendChild(frame);
          });

          // Wait for the Promise to resolve
          ret = await prom;
          // console.log('Result from iframe --> ', ret);
          document.body.removeChild(frame);

          return ret;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("CSS container", async function () {
          var ret = 0;
          var frame;

          const prom = new Promise((resolve, reject) => {
            frame = document.createElement("iframe");

            frame.onload = function () {
              ret = {
                Result: frame.contentWindow.results,
                "Other Results": frame.contentWindow.other_results,
              };
              resolve(ret);
            };

            frame.onerror = function (error) {
              console.error("Iframe failed to load:", error);
              reject(new Error("Iframe failed to load"));
            };

            frame.src = "/browser/static/container.html";
            frame.style.visibility = "hidden";

            document.body.appendChild(frame);
          });

          ret = await prom;
          document.body.removeChild(frame);

          return ret;
        });
      })();

      /* **/
    },
    function (module, exports) {
      (function () {
        // Usage
        // const iframe = document.createElement('iframe');
        // iframe.src = 'https://example.com';
        // document.body.appendChild(iframe);

        api.register("CSS Inner Props", async function () {
          // return 0;
          function waitForIframeLoad_old(iframe) {
            return new Promise((resolve, reject) => {
              //   if (
              //     iframe.contentWindow &&
              //     iframe.contentDocument.readyState === "complete"
              //   ) {
              //     console.log("complate", iframe.contentWindow);
              //     // resolve(iframe.contentWindow.results); // If already loaded
              //     return;
              //   }

              iframe.onload = () => {
                // console.log("onload", iframe.contentWindow.results);
                // console.log(
                //   "onload",
                //   Object.keys(iframe.contentWindow.results).length
                // );
                // console.log(
                //   "onload",
                //   Array.isArray(iframe.contentWindow.results)
                // );
                // resolve(Object.keys(iframe.contentWindow.results).length);
                resolve(iframe.contentWindow.results);
              };
              iframe.onerror = () => reject(new Error("Failed to load iframe"));
            });
          }

          // function waitForIframeLoad_old1(iframe) {
          //   return new Promise((resolve, reject) => {
          //     function checkResults() {
          //       try {
          //         if (
          //           iframe.contentWindow &&
          //           iframe.contentWindow.results !== undefined
          //         ) {
          //           resolve(iframe.contentWindow.results);
          //         } else {
          //           setTimeout(checkResults, 50); // Retry until `results` is available
          //         }
          //       } catch (error) {
          //         reject(new Error("Unable to access iframe contentWindow."));
          //       }
          //     }

          //     iframe.onload = () => checkResults();
          //     iframe.onerror = () => reject(new Error("Failed to load iframe"));
          //   });
          // }

          // function waitForIframeResults(iframe, timeout = 5000) {
          //   return new Promise((resolve, reject) => {
          //     const startTime = Date.now();

          //     function checkResults() {
          //       try {
          //         if (
          //           iframe.contentWindow &&
          //           iframe.contentWindow.results !== undefined
          //         ) {
          //           resolve(iframe.contentWindow.results);
          //           return;
          //         }

          //         if (Date.now() - startTime > timeout) {
          //           reject(
          //             new Error("Timeout: results not available in iframe")
          //           );
          //           return;
          //         }

          //         requestAnimationFrame(checkResults); // More efficient than setTimeout
          //       } catch (error) {
          //         reject(new Error("Unable to access iframe contentWindow."));
          //       }
          //     }

          //     iframe.onload = checkResults;
          //     iframe.onerror = () => reject(new Error("Failed to load iframe"));

          //     setTimeout(
          //       () => reject(new Error("Iframe load timeout exceeded")),
          //       timeout
          //     );
          //   });
          // }

          var ret = 0;

          var frame = document.createElement("iframe");

          //   const prom = new Promise((resolve, reject) => {
          //     frame.onload = function () {
          //       console.log(
          //         "CSSInnerProps",
          //         "frame.contentWindow.results",
          //         frame.contentWindow.results
          //       );
          //       ret = {
          //         result: frame.contentWindow.results,
          //       };

          //       resolve(ret);
          //     };

          //     frame.onerror = function (error) {
          //       console.error("Iframe failed to load:", error);
          //       reject(new Error("Iframe failed to load"));
          //     };
          //   });

          frame.src = "/browser/static/inner_props.html";
          frame.style.visibility = "hidden";

          document.body.appendChild(frame);
          ret = await waitForIframeLoad_old(frame);

          // console.log("Result from inner_props --> ", ret);
          // .then(() => console.log('Iframe loaded successfully!'))
          // .catch(error => console.error('Iframe failed to load:', error));

          //   ret = await prom;

          //document.body.removeChild(frame);

          //   console.log("Result from inner_props --> ", ret);

          document.body.removeChild(frame);

          return ret;
        });
      })();

      /***/
    },
    function (module, exports) {
      (function () {
        api.register("CSS Env", async function () {
          var ret = 0;
          var frame;

          const prom = new Promise((resolve, reject) => {
            frame = document.createElement("iframe");

            frame.onload = function () {
              ret = frame.contentWindow.res;
              resolve(ret);
            };

            frame.onerror = function (error) {
              console.error("Iframe failed to load:", error);
              reject(new Error("Iframe failed to load"));
            };

            frame.src = "/browser/static/env.html";
            frame.style.visibility = "hidden";

            document.body.appendChild(frame);
          });

          ret = await prom;
          document.body.removeChild(frame);
          // console.log("Result from env --> ", ret);

          return ret;
        });
      })();

      /* **/
    },
    function (module, exports) {
      (function () {
        api.register("audio test", async function () {
          var ret = {};

          //   function logResults(result, techniqueName) {
          //     console.log(`Results for ${techniqueName}:`, result);
          // }

          async function runAllFingerprintTests() {
            // Object to store all results
            const ret = {};

            try {
              // console.log("Starting audio fingerprint tests...");

              // Test Audio Context Properties
              ret.audioContextProps = await getAudioContextProperties();
              // console.log("Audio Context Properties completed.");

              // Test Dynamic Compressor Fingerprint
              ret.dynamicCompressor = await getDynamicCompressorFingerprint();
              // console.log("Dynamic Compressor Fingerprint completed.");

              // Test Oscillator Node Fingerprint
              ret.oscillatorNode = await getOscillatorNodeFingerprint();
              // console.log("Oscillator Node Fingerprint completed.");

              // Test Hybrid Fingerprint with Audio Context
              ret.hybridFingerprint = await getHybridFingerprintWithAudioCtx();
              // console.log("Hybrid Fingerprint with Audio Context completed.");

              // Test Custom Signal Hybrid Fingerprint
              ret.customSignalHybrid =
                await getCustomSignalHybridFingerprintAudioCtx();
              // console.log("Custom Signal Hybrid Fingerprint completed.");

              // Test Audio Source Hybrid Fingerprint
              ret.audioSourceHybrid =
                await getAudioSourceHybridFingerprintAudioCtx();
              // console.log("Audio Source Hybrid Fingerprint completed.");

              // Test Channel Merge Hybrid Fingerprint
              ret.channelMergeHybrid =
                await getChannelMergeHybridFingerprintAudioCtx();
              // console.log("Channel Merge Hybrid Fingerprint completed.");

              // Test Amplitude Modulation Hybrid Fingerprint
              ret.amplitudeModulationHybrid =
                await getAmplitudeModulationHybridFingerprintAudioCtx();
              // console.log("Amplitude Modulation Hybrid Fingerprint completed.");

              // Test Frequency Modulation Hybrid Fingerprint
              ret.frequencyModulationHybrid =
                await getFrequencyModulationHybridFingerprintAudioCtx();
              // console.log("Frequency Modulation Hybrid Fingerprint completed.");

              // Test MathJS Fingerprint
              ret.mathJSFingerprint = await getMathJS_FP();
              // console.log("MathJS Fingerprint completed.");

              // console.log("All audio fingerprint tests completed.");
            } catch (error) {
              console.error("Error during fingerprint tests:", error);
            }
            // finally {
            //   // Log the final results object to the console
            //   console.log("Final Results:", ret);
            // }
            return ret;
          }

          ret = await runAllFingerprintTests();

          // console.log("before return audio test --> ", ret);

          return ret;
        });
      })();

      /* **/
    },

    // function (module, exports) {
    //   (function () {
    //     api.register("CSS Extentions Detection", async function () {
    //       var ret = 0;
    //       var frame;

    //       const prom = new Promise((resolve, reject) => {
    //         frame = document.createElement("iframe");

    //         frame.onload = function () {
    //           ret = frame.contentWindow.extensionDetectionResults;
    //           resolve(ret);
    //         };

    //         frame.onerror = function (error) {
    //           console.error("Iframe failed to load:", error);
    //           reject(new Error("Iframe failed to load"));
    //         };

    //         frame.src = "/demo.html";
    //         frame.style.visibility = "hidden";

    //         document.body.appendChild(frame);
    //       });

    //       ret = await prom;
    //       document.body.removeChild(frame);
    //       console.log("Result from env --> ", ret);

    //       return ret;
    //     });
    //   })();

    //   /* **/
    // },

    /******/
  ]
);
