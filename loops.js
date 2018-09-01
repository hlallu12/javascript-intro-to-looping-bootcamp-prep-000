function forLoop(array){
  for(let i=0; i < 25; i++){
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

<<<<<<< HEAD
function whileLoop(n) {
  while (n >= 0) {
    if (n === 0) {
      return 'done'
    } else {
      console.log(n)
    }
      n--
  }
}
 
function doWhileLoop(array) {
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
  } 
 
  do {
    array.shift()
    incrementVariable();
  } while (array.length > 0 && incrementVariable())
  return array
=======
function whileLoop(number) {
  while (number > 0) {
    if (number === 0) {
      console.log("done");
    } else {
    console.log(number);
    }
  }
  number--
>>>>>>> ded63a75e96a65655b1bd9554e95e5f2ab85689a
}