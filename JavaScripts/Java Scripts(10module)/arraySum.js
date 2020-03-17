// var arrNum = [20,49,30,98,50,79]
// var res = arrCall(arrNum)
// console.log("1st one",res)

// var res2 = arrCall([32,98,98,90,42,20])
// console.log("2nd one",res2)
// var res3 = arrCall([33,88,47,52,98,95,70])
// console.log("3rd one",res3)

// function arrCall(arrNum){
//     var sum = 0
//     for(var i = 0; i< arrNum.length; i++){
//     var element = arrNum [i]
//     sum = sum + element
//     }
//     return sum
// }

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames+name;
}
console.log(allNames)