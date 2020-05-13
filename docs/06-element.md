
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
