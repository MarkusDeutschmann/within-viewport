# Within Viewport

***Determine whether elements are completely within the viewport***

Includes:

- The synchronous function, `withinViewport()`
  - Continues to support [legacy browsers](#browser-support)
- The asynchronous, promise-based function, `withinViewportAsync()`
  - More performant, but only for [modern browsers](https://caniuse.com/intersectionobserver) (e.g. post IE 11)
- Optional jQuery plugin with handy selectors and shorthand methods

All of the above offer the same features.

## Install

```sh
yarn add withinviewport
```

or

```sh
npm install withinviewport
```

And then in your JavaScript or TypeScript:

```js
import { withinViewport /* or withinViewportAsync */ } from 'withinviewport'
```

## Usage

### Basic

```js
// Returns true if the element is entirely within view of the window
const elem = document.getElementById('#myElement')

withinViewport(elem) // returns a boolean
withinViewportAsync(elem) // returns a Promise<boolean>
```

### Advanced

All options work the same for both the synchronous and asynchronous functions.

```js
// Test against only some sides of the window for faster performance
withinViewport(elem, { left: 'ignore' })
```

```js
// Pick another element to act as the viewport (instead of `window`)
withinViewport(elem, { container: document.getElementById('myElem') })
```

```js
// Define your own viewport crop by specifying thresholds for each side
// Example: element is at least 12px inside the top and right of the viewport
withinViewport(elem, { top: 12, right: 12 })
```

For more options, see [Options](#options) section below.

### Shorthand notation

```js
// This will only check the bottom and right of the viewport, ignoring the top and left
withinViewport(elem, 'bottom right')
left(elem)
```

## jQuery plugin

Be sure to include the full version of the script as well

```js
<script src="withinviewport.js"></script>
<script src="jquery.js"></script>
<script src="jquery.withinviewport.js"></script>
```

### Basic usage

```js
// Returns true if the element is entirely within the viewport
$('#myElement').is(':within-viewport')
```

```js
// Returns a jQuery object of all <div>s that are within the viewport
$('div').withinViewport()
```

### Advanced usage

There are shorthand selectors and methods for testing against only one edge of the viewport.

```js
// Returns true if the element is within the left edge of the viewport
// Also works with 'top', 'right', and 'bottom'
$('#myElement').is(':within-viewport-left')
```

```js
// Returns a jQuery collection of all <div>s within the left edge of the viewport
$('div').withinViewportLeft()
```

```js
// Same as above, but only elements that are at least 12px inside the left edge
$('div').withinViewportLeft({ left: 12 })
```

These shortcuts will result in slightly better performance if you're testing hundreds or thousands of elements.

#### Live updating

If you're looking to keep tabs on elements' whereabouts at all times, you can bind to the `window`'s `resize` and `scroll` events. However, for performance reasons, it's strongly recommended to [throttle](https://lodash.com/docs/#throttle) your event listener or use something like [James Padolsey's `scrollStop` event](https://web.archive.org/web/20210824132834/https://j11y.io/javascript/special-scroll-events-for-jquery/). Firing on every `window.scroll` event will [bring your UI to its knees](https://ejohn.org/blog/learning-from-twitter/).

```js
$(window).on('resize scrollStop', _.throttle(function() {
    // Your code here...

    // Example:
    $('div')
        // Momentarily declare all divs out of the viewport...
        .removeClass('within-viewport')
        // Then filter them to reveal which ones are still within it
        .filter(':within-viewport')
            .addClass('within-viewport')
}, 100));
```

## Options

All options work the same across the synchronous and asynchronous functions and the jQuery plugin.

### Custom viewport element

If you want to test whether an element is within a scrollable parent element (e.g. which has `overflow: auto` or `scroll`), assign the parent element to the `container` property:

```js
withinViewport(elem, {
    container: document.querySelector('.parent-element')
})
```

### Custom boundaries

For example, a fixed header with a height of 100px that spans the entire width of the page effectively lowers the viewport by 100px from the top edge of the browser window:

```js
withinViewport(elem, { top: 100 })
```

If you only care about some edges of the viewport, you can specify them to improve performance:

```js
withinViewport(elem, 'left bottom')
```

You can also combine optins:

```js
withinViewport(elem, { left: 40, container: myDiv })
$('div').withinViewport({ right: -70, top: 'ignore' })
```

You can specify *negative threshold values* to allow elements to reside outside the viewport.

## Migrating from v2 to v3

The `sides` option has been deprecated. The following calls are equivalent:

```js
// 2.x: specifying which sides to *monitor*
withinViewport(elem, { sides: ['left', 'right']})

// 3.x: specifying which sides to *ignore*
withinViewport(elem, { top: 'ignore', bottom: 'ignore' })
```

## Browser Support

For the synchronous functions:

- IE 7(?) and higher
- All the others except Opera Mini
  - Tested in the latest stable Chrome, Firefox, Safari, and Edge

The asynchronous functions work in any browser that supports promises and [IntersectionObserver](https://caniuse.com/intersectionobserver).

All functions (both versions) are transpiled to ES5.

## Credit

Within Viewport is inspired by these similar utilities which only reflect whether an element is at least partially in view:

- Remy Sharp's [Element 'in view' Event Plugin](https://remysharp.com/2009/01/26/element-in-view-event-plugin/)
- Mike Tuupola's [Viewport Selectors for jQuery](https://github.com/tuupola/jquery_viewport)

## License

Have fun with it &mdash; [BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/). See included [LICENSE](LICENSE) file.

## Author

[Craig Patik](https://patik.com)
