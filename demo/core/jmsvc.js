/**
 * @author Salvatore Mariniello
 * 
 *	The contents of this file are subject to the Mozilla Public License
 *	Version 1.1 (the "License"); you may not use this file except in
 *	compliance with the License. You may obtain a copy of the License at
 *	http://www.mozilla.org/MPL/
 *	Software distributed under the License is distributed on an "AS IS"
 *	basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 *	License for the specific language governing rights and limitations
 *	under the License.
 *	The Original Code is javascript.
 *	The Initial Developer of the Original Code is Salvatore Mariniello.
 *	Portions created by Salvatore Mariniello are Copyright (C) 2010.
 *	All Rights Reserved.
 *       https://github.com/mssalvo/jMsvc
 */


var jMsvc = {
    author: {name: "Salvatore Mariniello", contact: "salvo.mariniello@gmail.com", url: "https://github.com/mssalvo/jMsvc"},
    model: function () {
    },
    view: function () {
        this.view = {}
    },
    controller: function () {
    },
    html: function () {
    },
    trim: function (a) {
        return a.replace(/^\s+|\s+$/gm, '');
    },
    expControll: new RegExp(/:\ *(\w+)\s*\@(:\1@|)/),
    expEvent: new RegExp(/^([a-z \ *]|:\1:)+/),
    expAction: new RegExp(/@\ *(\w+)\s*\/?(@.*\1.|)/),
    defaultUrl: "empty",
    defaultCssPreload: '.jms-page-loader',
    root: [],
    _: jQuery,
    fnLoad: {isCustom: false, start: function () {
            jMsvc._(jMsvc.defaultCssPreload).fadeIn()
        }, end: function () {
            jMsvc._(jMsvc.defaultCssPreload).fadeOut()
        }},
    attrReq: [],
    attrSes: [],
    ishash: 0,
    forEachs: [],
    jmsClick: [],
    jmsController: [],
    defaultPreload: "<div class=\"jms-page-loader palette-Teal bg\"><div class=\"preloader pl-xl pls-white\"><svg class=\"pl-circular\" viewBox=\"25 25 50 50\"><circle class=\"plc-path\" cx=\"50\" cy=\"50\" r=\"20\"/></svg></div></div>",
    templates: {},
    configHash: function (t) {
        if (t) {
            if ("onhashchange" in window) {
                jMsvc._(window).bind("hashchange", function (e) {
                    jMsvc.call(jMsvc.queryAction())
                });
            } else {
                _hashValue = window.location.hash;
                setInterval(function () {
                    if (_hashValue != window.location.hash) {
                        _hashValue = window.location.hash;
                        jMsvc.call(jMsvc.queryAction())
                    }
                }, 200);
            }
        }
        return this.ishash = t, this
    },
    defaultAction: function (t) {
        return this.defaultUrl = t, this
    },
    getTemplate: function (k) {
        return this.templates[k];
    },
    setTemplate: function (k, v) {
        this.templates[k] = v;
    },
    getForEachs: function () {
        return this.forEachs;
    },
    setForEachs: function (k, v) {
        this.forEachs[k] = v;
    },
    configRoots: function (t) {
        return this.isObject(t) && (this.isUndefined(t.action) && (t.action = this.defaultUrl), this.isUndefined(t.url) && (t.url = this.defaultUrl), this.root[t.url] = t.action), this
    },
    configPreload: function (t) {
        return this.isObject(t) && (this.isUndefined(t.start) && (t.start = function () {}), this.isUndefined(t.end) && (t.end = function () {}), this.fnLoad = t), jMsvc.isPreCustom(), this
    },

    getApplication: function () {
    },
    getSession: function () {
    },
    getRequest: function () {
    },
    getRoot: function (t) {
        return this.isUndefined(t) ? this.defaultUrl : this.isUndefined(this.root[t]) && !this.isUndefined(t) ? this.isFunction(controller[t]) ? t : this.defaultUrl : this.isUndefined(this.root[t]) ? this.defaultUrl : this.root[t]
    },
    httpRequest: function (o) {
        this.async = true;
        this.type = "GET";
        this.dataType = "json";
        this.url = o || null;
        this.data = null;
        this.statusCode = null;
        this.timeout = null;
        this.xhrFields = null;
        this.beforeSend = null;
        this.cache = null;
        this.contentType = null;
        this.context = null;
        this.crossDomain = null;
        this.dataFilter = null;
        this.processData = null;
        this.scriptCharset = null;
        this.xr = null;
        this.isflush = null;
    },
    setLocation: function (l) {
        oPageInfo = {
            title: null,
            action: this.getRoot(l),
            url: this.ishash ? ('#' + this.getRoot(l)) : ('?' + this.getRoot(l))
        };
        try {
            history.pushState ? history.pushState(oPageInfo, oPageInfo.title, oPageInfo.url) : location.hash = '#' + this.getRoot(l);
            return false;
        } catch (e) {
        }
        location.hash = '#' + this.getRoot(l);
    },
    isPreCustom: function () {
        (function (__) {
            if (jMsvc.fnLoad.isCustom)
                __(jMsvc.defaultCssPreload).remove();
        })(jMsvc._)
    }
},
        act = function () {
        },
        model = jMsvc.model.prototype,
        view = jMsvc.view.prototype,
        controller = jMsvc.controller.prototype,
        html = jMsvc.html.prototype,
        context = act.prototype,
        request = jMsvc.getRequest.prototype,
        session = jMsvc.getSession.prototype,
        application = jMsvc.getApplication.prototype,
        http = jMsvc.httpRequest.prototype;

/*
 * http.get (default: dataType = 'json')
 * Type: String
 * @returns {httpRequest}
 */
http.get = function (url) {
    return new jMsvc.httpRequest(url);
},
        /*
         * Type: String
         * @returns {httpRequest}
         */
        http.setUrl = function (url) {
            this.url = url;
            return this;
        },
        /*
         * Type: Boolean
         */
        http.setAsync = function (a) {
            this.async = a;
            return this;
        },
        /* type (default: 'GET')
         * Type: String   
         * @returns {httpRequest}
         */
        http.setType = function (a) {
            this.type = a;
            return this;
        },
        /*
         * dataType (default: Intelligent Guess (xml, json, jsonp, script, or html))
         * Type: String
         * @returns {httpRequest}
         */
        http.setDataType = function (a) {
            this.dataType = a;
            return this;
        },
        /* 
         * Type: PlainObject or String or Array
         * @param {type} a
         * @returns {httpRequest}
         */
        http.setData = function (a) {
            this.data = a;
            return this;
        },
        /* 
         * Type: Number
         * @returns {httpRequest}
         */
        http.setTimeout = function (a) {
            this.timeout = a;
            return this;
        },
        /* 
         * Type: PlainObject
         *   statusCode: {
         *  404: function() {
         *    alert( "page not found" );
         *  }
         * }
         * @returns {httpRequest}
         */
        http.setStatusCode = function (a) {
            this.statusCode = a;
            return this;
        },
        /* 
         * Type: PlainObject
         *  xhrFields: {
         *     withCredentials: true
         *  }
         * @returns {httpRequest}
         */
        http.setXhrFields = function (a) {
            this.xhrFields = a;
            return this;
        },
        /*
         * Type: Function( jqXHR jqXHR, PlainObject settings )
         * @param {type} a
         * @returns {httpRequest}
         */

        http.setBeforeSend = function (a) {
            this.beforeSend = a;
            return this;
        },
        /*
         * cache (default: true, false for dataType 'script' and 'jsonp')
         *  Type: Boolean
         * @param {type} a
         * @returns {httpRequest}
         */
        http.setCache = function (a) {
            this.cache = a;
            return this;
        },
        /* contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8')
         * Type: Boolean or String 
         * @returns {httpRequest}
         */
        http.setContentType = function (a) {
            this.contentType = a;
            return this;
        },
        /*
         * Type: PlainObject
         * context: document.body    
         * .success(function() {
         * $( this ).addClass( "done" ); }
         * @returns {httpRequest}
         */
        http.setContext = function (a) {
            this.context = a;
            return this;
        },
        /* 
         * Type: Boolean 
         * @returns {httpRequest}
         */
        http.setCrossDomain = function (a) {
            this.crossDomain = a;
            return this;
        },
        /*  
         * Type: Function( String data, String type ) => Anything 
         * @returns {httpRequest}
         */
        http.setDataFilter = function (a) {
            this.dataFilter = a;
            return this;
        },
        /*        
         * processData (default: true)
         * Type: Boolean
         * @returns {httpRequest}   
         */
        http.setProcessData = function (a) {
            this.processData = a;
            return this;
        },
        /* 
         * Type: String 
         * @returns {httpRequest}
         */
        http.setScriptCharset = function (a) {
            this.scriptCharset = a;
            return this;
        },
        http.setting = function () {
            var options = {};
            this.flush = false;
            this.url = [this.url, (this.dataType == "jsonp") ? this.url.indexOf("callback=") ? "" : this.url.indexOf("?") ? "&callback=?" : "?callback=?" : ""].join("");
            for (i in this) {
                if (this[i] != null && !(typeof this[i] == typeof Function)) {
                    options[i] = this[i];
                }
            }
            this.xr = jMsvc._.ajax(options)
            return this;
        },
        http.success = function (fn) {
            this.setting();
            var _this__ = this;
            this.xr.done(function (data) {
                _this__.setData(data)
                if (typeof fn == "function")
                    fn(data)
            })
            return this;
        },
        http.ctx = function () {
            this.setting();
            var _this__ = this;
            this.xr.done(function (data) {
                _this__.setData(data)
            })
            return this;
        },
        http.offData = function (fn) {

            if (typeof fn == "function") {
                fn(this.data, context)
            }
            return this;
        },
        http.set = function (key, val) {
            if (!this.xr)
                this.ctx()
            if (typeof (key) == "function")
                return this.offData(key);
            else
                var vAry = val.split(".");
            switch (vAry.length) {
                case 1:
                    context[key] = this.data[vAry[0]]
                    break;
                case 2:
                    context[key] = this.data[vAry[0]][vAry[1]]
                    break;
                case 3:
                    context[key] = this.data[vAry[0]][vAry[1]][vAry[2]]
                    break;
                case 4:
                    context[key] = this.data[vAry[0]][vAry[1]][vAry[2]][vAry[3]]
                    break;
                case 5:
                    context[key] = this.data[vAry[0]][vAry[1]][vAry[2]][vAry[3]][vAry[4]]
                    break;
                case 6:
                    context[key] = this.data[vAry[0]][vAry[1]][vAry[2]][vAry[3]][vAry[4]][vAry[5]]
                    break;
                case 7:
                    context[key] = this.data[vAry[0]][vAry[1]][vAry[2]][vAry[3]][vAry[4]][vAry[5]][vAry[6]]
                    break;
            }

            return this;
        },
        http.error = function () {
            this.xr.fail(function (jqXHR, textStatus, errorThrown) {
                fn(jqXHR, textStatus, errorThrown)
            })
            return this;
        },
        http.complete = function () {
            this.xr.always(function (jqXHR, textStatus, errorThrown) {
                fn(jqXHR, textStatus, errorThrown)
            });
            return this;
        },
        model.empty = function () {
            return 1
        },
        view.empty = function () {
            return this.execute(function () {
                this.view = {}
            })
        },
        controller.empty = function () {
            return this.execute(function () {
                return 'empty'
            })
        },
        view.execute = function (t) {
            // this.view = {};
            return t.apply(view, [context, request, session, application]);//, this.view;
        },
        view._ = jMsvc._,
        controller.execute = function (t) {
            return new Promise(function (resolve, reject) {
                resolve(t.apply(controller, [context, request, session, application, view, model]))
            })
        },
        controller.event = {}, controller.gets = jMsvc.prototype, controller._ = jMsvc._, request.set = function (t, i) {
    jMsvc.attrReq[t] = i;
    return this;
},
        /* 
         * get (default: dataType = 'jsonp')
         * @param {String} url 
         * @returns {httpRequest}
         */
        view.get = function (url) {
            return new jMsvc.httpRequest(url)
        },
        /* 
         * get (default: dataType = 'jsonp')
         * @param {String} url 
         * @returns {httpRequest}
         */
        controller.get = function (url) {

            return new jMsvc.httpRequest(url)
        },
        /* 
         * getJson (default: dataType = 'jsonp')
         * @param {String} url 
         * @returns {httpRequest}
         */
        controller.getJSONP = function (url) {
            return new jMsvc.httpRequest(url).setDataType("jsonp");
        },
        /* 
         * getHtml (default: dataType = 'html')
         * @param {String} url 
         * @returns {httpRequest}
         */
        controller.getHTML = function (url) {
            return new jMsvc.httpRequest(url).setDataType("html");
        },
        /* 
         * request.get
         * @param {String} t 
         * @returns {String}
         */
        request.get = function (t) {
            return jMsvc.attrReq[t] || jMsvc.queryParameter(t)
        }, session.setAttribute = function (t, i) {
    return this.set(t, i)
}, session.getAttribute = function (t) {
    return this.get(t) || ""
}, application.setAttribute = function (t, i) {
    return this.set(t, i)
}, application.getAttribute = function (t) {
    return this.get(t) || ""
}, application.baseApplicationHistory = {}, application.getApplicationHistory = function () {
    return "localStorage" in window && !window.localStorage == undefined ? String(window.localStorage.getItem("application_")).length > 5 ? window.eval("(" + window.localStorage.getItem("application_") + ")") : {} : String(window.name).length > 5 ? window.eval("(" + window.name + ")") : {}
}, application.setApplicationHistory = function () {
    var t = JSON.stringify(this.baseApplicationHistory, "");
    if ("localStorage" in window && !window.localStorage == undefined)
        window.localStorage.setItem("application_", t || "")
    else
        window.name = t || ""

}, application.set = function (t, i) {
    this.baseApplicationHistory = this.getApplicationHistory();
    this.baseApplicationHistory[t] = i;
    this.setApplicationHistory();
    return this;
}, application.get = function (t) {
    return this.baseApplicationHistory = this.getApplicationHistory(), jMsvc.isUndefined(this.baseApplicationHistory[t]) ? "" : this.baseApplicationHistory[t]
}, application.clear = function () {
    this.baseApplicationHistory = {};
    this.setApplicationHistory()
}, session.baseSessionHistory = {}, session.getSessionHistory = function () {
    if ("sessionStorage" in window && !window.sessionStorage == undefined && String(window.sessionStorage.getItem("session_")).length > 5) {
        return window.eval("(" + window.sessionStorage.getItem("session_") + ")")
    } else if (String(window.name).length > 5) {
        return window.eval("(" + window.name + ")")
    } else {
        return {}
    }
}, session.setSessionHistory = function () {
    var t = JSON.stringify(this.baseSessionHistory, "");
    if ("sessionStorage" in window && !window.sessionStorage == undefined)
        window.sessionStorage.setItem("session_", t || "")
    else
        window.name = t || ""
}, session.set = function (t, i) {
    this.baseSessionHistory = this.getSessionHistory();
    this.baseSessionHistory[t] = i;
    this.setSessionHistory();
    return this;
}, session.get = function (t) {
    return this.baseSessionHistory = this.getSessionHistory(), jMsvc.isUndefined(this.baseSessionHistory[t]) ? "" : this.baseSessionHistory[t]
}, session.clear = function () {
    this.baseSessionHistory = {};
    this.setSessionHistory();
}, jMsvc.queryParameter = function (t) {
    for (var i = unescape(window.location.search.substring(1)), s = i.split("&"), e = 0; e < s.length; e++)
        if (pos = s[e].indexOf("="), pos > 0 && t == s[e].substring(0, pos))
            return s[e].substring(pos + 1);
    return ""
},
        jMsvc.autoRequest = function (d) {
            var jmsReq = this.getJmsRequest();
            if (jmsReq != 'undefined')
                for (var a in jmsReq) {
                    for (var i = unescape(jmsReq[a]), s = i.split("&"), e = 0; e < s.length; e++)
                        if (pos = s[e].indexOf("="), pos > 0)
                            this.attrReq[s[e].substring(0, pos)] = s[e].substring(pos + 1)
                }

            return this
        },
        /* 
         * queryAction ()
         * @returns {String}
         */
        jMsvc.queryAction = function () {

            var t = this.ishash ? unescape(window.location.hash.substring(1)) : unescape(window.location.search.substring(1)),
                    i = 0;
            return t && (i = t.split("&")), i ? this.getRoot(i[0].split("=")[0]) : this.defaultUrl
        }, jMsvc.isFunction = function (t) {
    return typeof t == typeof Function
},
        jMsvc.isArrayNative = function (a) {
            return !!a && (typeof a == "object" || typeof a == "function") && "length" in a && !("setInterval" in a) && (Object.prototype.toString.call(a) === "[object Array]" || "callee" in a || "item" in a);
        },
        jMsvc.array = function (b) {
            if (!jMsvc.isArrayNative(b))
                return [b];
            if (b.item) {
                var a = b.length, c = new Array(a);
                while (a--)
                    c[a] = b[a];
                return c;
            }
            return Array.prototype.slice.call(b);
        },
        jMsvc.forEach = function (elements, fn) {
            return jMsvc.array(elements).forEach(fn)
        },
        jMsvc.isUndefined = function (t) {
            return null == t ? !0 : t ? "undefined" == typeof t : !0
        }, jMsvc.isArray = function (t) {
    return !!t && t.constructor == Array
}, jMsvc.isObject = function (t) {
    return !!t && t.constructor === Object
}, jMsvc.isString = function (t) {
    return "string" == typeof t
}, jMsvc.wrapper = function (t, i) {
    for (var s in t)
        if (jMsvc.isUndefined(i[s]) && (i[s] = t[s]))
            return i
}, jMsvc.start = function (t, i, s) {
    var e = i || [],
            n = this;
    for (var o in n) {
        for (var r in t)
            if (o == t[r])
                if (jMsvc.isObject(n[o]))
                    l(e, n[o], s);
                else
                    for (var c in e)
                        if (o == e[c])
                            for (var a = 0; a < s.length; a++)
                                ;
        var l = function (t, i, s) {
            for (var e in i)
                if (jMsvc.isObject(i[e]))
                    arguments.callee(t, i[e], s);
                else
                    for (var n in t)
                        if (e == t[n])
                            for (var o = 0; o < s.length; o++)
                                ;
        }
    }
},
        /* 
         * searchHtmlController
         * @param {Object Html} o 
         * @returns {Array}
         */

        jMsvc.searchHtmlController = function (o) {
            var jmsController = [];
            jMsvc.forEach(o.querySelectorAll("[jms-controller]"), function (el, i) {
                jmsController[el.getAttribute("jms-controller") + "-" + i] = el;
            })
            return jmsController;
        },
        jMsvc.getJmsRequest = function () {
            var jmsRequest = [];
            jMsvc.forEach(document.querySelectorAll("[jms-request]"), function (el, i) {
                jmsRequest[i] = el.getAttribute("jms-request");
            })
            return jmsRequest;
        },
        jMsvc.searchJmsHidden = function (o) {
            jMsvc.forEach(o.querySelectorAll("[jms-hidden]"), function (el, i) {
                el.style.display = "none";
            })
            return this;
        },
        /* 
         * initHtmlController
         * @param {Object Html} o 
         *  execute action
         */
        jMsvc.initHtmlController = function (o) {
            var jmsController = this.searchHtmlController(o);
            for (k in jmsController) {
                ctr = k.split("-")[0];
                ctr = ctr.split(" ").join("");
                (function (ctr, $this) {
                    return $this.call(ctr)
                })(ctr, this);
            }

        },
        /* 
         * searchHtmlEvent
         * @param {Object Html} o 
         * @returns {Array}
         */

        jMsvc.searchHtmlEvent = function (o) {
            var jmsEvent = [];
            jMsvc.forEach(o.querySelectorAll("[jms-event]"), function (el, i) {
                jmsEvent[el.getAttribute("jms-event") + "-" + i] = el;
            })
            return jmsEvent;
        },
        jMsvc.searchIsFade = function (o) {

            jMsvc.forEach(document.querySelectorAll("[jms-fade]"), function (el, i) {
                jMsvc.isFadeOut(el);
                jMsvc.isFadeIn(el);
                el.removeAttribute('jms-fade');
            })

        },
        /* 
         * initHtmlEvent
         * @param {Object Html} o 
         * initializes event
         */

        jMsvc.initHtmlEvent = function (o) {
            var jmsEvent = this.searchHtmlEvent(o);
            // jms-event="click blur:M@home";
            // jms-event="click blur:V@home";
            // jms-event="click blur:C@home";
            // jms-event="click blur:MVC@home";
            for (k in jmsEvent) {
                par = k.split("-")[0];

                evt = jMsvc.trim(jMsvc.expEvent.exec(par)[0]);
                ctr = jMsvc.expControll.exec(par)[1];
                action = jMsvc.expAction.exec(par)[1];
                types = ctr.split(" ").join("").toLowerCase();
                action = action.split(" ").join("");

                obj = jmsEvent[k];

                nEvt = evt.split(" ");
                obj.removeAttribute('jms-event')
                for (s in nEvt) {
                    (function (t, act) {
                        switch (t) {
                            case 'm':
                                jMsvc.bind(obj, nEvt[s], model[(function (a) {
                                    return  a
                                })(act)], obj);
                                break;
                            case 'v':
                                jMsvc.bind(obj, nEvt[s], view[(function (b) {
                                    return b
                                })(act)], view);
                                break;
                            case 'c':
                                jMsvc.bind(obj, nEvt[s], controller[(function (c) {
                                    return c
                                })(act)], controller);
                                break;
                            case 'mvc':
                                jMsvc.bind(obj, nEvt[s], function () {
                                    return jMsvc.call((function (d) {
                                        return   jMsvc.setLocation(d), d
                                    })(act))
                                }, controller);
                                break;
                        }
                    })(types, action)
                }

            }
        },
        jMsvc.iterator = function (arCall) {
            var prepare = function (index) {
                var f = function () {
                    if (arCall.length) {
                        arCall[index].apply(controller, arguments);
                    }
                    return f.next();
                };
                f.next = function () {
                    return (index < arCall.length - 1) ? prepare(index + 1) : null;
                };
                return f;
            };
            return prepare(0);
        },
        jMsvc.event = function (o, e, f, b) {
            if (o.attachEvent) {
                o.attachEvent("on" + e, f)
            } else if (o.addEventListener) {
                o.addEventListener(e, f, b)
            } else {
                o["on" + e] = f
            }
            return this
        },
        jMsvc.bindPro = function (f, o) {
            if (f.bind === Function.prototype.bind && Function.prototype.bind)
                return Function.prototype.bind.apply(f, Array.prototype.slice.call(arguments, 1));

            var n = Array.prototype.slice.call(arguments, 2);

            return function () {
                return f.apply(o, n.concat(Array.prototype.slice.call(arguments)))
            }
        },
        jMsvc.bind = function (o, e, f, a) {
            var n = (new String(e)).split(" ");
            for (var r = 0; r < n.length; r++) {
                this.event(o, n[r], this.bindPro(f, a), true)
            }
            return this
        }
