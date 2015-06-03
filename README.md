# jMsvc
View Controller JS


# Example 
controller.js <br>
<b>jMsvc</b>.configHash(true) <br>
.defaultAction("index")<br>
.configRoots({action:"index",url:"home"})<br>
.configRoots({action:"gallery",url:"galleria"})<br>
.configRoots({action:"service",url:"servizi"})<br>
.configRoots({action:"contact",url:"contatto"})<br>
<br><br>
<b> controller.index</b> = function () {<br>
  return this.execute(function(){<br>
  <br>
<br>
  <b> request.set("test","Hello")</b>;<br>
   <br>
   this.http({type: 'get',<br>
        url: "./index.html",<br>
        crossDomain: true,<br>
        data:{},<br>
        success: function(data) {<br>
         alert(data)<br>
        },<br>
        error: function(xhr, textStatus, thrownError) {<br>
       alert(xhr)<br>
        },<br>
        dataType: "html"})<br>
        <br>
    return "index";<br>
})<br>
<br>
}<br>

<br>
<b>controller.gallery</b> = function () {<br>
 return this.execute(function(){<br>
    return "gallery";<br>
<br>
})<br>
}<br>
<br>
<b> controller.service </b>= function () {<br>
 return this.execute(function(){<br>
    return "service";<br>
<br>
})<br>
}<br>
<br>
<b> controller.contact </b>= function () {<br>
 return this.execute(function(){<br>
    return "contact";<br>
<br>
})<br>
}<br>
<br>
# <br>
view.js
<br>
<b>view.index</b> = function () {<br>
   return this.execute(function(){<br>
  $("&lt;div/&gt;").html("Template index > home " +  request.get("test")).appendTo(document.body); <br>
   })<br>
}<br>
<br>
 <br>

<b>view.gallery</b> = function () {<br>
 return this.execute(function(){
   <br>
   $("&lt;div/&gt;").html("Template gallery > galleria ").appendTo(document.body);<br>
<br>
})<br>
}<br>
<br>
<b>view.service</b> = function () {<br>
 return this.execute(function(){<br>
 $("&lt;div/&gt;").html("Template service > servizi ").appendTo(document.body);<br>
<br>
})<br>
}<br>

<b>view.contact</b> = function () {<br>
 return this.execute(function(){<br>
  $("&lt;div/&gt;").html("Template contact > contatto ").appendTo(document.body);<br>
<br>
})<br>
}<br>
<br>
