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
// const language = mySettings.languages

export default function App() {
    const [passLength, setLength] = useState(13)
    const [language, setLang] = useState(mySettings.languages._english)
    const [colorScheme,setScheme]=useState(mySettings.colorScheme._standard)
    const currentLanguage = () => {
        switch (language) {
            case myStrings.languages.portuguese:return 0
                break
            case myStrings.languages.english:return 1
                break
            case myStrings.languages.spanish:return 2
                break
        }
    }

    return (
        <main>
            <Header
                cssText='text'
                cssImg='logo'
                cssContainer={['header_container','header_container_dark']}
                cssChildren='header_column'
                title={names._appTitle[currentLanguage()]}
                logo={myImages.icon._logo2}
                funSetLang={setLang}
                lang={language}
                langOptions={mySettings.languages}
                scheme={colorScheme}
                schemeOptions={mySettings.colorScheme}
                funSetScheme={setScheme}
                stringList={myStrings}
            />
            <Body
                cssContainer={['body_container','']}
                cssRow={['body_row','']}
                cssColumn={['body_column','']}
                cssMButton={{checked:['main_button_checked',''],unChecked:['main_button','']}}                
                cssSButton={['sub_button','']}                
                stringList={myStrings}
                lang={language}
                test={colorScheme}
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
