import React from 'react'
import KD from './KendaraanDinas.module.css'

interface children {
    children: React.ReactNode

}

export default function Layout_KendaraanDinas({ children }: children) {
    return (
        <>
            <div className={KD['layout']}>
                {children}
            </div>
        </>
    )
}
