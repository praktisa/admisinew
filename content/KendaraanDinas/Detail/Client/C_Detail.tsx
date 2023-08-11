'use client'
import React, { useCallback } from 'react'
import Link from 'next/link'
import CD from './C_Detail.module.css'
import ButtonOnClick from '@/components/CTA/CustomButton/ButtonOnClick'
import { useRouter } from 'next/navigation'

interface PopUp {
    namePop: string
    children: React.ReactNode

}

export function PopUpForm({ namePop, children }: PopUp) {
    return (
        <>
            <div className={CD['PopUpForm']} >
                <span>{namePop}</span>
            </div>
        </>
    )
}



export function ActionForm() {

    const router = useRouter()
    const Kembali = useCallback(() => {
        router.back()
    }, [router])

    return (
        <>
            <div className={CD['ActionForm']} >
                <div className={CD['Action__back']} >
                    <ButtonOnClick style={'text'} onClick={() => Kembali()} >
                        &#x2190; kembali
                    </ButtonOnClick>
                </div>
                <div className={CD['Action__submit']} >
                    <ButtonOnClick style={'contained'} onClick={() => Kembali()} >
                        Pinjam
                    </ButtonOnClick>
                </div>
            </div>
        </>
    )
}

export function ButtonBack() {

    const router = useRouter()
    const Kembali = useCallback((e: any) => {
        e.preventDefault()
        router.push("http://localhost:3000/App/KendaraanDinas/")
    }, [router])

    return (
        <>
            <Link href={'/App/KendaraanDinas/'} >
                <button className={CD['ButtonBack']} >
                    &#x2715; {asu}
                </button>
            </Link>

        </>
    )
}