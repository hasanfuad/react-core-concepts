var word = "Hello, My name is fuad.  I am learning web development "
var count = 0

for(var i = 0; i<word.length; i++){
    var store = word[i]

    if(store == " " && word[i-1] != " "){
        count++
    }
}
count++
console.log("Total word is: ",count)