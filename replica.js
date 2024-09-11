const replica = function (...args) {
    let res = {}
    for (let i = 0; i < args.length; i++){
        res = Object.assign(res, {...args[i]})
    }
    return res
}

console.log(
  replica(
    {},
    Object.freeze({ line: "Replicants are like any other machine" }),
    Object.freeze({ author: "Rich" })
  )
);