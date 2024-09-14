const retry = function (count, callback) {
    return async(...args) => {
        for (let i = 0; i <= count; i++){
            try {
              return await callback(...args);
            } catch (e) {
                throw e
            }
        }   
        
    }
}