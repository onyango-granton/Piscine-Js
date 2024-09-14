const interpolation = function ({ step, start, end, callback, duration }) {
    for (let i = 0; i < step; i++){
        let x = start + (end - start) * (i / step)
        let y = duration / step * (i + 1)
        setTimeout(() => {callback([x,y])},y)
    }
}