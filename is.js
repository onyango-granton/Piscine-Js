is.num = (value) => typeof(value) === 'number' ? true : false
is.nan = (value) => Number.isNaN(value) ? true : false
is.str = (value) => typeof(value) === 'string' ? true :false
is.bool = (value) => typeof(value) === 'boolean' ? true : false
is.undef= (value) => typeof(value) === 'undefined' ? true : false
is.def = (value) => typeof(value) === 'defined' ? true : false
is.arr = (value) => typeof(value) === 'array' ? true: false
is.obj = (value) => typeof(value) === 'object' ? true : false
is.fun = (value) => typeof(value) === 'function' ? true : false
is.truthy = (value) => typeof(value) === 'truthy' ? true : false
is.falsy = (value) => typeof(value) === "falsy" ? true : false
