# jMsvc.js
 


## Quick Examples

    	<script>
    
   
 	context.menu=[
                               
	{url:'../exampleEvent/index.html',desc:'Example Event'},
                               
	{url:'../exampleForeach/index.html',desc:'Example Foreach'},
                               
	{url:'../exampleProperty/index.html',desc:'Example Property'},
                               
	{url:'../exampleInclude/index.html',desc:'Example Include'}
  ];
	  

	</script>

 ```

	<ul>
                
	<li jms-foreach="menu">
		
	<a for-property-href="menu.url" for-property-html="menu.desc"></a>
		
	</li> 
		
	</ul>

```


## Download

Releases are available for download from
[GitHub](https://github.com/mssalvo/jMsvc/archive/master.zip).



__Development:__ [jmsvc.js](https://github.com/mssalvo/jMsvc/raw/master/jmsvc.js) 



<b>In the Browser</b>

	Usage:
```

    <script type="text/javascript" src="jmsvc.js"></script>
  
```

__Documentation__

### jMsvc Setting


* [configHash](#configHash)
* [defaultAction](#defaultAction)
* [configRoots](#configRoots)



-------------------------------------------------



### jMsvc Utils

* [application](#application)
* [request](#request)
* [session](#session)
* [getJson](#getJson)
* [getHtml](#getHtml)
* [getText](#getText)
* [http](#http)

-------------------------------------------------

### jMsvc Object


* [controller](#controller)
* [model](#model)
* [view](#view)
* [context](#context)


-------------------------------------------------


### Control html

* [jms-foreach](#jms-foreach)
* [for-property-*](#for-property)
* [jms-property-*](#jms-property)
* [jms-view](#jms-view)
* [jms-include](#jms-include)
* [jms-include-replace](#jms-include-replace)
* [jms-event](#jms-event)




---------------------------------------------------


<a name="application" />
### application 

application is reference to localStorage object

__Example__

	
	application.set(key|value)

	application.get(key)	


-------------------------------------------------


<a name="session" />
### session

session is reference to sessionStorage object

__Example__

	
	session.set(key|value)

	session.get(key)	


-------------------------------------------------



<a name="request" />
### request



__Example__

	
	request.set(key|value)

	request.get(key)	


-------------------------------------------------




<a name="getJson" />
### getJson

getJson is reference to jMsvc.http


__Example__

	
	 controller.getJson("url",function(data){ })


-------------------------------------------------

<a name="getHtml" />
### getHtml

getHtml is reference to jMsvc.http


__Example__

	
	 controller.getHtml("url",function(data){ })


-------------------------------------------------

<a name="getText" />
### getText

getText is reference to jMsvc.http

__Example__

	
	 controller.getText("url",function(data){ })


-------------------------------------------------


<a name="http" />
### http

http is reference to jQuery.ajax

__Example__

	
	 http(url)

	.success(function(data){ })
	
	//optional

	* .error(function(jqXHR, textStatus, errorThrown){ })
	* .complete(function(jqXHR, textStatus, errorThrown){ })	
	* .setAsync(|Boolean|)
	* .setType(|String|)
	.setDataType(|String|)
	.setData(|PlainObject or String or Array|)
	.setTimeout(|Number|)
	.setStatusCode(|PlainObject|)
	.setXhrFields(|PlainObject|)
	.setBeforeSend(|value|)
	.setCache(|Boolean|)
	.setContentType(|Boolean or String|)
	.setContext(|PlainObject|)
	.setCrossDomain(|Boolean|)
	.setDataFilter(|Function|)
	.setProcessData(|Boolean|)
	.setScriptCharset(|String|)
	
	
	
	
	
	
	
	
-------------------------------------------------






<a name="defaultAction" />
### Setting defaultAction



__Example__


	jMsvc.defaultAction("index")

	


-------------------------------------------------


<a name="configHash" />
### Setting configHash(true|false)



__Example__

	
	jMsvc.configHash(true)




-------------------------------------------------



<a name="configRoots" />
### Setting configRoots({action|url})



__Example__


	jMsvc.configRoots({action:"index",url:"home"})
	
.configRoots({action:"gallery",url:"galleria"})
	.configRoots({action:"service",url:"servizi"})
	.configRoots({action:"contact",url:"contatto"})	


-------------------------------------------------




<a name="controller" />
### controller logic


__Example__

 	controller.home = function () {
	
 
	return this.execute(function(){
    	
	//do something	
	

	//returns the name of the view
	return "contact";

	})


	}




-------------------------------------------------





<a name="controller" />
### controller logic


__Example__

 	controller.home = function () {
	
 
	return this.execute(function(){
    	
	//do something	
	//type	
	context.body={object body}
	context.menu={object menu}
	context.footer={object footer}
	context.banner={object banner}


	//returns the name of the view
	return "home";

	})


	}




-------------------------------------------------


<a name="view" />
### view logic


__Example__

 	view.home = function () {
	
 
	return this.execute(function(){
    	
	//do something	
	

	//returns the object of the jms-view | false
		
		Object(name-view|url-template)
	
	return {
            
		banner:'./html/banner.html',
            
		menu:'./html/menu.html',
            
		body:'./html/body.html',
            
		footer:'./html/footer.html'
            
		}

	})


	}




-------------------------------------------------


<a name="model" />
### model object


__Example__

 	model.myEventInput = function () {
	
 
	return this.execute(function(){
    	
	 alert(this.value)
	 

	})


	}




---------------------------------------------------


<a name="jms-foreach" />
### jms-foreach
Definisce un modello per ciascuno dei dati di una collezione

Defining a pattern for each of the data of a collection


__Example__

```

 <table class="col-md-12">
       <tr jms-foreach="documentation" class="panel panel-info">
            <td class="col-md-12 panel-default">
               
                <a for-property-href="documentation.url" for-property-onclick="documentation.click" >
		<h4 for-property="documentation.nome"></h4>
		</a>
            
            </td>  
            
        </tr>
    </table>

```

-------------------------------------------------

<a name="for-property" />
### for-property
Definisce gli attributi dell'elemento html che saranno modificati con il nuovo valore iniettato all'interno di un ciclo 

jms-foreach

It defines the attributes of html that will be modified with the new value injected into a cycle jms-foreach


__Example__

```

 	<tr jms-foreach="documentation" class="panel panel-info">
            <td class="col-md-12 panel-default">
               
                <a for-property-href="documentation.url" for-property-onclick="documentation.click" >
		<h4 for-property="documentation.nome"></h4>
		</a>
            
            </td>  
            
        </tr>


```

-------------------------------------------------

<a name="jms-property" />
### jms-property
Definisce gli attributi dell'elemento html che saranno modificati con il nuovo valore iniettato

It defines the attributes of html that will be modified with the new value injected

* [jms-property](#)
* [jms-property-*](#)
* [jms-property-html](#)
* [jms-property-text](#)
* [jms-property-value](#)
* [jms-property-style](#)
* [jms-property-append](#)
* [jms-property-onclick](#)
* [jms-property-myProperty](#)
* [jms-property-etc..etc](#)


__Example__

```

 <a jms-property-href="jsmdoc.url" jms-property="jsmdoc.nome"></a>


```


-------------------------------------------------


<a name="jms-view" />
### jms-view
Definisce l'elemento che ospita l'html di una view template o model

It defines the element which houses the html view of a template or model


__Example__

```

  <div jms-view="body"></div>

  <div jms-view="footer"></div>

```


-------------------------------------------------



<a name="jms-include" />
### jms-include
Definisce l'oggetto che Include l'HTML di un'applicazione pagina html o model

It defines the object that includes the HTML application html page or model


__Example__

```

<div jms-include="./html/documentation_left.html"> </div>   


```

-------------------------------------------------


<a name="jms-include-replace" />
### jms-include-replace
Definisce l'oggetto che Include l'HTML esegue un replace di un'applicazione pagina html o model

It defines the object that includes the HTML performs an html page or replace an application model
shows the html page included

__Example__


```

<div jms-include-replace="./html/documentation_left.html"> </div>   


```
-------------------------------------------------

<a name="jms-event" />
### jms-event

Definisce il tipo di evento associato all'elemento e il tipo di controllo da associare all'evento - tipi ammessi > M-V-C-

MVC

It defines the type of event associated with the item and the type of control to associate with the event - types allowed> 

MVC-MVC

* [M]
* [V]
* [C]
* [MVC]


__Example__

```

<input type="button" jms-event="click:M@documentation" value="go!">

<input type="button" jms-event="click:V@documentation" value="go!">

<input type="button" jms-event="click:C@documentation" value="go!">

<input type="button" jms-event="click:MVC@documentation" value="go!">


```

-------------------------------------------------




<b>View Controller JS</b>


# Example 
<b style="color:green">controller.js </b><br>
<b>jMsvc</b>.configHash(true) <br>
.defaultAction("index")<br>
.configRoots({action:"index",url:"home"})<br>
.configRoots({action:"contact",url:"contatto"})<br>
<br><br>
<b> controller.index</b> = function () {<br>
  return this.execute(function(){<br>
  <br>
<br>
  <b> request.set("test","Hello")</b>;<br>
   <br>
  this.get("http://myurl.com").success(function(data){ context.test=data;})
    return "index";<br>
})<br>
<br>
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
  return { body:'./html/body.html', }
   })<br>
}<br>
<br>
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
</code> 


###  template body.html 
========================
<code>


```
   <body> 
   
  <table>
 Cycling object auto  with attribute jms-foreach
 <tr jms-foreach="auto">
  
   //with displays for-property value of the object auto
    <td for-property-html="auto.make_display"></td>
    
    <td for-property-html="auto.make_country"></td>
    
    </tr>
    
   </table>
   

 	</body> 
```
</code>
 
 


