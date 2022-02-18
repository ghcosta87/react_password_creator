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
    let newOptions = charCheck(alreadyUsed, options)
    return newOptions[luckyNumber(0, newOptions.length, newOptions.length + 1)]
}

const randomCapitalString = (alreadyUsed) => {
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newOptions = charCheck(alreadyUsed, options)
    return newOptions[luckyNumber(0, newOptions.length, newOptions.length + 1)]
}

const randomNumber = (alreadyUsed) => {
    const options = '0123456789'
    let newOptions = charCheck(alreadyUsed, options)
    return newOptions[luckyNumber(0, newOptions.length, newOptions.length + 1)]
}

const randomSpecialChar = (alreadyUsed) => {
    const options = '@#$%&_'
    let newOptions = charCheck(alreadyUsed, options)
    return newOptions[luckyNumber(0, newOptions.length, newOptions.length + 1)]
}

const charCheck = (alreadyUsed, options) => {
    let newOptions = []
    let charOptions = options.split('')

    charOptions.forEach(element => {
        if (!alreadyUsed.includes(element)) newOptions.push(element)
    });
    return newOptions
}

const functionArrays = (value) => {
    switch (value) {
        case 0: return randomSmallString
        case 1: return randomCapitalString
        case 2: return randomNumber
        case 3: return randomSpecialChar
    }
}

function generate(passLength, smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable) {
    let errorMessage = 'noerror'
    let output = ''
    let originalValues = [smalStringEnable[1], capitalStringEnable[1], numberEnable[1], specialCharEnable[1]]
    let functionsControl = [smalStringEnable, capitalStringEnable, numberEnable, specialCharEnable]
    let maxLoops

    //   console.log('values received: ' + smalStringEnable + ' - ' + capitalStringEnable + ' - ' + numberEnable + ' - ' + specialCharEnable)
    //   console.table(functionsControl)

    for (let i = 0; i < passLength; i++) {
        //   console.log('password length now is ' + i)

        // sortear uma função
        let prizeFunction = luckyNumber(0, 4, 4 + 1)
        //   console.log('prizeFunction: ' + prizeFunction + ' (' + functionNames[prizeFunction] + ')')

        /// verificar se a função é valida
        let isValid = functionsControl[prizeFunction][0]
        let numberOfTurns = functionsControl[prizeFunction][1]
        let message = functionsControl[prizeFunction][0] + ' ~ ' + functionsControl[prizeFunction][1]

        //   console.log((isValid) ? 'validado >> ' + message : 'função selectionada não é valida >> ' + message)
        //   console.log('number of turns for this function is ' + numberOfTurns)

        if (numberOfTurns === 0) isValid = false

        //  enquanto não for valida sorteia uma nova
        maxLoops = 0
        while (!isValid) {
            prizeFunction = luckyNumber(0, 4, 4 + 1)
            isValid = functionsControl[prizeFunction][0]    // ligado ou desligado
            numberOfTurns = functionsControl[prizeFunction][1]  //numero de repeticoes

            if (isValid && numberOfTurns !== 0) isValid = true
            else isValid = false

            //   console.log('try function ' + functionNames[prizeFunction] + ' \nid: ' + prizeFunction + '\ncurrent ' +
            //   ((isValid) ? 'valid' : 'not valid') + '\nwith ' + ((numberOfTurns === -1) ? 'unlimited' : numberOfTurns) + ' turns left')

            maxLoops++
            if (maxLoops > 200) {
                errorMessage = 'error while validating'
                //   console.log('Something wrong happen')
                break
            }
        }

        const myFunc = functionArrays(prizeFunction)

        let currentValue = myFunc(output.split(''))

        //   console.log('CURRENT CHAR IS: ' + currentValue)

        if (functionsControl[prizeFunction][1] > 0)
            functionsControl[prizeFunction][1]--
        output = output.concat(currentValue)
    }
    if (errorMessage !== 'noerror') output = errorMessage

    smalStringEnable[1] = originalValues[0]
    capitalStringEnable[1] = originalValues[1]
    numberEnable[1] = originalValues[2]
    specialCharEnable[1] = originalValues[3]

    return output
}
