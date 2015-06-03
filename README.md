# jMsvc
<b style="color:green">View Controller JS</b>


# Example 
<b style="color:green">controller.js </b><br>
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
<b style="color:green">view.js</b>
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


# 
<b> pag.html</b>
<code>
	<body> 
 
	  <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script><br>
		<script src="../jmsvc.js"></script><br>
		<script src="app/view.js"></script><br>
		<script src="app/controller.js"></script><br>
 
	 <script> 
	 jMsvc.include(); 
	 </script>
		
		<input type="button" value="galleria" onclick="jMsvc.call('galleria')"> 
		<input type="button" value="servizi" onclick="jMsvc.call('servizi')"> 
		<input type="button" value="contatto" onclick="jMsvc.call('contatto')"> 
		<input type="button" value="home" onclick="jMsvc.call('home')">   
		 <b>OR</b><b>jMsvc.configHash(true) </b>
		<a href="#galleria" value="galleria">galleria</a> 
		<a href="#servizi" value="servizi">servizi</a> 
		<a href="#contatto" value="contatto">contatto</a> 
		<a href="#home" value="home">home</a> 
                <b>OR</b><b>jMsvc.configHash(false) </b>
                <a href="./?galleria" value="galleria">galleria</a> 
		<a href="./?servizi" value="servizi">servizi</a> 
		<a href="./?contatto" value="contatto">contatto</a> 
		<a href="./?home" value="home">home</a>  
                
	</body> 
</code>
