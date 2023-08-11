'use client'
import React, { Fragment, useEffect, useState } from 'react'
import K from './Kalender.module.css'
import useCalendar from './_function/useCalendar'
import { setCookie } from 'cookies-next'

interface TanggalTerpinjam {
    Peminjam: string
    Status: string
    TanggalPinjam: string
}

interface Peminjam {
    children: React.ReactNode
}

export default function Kalender({ terpinjam = [], onClose }: any) {

    const { CurrentDate, ChosenDate, HeadCalendar, CreateCalendar, ChangeMonth, ChoseDate } = useCalendar(new Date())

    const [DataTerpinjam, setDataterpinjam] = useState<TanggalTerpinjam[]>([])


    useEffect(() => {
        setCookie("kalender", ChosenDate)
    }, [ChosenDate])

    useEffect(() => {
        let ArrObj = []
        if (terpinjam.length != 0) {
            for (var i = 0; i < terpinjam.length; i++) {
                let StringTanggal = JSON.parse(terpinjam[i]['STR_TGL'])

                for (var u = 0; u < StringTanggal.length; u++) {
                    let DataKonversi = {
                        "Peminjam": terpinjam[i]['STR_PEMINJAM'],
                        "Status": terpinjam[i]['STR_STATUS'],
                        "TanggalPinjam": StringTanggal[u]
                    }
                    ArrObj.push(DataKonversi)
                }
            }
        }

        setDataterpinjam(ArrObj)
    }, [terpinjam])

    function Peminjam({ children }: Peminjam) {
        return (
            <div className={K['Peminjam']} >
                {children}
            </div>
        )
    }


    return (
        <>
            <div className={K['layout']} >
                <div className={K['layout__header']}>

                    <h2>{HeadCalendar()}</h2>
                    <div onClick={() => ChangeMonth(1)} className={K['arrow']} >&#8593;</div>
                    <div onClick={() => ChangeMonth(-1)} className={K['arrow']} >&#8595;</div>
                    {/* <div className={K['arrow']} onClick={onClose} >&#x2715;</div> */}

                </div>

                <div className={K['layout__tanggal']}>
                    <div>Min</div>
                    <div>Sen</div>
                    <div>Sel</div>
                    <div>Rab</div>
                    <div>Kam</div>
                    <div>Jum</div>
                    <div>Sab</div>

                    {/* optimasi list tanggal diawah ini sur */}
                    {
                        CreateCalendar.map((tangs, i) => {

                            let id = new Date(tangs).toString()
                            let Display = new Date(tangs).getDate()
                            let Sekarang = new Date().setHours(0, 0, 0, 0) === new Date(tangs).setHours(0, 0, 0, 0)

                            let CheckBox_Tanggal = ChosenDate.includes(id) ? true : false
                            let Perbedaan_Bulan = new Date(tangs).getMonth() != CurrentDate.getMonth() ? K['BedaBulan'] : null

                            let obj = DataTerpinjam.find(o => o.TanggalPinjam === tangs);

                            let Terpinjam = false
                            if (obj != undefined) {
                                let Compare = new Date(obj.TanggalPinjam).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
                                Terpinjam = Compare === true ? false : true
                                // Apabila Tanggal Booking lebih kecil dari tanggal sekarang maka Terpinjam tidak dimunculkan
                            }

                            let Klasifikasi_Tanggal = ChosenDate.includes(id)
                                ? K['terpilih']
                                : Sekarang
                                    ? K['HariIni']
                                    : K['tidakTerpilih']

                            let Disable = new Date().setHours(0, 0, 0, 0) > new Date(tangs).setHours(0, 0, 0, 0) || Terpinjam
                            let Disable_Style = Disable ? K['BedaBulan'] : null

                            let Terpinjam_Style = Terpinjam ? K['Terpinjam'] : null

                            return (
                                <Fragment key={id}>
                                    <div className={`${Perbedaan_Bulan}`} >
                                        {
                                            Terpinjam === true
                                                ?
                                                <Peminjam>{obj?.Peminjam}</Peminjam>
                                                :
                                                <>
                                                    <input
                                                        id={`${i}`}
                                                        type='checkbox'
                                                        className={K['none']}
                                                        checked={CheckBox_Tanggal}
                                                        onChange={(e: any) => { ChoseDate(e, id); }}
                                                        disabled={Disable}
                                                    />
                                                    {
                                                        //@ts-ignore
                                                    }
                                                    <label
                                                        htmlFor={`${i}`}
                                                        className={`${K['tanggal__display']} ${Klasifikasi_Tanggal} ${Disable_Style} ${Terpinjam_Style}`}
                                                    // data-peminjam={Terpinjam === true ? obj?.Peminjam : null}
                                                    >
                                                        {Display}
                                                    </label>
                                                </>
                                        }


                                    </div>
                                </Fragment>
                            )
                        })
                    }


                </div>
            </div>


        </>
    )
}
