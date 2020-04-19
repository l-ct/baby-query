# Baby Query

_Syntactic sugar for common JS Dom methods._

Compatible with IE >8. Methods assume and/or return Elements, Nodes, HTMLCollections, and/or NodeLists. So no chaining of methods as with regular jQuery. In exchange, you're getting closer to the machine.

```bash
./build.sh
```

***
### Selector

```js
let el = $(selector)
```

Takes a `string` and returns either a `node`, or an `HTML collection`.

### Collections

    $.each(list, (item, i, list) => console.log(item));

Iterates through an array or `NodeList` and places the list items in the callback

    $.each(list, (item, i, list) => console.log(item));

Iterates through an array or NodeList from the end

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


### AJAX

```js
$.getJSON(url, data => console.log(data));
```
Sends a `Get` AJAX request to the `url` and places returned `data` in callback's argument.

```js
$.post(url, data);
```
Sends a `Post` AJAX request to the `url`.