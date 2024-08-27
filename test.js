function createBlock(prev) {
    return {
        index: prev ? prev.index + 1 : 0,
        data: {},
        prev: prev || null,
        hash: prev ? prev.hash : '0',
        
        chain: function(data) {
            if (this.prev === null) {
                console.log("Here");
                this.prev = { index: 0, hash: '0' };
                this.hash = '0';
            } else {
                const currentHead = this.data;
                this.data = data;
                this.prev = { index: this.index - 1, hash: this.hash };
                this.index++;
                
                if (typeof(data) !== 'string') {
                    data = JSON.stringify(data);
                }

                
                
                const str1 = this.index.toString() + this.prev.hash + data;
                console.log("*******",str1);
                
                this.hash = hashCode(str1);
            }
            return this; // Return the current block for chaining
        }
    };
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function hashCode(str) {
    return (
        [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36);
}

// Initialize a new block
const first = createBlock(null).chain({ a: 1 });
console.log(first.index); // -> 1
console.log(first.data); // -> { a: 1 }
console.log(first.prev); // -> { index: 0, hash: '0' }
console.log(first.hash); // -> Hash of the first block

const second = first.chain({ hello: 'world' });
console.log(second.hash); // -> Hash of the second block

const chain = createBlock(second)
    .chain({ value: 4455 })
    .chain({ some: 'data' })
    .chain({ cool: 'stuff' });

const fork = createBlock(second)
    .chain({ value: 335 })
    .chain({ some: 'data' })
    .chain({ cool: 'stuff' });

console.log(chain.hash); // -> Hash of the final block in the chain
console.log(fork.hash); // -> Hash of the final block in the fork
console.log(chain.index); // -> 5
console.log(fork.index); // -> 5
