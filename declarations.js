const escapeStr = "` , \\ , /,\"'"
const arr = [4, "2"]
const obj = {str:"hamza", num:28, bool: true, undef: undefined}
delete obj.undef
const nested = {arr:[4,undefined,"2"],obj}
Object.freeze(arr)
Object.freeze(nested)
Object.freeze(obj)