const is = {
    num : (value) => typeof(value) === 'number' ? true : false,
    nan : (value) => typeof(value) === 'Nan' ? true : false,
    str : (value) => typeof(value) === 'string' ? true :false,
    bool : (value) => typeof(value) === 'boolean' ? true : false,
    undef: (value) => typeof(value) === 'undefined' ? true : false,
    def : (value) => typeof(value) === 'defined' ? true : false,
    arr : (value) => typeof(value) === 'array' ? true: false,
    obj : (value) => typeof(value) === 'object' ? true : false,
    fun : (value) => typeof(value) === 'function' ? true : false,
    truthy : (value) => typeof(value) === 'truthy' ? true : false,
    falsy : (value) => typeof(value) === "falsy" ? true : false,
}
