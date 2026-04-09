/*

Display
-------

- display: block, inline, inline-block

1. display: block
------------------------

Block-level elements are the "heavy hitters." They behave like bricks stacked on top of each other.

Width: Automatically takes up the full width available (100% of its container).

Line Breaks: Always starts on a new line and forces the next element onto a new line.

Box Model: You can freely set width, height, padding, and margin.

Examples: <div>, <h1> through <h6>, <p>, <ul>, <li>.

2. display: inline
-----------------------

Inline elements are like words in a sentence. They only take up as much space as their content needs.

Width: Only as wide as the content inside.

Line Breaks: Does not start on a new line; it sits right next to other inline elements.

Box Model: You cannot set a custom width or height. Horizontal padding/margins work, but vertical padding/margins won't push other elements away.

Examples: <span>, <a>, <strong>, <em>.

3. display: inline-block
-----------------------------

Think of this as the "best of both worlds." It flows like text (inline) but accepts dimensions like a box (block).

Width: Only as wide as the content (unless you specify otherwise).

Line Breaks: Sits on the same line as other inline/inline-block elements.

Box Model: You can set width, height, padding, and margin just like a block element.

Best For: Creating navigation links, buttons, or grid items that need to sit side-by-side but require specific sizing.
*/
