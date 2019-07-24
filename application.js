//Application.....


jMsvc.configHash(0).defaultAction("index")
.configRoots({
  url: 'home', action: 'index'}
            )
.configRoots({
  url: 'chi Siamo', action: 'chiSiamo'}
            )
.configRoots({
  url: 'service', action: 'service'}
            )
.configRoots({
  url: 'contact', action: 'contact'}
            )
.configPreload({
  isCustom: false, start: function () {
    $('.jms-page-loader').fadeIn()
  }
  , end: function () {
    $('.jms-page-loader').fadeOut()
  }
}
              )
//
controller.index = function () {
  return this.execute(function () {
    this.get("./db/menu.json").success(
      function (data) {
        context.menu = data["menu"];
      }
    )
    this.get("./db/body.json").set("body","body.index")
//    this.get("./db/body.json").success(
//      function (data) {
//        context.body = data["body"]["index"];
//      }
//    )
    this.get("./db/footer.json").success(
      function (data) {
        context.footer = data["footer"];
      }
    )
    return "index";
  }
                     )
}
controller.chiSiamo = function () {
  return this.execute(function () {
    this.get("./db/menu.json").success(
      function (data) {
        context.menu = data["menu"];
      }
    )
//    this.get("http://localhost:7001/NewLegalArchives/atto/cerca.action?order=desc&limit=15&offset=0&_=1499161453718")
//    .success(
//      function (data) {
//        context.atti = data["rows"];
//      }
//    )
           // .set("atti","rows")
    
    //this.get("./db/body.json").set("body","body.chiSiamo")
    this.get("./db/body.json").set(
      function (data,ctx) {
        ctx.body = data["body"]["chiSiamo"];
      }
    )
    .set("bodyContact","body.contact")
    .set("bodyService","body.service")
    .set((data,ctx)=>{ ctx.body4=data["body"]["chiSiamo"]+" Salvo..." }) 
    
    
      this.get("./db/footer.json").success(
      function (data) {
        context.footer = data["footer"];
      }
    )
    return "chiSiamo";
  }
                     )
}
controller.contact = function () {
  return this.execute(function () {
    this.get("./db/menu.json").success(
      function (data) {
        context.menu = data["menu"];
      }
    )
    this.get("./db/body.json").set("body","body.contact")
//    this.get("./db/body.json").success(
//      function (data) {
//        context.body = data["body"]["contact"];
//      }
//    )
    this.get("./db/footer.json").success(
      function (data) {
        context.footer = data["footer"];
      }
    )
    return "contact";
  }
                     )
}
controller.service = function () {
  return this.execute(function () {
    this.get("./db/menu.json").success(
      function (data) {
        context.menu = data["menu"];
      }
    )
    this.get("./db/body.json").success(
      function (data) {
        context.body = data["body"]["service"];
      }
    )
    this.get("./db/footer.json").success(
      function (data) {
        context.footer = data["footer"];
      }
    )
    return "service";
  }
                     )
}


view.index = function () {
  return this.execute(function () {
    this.view = {
      menu: './html/menu.html', body: {
        url: './html/home.html', fn: function (h) {
          this.get("").success(function () {
          }
                              )
        }
      }
      , footer: './html/footer.html'};
    //include html/body.html in jms-view='body'
  }
                     )
}
view.index = function () {
  return this.execute(function () {
    return {
      menu:{
        template: '<button jms-foreach="menu"  for-property-jms-event="menu.event" for-property="menu.text"></button>'}
      ,
      body: {
        template: '<div jms-property="body"></div>', fn: function (h) {
        }
      }
      , 
      footer:{
        template:  '<div jms-property="footer.azienda"></div>'}
    };
    //include html/body.html in jms-view='body'
  }
                     )
}

view.chiSiamo = function () {
  return this.execute(function () {
    return  {
      menu:{
        template: '<ul><li jms-foreach="menu"><a for-property-href="menu.href"  for-property-jms-event="menu.event" for-property="menu.text"></a></li></ul>'}
      ,
      body: {
        template: '<div jms-property="body,bodyContact,bodyService,body4"><div jms-foreach="atti" for-property="atti.societa"></div></div>', 
        fn: function (h) {
        }
      }
      , 
      footer:{
        template:  '<div jms-property="footer.azienda"></div>'}
    };
    //include html/body.html in jms-view='body'
  }
                     )
}
view.service = function () {
  return this.execute(function () {
    return  {
      menu:{
        template: '<ul><li jms-foreach="menu"><a for-property-href="menu.href"  for-property-jms-event="menu.event" for-property="menu.text"></a></li></ul>'}
      ,
      body: {
        template: '<div jms-property="body"></div>', 
        fn: function (h) {
        }
      }
      , 
      footer:{
        template:  '<div jms-property="footer.azienda"></div>'}
    };
    //include html/body.html in jms-view='body'
  }
                     )
}
view.contact = function () {
  return this.execute(function () {
    return  {
      menu:{
        template: '<ul><li jms-foreach="menu"><a for-property-href="menu.href"  for-property-jms-event="menu.event" for-property="menu.text"></a></li></ul>'}
      ,
      body: {
        template: '<div jms-property="body"></div>', 
        fn: function (h) {
        }
      }
      , 
      footer:{
        template:  '<div jms-property="footer.azienda"></div>'}
    };
    //include html/body.html in jms-view='body'
  }
                     )
}