
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0){
        return []
    }
    let arrRever = matrix.map((a, i) => {
        if(i % 2 === 1) {
            return a.reverse()
        }
        return a 
    })
    let arrReverConcat = []
    for(let i = 0; i < arrRever.length ; i++) {
        arrReverConcat = arrReverConcat.concat(arrRever[i])
    }
    return arrReverConcat;
}
