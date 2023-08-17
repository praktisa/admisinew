import React from 'react'
import SL from './S_login.module.css'

interface ContainerLogin_inter {
    children: React.ReactNode
}

export default function ContainerLogin({ children }: ContainerLogin_inter) {
    return (
        <>
            <div className={SL['layout']}>
                <div className={SL['container']}>
                    <h1>Admisi | Login</h1>
                    {children}
                </div>
            </div>
        </>
    )
}
