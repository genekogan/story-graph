
Using Myers edit distanc


## Example

```
let story1 = 'Mary had a dog, whose name was Sam!'
let story2 = 'Mary had a cat, whose first name was Sam'

edits = edit(story1, story2)
```

produces the output:

```
replace 11: d => c
replace 12: o => a
replace 13: g => t
delete 34: !
```


### install

    npm install diff


### example

run:

    node index.js



