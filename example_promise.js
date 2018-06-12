// function getTempCallback (location, callback){
//     //if ran successfully 
//     callback(undefined, 78);
//     //if ran unsuccessfully
//     callback('City not found')
// }

// getTempCallback('Atl', function(err, temp){
//     if (err){
//         console.log('err', err);
//     }
//     else {
//         console.log('success', temp)
//     }
// });

// function getTempPromise (location){
//     return newPromise(function (resolve, reject){
//         //after 1 second the function will get called
//         setTimeout(function (){
//             resolve(79);
//             reject('City not found')
//         }, 1000);
//     });
// }

// getTempPromise('Atlanta').then(function(temp){
//     console.log('promise success', temp);
// }, function (err) {
// console.log('promise error', err)
// });
//one or the other will be ran but never both 
function addPromise (a,b){
    return new Promise(function (resolve, reject){
        if (typeof a === 'number' && typeof b ==='number'){
            resolve(a+b);
        }
        else {
           reject('A & B need to be numbers')
        }
    })
}
//.then could be used because we returned the new promise
addPromise(2,3).then(function (sum){
    console.log('success', sum)
}, function (err) {
    console.log('error', err)
})
addPromise('jfej', 4).then(function (sum){
console.log('This should not show up')
},  function (err){
console.log('This should appear;', err)
})










