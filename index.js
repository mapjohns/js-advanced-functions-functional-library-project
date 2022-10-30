
const callback = a => alert(a)

const createArray = function(a) {
    if (Array.isArray(a)) {
        return a
    }
    else if (typeof(a) === 'object') {
        return Object.values(a)
    }
}


const myEach = (array, callback) => createArray(array).map(a => callback(a))