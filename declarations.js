const escapeStr = "` , \\ , /,\"'"
const arr = [4, "2"]
const obj = {str:"hamza", num:28, bool: true, undef: undefined}
arr.push(undefined)
delete obj['undef']
const nested = {arr,obj}
Object.freeze(arr)
Object.freeze(nested)
Object.freeze(obj)