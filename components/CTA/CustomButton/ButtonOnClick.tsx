import React from 'react'
import Structure from '../Structure'

interface ButtonOnClick__inter {
    onClick: any,
    children: React.ReactNode,
    style: string
}

export default function ButtonOnClick({ onClick, children, style = 'contained' }: ButtonOnClick__inter) {
    return (
        <>

            <button onClick={onClick}>
                <Structure style={style}>
                    {children}
                </Structure>
            </button>
        </>
    )
}
