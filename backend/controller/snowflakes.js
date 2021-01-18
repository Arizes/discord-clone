/**
 * Creating a similar system to Discord's and Twitter's snowflake logic
 */

function snowflake(workerNum, processNum, incrementNum) {

    let epoch = 1609459200000
    let millisecondsSinceEpoch = Date.now() - epoch
    
    let ftzeros = "000000000000000000000000000000000000000000"
    let binaryTimestamp = Number(millisecondsSinceEpoch).toString(2)
    if (String(binaryTimestamp).length < 42) {
        let missingZeroes = 42 - (42 - String(binaryTimestamp).length)
        let zerosNeeded = ftzeros.slice(missingZeroes)
        binaryTimestamp = zerosNeeded+binaryTimestamp
    } 

    let fzeros = "00000"
    let workerId = Number(workerNum).toString(2)
    if (String(workerId).length < 5) { 
        let missingZeroes = 5 - (5 - String(workerId).length)
        let zeroesNeeded = fzeros.slice(missingZeroes)
        workerId = zeroesNeeded+workerId
    }

    let processId = Number(processNum).toString(2)
    if (String(processId).length < 5) {
        let missingZeroes = 5 - (5 - String(processId).length)
        let zeroesNeeded = fzeros.slice(missingZeroes)
        processId = zeroesNeeded+processId
    }

    let izeros = "000000000000"
    let increment = Number(incrementNum).toString(2)
    if (String(increment).length < 12) {
        let missingZeroes = 12 - (12 - String(increment).length)
        let zeroesNeeded = izeros.slice(missingZeroes)
        increment = String(zeroesNeeded+increment)
    }
    let binaryId = String(binaryTimestamp+workerId+processId+increment)
    let userId = parseInt(binaryId,2)

    return userId
}

function deSnowflake(id) {
    return((id/4139304) + 1609459200000)
}
module.exports = { snowflake, deSnowflake }