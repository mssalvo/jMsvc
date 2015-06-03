jMsvc.configHash(true).defaultAction("index")
.configRoots({action:"index",url:"home"})
.configRoots({action:"gallery",url:"galleria"})
.configRoots({action:"service",url:"servizi"})
.configRoots({action:"contact",url:"contatto"})

controller.index = function () {
  return this.execute(function(){
  

  request.set("test","ciao") // page
 
  session.set("test2","ciao2") // permanent
 
  application.set("test3","ciao3") // permanent
 
   
   this.http({type: 'get',
        url: "./index.html",
        crossDomain: true,
        data:{},
        success: function(data) {
         alert(data)
        },
        error: function(xhr, textStatus, thrownError) {
       alert(xhr)
        },
        dataType: "html"})
        
    return "index";
})

}


controller.gallery = function () {
 return this.execute(function(){
    return "gallery";

})
}

controller.service = function () {
 return this.execute(function(){
    return "service";

})
}

controller.contact = function () {
 return this.execute(function(){
    return "contact";

})

}

controller.convalida = function () {  // multi-action
 return this.execute(function(){
    if(request.get("test")=="1") return "contact";
    if(request.get("test")=="2") return "service";
    if(request.get("test")=="3") return "gallery";
    
    return "index";

})

}

