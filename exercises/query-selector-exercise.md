Here’s the exercise with an empty script tag included to help them get started and instructions for verifying each step along the way.

---

### JavaScript Beginner Exercise: Selecting Elements with `querySelector` and `querySelectorAll`

In this exercise, you will create a simple HTML page and learn how to select elements using JavaScript’s `querySelector` and `querySelectorAll` methods. You’ll practice selecting elements by ID, class, and tag name.

---

#### Step 1: Set Up Your HTML Page

1. Create a new HTML file named `index.html`.
2. Set up a basic HTML structure with the following elements:
   - A heading with an ID of `"main-title"`
   - Two paragraphs with a class of `"intro"`
   - A button with an ID of `"click-button"` and a class of `"action-button"`
   - A `div` container with a class of `"container"` and a paragraph inside it

Your HTML might look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Query Selector Practice</title>
  </head>
  <body>
    <h1 id="main-title">Welcome to the JavaScript Selector Exercise</h1>
    <p class="intro">This is an introduction paragraph.</p>
    <p class="intro">This is another paragraph with the same class.</p>

    <button id="click-button" class="action-button">Click Me!</button>

    <div class="container">
      <p>Inside a container div</p>
    </div>

    <script>
      // Write your JavaScript code here
    </script>
  </body>
</html>
```

---

#### Step 2: Write JavaScript to Select Elements

Inside the `<script>` tag, you will write code to select elements on the page. Follow these instructions for each selection, and check your work after each step.

1. **By ID**: Use `querySelector` to select the element with the ID `"main-title"`.

   - **Check**: Log the element to the console.
   - **Verify**: Open your browser, go to the console, and ensure the element is displayed in the console output.

2. **By Class (Single Element)**: Use `querySelector` to select the first paragraph with the class `"intro"`.

   - **Check**: Log the element to the console.
   - **Verify**: Make sure only the first paragraph with this class appears in the console.

3. **By Class (All Elements)**: Use `querySelectorAll` to select all elements with the class `"intro"`.

   - **Check**: Log the NodeList of elements to the console.
   - **Verify**: Confirm that both paragraphs with the `"intro"` class appear in the console as a list.

4. **By Tag Name (Single Element)**: Use `querySelector` to select the first `<button>` element on the page.

   - **Check**: Log the button element to the console.
   - **Verify**: Make sure the button is displayed in the console output.

5. **By Tag Name (All Elements)**: Use `querySelectorAll` to select all `<p>` elements on the page.
   - **Check**: Log the NodeList of `<p>` elements to the console.
   - **Verify**: Ensure all paragraph elements appear as a list in the console.

---
