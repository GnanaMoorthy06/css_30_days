/*

Selectors
---------
In CSS, selectors are the part of a rule that tells the browser which HTML elements should receive a specific style. 
Think of them as "search queries" for your design.

types : class, id, element , universal

class
-----
Targets elements with a specific class attribute. It always starts with a dot (.).

Example: .highlight { background: yellow; } targets any element with class="highlight".

element
-------
Targets all HTML elements of a specific name.

Example: p { color: blue; } targets every <p> tag on the page.

id
--
Targets a single, unique element with a specific id. It starts with a hash (#).

Example: #header { height: 100px; } targets the element with id="header".

universal
---------
When you use it, the browser applies the specified styles to every single element on the HTML page, 
from the <html> and <body> tags down to every individual paragraph, link, and image.

example :

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
*/