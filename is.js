is.obj = (value) => !(is.arr(value)) && typeof(value) === 'object' && is.truthy(value)
is.num = (value) => typeof(value) === 'number' 
is.nan = (value) => Number.isNaN(value) 
is.str = (value) => typeof(value) === 'string'
is.bool = (value) => typeof(value) === 'boolean' 
is.undef= (value) => typeof(value) === 'undefined' 
is.def = (value) => value !== 'undefined' && value !== 'null'
is.arr = (value) => Array.isArray(value)
is.fun = (value) => typeof(value) === 'function' 
is.falsy = (value) => {
    return value === false || value === 0 || value === -0 ||
           value === 0n || value === '' || value === null || 
           value === undefined || Number.isNaN(value);
}
is.truthy = (value) => !is.falsy(value) ? true : false