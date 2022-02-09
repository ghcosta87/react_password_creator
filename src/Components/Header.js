import React from 'react'
import { Container, Row, Col, Image, Dropdown } from 'react-bootstrap/'

export default function Header(props) {
    return (
        <section>
            <div className={props.cssContainer}>
                <div className={props.cssChildren}>
                    <img className={props.cssImg} src={props.logo} />
                </div>
                <div className={props.cssChildren}>
                    <h1 className={props.cssText}>{props.title}</h1>
                </div>
                <div className={props.cssChildren}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Portugues (Brasil)
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </section>

        // <Container fluid className="bg-primary" align='center' padding='10'>
        //     <div className="row align-items-center">
        //         <div className="col col-sm-1">
        //             <Image className={props.cssImg} src={props.logo} alt='logo' fluid='true' />
        //         </div>
        //         <div className="col">
        //             <a>Gerador de Senhas</a>
        //         </div>
        //         <div className="col-4">
        //             <Dropdown>
        //                 <Dropdown.Toggle variant="success" id="dropdown-basic">
        //                     Portugues (Brasil)
        //                 </Dropdown.Toggle>

        //                 <Dropdown.Menu>
        //                     <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        //                     <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
        //                 </Dropdown.Menu>
        //             </Dropdown>
        //         </div>
        //     </div>
        // </Container>        
    )
}