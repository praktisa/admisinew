'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'

import D from './Detail.module.css'

// import TextArea from '@Components/Input/TextArea/TextArea'
// import ButtonBack from '@Components/Button/ButtonBack/ButtonBack'
// import Pinjam from '../Pinjam/Pinjam'

// const KalenderCookie = dynamic(() => import('@/app/feature/Components/Kalender/KalenderCookie'), {
//     loading: () => <p>Loading . . .</p>,
//     ssr: false
// })




interface Detail_Inter {
    data: any
    terpinjam: any
}



export default function Detail({ data, terpinjam }: Detail_Inter) {

    const { STR_NAMA, STR_PLAT, STR_IMG } = data

    const SliderRef = useRef<HTMLDivElement | null>(null)

    const PostRef = useRef<any>({
        Kalender: [],
        Tujuan: "",
        Rangka: ""
    })

    function ShowSlider(stat: boolean) {
        let Slider = SliderRef.current
        if (Slider) {
            Slider.style.transform = stat === true ? "scale(1)" : "scale(0)"

        }
    }

    //component ini pecah sur adi server dan client

    function FormSubmit() {
        return (
            <>
                <div className={D['head']}>
                    <h2>{STR_NAMA}</h2>
                    <h3>{STR_PLAT}</h3>
                </div>

                <div className={D['body']}>
                    <div className={D['datepick']}
                        onClick={() => ShowSlider(true)} >
                        Pilih Tanggal
                    </div>

                    <div className={D['destination']}
                        onClick={() => ShowSlider(true)} >
                        Pilih Tujuan
                    </div>

                    <div className={D['text']}>
                        {/* <TextArea label={"Tujuan pinjam"} /> */}
                    </div>

                </div>

                <div className={D['foot']}>
                    {/* <ButtonBack> &#x2190; kembali</ButtonBack>
                    <Pinjam PostData={ID} /> */}
                </div>
            </>
        )
    }


    return (
        <>
            <div className={D['position']} >
                <div className={D['grid__left']}>
                    <FormSubmit />
                </div>

                <div className={D['grid__right']} ref={SliderRef} >
                    {/* <KalenderCookie terpinjam={terpinjam} onClose={() => ShowSlider(false)} /> */}
                </div>

            </div>


        </>
    )
}
