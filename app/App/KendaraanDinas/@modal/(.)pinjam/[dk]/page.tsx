import React from 'react'
import GetDetailKD from '@DB_KendaraanDinas/GetDetailKD'
import GetTerpinjamMobil from '@DB_KendaraanDinas/Pinjam/GetTerpinjamMobil'

import Shimerloading from '@/components/loading/Shimerloading'
import DetailNew from '@/content/KendaraanDinas/Detail/DetailNew'
import GetListKDAll_ID from '@/database/_static/KendaraanDinas/GetListKDAll_ID'


interface ParamPinjam {
    params: { dk: string }
}


export default async function Page({ params }: ParamPinjam) {

    const Kendaraan: any = await GetDetailKD(params.dk, false)
    const tgl: any = await GetTerpinjamMobil(params.dk, false)

    return (
        <>

            <Shimerloading loop={1} />
            <DetailNew data={Kendaraan} terpinjam={tgl} tag="link" />
        </>
    )
}


export async function generateStaticParams() {
    const ListDK = await GetListKDAll_ID(false)

    return ListDK.map((dk: any) => ({
        dk: dk.ID,
    }))
}
