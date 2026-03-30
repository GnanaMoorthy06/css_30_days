/* 

Day 1–2: Introduction

What is CSS? 

CSS (Cascading Style Sheets) is the language used to style and layout web pages. 
While HTML provides the raw structure of a page (like the bones of a building),
CSS provides the visual design (the paint, furniture, and architecture).

Types : inline, internal, external

inline css 
----------
Inline CSS is used to apply styles directly to HTML elements using the "style" attribute. 
This method is useful for quick, one-off styles but can make the HTML code cluttered and harder to maintain.

task : inline_css_task.png

Example: <h1 style="color: blue;"> heading 1</h1>

internal css
-------------
Internal CSS is defined within a <style> tag in the <head> section of an HTML document. 
This method allows you to apply styles to multiple elements on the same page without cluttering the HTML.

task : internal_css_task.png

Example:

  <style>
    h1 {
      color: white;
    }
    </style>

    <h1> heading 1</h1>

external css
-------------
External CSS is defined in a separate .css file and linked to the HTML document using the <link> tag. 
This method is the most efficient way to apply styles across multiple pages, as it keeps the CSS code separate from the HTML.
task : external_css_task.png
Example:

html file:
  <link rel="stylesheet" href="styles.css">
  <h1>Hello World!</h1>

css file (styles.css):
  h1 {
    color: red;
  }

Selectors (class, id, element)

👉 Task: Style a simple HTML page (heading, paragraph, button)

*/