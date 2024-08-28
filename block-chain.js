function blockChain(data, prev){
    if (prev == undefined){
      prev = {index:0, data:'0'}
    }
    return{
      index: prev.index + 1,
      data: data,
      hash: hashCode((prev.index + 1).toString()+prev.hash+JSON.stringify(data)),
      prev:prev,
      chain : data => blockChain(data,this)
    }
  }
  