const smallString = 0
const capitalString = 1
const numberString = 2
const specialString = 3
const functionNames = ['smallString', 'capitalString', 'numberString', 'specialString']

export function newPassword(passLength, smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable) {
    return generate(passLength, smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable)
}

const luckyNumber = (min, max, forbiden) => {
    let output = Math.floor(Math.random() * (max - min)) + min
    while (output === forbiden) output = Math.floor(Math.random() * (max - min)) + min
    return output
}

const randomSmallString = (alreadyUsed) => {
    const options = 'abcdefghijklmnopqrstuvwxyz'
    const array = options.split('')
    return options[luckyNumber(0, options.length, options.length + 1)]
}

const randomCapitalString = (alreadyUsed) => {
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const array = options.split('')
    return options[luckyNumber(0, options.length, options.length + 1)]
}

const randomNumber = (alreadyUsed) => {
    const options = '0123456789'
    const array = options.split('')
    return options[luckyNumber(0, options.length, options.length + 1)]
}

const randomSpecialChar = (alreadyUsed) => {
    const options = '@#$%&_'
    const array = options.split('')
    return options[luckyNumber(0, options.length, options.length + 1)]
}

const functionArrays = (value) => {
    switch (value) {
        case 0: return randomSmallString
        case 1: return randomCapitalString
        case 2: return randomNumber
        case 3: return randomSpecialChar
    }
}

const verifyCondition = (array, funcNumber, maxTurns) => {
    let output = []

    if (maxTurns === 0) output = [false, 'char turns is 0']
    if (maxTurns < 0) output = [true, 'char has no limit']

    if (maxTurns > 0) {

        let currentTurn = []
        if (array.includes(funcNumber)) array.forEach(value => { if (value === funcNumber) currentTurn.push(value) })

        let funcTurnLength = currentTurn.length

        if (funcTurnLength > maxTurns) output = [false, 'char on limit'] // fazer novo sorteio da funcao
        output = [true, 'char can be repeated'] // pode continuar com a mesma funcao}
    }
    return output[0]
}

const maxTurnsOfFunc = (funcNumber, maxTurns) => {
    let output = []

    if (maxTurns[funcNumber][0]) output = [maxTurns[funcNumber][1], 'valid number o turns']
    else output = [0, 'no turns left or not allowed']

    return output[0]
}

function generate(passLength, smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable) {
    let errorMessage = 'noerror'
    let output = ''
    let memory = []
    let duplicateFinder = []
    let originalValues = [smalStringEnable[1], capitalStringEnable[1], numberEnable[1], specialCharEnable[1]]
    let functionsControl = [smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable]
    let maxLoops

    console.log('values received: ' + smalStringEnable + ' - ' + capitalStringEnable + ' - ' + numberEnable + ' - ' + specialCharEnable)
    console.table(functionsControl)

    for (let i = 0; i < passLength; i++) {
        console.log('password length now is ' + i)

        // sortear uma função
        let prizeFunction = luckyNumber(0, 4, 4 + 1)
        console.log('prizeFunction: ' + prizeFunction + ' (' + functionNames[prizeFunction] + ')')

        /// verificar se a função é valida
        let isValid = functionsControl[prizeFunction][0]
        let numberOfTurns = functionsControl[prizeFunction][1]
        let message = functionsControl[prizeFunction][0] + ' ~ ' + functionsControl[prizeFunction][1]

        console.log((isValid) ? 'validado >> ' + message : 'função selectionada não é valida >> ' + message)
        console.log('number of turns for this function is ' + numberOfTurns)

        if (numberOfTurns === 0) isValid = false

        //  enquanto não for valida sorteia uma nova
        maxLoops = 0
        while (!isValid) {
            prizeFunction = luckyNumber(0, 4, 4 + 1)
            isValid = functionsControl[prizeFunction][0]    // ligado ou desligado
            numberOfTurns = functionsControl[prizeFunction][1]  //numero de repeticoes

            if (isValid && numberOfTurns !== 0) isValid = true
            else isValid = false

            console.log('try function ' + functionNames[prizeFunction] + ' \nid: ' + prizeFunction + '\ncurrent ' +
                ((isValid) ? 'valid' : 'not valid') + '\nwith ' + ((numberOfTurns === -1) ? 'unlimited' : numberOfTurns) + ' turns left')

            maxLoops++
            if (maxLoops > 200) {
                errorMessage = 'error while validating'
                console.log('Something wrong happen')
                break
            }
        }

        // console.log('\tfirst function to randomize is ' + functionNames[prizeFunction])
        // let checkSize = maxTurnsOfFunc(prizeFunction, [smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable])
        // console.log('\tfunction  {' + functionNames[prizeFunction] + '} has size {' + checkSize + '}')

        // maxLoops = 0
        // while (memory.includes(prizeFunction)) {
        //     if (verifyCondition(memory, prizeFunction, checkSize)) {
        //         if (numberOfTurns > 0) functionsControl[prizeFunction][1]--
        //         break
        //     }

        //     prizeFunction = luckyNumber(0, 4, prizeFunction)
        //     isValid = functionsControl[prizeFunction][0]

        //     // if ((select === 0 || select === 1 || select === 2) && memory.includes(3)) break
        //     console.log('NEW LUCKY NUMBER')
        //     maxLoops++
        //     if (maxLoops > 200) {
        //         errorMessage = 'error on second while '
        //         console.log('Something wrong happen')
        //         break
        //     }
        // }

        //        memory.push(prizeFunction)

        const myFunc = functionArrays(prizeFunction)

        let currentValue = myFunc()
        // while (duplicateFinder.includes(currentValue)) currentValue = myFunc(duplicateFinder)

        console.log('CURRENT CHAR IS: ' + currentValue)

        if (functionsControl[prizeFunction][1] > 0)
            functionsControl[prizeFunction][1]--

        //   duplicateFinder.push(currentValue)

        output = output.concat(currentValue)
    }
    if (errorMessage !== 'noerror') output = errorMessage

    smalStringEnable[1] = originalValues[0]
    capitalStringEnable[1] = originalValues[1]
    numberEnable[1] = originalValues[2]
    specialCharEnable[1] = originalValues[3]

    return output
}
