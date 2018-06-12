var names = ['Jon', 'Anike', 'Julie'];

// names.forEach(function (name){
//     console.log('forEach', name)
// })
// console.log("_______________________________________________")

// names.forEach((name) => {console.log('arrowFunc', name)}) 

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// person = {
//     name: 'Andrew',
//     greet: function (name) {
//         names.forEach((name) => {
//             console.log(this.name + ' says hello to ' + name)
//         })
//     }
// }

// person.greet();

//challenge 
function add (a, b) {
    return a + b
}

console.log(add(1,3));

//add expression 
var add = (a, b) => {
    console.log(a + b )
}
add (2,4)

var add = (a,b) => (a+b)

console.log(add(4,5))