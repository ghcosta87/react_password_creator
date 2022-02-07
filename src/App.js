// import './App.css'
//  react
import React,{useState} from 'react'

//  my constants
import myStrings from './Library/Constants/AppStrings'
import myImages from './Library/Constants/AppImages'

//  my variables
import mySettings from './Library/Constants/AppSettings'

//  my components
import Header from './Components/Header'
import Body from './Components/Body'

//  my functions
import { newPassword } from './Logic/StringGenerator'

//  my css's
import './Library/Styles/Text.css'
import './Library/Styles/Containers.css'
import './Library/Styles/Images.css'

const names = myStrings.names
const language = mySettings.languages

export default function App() {
    const [passLength,setLength]=useState(10)

    return (
        <html>
            <Header
                cssText='text'
                cssImg='logo'
                title={names._appTitle[language._portuguese]}
                // logo={myImages.icon._logo}
                 />
            <Body
                cssContainer='common'
                text='Password generator under construction'
                func={newPassword} param={passLength} varFunc={setLength}/>
        </html>
    )
}

/*
funções javascript ficam entre
'export default f(){' e 'return' 
para utilizar dentro do return colocar entre {}
*/
