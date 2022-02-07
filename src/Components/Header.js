import React from 'react'

export default function Header(props) {
    return (
        <section>
            <header>
                <p className={props.cssText}>{props.title}</p>
            </header>
            <section>
                {/* <img className={props.cssImg} src={props.logo} alt='logo' /> */}
            </section>
        </section >
    )
}