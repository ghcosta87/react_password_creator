// import './App.css'
//  react
import React, { useState } from 'react'

//  my constants
import myStrings from './Library/Constants/AppStrings'
import myImages from './Library/Constants/AppImages'

//  my variables
import mySettings from './Library/Constants/AppSettings'

//  my components
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

//  my functions
import { newPassword } from './Logic/StringGenerator'

//  my css's
import './Library/Styles/Text.css'
import './Library/Styles/Containers.css'
import './Library/Styles/Images.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const names = myStrings.names
const language = mySettings.languages

export default function App() {
    const [passLength, setLength] = useState(10)

    return (
        <main>
            <Header
                cssText='text'
                cssImg='logo'
                cssContainer='header_container'
                cssChildren='header_column'
                title={names._appTitle[language._portuguese]}
                logo={myImages.icon._logo2}
            />
            <Body
                cssContainer='common'
                // text='Password generator under construction'
                func={newPassword} param={passLength} varFunc={setLength} />
            {/* <Footer /> */}
        </main>
    )
}

/*
funções javascript ficam entre
'export default f(){' e 'return' 
para utilizar dentro do return colocar entre {}
*/
