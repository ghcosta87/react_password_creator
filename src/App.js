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

export default function App() {
    const [passLength, setLength] = useState(12)

    const [language, setLang] = useState(mySettings.languages._english)

    const [colorScheme, setScheme] = useState(mySettings.colorScheme._standard)

    const currentLanguage = () => {
        switch (language) {
            case myStrings.languages.portuguese: return 0
            case myStrings.languages.english: return 1
            case myStrings.languages.spanish: return 2
            default: return null
        }
    }

    return (
        <main className='html'>
            <Header
                css={{
                    root: ['header_root', ''],
                    header_child_columns: 'header_child_columns',
                    header_child_column_a: 'header_child_column_a',
                    header_child_column_b: 'header_child_column_b'
                }}

                cssText=''
                cssPass=''
                cssPassContainer=''
                cssImg=''
                cssContainer={['', '']}
                cssChildren=''
                title={names._appTitle[currentLanguage()]}
                logo={myImages.icon._logo}
                funSetLang={setLang}
                lang={language}
                langOptions={mySettings.languages}
                scheme={colorScheme}
                schemeOptions={mySettings.colorScheme}
                funSetScheme={setScheme}
                stringList={myStrings}
            />
            <Body
                css={{
                    body_section: 'body_section',
                    length_set: 'length_set',
                    spacer: 'spacer',
                    spacer_root: 'spacer_root',
                    root: ['body_root', ''],
                    body_child_lines: 'body_child_lines',
                    body_child_column1: 'body_child_column1',
                    body_child_column2: 'body_child_column2',
                    body_child_column3: 'body_child_column3',
                    button1: {
                        checked: ['button1_checked', ''], unChecked: ['button1_unchecked', ''],
                        selection_box: 'selection_box'
                    },
                    p1: 'p1',
                    p2: 'p2'
                }}

                cssContainer={['', '']}
                cssRow={['', '']}
                cssColumn={['', '']}
                cssMButton={{ checked: ['', ''], unChecked: ['', ''] }}
                cssSButton={['', '']}
                cssPButton={['', '']}
                stringList={myStrings}
                lang={language}
                test={colorScheme}
                // text='Password generator under construction'
                func={newPassword} param={passLength} varFunc={setLength} />
            <Footer
                css={{ root: ['footer_root', ''] }}
            />
        </main>
    )
}