function blockChain(data, prev){
    if (prev == null){
      prev = {index:0, hash:'0'}
    }
    return{
      index: prev.index + 1,
      data: data,
      prev:prev,
      hash: hashCode((prev.index + 1).toString()+prev.hash+JSON.stringify(data)),    
      chain : data => blockChain(data,this)
    }
  }
  