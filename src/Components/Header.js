import React from 'react'
import { Dropdown } from 'react-bootstrap/'

export default function Header(props) {
    return (
        <section>
            <div className={props.css.root[props.scheme]}>
                <div className={props.css.header_child_column_a}>
                    <h1 className={props.cssText}>{props.title}</h1>
                </div>
                <div className={props.css.header_child_column_b}>
                    <Dropdown>
                        <Dropdown.Toggle id="lang-select" onChange={() => { }}>
                            {props.stringList.languages[props.lang]}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={
                                () => { props.funSetLang(props.langOptions._portuguese) }
                            }>{props.stringList.languages[props.langOptions._portuguese]}
                            </Dropdown.Item>
                            <Dropdown.Item onClick={
                                () => { props.funSetLang(props.langOptions._english) }
                            }> {props.stringList.languages[props.langOptions._english]}
                            </Dropdown.Item>
                            <Dropdown.Item onClick={
                                () => { props.funSetLang(props.langOptions._spanish) }
                            }>{props.stringList.languages[props.langOptions._spanish]}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={props.css.header_child_column_b}>
                    <Dropdown>
                        <Dropdown.Toggle id="theme-select" onChange={() => { }}>
                            {(props.scheme) ? props.stringList.colorScheme.dark[props.lang] : props.stringList.colorScheme.normal[props.lang]}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={
                                () => { props.funSetScheme(props.schemeOptions._standard) }
                            }>
                                {props.stringList.colorScheme.normal[props.lang]}
                            </Dropdown.Item>
                            <Dropdown.Item onClick={
                                () => { props.funSetScheme(props.schemeOptions._dark) }
                            }>
                                {props.stringList.colorScheme.dark[props.lang]}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </section>
    )
}