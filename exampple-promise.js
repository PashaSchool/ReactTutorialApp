// function getTemplCallback(location, callback) {
//
//   callback(undefined, 78)
//   callback('City mot found')
// }
//
//
// getTemplCallback("Philadelfia", function(err, temperatura){
//   if(err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temperatura)
//   }
// })
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//      resolve(78);
//      reject("City not found")
//   })
// }
//
// getTempPromise("Lviv").then(
//   function(temperature) {
//   console.log('promisse success', temperature);
// }, function(err) {
//   console.log('promisse err', err)
//
// })

function addNewPromis(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve( a + b)
    } else {
      reject("the number invalid")
    }
  })
}

addNewPromis(5,"3").then(function(sum){
  console.log(sum)
}, function(err) {
  console.log(err)
})
