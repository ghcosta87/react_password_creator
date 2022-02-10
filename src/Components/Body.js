import React, { useState } from 'react'

export default function Body(props) {
    const [value, setValue] = useState('')
    const [boxValue, setBoxValue] = useState({
        'smallString': [true, -1],
        'capitalString': [true, -1],
        'numbers': [true, -1],
        'specialChar': [true, -1]
    })
    const boxValueHandler = (myValue) => {
        console.table(boxValue)
        let objName = myValue.target.getAttribute('name')
        let numberObjName = myValue.target.getAttribute('name')

        console.log(myValue)
        console.log(objName)

        switch (numberObjName) {
            case 'smallStringLimit': objName = 'smallString'
                break
            case 'capitalStringLimit': objName = 'capitalString'
                break
            case 'numbersLimit': objName = 'numbers'
                break
            case 'specialCharLimit': objName = 'specialChar'
                break
            default:
        }

        let boolValue = boxValue[objName][0]
        let intValue = boxValue[objName][1]

        if (myValue.target.value === 'true') boolValue = true
        else if (myValue.target.value === 'false') boolValue = false
        else if (myValue.target.value === 'sem limite') intValue = -1
        else intValue = parseInt(myValue.target.value)

        // console.log('typeof: ' + typeof myValue.target.value)
        // console.log('value: ' + myValue.target.value)
        // console.log('converted: ' + typeof parseInt(myValue.target.value))


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
            default:
        }
    }
    const [buttonsControl, setClick] = useState([false, false, false, false])
    let parameters = [props.param]

    return (
        <section className={props.cssContainer[props.test]}>
            <div className={props.cssRow[props.test]}>
                <button
                    name='smallString'
                    value={buttonsControl[0]}
                    className={(buttonsControl[0]) ? props.cssMButton.unChecked[props.test] : props.cssMButton.checked[props.test]}
                    onClick={(data) => {
                        setClick([!buttonsControl[0], buttonsControl[1], buttonsControl[2], buttonsControl[3]])
                        boxValueHandler(data)
                    }}>
                    {props.stringList.charOptions.small[props.lang]}
                </button>
                <div className={props.cssColumn[props.test]}>
                    <select className={props.cssSButton[props.test]} value={boxValue.smallString[1]} name='smallStringLimit' onChange={(data) => boxValueHandler(data)}>
                        <option value='sem limite'>sem limite</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className={props.cssColumn[props.test]}>
                    <button className={props.cssSButton[props.test]}>up</button>
                    <button className={props.cssSButton[props.test]}>down</button>
                </div>
            </div>
            <div className={props.cssRow[props.test]}>
                <button
                    name='capitalString'
                    value={buttonsControl[1]}
                    className={(buttonsControl[1]) ? props.cssMButton.unChecked[props.test] : props.cssMButton.checked[props.test]}
                    onClick={(data) => {
                        setClick([buttonsControl[0], !buttonsControl[1], buttonsControl[2], buttonsControl[3]])
                        boxValueHandler(data)
                    }}>
                    {props.stringList.charOptions.capital[props.lang]}
                </button>
                <div className={props.cssColumn[props.test]}>
                    <select className={props.cssSButton[props.test]} value={boxValue.capitalString[1]} name='capitalStringLimit' onChange={(data) => boxValueHandler(data)}>
                        <option value='sem limite'>sem limite</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className={props.cssColumn[props.test]}>
                    <button className={props.cssSButton[props.test]}>up</button>
                    <button className={props.cssSButton[props.test]}>down</button>
                </div>
            </div>
            <div className={props.cssRow[props.test]}>
                <button
                    name='numbers'
                    value={buttonsControl[2]}
                    className={(buttonsControl[2]) ? props.cssMButton.unChecked[props.test] : props.cssMButton.checked[props.test]}
                    onClick={(data) => {
                        setClick([buttonsControl[0], buttonsControl[1], !buttonsControl[2], buttonsControl[3]])
                        boxValueHandler(data)
                    }}>
                    {props.stringList.charOptions.number[props.lang]}
                </button>
                <div className={props.cssColumn[props.test]}>
                    <select className={props.cssSButton[props.test]} value={boxValue.numbers[1]} name='numbersLimit' onChange={(data) => boxValueHandler(data)}>
                        <option value='sem limite'>sem limite</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className={props.cssColumn[props.test]}>
                    <button className={props.cssSButton[props.test]}>up</button>
                    <button className={props.cssSButton[props.test]}>down</button>
                </div>
            </div>
            <div className={props.cssRow[props.test]}>
                <button
                    name='specialChar'
                    value={buttonsControl[3]}
                    className={(buttonsControl[3]) ? props.cssMButton.unChecked[props.test] : props.cssMButton.checked[props.test]}
                    onClick={(data) => {
                        setClick([buttonsControl[0], buttonsControl[1], buttonsControl[2], !buttonsControl[3]])
                        boxValueHandler(data)
                    }}>
                    {props.stringList.charOptions.special[props.lang]}
                </button>
                <div className={props.cssColumn[props.test]}>
                    <select className={props.cssSButton[props.test]} value={boxValue.specialChar[1]} name='specialCharLimit' onChange={(data) => boxValueHandler(data)}>
                        <option value='sem limite'>sem limite</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className={props.cssColumn[props.test]}>
                    <button className={props.cssSButton[props.test]}>up</button>
                    <button className={props.cssSButton[props.test]}>down</button>
                </div>
            </div>
            <br />
            <h4>Current password length is {parameters[0]}</h4>

            <div  className={props.cssContainer[props.test]} flex-wrap='wrap'>
                <button onClick={() => { }}>PIN</button>
                <button onClick={() => { }}>9 digitos c/ especial</button>
                <button onClick={() => { }}>9 digitos s/ especial</button>
                <button onClick={() => { setValue(props.varFunc(parameters[0] + 1)) }}>
                    Increase to {parameters[0] + 1}
                </button>
                <button onClick={() => { setValue(props.varFunc(parameters[0] - 1)) }}>
                    Decrease to {parameters[0] - 1}
                </button>
                <br/>
                <button className={props.cssMButton.checked[props.test]} onClick={() => {
                    console.log('before:')
                    console.table(boxValue)
                    const tmpValue = () => { return boxValue }
                    var myValue = tmpValue()
                    setValue(props.func(parameters[0], boxValue.smallString, boxValue.capitalString, boxValue.numbers, boxValue.specialChar))
                    setBoxValue(myValue)
                    console.log('copy after:')
                    console.table(myValue)
                    console.log('original after:')
                    console.table(boxValue)
                }}>
                    Generate
                </button>
                <p>Your pass is: {value}</p>
            </div>
            <a href='https://google.com.br' target='_blank' rel="noreferrer">Google</a>
        </section >
    )
}