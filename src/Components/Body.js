import React, { useState } from 'react'

export default function Body(props) {
    const [value, setValue] = useState('')
    const [boxValue, setBoxValue] = useState({
        'smallString': [true, -1],
        'capitalString': [true, -1],
        'numbers': [true, -1],
        'specialChar': [true, -1]
    })

    // const optionHandler = () => {
    //     // smallString
    //     let x = document.getElementById("smallString");
    //     let c = document.createElement("option");
    //     c.text = "Kiwi";
    //     x.options.add(c, 1);
    // }

    const boxValueHandler = (myValue) => {
        let objName = myValue.target.getAttribute('name')
        let numberObjName = myValue.target.getAttribute('name')

        switch (numberObjName) {
            case 'smallStringLimit': objName = 'smallString'
                break
            case 'capitalStringLimit': objName = 'capitalString'
                break
            case 'numbersLimit': objName = 'numbers'
                break
            case 'specialCharLimit': objName = 'specialChar'
                break
        }

        let boolValue = boxValue[objName][0]
        let intValue = boxValue[objName][1]

        if (myValue.target.value == 'true') boolValue = true
        else if (myValue.target.value == 'false') boolValue = false
        else if (myValue.target.value == 'sem limite') intValue = -1
        else intValue = parseInt(myValue.target.value)

        console.log('typeof: ' + typeof myValue.target.value)
        console.log('value: ' + myValue.target.value)
        console.log('converted: ' + typeof parseInt(myValue.target.value))


        switch (objName) {
            case 'smallString':
                setBoxValue({ 'smallString': [boolValue, intValue], 'capitalString': boxValue.capitalString, 'numbers': boxValue.numbers, 'specialChar': boxValue.specialChar })
                break
            case 'capitalString':
                setBoxValue({ 'smallString': boxValue.smallString, 'capitalString': [boolValue, intValue], 'numbers': boxValue.numbers, 'specialChar': boxValue.specialChar })
                break
            case 'numbers':
                setBoxValue({ 'smallString': boxValue.smallString, 'capitalString': boxValue.capitalString, 'numbers': [boolValue, intValue], 'specialChar': boxValue.specialChar })
                break
            case 'specialChar':
                setBoxValue({ 'smallString': boxValue.smallString, 'capitalString': boxValue.capitalString, 'numbers': boxValue.numbers, 'specialChar': [boolValue, intValue] })
                break
        }
    }

    let parameters = [props.param]

    return (
        <section className={props.cssContainer}>
            <h2>Body.js</h2>
            <br />
            <p>{props.text}</p>
            <table>
                <tr>
                    <th>Letras minúsculas</th>
                    <th></th>
                    <th>
                        <select value={boxValue.smallString[0]} name='smallString' onChange={(data) => boxValueHandler(data)}>
                            <option value={true} >Ativado</option>
                            <option value={false} >Desativado</option>
                        </select>
                    </th>
                    <th>
                        <select value={boxValue.smallString[1]} name='smallStringLimit' onChange={(data) => boxValueHandler(data)}>
                            <option value='sem limite'>sem limite</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </th>
                </tr>

                <tr>
                    <th>Letras maiúsculas</th>
                    <th></th>
                    <th>
                        <select value={boxValue.capitalString[0]} name='capitalString' onChange={(data) => boxValueHandler(data)}>
                            <option value={true} >Ativado</option>
                            <option value={false} >Desativado</option>
                        </select>
                    </th>
                    <th>
                        <select value={boxValue.capitalString[1]} name='capitalStringLimit' onChange={(data) => boxValueHandler(data)}>
                            <option value='sem limite'>sem limite</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>Números</th>
                    <th></th>
                    <th>
                        <select value={boxValue.numbers[0]} name='numbers' onChange={(data) => boxValueHandler(data)}>
                            <option value={true} >Ativado</option>
                            <option value={false} >Desativado</option>
                        </select>
                    </th>
                    <th>
                        <select value={boxValue.numbers[1]} name='numbersLimit' onChange={(data) => boxValueHandler(data)}>
                            <option value='sem limite'>sem limite</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>Caracteres especiais</th>
                    <th></th>
                    <th>
                        <select value={boxValue.specialChar[0]} name='specialChar' onChange={(data) => boxValueHandler(data)}>
                            <option value={true} >Ativado</option>
                            <option value={false} >Desativado</option>
                        </select>
                    </th>
                    <th>
                        <select value={boxValue.specialChar[1]} name='specialCharLimit' onChange={(data) => boxValueHandler(data)}>
                            <option value='sem limite'>sem limite</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <td>
                        Current password length is
                    </td>
                    <td></td>
                    <td> {parameters[0]}</td>
                </tr>
            </table>
            <br />
            <table>
                <td>
                    <button onClick={() => { }}>PIN</button>
                </td>
                <td></td>
                <td>
                    <button onClick={() => { }}>9 digitos c/ especial</button>
                </td>
                <td></td>
                <td>
                    <button onClick={() => { }}>9 digitos s/ especial</button>
                </td>
            </table>
            <br />
            <button onClick={() => { setValue(props.varFunc(parameters[0] + 1)) }}>
                Increase to {parameters[0] + 1}
            </button>
            <br />
            <button onClick={() => { setValue(props.varFunc(parameters[0] - 1)) }}>
                Decrease to {parameters[0] - 1}
            </button>
            <br />
            <button onClick={() => {
                console.log('before:')
                console.table(boxValue)
                const tmpValue=()=>{return boxValue}
                var myValue=tmpValue()
                setValue(props.func(parameters[0], boxValue.smallString, boxValue.capitalString, boxValue.numbers, boxValue.specialChar))
                setBoxValue(myValue)
                console.log('copy after:')
                console.table(myValue)
                console.log('original after:')
                console.table(boxValue)
            }}>
                Generate
            </button>
            <br />
            {/* <button onClick={() => optionHandler()}>
                teste options
            </button> */}
            <p>Your pass is: {value}</p>
            <a href='https://google.com.br' target='_blank' rel="noreferrer">Google</a>
        </section >
    )
}