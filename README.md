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
		
		 OR  
		 jMsvc.configHash(true) 
		 
		<a href="#galleria" value="galleria">galleria</a> 
		<a href="#servizi" value="servizi">servizi</a> 
		<a href="#contatto" value="contatto">contatto</a> 
		<a href="#home" value="home">home</a> 
		
                OR
                jMsvc.configHash(false)
                
                <a href="./?galleria" value="galleria">galleria</a> 
		<a href="./?servizi" value="servizi">servizi</a> 
		<a href="./?contatto" value="contatto">contatto</a> 
		<a href="./?home" value="home">home</a>  
                
	</body> 
</code>

# 
<b> Example property  jms-include</b>

<code>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Example jMsvc jms-include</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		 
	</head>
	<body>

		


	<!-- script references -->
		<!--script src="http://code.jquery.com/jquery-2.1.4.min.js"></script-->
		<script src="../core/jquery.min.js"></script>
		<script src="../core/jmsvc.js"></script>
		 
		
        <script>
            
	
              context.menu=[
                               {url:'../exampleEvent/index.html',desc:'Example Event'},
                               {url:'../exampleForeach/index.html',desc:'Example Foreach'},
                               {url:'../exampleProperty/index.html',desc:'Example Property'},
                               {url:'../exampleInclude/index.html',desc:'Example Include'}
                               ];
					
	      context.auto=[{"make_id":"ac","make_display":"AC","make_is_common":"0","make_country":"UK"},{"make_id":"acura","make_display":"Acura","make_is_common":"1","make_country":"USA"},{"make_id":"alpina","make_display":"Alpina","make_is_common":"0","make_country":"UK"},{"make_id":"ariel","make_display":"Ariel","make_is_common":"0","make_country":"UK"},{"make_id":"aston-martin","make_display":"Aston Martin","make_is_common":"1","make_country":"UK"},{"make_id":"audi","make_display":"Audi","make_is_common":"1","make_country":"Germany"},{"make_id":"bentley","make_display":"Bentley","make_is_common":"1","make_country":"UK"},{"make_id":"bizzarrini","make_display":"Bizzarrini","make_is_common":"0","make_country":"Italy"},{"make_id":"bmw","make_display":"BMW","make_is_common":"1","make_country":"Germany"},{"make_id":"bugatti","make_display":"Bugatti","make_is_common":"1","make_country":"Italy"},{"make_id":"buick","make_display":"Buick","make_is_common":"1","make_country":"USA"},{"make_id":"cadillac","make_display":"Cadillac","make_is_common":"1","make_country":"USA"},{"make_id":"caterham","make_display":"Caterham","make_is_common":"0","make_country":"UK"},{"make_id":"chevrolet","make_display":"Chevrolet","make_is_common":"1","make_country":"USA"},{"make_id":"chrysler","make_display":"Chrysler","make_is_common":"1","make_country":"USA"},{"make_id":"daewoo","make_display":"Daewoo","make_is_common":"1","make_country":"South Korea"},{"make_id":"de-tomaso","make_display":"De Tomaso","make_is_common":"0","make_country":"Italy"},{"make_id":"dodge","make_display":"Dodge","make_is_common":"1","make_country":"USA"},{"make_id":"eagle","make_display":"Eagle","make_is_common":"1","make_country":"USA"},{"make_id":"ferrari","make_display":"Ferrari","make_is_common":"1","make_country":"Italy"},{"make_id":"ford","make_display":"Ford","make_is_common":"1","make_country":"USA"},{"make_id":"gmc","make_display":"GMC","make_is_common":"1","make_country":"USA"},{"make_id":"honda","make_display":"Honda","make_is_common":"1","make_country":"Japan"},{"make_id":"hummer","make_display":"Hummer","make_is_common":"1","make_country":"USA"},{"make_id":"hyundai","make_display":"Hyundai","make_is_common":"1","make_country":"South Korea"},{"make_id":"infiniti","make_display":"Infiniti","make_is_common":"1","make_country":"Japan"},{"make_id":"isuzu","make_display":"Isuzu","make_is_common":"1","make_country":"Japan"},{"make_id":"jaguar","make_display":"Jaguar","make_is_common":"1","make_country":"UK"},{"make_id":"jeep","make_display":"Jeep","make_is_common":"1","make_country":"USA"},{"make_id":"kia","make_display":"Kia","make_is_common":"1","make_country":"South Korea"},{"make_id":"lamborghini","make_display":"Lamborghini","make_is_common":"1","make_country":"Italy"},{"make_id":"land-rover","make_display":"Land Rover","make_is_common":"1","make_country":"UK"},{"make_id":"lexus","make_display":"Lexus","make_is_common":"1","make_country":"Japan"},{"make_id":"lincoln","make_display":"Lincoln","make_is_common":"1","make_country":"USA"},{"make_id":"lotus","make_display":"Lotus","make_is_common":"1","make_country":"UK"},{"make_id":"marcos","make_display":"Marcos","make_is_common":"0","make_country":"UK"},{"make_id":"mazda","make_display":"Mazda","make_is_common":"1","make_country":"Japan"},{"make_id":"mcc","make_display":"MCC","make_is_common":"1","make_country":"Germany"},{"make_id":"mercedes-benz","make_display":"Mercedes-Benz","make_is_common":"1","make_country":"Germany"},{"make_id":"mercury","make_display":"Mercury","make_is_common":"1","make_country":"USA"},{"make_id":"mitsubishi","make_display":"Mitsubishi","make_is_common":"1","make_country":"Japan"},{"make_id":"morgan","make_display":"Morgan","make_is_common":"1","make_country":"UK"},{"make_id":"nissan","make_display":"Nissan","make_is_common":"1","make_country":"Japan"},{"make_id":"noble","make_display":"Noble","make_is_common":"0","make_country":"UK"},{"make_id":"oldsmobile","make_display":"Oldsmobile","make_is_common":"1","make_country":"USA"},{"make_id":"pagani","make_display":"Pagani","make_is_common":"1","make_country":"Italy"},{"make_id":"panoz","make_display":"Panoz","make_is_common":"1","make_country":"USA"},{"make_id":"plymouth","make_display":"Plymouth","make_is_common":"1","make_country":"USA"},{"make_id":"pontiac","make_display":"Pontiac","make_is_common":"1","make_country":"USA"},{"make_id":"porsche","make_display":"Porsche","make_is_common":"1","make_country":"Germany"},{"make_id":"rolls-royce","make_display":"Rolls-Royce","make_is_common":"1","make_country":"UK"},{"make_id":"saab","make_display":"Saab","make_is_common":"1","make_country":"Sweden"},{"make_id":"saleen","make_display":"Saleen","make_is_common":"1","make_country":"USA"},{"make_id":"saturn","make_display":"Saturn","make_is_common":"1","make_country":"USA"},{"make_id":"smart","make_display":"Smart","make_is_common":"1","make_country":"France"},{"make_id":"subaru","make_display":"Subaru","make_is_common":"1","make_country":"Japan"},{"make_id":"suzuki","make_display":"Suzuki","make_is_common":"1","make_country":"Japan"},{"make_id":"toyota","make_display":"Toyota","make_is_common":"1","make_country":"Japan"},{"make_id":"vector","make_display":"Vector","make_is_common":"1","make_country":"Japan"},{"make_id":"volkswagen","make_display":"Volkswagen","make_is_common":"1","make_country":"Germany"},{"make_id":"volvo","make_display":"Volvo","make_is_common":"1","make_country":"Sweden"}];
                          
	
        </script>
                
                <ul>
                <li jms-foreach="menu">
		<a for-property-href="menu.url" for-property-html="menu.desc"></a>
		</li> 
		</ul>
		
		//include template body.html
                <div jms-include="./body.html"></div>
                
                //displays itself performs a replace html
                <div jms-include-replace="./index.html"></div>
            
	</body>
</html>


</code>

# 
<b> template body.html </b>
<code>
    
    &lt;table>
    // Cycling object auto  with attribute jms-foreach 
    &lt;tr jms-foreach="auto">
    //with displays for-property value of the object auto
    &lt;td for-property-html="auto.make_display"></td>
    &lt;td for-property-html="auto.make_country"></td>
    &lt;/tr>
    &lt;/table>

</code>


