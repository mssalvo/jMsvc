
view.index = function () {
   return this.execute(function(){
  $("<div/>").html("Template index > home " +  request.get("test")).appendTo(document.body); 
   })
}

 

view.gallery = function () {
 return this.execute(function(){
   
   $("<div/>").html("Template gallery > galleria ").appendTo(document.body);

})
}

view.service = function () {
 return this.execute(function(){
 $("<div/>").html("Template service > servizi ").appendTo(document.body);

})
}

view.contact = function () {
 return this.execute(function(){
   $("<div/>").html("Template contact > contatto ").appendTo(document.body);

})
}
