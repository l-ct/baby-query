
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

