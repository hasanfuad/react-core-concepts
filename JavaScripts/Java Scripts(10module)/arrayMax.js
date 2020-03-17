var marks = [32,98,88,74,56,62,81,45]
var max = marks[0]

for(var i = 0; i<marks.length; i++){
    var element = marks[i]

    if(element > max){
          max = element  
    }
}
console.log("Highest marks: ",max)