,
        jMsvc.include = function () {

            return this.controller.prototype[jMsvc.queryAction()].apply(controller, [jMsvc])
                    .then(function (action) {
                        return jMsvc.view.prototype[action].apply(view, [html])
                    }).then(function (b) {
                return jMsvc.isView(b).openView(b);
            }).catch(function (err) {
                console.log(err);
            });

        },
        jMsvc.call = function (n) {

            jMsvc.autoRequest(n);

            jMsvc.fnLoad.start();

            return this.controller.prototype[jMsvc.getRoot(n)].apply(controller, [jMsvc])
                    .then(function (action) {
                        return jMsvc.view.prototype[action].apply(view, [html])
                    }).then(function (b) {
                return jMsvc.isView(b).openView(b);
            }).catch(function (err) {
                console.log(err);
            });

        },
        jMsvc.openView = function (o) {

            if (this.isObject(o)) {
                for (j in o) {
                    (function (j, o, $this) {
                        if (jMsvc.isObject(o[j])) {
                            for (k in o[j]) {
                                switch (k) {
                                    case 'url':
                                        $this._($this.getTemplate(j)).load(o[j][k], function (d) {
                                            jMsvc.searchView(jMsvc.getTemplate(j), o);
                                            jMsvc.isforEach(jMsvc.getTemplate(j));
                                            jMsvc.writeProperty(jMsvc.getTemplate(j));
                                            jMsvc.initHtmlEvent(jMsvc.getTemplate(j))
                                            jMsvc.writeInclude(jMsvc.getTemplate(j));
                                            jMsvc.isFunction(o[j]['fn']) ? o[j]['fn'].apply(controller, [d]) : false
                                        });
                                        break;
                                    case 'template':
                                        exl = jMsvc._(o[j]['template']).get();
                                        $this._($this.getTemplate(j)).html(exl);
                                        jMsvc.searchView(jMsvc.getTemplate(j), o);
                                        jMsvc.isforEach(jMsvc.getTemplate(j));
                                        jMsvc.writeProperty(jMsvc.getTemplate(j));
                                        jMsvc.writeInclude(jMsvc.getTemplate(j));
                                        jMsvc.initHtmlEvent(jMsvc.getTemplate(j))
                                        jMsvc.isFunction(o[j]['fn']) ? o[j]['fn'].apply(controller, [exl]) : false
                                        break;

                                }
                            }

                        } else {
                            $this._($this.getTemplate(j)).load(o[j], function () {
                                jMsvc.searchView(jMsvc.getTemplate(j), o);
                                jMsvc.isforEach(jMsvc.getTemplate(j));
                                jMsvc.writeProperty(jMsvc.getTemplate(j));
                                jMsvc.initHtmlEvent(jMsvc.getTemplate(j));
                                jMsvc.writeInclude(jMsvc.getTemplate(j));
                            });
                        }
                    })(j, o, this)
                }

            }

            jMsvc.fnLoad.end();
            return true;
        },
        jMsvc.isView = function (o) {

            if (this.isObject(o)) {
                jMsvc.forEach(document.querySelectorAll('[jms-view]'), function (el, i) {
                    jMsvc.setTemplate(el.getAttribute('jms-view'), el);
                })

            }
            (function () {
                return  jMsvc.isforEach(document) && jMsvc.writeProperty(document) && jMsvc.writeInclude(document) && jMsvc.initHtmlEvent(document);
            })();
            return this;
        },
        /* 
         * searchView
         * @param {Object Html} ob 
         * @param {Object Html} vw 
         * @return {jMsvc}
         */

        jMsvc.searchView = function (ob, vw) {
            if (ob) {
                jMsvc.forEach(ob.querySelectorAll("[jms-view]"), function (el, i) {
                    for (j in vw) {
                        if (el.getAttribute("jms-view") == j) {
                            (function (j, vw, el) {
                                if (jMsvc.isObject(vw[j])) {
                                    for (k in o[j]) {
                                        switch (k) {
                                            case 'url':
                                                $this._($this.getTemplate(j)).load(vw[j][k], function (d) {
                                                    jMsvc.isforEach(el);
                                                    jMsvc.writeProperty(el);
                                                    jMsvc.writeInclude(el);
                                                    jMsvc.initHtmlEvent(el);
                                                    jMsvc.isFunction(vw[j]['fn']) ? vw[j]['fn'].apply(controller, [d]) : false
                                                });
                                                break;
                                            case 'template':
                                                exl = jMsvc._(vw[j]['template']).get();
                                                jMsvc._(el).html(exl);
                                                jMsvc.isforEach(el);
                                                jMsvc.writeProperty(el);
                                                jMsvc.writeInclude(el);
                                                jMsvc.initHtmlEvent(el)
                                                jMsvc.isFunction(vw[j]['fn']) ? vw[j]['fn'].apply(controller, [exl]) : false
                                                break;

                                        }

                                    }

                                } else {

                                    jMsvc._(el).load(vw[j], function () {
                                        jMsvc.isforEach(el)
                                        jMsvc.writeProperty(el);
                                        jMsvc.writeInclude(el);
                                        jMsvc.initHtmlEvent(el);
                                    });
                                }
                            })(j, vw, el)

                        }
                    }

                })
                jMsvc.searchIsFade();
            }
            return this;
        },
        jMsvc.isAttributeEvent = function (attrs) {
            for (a in attrs) {
                if (attrs[a] && /(jms-event|jms-event\-.*)+$/.test(attrs[a].name)) {
                    return 1;
                }
            }
            return 0;
        },
        jMsvc.isAttributeForProp = function (attrs) {
            for (a in attrs) {
                if (attrs[a] && /(for-property|for-property\-.*)+$/.test(attrs[a].name)) {
                    return 1;
                }
            }
            return 0;
        },
        jMsvc.isAttributeAttached = function (attrs) {
            for (a in attrs) {
                if (attrs[a] && /(jms-attached|jms-attached-.*)+$/.test(attrs[a].name)) {
                    return 1;
                }
            }
            return 0;
        },
        jMsvc.isAttributeProperty = function (attrs) {
            for (a in attrs) {
                if (attrs[a] && /(jms-property|jms-property-.*)+$/.test(attrs[a].name)) {
                    return 1;
                }
            }
            return 0;
        },
        jMsvc.isAttributeInclude = function (attrs) {
            for (a in attrs) {
                if (attrs[a] && /(jms-include|jms-include\-.*)+$/.test(attrs[a].name)) {
                    return 1;
                }
            }
            return 0;
        },
        jMsvc.isFadeOut = function (el) {
            for (a in el.attributes) {
                if (el.attributes[a] && /(jms-fade|jms-fade\-.*)+$/.test(el.attributes[a].name)) {
                    jMsvc._(el).animate({opacity: 0}, 240);
                }
            }
            return 0;
        },
        jMsvc.isFadeIn = function (el) {
            for (a in el.attributes) {
                if (el.attributes[a] && /(jms-fade|jms-fade\-.*)+$/.test(el.attributes[a].name)) {
                    jMsvc._(el).animate({opacity: 0.5}, 910);
                }
            }
            return 0;
        },
        jMsvc.isforEach = function (o) {
            var forEachs = [];
            //this.initHtmlEvent(o);
            this.initHtmlController(o);
            this.searchJmsHidden(o);
            jMsvc.forEach(o.querySelectorAll('[jms-foreach]'), function (el, i) {
                forEachs[el.getAttribute('jms-foreach')] = {attr: el.getAttribute('jms-foreach'), exp: [], obj: el};
                el.removeAttribute('jms-foreach');
                jMsvc.isforEach(el)
            })
            var fork = forEachs;
            for (x in fork) {

                for (t in context[fork[x]['attr']]) {
                    var clone = jMsvc._(fork[x]['obj']).clone().get(0);
                    var aryExp = jMsvc.array(clone.getElementsByTagName('*'));

                    jMsvc.searchJmsHidden(clone);
                    if (!aryExp.length) {
                        fork[x]['exp'] = [clone];
                    } else {
                        fork[x]['exp'] = aryExp;
                    }
                    for (y in fork[x]['exp']) {
                        var elemExp = fork[x]['exp'][y];
                        if (jMsvc.isAttributeForProp(elemExp.attributes)) { // if exp exp- attr
                            (function (a, b, c) {
                                jMsvc.updateObject(a, b, c);
                            })(fork[x]['exp'][y], fork[x]['attr'], t)
                        }//if  
                    }

                    jMsvc._(fork[x]['obj']).parent().append(clone);
                    jMsvc.initHtmlEvent(clone);
                    jMsvc.isforEachIn(clone, context[fork[x]['attr']], t)
                    jMsvc.removeProperty(clone, new RegExp(/(for-property|for-property\-.*)+$/));
                }
                jMsvc._(fork[x]['obj']).remove();
            }

            return true;
        },
        jMsvc.isforEachIn = function (o, ctx, ic) {
            var forEachs_ = [];
            //this.initHtmlEvent(o);
            this.initHtmlController(o);
            this.searchJmsHidden(o);
            jMsvc.forEach(o.querySelectorAll('[for-foreach]'), function (el, i) {
                forEachs_[el.getAttribute('for-foreach')] = {attr: el.getAttribute('for-foreach'), exp: [], obj: el};
                el.removeAttribute('for-foreach');
                jMsvc.isforEachIn(el)
            })
            var fork_ = forEachs_;
            for (x_ in fork_) {
                for (t_ in ctx[ic][fork_[x_]['attr']]) {
                    var clone_ = jMsvc._(fork_[x_]['obj']).clone().get(0);
                    var aryExp_ = jMsvc.array(clone_.getElementsByTagName('*'));

                    jMsvc.searchJmsHidden(clone_);
                    if (!aryExp_.length) {
                        fork_[x_]['exp'] = [clone_];
                    } else {
                        fork_[x_]['exp'] = aryExp_;
                    }
                    for (y_ in fork_[x_]['exp']) {
                        var elemExp = fork_[x_]['exp'][y_];
                        if (jMsvc.isAttributeForProp(elemExp.attributes)) { // if exp exp- attr
                            (function (a, b, ct, c) {
                                jMsvc.updateObjectIn(a, b, ct, c);
                            })(fork_[x_]['exp'][y_], fork_[x_]['attr'], ctx[ic]/*[fork[x]['attr']]*/, t_)
                        }//if  
                    }

                    jMsvc._(fork_[x_]['obj']).parent().append(clone_);
                    jMsvc.initHtmlEvent(clone_);
                }
                jMsvc._(fork_[x_]['obj']).remove();
            }

            return true;
        },
        jMsvc.writeInclude = function (o) {
            var forEachs = [];

            jMsvc.forEach(o.getElementsByTagName('*'), function (el, i) {
                if (jMsvc.isAttributeInclude(el.attributes)) {
                    forEachs['jms-include-' + i] = {obj: el};
                }
            })
            var fork = forEachs;
            for (x in fork) {
                (function (el) {

                    jMsvc._(el).load(el.getAttribute('jms-include') || el.getAttribute('jms-include-replace'), function () {
                        if (el.getAttribute('jms-include-replace')) {

                            jMsvc._(el).html(jMsvc._(el).html().replace(/</ig, '&lt;').replace(/>/ig, '&gt;').replace(/\ /ig, '&nbsp;').replace(/\n/ig, '<br>'));
                            el.removeAttribute('jms-include-replace');
                        } else {
                            jMsvc.isforEach(el);
                            jMsvc.writeProperty(el);
                            jMsvc.initHtmlEvent(el);
                            el.removeAttribute('jms-include');

                        }
                    });
                })(fork[x]['obj'])

            }

            return true;
        },
        jMsvc.isAttached = function (o) {
            var forEachs = [];

            jMsvc.forEach(o.getElementsByTagName('*'), function (el, i) {
                if (jMsvc.isAttributeAttached(el.attributes)) {
                    forEachs['jms-attached-' + i] = {obj: el};
                }
            })
            var fork = forEachs;
            for (x in fork) {
                (function (a) {
                    if (a['nodeType'] == 1) {
                        if (a['nodeName'] == 'INPUT') {
                            b = a.getAttribute('jms-attached').split('.')
                            if (b.length > 1) {
                                if (context[b[0]][b[1]])
                                    a.value = context[b[0]][b[1]];
                            } else if (b.length < 2) {
                                if (context[b[0]])
                                    a.value = context[b[0]];

                            }
                            jMsvc._(a).keyup(function () {
                                b = jMsvc._(this).attr('jms-attached').split('.')
                                if (b.length > 1)
                                    if (context[b[0]][b[1]]) {
                                        context[b[0]][b[1]] = jMsvc._(this).val() || "";
                                    } else if (b.length < 2) {
                                        if (context[b[0]]) {
                                            context[b[0]] = jMsvc._(this).val() || "";
                                        }
                                    }
                            })

                        }

                    }


                })(fork[x]['obj'])

            }

            return true;
        },
        jMsvc.writeProperty = function (o) {
            var forEachs = [];

            jMsvc.forEach(o.getElementsByTagName('*'), function (el, i) {
                if (jMsvc.isAttributeProperty(el.attributes)) {
                    forEachs['jms-property-' + i] = {obj: el};
                }
            })
            var fork = forEachs;
            for (x in fork) {
                (function (a) {
                    jMsvc.updateProperty(a);
                })(fork[x]['obj'])

            }

            return true;
        },
        jMsvc.removeProperty = function (ob, reg) {
            if (ob && ob.attributes) {
                var u = [];
                for (j = 0; j < ob.attributes.length; j++) {
                    (function (i, a) {
                        if (a.attributes[i] && reg.test(a.attributes[i].name)) {
                            u.push(a.attributes[i].name);

                        }
                    })(j, ob)

                }
                for (y = 0; y < u.length; y++) {
                    (function (i, a) {
                        a.removeAttribute(u[i]);
                    })(y, ob)

                }

            }
        },
        jMsvc.propert = function (prop) {
            p = prop.split(".");
            if (p.length) {
                return {key: p[0], val: p[1]}
            } else {
                return {key: p[0], val: p[0]}
            }
        },
        jMsvc.settingTag = function (m, e, o) {
            switch (m) {
                case 'html':
                    jMsvc._(e).html(o)
                    break;
                case 'after':
                    jMsvc._(e).after(/^<(\w+)\s*\/?>(?:.* <\/\1>|)/.test(o ? o : document.createTextNode(o)))
                    break;
                case 'before':
                    jMsvc._(e).before(/^<(\w+)\s*\/?>(?:.* <\/\1>|)/.test(o) ? o : document.createTextNode(o))
                    break;
                case 'append':
                    jMsvc._(e).append(o)
                    break;
                case 'text':
                    jMsvc._(e).text(o)
                    break;
                default :
                    jMsvc._(e).attr(m, o)
            }

        },
        jMsvc.settingTagOption = function (m, e, o) {

            switch (m) {
                case 'html':
                    jMsvc._(e).html(o)
                    break;
                case 'append':
                    jMsvc._(e).html(o)
                    break;
                case 'text':
                    jMsvc._(e).text(o)
                    break;
                default :
                    jMsvc._(e).attr(m, o)
            }


        },
        jMsvc.getObjVal = function (exps, e, a, b, n) {
            if (exps[e].split('.').length < 2) {
                return a[b][n]
            } else {
                return a[b][n][exps[e].split('.')[1]]
            }
        },
        jMsvc.updateObjectIn = function (elemExp, elementForEach, ctx, t) {
            if (elemExp) {
                for (att = 0; att < elemExp.attributes.length; att++) { //for attr
                    (function (att, elemExp, t) {
                        if (elemExp.attributes[att] && /(for-property|for-property\-.*)+$/.test(elemExp.attributes[att].name)) { //isExp
                            var matchAttr = elemExp.attributes[att].name.split('for-property-')
                            exps = elemExp.attributes[att].value.split(',');

                            if (exps) {//
                                for (e in exps) { // for method
                                    if (elemExp['nodeType'] == 1) {
                                        var propert = exps[e].split('.')[0];
                                        switch (propert) {

                                            case elementForEach:
                                                if (elemExp['nodeName'] == 'INPUT') {
                                                    if (matchAttr[1]) {
                                                        jMsvc._(elemExp).attr(matchAttr[1], jMsvc.getObjVal(exps, e, ctx, elementForEach, t))
                                                    } else {
                                                        elemExp['value'] = jMsvc.getObjVal(exps, e, ctx, elementForEach, t);
                                                    }
                                                } else if (elemExp['nodeName'] == 'OPTION') {
                                                    if (matchAttr[1]) {
                                                        jMsvc.settingTagOption(matchAttr[1], elemExp, jMsvc.getObjVal(exps, e, ctx, elementForEach, t));

                                                    } else {
                                                        jMsvc._(elemExp).html(jMsvc.getObjVal(exps, e, ctx, elementForEach, t))
                                                    }
                                                } else {
                                                    if (matchAttr[1]) {

                                                        jMsvc.settingTag(matchAttr[1], elemExp, jMsvc.getObjVal(exps, e, ctx, elementForEach, t));

                                                    } else {

                                                        jMsvc._(elemExp).append(jMsvc.getObjVal(exps, e, ctx, elementForEach, t))
                                                    }
                                                }
                                                break;

                                            default:
                                                if (exps[e].split('.').length < 2) {
                                                    if (elemExp['nodeName'] == 'INPUT') {
                                                        if (matchAttr[1] && matchAttr[1] == "value") {
                                                            elemExp[matchAttr[1]] = ctx[exps[e].split('.')[0]]
                                                        } else if (matchAttr[1]) {
                                                            jMsvc._(elemExp).attr(matchAttr[1], ctx[exps[e].split('.')[0]]);
                                                        } else {
                                                            elemExp['value'] = ctx[exps[e].split('.')[0]];
                                                        }
                                                    } else if (elemExp['nodeName'] == 'OPTION') {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTagOption(matchAttr[1], elemExp, ctx[exps[e].split('.')[0]]);

                                                        } else {
                                                            jMsvc._(elemExp).html(ctx[exps[e].split('.')[0]])
                                                        }
                                                    } else {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTag(matchAttr[1], elemExp, ctx[exps[e].split('.')[0]]);

                                                        } else {
                                                            jMsvc._(elemExp).append(ctx[exps[e].split('.')[0]])
                                                        }
                                                    }
                                                } else if (exps[e].split('.').length > 1) {

                                                    if (elemExp['nodeName'] == 'INPUT') {

                                                        if (matchAttr[1]) {
                                                            jMsvc._(elemExp).attr(matchAttr[1], ctx[exps[e].split('.')[0]][exps[e].split('.')[1]]);

                                                        } else {
                                                            elemExp['value'] = ctx[exps[e].split('.')[0]][exps[e].split('.')[1]];
                                                        }
                                                    } else if (elemExp['nodeName'] == 'OPTION') {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTagOption(matchAttr[1], elemExp, ctx[exps[e].split('.')[0]][exps[e].split('.')[1]]);


                                                        } else {
                                                            jMsvc._(elemExp).html(ctx[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                        }
                                                    } else {

                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTag(matchAttr[1], elemExp, ctx[exps[e].split('.')[0]][exps[e].split('.')[1]]);

                                                        } else {
                                                            jMsvc._(elemExp).append(ctx[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                        }
                                                    }

                                                }//

                                        }
                                    }
                                }// for method
                            }//
                        } //isExp

                    })(att, elemExp, t)
                }//for attr

                jMsvc.removeProperty(elemExp, new RegExp(/(for-property|for-property\-.*)+$/));
            }
        },
        jMsvc.updateObject = function (elemExp, elementForEach, t) {
            if (elemExp) {
                for (att = 0; att < elemExp.attributes.length; att++) { //for attr
                    (function (att, elemExp, t) {
                        if (elemExp.attributes[att] && /(for-property|for-property\-.*)+$/.test(elemExp.attributes[att].name)) { //isExp
                            var matchAttr = elemExp.attributes[att].name.split('for-property-')
                            exps = elemExp.attributes[att].value.split(',');

                            if (exps) {//
                                for (e in exps) { // for method
                                    if (elemExp['nodeType'] == 1) {
                                        var propert = exps[e].split('.')[0];
                                        switch (propert) {

                                            case elementForEach:
                                                if (elemExp['nodeName'] == 'INPUT') {
                                                    if (matchAttr[1]) {
                                                        jMsvc._(elemExp).attr(matchAttr[1], jMsvc.getObjVal(exps, e, context, elementForEach, t))
                                                    } else {
                                                        elemExp['value'] = jMsvc.getObjVal(exps, e, context, elementForEach, t);
                                                    }
                                                } else if (elemExp['nodeName'] == 'OPTION') {
                                                    if (matchAttr[1]) {
                                                        jMsvc.settingTagOption(matchAttr[1], elemExp, jMsvc.getObjVal(exps, e, context, elementForEach, t));

                                                    } else {
                                                        jMsvc._(elemExp).html(jMsvc.getObjVal(exps, e, context, elementForEach, t))
                                                    }
                                                } else {
                                                    if (matchAttr[1]) {

                                                        jMsvc.settingTag(matchAttr[1], elemExp, jMsvc.getObjVal(exps, e, context, elementForEach, t));

                                                    } else {

                                                        jMsvc._(elemExp).append(jMsvc.getObjVal(exps, e, context, elementForEach, t))
                                                    }
                                                }
                                                break;

                                            default:
                                                if (exps[e].split('.').length < 2) {
                                                    if (elemExp['nodeName'] == 'INPUT') {
                                                        if (matchAttr[1] && matchAttr[1] == "value") {
                                                            elemExp[matchAttr[1]] = context[exps[e].split('.')[0]]
                                                        } else if (matchAttr[1]) {
                                                            jMsvc._(elemExp).attr(matchAttr[1], context[exps[e].split('.')[0]]);
                                                        } else {
                                                            elemExp['value'] = context[exps[e].split('.')[0]];
                                                        }
                                                    } else if (elemExp['nodeName'] == 'OPTION') {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTagOption(matchAttr[1], elemExp, context[exps[e].split('.')[0]]);

                                                        } else {
                                                            jMsvc._(elemExp).html(context[exps[e].split('.')[0]])
                                                        }
                                                    } else {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTag(matchAttr[1], elemExp, context[exps[e].split('.')[0]]);

                                                        } else {
                                                            jMsvc._(elemExp).append(context[exps[e].split('.')[0]])
                                                        }
                                                    }
                                                } else if (exps[e].split('.').length > 1) {

                                                    if (elemExp['nodeName'] == 'INPUT') {

                                                        if (matchAttr[1]) {
                                                            jMsvc._(elemExp).attr(matchAttr[1], context[exps[e].split('.')[0]][exps[e].split('.')[1]]);

                                                        } else {
                                                            elemExp['value'] = context[exps[e].split('.')[0]][exps[e].split('.')[1]];
                                                        }
                                                    } else if (elemExp['nodeName'] == 'OPTION') {
                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTagOption(matchAttr[1], elemExp, context[exps[e].split('.')[0]][exps[e].split('.')[1]]);


                                                        } else {
                                                            jMsvc._(elemExp).html(context[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                        }
                                                    } else {

                                                        if (matchAttr[1]) {

                                                            jMsvc.settingTag(matchAttr[1], elemExp, context[exps[e].split('.')[0]][exps[e].split('.')[1]]);

                                                        } else if (!jMsvc.isUndefined(context[exps[e].split('.')[0]])) {
                                                            jMsvc._(elemExp).append(context[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                        }
                                                    }

                                                }//

                                        }
                                    }
                                }// for method
                            }//
                        } //isExp

                    })(att, elemExp, t)
                }//for attr

                // jMsvc.removeProperty(elemExp, new RegExp(/(for-property|for-property\-.*)+$/));
            }
        },
        jMsvc.updateProperty = function (elemExp) {

            if (elemExp) {
                for (att = 0; att < elemExp.attributes.length; att++) {
                    (function (elemExp, attribute) {
                        if (attribute && /(jms-property|jms-property-.*)+$/.test(attribute.name)) { //isExp

                            var matchAttr = attribute.name.split('jms-property-')


                            var exps = attribute.value.split(',');

                            if (exps) {//
                                for (var e in exps) { // for method
                                    if (elemExp['nodeType'] == 1) {

                                        if ((exps[e].split('.')).length < 2) {
                                            if (elemExp['nodeName'] == 'INPUT') {
                                                if (matchAttr[1]) {
                                                    jMsvc._(elemExp).attr(matchAttr[1], context[exps[e].split('.')[0]]);
                                                } else {
                                                    elemExp['value'] = context[exps[e].split('.')[0]];
                                                }
                                            } else if (elemExp['nodeName'] == 'OPTION') {
                                                if (matchAttr[1]) {
                                                    jMsvc.settingTagOption(matchAttr[1], elemExp, context[exps[e].split('.')[0]]);


                                                } else {
                                                    jMsvc._(elemExp).html(context[exps[e].split('.')[0]])
                                                }
                                            } else {
                                                if (matchAttr[1]) {
                                                    jMsvc.settingTag(matchAttr[1], elemExp, context[exps[e].split('.')[0]]);

                                                } else {
                                                    jMsvc._(elemExp).append(context[exps[e].split('.')[0]])
                                                }
                                            }
                                        } else if ((exps[e].split('.')).length > 1) {

                                            if (elemExp['nodeName'].toUpperCase() == 'INPUT') {
                                                if (matchAttr[1]) {
                                                    jMsvc._(elemExp).attr(matchAttr[1], context[exps[e].split('.')[0]][exps[e].split('.')[1]]);
                                                } else {
                                                    elemExp['value'] = context[exps[e].split('.')[0]][exps[e].split('.')[1]];
                                                }
                                            } else if (elemExp['nodeName'].toUpperCase() == 'OPTION') {
                                                if (matchAttr[1]) {

                                                    jMsvc.settingTagOption(matchAttr[1], elemExp, context[exps[e].split('.')[0]][exps[e].split('.')[1]]);

                                                } else {

                                                    jMsvc._(elemExp).html(context[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                }
                                            } else {
                                                if (matchAttr[1]) {
                                                    jMsvc.settingTag(matchAttr[1], elemExp, context[exps[e].split('.')[0]][exps[e].split('.')[1]]);


                                                } else {

                                                    jMsvc._(elemExp).append(context[exps[e].split('.')[0]][exps[e].split('.')[1]])
                                                }
                                            }
                                        }// f    

                                    }
                                }// for method
                            }//
                        } //isExp

                    })(elemExp, elemExp.attributes[att])
                }//for attr
                jMsvc.removeProperty(elemExp, new RegExp(/(jms-property|jms-property-.*)+$/));
            }
        }, _hashValue = '';

if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach = function (action, that) {
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}

(function (__) {
    if (!jMsvc.fnLoad.isCustom)
        __(document.body).append(jMsvc.defaultPreload);
    __(document).ready(function () {
        jMsvc.include();
    })
    window.onpopstate = function (event) {
        jMsvc.call(event.state.action);
    };
})(jMsvc._)
