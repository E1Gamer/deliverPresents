function deliverPresents(houses) {

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var slice = (parseInt(houses.length)) / 2
    var firstSlice = houses.slice(0, slice)
    var secondSlice = houses.slice(slice)

    deliverPresents(firstSlice)
    deliverPresents(secondSlice)
  }
}


module.exports = deliverPresents
