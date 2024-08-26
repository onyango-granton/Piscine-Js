function getAcceleration(obj1){
    if (obj1.f != undefined && obj1.m != undefined){
        return obj1.f / obj1.m
    } else if (obj1.Δv != undefined && obj1.Δt != undefined){
        return obj1.Δv / obj1.Δt
    } else if (obj1.d != undefined && obj1.t != undefined){
        return (2 * obj1.d) / (obj1.t * obj1.t)
    } else {
        return "impossible"
    }
}
