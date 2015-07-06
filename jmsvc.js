var jMsvc = {
        author:{name:"Salvatore Mariniello",contact:"salvo.mariniello@gmail.com"},
        model: function() {},
        view: function() {},
        controller: function() {},
        html: function() {},
        defaultUrl: "index",
        root: [],
        http: jQuery.ajax,
        $: jQuery,
        attrReq: [],
        attrSes: [],
        ishash:0,
        templates:{},
        configHash:function(t){ return this.ishash = t, this},
        defaultAction: function(t) {
            return this.defaultUrl = t, this
        },
        getTemplate: function(k) {
            return this.templates[k];
        },
        setTemplate: function(k,v) {
         this.templates[k]=v;
        },
        configRoots: function(t) {
            return this.isObject(t) && (this.isUndefined(t.action) && (t.action = this.defaultUrl), this.isUndefined(t.url) && (t.url = this.defaultUrl), this.root[t.url] = t.action), this
        },
        getApplication: function() {},
        getSession: function() {},
        getRequest: function() {},
        getRoot: function(t) {
            return this.isUndefined(t) ? this.defaultUrl : this.isUndefined(this.root[t]) && !this.isUndefined(t) ? this.isFunction(controller[t]) ? t : this.defaultUrl : this.isUndefined(this.root[t]) ? this.defaultUrl : this.root[t]
        }
    },
    act = function() {},
    model = jMsvc.model.prototype,
    view = jMsvc.view.prototype,
    controller = jMsvc.controller.prototype,
    html=jMsvc.html.prototype,
    action = act.prototype,
    request = jMsvc.getRequest.prototype,
    session = jMsvc.getSession.prototype,
    application = jMsvc.getApplication.prototype;
