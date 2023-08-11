import React from 'react'
import Structure from '../Structure'
import Link from 'next/link'

interface LC_Inter {
    style?: string
    children: React.ReactNode
    href: string
    prefetch?: boolean
    activePath: string
}

export default function CustomLink({ href, prefetch = false, style = "contained", children, activePath }: LC_Inter) {

    let isActive = activePath.includes(href)

    return (
        <>
            <Link href={href} prefetch={prefetch} >
                <Structure style={style} isActive={isActive} >
                    {children}
                </Structure>
            </Link>
        </>

    )
}
