import React from 'react'
import SD from './S_Detail.module.css'


interface HeadDetail__inter {
    nama: string
    plat: string
}

export function HeadDetail({ nama, plat }: HeadDetail__inter) {
    return (
        <>
            <div className={SD['Layout']} >
                <span className={SD['none']}></span>
                <span className={SD['Left']}></span>
                <div className={SD['HeadDetail']}>
                    <h2>{nama}</h2>
                    <h3>{plat}</h3>
                </div>
                <span className={SD['Right']}>

                </span>
            </div>


        </>
    )
}

interface LayoutOption__inter {
    children: React.ReactNode
    // plat: string
}

export function LayoutForm({ children }: LayoutOption__inter) {

    return (
        <>
            <div className={SD['LayoutForm']} >
                {children}
            </div>
        </>
    )
}

