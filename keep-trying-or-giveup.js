const retry = function (count, callback) {
    return async (...args) => {
        let catchError
        for (let i = 0; i <= count; i++){
            try {
              return await callback(...args);
            } catch (e) {
                catchError = e
            }
        }   
        throw catchError
    }
}