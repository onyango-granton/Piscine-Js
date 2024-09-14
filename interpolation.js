const interpolation = function ({ step, start, end, callback, duration }) {
    for (let i = start; i < end; i++){
        let x = start + (end - start) * (i / step)
        let y = duration / step * (i + 1)
        setTimeout(() => {callback([x,y])})
    }
}