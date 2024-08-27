function blockChain(data, prev){}

const block = {}

block.index = 0
block.data = {}
block.prev = null

block.chain = function(data) {
    if (block.prev === null){
        console.log("Here")
        this.prev = block
        // block.data = data
        block.hash = '0'
    } 
    if (block.prev !== null){
        currentHead = block.data
        block.data = data
        this.prev = {index : this.index ,hash: this.hash}      
        block.index++
        if (typeof(data) !== 'string'){
            data = JSON.stringify(data) 
        }
        var str1 = this.index.toString() + this.prev.hash + data
        console.log(str1)

        this.hash = hashCode(str1)
        
    }
    return block
}

function isEmpty(obj){
    return Object.keys(obj).length === 0
}

const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)



function blockChain(data){
    data = JSON.stringify(data)
    block.chain(data)
    return block
}

const first = blockChain({ a: 1 })
console.log(first.index) //           -> 1
console.log(first.data) //            -> { a: 1 }
console.log(first.prev) //            -> { index: 0, hash: "0" }
console.log(first.hash) //            -> '1103f27'
console.log(hashCode('10{"a":1}')) // -> '1103f27'

const second = first.chain({ hello: 'world' })
console.log(second.hash) //                           -> '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')) // -> '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

console.log(chain.hash) //  -> '1qr3qfs'
console.log(fork.hash) //   -> '1x9gsc1'
console.log(chain.index) // -> 5
console.log(fork.index) //  -> 5