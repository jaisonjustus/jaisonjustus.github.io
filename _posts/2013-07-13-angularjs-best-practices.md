---
layout: post
title: "AngularJS Best Practices"
description: "AngularJS Best Practices"
category: "AngularJS, Javascript"
tags: [AngularJS, Javascript]
---

#Best Practices for AngularJS
This leaflet includes best practice to be followed and understanding while developing an Angular application. This leaflet is Based on Misko Hevery talk about AngularJS best practices. You can find the video on youtube's angular channel. Check the resource for links and more details.

---

###When end user reports that he saw {{name}} on initial page render and confused.

use **ng-bind** instead of **{{ }}** in index.html. because in index.html the page get render first and the angular files get loaded after or before rendering the page. so what the problem is the user get exposed to angular template expressions.

    <span ng-bind="project.length || '?'">?</span>
    
Also its not required to use ng-bind in views except the home view.

###Do we need minification or compilation.
Basically why you go for minification is, when you write a web app based on toolbelts like jQuery most of the code is DOM manipulation related. But in case of Angular DOM manipulations that you write will be a 20% of what you write in applicaitons that mentioned above so the requirment of minification is less needed. But if you consider you code base is too big and required minification, its yes! you can minify your code, but certain things you need to consider while minifying. but better good to turn of variable/parameter renaming option. Because 

**Two Way Binding** is pro technique of AngularJS and its maintined by binding models between view and controller. when ever a change in an attribute in the model object in controller, which is not get updated in the view.. the two binding breaks. This can happen when you minify the js code with variable rename is enabled, it rename the model variable in controller but untouch the view so the binding breaks.

Also in the case of **Dependency Injection** minification affects. In Angular Dependency injection is done by injecting modules or services through the function parameters. When the function parameters get renamed dependency inject fails.

Consider you have controller to which we inject $scope

	function HomeController($scope)	{ … };
	
After minification the controller code will be like this
	
	function HomeController(renamed$scope)	{ … };
	
Right now we are injecting renamed$scope instead of $scope after minification. But there is a angular way to solve this problem is to use **$inject** property to specify the right service to inject. $inject is an array of strings each represents a module/service injection. when you specify the injections in $inject it will ignore the parameters passed to the function. Thats how we can solve the problem of injection, when the functions parameter get renamed.

	var HomeController = function(rename$scope){ … };
	HomeController.$inject = ['$scope'];

but some time if you are defining angular controller like
	
	appModule.controller('HomeController', function($window)	{
		...
	});
	
while minificationt $window become some thinglike renamed$window and it will be hard to specify the $inject array. so that the solution is bind the controller function to a variable and attach the array of dependencied to $inject and pass the variable to controller method. like

	var HomeControllerFn = function(renamed$window)	{ … };
	HomeControllerFn.$inject = ['$window'];
	
	appModule.controller('HomeController', HomeControllerfn);
	
But when you see this piece of code, it looks pretty ugly by binding a function to a variable which is only to attach dependencies. But even for this there is an angular way of doing this.

	appModule.controller('HomeController',['$window',
	 function(renamed$window)	{ 
		…
	 }]);
	 
Also never compile `angular.min.js` its already compiled otherwise you dont get the right settings and working get breaks.

###Lets talk about best practice for Templating.
Simply saying, Angular is a framework which holds static technologies like **HTML** and **CSS** together with **Javascript** in one hand. And it provide the flexiblity to write beautiful html templates. Angular allows to extend the html and turn it into declarative domain specific language by the help of **Directives**. 

Directives help to define a  group of html controls into a component, more than that we can say reusable components. you can declare a component in four ways.

- `<my-component>`  *as an element name*
- `<div my-component>` *as an attribute of the element*
- `<div class="my-component">` *as a part to class*
- `<!-- directive:my-component -->` *as a html comment*

For defining a component you should add a **prefix** like `my-component` or `my:component`. But in case of IE, if you declare the component as `<my-component>` it wont works. What really happening is whenever IE came across an unknow tag it consider it as self closing tag like`<br/>`, so the closing tag `</my-component>` is replace with invalid character like `/my-component`. if we use `<div my-component>` it will works. For IE compatablity check this [page](http://docs.angularjs.org/guide/ie)

Another problem with declaring custom components in a HTML page is when you validate the html document the validation get fails because your custom component is a unknown html tag. For that you can declare the components as `<div x-my-component>` or `<div data-my-component>`.

###Best Practice in Structuring Business Logic.
Structuring Business Logic for an angular application most deals with how to define controllers and services. These controllers and services helps to decouple business layer and presentation layer of your application. Controllers provides data and the behaviour for DOM. Its not a good practice to put reference to DOM inside the controller. if you want to share common logic between controllers you can define a service, implies code reusablity. Serivce should represent only business logic and no reference to DOM. Service are not indepented on the presentation layer. Services are singleton and in case of controllers you get each object for each view.

###Understanding Scope.
Scope is an object which refers to model. scope will glue the presentation layer with logic layer (view and controller). its good to treat scope object as readable for views and writable for controller. scope object provides API to observer model mutations _($watch)_. Also it provides API to propagte the model changes across the application ecosystem _($apply)_ mainly when you change the model value outside the angular functions like controller, services etc. Scope can be nested and also can be isolated. scope prototypically inherits properties from the parent scope. Scope provide context withrepect to the expression it look through.

###Understand Modules.
Its suggested that there should be only one module per application. we can use thrid party module in our application. Single module per application help during testing phase.
___

##Resources

###AngularJS Best Practice
####by Misko Hevery
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ZhfUv0spHCY/0.jpg)](http://www.youtube.com/watch?v=ZhfUv0spHCY)

Streamed live on 11 Dec 2012

[Presentation slides](http://goo.gl/CD0Is)

Live from the Mountain View, CA meetup, Miško Hevery discusses the advantages and disadvantages of various design choices when structuring an app in AngularJS, and some of the best practices that we use in our own development.

Some of the topics we'll cover:

- Style best practices that we use in our own projects at Google
- Handling different browsers when writing directives (e.g. IE)
- Comparisons between different ways of structuring your application: + using controller vs scope + using directive prefix vs namespace + using element name vs attribute name vs class

----

{% include JB/setup %}
