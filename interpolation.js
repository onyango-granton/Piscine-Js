const interpolation = function({step, start, end, callback, duration}){
    const points = [];
    const stepSize = (end - start) / step;
    for (let i = 0; i < step; i++) {
        const distance = start + stepSize * i;
        points.push([distance, callback([distance, start + stepSize * (i + 1)])]);
    }
    points.forEach((point, index) => {
        setTimeout(() => {
            callback(point[1]);
        }, (duration / step) * index);
    });
}
