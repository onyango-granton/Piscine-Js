const chunk = function(array,size){
    let res = new Array
    for (let i = 0; i < array.length;){
        console.log("here")
        let group = new Array
        for (let j = 0; j < size && i < array.length;){
            group.push(array[i])           
            i++
            j++ 
        }
       
        res.push(group)
    }
    return res
}
