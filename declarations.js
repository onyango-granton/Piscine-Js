const escapeStr = "` , \\ , /,\"'"
const arr = Object.freeze([4, "2"])
const obj = Object.freeze({str:"hamza", num:28, bool: true, undef: undefined})
const nested = Object.freeze({arr:[4,undefined,"2"],obj})
// Object.freeze(arr)
// Object.freeze(nested)
// Object.freeze(obj)