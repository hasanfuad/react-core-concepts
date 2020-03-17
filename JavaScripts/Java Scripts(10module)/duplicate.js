var name = ["rahim","Karim","rahim","jamal","kamal","Karim","kamal"]
var uniqueName = []

for(var i = 0; i<name.length; i++){
    var element = name[i]
    var index = uniqueName.indexOf(element)

    if(index == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName)