jMsvc.configHash(true).defaultAction("index")
.configRoots({action:"index",url:"home"})
.configRoots({action:"gallery",url:"galleria"})
.configRoots({action:"service",url:"servizi"})
.configRoots({action:"contact",url:"contatto"})

controller.index = function () {
  return this.execute(function(){
  

  request.set("paperino2","ciaooa").get("paperino");
   
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

controller.event.index={
    success:function(data){},
    error:function(xhr, textStatus, thrownError){}
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
