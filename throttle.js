import { debounce } from "./debounce.js";
import { opDebounce } from "./debounce.js";


const throttle = function (func, wait) {
    return debounce(func,wait)
}

const opThrottle = function (func, wait, options) {
    
}

export {throttle,opThrottle}