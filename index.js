let diff = require('diff')



function edit(src, dest) {
    const delta = diff(src, dest)
    console.log("\n\n\n==================")
    console.log("Src: "+src)
    console.log("Dest: "+dest)
    var edits = []
    for (var i=0; i<delta.length; i++) {
        var d = delta[i]
        if (d != 'nop') {
            if (d == 'ins') {
                console.log('insert '+i + ': '+dest[i]);
                edits.push({'type': d, 'char': dest[i]})
            }
            else if (d == 'del') {
                console.log('delete '+i + ': '+src[i]);
                edits.push({'type': d, 'char': src[i]})
            }
            else if (d == 'rep') {
                console.log('replace '+i + ': '+src[i]+' => '+dest[i]);
                edits.push({'type': d, 'char': dest[i]})
            }
        }
    }
    return edits;
}




let story0 = 'Mary had a dog.'
edits0 = edit('', story0)

let story1 = 'Mary had a dog, whose name was Sam!'
edits1 = edit(story0, story1)

let story2 = 'Mary had a cat, whose first name was Sam'
edits2 = edit(story1, story2)



