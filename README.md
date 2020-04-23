# :baby_bottle: $

_babyQuery_, Syntactic sugar for common JS DOM methods. Compatible with IE >8. Methods assume and/or return Elements, Nodes, HTMLCollections, and/or NodeLists. So no chaining of methods as with regular jQuery.

```bash
./build.sh
```

***


### Selector

```js
let el = $(selector)
```

Takes a `string` and returns either a `node`, or an `HTML collection`.

### Lists

```js
$.each(list, (item, index, list) => console.log(item))
```

Iterates through an `array` or `NodeList` and places the list items in the callback

```js
$.eachRight(list, (item, index, list) => console.log(item))
```

Iterates through an `array` or `NodeList` from the end

### Math's missing methods

```js
$.randomInt(min, max)
```

Returns a random `integer` between min and max `number`, inclusive.

```js
$.randomInt(max)
```

Returns a random integer between 0 and `max`, inclusive.

```js
$.gaussian(mean, standardDeviation)
```

Returns a random `number` standard deviation from the mean.

```js
$.mathMap(target, inMin, inMax, outMin, outMax)
```

Returns a `number` mapped from the first `in` range to the second `out`.

### String

```js
$.capitalizeFirstLetter(str)
```

Takes a `string` and capitalizes first letter.


### DOM Manipulation

```js
$.addClass(el, 'class-name')
```

Takes an `Element` or html `Node` and adds class.

```js
$.removeClass(el, 'class-name')
```

Removes class name.

```js
$.remove(el)
```

Removes `element`.

```js
$.append(el, 'Some <em>content</em>!')
```

Uses `innerHTML`.

```js
$.prepend(el, 'Some <em>content</em>!')
```

Uses `innerHTML`.

```js
$.css(el, 'property-name')
```

Returns the value of the given style `property-name`.

```js
$.css(el, 'property-name', 'value')
```

Sets a value to the style property-name.

```js
$.attr(el, 'attribute-name')
```

Gets the value of the attribute.

```js
$.attr(el, 'attribute-name', 'value')
```

Sets a value to the attribute.

```js
$.unwrap(el)
```

Removes  a value to the attribute.


### Events

```js
$.click(e => {
    console.log(e)
})
```

Takes a `string` and capitalizes first letter. List of methods: 

- abort
- beforeinput
- blur
- click
- compositionstart
- compositionupdate
- compositionend
- dblclick
- error
- focus
- focusin
- focusout
- input
- keydown
- keypress
- keyup
- load
- mousedown
- mouseenter
- mouseleave
- mousemove
- mouseout
- mouseover
- mouseup
- resize
- scroll
- select
- unload
- wheel


### AJAX

```js
$.getJSON(url, data => console.log(data));
```

Sends a `Get` AJAX request to the `url` and places returned `data` in callback's argument.

```js
$.post(url, data);
```

Sends a `Post` AJAX request to the `url`.

