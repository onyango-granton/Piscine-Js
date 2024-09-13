const throttle = function (func, delay) {
    let timeout
    return () => {
        if (!timeout) {
            func();
            timeout = setTimeout(() => {
                timeout = null
            }, delay);
        }
        
    }
}