
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
