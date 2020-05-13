# :baby_bottle: $

_babyQuery_, Syntactic sugar for common JS DOM methods. Compatible with IE >8. Methods assume and/or return Elements, Nodes, HTMLCollections, and/or NodeLists. So no chaining of methods as with regular jQuery.

```bash
./build.sh
```

***

#### Selector

```js
let el = $(selector)
// returns either an unmodified Node or HTMLCollection/NodeList
// using document.querySelectorAll()
```

#### Lists

```js
$.each(list, (item, index, list) => console.log(item))
// iterates through a NodeList or HTMLCollection
// placing each item in the callback

$.eachRight(list, (item, index, list) => console.log(item))
// starting from the end is helpful when deleting Nodes from
// a live HTMLCollection whose list.length property would be
// otherwise constantly updating
```

#### Math's Missing Methods

```js
$.randomInt(min, max)
// returns a random integer between min and max inclusive

$.randomInt(max)
// returns a random integer between 0 and max inclusive

$.gaussian(mean, standardDeviation)

$.mathMap(target, inMin, inMax, outMin, outMax)
// returns target mapped from in range to out range
```

#### String

```js
$.capitalizeFirstLetter(str)
// takes a `string` and capitalizes first letter
```

#### DOM Manipulation

```js
$.addClass(el, 'class-name')

$.removeClass(el, 'class-name')

$.remove(el)

$.append(el, 'Some <em>content</em>!')
// uses innerHTML

$.prepend(el, 'Some <em>content</em>!')

$.css(el, 'property-name')
// returns computed value of property-name

$.css(el, 'property-name', 'value')
// sets value

$.attr(el, 'attribute-name')
// returns attribute-name's value

$.attr(el, 'attribute-name', 'value')
// sets value

$.unwrap(el)
// removes element's tags
```

#### Events

```js
$.click(el, event => {
    console.log(event)
})
// $.{event-name}(el, callback(event))
```

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

#### AJAX

```js
$.getJSON(url, data => console.log(data));

$.post(url, data);
```
