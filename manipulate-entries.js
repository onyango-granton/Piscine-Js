const filterEntries = function (obj, func) {
  const shallowCopy = { ...obj };
    Object.entries(shallowCopy).forEach(([key, value]) => {
        if (!func([key, value])) {
        delete shallowCopy[key];
    }
  });
  return shallowCopy;
};

const mapEntries = function (obj, func) {
    const shallowCopy = { ...obj }
    Object.entries(shallowCopy).forEach(([key, value]) => {
        shallowCopy[func([key, value])] = shallowCopy[key]
        delete shallowCopy[key]
    })
    return shallowCopy
}

const reduceEntries = function (obj, func,initialValue) {
     let shallowCopy = { ...obj };
    let keyArr = Object.keys(shallowCopy);
    let valArr = Object.values(shallowCopy)

     if (initialValue == null) {
       initialValue = keyArr[0] + valArr[0];
         for (let i = 1; i < keyArr.length; ) {
             for (let j = 1; j < valArr.length; j++){
                 initialValue = func(initialValue, [keyArr[i], `${valArr[i]}`]);
                 i++
             }
             break
       }
     } else {
       for (let i = 0; i < keyArr.length; ) {
         for (let j = 0; j < valArr.length; j++) {
           initialValue = func(initialValue, [keyArr[i], `${valArr[i]}`]);
           i++;
         }
         break;
       }
     }

     return initialValue;
    
}

const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 };
console.log(filterEntries(groceriesCart1, ([,v]) => v < 300));
console.log(mapEntries(groceriesCart1, function ([k, v]) { return [v > 250 ? `✔${k}` : `❌${k}`, v - 250]; }))

console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, ""));