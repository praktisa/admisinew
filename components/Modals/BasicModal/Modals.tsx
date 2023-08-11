
import React, { ReactNode } from 'react'

import M from './Modals.module.css'
import Blur from './Blur/Blur'
import ModalContainer from './Container/BlurContainer'


interface Inter__Modals {
    children: ReactNode
}

export default function Modals({ children }: Inter__Modals) {


    return (
        <>
            <Blur>
                <ModalContainer>
                    {/* <div className={M['layout__content']} > */}
                    {children}
                    {/* </div> */}
                </ModalContainer>
            </Blur>
        </>
    )
}
