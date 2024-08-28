function blockchain(data, prev){
    if (prev == undefined){
      prev = {index:0, data:'0'}
    }
    return{
      index: prev.index + 1,
      data: data,
      hash: hashCode(index.toString()+prev.hash+JSON.stringify(data)),
      prev:prev,
      chain : data => blockchain(data,this)
    }
  }
  