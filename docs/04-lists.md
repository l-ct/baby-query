
#### Lists

```js
$.each(list, (item, index, list) => console.log(item))
// iterates through a NodeList or HTMLCollection
// placing each item in the callback

$.eachRight(list, (item, index, list) => console.log(item))
// starting from the end is useful when deletingn items...
// ... NodeLists are live changing the value of list.length
// as loops progress
```
