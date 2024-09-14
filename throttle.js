const throttle = function (func, delay) {
    let timeout
    return (...args) => {
        if (!timeout) {
            func(...args);
            timeout = setTimeout(() => {
                timeout = null
            }, delay);
        }
        
    }
}
