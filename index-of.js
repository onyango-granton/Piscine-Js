const indexOf = function(array,value,index) {
    if (index == null){
        index = 0
    }
    for (let i = index; i < array.length;i++){
        if (array[i] == value){
            return i
        }
    }
    return -1
}


const lastIndexOf = function(array,value,index){
    console.log(array)
    let lastIndex
    if (index == null){
        index = 0
    }
    for (let i = index; i < array.length;i++){
        if (array[i] == value){
            lastIndex = i
        }
    }
    if (lastIndex !== undefined){
        return lastIndex
    } else {
        return -1
    }
}

const includes = (array,value,index) => indexOf(array,value,index) == -1 ? false : true