view.execute = function(t) {
    return t.apply(view, [request, session, application])
}, view.$ = jMsvc.$, view.http = jMsvc.http, controller.execute = function(t) {
    return t.apply(controller, [model])
}, controller.event = {}, controller.http = jMsvc.http, controller.get = jMsvc.prototype, controller.$ = jMsvc.$, request.set = function(t, i) {
    jMsvc.attrReq[t] = i;
    return this;
}, request.get = function(t) {
    return jMsvc.attrReq[t] || jMsvc.queryParameter(t)
}, session.setAttribute = function(t, i) {
    return this.set(t, i)
}, session.getAttribute = function(t) {
    return this.get(t) || ""
}, application.setAttribute = function(t, i) {
    return this.set(t, i)
}, application.getAttribute = function(t) {
    return this.get(t) || ""
}, application.baseApplicationHistory = {}, application.getApplicationHistory = function() {
    return "localStorage" in window ? String(localStorage.getItem("application_")).length > 5 ? window.eval("(" + localStorage.getItem("application_") + ")") : {} : String(window.name).length > 5 ? window.eval("(" + window.name + ")") : {}
}, application.setApplicationHistory = function() {
    var t = JSON.stringify(this.baseApplicationHistory, "");
    if("localStorage" in window)
    localStorage.setItem("application_", t || "") 
    else
    window.name = t || ""
    
}, application.set = function(t, i) {
    this.baseApplicationHistory = this.getApplicationHistory(); 
    this.baseApplicationHistory[t] = i;
    this.setApplicationHistory();
    return this;
}, application.get = function(t) {
    return this.baseApplicationHistory = this.getApplicationHistory(), jMsvc.isUndefined(this.baseApplicationHistory[t]) ? "" : this.baseApplicationHistory[t]
}, application.clear = function() {
    this.baseApplicationHistory = {};
    this.setApplicationHistory()
}, session.baseSessionHistory = {}, session.getSessionHistory = function() {
    return "sessionStorage" in window ? String(sessionStorage.getItem("session_")).length > 5 ? window.eval("(" + sessionStorage.getItem("session_") + ")") : {} : String(window.name).length > 5 ? window.eval("(" + window.name + ")") : {}
}, session.setSessionHistory = function() {
    var t = JSON.stringify(this.baseSessionHistory, "");
    if("sessionStorage" in window)
    sessionStorage.setItem("session_", t || "") 
    else window.name = t || ""
}, session.set = function(t, i) {
    this.baseSessionHistory = this.getSessionHistory(); 
    this.baseSessionHistory[t] = i; 
    this.setSessionHistory();
    return this;
}, session.get = function(t) {
    return this.baseSessionHistory = this.getSessionHistory(), jMsvc.isUndefined(this.baseSessionHistory[t]) ? "" : this.baseSessionHistory[t]
}, session.clear = function() {
    this.baseSessionHistory = {}; 
    this.setSessionHistory();
}, jMsvc.queryParameter = function(t) {
    for (var i = unescape(window.location.search.substring(1)), s = i.split("&"), e = 0; e < s.length; e++)
        if (pos = s[e].indexOf("="), pos > 0 && t == s[e].substring(0, pos)) return s[e].substring(pos + 1);
    return ""
}, jMsvc.queryAction = function() {
    
    var t = this.ishash ? unescape(window.location.hash.substring(1)) : unescape(window.location.search.substring(1)),
        i = 0;
    return t && (i = t.split("&")), i ? this.getRoot(i[0].split("=")[0]) : this.defaultUrl
}, jMsvc.isFunction = function(t) {
    return typeof t == typeof Function
}, jMsvc.isUndefined = function(t) {
    return null == t ? !0 : t ? "undefined" == typeof t : !0
}, jMsvc.isArray = function(t) {
    return !!t && t.constructor == Array
}, jMsvc.isObject = function(t) {
    return !!t && t.constructor === Object
}, jMsvc.isString = function(t) {
    return "string" == typeof t
}, jMsvc.wrapper = function(t, i) {
    for (var s in t) 
    if(jMsvc.isUndefined(i[s]) && (i[s] = t[s]))
    return i
}, jMsvc.start = function(t, i, s) {
    var e = i || [],
        n = this;
    for (var o in n) {
        for (var r in t)
            if (o == t[r])
                if (jMsvc.isObject(n[o])) l(e, n[o], s);
                else
                    for (var c in e)
                        if (o == e[c])
                            for (var a = 0; a < s.length; a++);
        var l = function(t, i, s) {
            for (var e in i)
                if (jMsvc.isObject(i[e])) arguments.callee(t, i[e], s);
                else
                    for (var n in t)
                        if (e == t[n])
                            for (var o = 0; o < s.length; o++);
        }
    }
}, 
jMsvc.sendService = function(t, i, s) {
    $.ajax({
        type: "POST",
        url: i,
        crossDomain: !0,
        data: s,
        success: function(i) {
            controller.event[t].success(i)
        },
        error: function(i, s, e) {
            controller.event[t].error(i, s, e)
        },
        dataType: "json"
    })
}, 
jMsvc.include = function() {
    var t= this.isFunction(this.controller.prototype[jMsvc.queryAction()]) ? this.view.prototype[this.controller.prototype[jMsvc.queryAction()].apply(controller, [jMsvc])].apply(view, [html]) : (function() { return !1 })()
    return this.isView(t).openView(t);
},  
jMsvc.call = function(n){
    var t= n ? this.isFunction(this.controller.prototype[jMsvc.getRoot(n)]) ? this.view.prototype[this.controller.prototype[jMsvc.getRoot(n)].apply(controller, [jMsvc])].apply(view, [html]) : (function() { return !1})() : (function() { return !1 })()
   return this.isView(t).openView(t);
},
jMsvc.openView=function(o){
    
    if(this.isObject(o)){        
        for(j in o){
  this.$(this.getTemplate(j)).load(o[j]);  
        }
    }
  return true;
},
jMsvc.isView=function(o){
   if(this.isObject(o)){
   Array.prototype.slice.call(document.querySelectorAll('[ms-view]')).forEach(function(el,i){  
   jMsvc.setTemplate(el.getAttribute('ms-view'),el);
 })
 }
 return this;
};
  
    var _hashValue = '';

    if ("onhashchange" in window){
        $(window).bind( "hashchange", function(e) {
          jMsvc.call(jMsvc.queryAction())
        });
    }
    else{
        _hashValue = window.location.hash;
        setInterval ( function(){
            if ( _hashValue != window.location.hash){
                _hashValue = window.location.hash;
               jMsvc.call(jMsvc.queryAction())
            }
        },500 );
    }
