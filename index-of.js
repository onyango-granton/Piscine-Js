const indexOf = function(array,value,index) {
    if (index == null){
        index = 0
    }
    for (let i = index; i < array.length;i++){
        if (array[i] === value){
            return i
        }
    }
    return -1
}


const lastIndexOf = function(array,value,index){
    if (index == null){
        index = array.length - 1
    }
    for (let i = index; i >= 0;i--){
        if (array[i] === value){
            return i
        }
    }
    return -1
}

const includes = (array,value,index) => indexOf(array,value,index) == -1 ? false : true
