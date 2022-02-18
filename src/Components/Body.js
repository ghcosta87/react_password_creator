import React, { useState } from 'react'
import { Dropdown, Accordion, Button } from 'react-bootstrap/'

import CopyField from './CopyClass'
import '../Library/Styles/Text.css'
import '../Library/Styles/Containers.css'

import AppImages from '../Library/Constants/AppImages'

export default function Body(props) {
    const [value, setValue] = useState('')
    const [boxValue, setBoxValue] = useState({
        'smallString': [true, -1],
        'capitalString': [true, -1],
        'numbers': [true, -1],
        'specialChar': [true, -1]
    })
    const dropdownLimit = [1, 2, 3, 4, 5, 6, 7, 8]
    const boxValueHandler = (myValue) => {
        //   console.table(boxValue)
        let objName = myValue.target.getAttribute('name')
        let numberObjName = myValue.target.getAttribute('name')

        //   console.log(myValue)
        //   console.log(objName)

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

        // //   console.log('typeof: ' + typeof myValue.target.value)
        // //   console.log('value: ' + myValue.target.value)
        // //   console.log('converted: ' + typeof parseInt(myValue.target.value))


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
    const [buttonsControl, setClick] = useState([false, false, false, false, false])
    let parameters = [props.param]

    return (
        <section className={props.css.body_section} >

            <div className={props.css.root[0]}>

                <div className={props.css.body_child_lines}>

                    <div className={props.css.body_child_column1}>
                        <p1 className={props.css.p2}>
                            {props.stringList.charOptions.small[props.lang]}
                        </p1>
                    </div>

                    <div className={props.css.body_child_column2}>
                        <Button name='smallString'
                            value={buttonsControl[0]}
                            variant={(buttonsControl[0]) ? "outline-primary" : 'primary'}
                            onClick={(data) => {
                                setClick([!buttonsControl[0], buttonsControl[1], buttonsControl[2], buttonsControl[3], buttonsControl[4]])
                                boxValueHandler(data)
                            }}>
                            <p1 className={props.css.p1}>
                                {(buttonsControl[0]) ? 'desativado' : 'ativado'}</p1>
                        </Button>
                    </div>

                    {/* <div className={props.cssColumn[props.test]}>
                        <select className={props.cssSButton[props.test]} value={boxValue.smallString[1]} name='smallStringLimit' onChange={(data) => boxValueHandler(data)}>
                            <option value='sem limite'>sem limite</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div> */}

                    <div className={props.css.body_child_column3}>
                        <Dropdown className={props.css.button1.selection_box}>
                            <Dropdown.Toggle className={props.css.button1.selection_box} id="value-select" onChange={() => { }}>
                                <p1 className={props.css.p1}> sem limite </p1>
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                {
                                    dropdownLimit.map((i) => (
                                        <Dropdown.Item onClick={
                                            () => { }
                                        }> <p1 className={props.css.p1}> {i} </p1>
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

                <div className={props.css.body_child_lines}>

                    <div className={props.css.body_child_column1}>
                        <p1 className={props.css.p2}>
                            {props.stringList.charOptions.capital[props.lang]}
                        </p1>
                    </div>

                    <div className={props.css.body_child_column2}>
                        <Button name='capitalString'
                            value={buttonsControl[1]}
                            variant={(buttonsControl[1]) ? "outline-primary" : 'primary'}
                            onClick={(data) => {
                                setClick([buttonsControl[0], !buttonsControl[1], buttonsControl[2], buttonsControl[3], buttonsControl[4]])
                                boxValueHandler(data)
                            }}>
                            <p1 className={props.css.p1}>
                                {(buttonsControl[1]) ? 'desativado' : 'ativado'}</p1>
                        </Button>
                    </div>

                    <div className={props.css.body_child_column3}>
                        <Dropdown className={props.css.button1.selection_box}>
                            <Dropdown.Toggle className={props.css.button1.selection_box} id="value-select" onChange={() => { }}>
                                <p1 className={props.css.p1}>  sem limite </p1>
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                {
                                    dropdownLimit.map((i) => (
                                        <Dropdown.Item onClick={
                                            () => { }
                                        }> <p1 className={props.css.p1}> {i} </p1>
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

                <div className={props.css.body_child_lines}>

                    <div className={props.css.body_child_column1}>
                        <p1 className={props.css.p2}>
                            {props.stringList.charOptions.number[props.lang]}
                        </p1>
                    </div>

                    <div className={props.css.body_child_column2}>
                        <Button name='numbers'
                            value={buttonsControl[2]}
                            variant={(buttonsControl[2]) ? "outline-primary" : 'primary'}
                            onClick={(data) => {
                                setClick([buttonsControl[0], buttonsControl[1], !buttonsControl[2], buttonsControl[3], buttonsControl[4]])
                                boxValueHandler(data)
                            }}>
                            <p1 className={props.css.p1}>
                                {(buttonsControl[2]) ? 'desativado' : 'ativado'}</p1>
                        </Button>
                    </div>

                    <div className={props.css.body_child_column3}>
                        <Dropdown className={props.css.button1.selection_box}>
                            <Dropdown.Toggle className={props.css.button1.selection_box} id="value-select" onChange={() => { }}>
                                <p1 className={props.css.p1}>  sem limite </p1>
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                {
                                    dropdownLimit.map((i) => (
                                        <Dropdown.Item onClick={
                                            () => { }
                                        }> <p1 className={props.css.p1}> {i} </p1>
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

                <div className={props.css.body_child_lines}>

                    <div className={props.css.body_child_column1}>
                        <p1 className={props.css.p2}>
                            {props.stringList.charOptions.special[props.lang]}
                        </p1>
                    </div>

                    <div className={props.css.body_child_column2}>
                        <Button name='specialChar'
                            value={buttonsControl[3]}
                            variant={(buttonsControl[3]) ? "outline-primary" : 'primary'}
                            onClick={(data) => {
                                setClick([buttonsControl[0], buttonsControl[1], buttonsControl[2], !buttonsControl[3], buttonsControl[4]])
                                boxValueHandler(data)
                            }}>
                            <p1 className={props.css.p1}>
                                {(buttonsControl[3]) ? 'desativado' : 'ativado'}</p1>
                        </Button>
                    </div>

                    <div className={props.css.body_child_column3}>
                        <Dropdown className={props.css.button1.selection_box}>
                            <Dropdown.Toggle className={props.css.button1.selection_box} id="value-select" onChange={() => { }}>
                                <p1 className={props.css.p1}>  sem limite </p1>
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                {
                                    dropdownLimit.map((i) => (
                                        <Dropdown.Item onClick={
                                            () => { }
                                        }> <p1 className={props.css.p1}> {i} </p1>
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

                <br />
                <div className={props.css.spacer_root} >
                    <div className={props.css.spacer} ></div>
                </div>
                <br />

                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Predefinições comuns</Accordion.Header>
                        <Accordion.Body>

                            <div className='accordion_children'>
                                <Button
                                    className='accordion_button'
                                    onClick={() => {
                                        setBoxValue({
                                            'smallString': [false, -1],
                                            'capitalString': [false, -1],
                                            'numbers': [true, -1],
                                            'specialChar': [false, -1]
                                        })
                                        setClick([true, true, false, true])
                                        setValue(props.varFunc(6))
                                    }}>PIN</Button>
                                <Button
                                    className='accordion_button'
                                    onClick={() => {
                                        setBoxValue({
                                            'smallString': [true, -1],
                                            'capitalString': [true, -1],
                                            'numbers': [false, -1],
                                            'specialChar': [false, -1]
                                        })
                                        setClick([false, false, true, true])
                                        setValue(props.varFunc(6))
                                    }}>Somente letras<br />[fraca]</Button>
                                <Button
                                    className='accordion_button'
                                    onClick={() => {
                                        setBoxValue({
                                            'smallString': [true, -1],
                                            'capitalString': [true, 1],
                                            'numbers': [true, 1],
                                            'specialChar': [true, 1]
                                        })
                                        setClick([false, false, false, false])
                                        setValue(props.varFunc(6))
                                    }}>Completo simples <br /> [médio]
                                </Button>
                                <Button
                                    className='accordion_button'
                                    onClick={() => { }}> Padrão 4</Button>
                            </div>
                            <br />
                            <div className='accordion_children'>
                                <Button
                                    className='accordion_button'
                                    onClick={() => { }}> Padrão 5</Button>

                                <Button
                                    className='accordion_button'
                                    onClick={() => { }}> Padrão 6</Button>
                                <Button
                                    className='accordion_button'
                                    onClick={() => { }}> Padrão 7</Button>
                                <Button
                                    className='accordion_button'
                                    onClick={() => { }}> Padrão 8</Button>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <br />
                <div className={props.css.spacer_root} >
                    <div className={props.css.spacer} ></div>
                </div>
                <br />

                <div className={props.css.body_child_lines}>

                    <div className={props.css.body_child_column1}>
                        <h4 className={props.css.p2}> Password length: </h4>
                    </div>

                    <div className={props.css.body_child_column2}>
                        <input
                            id='passLength'
                            className={props.css.length_set}
                            type="number"
                            onChange={(data) => {
                                setValue(props.varFunc(data.target.value))
                            }}
                        />
                    </div>

                    <div className={props.css.body_child_column3}>
                        <Button name='clean'
                            variant='primary'
                            onClick={() => {
                                setBoxValue({
                                    'smallString': [true, -1],
                                    'capitalString': [true, -1],
                                    'numbers': [true, -1],
                                    'specialChar': [true, -1]
                                })
                                setClick([false, false, false, false, false])
                                setValue(props.varFunc(6))
                                setValue('')
                            }}>
                            <p1 className={props.css.p1}>Limpar campos</p1>
                        </Button>
                    </div>

                    {/* <div className={props.css.body_child_column3}>
                        <button
                            className={props.cssSButton[props.test]}
                            onClick={() => {
                                setValue(props.varFunc(parameters[0] + 1))
                            }}>︿</button>
                        <button
                            className={props.cssSButton[props.test]}
                            onClick={() => { setValue(props.varFunc(parameters[0] - 1)) }}>﹀</button>
                    </div> */}
                </div>

                <div className={props.css.body_child_lines}>
                    <Button
                        className={props.css.button1.selection_box}
                        variant='primary'
                        onClick={() => {
                            const tmpValue = () => { return boxValue }
                            var myValue = tmpValue()
                            setValue(props.func(parameters[0], boxValue.smallString, boxValue.capitalString, boxValue.numbers, boxValue.specialChar))
                            setBoxValue(myValue)
                        }}>
                        Generate
                    </Button>
                </div>

                <div className={props.css.body_child_lines}>
                    <CopyField password={value}
                        copy={AppImages.icon._copy} />
                </div>
            </div>

        </section >
    )
}


