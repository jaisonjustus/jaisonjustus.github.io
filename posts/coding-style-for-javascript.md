# Coding Style Guide For Javascript

_"For us code is our poetry and its our privilege to make it beautiful and readable.”_

## Whitespaces
 *  The basic indentation is two spaces.
 *  Try to keep lines to 80 characters or less

    ```
		var result = prompt(message, initialValue, 
        	                       caption);
        	                       
	```
 *  Use method chaining beautifully.

 	```
		$('<p></p>')
       		.addClass('post__message_normal')
       		.css('font-size','12px);
 	```
 *  Lines should not contain trailing spaces.
 *  Spaces after commas and semicolons, but not before.
 *  Separate binary operators with spaces.
 *  Spaces after keywords, e.g., `if (x > 0)`

## Function and variable naming
  * Most importantly: variables are names and functions contains a verb.
  * Use interCaps for names and enumeration values; other constants should be in UPPER_CASE.
  * Try to declare local variables as near to their use as possible; try to initialize every variable.
  * Multiple variables declaration of the same type:
  
  ```
  var a = 'foo',
      b = 'bar',
      c = 'foobar';
  ```  

#### Convention table
Type | Convention | Description
---- | ---------- | -----------
Files | file_list_view.js | All word should be in small letter, use _ as a file_list_tpl.html delimiter between words.
Variables/Functions | fileObject | Write variables and functions in Camel Case addUserDetails()	
Constants | MAX_UPLOAD_LIMIT | Constants in capital letter
Public vars/funcs | addUserDetails() | In a module if we write public variables/functions like this helps the user to understand its safe to consume the functionality.
Private vars/funcs | _addUserDetails() | Putting underscore to the variable/functions in module help the user who  going to implement the module to under stand this method is a private and make no sense in implementation outside the method.
Modules/Constructor | FileListView | Write module/constructor names in Pascal Case.

## Functions
Braces must always be in the same line of the function definition.

```
function toOpenWindow(window) {
  window.document.commandDispatcher.focusedWindow.focus();
}
```

## Inline Functions
`function valueObject(value) { return { value: value }; }`

## If-else Construct
```
   if (window) {
     window.focus();
   } else {
     window = new Window();
   }
```

## Code Style   
Always put else on its own line, as shown above and don't use else after return, i.e.,
```
  if (x < y) { return -1; }
  if (x > y) { return 1; }
  return 0;
```

## Loop Construct
  * for loop
  
     ```
        for (var i = 0; i < 3; ++i) {
          // the code block to be executed
        }
     ```
  * while loop
  
     ```
        while (i < 10) {
          // the code block to be executed
        }
     ``` 
                     
## Return Statement

```
	return {
		shouts : "Barbeque Time"
	};
```

## Commenting

Commenting a Variable or Logic block

```
   /* Retrieving user details for authentication. */
   UserModel.findOne({ email : attributes.email }, "_id name email password token", function(err, user) {
     // ...
   });
```

Wrap the comment line with in 80~85 words like.

```
   /* File Descriptor represents the vital information about the file like 
      name, type, size and also have the file object. */
   _fileDescriptor : {},
```

### Commenting a Function
Example:

```
   /* Method to add file descriptor to file list.
    * @param {string} name
    * @param {string} type
    * @param {int} size
    * @param {object} file
    * @param {boolean} safe :its not a mandatory field, unless not in secure mode.
    * @return {array}
    */
   function _addFileDescriptor(name, type, size, file, safe)    {
     // ...
     return fileList;
   }
```

### Commenting a Module
Example:

```
   /* Module to handle the file list rendering and broadcasting
    * events regarding the view. This module is tailor made to
    * support FileView.
    * @module FileListView
    */
   define(['jquery', 'underscore', 'backbone', 'fileview'], 
     function($, _, Backbone, FileView) {

     var FileListView = Backbone.View.extend({
       // .......................
     });

     return FileListView;
   });
   
```

----

# Coding Style Guide For JQuery
_"Spaghetti is Tasty. But Spaghetti in your code is not that Taste.”_

### Use method chaining beautifully
It’s important to remember that most methods will return the jQuery object. This is extremely helpful, and allows for the chaining functionality that we use so often. Ehich also reduces DOM Traversing.

```
$( "ul.first" )
  .find( ".foo" )
    .css( "background-color", "red" )
  .end()
  .find( ".bar" )
    .css( "background-color", "green" );
```

### Avoid giving long DOM query strings.
In case of query string cascading, try to make the it simple and utilize the `.find()` method. Which give more readablity to code.

```
/* Bad practice. */
$('.header__wrapper .header__button_login').hide();
```
```
/* Good practice. */
$('.header__wrapper')
	.find('.header__button_login')
	.hide();
```
### Event Registering.
Use `.on()` instead of `.bind()` and `.live()`.

```
$(document)
	.on('click', '.header__button_login', function() { /*…*/ })
	.on('click', '.header__button_cancel', function() { /*…*/ });
```
### Reduce DOM Travesring inside loop
Try to a reduce dom traversing/operations inside loops like `.each()`

```
/* Bad Practice. */
var listElement = $('.header__listA)
	secondListElement = $('.header__listB);
	
listElement.each(function()	{
	secondListElement.html($(this).html());
});
```
```
/* Good Practice. */
var contentArray = [],
	listElement = $('.header__listA)
	secondListElement = $('.header__listB);

listElement.each(function()	{
	contentArray.push($(this).html());
});

secondListElement.html(contentArray.join(''));
```
### Only and Only one entry point.
Remeber to enforce that a page should have only one etry point to javascript.